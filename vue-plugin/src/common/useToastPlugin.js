import Toast from "../components/Toast.vue";
// vue插件的对象使用方式：
export const useToastPlugin = {
    install: function (Vue) {
        // 1.使用Toast组件生成组件构造器
        const ToastConstructor = Vue.extend(Toast)
        // 2.使用组件构造器创建组件对象
        const toast = new ToastConstructor();
        // 3. 将组件对象手动挂载到某个html元素上
        toast.$mount(document.createElement('div'))
        // 4. 将toast组件对象的dom节点添加到body中
        document.body.appendChild(toast.$el)
        // 5. 将toast组件对象挂载到vue原型
        Vue.prototype.$toast = toast
    }
}