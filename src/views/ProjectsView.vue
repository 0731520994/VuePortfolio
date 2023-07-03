<template>
  
        <h1>Projects</h1>
        <div class="container-fluid">
            <div class="col">
                <div class="card" style="width: 18rem" v-for="project in projects" :key="project.id">
                    <img :src="project.image" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">{{ project.name }}</h5>
                    <p class="card-text">{{ project.description }}</p>
                    <a href="#" class="btn btn-primary">Click</a>
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

</style>