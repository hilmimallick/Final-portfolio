<template>
  <div class="footer">
    <footer>
      <p><i class="fa-solid fa-copyright" id="copyright"></i> HILMI MALLICK</p>
    </footer>
  </div>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style>
footer {
  position: fixed;
  bottom: 0;
  background-color: #17b9ce;
  width: 100%;
  text-align: center;
  color: black;
  font-weight: bolder;
  padding: 1vh;
}

#copyright {
  font-size: 20px;
}
</style>
