/// <reference types="@types/vimeo__player" />
import VimeoPlayer from '@vimeo/player'
import { OPTIONS_NAMES } from '../constants'
import { ExtendedVimeoPlayer } from '../constants/types'

type size = number | string

export const getUpdatePlayerHandler = {
  [OPTIONS_NAMES.autopause]: (
    vimeoPlayer: ExtendedVimeoPlayer,
    value: boolean
  ) => {
    vimeoPlayer.setAutopause(value)
  },
  [OPTIONS_NAMES.color]: (vimeoPlayer: ExtendedVimeoPlayer, value: string) => {
    vimeoPlayer.setColor(value)
  },
  [OPTIONS_NAMES.loop]: (vimeoPlayer: ExtendedVimeoPlayer, value: boolean) => {
    vimeoPlayer.setLoop(value)
  },
  [OPTIONS_NAMES.volume]: (vimeoPlayer: ExtendedVimeoPlayer, value: number) => {
    vimeoPlayer.setVolume(value)
  },
  [OPTIONS_NAMES.paused]: (
    vimeoPlayer: ExtendedVimeoPlayer,
    value: boolean
  ) => {
    vimeoPlayer.getPaused().then((paused) => {
      if (value && !paused) {
        return vimeoPlayer.pause()
      }
      if (!value && paused) {
        return vimeoPlayer.play()
      }
      return null
    })
  },
  [OPTIONS_NAMES.width]: (vimeoPlayer: ExtendedVimeoPlayer, value: size) => {
    // eslint-disable-next-line no-param-reassign
    vimeoPlayer.element.width = value
  },
  [OPTIONS_NAMES.height]: (vimeoPlayer: ExtendedVimeoPlayer, value: size) => {
    // eslint-disable-next-line no-param-reassign
    vimeoPlayer.element.height = value
  },
  [OPTIONS_NAMES.controls]: (vimeoPlayer: ExtendedVimeoPlayer, value: any) => {
    // eslint-disable-next-line no-param-reassign
    vimeoPlayer.element.controls = value
  },
  [OPTIONS_NAMES.video]: (vimeoPlayer: ExtendedVimeoPlayer, value: string) => {
    if (value) {
      const loaded = vimeoPlayer.loadVideo(value)

      loaded.then(() => {
        vimeoPlayer.setCurrentTime(0)
      })
    } else {
      vimeoPlayer.unload()
    }
  },
  [OPTIONS_NAMES.playbackRate]: (
    vimeoPlayer: ExtendedVimeoPlayer,
    value: number
  ) => {
    vimeoPlayer.setPlaybackRate(value)
  },
  [OPTIONS_NAMES.quality]: (
    vimeoPlayer: ExtendedVimeoPlayer,
    value: VimeoPlayer.VimeoVideoQuality
  ) => {
    vimeoPlayer.setQuality(value)
  },
}

type vimeoValue = string | number | boolean | string[] | undefined

export const updatePlayer = (
  vimeoPlayer: VimeoPlayer | null,
  optionName: keyof typeof OPTIONS_NAMES,
  value: vimeoValue
) => {
  if (!vimeoPlayer) return

  switch (optionName) {
    case OPTIONS_NAMES.autopause:
      vimeoPlayer.setAutopause(value as boolean)
      break
    case OPTIONS_NAMES.color:
      vimeoPlayer.setColor(value as string)
      break
    case OPTIONS_NAMES.loop:
      vimeoPlayer.setLoop(value as boolean)
      break
    case OPTIONS_NAMES.volume:
      vimeoPlayer.setVolume(value as number)
      break
    case OPTIONS_NAMES.paused:
      vimeoPlayer.getPaused().then((paused) => {
        if (value && !paused) {
          return vimeoPlayer.pause()
        }
        if (!value && paused) {
          return vimeoPlayer.play()
        }
        return null
      })
      break
    // case OPTIONS_NAMES.width:
    //   // eslint-disable-next-line no-param-reassign
    //   vimeoPlayer.element.width = value as size
    //   break
    // case OPTIONS_NAMES.height:
    //   // eslint-disable-next-line no-param-reassign
    //   vimeoPlayer.element.height = value as size
    //   break
    // case OPTIONS_NAMES.controls:
    //   // eslint-disable-next-line no-param-reassign
    //   if (vimeoPlayer.element) {
    //     vimeoPlayer.element.controls = value as number | string
    //   }
    //   break
    case OPTIONS_NAMES.video:
      if (value) {
        const loaded = vimeoPlayer.loadVideo(value as string)

        loaded.then(() => {
          vimeoPlayer.setCurrentTime(0)
        })
      } else {
        vimeoPlayer.unload()
      }
      break
    case OPTIONS_NAMES.playbackRate:
      vimeoPlayer.setPlaybackRate(value as number)
      break
    case OPTIONS_NAMES.quality:
      vimeoPlayer.setQuality(value as VimeoPlayer.VimeoVideoQuality)
      break
    default:
      console.log('Invalid option name')
  }
}
