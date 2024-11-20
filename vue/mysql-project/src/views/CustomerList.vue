<!-- views/CustomerList.vue -->
<template>
  <div class="container">
    <table class="table">
      <caption>
        Total :
        {{
          count
        }}
      </caption>
      <thead>
        <tr>
          <th>No</th>
          <th>아이디</th>
          <th>이름</th>
          <th>연락처</th>
        </tr>
      </thead>
      <tbody>
        <template v-if="count > 0">
          <tr
            v-for="(info, idx) in customerList"
            :key="info.id"
            v-on:click="goToCustomerInfo(info.id)"
          >
            <td>{{ idx + 1 }}</td>
            <td>{{ info.id }}</td>
            <td>{{ info.name }}</td>
            <td>{{ info.phone }}</td>
          </tr>
        </template>
        <tr v-else>
          <td colspan="4">현재 데이터가 존재하지 않습니다.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'; // AJAX를 진행하는 라이브러리.모듈 (비동기/언제끝날지 알수없음->가장 빨리 실행해줘야함)

export default {
  data() {
    return {
      customerList: [],
    };
  },
  computed: {
    count() {
      return this.customerList.length;
    },
  },
  created() {
    // 컴포넌트가 초기화할 데이터 호출
    this.getCustomerList();
  },
  methods: {
    async getCustomerList() {
      // 서버의 응답 + 네트워크 정보 포함
      let result = await axios
        .get('/api/customers') // http://localhost:8081/api/customers
        .catch((err) => console.log(err));
      this.customerList = result.data; // 실제 서버가 응답한 데이터
    },
    goToCustomerInfo(id) {
      this.$router.push({ name: 'customerInfo', query: { customerId: id } }); //$는 option으로 분류. 숨겨진 필드.
      // query : { key : value } => ?key=value
      // pareams
      // 1) route의 path 속성 : '/target/:uId' (패스에 정의)
      // 2) params : { uId : value } => /target/value (강제성/반드시 값이 있어야 될 경우)
    },
  },
};
</script>
