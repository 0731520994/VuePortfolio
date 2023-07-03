<template>
    <div class="container-fluid">
      <div class="row">
        <p class="lead">Copyright &copy;{{ cyear }}</p>
        <div class="social-icons">
          <a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook"></i></a>
          <a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>
          <a href="https://www.linkedin.com/feed/" target="_blank"><i class="fab fa-linkedin"></i></a>
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
  
  <style lang="scss" scoped>

  </style>
  