<template>
  <div class="Contact">
    <h1 class="contact-heading">CONTACT ME</h1>
    <div class="container">
      <form action="https://formspree.io/f/mgednobw" method="POST">
        <div>
          <div class="py-4">
            <input
              id="name-input"
              required
              name="name"
              type="text"
              class="form-control"
              placeholder="Your name"
              aria-describedby="name"
            />
          </div>

          <div class="pb-4">
            <input
              id="email-input"
              required
              name="email"
              type="email"
              class="form-control"
              placeholder="Your E-mail"
              aria-describedby="emailHelp"
            />
          </div>

          <div class="pb-4">
            <input
              id="number-input"
              required
              name="number"
              type="number"
              class="form-control"
              placeholder="Phone number"
              aria-describedby="phone number"
            />
          </div>

          <div class="pb-4">
            <textarea
              class="form-control textarea"
              rows="5"
              id="comment"
              name="text"
              placeholder="message"
            ></textarea>
          </div>

          <div class="d-flex justify-content-center pb-5 pt-3">
            <button id="button" type="submit" class="btn text-bolder neon">
              SEND MESSAGE
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.Contact {
  height: 96vh;
  background-color: black;
  padding-top: 50px;
}

.contact-heading {
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

.container {
  margin: auto;
  padding: auto;
  width: 100%;
  height: 475px;
  border-radius: 10px;
  background-clip: padding-box;
  margin-top: 70px;
}

#name-input {
  color: white;
  border: none;
  font-size: 1rem;
  border: 0;
  outline: 0;
  border-bottom: 1px solid #17b9ce;
  background: transparent;
}
#email-input {
  color: white;
  border: none;
  font-size: 1rem;
  border: 0;
  outline: 0;
  border-bottom: 1px solid #17b9ce;
  background: transparent;
}
#number-input {
  color: white;
  border: none;
  font-size: 1rem;
  border: 0;
  outline: 0;
  border-bottom: 1px solid #17b9ce;
  background: transparent;
}

.textarea {
  border: none;
  font-size: 1rem;
  border: 0;
  outline: 0;
  border-bottom: 1px solid #17b9ce;
  background: transparent;
}

.neon {
  font-size: 2rem;
  display: inline-block;
  position: relative;
  cursor: pointer;
  border: #14f7ff 0.125em solid;
  border-radius: 0.25em;
  text-shadow: 0 0 0.2em #fff7, 0 0 0.3em #14f7ff;

  box-shadow: inset 0 0 0.5em #14f7ff, 0 0 0.5em #14f7ff;
}

.neon::before {
  content: "";
  position: absolute;
  top: 120%;
  left: 0;
  width: 100%;
  height: 100%;
  background: #14f7ff;
  transform: perspective(0.2em) rotatex(10deg) scale(1.3, 0.4);
  filter: blur(0.5em);
  opacity: 0.3;
  pointer-events: none;
  transition: opacity 80ms linear;
}

.neon::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #14f7ff;
  box-shadow: 0 0 0.5em #14f7ff;
  z-index: -1;
  opacity: 0;
  transition: opacity 100ms linear;
}

.neon:hover::after {
  opacity: 1;
}

.neon:hover,
.neon:focus {
  color: black;
}

.neon:hover::before {
  opacity: 1;
}
</style>
