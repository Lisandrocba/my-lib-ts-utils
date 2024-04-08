import { describe, expect, test } from 'vitest'

import { sumArray } from '../sumArray'

describe('sumArray', () => {
  test.each([
    [[1, 2, 3], 6],
    [[10, 15, 30], 55],
    [[0, 1, 1], 2],
    [[], 0]
  ])('sumArray(%j) should be %j', (arg, expected) => {
    expect(sumArray(arg)).toStrictEqual(expected)
  })
})
