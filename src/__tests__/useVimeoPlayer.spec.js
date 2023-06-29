import { waitFor } from '@testing-library/react'
import { act, renderHook } from '@testing-library/react-hooks'
import { beforeAll, describe, expect, it } from 'vitest'

import useVimeoPlayer from '../hooks/useVimeoPlayer'

const VIDEO = 'https://player.vimeo.com/video/76979871?h=8272103f6e'

describe.concurrent('useVimeoPlayer', () => {
  let ref

  beforeAll(() => {
    ref = { current: document.createElement('div') }
  })

  it('initializes Vimeo Player with provided video id and options', () => {
    const embedOptions = { autoplay: true, muted: true }

    const {
      result: { current: vimeoPlayer },
    } = renderHook(() => useVimeoPlayer(VIDEO, ref, { embedOptions }))

    expect(vimeoPlayer).toBeDefined()
  })

  describe('embedOptions', () => {
    it('volume', async () => {
      const volume = 0
      const {
        result: {
          current: { vimeoPlayer, volumeTest },
        },
        // waitForNextUpdate,
      } = renderHook(() => useVimeoPlayer(VIDEO, ref, { volume }))

      // await waitForNextUpdate()
      // const a = vimeoPlayer.ready()
      // debugger
      expect(volumeTest).toBe(volume)
    })
  })
})

// // Test error handling
// it('sets error state when VimeoPlayer throws an error', async () => {
//   // Mock VimeoPlayer to throw an error
//   VimeoPlayer.mockImplementationOnce(() => {
//     throw new Error('Test error')
//   })

//   const ref = { current: document.createElement('div') }
//   const { result, waitForNextUpdate } = renderHook(() =>
//     useVimeoPlayer('1234567', ref)
//   )

//   // Wait for the hook to update its state
//   await waitForNextUpdate()

//   // check error state
//   expect(result.current.loading).toBe(false)
//   expect(result.current.error).toBeInstanceOf(Error)
//   expect(result.current.player).toBe(null)
// })
