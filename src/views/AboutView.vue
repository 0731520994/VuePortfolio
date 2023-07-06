<template>

  <div class="container-fluid">
    <h2>About</h2>
    <img src="https://i.postimg.cc/GpYRNcBR/1641824566516.jpg" alt="profile" >
    <p>I am a communication-savvy individual who loves challenges and works hard to complete tasks. I enjoy learning new skills and thrive in a challenging environment.</p>
    <p>As the qualification, I have Btech in Public relations with majors in Media Studies, Communications, Marketing and Public Relations. What drove me to coding is the fact that technology and the 4IR is changing daily and the only way to stay up to date is learning new skills in an environment that values change with technology and time. </p>
  
  </div>

  <div class="skills-section">
    <h2>Skills</h2>
      <div class="card-group">
        <div class="card">
          <img src="https://i.postimg.cc/j2RBH9Bz/Bootstrap-logo-svg-2.png" class="card-img-top img-fluid" alt=" Bootstrap logo">
          <div class="card-body">
            <h5 class="card-title">Bootstrap</h5>
            <p class="card-text">Skilled in utilizing the Bootstrap framework to develop responsive and mobile-first websites,
              Bootstrap's grid system and pre-built components for rapid development.
              Experienced in customizing Bootstrap styles to match specific design requirements.</p>
          </div>
        </div>
        <div class="card">
          <img src="https://i.postimg.cc/9Q7Hyzb2/html.png" class="card-img-top img-fluid" alt="Html logo">
          <div class="card-body">
            <h5 class="card-title">HTMl</h5>
            <p class="card-text">Proficient in writing clean and structured HTML code.
              Experienced in creating responsive web pages using HTML5 and CSS3.</p>
          </div>
        </div>
        <div class="card">
          <img src="https://i.postimg.cc/FsqQf0jG/css.png" class="card-img-top img-fluid" alt="CSS logo">
          <div class="card-body">
            <h5 class="card-title">CSS</h5>
            <p class="card-text">Skilled in applying styles, designing responsive layouts, and implementing animations and transitions.</p>
          </div>
        </div>
      </div>
      <div class="card-group">
        <div class="card">
          <img src="https://i.postimg.cc/RhpxLH2S/download.png" class="card-img-top img-fluid" alt="Javascript logo">
          <div class="card-body">
            <h5 class="card-title">JavaScript</h5>
            <p class="card-text">Understanding of core JavaScript concepts.
              Skilled in developing interactive web applications.</p>
          </div>
        </div>
        <div class="card">
          <img src="https://i.postimg.cc/y6MPkdDc/download-1.png" class="card-img-top img-fluid" alt="vue logo">
          <div class="card-body">
            <h5 class="card-title">Vue</h5>
            <p class="card-text">Skilled in developing dynamic and interactive user interfaces using Vue.js.
              Building single-page applications and integrating Vue.js .</p>
          </div>
        </div>
        <div class="card">
          <img src="https://i.postimg.cc/zGHZr3HM/Photoshop-1.png" class="card-img-top img-fluid" alt="Photoshop logo">
          <div class="card-body">
            <h5 class="card-title">Photoshop</h5>
            <p class="card-text">Skilled in using Adobe Photoshop for image editing, retouching, and graphic design.
              Knowledgeable in working with layers, filters, and various tools to achieve desired visual effects.</p>
          </div>
        </div>
      </div>
      <a class="btn btn-primary" href="#" role="button">CV</a>
   </div>
    
    
    
   
</template>

<script>
export default {
  name: 'AboutView',
  components: {

  }
}
</script>

<style coped>
.logos img {
  height: 3rem;
}

.button {
  background-color: black;
  margin: 5px;
}

.button a {
  text-decoration: none;
  color: brown;
}


img{
  width:20%;
  height:30%;
  padding:2%
}

h3{
  padding: 2rem;
  text-decoration: underline;
}

.card-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; 
}

.card-img-top {
  max-width: 20%;
  height: auto;
  align-self: center;
}

</style>

