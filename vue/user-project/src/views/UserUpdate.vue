<!-- views/UserUpdate.vue -->
<template>
  <div class="container">
    <table class="table table-bordered">
      <tbody>
        <tr>
          <th class="text-right">No</th>
          <th class="text-center">
            <input type="text" v-model="userInfo.user_no" disabled />
          </th>
        </tr>
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
      <button class="btn btn-info" @click="updateUserInfo">저장</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      userInfo: {},
    };
  },

  created() {
    // 1) 사용자가 선택한 대상을 확인
    //
    //this.$router.push({ name: 'userUpdate, params:{ user_no : userNo}' });
    let selectd = this.$route.params.user_no;
    // 2) 실제 데이터를 서버에서 가져옴
    this.getUserInfo(selectd);
  },

  methods: {
    async getUserInfo(userNo) {
      let result = await axios
        .get(`/api/users/${userNo}`)
        .catch((err) => console.log(err));
      this.userInfo = result.data;
      this.userInfo.join_date = this.dateFormat(
        this.userInfo.join_date,
        'yyyy-MM-dd'
      );
    },
    async updateUserInfo() {
      //전제조건 : 모든 데이터가 존재

      //1) 보낼 데이터 정리
      let obj = {
        user_id: this.userInfo.user_id,
        user_pwd: this.userInfo.user_pwd,
        user_name: this.userInfo.user_name,
        user_gender: this.userInfo.user_gender,
        user_age: this.userInfo.user_age,
        join_date: this.userInfo.join_date,
      };
      //2) 서버에 통신
      let result = await axios
        .put(`/api/users/${this.userInfo.user_no}`, obj)
        .catch((err) => console.log(err));
      let sqlRes = result.data;
      if (sqlRes.result) {
        alert('수정되었습니다.');
      } else {
        alert('수정되지 않았습니다.');
      }
    },
    dateFormat(value, format) {
      let date = value == null ? new Date() : new Date(value);

      let year = date.getFullYear();
      let month = ('0' + (date.getMonth() + 1)).slice(-2);
      let day = ('0' + date.getDate()).slice(-2);

      let result = format
        .replace('yyyy', year)
        .replace('MM', month)
        .replace('dd', day);
      return result;
    },
  },
};
</script>
