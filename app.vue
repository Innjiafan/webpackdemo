<!-- template内写的html完全等同html,webpack会把他编译为render的函数形式，style中的样式会提取并打包到main.css中 -->
<template lang="html">
  <div>
    <v-title title="Vue组件化"></v-title>
    <v-button @click="handleClick">点击按钮</v-button>
    <p>
      <img src="./component/images/image1.jpeg" alt="" style="width:200px;">
    </p>
  </div>
</template>

<script>
import vTitle from './component/template/title.vue';
import vButton from './component/template/button.vue';
export default {
  components:{
    // 对象字面量缩写，当对象的key和value一致时，可以缩写为一个
    vTitle,
    vButton
  },
  methods:{
    handleClick(e){
      console.log(e);
    }
  }
}
</script>

<!-- scoped代表仅在此组件内有效 -->
<style lang="css" scoped>
</style>
