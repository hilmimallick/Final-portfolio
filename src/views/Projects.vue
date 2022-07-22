<template>
  <div class="Projects">
    <h1 class="projects-heading">MY PROJECTS</h1>
    <div class="container-fluid" id="pro-con">
      <div class="row" id="pro-row">
        <ProjectsCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
          class="col-lg-2 d-flex justify-content-center p-1 pt-2"
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
          img: "https://i.postimg.cc/5025vR7p/Screenshot-2022-07-21-115612.png",
          academy: "life Choices Academy",
          github: "https://github.com/hilmimallick/TO-DO-LIST.git",
          netlify: "https://stellular-naiad-29a7b0.netlify.app",
        },
        {
          id: 2,
          name: "Register form",
          made_with: "HTML and CSS",
          description: "lorem",
          img: "https://i.postimg.cc/SRwc17xW/Screenshot-51.png",
          academy: "Free-Code-Camp",
          github:
            "https://github.com/hilmimallick/freecodecamp-registration-form-practice.git",
          netlify: "https://coruscating-frangipane-cf38ee.netlify.app",
        },
        {
          id: 3,
          name: "Body Mass Index Calculator",
          made_with: "HTML, CSS and JavaScript",
          description: "lorem",
          img: "https://i.postimg.cc/vZv3Tkmk/Screenshot-52.png",
          academy: "life choices academy",
          github: "https://github.com/hilmimallick/BMI-calculator.git",
          netlify: "https://gorgeous-begonia-fd4ec9.netlify.app",
        },
        {
          id: 4,
          name: "Temparature Convertor",
          made_with: "HTML, CSS and JavaScript",
          description: "lorem",
          img: "https://i.postimg.cc/kgjKkmGJ/Screenshot-53.png",
          academy: "life choices academy",
          github: "https://github.com/hilmimallick/temperature-converter.git",
          netlify: "https://ephemeral-cobbler-b83f0e.netlify.app",
        },
        {
          id: 5,
          name: "Calculator",
          made_with: "HTML, CSS and JavaScript",
          description: "lorem",
          img: "https://i.postimg.cc/FRSSdkZz/Screenshot-55.png",
          academy: "life choices academy",
          github: "https://github.com/hilmimallick/Calculator.git",
          netlify: "https://rainbow-parfait-bcf833.netlify.app",
        },
        {
          id: 6,
          name: "Survey Form",
          made_with: "HTML and CSS",
          description: "lorem",
          img: "https://i.postimg.cc/pVZT0Bpx/Screenshot-48.png",
          academy: "Free Code Camp",
          github: "https://github.com/hilmimallick/my_survey_form.git",
          netlify: "https://stirring-salmiakki-d8656a.netlify.app",
        },
        {
          id: 7,
          name: "Resaurant Web Page",
          made_with: "HTML, CSS and Bootstrap",
          description: "lorem",
          img: "https://i.postimg.cc/MpDJwsJK/Screenshot-47.png",
          academy: "Life Choices Academy",
          github: "https://github.com/hilmimallick/restaurant-bootstrap.git",
          netlify: "https://unrivaled-kheer-3c55b6.netlify.app",
        },
        {
          id: 8,
          name: "CSS Color Markers",
          made_with: "HTML, CSS and Bootstrap",
          description: "lorem",
          img: "https://i.postimg.cc/dQ27byVQ/Screenshot-54.png",
          academy: "Life Choices Academy",
          github:
            "https://github.com/hilmimallick/freecodecamp-coloredmarker-practice.git",
          netlify: "https://flourishing-tarsier-8f3289.netlify.app",
        },
        {
          id: 9,
          name: "My fisrt Portfolio",
          made_with: "HTML, CSS and Bootstrap",
          description: "lorem",
          img: "https://i.postimg.cc/Qx3zMpbB/Screenshot-58.png",
          academy: "Life Choices Academy",
          github: "https://github.com/hilmimallick/end-of-module-project.git",
          netlify: "https://subtle-cannoli-0fb745.netlify.app",
        },
        {
          id: 10,
          name: "Coffee",
          made_with: "HTML, CSS and Bootstrap",
          description: "lorem",
          img: "https://i.postimg.cc/zfQtYQph/Screenshot-56.png",
          academy: "Life Choices Academy",
          github:
            "https://github.com/hilmimallick/freecodecamp-cafe-menu-practice.git",
          netlify: "https://harmonious-chaja-b4e8ef.netlify.app",
        },
        {
          id: 11,
          name: "Cats",
          made_with: "HTML, CSS and Bootstrap",
          description: "lorem",
          img: "https://i.postimg.cc/4dTccbxM/Screenshot-57.png",
          academy: "Life Choices Academy",
          github:
            "https://github.com/hilmimallick/freecodecamp-catphotoapp-practice.git",
          netlify: "https://hilarious-rolypoly-65472a.netlify.app",
        },
        {
          id: 12,
          name: "Golf Listing",
          made_with: "HTML, CSS and Bootstrap",
          description: "lorem",
          img: "https://i.postimg.cc/Y0Djd1tt/Screenshot-49.png",
          academy: "Life Choices Academy",
          github: "https://github.com/hilmimallick/JavaScript-project.git",
          netlify: "https://jade-rugelach-d0a5b2.netlify.app",
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

.Projects {
  height: 96vh;
  background-color: black;
  padding-top: 50px;
  max-height: fit-content;
}

@media only screen and (max-width: 700px) {
  .Projects {
    height: fit-content;
  }
}

#pro-row {
  padding-top: 20px;
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

@media only screen and (max-width: 992px) {
  #pro-con {
    margin-bottom: 5em;
  }
}
</style>
