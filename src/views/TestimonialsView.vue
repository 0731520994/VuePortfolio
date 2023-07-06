<template>
      <h2>Testimonials</h2>
      <div class="container-fluid">
        <div class="row">
          <div class="card-group">
            <div class="card border=0 mb-3" v-for="testimonial in testimonials" :key="testimonial.id">
              <img :src="testimonial.image" class="card-img-top" alt="...">
              <div class="card-body">
                <h6 class="card-title">{{ testimonial.name }}</h6>
                <p class="card-text">{{ testimonial.description }}</p>
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
  .card-img-top{
    padding: 2%;
    width: 40%;
    height: 25%;
    align-self: center;
    border-radius: 80%;
   
  }

  .container-fluid{
    width: 100%;
    height: 80%;
    justify-content: space-between;
   
  }

  h6{
    text-decoration: 2px underline #C3966C;
  }

  .card-group{
    justify-content:space-between;
  }
  </style>
  