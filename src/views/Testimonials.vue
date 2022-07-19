<template>
  <div class="Testimonials">
    <h1 class="testimonials-heading">MY TESTIMONIALS</h1>
    <div
      v-for="test in testimonials"
      :key="test.id"
      class="card"
      style="width: 18rem"
    >
      <div class="card m-3" style="width: 18rem">
        <img v-bind:src="test.img" class="img-fluid" />
        <div class="card-body">
          <p class="card-text-event">{{ test.name }}</p>
          <p class="card-text-event">{{ test.occupation }}</p>
          <p class="card-text-event">{{ test.quote }}</p>
          <p class="card-text-event">{{ test.email }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      testimonials: [
        {
          id: 1,
          name: "Ashwin Jacobs",
          img: "",
          email: "ashwin.dean21@gmail.com",
          occupation: "Colleague",
          quote:
            "I would like to formally recommend Hilmi Mallick for his consistent work. He is time driven and helps his peers in class.His always focused when doing his work and keeps track of his steps for planning a website. I know that Hilmi Mallick has the potential and skills to be an excellent addition to the company.",
        },
        {
          id: 2,
          name: "Lihle Goliath",
          img: "",
          email: "lihlegoliath2@gmail.com",
          occupation: "Colleague",
          quote:
            "Hilmi Mallick,A down to earth person with great ambitions, also supporting him is his hardwork in all aspects of his life. I think with his dedication he will better himself and people around him.",
        },
        {
          id: 3,
          name: "Lunga Booi",
          img: "",
          email: "lungalucasbooi@gmail.com",
          occupation: "Colleague",
          quote:
            "Hilmi is a curious person, he'll search the information from its core. He breaks the complex problem into its simplest form. He has great analytical skills.",
        },
        {
          id: 4,
          name: "Tshimologo King Mabena",
          img: "",
          email: "tshimologokingmabena@gmail.com",
          occupation: "Colleague",
          quote:
            "Hilmi is a very energetic, hardworking, disciplined and talented young man. He strives to improve himself consistently and those he comes into contact with. He is kind, polite, humble and very attentive to every detail. He has good intuition and sense of awareness of all tasks at hand.",
        },
        {
          id: 5,
          name: "Carla Lawrence",
          img: "",
          email: "carlaamylawrence@gmail.com",
          occupation:
            "Hilmi Malllick is an exceptional web developer. He is laser focused, highly skilled and determined to take on any task given to him. His ambition bleeds into all aspects of his life both personal and professional. It is a pleasure to have worked alongside him and I can, without a doubt, say that Hilmi would be the perfect addition to any team.",
        },
        // { id: 6, name: "", img: "", email: "", occupation: "", quote: "" },
      ],
    };
  },
};
</script>
<style>
.Testimonials {
  height: 96vh;
  background-color: black;
  padding-top: 50px;
}

.testimonials-heading {
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
