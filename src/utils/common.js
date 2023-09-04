/**
 * @param {number} ms
 * @return {Promise<void>}
 */
export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

/**
 * 对函数进行防抖处理
 *
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param immediate true 表立即执行，false 表非立即执行
 * @param errCallback 触发过快时执行
 */
export function debounce(func, wait, immediate, errCallback) {
  let timer
  return function () {
    const context = this
    const args = arguments

    // 如果在计时器运行时执行函数，重置计时器
    if (timer) clearTimeout(timer)

    if (immediate) {
      const callNow = !timer
      timer = setTimeout(() => {
        timer = null
      }, wait)
      if (callNow) {
        return func.apply(context, args)
      }
    } else {
      timer = setTimeout(() => {
        timer = null
        return func.apply(context, args)
      }, wait)
    }

    if (timer && typeof errCallback === 'function') {
      errCallback.apply(context)
    }
  }
}
