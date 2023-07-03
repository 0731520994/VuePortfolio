<template>
    <template>
        <div>
          <div class="container-fluid">
            <div class="row">
              <div class="col">
                <div class="card" style="width: 18rem" v-for="resume in resumes" :key="resume.id">
                  <div class="card-body">
                    <h5 class="card-title">{{ resume.year }}</h5>
                    <p class="card-text">{{ resume.description }}</p>
                    <h6 class="card-subtitle mb-2 text-muted">{{ resume.place }}</h6>
                    <p class="card-text">{{ resume.type }}</p>
                    <a :href="resume.certificate" class="card-link">Certificate</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
      
   
</template>

<script>
export default {
  computed: {
    resume() {
      return this.$store.state.resume;
    },
  },
  mounted() {
    this.$store.dispatch('fetchResume');
  },
};
</script>

<style scoped>

</style>