import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { debounce } from '../debounce'

describe('debounce', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.resetAllMocks()
  })

  it('should debounce a generic function and execute 0 times', () => {
    const originalFn = vi.fn()
    const debouncedFn = debounce(originalFn, 1000)
    debouncedFn(1)
    debouncedFn(2)
    debouncedFn(3)
    debouncedFn(4)

    vi.advanceTimersByTime(1100)
    expect(originalFn).toHaveBeenCalledTimes(1)
  })
  it('should debounce a generic function and execute 2 times', () => {
    const originalFn = vi.fn()
    const debouncedFn = debounce(originalFn, 100)
    debouncedFn(1)
    debouncedFn(2)
    debouncedFn(3)
    debouncedFn(4)
    vi.advanceTimersByTime(1000)
    expect(originalFn).toHaveBeenCalledTimes(1)
    debouncedFn(1)
    debouncedFn(2)
    vi.advanceTimersByTime(1000)
    expect(originalFn).toHaveBeenCalledTimes(2)
  })
})
