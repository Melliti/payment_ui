<template>
  <div class="about">
    <!-- <h1>This is the TodoList app v1.0.</h1> -->
    <h2 v-if="this.users.length > 0">{{this.users[0].name}}</h2>
    <h3 v-if="this.users.length > 0">{{this.users[0].money}}</h3>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Profile',
  components: {

  },
  mounted: function() {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => this.createUser(response));
    // .then(response => this.users = response.data);
  },
  data() {
    return {
      users: []
    }
  },
  methods: {
    createUser(response) {
      console.log(response.data[0]);
      console.log(typeof response);
      const user = {
          name: response.data[0].name,
          money: response.data[0].phone
        };
      this.users.push(user);
      console.log(this.users)
      console.log(user)
      console.log("jusqu'ici tout va bien");

    }
  }
}
</script>

<style scoped>

</style>