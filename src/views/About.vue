<template>
  <div class="About">
    <h1 class="about-heading">ABOUT ME</h1>
    <div
      v-for="skill in skills"
      :key="skill.id"
      class="card"
      style="width: 18rem"
    >
      <div class="card m-3" style="width: 18rem">
        <img v-bind:src="skill.img" class="img-fluid" />
        <div class="card-body">
          <p class="card-text-event">{{ skill.name }}</p>
          <p class="card-text-event">{{ skill.made_with }}</p>
          <p class="card-text-event">{{ skill.description }}</p>
          <p class="card-text-event">{{ skill.academy }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      skills: [
        {
          id: 1,
          name: "lorem",
          skill_icon: "",
        },
        {
          id: 2,
          name: "lorem",
          skill_icon: "",
        },
        {
          id: 3,
          name: "lorem",
          skill_icon: "",
        },
        {
          id: 4,
          name: "lorem",
          skill_icon: "",
        },
        {
          id: 5,
          name: "lorem",
          skill_icon: "",
        },
        {
          id: 6,
          name: "lorem",
          skill_icon: "",
        },
      ],
    };
  },
};
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
</style>
