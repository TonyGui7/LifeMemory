<template>
  <Wedding msg=""/>
  <TestLoad msg="Test Load Protocol"/>
</template>

<script>
import TestLoad from './components/TestLoad.vue'
import Wedding from './components/Wedding.vue'

export default {
  name: 'App',
  components: {
    Wedding,
    TestLoad
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
