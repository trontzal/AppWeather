<template>


  <div class="contenedor_clima_semana" v-if="climaCompleto">
      <h2 class="titulo_clima_semana">Clima de la Semana</h2>
      <div class="clima_semana">
        <div class="clima_dia"
            v-for="day in climaCompleto.daily"
            :key="day.dt"
            >
          <p class="nombre_dia">
            {{
              new Date(day.dt * 1000).toLocaleDateString(
                "es-sp",
                {
                  weekday: "long",
                }
              )
            }}
          </p>
          <img class="icono_clima"
            :src="`https://raw.githubusercontent.com/Shamanesss/app_weather/main/src/assets/img/weather_icons/${day.weather[0].icon}.png`"
            alt=""
          />

          <p class="descripcion_clima_dia">{{ day.weather[0].description }}</p>
          <!-- :src="`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`"-->
            
          <!-- Idea de como se podria cambiar los iconos a los nuestros -->
          <!-- :src="`../assets/img/weather_icons/${day.weather[0].icon}.png`" -->

          

          <div class="temp-max-min d-flex gap-2 ms-auto">
            <p>{{ Math.round(day.temp.max)  }} &deg;C / {{ Math.round(day.temp.min)  }} &deg;C </p>
            
          </div>
        </div>
      </div>
  </div>


<!-- <div class="contenedor_clima_semana">
  <h2 >Clima de la semana</h2>


</div> -->

  

</template>

<script setup>
import { defineProps } from 'vue';


defineProps({
  climaActual: Object,
  climaCompleto: Object
});

</script>

<style  scoped>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
 .contenedor_clima_semana{
    width: 70vw;
    margin: 0 auto;
    text-align: center;

    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(10.5px);
    -webkit-backdrop-filter: blur(10.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    text-align: center;
    padding: 20px 20px 20px;
 }

 .titulo_clima_semana{
  margin-bottom: 1.5rem;
 }

 .clima_semana{
  display: flex;
  flex-direction: column;
    justify-content: space-between;
    overflow: auto;
    white-space: nowrap;
 }
 .clima_dia{
  text-align: center;
  align-items: center;

 }

 .nombre_dia{
  text-transform: capitalize;
 }

 .icono_clima{
  width: 3rem;
  height: 3rem;
 }
 .descripcion_clima_dia{
    text-transform: capitalize;
 }
 .temp-max-min{
  font-size: 0.8rem;
  
 }


 /* --------------Responsive tablet --------------   -768*/
@media screen and (min-width: 481px) and (max-width: 835px){
  
}


/* -------------------Responsive mobile ----------------*/

@media screen and (min-width: 320px) and (max-width: 480px){

 

}
</style>