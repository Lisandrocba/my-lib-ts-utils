import { describe, expect, test } from 'vitest'

import { arraylable } from '../arraylable'

describe('arraylable', () => {
  test.each([
    ['', []],
    [[123, '', null], [123, '', null]],
    [null, []],
    [123, []],
    [[], []]
  ])('arraylable(%j) should be %j', (arg, expected) => {
    expect(arraylable(arg)).toStrictEqual(expected)
  })
})
