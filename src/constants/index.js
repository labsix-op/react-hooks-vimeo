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

/**
 * Names of all available options that can be passed to the Vimeo Player via `embedOptions`.
 * @type {Object.<string, string>}
 * @property {string} autopause - Whether to pause the current video when another Vimeo video on the same page starts to play.
 * @property {string} autopip - Whether to enable the browser to enter picture-in-picture mode automatically when switching tabs or windows, where supported.
 * @property {string} autoplay - Whether to start playback of the video automatically.
 * @property {string} background - Whether the player is in background mode, which hides the playback controls, enables autoplay, and loops the video.
 * @property {string} showByline - Whether to display the video owner's name.
 * @property {string} color - The hexadecimal accent color value of the playback controls.
 * @property {string} colors - The hexadecimal color values of the player.
 * @property {string} controls - Whether to display the player's interactive elements, including the play bar and sharing buttons.
 * @property {string} dnt - Whether to prevent the player from tracking session data, including cookies.
 * @property {string} height - The height of the video in pixels.
 * @property {string} interactiveParams - Key-value pairs representing dynamic parameters that are utilized on interactive videos with live elements.
 * @property {string} keyboard - Whether to enable keyboard input to trigger player events.
 * @property {string} loop - Whether to restart the video automatically after reaching the end.
 * @property {string} maxHeight - The height of the video in pixels, where the video won't exceed its native height.
 * @property {string} maxWidth - The width of the video in pixels, where the video won't exceed its native width.
 * @property {string} muted - Whether the video is muted upon loading.
 * @property {string} pip - Whether to include the picture-in-picture button among the player controls and enable the picture-in-picture API.
 * @property {string} playsInline - Whether the video plays inline on supported mobile devices.
 * @property {string} showPortrait - Whether to display the video owner's portrait.
 * @property {string} quality - The playback quality of the video.
 * @property {string} responsive - Whether to return a responsive embed code, or one that provides intelligent adjustments based on viewing conditions.
 * @property {string} speed - Whether the player displays speed controls in the preferences menu and enables the playback rate API.
 * @property {string} start - The start time of the video.
 * @property {string} textTrack - The text track to display with the video.
 * @property {string} title - Whether the player displays the title overlay.
 * @property {string} transparent - Whether the responsive player and transparent background are enabled.
 * @property {string} volume - The volume of the video.
 * @property {string} width - The width of the video in pixels.
 */
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
  volume: 'volume',
  width: 'width',
}

/**
 * Default values for each of the Vimeo Player options.
 * These defaults will be used if the corresponding option is not provided via `embedOptions`.
 * @type {Object.<string, any>}
 */
export const EMBED_OPTIONS_DEFAULT_VALUES = {
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
