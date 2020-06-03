/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string | null}
 */
export function parseTime (time, cFormat) {
  if (arguments.length === 0) {
    return null;
  }
  const format = cFormat || "{y}-{m}-{d} {h}:{i}:{s}";
  let date;
  if (typeof time === "object") {
    date = time;
  } else {
    if ((typeof time === "string")) {
      if ((/^[0-9]+$/.test(time))) {
        // support "1548221490638"
        time = parseInt(time);
      } else {
        // support safari
        // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
        time = time.replace(new RegExp(/-/gm), "/");
      }
    }

    if ((typeof time === "number") && (time.toString().length === 10)) {
      time = time * 1000;
    }
    date = new Date(time);
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  };
  // eslint-disable-next-line camelcase
  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key];
    // Note: getDay() returns 0 on Sunday
    if (key === "a") {
      return [ "日", "一", "二", "三", "四", "五", "六" ][value];
    }
    return value.toString().padStart(2, "0");
  });
  // eslint-disable-next-line camelcase
  return time_str;
}

/**
 * @desc 函数防抖
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param isPerform true 表立即执行，false 表非立即执行
 */
export function debounce (fn, wait, isPerform) {
  let timeout;
  return (function () {
    const args = arguments;
    clearTimeout(timeout);
    if (isPerform) {
      const callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
        fn.apply(this, args);
      }, wait);
      if (callNow) { fn.apply(this, args); }
    } else {
      timeout = setTimeout(() => {
        fn.apply(this, args);
      }, wait);
    }
  }());
}

/**
 * @desc 函数节流
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param type 1 表时间戳版，2 表定时器版
 */
export function throttle (fn, wait, type) {
  let previous = 0;
  let timeout;
  return function () {
    const args = arguments;
    if (type === 1) {
      const now = Date.now();
      if (now - previous > wait) {
        fn.apply(this, args);
        previous = now;
      }
    }
    if (type === 2) {
      if (!timeout) {
        timeout = setTimeout(() => {
          timeout = null;
          fn.apply(this, args);
        }, wait);
      }
    }
  };
}

export function param2Obj (url) {
  const search = url.split("?")[1];
  if (!search) {
    return {};
  }
  return JSON.parse(
    '{"' +
    decodeURIComponent(search)
    .replace(/"/g, '\\"')
    .replace(/&/g, '","')
    .replace(/=/g, '":"')
    .replace(/\+/g, " ") +
    '"}'
  );
}
