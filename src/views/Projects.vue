<template>
  <div class="Projects">
    <h1 class="projects-heading">MY PROJECTS</h1>
    <div class="container-fluid">
      <div class="row">
        <ProjectsCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
          class="col-md-2"
        />
      </div>
    </div>
  </div>
</template>
<script>
import ProjectsCard from "../components/ProjectsCard.vue";
export default {
  components: { ProjectsCard },
  data() {
    return {
      projects: [
        {
          id: 1,
          name: "To-do-list",
          made_with: "HTML, CSS and JavaScript",
          description: "lorem",
          img: "",
          academy: "life Choices Academy",
          github: "",
          netlify: "",
        },
        {
          id: 2,
          name: "Register form",
          made_with: "HTML and CSS",
          description: "lorem",
          img: "https://i.postimg.cc/SRwc17xW/Screenshot-51.png",
          academy: "Free-Code-Camp",
          github: "",
          netlify: "",
        },
        {
          id: 3,
          name: "Body Mass Index Calculator",
          made_with: "HTML, CSS and JavaScript",
          description: "lorem",
          img: "https://i.postimg.cc/vZv3Tkmk/Screenshot-52.png",
          academy: "life choices academy",
          github: "",
          netlify: "",
        },
        {
          id: 4,
          name: "Temparature Convertor",
          made_with: "HTML, CSS and JavaScript",
          description: "lorem",
          img: "https://i.postimg.cc/kgjKkmGJ/Screenshot-53.png",
          academy: "life choices academy",
          github: "",
          netlify: "",
        },
        {
          id: 5,
          name: "Calculator",
          made_with: "HTML, CSS and JavaScript",
          description: "lorem",
          img: "https://i.postimg.cc/FRSSdkZz/Screenshot-55.png",
          academy: "life choices academy",
          github: "",
          netlify: "",
        },
        {
          id: 6,
          name: "Survey Form",
          made_with: "HTML and CSS",
          description: "lorem",
          img: "https://i.postimg.cc/pVZT0Bpx/Screenshot-48.png",
          academy: "Free Code Camp",
          github: "",
          netlify: "",
        },
        {
          id: 7,
          name: "Resaurant Web Page",
          made_with: "HTML, CSS and Bootstrap",
          description: "lorem",
          img: "https://i.postimg.cc/MpDJwsJK/Screenshot-47.png",
          academy: "Life Choices Academy",
          github: "",
          netlify: "",
        },
        {
          id: 8,
          name: "CSS Color Markers",
          made_with: "HTML, CSS and Bootstrap",
          description: "lorem",
          img: "https://i.postimg.cc/dQ27byVQ/Screenshot-54.png",
          academy: "Life Choices Academy",
          github: "",
          netlify: "",
        },
        {
          id: 9,
          name: "My fisrt Portfolio",
          made_with: "HTML, CSS and Bootstrap",
          description: "lorem",
          img: "https://i.postimg.cc/Qx3zMpbB/Screenshot-58.png",
          academy: "Life Choices Academy",
          github: "",
          netlify: "",
        },
        {
          id: 10,
          name: "Coffee",
          made_with: "HTML, CSS and Bootstrap",
          description: "lorem",
          img: "https://i.postimg.cc/zfQtYQph/Screenshot-56.png",
          academy: "Life Choices Academy",
          github: "",
          netlify: "",
        },
        {
          id: 11,
          name: "Cats",
          made_with: "HTML, CSS and Bootstrap",
          description: "lorem",
          img: "https://i.postimg.cc/4dTccbxM/Screenshot-57.png",
          academy: "Life Choices Academy",
          github: "",
          netlify: "",
        },
        {
          id: 12,
          name: "Golf Listing",
          made_with: "HTML, CSS and Bootstrap",
          description: "lorem",
          img: "https://i.postimg.cc/Y0Djd1tt/Screenshot-49.png",
          academy: "Life Choices Academy",
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
