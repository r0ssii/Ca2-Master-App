<!--
@Date:   2020-03-03T15:08:05+00:00
@Last modified time: 2020-03-31T14:37:06+01:00
-->



<template>
<b-row>
    <b-col cols="8">
        <b-card title="Add Courses" tag="article">
            <b-form @submit="onSubmit">
              <b-form-group
                id="input-group-1"
                label="Title:"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="form.title"
                  type="text"
                  required
                  placeholder="Enter title"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-2"
                label="Code:"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  v-model="form.code"
                  type="text"
                  required
                  placeholder="Enter code"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-3"
                label="Description:"
                label-for="input-3"
              >
                <b-form-input
                  id="input-3"
                  v-model="form.description"
                  type="text"
                  required
                  placeholder="Enter description"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-4"
                label="Points:"
                label-for="input-4"
              >
                <b-form-input
                  id="input-4"
                  v-model="form.points"
                  type="number"
                  required
                  placeholder="Enter points"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-5"
                label="Level:"
                label-for="input-5"
              >
                <b-form-input
                  id="input-5"
                  v-model="form.level"
                  type="number"
                  required
                  placeholder="Enter level"
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
        title: '',
        code: '',
        description: '',
        points: '',
        level: ''
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

      axios.post('/api/courses', {
        title: app.form.title,
        code: app.form.code,
        description: app.form.description,
        points: app.form.points,
        level: app.form.level
      }, {
        headers: { Authorization: `Bearer ${token}`}
      })
      .then(function(response) {
        app.$router.push('/courses');
      })
      .catch(function (error) {
        console.log(error.response.data);

        app.errors = error.response.data.errors
      });











    }
  }
}
</script>
