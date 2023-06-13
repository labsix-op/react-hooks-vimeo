import Vimeo from '@vimeo/player'
import { useEffect, useRef, useState } from 'react'

import {
  DEFAULT_VIMEO_PLAYER_OPTIONS,
  VIMEO_TO_REACT_EVENT_NAMES_MAP,
} from '../constants'
import { getUpdatePlayerHandler } from '../helpers/getUpdatePlayerHandler'

export default function useVimeoPlayer(
  video,
  containerRef,
  {
    options = {},
    embedOptions = DEFAULT_VIMEO_PLAYER_OPTIONS,
    events = {},
  } = {}
) {
  const [vimeoPlayer, setVimeoPlayer] = useState(null)
  const playerRef = useRef(null)
  const prevEmbedOptionsRef = useRef(embedOptions)

  const getInitialOptions = () => {
    const videoType = /^https?:/i.test(video) ? 'url' : 'id'

    return {
      [videoType]: video,
      autopause: embedOptions.autopause,
      autopip: embedOptions.autopip,
      autoplay: embedOptions.autoplay,
      background: embedOptions.background,
      byline: embedOptions.showByline,
      color: embedOptions.color,
      colors: embedOptions.colors,
      controls: embedOptions.controls,
      dnt: embedOptions.dnt,
      height: embedOptions.height,
      interactive_params: embedOptions.interactiveParams,
      keyboard: embedOptions.keyboard,
      loop: embedOptions.loop,
      maxheight: embedOptions.maxHeight,
      maxwidth: embedOptions.maxWidth,
      muted: embedOptions.muted,
      pip: embedOptions.pip,
      playsinline: embedOptions.playsInline,
      portrait: embedOptions.showPortrait,
      quality: embedOptions.quality,
      responsive: embedOptions.responsive,
      speed: embedOptions.speed,
      title: embedOptions.showTitle,
      texttrack: embedOptions.textTrack,
      transparent: embedOptions.transparent,
      width: embedOptions.width,
    }
  }

  const updateOption = (option) => {
    const value = embedOptions[option]
    const handler = getUpdatePlayerHandler[option]
    if (handler) {
      handler(vimeoPlayer, value)
    }
  }

  const updateEmbedOptions = (embedOptionsNames) => {
    embedOptionsNames.forEach(updateOption)
  }

  useEffect(() => {
    playerRef.current = new Vimeo(containerRef.current, getInitialOptions())

    Object.keys(VIMEO_TO_REACT_EVENT_NAMES_MAP).forEach((eventName) => {
      const reactName = VIMEO_TO_REACT_EVENT_NAMES_MAP[eventName]

      playerRef.current.on(eventName, (event) => {
        const handler = events[reactName]

        if (handler) {
          handler(event)
        }
      })
    })

    setVimeoPlayer(playerRef.current)

    const { onError, onReady } = events

    playerRef.current.ready().then(
      () => {
        if (onReady) {
          onReady(this.player)
        }
      },
      (err) => {
        if (onError) {
          onError(err)
        } else {
          throw err
        }
      }
    )

    const { start, volume, playbackRate } = options

    if (typeof start === 'number') {
      playerRef.current.setCurrentTime(start)
    }

    if (typeof volume === 'number') {
      updateOption('volume')
    }

    if (typeof playbackRate === 'number') {
      updateOption('playbackRate')
    }

    return () => {
      playerRef.current?.destroy()
    }
  }, [containerRef])

  useEffect(() => {
    const prevEmbedOptions = prevEmbedOptionsRef.current
    prevEmbedOptionsRef.current = embedOptions

    if (prevEmbedOptions) {
      const changes = Object.keys(embedOptions).filter(
        (name) => embedOptions[name] !== prevEmbedOptions[name]
      )

      updateEmbedOptions(changes)
    }
  }, [embedOptions])

  return vimeoPlayer
}
