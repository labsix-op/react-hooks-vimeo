import VimeoPlayer from '@vimeo/player'
import { useEffect, useRef, useState } from 'react'

import {
  EMBED_OPTIONS_DEFAULT_VALUES,
  VIMEO_TO_REACT_EVENT_NAMES_MAP,
} from '../constants'
import { getUpdatePlayerHandler } from '../helpers/getUpdatePlayerHandler'
import { getVideoIdType } from '../helpers/getVideoIdType'

const PLAYBACK_TIME_INTERVAL = 1000

/**
 * A React hook that initializes and returns a Vimeo Player instance.
 *
 * @param {string|number} video - Vimeo video ID or URL.
 * @param {React.MutableRefObject} containerRef - Ref to a container DOM element where the player will be inserted.
 * @param {Object} options - Configuration options for the Vimeo Player and event handlers.
 * @param {Object} options.embedOptions - Configuration options for the Vimeo Player. Check `EMBED_OPTIONS_DEFAULT_VALUES` for defaults and option names.
 * @param {Object} options.events - Event handlers for Vimeo Player events. Check `VIMEO_TO_REACT_EVENT_NAMES_MAP` for event names and their corresponding handlers.
 * @returns {Vimeo.Player} - An instance of Vimeo Player.
 *
 */
export default function useVimeoPlayer(
  video,
  containerRef,
  { embedOptions = EMBED_OPTIONS_DEFAULT_VALUES, events = {} } = {}
) {
  const [vimeoPlayer, setVimeoPlayer] = useState(null)
  const playerRef = useRef(null)
  const intervalRef = useRef(null)
  const prevEmbedOptionsRef = useRef(embedOptions)

  const getInitialOptions = () => {
    const videoType = getVideoIdType(video)

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

  const updateEmbedOptions = (embedOptionsNames) =>
    embedOptionsNames.forEach(updateOption)

  const stopInterval = () => {
    clearInterval(intervalRef.current)
  }

  const handlePlaybackTimeReporting = (player, callback) => {
    stopInterval()
    intervalRef.current = setInterval(() => {
      player.getCurrentTime().then(callback)
    }, [PLAYBACK_TIME_INTERVAL])
  }

  useEffect(() => {
    playerRef.current = new VimeoPlayer(
      containerRef.current,
      getInitialOptions()
    )

    const { onPlaybackTimeReporting } = events
    Object.keys(VIMEO_TO_REACT_EVENT_NAMES_MAP).forEach((eventName) => {
      const reactName = VIMEO_TO_REACT_EVENT_NAMES_MAP[eventName]

      playerRef.current.on(eventName, (event) => {
        const handler = events[reactName]

        if (eventName === 'play' && onPlaybackTimeReporting) {
          handlePlaybackTimeReporting(
            playerRef.current,
            onPlaybackTimeReporting
          )
        }

        if (eventName === 'pause') {
          stopInterval()
        }

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

    return () => {
      playerRef.current?.destroy()
      if (intervalRef.current) {
        stopInterval()
      }
    }
  }, [containerRef])

  useEffect(() => {
    if (vimeoPlayer) {
      const { start, volume, playbackRate } = embedOptions

      if (typeof start === 'number') {
        vimeoPlayer.setCurrentTime(start)
      }

      if (typeof volume === 'number') {
        updateOption('volume')
      }

      if (typeof playbackRate === 'number') {
        updateOption('playbackRate')
      }

      const prevEmbedOptions = prevEmbedOptionsRef.current
      prevEmbedOptionsRef.current = embedOptions

      if (prevEmbedOptions) {
        const changes = Object.keys(embedOptions).filter(
          (name) => embedOptions[name] !== prevEmbedOptions[name]
        )

        updateEmbedOptions(changes)
      }
    }
  }, [embedOptions])

  return vimeoPlayer
}
