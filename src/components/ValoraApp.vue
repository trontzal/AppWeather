<template>
  <section class="valoracion">
    <h1 class="tituloValoracion">Valora nuestra aplicacion</h1>
    <div class="d-grid d-md-block ">
      <button class="btn btn-primary espacioBoton" @click="$emit('noMeGusta')"><i class="fa-solid fa-thumbs-down"></i></button>
      <button class="btn btn-primary espacioBoton" @click="$emit('meGusta')"><i class="fa-solid fa-thumbs-up"></i> </button>
    </div>
  </section>
</template>

<script setup>


</script>

<style scoped>
.valoracion {
  /* box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset; */
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10.5px);
  -webkit-backdrop-filter: blur(10.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  max-width: 250px;
  text-align: center;
  padding: 20px 20px 20px;
  margin: 4rem auto 0 auto;
}
.tituloValoracion{
 font-size: 1rem;
}
.espacioBoton{
    margin: 0.2rem;
}
/* .icono{
    width: 2px;
} */
/* -------------------Responsive mobile ----------------*/

@media screen and (min-width: 320px) and (max-width: 480px){
  
}

</style>
