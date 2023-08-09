<template>
    <section class="weather-content">
      <h1 class="tituloClima">Clima</h1>
      <div class="result" v-if="climaActual">
        <p>{{ climaActual.name }}</p>
        <p>Temperatura {{ Math.round(climaActual.main.temp) }}°</p>
        <img :src="`https://raw.githubusercontent.com/Shamanesss/app_weather/main/src/assets/img/weather_icons/${climaActual.weather[0].icon}.png`" alt="icon">
        <!-- <img :src="`https://openweathermap.org/img/wn/${climaActual.weather[0].icon}@2x.png`" alt="icon"> -->
        <!-- <p>Temperatura {{ result.weather[0]}}°</p> --> 
      </div>
      <div v-else>
      <img class="imagenGif"  src="../assets/img/entrada.gif" alt="">
    </div>
    </section>
  </template>
  
  
  
  <script setup>
  import { defineProps } from 'vue';
 defineProps({
    climaActual: Object,
    climaCompleto: Object
  });
//   console.log("captura+++", props.result.value);
  </script>
  
  
  
  
  <style scoped>
  body {
    font-family: "Montserrat", sans-serif;
  }
  .weather-content {
    /* box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset; */
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(10.5px);
    -webkit-backdrop-filter: blur(10.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
  
    max-width: 501px;
    text-align: center;
    padding: 20px 20px 20px;
    margin: 0 auto 1rem auto ;
  }

  .imagenGif{
  width: 20rem;
  height: auto;
  border-radius: 50%;

 
}

.tituloClima{
  color: #757575;
}



/* --------------Responsive tablet --------------   -768*/
@media screen and (min-width: 481px) and (max-width: 835px){
  .weather-content{
    max-width: 501px;
  }
}


/* -------------------Responsive mobile ----------------*/

@media screen and (min-width: 320px) and (max-width: 480px){
  .weather-content{
    max-width: 300px;
  }
  .imagenGif{
  width: 10rem;
  height: auto;
 
}
}
  </style>
  