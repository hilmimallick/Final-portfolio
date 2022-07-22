<template>
  <div class="Resume">
    <h1 class="resume-heading">MY RESUME</h1>
    <div class="container-fluid" id="resume-row">
      <div class="row">
        <div
          v-for="res in resume"
          :key="res.id"
          class="col-lg-3 d-flex justify-content-center p-1 pt-5"
        >
          <div
            class="card h-100 text-white"
            style="max-width: 18rem"
            id="resume-card"
          >
            <div class="card-header">{{ res.name }}</div>
            <div class="card-body">
              <h5 class="card-title">{{ res.date }}</h5>
              <p class="card-text">{{ res.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      resume: [
        {
          id: 1,
          name: "Trafalgar High School",
          date: "2013-2017",
          description:
            "I started high school and matriculated at Trafalgar High School. The greate thing about being at Trafalgar was the fact that I was part of the Interact club whereby we volunteered to help feed the poor and recommended ideas for fundraising.",
        },
        {
          id: 2,
          name: "South African Education Program (SAEP)",
          date: "2019",
          description:
            "A year long bridging programme which included academic tutoring, basic computer skills training, educational excursions, career guidance, life skills training and community service.",
        },
        {
          id: 3,
          name: "CompTIA A+",
          date: "March 2021- March 2022",
          description:
            "Accredited IT Technician course which covered hardware, software installation and troubleshooting of PCs/laptop all online via IT Academy.",
        },
        {
          id: 4,
          name: "LIfe Choices Academy",
          date: "28 March 2022-Present",
          description:
            "Life Choices Academy offers a 12 month coding program in which the first 6 months is just learning and the last 6 months the academy assist in in getting interviews and with projects for exprience",
        },
      ],
    };
  },
};
</script>
<style>
body {
  background-color: black;
}
.Resume {
  background-color: black;
  padding-top: 50px;
  height: 96vh;
  max-height: fit-content;
}

@media only screen and (max-width: 700px) {
  .Resume {
    height: fit-content;
  }
}

.resume-heading {
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

#resume-card {
  margin-top: 30px;
  background-color: transparent;
  border: 2px solid #03bcf4;
}

@media only screen and (max-width: 992px) {
  #resume-row {
    margin-bottom: 6em;
  }
}
</style>
