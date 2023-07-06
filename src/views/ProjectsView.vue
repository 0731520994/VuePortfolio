<template>
  <h2>Projects</h2>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <div class="card-group">
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
  </div>
  
  
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

background-color: #C3966C;
color: white;
font-weight: bold;
}

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
</style>