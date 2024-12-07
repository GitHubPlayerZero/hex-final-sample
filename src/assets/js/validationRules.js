// 正則 - 驗證手機格式
export const regexMobile = /^([0-9]{4}-[0-9]{3}-[0-9]{3}|[0-9]{10})$/;

/**
 * 驗證手機格式。
 * @param {String|Number} 手機號碼。
 * @returns {Boolean} 驗證通過回傳 true，否則回傳 false。
 */
export function checkMobile(value) {
  if (value && !regexMobile.test(value)) {
    return false;
  }
  return true;
}

export default {
  regexMobile,
  checkMobile,
};
