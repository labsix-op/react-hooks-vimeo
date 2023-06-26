import { getVideoIdType } from '../getVideoIdType'

describe('getVideoIdType', () => {
  test('Returns "url" for http(s) URLs', () => {
    expect(getVideoIdType('http://example.com')).toBe('url')
    expect(getVideoIdType('https://example.com')).toBe('url')
  })

  test('Returns "url" for ftp(s) URLs', () => {
    expect(getVideoIdType('ftp://example.com')).toBe('url')
    expect(getVideoIdType('ftps://example.com')).toBe('url')
  })

  test('Returns "url" for http(s) URLs with uppercase protocol', () => {
    expect(getVideoIdType('HTTP://example.com')).toBe('url')
    expect(getVideoIdType('HTTPS://example.com')).toBe('url')
  })

  test('Throws error for URLs without (something://)', () => {
    expect(() => getVideoIdType('example.com')).toThrow(Error)
  })

  test('Returns "id" for strings of numbers', () => {
    expect(getVideoIdType('123456')).toBe('id')
  })

  test('Throws error for empty strings', () => {
    expect(() => getVideoIdType('')).toThrow(Error)
  })
})
