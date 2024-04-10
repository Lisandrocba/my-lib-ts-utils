import { type messageAndValidation } from '@/interface/messageAndValidation'

import { isString } from '../check'

export const inputEmail = (value: unknown): messageAndValidation => {
  if (!isString(value)) return { message: 'Value is not string', validation: false, value }
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
  if (regex.test(value.trim())) return { message: 'success', validation: true, value: value.trim() }
  return { message: 'Invalid email', validation: false, value }
}
