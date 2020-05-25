<template>
  <div class="info-main-wrapper">
        <div class="cardWrapper">
              <div class="dataContainer">
                  <div>AVATAR HERE</div>
                  <div>{{name}}</div>
                  <div>{{email}}</div>
              </div>
        </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Profile',
  data() {
    return {
      users: [],
        id: '',
        name:'',
        userName: '',
        email: '',
    }
  },
  created() {
    axios.get('https://jsonplaceholder.typicode.com/users',{
      }).then((response) => {
        console.log(response);
        this.id = response.data[0].id;
        this.name = response.data[0].name;
        this.email = response.data[0].email;
        console.log(this.name);
      })
  },
}
</script>

<style scoped>

.cardWrapper{
    background-color: #dedede;
    width: 50%;
    align-items: center;
    align-content: center;
    margin-left: 25%;
    margin-top: 5%;
    border-radius: 10px;
    box-shadow:0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}

.dataContainer{
  padding: 30px;
}

</style>