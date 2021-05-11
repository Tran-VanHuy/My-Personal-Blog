<template>
<nav class="navbar navbar-expand-lg bg-dark navbar-dark nav-bar">
  <div class="container-fluid">
    <a class="navbar-brand ms-1 me-3" href="#">x7md</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mb-2 mb-lg-0">
        <li class="nav-item" v-for="tab in tabs" :key="tab" >
                <a class="nav-link" v-text="tab.title"
                 :class="{active: '/' + $page.relativePath.replace(/\..*?$|index\..*?$/, '') == tab.link}" 
                 :href="tab.link"></a>
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
  .nav-link {
    font-weight: 500;
  }
  .navbar-toggler {
    border: initial;
    color: transparent;
  }
  .navbar-dark .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='%23D1D5DB'%3E%3Cpath fill-rule='evenodd' d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  }
  .navbar-toggler:focus {
    box-shadow: 0 0 0 0.03rem;
  }
  .navbar-dark .navbar-nav .nav-link:not(.active) {
    color: #ffffff;
    opacity: 50%;
  }
</style>