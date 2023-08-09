<template>
    <div 
    class="contenedor_detalles_clima"
    v-if="climaCompleto && climaActual"
    >
        <h3 class="text-center titulo-clima-hoy">Detalles del clima de hoy</h3>
        <div class="detalles_clima_hoy">
            <img 
            class="imagen_clima_hoy"
            :src="`https://raw.githubusercontent.com/Shamanesss/app_weather/main/src/assets/img/weather_icons/${climaActual.weather[0].icon}.png`"
            alt="">

            <!-- :src="`https://openweathermap.org/img/wn/${climaActual.weather[0].icon}@2x.png`" -->
            <div 
            class="info_clima_hoy">
                <p>Temperatura: {{ Math.round(climaActual.main.temp_max) }} &deg;C / {{ Math.round(climaActual.main.temp_min) }} &deg;C</p>
                <p>Humedad: {{ climaActual.main.humidity }}%</p>
                <p>Viento: {{ Math.round(climaActual.wind.speed * 3.6) }} km/h</p>
                <p>Nubosidad: {{ climaActual.clouds.all }}% - <span class="clima_hoy_descripcion">{{ climaActual.weather[0].description}}</span></p>
                <p>Presión: {{ climaActual.main.pressure }} mbar</p>
                <p>Indice UV: {{ climaCompleto.current.uvi }} </p>
            </div>

        </div>
        
    </div>
</template>

<script setup>
    import { defineProps } from 'vue';

    defineProps({
    climaActual: Object,
    climaCompleto: Object
    });

</script>

<style scoped>

.contenedor_detalles_clima{
    width: 90vw;
    margin: 0 auto;
    
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(10.5px);
    -webkit-backdrop-filter: blur(10.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);

    padding: 20px 20px 20px;
    margin-bottom: 1rem;
}

.detalles_clima_hoy{
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.detalles_clima_hoy img{
    width: 25vw;
    margin: 0 auto;

}

.clima_hoy_descripcion{
    text-transform: capitalize;
}

.titulo-clima-hoy{
  color: rgb(61, 61, 61);
}

/* -------------------Responsive Tablet ----------------*/


@media screen and (min-width: 481px) and (max-width: 835px){

    .contenedor_detalles_clima{
    width: 45vw;
    margin: 0;
}
    .detalles_clima_hoy{
    display: flex;
    flex-direction: row;
    gap: 1rem;
}

.detalles_clima_hoy img{
    width: 10vw;
    height: 10vw;
    margin: auto;

}

}


/* -------------------Responsive Desktop ----------------*/
 
@media screen and (min-width: 836px){
    .contenedor_detalles_clima{
    width: 35vw;
    margin: 0;
}

.detalles_clima_hoy{
    display: flex;
    flex-direction: row;
    gap: 1rem;
}

.detalles_clima_hoy img{
    width: 10vw;
    height: 10vw;
    margin: auto;

}
}



</style>