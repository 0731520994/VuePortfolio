<template>
    <div class="container-fluid">
      <div class="row">
        <p class="lead">Copyright &copy;{{ cyear }}</p>
        <div class="social-icons">
          <a href="https://www.facebook.com/" target="_blank"><i class="bi bi-facebook"></i></a>
          <a href="https://www.instagram.com/" target="_blank"><i class="bi bi-instagram"></i></a>
          <a href="https://www.linkedin.com/feed/" target="_blank"><i class="bi bi-linkedin"></i></a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cyear: new Date().getFullYear()
      };
    }
  };
  </script>
  
  <style  scoped>
  .social-icons a {
    margin-right: 10px;
    color: black
  }
<<<<<<< HEAD
<<<<<<< HEAD
  
=======

  .container-fluid{
    color: #C3966C;
    background-color:#C3966C
  }

  .lead{
text-decoration: none;
  }
>>>>>>> parent of 349627a (update)
=======

  .container-fluid{
   
    background-color:#C3966C
  }

p{
  color:black
}

  body {
    height: 100%;
  }
  
  footer {
    padding: 20px;
    position: fixed;
    width: 100%;
 
  }
>>>>>>> 0630e40b0b879820d6dc645a39d5f962a2a6bf46
  </style>
  