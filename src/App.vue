
<template>
  <div id="app">
      <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>

import navbar from './components/Navbar'

export default {
  name: 'app',
  components:{
      'navbar':navbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  background-color: #d6d6d6;
  
}
#register{
  border-radius: 20px;
}
</style>
