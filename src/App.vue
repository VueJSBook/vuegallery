<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
  import Navbar from './components/Navbar'
  import Login from './components/Login'

  export default {
    name: 'app',
    components: { Navbar, Login }
  }
</script>

<style>
</style>

