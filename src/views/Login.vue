<template>
    <div id="login">
        <LoginForm />
    </div>
</template>

<script>
import LoginForm from "../components/LoginForm"

export default {
    name: "Login",
    components: {
        LoginForm
        }
}
</script>

<style>
    #login {
        height: 100%;
    }
</style>