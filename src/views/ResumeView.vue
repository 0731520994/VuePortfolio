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

<<<<<<< HEAD
=======


.card{
  border-radius: 50%;
  margin: 3%;
  margin-left: 40%;
  box-shadow: 6px 10px #C3966C;
 
}

h6{
  text-decoration: 2px underline #C3966C;
}

h5{
  color:  black;
  text-shadow: 8px 4px 2px #C3966C;
}

.table-row {
  border-bottom: 1px solid #000;
}
.table-row:last-child {
  border-bottom: none;
}
.table-col {
  padding: 10px;
  border-right: 1px solid #000;
}
.table-col:last-child {
  border-right: none;
}
>>>>>>> parent of 349627a (update)
</style>