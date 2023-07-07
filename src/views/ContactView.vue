<template>
  <h2>Connect with me</h2>
    <div class="container-fluid">
      <div class="container-right">
        <div class="address">
            <i class="bi bi-geo-alt-fill"></i>
            <h5>11640 ndwana Crescent Philippi, 7750 </h5>
        </div>
        <div class="email">
            <i class="bi bi-envelope-open-heart"></i>
            <h5 id="email_address">mongidlanjwa@gmail.com</h5>
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
          <form action="https://formspree.io/f/mrgwgeav" method="POST">
            <div class="row mb-3">
              <label for="inputName3" class="col col-form-label">Name</label>
              <div>
                <input type="text" class="form-control" id="inputName3" name="name" required>
              </div>
            </div>
            <div class="row mb-3">
              <label for="inputEmail3" class="col col-form-label">Email</label>
              <div>
                <input type="email" class="form-control" id="inputEmail3" name="_replyto" required>
              </div>
            </div>
            <div class="row mb-3">
              <label for="inputSubject3" class="col col-form-label">Subject</label>
              <div>
                <input type="text" class="form-control" id="inputSubject3" name="subject" required>
              </div>
            </div>
            <div class="row mb-3">
              <label for="inputMessage3" class="col col-form-label">Message</label>
              <div>
                <textarea class="form-control" id="inputMessage3" name="message" rows="8" required></textarea>
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

  

  form {
    text-align: center;
    padding-bottom: 1rem;
 
   

  }
  .container-fluid {
    display: flex;
    flex-direction: row;
    background-color: white;
    width: 100%;
    border-radius: 2%;
    margin-bottom: 2%;
   
    box-shadow: inset 0 0 15px #C3966C;
  }
  @media (width < 1000px) {
    .container-fluid {
      display: block;
      text-align: center;
     
      
    }
    .container-right{
      margin: auto;
      width: max-content;
    }
    .container-left {
      margin: auto;
    }
    #email_address {
      font-size: medium;
    }
  
  }
  
  .container-right {
    background-color: #C3966C;
    padding: 3%;
    margin: auto;
    width: fit-content;
    height: 60%;
   

  }
  
  .container-left {
    background-color:  white;
    margin: auto;
    width: fit-content;
    margin-top: 2%;
    margin-bottom: 1%;
    
 
    
  }
  
  .icons a {
    text-decoration: none;
    color: black;
    font-size: 10px;
  }
  
  .icons img {
    height: 2rem;
    color:black
  }
  
  .contact-me {
    text-align: left;
  }
  
 

  .bi{
    color:white
  }

  h5{
    color:black
  }

  
  </style>
  