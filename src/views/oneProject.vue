<template>
  <div class="one-project">
    <div class="one_container">
      <div class="row" id="one-row">
        <div class="col-md-6 d-flex justify-content-center">
          <img v-bind:src="project.img" class="img-fluid" id="one_img" />
        </div>
        <div class="col-md-6" id="pro-des">
          <p class="card-text">{{ project.name }}</p>
          <p class="card-text">{{ project.made_with }}</p>
          <p class="card-text">{{ project.academy }}</p>
          <p class="card-text">{{ project.description }}</p>
          <a :href="project.github" target="blank"
            ><i class="fa-brands fa-github"></i
          ></a>
          <a :href="project.netlify" target="blank">
            <i class="fa-solid fa-eye"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["project"],
  data() {
    return {
      id: this.$route.params.id,

      projects: [
        {
          id: 1,
          name: "To-do-list",
          made_with: "HTML, CSS and JavaScript",
          description: "lorem",
          img: "https://i.postimg.cc/VvcY7JcJ/Screenshot-50.png",
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
  computed: {
    project() {
      return this.projects.find((project) => project.id == this.id);
    },
  },
};
</script>
<style>
.one-project {
  height: 96vh;
  background-color: black;
}

.one_container {
  padding-top: 10em;
}

#one_img {
  height: 25em;
  width: 25em;
  border-radius: 5px;
}

#pro-des {
  border-left: 2px solid #03bcf4;
}
</style>
