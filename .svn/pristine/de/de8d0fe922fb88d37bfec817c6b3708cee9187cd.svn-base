export default {
  // 护照
  checkHuzhaoNumber (number) {
    let str = number
    let Expression = /(P\d{7})|(G\d{8})/
    let objExp = new RegExp(Expression)
    if (objExp.test(str)) {
      return true
    } else {
      return false
    }
  },
  // 电话
  checkTelPhone (number) {
    let str = number
    let Expression = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/
    let objExp = new RegExp(Expression)
    if (objExp.test(str)) {
      return true
    } else {
      return false
    }
  },
  // 名称
  checkName (number) {
    let str = number
    let Expression = /^([\u4e00-\u9fa5]+([a-zA-Z0-9])+)$/
    let objExp = new RegExp(Expression)
    if (objExp.test(str)) {
      return true
    } else {
      return false
    }
  },
  // 身份证
  checkIdentityCardNo (number) {
    let str = number
    let Expression = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
    let objExp = new RegExp(Expression)
    if (objExp.test(str)) {
      return true
    } else {
      return false
    }
  },
  // 中文
  checkChinese (number) {
    let str = number
    let Expression = /^[^\u4e00-\u9fa5]{0,}$/
    let objExp = new RegExp(Expression)
    if (objExp.test(str)) {
      return true
    } else {
      return false
    }
  },
  //  为空
  checkNull (number) {
    let str = number
    if (str !== '') {
      return true
    } else {
      return false
    }
  },
  //
  checkAge (number) {
    let age = 2015 - parseInt(number.split('-')[0])
    if (age < 12) {
      return false
    } else {
      return true
    }
  }
}