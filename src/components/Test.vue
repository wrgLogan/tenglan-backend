<template>
  <div class="page">
    <h1>test</h1>
    <el-button  type="primary" icon="el-icon-search" v-on:click="switchTo">切换</el-button>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    switchTo: function () {
      this.$switchTo('/', 'forward')
    }
  }
}
</script>

<style scoped>

</style>
