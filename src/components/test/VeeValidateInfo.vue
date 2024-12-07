<template>
  <!-- Form 驗證資訊 -->
  <div class="box mb-5">
    <h4 class="mb-3">驗證資訊</h4>
    <ul>
      <li class="mb-2">errors：<br />{{ errors }}</li>
      <li class="mb-2">values：<br />{{ values }}</li>
      <!-- <li class="mb-2">validate：<br />{{ validate }}</li> -->
    </ul>
  </div>
</template>

<script>
export default {
  props: ['errors', 'values', 'validate'],
};
</script>
