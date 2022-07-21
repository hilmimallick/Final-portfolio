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
#pro-img {
  border-radius: 5px;
  height: 250px;
  width: 280px;
  transition: 0.3s linear;
}

#pro-img:hover {
  transform: scale(1.2);
}
</style>
