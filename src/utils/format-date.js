export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
}

function padLeftZero(str) {
  return ('00' + str).substr(str.length)
}

/**
 * 格式化时间, 返回对象包含键 年Y/月M/日D
 * @param { string } date 需要格式化的时间
 * @return 返回需要的时间对象 包含 年/月/日
 */
export function objDate(date) {
  if (date && typeof date === "string") {
    date = new Date(date);
    let o = {
      Y: date.getFullYear(),
      M: date.getMonth() + 1,
      D: date.getDate()
    };
    return o;
  }
  return date;
}
