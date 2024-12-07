<template>
  <nav class="bg-light">
    <div class="container">
      <router-link :to="{ name: 'testBsForm' }">Bootstrap 表單驗證</router-link>｜
      <router-link :to="{ name: 'testValidateOptions' }">VeeValidate Options API</router-link>｜
    </div>
  </nav>

  <hr style="margin: 0 0 24px; border: 3px solid pink; box-shadow: 2px 2px 3px orchid" />

  <router-view></router-view>
</template>

<style scoped lang="scss">
a {
  display: inline-block;
  padding: 12px 8px;

  &:hover {
    color: red;
  }
}
</style>
