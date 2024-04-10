import { type messageAndValidation } from '@/interface/messageAndValidation'

import { isString } from '../check'

export const inputPassword = (value: unknown): messageAndValidation => {
  if (!isString(value)) return { message: 'Value is not string', validation: false, value }
  const regex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/
  if (regex.test(value)) return { message: 'success', validation: true, value }
  return { message: 'Invalid password, The password must be at least 8 to 16 characters, at least one digit, at least one lowercase letter, and at least one uppercase letter.', validation: false, value }
}
