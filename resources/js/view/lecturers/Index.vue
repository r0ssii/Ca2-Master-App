<!--
@Date:   2020-03-24T13:28:22+00:00
@Last modified time: 2020-03-31T15:16:45+01:00
-->



<template>
  <b-row align-h="center">
    <b-col cols="12">

      <b-table-simple v-if="items.length>0" hover responsive>
        <b-head>
          <b-tr>
            <b-th>Name</b-th>
            <b-th>Address</b-th>
            <b-th>Phone</b-th>
            <b-th>Email</b-th>
          </b-tr>
        </b-head>
        <b-body>
          <b-tr v-for="item in items" :key="item.id">
            <b-td>{{ item.name }}</b-td>
            <b-td>{{ item.address}}</b-td>
            <b-td>{{ item.phone }}</b-td>
            <b-td>{{ item.email }}</b-td>
            <b-td><router-link :to="`/lecturers/edit/${item.id}`">Edit</router-link></b-td>
          </b-tr>
        </b-body>

      </b-table-simple>
      <p v-else>No Lectures</p>
    </b-col>
  </b-row>
</template>
<script>
export default {
  data() {
    return {
      items: []
    }
  },
  created(){
//console.log("error here");
    let app = this;
    let token = localStorage.getItem('token');
    axios.get('/api/lecturers', {
      headers: { Authorization: "Bearer " + token}
    })
    .then(function (response) {
       console.log(response.data);
       app.items = response.data.data;
    })
    .catch(function (error) {
       console.log(error);
    })
  },
  methods: {

  }
}
</script>
<style>
</style>
