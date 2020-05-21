
<template>
  <div id="app">
    <Header id="headerStyle"/>
    <router-view/>
    <Nav></Nav>
  </div>
</template>

<script>
import Header from "./components/layout/header"
import Nav from './components/Nav'
export default {
  name: 'app',
  components: {
    'Nav': Nav,
    'Header': Header
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

#headerStyle{
  height: 5rem;
}

</style>
