<template>
  <div id="app"></div>
</template>

<script>
export default {
  name: "App",
  mounted () {
    this.$toast({
      msg: 'hello',
      tipsType: 'success'
    })
  }


};
</script>

