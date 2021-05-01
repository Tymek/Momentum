export const fromEntries = <K extends string, V extends unknown>(
  arr: Array<[K, V]>,
): Record<K, V> => arr.reduce((acc, [k, v]) => ((acc[k] = v), acc), {} as Record<K, V>)
