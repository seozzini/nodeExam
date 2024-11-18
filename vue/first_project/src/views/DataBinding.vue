<!-- DataBinding.vue -->
<template>
  <div>
    <!-- tag의 속성 -->
    <h1>{{ title + ' !!!! ' }}</h1>
    <!-- directive : vue의 명령 수행, 'v-' 접두어를 사용하는 경우-->
    <h2 v-text="title" id="home" />
    <p v-html="tagList" />
    <p v-text="tagList" v-bind:class="textStyle" />
    <!-- v-bind 디렉티브 : 단방향 (변수변경시 태그에 일방적으로 값을 넣음)-->
    <hr />

    <!-- v-model 디렉티브 : 양방향 -->
    <input type="text" v-model="valueModel" />
    <p>{{ valueModel + 10000 }}, {{ typeof valueModel }}</p>

    <input type="number" v-model.lazy="numberModel" />
    <p>{{ numberModel }}, {{ numberModel + 10000 }}</p>

    <select v-model="selectModel">
      <option value="summer">여름</option>
      <option value="winter">겨울</option>
    </select>
    <p>{{ selectModel }}</p>

    <textarea v-model="textModel"></textarea>
    <hr />
    <input type="checkbox" v-model="chData" true-value="여" false-value="부" />
    <p>{{ chData }}</p>

    <div>
      <input type="checkbox" value="서울" v-model="city" />서울
      <input type="checkbox" value="대구" v-model="city" />대구
      <p>{{ city }}</p>
    </div>
    <hr />
    <div>
      <input type="radio" value="독서" v-model="hobby" />독서
      <input type="radio" value="영화" v-model="hobby" />영화
      <input type="radio" value="운동" v-model="hobby" />운동
      <p>{{ hobby }}</p>
    </div>
    <hr />
    <img v-bind:style="styleData" v-bind:src="imgUrl" />
    <div
      class="container"
      v-bind:class="{ active: isActive, 'text-red': hasError }"
    >
      <!-- 객체 기반 클래스명에 바인딩하면 on-off 가능 -->
      class Binding First
    </div>
    <div class="container" v-bind:class="myClass">Class Binding Second</div>
  </div>
</template>

<script>
export default {
  data() {
    // 데이터 바인딩에 사용하는 데이터들(CRUD)
    return {
      title: 'Hello, Vue.js',
      tagList: '<strong>Today is ...</strong>',
      textStyle: 'text-red',
      valueModel: 'Korea',
      numberModel: '0',
      selectModel: 'winter',
      textModel: '백견불여일타',
      chData: '', //default는 true/false
      city: [], //checkBox 중복선택 가능해서
      hobby: '',
      styleData: {
        //객체(스타일속성(카멜표기법):값)
        // backgroundColor: 'skyblue',
        'background-color': 'skyblue',
        width: '200px',
      },
      //backSetting: 'background-color : skyblue; width:200px',
      imgUrl: 'http://kr.vuejs.org/images/logo.png',
      isActive: false,
      // hasError: !this.isActive,
      myClass: 'active',
    };
  },
  computed: {
    //이미 존재하는 데이터 기반으로 계산한 결과값 저장하는 속성(Read Only)
    hasError: function () {
      return !this.isActive;
    },
  }, // 데이터 바인딩에 사용하는 데이터들(R)
  methods: {}, // 컴포넌트 내부에서 사용하는 기능 및 함수
  watch: {}, // 감시자(바인딩된 변수들의 변경사항)
  components: {}, // 하위 컴포넌트 목록
  props: [], // 부모로부터 넘겨받은 데이터들
};
</script>

<style>
.text-red {
  color: red;
}
.text-blue {
  color: blue;
}
.container {
  width: 100%;
  height: 200px;
}
.active {
  background-color: aquamarine;
  font-weight: bold;
}
</style>
