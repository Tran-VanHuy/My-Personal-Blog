<template>
  <Nav :tabs='tabs'/>
  <section class="container py-3">
  <div v-if="$frontmatter.home">
    <h1>This is index page!</h1>
  </div>
    <Content></Content>
  </section>
</template>

<script>
import Nav from './../../components/Nav.vue';
import 'bootstrap/dist/css/bootstrap.rtl.css';
import 'bootstrap/js/src/base-component.js';
import 'bootstrap/js/src/collapse.js';
export default {
  components: {
    Nav
  },
  data() {
    return {
      tabs:[{title: "Home", link: "/"},
            {title: "Test", link: "/post/start"},
            {title: "Subjects", link: "/post/start"}
            ]
    }
  },
  methods(){
    go: ()=>{console.log($site)}
  }
}
</script>
<style>
* {
  direction: rtl;
}
</style>