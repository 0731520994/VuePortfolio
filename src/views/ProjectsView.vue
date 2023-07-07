<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
          <div class="card project-card" v-for="project in projects" :key="project.id">
            <img :src="project.image" class="card-img-top img-fluid" alt="">
            <div class="card-body">
              <h5 class="card-title">{{ project.name }}</h5>
              <a :href="project.url" class="btn btn-primary ">Netlify</a>
              <a :href="project.url1" class="btn btn-primary">Github</a>
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
.container-fluid{
  width:60%
}
.container-fluid {
  display: flex;
  flex-direction: row;
  background-color: white;
  width: 100%;
  border-radius: 2%;
  border: 2% solid #C3966C;
  margin: 2rem
}
.project-card {
  width: 45%; 
  border: 2px solid #C3966C;
  margin: 1rem; 
  display: inline-block;
  box-sizing: border-box;
  padding: 1rem;
  justify-content: space-between;
}

.card-img-top {
  width: 100%;
  aspect-ratio: 3/2;
  object-position: center;
  
}

.card-title {
  text-align: center;
}

.btn {
  align-self: center;
  align-content: center;
  float: center;
  margin:3%
}


</style>