<!-- views/UserAdd.vue -->

<template>
  <div class="container">
    <table class="table table-bordered">
      <tbody>
        <tr>
          <th class="text-right">아이디</th>
          <th class="text-center">
            <input type="text" v-model="userInfo.user_id" />
          </th>
        </tr>
        <tr>
          <th class="text-right">비밀번호</th>
          <th class="text-center">
            <input type="password" v-model="userInfo.user_pwd" />
          </th>
        </tr>
        <tr>
          <th class="text-right">이름</th>
          <th class="text-center">
            <input type="text" v-model="userInfo.user_name" />
          </th>
        </tr>
        <tr>
          <th class="text-right">성별</th>
          <th class="text-center">
            <input type="radio" value="M" v-model="userInfo.user_gender" />남자
            <input type="radio" value="F" v-model="userInfo.user_gender" />여자
          </th>
        </tr>
        <tr>
          <th class="text-right">나이</th>
          <th class="text-center">
            <input type="text" v-model="userInfo.user_age" />
          </th>
        </tr>
        <tr>
          <th class="text-right">가입일자</th>
          <th class="text-center">
            <input type="date" v-model="userInfo.join_date" />
          </th>
        </tr>
      </tbody>
    </table>
    <div>
      <button class="btn btn-info" @click="addUserInfo">등록</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      userInfo: {
        user_id: '',
        user_pwd: '',
        user_name: null,
        user_gender: null,
        user_age: 0,
        join_date: null,
      },
    };
  },
  methods: {
    async addUserInfo() {
      let result = await axios
        .post(`/api/users`, this.userInfo) //등록된 객체 가지고 가요
        .catch((err) => console.log(err));
      console.log(result.data);
      if (result.data.user_no > 0) {
        alert('등록되었습니다.');
        this.$router.push({
          name: 'userInfo',
          query: { no: result.data.user_no },
        });
      } else {
        alert('등록되지 않았습니다.');
      }
    },
  },
};
</script>
