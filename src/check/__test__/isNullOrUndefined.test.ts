import { describe, expect, test } from 'vitest'

import { isNullOrUndefined } from '../isNullOrUndefined'

describe('isObject', () => {
  test.each([
    [{}, false],
    [[], false],
    [undefined, true],
    [123, false],
    ['', false],
    [null, true]
  ])('isNullOrUndefined(%j) should be %j', (arg, expected) => {
    expect(isNullOrUndefined(arg)).toBe(expected)
  })
})
