<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');
@import "@/assets/styles/main.scss";
</style>

<template>
  <AppLayout>
    <router-view />
  </AppLayout>
</template>

<script>
import AppLayout from './App.Layout.vue';

export default {
  name: 'App',
  components: {
    AppLayout
  }
}
</script>
