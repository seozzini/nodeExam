<!-- components/PageTitle.vue -->
<template>
  <h2>{{ title }}</h2>
</template>

<script>
export default {
  /*
  data() {
    return {
      title: 'Hello, World!',
    };
  },
  */
  props: ['title'], //부모가 넘겨주는 값 정의 / 배열(default) or 객체(복잡.설정필요)

  created() {
    console.log('PageTitle.vue Created');
  },
  mounted() {
    console.log('PageTitle.vue Mounted');
  },
};
</script>
