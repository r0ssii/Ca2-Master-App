<!--
@Date:   2020-03-10T15:21:26+00:00
@Last modified time: 2020-03-31T14:52:47+01:00
-->



<template>
  <div>
    <h3 v-if="loggedIn">You are Logged in!</h3>
    <b-form v-else @submit="onSubmit" >
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
      <b-form-input
        id="input-1"
        type="email"
        required
        placeholder="Enter email"
        v-model="form.email"
      >
      </b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Password:"
        label-for="input-2"
      >
      <b-form-input
        id="input-2"
        type="password"
        required
        placeholder="Enter password"
        v-model="form.password"
      >
      </b-form-input>
      <b-button @click="onSubmit(evt)" type="submit" variants="primary">Submit</b-button>
      </b-form-group>
    </b-form>
  </div>
</template>
<script>
export default {
  name: 'index',
  components: {

  },
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      loggedIn: false
    }
  },
  created(){
    if(localStorage.getItem('token')){
      this.loggedIn = true;
    }else{
      this.loggedIn = false;
    }
  },
  methods: {

    onSubmit(evt) {
      evt.preventDefault();

      let app = this;

      axios.post('/api/login', {
        email: app.form.email,
        password: app.form.password
      })
      .then(function(response) {
        localStorage.setItem('token', response.data.token)
      })
      .catch(function(error) {
        console.log(error);
      });
    }
  }
}
</script>
<style>
</style>
