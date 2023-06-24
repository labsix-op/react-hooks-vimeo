# @labsix/react-hooks-vimeo

## Summary

- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [License](#license)

## About

This is my very first open source project. Recently, while working on a project, I found a need for a React Hook implementation for Vimeo's player. I was inspired by the [u-wave/react-vimeo](https://github.com/u-wave/react-vimeo/tree/default) library and decided to create a similar one, but with the usage of React hooks, providing a flexible component and a hook for using the Vimeo player.

This project aims to make it simple for developers to include Vimeo's player in their React applications with a modern, hook-based approach.

## Features

The library provides:

- A React hook `useVimeoPlayer` that allows for easy integration with Vimeo's player API.
- A reusable `VimeoPlayer` component that simplifies adding Vimeo players to your React app.

## Installation

```
npm i @labsix/react-hooks-vimeo
```

If using `react v18.0` please add `--legacy-peer-deps`

## Usage

### React Component

```jsx
import VimeoPlayer from '@labsix/react-hooks-vimeo'

const YourComponent = () => <VimeoPlayer video='YOUR_VIMEO_VIDEO_ID_OR_URL' />

export default YourComponent
```

### Hook

In order to use the `useVimeoPlayer` hook, you first need to import it from the library. Then, create a reference to the DOM element where you want to insert the Vimeo player, and finally, call the hook with the appropriate parameters.

Here's an example of how you can use the `useVimeoPlayer` hook:

```jsx
import { useRef } from 'react'
import { useVimeoPlayer } from '@labsix/react-hooks-vimeo'

const YourComponent = () => {
  const vimeoPlayerRef = useRef(null)

  useVimeoPlayer('YOUR_VIMEO_VIDEO_ID_OR_URL', vimeoPlayerRef, {
    embedOptions: {
      muted: true,
      autoplay: true,
      // ...embed options
    },
    events: {
      onPlay: () => {
        /* ...events */
      },
    },
  })

  return <div ref={vimeoPlayerRef} />
}

export default YourComponent
```

In this example, replace `'YOUR_VIMEO_VIDEO_ID_OR_URL'` with the actual Vimeo video ID or URL you wish to embed. Also, provide any configuration options and event handlers you need in the `embedOptions` and `events` objects, respectively.

The `useVimeoPlayer` hook initializes a Vimeo Player instance and embeds it into the DOM element that you specify via `vimeoPlayerRef`. It also sets up the event handlers and configuration options you pass in.

This hook will return an instance of the Vimeo Player, which you can use to programmatically control the video playback. However, in most cases, you do not need to handle this instance directly, as the hook takes care of embedding the player and setting up event handlers for you.

## Props

### Embed options

Below is the updated documentation for the props that the Vimeo Player hook accepts:

| Name         | Type           | Default | Description                                                                                                                                    |
| :----------- | :------------- | :------ | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| video        | number, string |         | Vimeo video ID or URL to be played.                                                                                                            |
| paused       | bool           | `null`  | If true, the video is paused.                                                                                                                  |
| volume       | number         | `null`  | The playback volume as a number between 0 and 1.                                                                                               |
| start        | number         | `null`  | The time (in seconds) at which the video should start playing.                                                                                 |
| playbackRate | number         | `null`  | The playback rate of the video.                                                                                                                |
| autopause    | bool           | `true`  | If true, the video will pause automatically when another video starts playing.                                                                 |
| autoplay     | bool           | `false` | If true, the video will start playing automatically. Note: This may not work on some devices.                                                  |
| showByline   | bool           | `true`  | If true, the video's byline will be displayed.                                                                                                 |
| controls     | bool           | `true`  | If false, all elements in the player, such as the progress bar and sharing buttons, will be hidden. (Requires a Vimeo PRO / Business account). |
| loop         | bool           | `false` | If true, the video will play again from the start once it reaches the end.                                                                     |
| showPortrait | bool           | `true`  | If true, the video's portrait will be displayed.                                                                                               |
| showTitle    | bool           | `true`  | If true, the video's title will be displayed.                                                                                                  |
| muted        | bool           | `false` | If true, the video will start in a muted state.                                                                                                |
| background   | bool           | `false` | If true, the video will start in a background state with no controls.                                                                          |
| responsive   | bool           | `false` | If true, the player will resize according to its parent element (experimental feature).                                                        |
| dnt          | bool           | `false` | If true, the player won't track any session data, including all cookies and analytics.                                                         |
| speed        | bool           | `false` | If true, the playback rate controls will be enabled. (Requires a Vimeo PRO / Business account).                                                |
| keyboard     | bool           | `true`  | If true, keyboard inputs will trigger player events.                                                                                           |
| pip          | bool           | `false` | If true, the picture-in-picture button will be displayed in the control bar and the picture-in-picture API will be enabled.                    |
| playsInline  | bool           | `true`  | If true, the video will play inline on mobile devices. Set to `false` to go fullscreen on playback.                                            |
| transparent  | bool           | `true`  | If false, the responsive player and transparent background will be disabled.                                                                   |
| quality      | string         |         | Vimeo Plus, PRO, and Business members can default an embedded video to a specific quality on desktop.                                          |
| textTrack    | string         |         | The default language for captions/subtitles.                                                                                                   |

### Event Props

Here is the documentation for the event props that the Vimeo Player hook supports:

| Name                    | Type     | Description                                                                 |
| :---------------------- | :------- | :-------------------------------------------------------------------------- |
| onPlay                  | Function | A callback that fires when the video starts to play.                        |
| onPlaying               | Function | A callback that fires continuously as the video is playing.                 |
| onPause                 | Function | A callback that fires when the video is paused.                             |
| onEnd                   | Function | A callback that fires when the video has ended.                             |
| onTimeUpdate            | Function | A callback that fires when the current playback position has changed.       |
| onProgress              | Function | A callback that fires when the player is fetching the video.                |
| onSeeked                | Function | A callback that fires when a seek operation has completed.                  |
| onTextTrackChange       | Function | A callback that fires when the text track (captions/subtitles) has changed. |
| onCueChange             | Function | A callback that fires when the currently-displayed cue changes.             |
| onCuePoint              | Function | A callback that fires when the video playback reaches a cue point.          |
| onVolumeChange          | Function | A callback that fires when the volume level has changed.                    |
| onPlaybackRateChange    | Function | A callback that fires when the playback rate has changed.                   |
| onError                 | Function | A callback that fires when an error occurs.                                 |
| onLoaded                | Function | A callback that fires when the video has loaded and is ready to play.       |
| onPlaybackTimeReporting | Function | A callback that fires per second to represent that the video is playing.    |

Please note that each of these event handlers should be a function that takes an event object as its only parameter. The properties of the event object will depend on the specific event being handled.

## License

This project is licensed under the terms of the [MIT license](LICENSE).

## Contributions

Contributions are more than welcome as this is an open-source project. Feel free to open issues, fork the project, submit pull requests, and get involved!

## Stay tuned!

Thank you for checking out this project. There's a lot more to come, and I'm excited to share more about this project as it progresses.

Stay tuned for more updates! I hope this library will prove to be a valuable tool for you and your projects. Thank you for your interest in this project.
