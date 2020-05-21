<template>
  <div id="main">
  </div>
</template>

<script>
import Vue from 'vue'
import Router from 'vue-router'
// import axios from 'axios'

Vue.use(Router)

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      todos: [
        
      ]
    }
  },
  methods: {
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }

  .btn {
    display: inline-block;
    border: none;
    background: #555;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
  }

</style>
