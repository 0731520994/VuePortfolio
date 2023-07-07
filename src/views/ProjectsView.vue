<template>
<<<<<<< HEAD
<<<<<<< HEAD
=======
  <h2>Projects</h2>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <div class="card-group">
=======
  <div class="container-fluid">
    <div class="row">
      <div class="col">
>>>>>>> 0630e40b0b879820d6dc645a39d5f962a2a6bf46
          <div class="card project-card" v-for="project in projects" :key="project.id">
            <img :src="project.image" class="card-img-top img-fluid" alt="">
            <div class="card-body">
              <h5 class="card-title">{{ project.name }}</h5>
              <a :href="project.url" class="btn btn-primary">Click</a>
            </div>
          </div>
        </div>
      </div>
    </div>
<<<<<<< HEAD
  </div>
  
>>>>>>> parent of 349627a (update)
=======
 
  
>>>>>>> 0630e40b0b879820d6dc645a39d5f962a2a6bf46
  
</template>

<script>
export default {
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },
  mounted() {
    this.$store.dispatch('fetchProjects');
  },
};
</script>

<style scoped>
.btn {

<<<<<<< HEAD
background-color: #C3966C;
color: white;
font-weight: bold;
}

<<<<<<< HEAD
=======
.project-card {
  width: 50%; 
  border:none

}

.card-img-top {
  width: 10rem;
  aspect-ratio: 4/4;
  object-fit: cover;
  object-position: center;
}

.card-title{
text-align: start;
}

.btn {
align-self: start;
align-content: start;
float: left;
}
>>>>>>> parent of 349627a (update)
=======
.project-card {
  width: 30%; 
  border: 2px solid #C3966C;
  margin: 1rem; 
  display: inline-block;
  box-sizing: border-box;
  padding: 1rem;
  justify-content: space-between;
}

.card-img-top {
  width: 100%;
  aspect-ratio: 2/1;
  object-position: center;
  
}

.card-title {
  text-align: center;
}

.btn {
  align-self: center;
  align-content: center;
  float: center;
}


>>>>>>> 0630e40b0b879820d6dc645a39d5f962a2a6bf46
</style>