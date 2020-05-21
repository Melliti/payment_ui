<template>
    <header class="header">
        <h1>Arjun Pay</h1>
        <nav>
            <router-link v-for="routes in links" 
            v-bind:key="routes.id"
            :to="`${routes.page}`">{{routes.text}}</router-link>
        </nav>
    </header>
</template>

<script>
export default {
    name: "Header",
    data() {
    return {
      links: [
        {
          id: 0,
          text: 'Home',
          page:'/Home'
        },
        {
          id: 1,
          text: 'Profile',
          page:'/Profile'
        },
        {
          id: 3,
          text: 'Login',
          page:'/Login'
        },
      ]
    }
  }
}
</script>

<style scoped>
    .header {
        height: 15vh;
        background: #333;
        color: #fff;
        text-align: center;
        padding: 10px;
    }

    #nav a {
        color: #fff;
    }

    .header a {
        color: #fff;
        padding-right: 5px;
        text-decoration: none;
    }
</style>