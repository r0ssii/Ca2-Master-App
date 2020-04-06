<!--
@Date:   2020-03-03T15:08:05+00:00
@Last modified time: 2020-04-06T12:08:40+01:00
-->



<template>
<b-row>
    <b-col cols="8">
        <b-card title="Edit Enrolment" tag="article">
            <b-form @submit="onSubmit">
                <b-form-group id="input-group-1" label="Date:" label-for="input-1">
                    <div>
                        <b-form-datepicker id="example-datepicker" v-model="form.date" class="mb-2"></b-form-datepicker>
                        <p>Value:{{ form.date }}</p>
                    </div>
                </b-form-group>

                <b-form-group id="input-group-2" label="Time:" label-for="input-2">
                    <div>
                        <b-form-timepicker v-model="form.time" show-seconds locale="en"></b-form-timepicker>
                        <div class="mt-2">Value: {{ form.time }}</div>
                    </div>
                </b-form-group>

                <b-form-select v-model="form.status" :options="status" size="sm" class="mt-3"></b-form-select>
                <div class="mt-3">Selected: <strong v-if="form.status">{{ status.text }}</strong></div>

                <b-form-select v-model="form.course" size="sm" class="mt-3">
                    <option v-for="course in courses" v-bind:value='course.id'>{{course.title}}</option>
                </b-form-select>
                <div class="mt-3">Selected: <strong v-if="form.course">{{ form.course.title }}</strong></div>


                <b-form-select v-model="form.lecturer" size="sm" class="mt-3">
                    <option v-for="lecturer in lecturers" v-bind:value='lecturer.id'>{{lecturer.name}}</option>
                </b-form-select>
                <div class="mt-3">Selected: <strong v-if="form.lecturer">{{ form.lecturer.name }}</strong></div>


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
                date: '',
                time: '',
                status: '',
                course: '',
                lecturer: ''
            },
            value: '',

            loggedIn: false,
            errors: [],
            status: [{
                    value: null,
                    text: 'Please select an option'
                },
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
            ],
            courses: [],
            lecturers: []
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

            let app = this;
            let token = localStorage.getItem('token');
            axios.get('/api/courses', {
                    headers: {
                        Authorization: "Bearer " + token
                    }
                })
                .then(function(response) {
                    console.log(response.data);
                    app.courses = response.data.data;
                })
                .catch(function(error) {
                    console.log(error);
                })

            axios.get('/api/lecturers', {
                    headers: {
                        Authorization: "Bearer " + token
                    }
                })
                .then(function(response) {
                    console.log(response.data);
                    app.lecturers = response.data.data;
                })
                .catch(function(error) {
                    console.log(error);
                })
        } else {
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
                    date: app.form.date,
                    time: app.form.time,
                    status: app.form.status,
                    course_id: app.form.course,
                    lecturer_id: app.form.lecturer
                }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                .then(function(response) {
                    app.$router.push('/courses');
                })
                .catch(function(error) {
                    console.log(error.response.data);

                    app.errors = error.response.data.errors
                });


            axios.post('/api/lecturers', {
                    date: app.form.date,
                    time: app.form.time,
                    status: app.form.status,
                    course_id: app.form.course,
                    lecturer_id: app.form.lecturer
                }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                .then(function(response) {
                    app.$router.push('/courses');
                })
                .catch(function(error) {
                    console.log(error.response.data);

                    app.errors = error.response.data.errors
                });









        }
    }
}
</script>
