<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data () {
    return {
    }
  },
  beforeCreate() {
    console.log("父组件beforeCreate")
  },
  created() {
    console.log("父组件created")
  },
  beforeMount() {
    console.log("父组件beforeMount")
  },
  mounted() {
    console.log("父组件mounted")
  },
  beforeUpdate() {
    console.log("父组件beforeUpdate")
  },
  updated() {
    console.log("父组件updated")
  },
  beforeDestroy() {
    console.log("父组件beforeDestroy")
  },
  destroyed() {
    console.log("父组件destroyed")
  },
  methods: {}
}
</script>
