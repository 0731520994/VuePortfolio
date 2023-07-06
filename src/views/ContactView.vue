<template>
    <h2>contact</h2>
    <div class="container-fluid">
      <div class="container-right">
        <div class="address">
            <i class="bi bi-geo-alt-fill"></i>
            <h5>11640 ndwana Crescent Philippi, 7750 </h5>
        </div>
        <div class="email">
            <i class="bi bi-envelope-open-heart"></i>
            <h5>mongidlanjwa@gmail.com</h5>
        </div>
        <div class="call">
            <i class="bi bi-telephone-fill"></i>
            <h5>0731520994/ 0639118613</h5>
        </div>
        <div class="WhatsApp">
            <i class="bi bi-whatsapp"></i>
            <h5>0731520994</h5>
        </div>
      </div>
  
      <div class="container-left">
        <div class="contact-me">
          <form>
            <div class="row mb-3">
              <label for="inputName3" class="col-sm-2 col-form-label">Name</label>
              <div class="col-sm-10">
                <input type="name" class="form-control" id="inputName3">
              </div>
            </div>
            <div class="row mb-3">
              <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
              <div class="col-sm-10">
                <input type="email" class="form-control" id="inpuEmail3">
              </div>
            </div>
            <div class="row mb-3">
              <label for="inputSubject3" class="col-sm-2 col-form-label">subject</label>
              <div class="col-sm-10">
                <input type="subject" class="form-control" id="inputSubject3">
              </div>
            </div>

            <div class="row mb-3">
              <label for="inputMessage3" class="col-sm-2 col-form-label">Message</label>
              <div class="col-sm-10">
                <textarea type="message" class="form-control" id="inputMessage3" row="8"></textarea>
              </div>
            </div>
           
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>



        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactView'
  }
  </script>
  
  <style scoped>
  .container-fluid {
    display: flex;
    flex-direction: row;
    background-color: white;
    width: 100%;
    border-radius: 2%;
    Border: 2% solid #C3966C
   
   
 
  
  }
  
  .container-right {
    background-color: #C3966C;
    padding: 3%;
    margin-top: 3%;
    margin-bottom: 3%;
    width: 60%;
    height: 60%;

  }
  
  .container-left {
    background-color:  white;
    margin: 3%;
    width: 40%;
    Border: 2% solid #C3966C
  }
  
  .icons a {
    text-decoration: none;
    color: black;
    font-size: 10px;
  }
  
  .icons img {
    height: 2rem;
  }
  
  .contact-me {
    text-align: left;
  }
  
  .main-container {
    border-radius: 25px;
  }
  </style>
  