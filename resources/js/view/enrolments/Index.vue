<!--
@Date:   2020-03-28T16:37:37+00:00
@Last modified time: 2020-03-28T16:41:05+00:00
-->



<template>
  <b-row align-h="center">
    <b-col cols="12">

      <b-table-simple hover responsive>
        <b-head>
          <b-tr>
            <b-th>Date</b-th>
            <b-th>Time</b-th>
            <b-th>Status: </b-th>
            <b-th>Course_Id</b-th>
            <b-th>Lecturer_Id</b-th>
          </b-tr>
        </b-head>
        <b-body>
          <b-tr v-for="item in items" :key="item.id">
            <b-td>{{ item.date }}</b-td>
            <b-td>{{ item.time }}</b-td>
            <b-td>{{ item.status }}</b-td>
            <b-td>{{ item.Course_Id }}</b-td>
            <b-td>{{ item.Lecturer_Id }}</b-td>  
          </b-tr>
        </b-body>
      </b-table-simple>
    </b-col>
  </b-row>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
            value: 'Interested',
            text: 'Interested'
        },
        {
            value: 'Assigned',
            text: 'Assigned'
        },
        {
            value: 'Associate',
            text: 'Associate'
        },
        {
            value: 'Career Break',
            text: 'Career Break'
        }

      ]
    }
  },
  created(){
    let app = this;
    let token = localStorage.getItem('token');
    axios.get('/api/enrolment', {
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
