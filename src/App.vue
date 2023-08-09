<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid bgnav">
      <router-link to="/" class="navbar-brand col-3 d-flex justify-content-center ">
        <img class="logo" src="./assets/img/logotiempo.png" alt="logo">

      </router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end col-4">
          <li class="nav-item">

            <router-link to="/" class="nav-link active border border-muted " id="nav"
              aria-current="page">Diario</router-link>
          </li>
          <li class="nav-item">

            <router-link to="/week" class="nav-link active border borde-muted" id="nav2">Semana</router-link>
          </li>
          <li class="nav-item">

            <router-link to="/blog" class="nav-link active border borde-muted" id="nav3">Blog</router-link>
</li>


        </ul>
        <form class="d-flex col-6" v-on:submit.prevent="doSearch">
          <input v-model="search" class="form-control me-2 inputColor" type="search" placeholder="Introducir Ciudad"
            aria-label="Search">
          <button class="btn btn-outline-grey buscarTexto" type="submit">Buscar</button>
        </form>
      </div>
    </div>
  </nav>
  
  <RouterView :climaActual="climaActual" :climaCompleto="climaCompleto" />

   

<FooterComp />
 
</template>

<script setup>
import FooterComp from "./components/FooterComp.vue"

import { RouterLink, RouterView } from 'vue-router'
import { defineProps } from 'vue';
import { ref } from "vue"

let search = ref("");
let climaActual = ref("");
let climaCompleto = ref("");


const doSearch = async () => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?&q=${search.value}&appid=7efa332cf48aeb9d2d391a51027f1a71&units=metric&lang=es`);
    // &lang=es  **Esto fue agregado para recibir los datos en español desde la api**
    const data = await response.json();
    climaActual.value = data;
    console.log(climaActual.value.name);
    console.log("Latitud" + climaActual.value.coord.lat);
    console.log("Longitud" + climaActual.value.coord.lon);
    datosCompletos(climaActual.value.coord.lat, climaActual.value.coord.lon)
  }
  catch (error) {
    console.log("error funcion doSearch",error)
  }
};


async function datosCompletos(lat, lon) {
  try {
  const apiKey = '7efa332cf48aeb9d2d391a51027f1a71';
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&lang=es&appid=${apiKey}`;
  
  const respuesta = await fetch(url);
  const dataWeather = await respuesta.json();
  climaCompleto.value = dataWeather
  // console.log("EquipoVUE" + climaCompleto.value.name);

  // cal current date & time
  const localOffset = new Date().getTimezoneOffset() * 60000;
    const utc = dataWeather.data.current.dt * 1000 + localOffset;
    dataWeather.data.currentTime =
      utc + 1000 * dataWeather.data.timezone_offset;

    // cal hourly weather offset
    dataWeather.data.hourly.forEach((hour) => {
      const utc = hour.dt * 1000 + localOffset;
      hour.currentTime =
        utc + 1000 * dataWeather.data.timezone_offset;
    });

  return dataWeather;
  
  // climaHora(climaCompleto.value.hourly.dt);
  
  
}
  catch (error) {
    console.log("error funcion datosCompletos",error)
  }
}

/*inicio*********************************************************
Pasamos las variables que contienes los datos de cada api. 
climaActual = nos pasa la informacion de la api https://api.openweathermap.org/data/2.5/weather, cuando se hace la busqueda en el input del header
climaCompleto = nos pasa la informacion de la api  https://api.openweathermap.org/data/2.5/onecall, que es la que tiene mas informacion
*********************************************************fin*/
 defineProps({
  climaActual: Object,
  climaCompleto: Object
});
</script>

<style scoped>
/* *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
} */
#app{
  font-family: 'Lato', sans-serif;
}
.bgnav {
  widows: 100%;
  height: auto;
  background-color: #C4DDFF;
}
.nav-link {
  background-color: rgba(218, 218, 218, 0.158);
  width: 5rem;
  padding: 0.3em;
  border-radius: 9px;
  margin: 0.1em;
  text-align: center;
}
.logo {
  max-width: 5em;
 padding: 0.5rem; 
}
#nav.router-link-active {
color: blue;
 background-color: rgba(133, 128, 128, 0.158); 
 
}
#nav2.router-link-active,
#nav3.router-link-active {
color: blue;
 background-color: rgba(133, 128, 128, 0.158); 
}
 #nav, #nav2, #nav3{
  color: rgb(216, 167, 6);
} 
.navbar {
  padding: 0;
}
.cajaGeneral{
display: flex;
justify-content: space-around;
background-color: #C4DDFF;
margin-bottom: 0;
align-items: center;
}
.copyright{
align-items: center;
color: #424642;
}
.info{
display: flex;
align-items: center;
color:#424642;
}
.datos{
display: flex;
align-items: center;
color:#424642;
}
.inputColor::placeholder{
  color: rgb(121, 121, 249);
}
.buscarTexto{
  color: rgb(216, 167, 6);
}
  /* .fadeUp-enter-active, 
.fadeUp-leave-active {
  transition: opacity 0.25s, transform 0.25s;
}
 .fadeUp-enter, 
.fadeUp-leave-to {
  opacity: 0;
  transform: translateX(30%);
}  */

@media screen and (min-width: 481px) and (max-width: 835px){
}
/* -------------------Responsive mobile ----------------*/
@media screen and (min-width: 320px) and (max-width: 480px){
  .navbar-nav{
    align-items: center;
    margin: 1rem auto;
  }
  .nav-item {
  width: 80vw;
  text-align: center;
}

.nav-link {
  
  width: 85vw;
  margin: 0 auto;
}
form{
  width: 90vw;
  padding-bottom: .5rem;
}

}
</style>