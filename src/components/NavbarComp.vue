<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <img src="" alt="logo" loading="lazy" width="45px" height="40px">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" >Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" >About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/resume" >Resume</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/projects" >Projects</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/testimonials" >Testimonials</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" >Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
 
  }

</script>


<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #C3966C;
 
}


nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color:black;
}

nav a.router-link-exact-active {
  color: #C3966C;
}
</style>

