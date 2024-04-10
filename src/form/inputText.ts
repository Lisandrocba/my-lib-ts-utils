import { type messageAndValidation } from '@/interface/messageAndValidation'

import { isString } from '../check'

export const inputText = (value: unknown): messageAndValidation => {
  if (!isString(value)) return { message: 'Value is not string', validation: false, value }
  const valueString = value.trim()
  return { message: 'success', validation: true, value: valueString }
}
