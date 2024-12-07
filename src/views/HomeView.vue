<script setup>
import TheWelcome from '../components/TheWelcome.vue';

const apiRoot = import.meta.env.VITE_API_ROOT;
const apiProjectPath = import.meta.env.VITE_API_PROJECT_PATH;
</script>

<template>
  <main>
    <p>API Root：{{ apiRoot }}</p>
    <p>API Project Path：{{ apiProjectPath }}</p>

    <div>
      <button type="button" class="btn btn-primary">Primary</button>
      <button type="button" class="btn btn-secondary">Secondary</button>
      <button type="button" class="btn btn-success">Success</button>
      <button type="button" class="btn btn-danger">Danger</button>
      <button type="button" class="btn btn-warning">Warning</button>
      <button type="button" class="btn btn-info">Info</button>
      <button type="button" class="btn btn-light">Light</button>
      <button type="button" class="btn btn-dark">Dark</button>
    </div>

    <TheWelcome />
  </main>
</template>
