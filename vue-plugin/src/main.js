import Vue from "vue";
// import App from "./App.vue";
// import AppTips from "./AppTips.vue";
import AppToast from "./AppToast.vue";
// import { useTipsPlugin } from "./common/useTipsPlugin.js";
import { useToastPlugin } from "./common/useToastPlugin.js";
// import { useEchartsPlugin } from './common/useEchartsPlugin'

// Vue.use(useEchartsPlugin)
// Vue.use(useTipsPlugin)
Vue.use(useToastPlugin)
new Vue({
  render () {
    return (
      <AppToast />
    )
  }
}).$mount("#app");
