<!-- views/CustomerAdd.vue -->
<template>
  <div class="container">
    <div class="row">
      <label>이름</label>
      <input type="text" v-model="info.name" />
      <!-- nameOK되면 warning클래스가 disabled됨 -->
      <div class="form-text" :class="{ warning: nameOk }">
        이름이 입력되지 않았습니다.
      </div>
      <div class="form-text" :class="{ warning: !nameOk }">
        사용 가능한 이름입니다.
      </div>
    </div>
    <div class="row">
      <label>이메일</label>
      <input type="email" v-model="info.email" />
    </div>
    <div class="row">
      <label>연락처</label>
      <input type="tel" v-model="info.phone" />
    </div>
    <div class="form-text" :class="{ warning: phoneOk }">
      연락처가 입력되지 않았습니다.
    </div>
    <div class="row">
      <label>주소</label>
      <input type="text" v-model="info.address" />
    </div>
    <div class="row">
      <button
        type="button"
        class="btn btn-info"
        v-on:click="addCustomer"
        :disabled="!(nameOk && phoneOk)"
      >
        등록
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
        name: null,
        email: null,
        phone: null,
        address: null,
      },
    };
  },
  computed: {
    nameOk() {
      return this.info.name != null && this.info.name != '';
    },
    phoneOk() {
      return this.info.phone != null && this.info.phone != '';
    },
  },
  methods: {
    async addCustomer() {
      let result = await axios
        .post('/api/customers', this.info)
        .catch((err) => console.log(err));
      let sqlRes = result.data; //돌아온데이터
      let customerId = sqlRes.insertId; // Mysql의 AUTO_INCREMENT 사용 시
      if (customerId > 0) {
        alert('정상적으로 등록되었습니다.');
        this.$router.push({
          name: 'customerInfo',
          query: { customerId: customerId },
        });
      } else {
        alert('정상적으로 등록되지 않았습니다.');
      }
    },
    async fetchVer() {
      let result = await fetch('', {
        method: 'post',
        headers: {
          'content-type': 'application/json', //컨텐트타입선택
        },
        body: JSON.stringify(this.info), //JSON 메소드로 데이터 변환
      })
        .then((res) => res.json()) // 파싱
        .catch((err) => console.log(err));
      console.log(result);
    },
  },
};
</script>

<style>
.warning {
  display: none;
}
</style>
