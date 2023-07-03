<template>
    <div>
      <h1>Testimonials</h1>
      <div class="container-fluid">
        <div class="row">
          <div class="card-group">
            <div class="card" v-for="testimonial in testimonials" :key="testimonial.id">
              <img :src="testimonial.image" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">{{ testimonial.name }}</h5>
                <p class="card-text">{{ testimonial.description }}</p>
              </div>
              <div class="card-footer">
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
      testimonials() {
        return this.$store.state.testimonials;
      },
    },
    mounted() {
      this.$store.dispatch('fetchTestimonials');
    },
  };
  </script>
  
  <style scoped>
 
  </style>
  