import { isString } from '../check'

export const capitalLetter = (value: unknown): string => {
  if (!isString(value)) return ''
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
}
