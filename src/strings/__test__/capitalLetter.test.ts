import { describe, expect, test } from 'vitest'

import { capitalLetter } from '../capitalLetter'

describe('capitalLetter', () => {
  test.each([
    ['hola mundo', 'Hola mundo'],
    ['juan', 'Juan'],
    ['HOLA MUNDO', 'Hola mundo'],
    ['prueba TeSt capitaLAcer', 'Prueba test capitalacer'],
    [123, '']
  ])('capitalLetter(%j) should be %j', (arg, expected) => {
    expect(capitalLetter(arg)).toStrictEqual(expected)
  })
})
