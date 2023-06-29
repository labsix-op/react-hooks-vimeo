import { OPTIONS_NAMES } from '../constants'

export const getUpdatePlayerHandler = {
  [OPTIONS_NAMES.autopause]: (vimeoPlayer, value) => {
    vimeoPlayer.setAutopause(value)
  },
  [OPTIONS_NAMES.color]: (vimeoPlayer, value) => {
    vimeoPlayer.setColor(value)
  },
  [OPTIONS_NAMES.loop]: (vimeoPlayer, value) => {
    vimeoPlayer.setLoop(value)
  },
  [OPTIONS_NAMES.volume]: (vimeoPlayer, value) => {
    vimeoPlayer.setVolume(value)
  },
  [OPTIONS_NAMES.start]: (vimeoPlayer, value) => {
    vimeoPlayer.setCurrentTime(value)
  },
  [OPTIONS_NAMES.paused]: (vimeoPlayer, value) => {
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
  [OPTIONS_NAMES.width]: (vimeoPlayer, value) => {
    // eslint-disable-next-line no-param-reassign
    vimeoPlayer.element.width = value
  },
  [OPTIONS_NAMES.height]: (vimeoPlayer, value) => {
    // eslint-disable-next-line no-param-reassign
    vimeoPlayer.element.height = value
  },
  [OPTIONS_NAMES.controls]: (vimeoPlayer, value) => {
    // eslint-disable-next-line no-param-reassign
    vimeoPlayer.element.controls = value
  },
  [OPTIONS_NAMES.video]: (vimeoPlayer, video) => {
    if (video) {
      const loaded = vimeoPlayer.loadVideo(video)

      loaded.then(() => {
        vimeoPlayer.setCurrentTime(0)
      })
    } else {
      vimeoPlayer.unload()
    }
  },
  [OPTIONS_NAMES.playbackRate]: (vimeoPlayer, value) => {
    vimeoPlayer.setPlaybackRate(value)
  },
  [OPTIONS_NAMES.quality]: (vimeoPlayer, value) => {
    vimeoPlayer.setQuality(value)
  },
  [OPTIONS_NAMES.pip]: async (vimeoPlayer, pictureInPicture) => {
    if (pictureInPicture) {
      await vimeoPlayer.requestPictureInPicture()
    }
    await vimeoPlayer.exitPictureInPicture()
  },
}
