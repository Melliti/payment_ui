<template>
    <header class="header">
        <h1>Arjun Pay</h1>
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/Profile">Profile</router-link> |
            <router-link to="/login">Login</router-link>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header"
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