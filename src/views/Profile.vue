<template>
  <div class="info-main-wrapper" style="background-color:gray">
    <v-layout>
      <v-flex xs12>
        <v-card max-width="50rem" class="mx-auto">
              <v-row align="center" justify="center" class="fill-height">
                  <v-avatar size="5rem" tile>
                    <!-- Emplacement de l'Avatar user <v-img :src="getAvatar()"></v-img>-->
                  </v-avatar>
                  <v-file-input
                    :rules="rules"
                    accept="image/png, image/jpeg, image/bmp"
                    placeholder="Choisissez une photo de profil"
                    prepend-icon="mdi-camera"
                    label="Avatar"
                    v-model="file">
                  </v-file-input>
                  <v-text-field v-model="name" label="Nom d'utilisateur">{{user.name}}</v-text-field>
                  <v-text-field v-model="email" label="Email">{{user.email}}</v-text-field>
              </v-row>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Profile',
  components: {
  },
  data() {
    return {
      users: [],
      user:{
        id: '',
        name:'',
        userName: '',
        email: '',
      }
    }
  },
  mounted: function() {
    axios.get('https://jsonplaceholder.typicode.com/users',{
    }).then((response) => {
      console.log(response);
      console.log(' TO '+name);
      this.id = response.data[0].id;
      this.name = response.data[0].name;
      this.email = response.data[0].email;
    })
  },
  methods: {
    //0: {id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz", address: {…}, …}
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