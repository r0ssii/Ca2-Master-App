<!--
@Date:   2020-02-18T14:38:50+00:00
@Last modified time: 2020-03-28T14:36:19+00:00
-->



<template>
  <div>
    <MyNavbar />
    <b-container>
      <router-view />
    </b-container>
    <MyFooter />
  </div>
</template>
<script>
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'

export default {
  name: 'app',
  components: {
    MyNavbar,
    MyFooter
  },
  data() {
    return {

    }
  }
}
</script>
<style>
</style>
