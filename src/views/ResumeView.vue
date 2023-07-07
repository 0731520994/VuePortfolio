<template>
<h2>Education</h2>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <div class="card" style="width: 18rem" v-for="resume in resume" :key="resume.id">
          <div class="card-body">
            <h5 class="card-title">{{ resume.year }}</h5>
            <p class="card-text">{{ resume.description }}</p>
            <h6 class="card-subtitle mb-2 text-muted">{{ resume.place }}</h6>
            <p class="card-text">{{ resume.type }}</p>
            <a :href="resume.certificate" class="btn btn-primary">Click</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <h2>Experience</h2>
    <div class="container">

      <div class="container">
        <div class="row table-row">
          <div class="col-6 table-col" style="background-color:#C3966C">
            <p>YEAR/S </p>
          </div>
          <div class="col-6 table-col" style="background-color:#C3966C">
            <p>EXPERIENCE</p>
          </div>
        </div>
      

        <div class="row table-row">
          <div class="col table-col">April 2023-</div>
          <div class="col table-col">
            <h5>Life Choices Academy</h5>
            <h6>Aspiring Full-stack web developer</h6>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>JavaScript</li>
              <li>Vue</li>
            </ul>
          </div>
        </div>

        <div class="row table-row">
          <div class="col table-col">Dec 2020- Aug 2022</div>
          <div class="col table-col">
            <h5>St Johns College</h5>
            <h6>Education Assistant</h6>
            <ul>
              <li>Admin work, data capturing: word, excel, and SASAMS</li>
              <li>Invigilating</li>
              <li>Assisting teachers with teaching material</li>
            </ul>
          </div>
        </div>
      
        <div class="row table-row">
          <div class="col table-col">Jan-Feb 2020</div>
          <div class="col table-col">
            <h5>Silulo Ulutho Technologies</h5>
            <h6>Sales Consultant</h6>
            <ul>
              <li>Assisting with daily tasks: typing, scanning, etc.</li>
              <li>Assisting with school and job applications</li>
              <li>Editing designs using Photoshop</li>
            </ul>
          </div>
        </div>
      
        <div class="row table-row">
          <div class="col table-col">July - Dec 2017</div>
          <div class="col table-col">
            <h5>UCR-FM</h5>
            <h6>Sales and Marketing</h6>
            <ul>
              <li>Attending Client queries, quotations, and invoices</li>
              <li>Writing and editing advert scripts</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
      
      
      
      
      
    
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
<<<<<<< HEAD
=======
=======
>>>>>>> 0630e40b0b879820d6dc645a39d5f962a2a6bf46


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
<<<<<<< HEAD
>>>>>>> parent of 349627a (update)
=======



>>>>>>> 0630e40b0b879820d6dc645a39d5f962a2a6bf46
</style>