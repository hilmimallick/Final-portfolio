<template>
  <router-link :to="{ name: 'oneProject', params: { id: project.id } }">
    <img v-bind:src="project.img" class="img-fluid" id="pro-img" />
  </router-link>
</template>
<script>
export default {
  props: ["project"],
};
</script>
<style>
.img-fluid {
  border-radius: 5px;
  transition: 0.3s linear;
}

.img-fluid:hover {
  transform: scale(1.2);
}

#pro-img {
  height: 250px;
  width: 280px;
}
</style>
