/**
 * Map of Vimeo event names to corresponding React event handler names.
 * @type {Object.<string, string>}
 * @property {string} play - Event that fires when a video starts playing.
 * @property {string} playing - Event that fires when the video is actually playing after having been paused or stopped for buffering.
 * @property {string} pause - Event that fires when a video is paused.
 * @property {string} ended - Event that fires when a video has come to an end.
 * @property {string} timeupdate - Event that fires when the current playback position has changed.
 * @property {string} progress - Event that fires when the browser is downloading the video.
 * @property {string} seeked - Event that fires when the user has finished moving/skipping to a new position in the video.
 * @property {string} texttrackchange - Event that fires when the active text track changes.
 * @property {string} cuechange - Event that fires when the cue changes for a text track.
 * @property {string} cuepoint - Event that fires when a cue point is reached.
 * @property {string} volumechange - Event that fires when the volume has been changed.
 * @property {string} playbackratechange - Event that fires when the playback rate changes.
 * @property {string} error - Event that fires when an error occurs.
 * @property {string} loaded - Event that fires when the video is loaded.
 */
export const VIMEO_TO_REACT_EVENT_NAMES_MAP = {
  play: 'onPlay',
  playing: 'onPlaying',
  pause: 'onPause',
  ended: 'onEnd',
  timeupdate: 'onTimeUpdate',
  progress: 'onProgress',
  seeked: 'onSeeked',
  texttrackchange: 'onTextTrackChange',
  cuechange: 'onCueChange',
  cuepoint: 'onCuePoint',
  volumechange: 'onVolumeChange',
  playbackratechange: 'onPlaybackRateChange',
  error: 'onError',
  loaded: 'onLoaded',
}

export const OPTIONS_NAMES = {
  autopause: 'autopause',
  autopip: 'autopip',
  autoplay: 'autoplay',
  background: 'background',
  showByline: 'showByline',
  color: 'color',
  colors: 'colors',
  controls: 'controls',
  dnt: 'dnt',
  height: 'height',
  interactiveParams: 'interactiveParams',
  keyboard: 'keyboard',
  loop: 'loop',
  maxHeight: 'maxHeight',
  maxWidth: 'maxWidth',
  muted: 'muted',
  pip: 'pip',
  playsInline: 'playsInline',
  showPortrait: 'showPortrait',
  quality: 'quality',
  responsive: 'responsive',
  speed: 'speed',
  start: 'start',
  textTrack: 'textTrack',
  title: 'title',
  transparent: 'transparent',
  width: 'width',
}

export const DEFAULT_VIMEO_PLAYER_OPTIONS = {
  [OPTIONS_NAMES.autopause]: true,
  [OPTIONS_NAMES.autopip]: null,
  [OPTIONS_NAMES.autoplay]: false,
  [OPTIONS_NAMES.background]: false,
  [OPTIONS_NAMES.showByline]: true,
  [OPTIONS_NAMES.color]: null,
  [OPTIONS_NAMES.colors]: null,
  [OPTIONS_NAMES.controls]: true,
  [OPTIONS_NAMES.dnt]: false,
  [OPTIONS_NAMES.height]: null,
  [OPTIONS_NAMES.interactiveParams]: null,
  [OPTIONS_NAMES.keyboard]: true,
  [OPTIONS_NAMES.loop]: false,
  [OPTIONS_NAMES.maxHeight]: null,
  [OPTIONS_NAMES.maxWidth]: null,
  [OPTIONS_NAMES.muted]: false,
  [OPTIONS_NAMES.pip]: null,
  [OPTIONS_NAMES.playsInline]: true,
  [OPTIONS_NAMES.showPortrait]: true,
  [OPTIONS_NAMES.quality]: 'auto',
  [OPTIONS_NAMES.responsive]: false,
  [OPTIONS_NAMES.speed]: false,
  [OPTIONS_NAMES.textTrack]: null,
  [OPTIONS_NAMES.title]: true,
  [OPTIONS_NAMES.transparent]: true,
  [OPTIONS_NAMES.width]: null,
}
