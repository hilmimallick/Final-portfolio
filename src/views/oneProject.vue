<template>
  <!-- <div>
    <h1>Single card</h1>
    <div v-if="project">
      <div class="d-flex justify-content-center">
        <div class="card" style="width: 18rem">
          <img v-bind:src="project.img" class="img-fluid" />
          <div class="card-body">
            <p class="card-text">{{ project.name }}</p>
            <p class="card-text">{{ project.made_with }}</p>
            <p class="card-text">{{ project.description }}</p>
            <p class="card-text">{{ project.academy }}</p>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <div class="container">
    <div class="row">
      <div class="col-md-6"></div>
      <div class="col-md-6"></div>
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
  computed: {
    project() {
      return this.projects.find((project) => project.id == this.id);
    },
  },
};
</script>
<style></style>
