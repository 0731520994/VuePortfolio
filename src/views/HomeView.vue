<template>
  <div class="container-fluid">
    <div class="image-container">
      <img src="https://i.postimg.cc/vHrRDftM/Home-2.png" alt="background" loading="lazy">
      <div class="text-container">
        <h1>Aspiring</h1>
        <h2>Full-Stack Web Developer</h2>
        <p>Mongikazi Dlanjwa</p>
      </div>
      <!-- Modal button -->
      <button class="btn btn-primary modal-button" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Click😊</button>
    </div>
  </div>

  <!-- Modals -->
  <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Modal 1</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          Welcome to my portfolio🎉
        </div>
        <div class="modal-footer">
          <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Next</button>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">Modal 2</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>Age:25</p>
          <p>Nationality: South African</p>
          <p>Availability: Immediately</p>
        </div>
        <div class="modal-footer">
          <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Back to first</button>
        </div>
      </div>
    </div>
  </div>
 
</template>

<script>


export default {
  name: 'HomeView',
  components: {
  
  }
}
</script>
<style scoped>
h1{
  color: black;
}

h2{
  color:black;
  padding:0;
}
p{
  color:black;
}

 
 @media (width<800px) {
  .text-container {
    top: 40%;
    left: 60%
  }

  h2 {
    font-size: 9px;
  }
}
</style>