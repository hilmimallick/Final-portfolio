<template>
  <div class="About">
    <h1 class="about-heading">ABOUT ME</h1>
    <div class="container-fluid mt-5">
      <div class="row">
        <div class="col-lg-6">
          <div class="row pb-5">
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
                class="table table-borderless d-flex justify-content-center text-white"
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
            <p class="lead text-white">
              I am known by friends and family to be organised, a team-player
              and patient when assisting those in need. I am an open minded
              person, who looks for ways to make my ideas come to reality
              through coding.
              <br />
              Time away from coding involves 5km morning runs, hiking and
              reading. I also represent Western Province as a +1.5 handicap
              golfer.
            </p>
          </div>
        </div>

        <!-- for the skills -->
        <div class="col-lg-6 skill-border">
          <div class="row" id="skills-row">
            <div class="col-md-4 d-flex justify-content-center">
              <div>
                <i class="fa-brands fa-html5" id="skills-icon"></i>
              </div>
            </div>

            <div class="col-md-4 d-flex justify-content-center">
              <div><i class="fa-brands fa-css3-alt" id="skills-icon"></i></div>
            </div>

            <div class="col-md-4 d-flex justify-content-center" id="skill-row">
              <div><i class="fa-brands fa-js-square" id="skills-icon"></i></div>
            </div>

            <div class="col-md-4 d-flex justify-content-center">
              <div><i class="fa-solid fa-database" id="skills-icon"></i></div>
            </div>

            <div class="col-md-4 d-flex justify-content-center">
              <div><i class="fa-brands fa-bootstrap" id="skills-icon"></i></div>
            </div>

            <div class="col-md-4 d-flex justify-content-center">
              <div><i class="fa-brands fa-node" id="skills-icon"></i></div>
            </div>

            <div class="col-md-4 d-flex justify-content-center">
              <div><i class="fa-brands fa-github" id="skills-icon"></i></div>
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
body {
  background-color: black;
}

.About {
  background-color: black;
  padding-top: 50px;
  height: 96vh;
  max-height: fit-content;
}

@media only screen and (max-width: 700px) {
  .About {
    height: fit-content;
  }
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
}

@media only screen and (max-width: 767px) {
  #ap {
    margin-top: 2px;
  }
}

.skill-border {
  border-left: 2px solid #03bcf4;
}
@media only screen and (max-width: 1110px) {
  .skill-border {
    border-left: none;
  }
}

#skills-icon {
  color: #03bcf4;
  font-size: 3rem;
  margin: 2rem;
  animation: float 4s ease-out infinite;
}

@keyframes float {
  50% {
    transform: translate(0, -5 px);
  }
}

@media only screen and (max-width: 992px) {
  #skills-row {
    margin-bottom: 30px;
  }
}

@media only screen and (max-width: 770px) {
  #skills-row {
    margin-bottom: 30px;
  }
}
</style>
