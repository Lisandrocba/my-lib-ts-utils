import { describe, expect, test } from 'vitest'

import { isString } from '../isString'

describe('isSctring', () => {
  test.each([
    ['', true],
    [null, false],
    [undefined, false],
    [123, false],
    [{}, false]
  ])('isString(%j) should be %j', (arg, expected) => {
    expect(isString(arg)).toBe(expected)
  })
})
