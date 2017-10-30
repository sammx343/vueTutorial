import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods : {
    getServer(server){
      this.$emit('serverInformation', server);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
