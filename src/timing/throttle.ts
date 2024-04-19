import { type AnyFunction } from '../types/helpers'

export function throttle<T extends AnyFunction>(fn: T, delay: number) {
  let timeoutId: ReturnType<typeof setTimeout> | undefined

  return function throttleFn(...args: Parameters<T>) {
    if (timeoutId !== undefined) {
      return
    }

    timeoutId = setTimeout(() => {
      timeoutId = undefined
    }, delay)

    return fn(...args)
  }
}
