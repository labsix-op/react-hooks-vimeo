/// <reference types="@types/vimeo__player" />
import VimeoPlayer from '@vimeo/player'
import { useEffect, useRef, useState } from 'react'

import {
  EMBED_OPTIONS_DEFAULT_VALUES,
  VIMEO_TO_REACT_EVENT_NAMES_MAP,
} from '../constants'
import { ControlOptions, EmbedOptions } from '../constants/types'
import {
  getUpdatePlayerHandler,
  updatePlayer,
} from '../helpers/getUpdatePlayerHandler'
import { getVideoIdType } from '../helpers/getVideoIdType'

const PLAYBACK_TIME_INTERVAL = 1000

type VimeoEvents = {
  [K in keyof typeof VIMEO_TO_REACT_EVENT_NAMES_MAP]?: (event?: any) => void
}

// Change this After PR be approved
interface ExtendedPlayerOptions extends VimeoPlayer.Options {
  autopip?: boolean | undefined
  colors: Array<string> | undefined
}
interface UseVimeoPlayerOptions {
  controlOptions?: ControlOptions
  embedOptions?: EmbedOptions
  events?: VimeoEvents
}

export default function useVimeoPlayer(
  video: string | number,
  containerRef: React.MutableRefObject<HTMLDivElement | null>,
  options: UseVimeoPlayerOptions = {}
): VimeoPlayer | null {
  const {
    embedOptions = EMBED_OPTIONS_DEFAULT_VALUES,
    controlOptions = {},
    events = {},
  } = options

  const [vimeoPlayer, setVimeoPlayer] = useState<VimeoPlayer | null>(null)
  const playerRef = useRef<VimeoPlayer | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const prevPlayerOptionsRef = useRef<EmbedOptions>(embedOptions)

  const getInitialOptions = (): ExtendedPlayerOptions => {
    const videoType = getVideoIdType(String(video))

    /// Options
    return {
      [videoType]: video,
      autopause: embedOptions.autopause, // check
      autopip: embedOptions.autopip,
      autoplay: embedOptions.autoplay, // check
      background: embedOptions.background, // check
      byline: embedOptions.showByline, // check
      color: embedOptions.color, // check
      colors: embedOptions.colors,
      controls: embedOptions.controls, // check
      dnt: embedOptions.dnt, // check
      height: embedOptions.height, // check
      interactive_params: embedOptions.interactiveParams, // check
      keyboard: embedOptions.keyboard, // check
      loop: embedOptions.loop, // check
      maxheight: embedOptions.maxHeight, // check
      maxwidth: embedOptions.maxWidth, // check
      muted: embedOptions.muted, // check
      pip: embedOptions.pip, // check
      playsinline: embedOptions.playsInline, // check
      portrait: embedOptions.showPortrait, // check
      quality: embedOptions.quality, // check
      responsive: embedOptions.responsive, // check
      speed: embedOptions.speed, // check
      title: embedOptions.showTitle, // check
      texttrack: embedOptions.textTrack, // check
      transparent: embedOptions.transparent, // check
      width: embedOptions.width, // check
    }
  }

  const updateOption = (
    option: keyof (EmbedOptions & ControlOptions)
  ): void => {
    const updateableOptions = { ...embedOptions, ...controlOptions }

    const value = updateableOptions[option]

    updatePlayer(vimeoPlayer, option, value)
  }

  const updateEmbedOptions = (
    embedOptionsNames: Array<keyof (EmbedOptions & ControlOptions)>
  ): void => embedOptionsNames.forEach(updateOption)

  const stopInterval = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current)
    }
  }

  const handlePlaybackTimeReporting = (
    player: VimeoPlayer,
    callback: () => void
  ) => {
    stopInterval()
    intervalRef.current = setInterval(() => {
      player.getCurrentTime().then(callback)
    }, PLAYBACK_TIME_INTERVAL)
  }

  useEffect(() => {
    const player = new VimeoPlayer(containerRef.current!, getInitialOptions())

    const { onPlaybackTimeReporting } = events
    Object.keys(VIMEO_TO_REACT_EVENT_NAMES_MAP).forEach((eventName) => {
      const reactName = VIMEO_TO_REACT_EVENT_NAMES_MAP[eventName]

      player.on(eventName as any, (event) => {
        const handler = events[reactName]

        if (eventName === 'play' && onPlaybackTimeReporting) {
          handlePlaybackTimeReporting(player, onPlaybackTimeReporting)
        }

        if (eventName === 'pause') {
          stopInterval()
        }

        if (handler) {
          handler(event)
        }
      })
    })

    setVimeoPlayer(player)
    playerRef.current = player

    const { onError, onReady } = events

    playerRef.current.ready().then(
      () => {
        if (onReady) {
          onReady(player)
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
      const { start, volume, playbackRate } = controlOptions

      if (typeof start === 'number') {
        vimeoPlayer.setCurrentTime(start)
      }

      if (typeof volume === 'number') {
        updateOption('volume')
      }

      if (typeof playbackRate === 'number') {
        updateOption('playbackRate')
      }

      const playerOptions = { ...embedOptions, ...controlOptions }
      const prevPlayerOptions = prevPlayerOptionsRef.current

      if (prevPlayerOptions) {
        const changes = Object.keys(playerOptions).filter(
          (name) =>
            (playerOptions as EmbedOptions & ControlOptions)[
              name as keyof (EmbedOptions & ControlOptions)
            ] !==
            (prevPlayerOptions as EmbedOptions & ControlOptions)[
              name as keyof (EmbedOptions & ControlOptions)
            ]
        )

        updateEmbedOptions(
          changes as Array<keyof (EmbedOptions & ControlOptions)>
        )
      }

      prevPlayerOptionsRef.current = playerOptions
    }
  }, [embedOptions])

  return vimeoPlayer
}
