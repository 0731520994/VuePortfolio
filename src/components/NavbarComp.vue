<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <img src="" alt="" loading="lazy">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/" >Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/about" >About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/resume" >Resume</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/projects" >Projects</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/testimonials" >Testimonials</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/contact" >Contact</router-link>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
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

