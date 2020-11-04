import echarts from 'echarts'
export const useEchartsPlugin = {
    install: function (Vue) {
        Vue.component('echart', {
            mounted () {
                const $el = document.querySelector('.echarts')
                const myChart = echarts.init($el);
                myChart.setOption(this.optionProp);
            },
            props: {
                optionProp: {
                    type: Object,
                    required: true
                }
            },
            render () {
                return (
                    <div class="echarts" style={{ width: '600px', height: '400px' }}>
                    </div>
                )
            }
        })
    }
}