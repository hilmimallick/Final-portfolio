<template>
  <div id="Testimonials">
    <h1 class="testimonials-heading">MY TESTIMONIALS</h1>

    <div class="container-fluid">
      <div class="row">
        <div
          v-for="test in testimonials"
          :key="test.id"
          class="col-md-4 d-flex justify-content-center p-1"
        >
          <div class="friend">
            <img
              class="img-fluid rounded border border-5 border-dark"
              v-bind:src="test.img"
              id="testpic"
            />
            <div class="friend-details rounded">
              <h5>{{ test.name }}</h5>
              <p>{{ test.occupation }}</p>
              <p>{{ test.quote }}</p>
              <p>{{ test.email }}</p>
            </div>
          </div>
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
          img: "https://i.postimg.cc/YSdvdXxL/Ashwin-2.jpg",
          email: "ashwin.dean21@gmail.com",
          occupation: "Colleague",
          quote:
            "I would like to formally recommend Hilmi Mallick for his consistent work. He is time driven and helps his peers in class.His always focused when doing his work and keeps track of his steps for planning a website. I know that Hilmi Mallick has the potential and skills to be an excellent addition to the company.",
        },
        {
          id: 2,
          name: "Lihle Goliath",
          img: "https://i.postimg.cc/RZ54K2jV/Lihle-1.jpg",
          email: "lihlegoliath2@gmail.com",
          occupation: "Colleague",
          quote:
            "Hilmi Mallick,A down to earth person with great ambitions, also supporting him is his hardwork in all aspects of his life. I think with his dedication he will better himself and people around him.",
        },
        {
          id: 3,
          name: "Lunga Booi",
          img: "https://i.postimg.cc/jjyXCnyS/Lunga-1.jpg",
          email: "lungalucasbooi@gmail.com",
          occupation: "Colleague",
          quote:
            "Hilmi is a curious person, he'll search the information from its core. He breaks the complex problem into its simplest form. He has great analytical skills.",
        },
        {
          id: 4,
          name: "Tshimologo King Mabena",
          img: "https://i.postimg.cc/NjBTbCXB/Tshimologo-2.jpg",
          email: "tshimologokingmabena@gmail.com",
          occupation: "Colleague",
          quote:
            "Hilmi is a very energetic, hardworking, disciplined and talented young man. He strives to improve himself consistently and those he comes into contact with. He is kind, polite, humble and very attentive to every detail. He has good intuition and sense of awareness of all tasks at hand.",
        },
        {
          id: 5,
          name: "Carla Lawrence",
          img: "https://i.postimg.cc/Jznc3dJv/Carla-2.jpg",
          email: "carlaamylawrence@gmail.com",
          occupation:
            "Hilmi Malllick is an exceptional web developer. He is laser focused, highly skilled and determined to take on any task given to him. His ambition bleeds into all aspects of his life both personal and professional. It is a pleasure to have worked alongside him and I can, without a doubt, say that Hilmi would be the perfect addition to any team.",
        },
        {
          id: 6,
          name: "Jason Wandrag",
          img: "https://i.postimg.cc/5NbpthsD/Jason.jpg",
          email: "",
          occupation: "lecturer",
          quote:
            "Hilmi is one of the most hardworking interns I have had the pleasure of working with. He also has a very calming demeanor and is always willing to help his peers. With a little guidance, Hilmi will definitely be a valuable developer.",
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

#Testimonials {
  height: 96vh;
  max-height: fit-content;
  background-color: black;
  padding-top: 50px;
}

@media only screen and (max-width: 700px) {
  .Projects {
    height: fit-content;
  }
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
#testpic {
  height: 400px;
  width: 300px;
}
.friend {
  position: relative;
  height: 400px;
  width: 300px;
}

.friend-details {
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.7) 50%,
    rgba(0, 0, 0, 0.7) 50%
  );
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  opacity: 0;
  transition: all 0.5s linear;
}

.friend:hover .friend-details {
  opacity: 1;
}
.container-fluid {
  margin-top: 40px;
}
</style>
