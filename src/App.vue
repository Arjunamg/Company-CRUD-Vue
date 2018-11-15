<template>

  <div id="app">
    <navbar></navbar>
    <!-- <ListCompany></ListCompany> -->
    <!-- <ListCompany msg="Welcome to Your Vue.js App"/> -->
    
    <router-view></router-view>
  </div>
</template>

<script>
import ListCompany from './components/listCompany.vue'
import navbar from './components/navbar.vue'

export default {
  name: 'app',
  components: {
    ListCompany,
    navbar
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
