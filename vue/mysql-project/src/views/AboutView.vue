<template>
  <div class="about">
    <h1>This is an about page</h1>
    <template :key="info.id" v-for="(info, idx) in list">
      <p v-if="idx % 2 == 0">{{ info }}</p>
    </template>
  </div>
</template>

<script>
//서버 연결 테스트
import axios from 'axios';

export default {
  data() {
    return {
      list: {},
    };
  },
  created() {
    axios
      .get('/api/customers')
      .then((result) => {
        this.list = result.data;
      })
      .catch((err) => console.log(err));
  },
};
</script>
