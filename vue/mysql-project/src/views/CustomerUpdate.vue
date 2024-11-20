<!-- views/CustomerUpdate.vue -->

<template>
  <div class="container">
    <div class="row">
      <label>아이디</label>
      <input type="text" v-model="info.id" readonly />
    </div>
    <div class="row">
      <label>이름</label>
      <input type="text" v-model="info.name" />
    </div>
    <div class="row">
      <label>이메일</label>
      <input type="email" v-model="info.email" />
    </div>
    <div class="row">
      <label>연락처</label>
      <input type="tel" v-model="info.phone" />
    </div>
    <div class="row">
      <label>주소</label>
      <input type="text" v-model="info.address" />
    </div>
    <div class="row">
      <button type="button" class="btn btn-info" v-on:click="updateCustomer">
        저장
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      info: {
        id: null,
        name: null,
        email: null,
        phone: null,
        address: null,
      },
    };
  },
  created() {
    // 1) 사용자가 선택한 대상의 원래 데이터 조회
    // => 단건조회
    let selectd = this.$route.params.customerId;
    this.getCustomerInfo(selectd);
  },
  methods: {
    async getCustomerInfo(id) {
      let result = await axios
        .get(`/api/customers/${id}`)
        .catch((err) => console.log(err));
      this.info = result.data;
    },
    // 2)사용자가 버튼 클릭 시, 서버에 전송
    // => 등록
    async updateCustomer() {
      let updateDta = {
        //보내려는 데이터를 담은 객체를 만들어 보냄
        name: this.info.name,
        email: this.info.email,
        phone: this.info.phone,
        address: this.info.address,
      };
      let result = await axios
        .put(`/api/customers/${this.info.id}`, updateDta) //객체에 등록된 속성 제거하기 어려움, 없는것을 더하긴 쉬움
        .catch((err) => console.log(err));
      let sqlRes = result.data;
      if (sqlRes.changedRows > 0) {
        alert('수정되었습니다.');
      } else {
        alert('수정되지 않았습니다.');
      }
    },
  },
};
</script>
