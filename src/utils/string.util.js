class StringUtil {
  toKey(str) {
    return str.toUpperCase().split(/\s+/).join("_");
  }
}

export default new StringUtil();