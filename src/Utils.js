export const isUndefinedOrNull = (value) => {
    return typeof value === 'undefined' || value === null
}

export const isUndefinedOrNullOrBlank = (value) => {
  return isUndefinedOrNull(value) || typeof value === 'string' && value.trim().length == 0;
};

export const isIterable  = (value) => {
  return value != null && typeof value[Symbol.iterator] === 'function'
}