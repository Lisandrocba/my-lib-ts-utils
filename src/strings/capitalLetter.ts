import { isString } from '../check'

export const capitalLetter = (value: unknown): string => {
  if (!isString(value)) return ''
  const resolve = value.split('')
  resolve[0] = resolve[0].toUpperCase()
  return resolve.join('')
}
