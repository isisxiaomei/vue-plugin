import useTipsComponent from '../components/useTipsComponent.vue'

export const useTipsPlugin = {
    install: function (Vue) {
        const useTipsConstructor = Vue.extend(useTipsComponent)
        this.initParam()
        Vue.prototype.$toast = function (options) {
            const propsData = options
            let instance = new useTipsConstructor({ propsData })
            document.querySelector('body').appendChild(instance.$mount().$el)
        }
    },
    initParam () {
        console.log('xxx');
    }
}