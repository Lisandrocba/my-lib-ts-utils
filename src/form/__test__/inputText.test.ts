import { describe, expect, test } from 'vitest'

import { inputText } from '../inputText'

describe('inputText', () => {
  test.each([
    ['Prueba', { message: 'success', validation: true, value: 'Prueba' }],
    [123, { message: 'Value is not string', validation: false, value: 123 }],
    ['  Hola mundo', { message: 'success', validation: true, value: 'Hola mundo' }]
  ])('inputText(%j) should be %j', (arg, expected) => {
    expect(inputText(arg)).toStrictEqual(expected)
  })
})
