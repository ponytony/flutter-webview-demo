import Vue from 'vue'
import App from './App.vue'
import 'vant/lib/popup/style';
import 'vant/lib/datetime-picker/style';
import dateTimeComponent from './components/datetime.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

let datetime = new Vue({
  el: '#datetime',
  render: h => h(dateTimeComponent, {ref: 'datetime'})
});
Vue.prototype.$datetime = datetime.$refs.datetime.showPicker;
window.test = datetime.$refs.datetime.showPicker;
