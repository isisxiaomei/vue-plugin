import Vue from "vue";
// import App from "./App.vue";
import AppTips from "./AppTips.vue";
import { useTipsPlugin } from "./common/useTipsPlugin.js";
// import { useEchartsPlugin } from './common/useEchartsPlugin'

// Vue.use(useEchartsPlugin)
Vue.use(useTipsPlugin)

new Vue({
  render () {
    return (
      <AppTips />
    )
  }
}).$mount("#app");
