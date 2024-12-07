import './assets/scss/all.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

// 匯入 vee-validate
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate';
// 匯入 vee-validate 相關規則，如必填、email 等等
import { required, email, regex } from '@vee-validate/rules';
// 匯入 vee-validate 多國語系的功能
import { localize, setLocale } from '@vee-validate/i18n';
// 匯入 vee-validate 語系檔案
import zh_TW from '@vee-validate/i18n/dist/locale/zh_TW.json'; // 繁體中文
import en from '@vee-validate/i18n/dist/locale/en.json'; // 英文

// 匯入自訂義的規則
import { validationRules } from './assets/js';

// 定義 vee-validate 驗證規則
defineRule('required', required);
defineRule('email', email);
defineRule('regex', regex);

// 自訂義手機驗證規則 1
// 僅吐回驗證是否通過（true / false）
defineRule('mobileRule1', (value) => {
  return validationRules.checkMobile(value);
});

// 自訂義手機驗證規則 2
// 驗證不通過時，直接吐回錯誤訊息
defineRule('mobileRule2', (value) => {
  return validationRules.checkMobile(value) ? true : '[defineRule mobileRule2] 手機格式不正確';
});

// 自訂義手機驗證規則 3
// 僅吐回驗證是否通過（true / false）
// 在語系中自訂相對應的錯誤訊息
defineRule('mobileRule3', (value) => {
  return validationRules.checkMobile(value);
});

// 自訂義手機驗證規則 4
// 僅吐回驗證是否通過（true / false）
// 在語系中自訂相對應的錯誤訊息
// 能夠傳入額外的參數
defineRule('mobileRule4', (value, others) => {
  console.log(`[mobileRule4] others ==>`, others);
  return validationRules.checkMobile(value);
});

// 設定 vee-validate 全域規則
configure({
  // validateOnInput: true, // 當輸入任何內容直接進行驗證
  // generateMessage: localize({ zhTW: zh_TW }), // 載入繁體中文語系 (六角範例寫法)
  // generateMessage: localize({ zh_TW, en }), // 載入繁體中文語系 (參考官網寫法)

  // 在語系中自訂驗證訊息
  generateMessage: localize({
    zh_TW: {
      messages: {
        ...zh_TW.messages,
        mobileRule3: '[defineRule mobileRule3 zh_TW] {field} 格式錯誤',
      },
    },
    en: {
      messages: {
        ...en.messages,
        mobileRule3: '[defineRule mobileRule3 en] {field} format error',
      },
    },
  }),
});

// 設定 vee-validate 預設語系
// setLocale('zhTW'); // 繁體中文 (六角範例寫法)
// setLocale('en');  // 英文 (參考官網寫法)
setLocale('zh_TW'); // 繁體中文 (參考官網寫法)

const app = createApp(App);
app.use(createPinia());
app.use(router);

// 註冊 vee-validate 元件
app.component('VeeForm', Form);
app.component('VeeField', Field);
app.component('VeeErrorMessage', ErrorMessage);

app.mount('#app');
