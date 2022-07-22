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
          <a :href="project.github" target="blank" id="one-card-icon"
            ><i class="fa-brands fa-github" id="oci"></i
          ></a>
          <a :href="project.netlify" target="blank" id="one-card-icon">
            <i class="fa-solid fa-eye" id="oci"></i>
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
          description:
            "Basic To-do-List was created to test our Create, Add, Update and Delete (CAUD) functions.",
          img: "https://i.postimg.cc/VvcY7JcJ/Screenshot-50.png",
          academy: "life Choices Academy",
          github: "https://github.com/hilmimallick/TO-DO-LIST.git",
          netlify: "https://stellular-naiad-29a7b0.netlify.app",
        },
        {
          id: 2,
          name: "Register form",
          made_with: "HTML and CSS",
          description:
            "For this project I learnt about HTML forms by building a signup page",
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
          description:
            "Basic BIM calculator which calculates your BMI only with units of centimetres for height and kilograms for weight",
          img: "https://i.postimg.cc/vZv3Tkmk/Screenshot-52.png",
          academy: "life choices academy",
          github: "https://github.com/hilmimallick/BMI-calculator.git",
          netlify: "https://gorgeous-begonia-fd4ec9.netlify.app",
        },
        {
          id: 4,
          name: "Temparature Convertor",
          made_with: "HTML, CSS and JavaScript",
          description:
            "Basic temperature convertor which only converts degrees celsius to fahrenheit",
          img: "https://i.postimg.cc/kgjKkmGJ/Screenshot-53.png",
          academy: "life choices academy",
          github: "https://github.com/hilmimallick/temperature-converter.git",
          netlify: "https://ephemeral-cobbler-b83f0e.netlify.app",
        },
        {
          id: 5,
          name: "Calculator",
          made_with: "HTML, CSS and JavaScript",
          description: "Basic calculator which does only basic calculations",
          img: "https://i.postimg.cc/FRSSdkZz/Screenshot-55.png",
          academy: "life choices academy",
          github: "https://github.com/hilmimallick/Calculator.git",
          netlify: "https://rainbow-parfait-bcf833.netlify.app",
        },
        {
          id: 6,
          name: "Survey Form",
          made_with: "HTML and CSS",
          description:
            "This project was my own Survey Form for Free Code Camp as a certification project",
          img: "https://i.postimg.cc/pVZT0Bpx/Screenshot-48.png",
          academy: "Free Code Camp",
          github: "https://github.com/hilmimallick/my_survey_form.git",
          netlify: "https://stirring-salmiakki-d8656a.netlify.app",
        },
        {
          id: 7,
          name: "Restaurant Web Page",
          made_with: "HTML, CSS and Bootstrap",
          description:
            "For this project I had to remake a Restaurant website template. Here is the restaurant website link which I had to remake:",
          img: "https://i.postimg.cc/MpDJwsJK/Screenshot-47.png",
          academy: "Life Choices Academy",
          github: "https://github.com/hilmimallick/restaurant-bootstrap.git",
          netlify: "https://unrivaled-kheer-3c55b6.netlify.app",
        },
        {
          id: 8,
          name: "CSS Color Markers",
          made_with: "HTML and CSS",
          description:
            "This project was to learn different ways to set color values and how to pair colors with each other",
          img: "https://i.postimg.cc/dQ27byVQ/Screenshot-54.png",
          academy: "Free Code Camp",
          github:
            "https://github.com/hilmimallick/freecodecamp-coloredmarker-practice.git",
          netlify: "https://flourishing-tarsier-8f3289.netlify.app",
        },
        {
          id: 9,
          name: "My fisrt Portfolio",
          made_with: "HTML, CSS and Bootstrap",
          description:
            "My first web portfolio with basic HTML, CSS and Bootstrap",
          img: "https://i.postimg.cc/Qx3zMpbB/Screenshot-58.png",
          academy: "Life Choices Academy",
          github: "https://github.com/hilmimallick/end-of-module-project.git",
          netlify: "https://subtle-cannoli-0fb745.netlify.app",
        },
        {
          id: 10,
          name: "Cafe Menu",
          made_with: "HTML and CSS",
          description:
            "This project consisted the learning of basics of design using CSS ",
          img: "https://i.postimg.cc/zfQtYQph/Screenshot-56.png",
          academy: "Free Code Camp",
          github:
            "https://github.com/hilmimallick/freecodecamp-cafe-menu-practice.git",
          netlify: "https://harmonious-chaja-b4e8ef.netlify.app",
        },
        {
          id: 11,
          name: "Cat Photo App",
          made_with: "HTML and CSS",
          description: "This project was to learn the most common HTML tags",
          img: "https://i.postimg.cc/4dTccbxM/Screenshot-57.png",
          academy: "Free Code Camp",
          github:
            "https://github.com/hilmimallick/freecodecamp-catphotoapp-practice.git",
          netlify: "https://hilarious-rolypoly-65472a.netlify.app",
        },
        {
          id: 12,
          name: "Golf Listing",
          made_with: "HTML, CSS and javaScript",
          description: "This project mainly focused on JavaScript funtionality",
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
body {
  background-color: black;
}

.one-project {
  height: 96vh;
  background-color: black;
  max-height: fit-content;
}

@media only screen and (max-width: 768px) {
  .one-project {
    height: fit-content;
  }
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
  color: white;
  text-align: center;
  font-size: 1.5em;
}

@media only screen and (max-width: 770px) {
  #pro-des {
    border-left: none;
  }
}

@media only screen and (max-width: 768px) {
  #pro-des {
    text-align: center;
  }
}

#one-card-icon {
  padding: 2em;
}

#oci {
  font-size: 2em;
}

@media only screen and (max-width: 768px) {
  one-row {
    margin-top: 10em;
  }
}
</style>
