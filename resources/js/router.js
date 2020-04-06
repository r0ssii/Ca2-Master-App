/**
 * @Date:   2020-02-18T14:46:24+00:00
 * @Last modified time: 2020-03-31T15:21:34+01:00
 */



import Vue from 'vue'
import Router from 'vue-router'

import Index from './view/index'
import Example from './view/example'
import CoursesIndex from './view/courses/Index'
import CoursesEdit from './view/courses/Edit'
import CoursesCreate from './view/courses/Create'

import LecturesCreate from './view/lecturers/Create'
import LecturesEdit from './view/lecturers/Edit'
import LecturesIndex from './view/lecturers/Index'
import LecturesShow from './view/lecturers/Show'

import EnrolmentsCreate from './view/enrolments/Create'



Vue.use(Router)

export default new Router({
mode:'history',
base: process.env.BASE_URL,
routes:[
{
  path:'/',
  name:'index',
  component: Index
},
{
  path:'/example',
  name:'example',
  component: Example
},
{
path:'/courses',
name:'coursesIndex',
component: CoursesIndex
},
{
  path:'/courses/edit/:id',
  name:'coursesEdit',
  component: CoursesEdit
},
{
  path:'/courses/create',
  name:'CoursesCreate',
  component: CoursesCreate
},
{
path:'/lecturers/create',
name:'LecturesCreate',
component: LecturesCreate
},
{
path:'/lectures/edit',
name:'LecturesEdit',
component: LecturesEdit
},
{
path:'/lectures/index',
name:'LecturesIndex',
component: LecturesIndex
},
{
path:'/lectures/show',
name:'LecturesShow',
component: LecturesShow
},
{
  path:'/enrolments/create',
  name:'EnrolmentsCreate',
  component: EnrolmentsCreate
}

]

})
