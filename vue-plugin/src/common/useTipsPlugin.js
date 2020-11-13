import useTipsComponent from '../components/useTipsComponent.vue'

export const useTipsPlugin = {
    install: function (Vue) {
        const useTipsConstructor = Vue.extend(useTipsComponent)
        this.initParam()
        Vue.prototype.$tips = function (options) {
            // 这里必须定义propsData，因为给Vue.extend生成的构造器useTipsConstructor传递参数，必须使用propsData，不可以使用其他名字
            const propsData = options
            let instance = new useTipsConstructor({ propsData })
            document.querySelector('body').appendChild(instance.$mount().$el)
        }
    },
    initParam () {
        console.log('xxx');
    }
}

