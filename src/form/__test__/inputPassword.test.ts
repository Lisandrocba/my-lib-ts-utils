import { describe, expect, test } from 'vitest'

import { inputPassword } from '../inputPassword'

describe('inputPassword', () => {
  test.each([
    ['Prueba11', { message: 'success', validation: true, value: 'Prueba11' }],
    ['22PRUeba', { message: 'success', validation: true, value: '22PRUeba' }],
    ['pRUeba33', { message: 'success', validation: true, value: 'pRUeba33' }],
    [123, { message: 'Value is not string', validation: false, value: 123 }],
    ['faltamayuscula1', { message: 'Invalid password, The password must be at least 8 to 16 characters, at least one digit, at least one lowercase letter, and at least one uppercase letter.', validation: false, value: 'faltamayuscula1' }],
    ['FALTAMINUSCULA1', { message: 'Invalid password, The password must be at least 8 to 16 characters, at least one digit, at least one lowercase letter, and at least one uppercase letter.', validation: false, value: 'FALTAMINUSCULA1' }],
    ['no8cara', { message: 'Invalid password, The password must be at least 8 to 16 characters, at least one digit, at least one lowercase letter, and at least one uppercase letter.', validation: false, value: 'no8cara' }],
    ['.contienesimbolo', { message: 'Invalid password, The password must be at least 8 to 16 characters, at least one digit, at least one lowercase letter, and at least one uppercase letter.', validation: false, value: '.contienesimbolo' }],
    ['Pruebaconmasde16caracteres', { message: 'Invalid password, The password must be at least 8 to 16 characters, at least one digit, at least one lowercase letter, and at least one uppercase letter.', validation: false, value: 'Pruebaconmasde16caracteres' }],
    ['Pruebaaa', { message: 'Invalid password, The password must be at least 8 to 16 characters, at least one digit, at least one lowercase letter, and at least one uppercase letter.', validation: false, value: 'Pruebaaa' }],
    ['abc 123 def456 ghi7890', { message: 'Invalid password, The password must be at least 8 to 16 characters, at least one digit, at least one lowercase letter, and at least one uppercase letter.', validation: false, value: 'abc 123 def456 ghi7890' }]
  ])('inputPassword(%j) should be %j', (arg, expected) => {
    expect(inputPassword(arg)).toStrictEqual(expected)
  })
})
