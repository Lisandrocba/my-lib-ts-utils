import { describe, expect, test } from 'vitest'

import { isEmpty } from '../isEmpty'

describe('isObject', () => {
  test.each([
    [{}, true],
    [[], true],
    [undefined, false],
    [123, false],
    ['', false],
    [{ name: 'juan' }, false]
  ])('isEmpty(%j) should be %j', (arg, expected) => {
    expect(isEmpty(arg)).toBe(expected)
  })
})
