<template>
  <div id="app"></div>
</template>

<script>
export default {
  name: "App",
  mounted () {
    this.$tips({
      msg: 'hello',
      tipsType: 'success'
    })
  }


};
</script>

