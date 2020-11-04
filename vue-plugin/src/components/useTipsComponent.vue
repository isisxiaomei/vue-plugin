<style lang="css" scoped>
#tips {
  width: 200px;
  height: 200px;
  background-color: skyblue;
  margin: 100px auto;
  text-align: center;
}
</style>
<template>
  <div id="tips" @click="btnClick" v-if="isShow">
    <p>{{ msg }}</p>
    <p>{{ tipType }}</p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isShow: true
    }
  },
  props: {
    msg: {
      type: String,
      required: true,
      default: '成功'
    },
    tipType: {
      type: String,
      default: 'success'
    }
  },
  methods: {
    btnClick () {
      this.isShow = false
    }
  }

}
</script>
