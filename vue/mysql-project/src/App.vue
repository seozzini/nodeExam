<!--app.vue-->
<template>
  <div>
    <!-- header component -->
    <DefaultHeader />
    <!-- content component -->
    <router-view />
    <!-- footer component -->
  </div>
</template>

<script>
import DefaultHeader from './layouts/DafaultHeader.vue';

export default {
  components: {
    DefaultHeader,
  },
};
</script>
