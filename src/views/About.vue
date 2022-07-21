<template>
  <div class="About">
    <h1 class="about-heading">ABOUT ME</h1>
    <div class="container-fluid mt-5">
      <div class="row">
        <div class="col-md-6">
          <div class="row">
            <!-- for the image -->
            <div class="col-md-6">
              <div class="d-flex justify-content-center">
                <img
                  class="img-fluid"
                  id="ap"
                  src="https://i.postimg.cc/qvS0kFxT/Hilmi-1-removebg-preview-1.png"
                />
              </div>
            </div>

            <!-- for the table -->
            <div class="col-md-6">
              <table
                class="table table-borderless d-flex justify-content-center"
              >
                <tbody>
                  <tr>
                    <th>D.O.B:</th>
                    <td>07/01/2000</td>
                  </tr>
                  <tr>
                    <th>Country:</th>
                    <td>South Africa</td>
                  </tr>
                  <tr>
                    <th>Location:</th>
                    <td>Cape Town</td>
                  </tr>
                  <tr>
                    <th>E-mail:</th>
                    <td>hilmi09mallick@gmail.com</td>
                  </tr>

                  <tr>
                    <th>Phone:</th>
                    <td>0845844295</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- for the text -->
          <div>
            <p class="lead">
              I am person known to be organised, a team-player and patient when
              it comes to helping people. I am an open minded person that looks
              for ways to make my ideas come to reality through coding.
              <br />
              My hobbies include running a 5km parkrun every Saturday morning,
              hiking and I am a Western Province golfer and I love reading.
            </p>
          </div>
        </div>

        <!-- for the skills -->
        <div class="col-md-6 skill-border">
          <div class="row">
            <div class="col-md-4 d-flex justify-content-center">
              <div><i class="fa-brands fa-html5"></i></div>
            </div>

            <div class="col-md-4 d-flex justify-content-center">
              <div><i class="fa-brands fa-css3-alt"></i></div>
            </div>

            <div class="col-md-4 d-flex justify-content-center">
              <div><i class="fa-brands fa-js-square"></i></div>
            </div>

            <div class="col-md-4 d-flex justify-content-center">
              <div><i class="fa-solid fa-database"></i></div>
            </div>

            <div class="col-md-4 d-flex justify-content-center">
              <div><i class="fa-brands fa-bootstrap"></i></div>
            </div>

            <div class="col-md-4 d-flex justify-content-center">
              <div><i class="fa-brands fa-node"></i></div>
            </div>

            <div class="col-md-4 d-flex justify-content-center">
              <div><i class="fa-brands fa-github"></i></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.About {
  height: 96vh;
  background-color: black;
  padding-top: 50px;
}

.about-heading {
  font-size: 3rem;
  letter-spacing: 3px;
  color: #0e3742;
  text-transform: uppercase;
  width: 100%;
  text-align: center;
  -webkit-box-reflect: below 0.5px linear-gradient(transparent, #0008);
  line-height: 0.9em;
  outline: none;
  animation: animate 6000000s linear infinite;
}

@keyframes animate {
  100% {
    color: #0e3742;
    text-shadow: none;
  }
  0% {
    color: #fff;
    text-shadow: 0 0 10px #03bcf4, 0 0 20px #03bcf4, 0 0 40px #03bcf4,
      0 0 80px #03bcf4, 0 0 160px #03bcf4;
  }
}

#ap {
  height: 260px;
  width: 275px;
  margin-top: -60px;
  animation: float 4s ease-out infinite;
}

@keyframes float {
  50% {
    transform: translate(0, -10px);
  }
}

.skill-border {
  border-left: 2px solid #03bcf4;
}
</style>
