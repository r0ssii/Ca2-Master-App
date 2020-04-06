<!--
@Date:   2020-03-03T15:08:05+00:00
@Last modified time: 2020-03-25T12:04:42+00:00
-->



<template>
<b-row>
    <b-col cols="8">
        <b-card title="Add Lectures" tag="article">
            <b-form @submit="onSubmit">
              <b-form-group
                id="input-group-1"
                label="Name:"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="lecturer.name"
                  type="text"
                  required
                  placeholder="Enter Name"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-2"
                label="Address"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  v-model="lecturer.address"
                  type="text"
                  required
                  placeholder="Enter Address"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-3"
                label="Phone:"
                label-for="input-3"
              >
                <b-form-input
                  id="input-3"
                  v-model="lecturer.phone"
                  type="text"
                  required
                  placeholder="Enter Phone"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-4"
                label="Level:"
                label-for="input-4"
              >
                <b-form-input
                  id="input-4"
                  v-model="lecturer.email"
                  type="number"
                  required
                  placeholder="Enter Email"
                ></b-form-input>
              </b-form-group>
                <b-button type="submit" variants="primary">Submit</b-button>

            </b-form>
        </b-card>
    </b-col>
</b-row>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: '',
      address: '',
        phone: '',
        email: ''
      },
      loggedIn: false,
      errors:[]
    }
  },
  computed: {
    codeValid() {
      return this.form.code.length <= 5 && this.form.code.length > 0
    }
  },
  created() {
    if (localStorage.getItem('token')) {
      this.loggedIn = true;
    }
    else {
      this.loggedIn = false;
      this.$router.push('/');
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()

      let app = this;
      let token = localStorage.getItem('token');

      axios.post('/api/lecturers', {
        name: app.form.name,
        address: app.form.address,
        phone: app.form.phone,
        email: app.form.email
      }, {
        headers: { Authorization: `Bearer ${token}`}
      })
      .then(function(response) {
        app.$router.push('/lecturers');
      })
      .catch(function (error) {
        console.log(error.response.data);

        app.errors = error.response.data.errors
      });











    }
  }
}
</script>
