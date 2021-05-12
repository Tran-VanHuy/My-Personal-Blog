<template>
  <Nav :tabs='tabs'/>
  <transition name="slide-fade" v-on:after-leave="trn_end" v-on:before-enter="trn_do">
  <section class="container py-3" v-bind:key="$page.title">
  <div v-if="$frontmatter.home">
    <h1>This is index page!</h1>
  </div>
    <Content></Content>
  </section>
  </transition>
</template>

<script>
import Nav from './../../components/Nav.vue';
import 'bootstrap/dist/css/bootstrap.rtl.css';
import '../fonts/fonts.css';
import '../../../fix_bootstrapBuild/collapse.js';
export default {
  components: {
    Nav
  },
  data() {
    return {
    tabs:[{title: "الرئيسية", link: "index.html"},
          {title: "تجربة", link: "post/start"},
          {title: "المواضيع", link: "post/.."}
          ]
    }
  }, 
  methods() {
    return {
      trn_do: function(){
        document.body.style.overflow = "hidden";
      }, 
      trn_end: function(){
        this.$nextTick(function () {
          document.body.style.overflow = "auto";
        })
      }
    }
  }
}
</script>
<style>
body, #app{
  min-height: 100vh;
  background-color: #191919;
}
p, span {
  color: #ffffff
}
h1, h2, h3, h4, h5, h6 {
  color: #ffffff
}
</style>