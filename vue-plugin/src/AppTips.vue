<template>
  <div id="app"></div>
</template>

<script>
export default {
  name: "App",
  mounted () {
    this.$toast({
      msg: '成功',
      tipsType: 'success'
    })
  }


};
</script>

