
<template>
  <div>
    <div id="app">
    <Header id="headerStyle"/>
    <router-view/>
    
  </div>
  </div>
</template>

<script>
import Header from "./components/layout/header"
export default {
  name: 'app',
  components: {
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
