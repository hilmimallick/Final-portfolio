<template>
  <div class="Projects">
    <h1 class="projects-heading">MY PROJECTS</h1>
    <div
      v-for="project in projects"
      :key="project.id"
      class="card"
      style="width: 18rem"
    >
      <div class="card m-3" style="width: 18rem">
        <img v-bind:src="project.img" class="img-fluid" />
        <div class="card-body">
          <p class="card-text-event">{{ project.name }}</p>
          <p class="card-text-event">{{ project.made_with }}</p>
          <p class="card-text-event">{{ project.description }}</p>
          <p class="card-text-event">{{ project.academy }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          name: "lorem",
          made_with: "html and css",
          description: "lorem",
          img: "",
          academy: "life choices academy",
          github: "",
          netlify: "",
        },
        {
          id: 2,
          name: "lorem",
          made_with: "html and css",
          description: "lorem",
          img: "",
          academy: "life choices academy",
          github: "",
          netlify: "",
        },
        {
          id: 3,
          name: "lorem",
          made_with: "html and css",
          description: "lorem",
          img: "",
          academy: "life choices academy",
          github: "",
          netlify: "",
        },
        {
          id: 4,
          name: "lorem",
          made_with: "html and css",
          description: "lorem",
          img: "",
          academy: "life choices academy",
          github: "",
          netlify: "",
        },
        {
          id: 5,
          name: "lorem",
          made_with: "html and css",
          description: "lorem",
          img: "",
          academy: "life choices academy",
          github: "",
          netlify: "",
        },
        {
          id: 6,
          name: "lorem",
          made_with: "html and css",
          description: "lorem",
          img: "",
          academy: "life choices academy",
          github: "",
          netlify: "",
        },
      ],
    };
  },
};
</script>
<style>
.Projects {
  height: 96vh;
  background-color: black;
  padding-top: 50px;
}

.projects-heading {
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
</style>
