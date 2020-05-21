<template>
<div class="info-main-wrapper">
  <v-layout
  >
    <v-flex xs12>
      <v-card max-width="344"
    class="mx-auto">
        <v-card-title class="headline">Mes informations</v-card-title>
        <v-card-text>
              <v-row
                align="center"
                justify="center"
                class="fill-height"
              >
                  <v-avatar
                    size="60%"
                    tile
                  >
                    <v-img :src="getSrc()"></v-img>
                  </v-avatar>
              </v-row>
          <v-text-field v-model="user.name" label="Nom d'utilisateur"></v-text-field>
          <v-text-field v-model="user.email" label="Email"></v-text-field>
          <v-file-input
            :rules="rules"
            accept="image/png, image/jpeg, image/bmp"
            placeholder="Choisissez une photo de profil"
            prepend-icon="mdi-camera"
            label="Avatar"
            v-model="file"
          ></v-file-input>
        </v-card-text>
        <v-card-actions>
          <v-btn block text  @click="changeInfo">Modifier</v-btn>
        </v-card-actions>
        
      </v-card>
    </v-flex>
  </v-layout>
      <v-snackbar
      v-model="snackbar"
      :color="snackbarColor"
      :timeout="timeout"
    >
      {{ snackbarText }}
      <v-btn
        dark
        text
        @click="snackbar = false"
      >
        Fermer
      </v-btn>
    </v-snackbar>
  <v-dialog
    v-model="dialog"
    hide-overlay
    persistent
    width="300"
  >
    <v-card
      color="primary"
      dark
    >
      <v-card-text>
        Upload de votre image en cours.. 
        <v-progress-linear
          indeterminate
          color="white"
          class="mb-0"
        ></v-progress-linear>
      </v-card-text>
    </v-card>
  </v-dialog>
</div>
</template>

<script>
import axios from 'axios'
export default {
  middleware:'auth',
  data() {
    return {
      user:{
        avatar: '',
        name:"",
        email:"",
      },
      rules: [
        value => !value || value.size < 2000000 || 'Votre avatar doit avoir une taille inférieur à 2 MB!',
      ],
      file:[],
      dialog:false,
      snackbar:false,
      snackbarText:"",
      snackbarColor:"",
      timeout:3000
    }
  },
  created(){
    this.user.name = this.$auth.user.name
    this.user.email = this.$auth.user.email
    this.user.avatar = this.$auth.user.avatar ? this.$auth.user.avatar : 'avatar.png'
  },
  methods:{
    getSrc() {
      return 'https://relevant.cynnfx.fr/avatars/' + this.user.avatar
    },
    changeInfo(){
      axios.put('https://relevant.cynnfx.fr/api/user/'+this.$auth.user.id, {
          email: this.user.email,
          name: this.user.name
        })
        .then(response => {
          this.snackbar = true
          this.snackbarText = "Vos informations ont bien été mise à jour."
          this.snackbarColor = 'success'
        })
        .catch(error => {
        });
      if (this.file.length === undefined) {
        this.dialog = true
        var formData = new FormData(); 
        formData.append("avatar", this.file);
        axios
          .post("https://relevant.cynnfx.fr/api/user/" + this.$auth.state.user.id + "/uploadFiles/avatar", formData)
          .then(response => {
            if (response.data.code === 200) {
              this.dialog = false
              window.location.reload()
            }
          })
          .catch(error => {
          });
      } else {
          console.log("there are no files.");
      }
    }
  }
}
</script>


<style scoped>
  .title {
    justify-content: center;
  }
  .info-main-wrapper{
    width: 98%;
    margin-left: 1%;
    margin-right: 1%;
    border-radius:1rem;
  }
  .card-wrapper{
    border-radius: 1rem;
  }
</style>

<style>
.v-content{
    background-color: #eaeaea;
}

.dashboard-wrapper{
  border-radius: 1rem;
}

</style>