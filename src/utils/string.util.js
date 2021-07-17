class StringUtil {
  toKey(str) {
    return str.toUpperCase().split(/\s+/).join("");
  }
}

export default new StringUtil();