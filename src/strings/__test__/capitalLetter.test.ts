import { describe, expect, test } from 'vitest'

import { capitalLetter } from '../capitalLetter'

describe('isObject', () => {
  test.each([
    ['hola mundo', 'Hola mundo'],
    ['juan', 'Juan'],
    ['prueba test capitalacer', 'Prueba test capitalacer']
  ])('capitalLetter(%j) should be %j', (arg, expected) => {
    expect(capitalLetter(arg)).toStrictEqual(expected)
  })
})
