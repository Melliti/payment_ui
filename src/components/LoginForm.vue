<template>
    <article>
        <div class="container" :class="{'sign-up-active' : signUp}">
            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-left">
                        <h2>Welcome Back</h2>
                        <p>Please login with your personal info</p>
                        <button class="invert" id="signIn" @click="signUp = !signUp">Sign In</button>
                    </div>
                    <div class="overlay-right">
                        <h2>Hello Friend !</h2>
                        <p>Please enter your personal details</p>
                        <button class="invert" id="signUp" @click="signUp = !signUp">Sign Up</button>
                    </div>
                </div>
            </div>
            <form class="sign-up" action="#" @submit.prevent="signUpSubmit">
                <h2>Create login</h2>
                <div>Use your email for registration</div>
                <div class="form-block">
                    <input type="text" placeholder="First name" class="firstname" v-model="signInInput.firstName" required/>
                    <input type="text" placeholder="Last name" class="lastname" v-model="signInInput.lastName" required/>
                </div>
                <input type="email" placeholder="Email" v-model="signInInput.email" required/>

                <vue-tel-input v-model="signInInput.phoneNumber" class="input" placeholder="Phone number" required></vue-tel-input>
                <!-- {{signInInput.phoneNumber}} -->
                <input type="password" placeholder="Password" v-model="signInInput.password" required/>
                <input type="password" placeholder="Confirm Password" v-model="signInInput.repeat_password" required/>
                <div class="form-block">
                    <input type="text" placeholder="Zip" class="zip" v-model="signInInput.address.zipcode" required/>
                    <input type="text" placeholder="Street" class="street" v-model="signInInput.address.street" required/>
                </div>
                <div class="form-block">
                    <input type="text" placeholder="City" class="city" v-model="signInInput.address.city" required/>
                    <input type="text" placeholder="Country" class="country" v-model="signInInput.address.country" required/>
                </div>
                <input type="date" placeholder="Birthdate" v-model="signInInput.birthdate" required/>

                <button>Sign Up</button>
            </form>
            <form class="sign-in" action="#" @submit.prevent="logInSubmit">
                <h2>Sign In</h2>
                <div>Use your account</div>
                <input type="email" placeholder="Email" v-model="logInInput.email"/>
                <input type="password" placeholder="Password" v-model="logInInput.password"/>
                <a href="#">Forgot your password ?</a>
                <button>Sign In</button>
            </form>
        </div>
    </article>
</template>

<script>
import Vue from 'vue'
import VueTelInput from 'vue-tel-input'
import axios from 'axios'
Vue.use(VueTelInput)


export default {
    name: "LoginForm",
    data: () => {
        return {
            signUp: false,
            signInInput: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                repeat_password: '',
                address: {
                    street: '',
                    zipcode: '',
                    city: '',
                    country: ''
                },
                phoneNumber: '',
                birthdate: ''
            },
            logInInput: {
                email: '',
                password: ''
            },
            errors: []
        }
    },
    mounted: function() {
        const dropdown_tel = document.getElementsByClassName("vti__dropdown-list");
        console.log(dropdown_tel);
        dropdown_tel[0].style.position = "initial";
        dropdown_tel[0].style.border = "none";
        
    },
    methods: {
        passwordConfirm () {
            if (this.signInInput.password !== this.signInInput.repeat_password)
                this.errors.push('Password missmatch')
            if (this.signInInput.password.length < 6)
                this.errors.push('Your password must have at least 6 characters');
            console.log(this.errors);
            
        },
        signUpSubmit() {
            this.errors = [];
            console.log(this.signInInput);
            const date = Date(this.signInInput.birthdate);
            this.passwordConfirm();
            console.log(date);
            console.log(this.signInInput.birthdate);
            
            axios.post('http://localhost:3000/users/signup', JSON.stringify(this.signInInput), {headers: {"content-type": "application/json"}})
            .then(res => console.log(res))
            .catch(error => console.log(error));
            
        },
        logInSubmit() {
            
            console.log(this.logInInput);
            axios.post('http://localhost:3000/users/login', JSON.stringify(this.logInInput), {headers: {"content-type": "application/json"}})
            .then(res => {
                console.log(res);
                const token = res.data.token;
                const base64Url = token.split('.')[1];
                const base64 = base64Url.replace('-', '+').replace('_', '/');
                console.log(JSON.parse(window.atob(base64)));
                localStorage.setItem('token', token);
                })
            .catch(error => console.log(error));
            
        }
    },
    components: {
    }
}
</script>

<style lang="scss" scoped>
    ul {
        position: initial;
    }

    article {
        height: 85vh;
        justify-content: center;
        align-items: center;
    }

    .container {
        position: relative;
        margin-top: 5%;
        margin-left: 20%;
        margin-bottom: 10%;
        width: 65%;
        height: 600px;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 15px 30px rgba(0, 0, 0, .2),
                    0 10px 10px rgba(0, 0, 0, .2);
        background: linear-gradient(to bottom,  #efefef, #ccc);

        .overlay-container {
            position:absolute;
            top: 0;
            left: 50%;
            width: 50%;
            height: 100%;
            overflow: hidden;
            transition: transform .5s ease-in-out;
            z-index: 100;
        }

        .overlay {
            position: relative;
            left: -100%;
            height: 100%;
            width: 200%;
            background: linear-gradient(to bottom right, #aaf, #eee); //42b983
            color: #fff;
            transform: translateX(0);
            transition: transform .5s ease-in-out;
        }

        @mixin overlays($property) {
            position: absolute;
            top: 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-direction: column;
            padding: 70px 70px;
            width: 50%;
            height: 100%;
            text-align: center;
            transform: translateX($property);
            transition: transform .5s ease-in-out;
        }

        .overlay-left {
            @include overlays(-20%);
            

        }

        .overlay-right {
            @include overlays(0);
            right: 0;            
        }
    }

    h2 {
        margin: 0;
    }

    p {
        margin: 20px 0 30px;
    }

    a {
        color: #222;
        text-decoration: none;
        margin: 15px 0;
        font-size: 1rem;
    }

    button {
        border-radius: 20px;
        border: 1px solid #999;
        background-color: #333;
        color: white;
        font-size: 1rem;
        font-weight: bold;
        padding: 10px 40px;
        letter-spacing: 1px;
        text-transform: uppercase;
        transition: transform .1s ease-in;

        &:active {
            transform: scale(.9);
        }

        &:focus {
            outline: none;
        }
    }

    button.invert {
        background-color: transparent;
        border-color: white;
    }

    form {
        position: absolute;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
        padding: 40px 60px;
        width: 50%;
        height: 100%;
        text-align: center;
        background: linear-gradient(to bottom, #efefef, #ccc);
        transition: all .5s ease-in-out;
    }

    div {
        font-size: 1rem
    }

    input, .input {
        background-color: #eee;
        border: none;
        padding: 8px 15px;
        margin: 6px 0;
        width: calc(100% - 30px);
        border-radius: 15px;
        border-bottom: 1px solid #ddd;
        box-shadow: inset 0 1px 2px rgba(0, 0, 0, .4), 
                    0 -1px 1px #fff, 
                    0 1px 0 #fff;
        overflow: hidden;

        &.input {
            padding: 0;

        }

        &:focus {
            outline: none;
            background-color: #fff;
        }
    }

    .sign-in {
        left: 0;
        z-index: 2;
    }

    .sign-up {
        left: 0;
        z-index: 1;
        opacity: 0;
    }

    .sign-up-active {
        .sign-in {
            transform: translateX(100%);
        }

        .sign-up {
            transform: translateX(100%);
            opacity: 1;
            z-index: 5;
            animation: show .5s;
        }

        .overlay-container {
            transform: translateX(-100%);
        }

        .overlay {
            transform: translateX(50%);
        }

        .overlay-left {
            transform: translateX(0);
        }

        .overlay-right {
            transform: translateX(20%);
        }
    }

    @keyframes show {
        0% {
            opacity: 0;
            z-index: 1;
        }

        49% {
            opacity: 0;
            z-index: 1;
        }

        50% {
            opacity: 1;
            z-index: 10;
        }
    }

    .form-block {
        display: flex;
        width: calc(100% - 30px);
        justify-content: space-between;
    }

    .zip {
        width: 25%;
    }

    .street {
        width: 70%;
    }

    .city, .country, .firstname, .lastname {
        width: 47%;
    }

</style>