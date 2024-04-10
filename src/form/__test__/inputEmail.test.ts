import { describe, expect, test } from 'vitest'

import { inputEmail } from '../inputEmail'

describe('inputEmail', () => {
  test.each([
    ['Prueba', { message: 'Invalid email', validation: false, value: 'Prueba' }],
    [123, { message: 'Value is not string', validation: false, value: 123 }],
    ['  Hola mundo', { message: 'Invalid email', validation: false, value: '  Hola mundo' }],
    ['prueba@email.com', { message: 'success', validation: true, value: 'prueba@email.com' }],
    ['  prueba@email.org', { message: 'success', validation: true, value: 'prueba@email.org' }],
    ['?prueba@email.org', { message: 'Invalid email', validation: false, value: '?prueba@email.org' }],
    ['prueba@email.org?com', { message: 'Invalid email', validation: false, value: 'prueba@email.org?com' }]
  ])('inputEmail(%j) should be %j', (arg, expected) => {
    expect(inputEmail(arg)).toStrictEqual(expected)
  })
})
