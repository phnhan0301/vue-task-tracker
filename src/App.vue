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
