# @labsix/react-hooks-vimeo

This project is currently a work in progress. 🚧

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

## License

This project is licensed under the terms of the [MIT license](LICENSE).

## Contributions

Contributions are more than welcome as this is an open-source project. Feel free to open issues, fork the project, submit pull requests, and get involved!

## Stay tuned!

Thank you for checking out this project. There's a lot more to come, and I'm excited to share more about this project as it progresses.

Stay tuned for more updates! I hope this library will prove to be a valuable tool for you and your projects. Thank you for your interest in this project.
