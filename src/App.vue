<template>
  <div id="app">
    <Blog :bejegyzesek="posts"/>
  </div>
</template>

<script>
import Blog from "./components/Blog.vue"

export default {
  name: 'App',
  components: {
    Blog
  },
  data() {
    return {
      posts: [
        {
          title: 'Post 1',
          body: 'Ez a törzse az első postnak'
        },
        {
          title: 'Post 2',
          body: 'Ez a törzse az második postnak'
        },
        {
          title: 'Post 3',
          body: 'Ez a törzse az harmadik postnak'
        },
        {
          title: 'Post 4',
          body: 'Ez a törzse az negyedik postnak'
        },
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
