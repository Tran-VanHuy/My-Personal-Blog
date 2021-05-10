<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mb-2 mb-lg-0">
        <li class="nav-item" v-for="tab in tabs" :key="tab" >
                <a class="nav-link" v-text="tab.title" :href="tab.link"></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
props: ["tabs"]
}
</script>

<style scoped>

</style>