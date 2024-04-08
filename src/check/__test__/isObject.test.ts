import { describe, expect, test } from 'vitest'

import { isObject } from '../isObject'

describe('isObject', () => {
  test.each([
    [{ name: 'Juan' }, true],
    [{}, true],
    [undefined, false],
    [123, false],
    ['', false]
  ])('isObject(%j) should be %j', (arg, expected) => {
    expect(isObject(arg)).toBe(expected)
  })
})
