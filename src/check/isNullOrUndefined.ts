type NullOrUndefined = null | undefined

export const isNullOrUndefined = (value: unknown): value is NullOrUndefined => {
  return value === null || value === undefined
}
