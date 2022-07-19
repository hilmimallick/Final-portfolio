<template>
  <div class="Home">
    <div class="box">
      <div class="span">
        <p>Hi, IM</p>
      </div>
      <div class="span">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          aliquam enim, nesciunt, atque minima magnam dignissimos quod ab illo
          commodi maiores saepe nemo optio sequi. Tempore consectetur maiores
          aut harum?
        </p>
      </div>
      <div class="span">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          aliquam enim, nesciunt, atque minima magnam dignissimos quod ab illo
          commodi maiores saepe nemo optio sequi. Tempore consectetur maiores
          aut harum?
        </p>
      </div>
      <div class="span">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          aliquam enim, nesciunt, atque minima magnam dignissimos quod ab illo
          commodi maiores saepe nemo optio sequi. Tempore consectetur maiores
          aut harum?
        </p>
      </div>
      <!-- <span class="div"
        ><div><p>Hi I'm Hilmi Mallick an inspiring web developer</p></div></span
      >
      <span class="div"> <div><p>hello</p></div></span>
      <span class="div"></span>
      <span class="div"></span> -->
    </div>

    <div class="circles">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.Home {
  height: 96vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  position: relative;
  width: 650px;
  height: 500px;
  background: url(https://i.postimg.cc/MGwb9xMs/me.jpg);
  background-size: 100% 100%;
  border-radius: 5px;
}

.box .span {
  position: absolute;
  inset: 0;
  transition: 0.5s;
  background-size: cover;
  background-color: rgba(64, 237, 250, 0.3);
  border-radius: 5px;
}

.box .span p {
  width: 50%;
}

.box .span:nth-child(even) {
  display: flex;
  justify-content: flex-end;
}

.box .span:nth-child(1) {
  clip-path: polygon(0 0, 50% 0, 50% 50%, 0 50%);
  transition-delay: 0s;
}

.box .span:nth-child(2) {
  clip-path: polygon(50% 0, 100% 0, 100% 50%, 50% 50%);
  transition-delay: 0s;
}

.box .span:nth-child(3) {
  clip-path: polygon(0 50%, 50% 50%, 50% 100%, 0 100%);
  transition-delay: 0s;
  display: flex;
  align-items: flex-end;
}

.box .span:nth-child(4) {
  clip-path: polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%);
  transition-delay: 0s;
  align-items: flex-end;
}

/* hover effects */
.box:hover .span:nth-child(1) {
  transform: translate(-50px, -100px) rotate(-10deg);
}

.box:hover .span:nth-child(2) {
  transform: translate(50px, -100px) rotate(10deg);
}

.box:hover .span:nth-child(3) {
  transform: translate(-50px, 100px) rotate(10deg);
}

.box:hover .span:nth-child(4) {
  transform: translate(50px, 100px) rotate(-10deg);
}

/* for the circles */
.circles div {
  position: absolute;
  width: 60px;
  height: 60px;
  background: transparent;
  border: 6px solid rgba(83, 232, 248, 0.9);
}

.circles div:nth-child(1) {
  top: 11%;
  left: 41%;
  animation: animate 5s linear infinite;
}

.circles div:nth-child(2) {
  top: 90%;
  left: 49%;
  animation: animate 5s linear infinite;
}

.circles div:nth-child(3) {
  top: 62%;
  left: 10%;
  animation: animate 5s linear infinite;
}

.circles div:nth-child(4) {
  top: 45%;
  left: 78%;
  animation: animate 5s linear infinite;
}
.circles div:nth-child(5) {
  top: 20%;
  left: 4%;
  animation: animate 5s linear infinite;
}
.circles div:nth-child(6) {
  top: 90%;
  left: 83%;
  animation: animate 5s linear infinite;
}
.circles div:nth-child(7) {
  top: 26%;
  left: 90%;
  animation: animate 5s linear infinite;
}

.circles div:nth-child(8) {
  top: 46%;
  left: 30%;
  animation: animate 5s linear infinite;
}

@keyframes animate {
  0% {
    transform: scale(0) translate(-90px) rotate(360deg);
    opacity: 1;
  }
  100% {
    transform: scale(1.3) translateY(-90px) rotate(-180deg);
    border-radius: 50%;
    opacity: 0;
  }
}
</style>
