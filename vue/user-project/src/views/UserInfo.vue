<!-- views/UserInfo.vue -->

<template>
  <div class="container">
    <table class="table">
      <tr>
        <th class="text-right">No</th>
        <th class="text-center">{{ userInfo.user_no }}</th>
      </tr>
      <tr>
        <th class="text-right">아이디</th>
        <th class="text-center">{{ userInfo.user_id }}</th>
      </tr>
      <tr>
        <th class="text-right">비밀번호</th>
        <th class="text-center">{{ userInfo.user_pwd }}</th>
      </tr>
      <tr>
        <th class="text-right">이름</th>
        <th class="text-center">{{ userInfo.user_name }}</th>
      </tr>
      <tr>
        <th class="text-right">성별</th>
        <th class="text-center">
          {{ userInfo.user_gender == null ? null : userGender }}
        </th>
      </tr>
      <tr>
        <th class="text-right">나이</th>
        <th class="text-center">{{ userInfo.user_age }}</th>
      </tr>
      <tr>
        <th class="text-right">가입일자</th>
        <th class="text-center">{{ userInfo.join_date }}</th>
      </tr>
    </table>
    <div>
      <button class="btn btn-info" @click="goToUpdateForm(userInfo.user_no)">
        수정
      </button>
      <router-link to="userList" class="btn btn-light">목록</router-link>
      <button class="btn btn-warning" @click="delUserInfo(userInfo.user_no)">
        삭제
      </button>
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
  computed: {
    //수정이 가능한 상태에서는 computed가 적절하지 않음/단건조회라 가능
    userGender() {
      return this.userInfo.user_gender == 'M' ? '남' : '여'; //성별없으면 '여'라고 나옴 위에서 처리
    },
  },
  created() {
    // 1) 사용자가 선택한 대상을 확인
    // this.$router.push({ name: 'userInfo', query: { no: userNo } }); List에서 넘겨준거
    let selected = this.$route.query.no;
    // 2) 실제 데이터를 서버에서 가져옴
    this.getUserInfo(selected);
  },
  methods: {
    async getUserInfo(userNo) {
      let result = await axios
        .get(`/api/users/${userNo}`)
        .catch((err) => console.log(err));
      this.userInfo = result.data;
    },
    async delUserInfo(userNo) {
      let result = await axios
        .delete(`/api/users/${userNo}`)
        .catch((err) => console.log(err));
      console.log(result.data);

      let delRes = result.data;
      if (delRes.result == 'success') {
        alert('삭제되었습니다.');
        this.$router.push({ name: 'userList' });
      } else {
        alert('삭제되지 않았습니다.');
      }
    },
    goToUpdateForm(userNo) {
      /*
        {
          path: '/userUpdate/:user_no', //2)params
          name: 'userUpdate',
          component: UserUpdate,
        },
      */
      this.$router.push({ name: 'userUpdate', params: { user_no: userNo } });
    },
  },
};
</script>
