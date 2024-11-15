<!-- VueComponent.vue -->

<template>
  <!-- 주의! 탬플릿 안에 하나의 태그만 등록 -->
  <div>
    <label><input type="text" v-model="msg" /></label>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'VueComponent',
  data() {
    return {
      msg: '2024-11-15',
    };
  },
};
</script>

<style>
p {
  background-color: bisque;
}
</style>
