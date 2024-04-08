import { arraylable } from './arraylable'

export const sumArray = (value: number[]): number => {
  return arraylable(value).reduce((prev, sum) => prev + sum, 0)
}
