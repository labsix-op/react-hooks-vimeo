import PropTypes from 'prop-types'

import { OPTIONS_NAMES } from '.'

export const videoPlayerPropshape = {
  video: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onPlaybackTimeReporting: PropTypes.func,
  /**
   * Pause the video.
   */
  paused: PropTypes.bool, //
  /**
   * The playback volume as a number between 0 and 1.
   */
  volume: PropTypes.number,
  /**
   * The time in seconds at which to start playing the video.
   */
  start: PropTypes.number,

  // Embed options
  /**
   * Show the title on the video.
   */
  showTitle: PropTypes.bool, // maybe title
  /**
   * Specify playback rate (requires Vimeo PRO / Business account)
   */
  playbackRate: PropTypes.number,
  [OPTIONS_NAMES.autopause]: PropTypes.bool,
  [OPTIONS_NAMES.autopip]: null,
  [OPTIONS_NAMES.autoplay]: PropTypes.bool,
  [OPTIONS_NAMES.background]: PropTypes.bool,
  [OPTIONS_NAMES.showByline]: PropTypes.bool,
  [OPTIONS_NAMES.color]: PropTypes.string,
  [OPTIONS_NAMES.colors]: PropTypes.arrayOf(PropTypes.string),
  [OPTIONS_NAMES.controls]: PropTypes.bool,
  [OPTIONS_NAMES.dnt]: PropTypes.bool,
  [OPTIONS_NAMES.height]: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  [OPTIONS_NAMES.interactiveParams]: null,
  [OPTIONS_NAMES.keyboard]: PropTypes.bool,
  [OPTIONS_NAMES.loop]: PropTypes.bool,
  [OPTIONS_NAMES.maxHeight]: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  [OPTIONS_NAMES.maxWidth]: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  [OPTIONS_NAMES.muted]: PropTypes.bool,
  [OPTIONS_NAMES.pip]: PropTypes.bool,
  [OPTIONS_NAMES.playsInline]: PropTypes.bool,
  [OPTIONS_NAMES.showPortrait]: PropTypes.bool,
  [OPTIONS_NAMES.quality]: PropTypes.string,
  [OPTIONS_NAMES.responsive]: PropTypes.bool,
  [OPTIONS_NAMES.speed]: PropTypes.bool,
  [OPTIONS_NAMES.textTrack]: PropTypes.string,
  [OPTIONS_NAMES.title]: PropTypes.bool,
  [OPTIONS_NAMES.transparent]: PropTypes.bool,
  [OPTIONS_NAMES.width]: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  // Events
  onPlay: PropTypes.func,
  onPlaying: PropTypes.func,
  onPause: PropTypes.func,
  onEnd: PropTypes.func,
  onTimeUpdate: PropTypes.func,
  onProgress: PropTypes.func,
  onSeeked: PropTypes.func,
  onTextTrackChange: PropTypes.func,
  onCueChange: PropTypes.func,
  onCuePoint: PropTypes.func,
  onVolumeChange: PropTypes.func,
  onPlaybackRateChange: PropTypes.func,
  onError: PropTypes.func,
  onLoaded: PropTypes.func,
}
