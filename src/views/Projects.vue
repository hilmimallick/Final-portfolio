<template>
  <div class="Projects">
    <h1 class="projects-heading">MY PROJECTS</h1>
  </div>
</template>
<script>
export default {};
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
