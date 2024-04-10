import { describe, expect, test } from 'vitest'

import { isFunction } from '../isFunction'

describe('isFunction', () => {
  test.each([
    [() => {}, true],
    [function() {}, true],
    [{}, false],
    [123, false],
    ['', false],
    [null, false]
  ])('isFunction(%j) should be %j', (arg, expected) => {
    expect(isFunction(arg)).toBe(expected)
  })
})
