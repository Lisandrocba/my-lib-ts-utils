import { typeOf } from '../misc'

export const isObject = (value: unknown): boolean => {
  return typeOf(value) === 'object'
}
