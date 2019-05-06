// webpack-dev-server 热更新功能，建立一个websocket连接实时响应代码的修改
// 这样引入css，代表js动态插入css，但是项目大了样式会比较多，放js太占体积，不能做缓存，此时可以多插件
import Vue from 'vue'
import App from './app.vue';

// 箭头函数中的this指向就是定义时所在的对象，不是使用时所在的对象
new Vue({
  el:"#app",
  render:h=>h(App)
});
