<template>

    <!-- Solo se muestra si ninguna ciudad esta seleccionada -->
    <div v-if="climaActual == ''" class="gifBuscar">
        <h1 class="tituloClima">Clima</h1>
        <img class="imagenGif"  src="../assets/img/entrada.gif" alt="">
    </div>

    <!-- div principal -->
    <div v-else id="climaPrincipalDiario" :class="{ 'rain': climaActual.rain !== undefined}">
        
        <!-- Parte de arriba con nombre y seleccion -->
        <div class="titulo">
            <div></div>
            <p class="ciudad">{{ climaActual.name }}</p>

            <!-- Botones de Andar en bici o correr --> 
            <div class="opciones">
                <p class="switchs"  @click="ciclismo" :class="{'seleccionado':switchValue==false}">Ciclismo</p>
                <!-- switch -->
                <div class="switch form-check form-switch">
                    <input v-model="switchValue" @click="cambio()" class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                </div>
                <p class="switchs" @click="footing" :class="{'seleccionado':switchValue==true}">Running</p>
            </div>
                
        </div>

        <!-- resto de datos  -->
        <div class="containerDatos ">

            <!-- Imagen del cielo y grados -->
            <div class="nubesGrados">
                <img :src="`https://raw.githubusercontent.com/Shamanesss/app_weather/main/src/assets/img/weather_icons/${climaActual.weather[0].icon}.png`" alt="icon">
                <div class="grados">
                    <p>
                    {{Math.round(climaActual.main.temp)}}º
                    </p>
                </div>
            </div>

            <!-- gif en el centro con condiciones -->
            <div class="gif">
                <!-- si llueve -->                    
                <img v-if="climaActual.rain" src="../assets/img/umbrella-motvion-800x600-unscreen.gif" alt="" class="paraguas">

                <!-- si nieva -->
                <!-- <img v-else-if="climaActual.snow" src="../assets/img/Making-a-snow-angel-unscreen.gif" alt=""> -->

                <!-- si hace mucho calor y sol -->
                <img v-else-if="climaActual.main.temp >25 && climaActual.clouds.all <= 20" src="../assets/img/muchocalor.gif" alt="" class="muchoCalor">

                <!-- si se elige ciclismo -->
                <div v-else-if="bici==true">
                    <!-- se cumplen -->
                    <img v-if=" climaActual.main.temp >= 15 && climaActual.main.temp < 25 && climaActual.main.humidity <70 && climaActual.main.humidity >35 && climaActual.wind.speed < 10" src="../assets/img/giphy-unscreen.gif" alt="" class="ciclismo">
                    <!-- no se cumplen -->
                    <img v-else src="../assets/img/bored-week-13-unscreen.gif" alt="" class="bored">
                </div>
                
                <!-- si se elige footing -->
                <div v-else>
                    <!-- se cumplen -->
                    <img  v-if=" climaActual.main.temp >= 10 && climaActual.main.temp <= 20 && climaActual.main.humidity <60 && climaActual.main.humidity >40 && climaActual.wind.speed < 15" src="../assets/img/footing-unscreen.gif" alt="" class="footing">
                    <!-- no se cumple -->
                    <img v-else src="../assets/img/bored-week-13-unscreen.gif" alt="" class="bored">
                </div>
            </div>

                <!-- Detalles de la humedad y el viento a la derecha -->
                <div class="datosEspecificos">
                    <p class="humedadimg"><img src="../assets/img/kisspng-humidity-symbol-computer-icons-temperature-measure-against-vector-5ad99bf9116459.7880027515242106810713-removebg-preview.png" alt="" cl>{{ climaActual.main.humidity }}% </p>
                    <p class="vientoimg"><img src="../assets/img/png-transparent-wind-symbol-weather-map-computer-icons-weather-forecasting-wind-text-logo-weather-forecasting-removebg-preview.png" alt="" >{{ climaActual.wind.speed }}km/h</p>
                </div>
        </div>

        <!-- texto de recomendacion abajo -->
        <div class="recomendacion">
            <div v-if="climaActual.rain">
                <h2>Esta lloviendo.</h2>
                <p>El suelo esta mojado y no se recomienda salir a hacer deporte</p>
            </div>
            <div v-else-if="climaActual.main.temp >25 && climaActual.clouds.all <= 20">
                <h2>Hace mucho calor.</h2>
                <p>No se recomienda hacer deporte. Mantente hidratado</p>
            </div>
            <div v-else-if="bici==true && climaActual.main.temp >= 15 && climaActual.main.temp < 25 && climaActual.main.humidity <70 && climaActual.main.humidity >35 && climaActual.wind.speed < 10">
                <h2>¡Hora de coger la bici!</h2>
                <p>El tiempo es perfecto para salir a dar una vuelta en bici. </p>
            </div>
            <div v-else-if="bici==false && climaActual.main.temp >= 10 && climaActual.main.temp <= 20 && climaActual.main.humidity <60 && climaActual.main.humidity >40 && climaActual.wind.speed < 15">
                <h2>¡Hora de Correr!</h2>
                <p>Es el momento perfecto para salir a correr un poco. </p>
            </div>
            <div v-else>
                <div v-if="bici==true">
                <h2>Malas condiciones</h2>
                <p>No es el mejor momento para salir con la bici. </p>
                </div>
                <div v-else>
                <h2>Malas condiciones</h2>
                <p>No es el mejor momento para salir a correr. </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { defineProps,ref } from 'vue';

defineProps({
    climaActual: Object,
    climaCompleto: Object
});

//ciclismo true por defecto
let bici = ref(true)
//valor del switch par que coincida con lo seleccionado
let switchValue = ref(false);


//si se hace click en footing "bici" se vuelve false
function footing(){
    switchValue.value = true;
    bici.value = false
}

//si se hace click en ciclismo "bici" se vuelve true
function ciclismo(){
    switchValue.value = false;
    bici.value = true
}

//si se hace click en el switch el valor cambia
function cambio(){
    if (bici.value == true) {
         bici.value = false;
    }
    else{
         bici.value = true;
    }
}


</script>

<style scoped>


*{
    text-align: center;
    margin: 0;
}

.gifBuscar{
    background-color: rgba(255, 255, 255, 0.144);
    border: 1px solid rgba(221, 221, 221, 0.301);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    border-radius: 10px;
    width:30rem;
    height: 25rem;
    margin: 0 auto;
}

.tituloClima{
    color: #757575;
}

.gifBuscar > img {
    border-radius: 100%;
    width: 20em;
}
/* Datos generales de la tarjeta */
#climaPrincipalDiario{
    margin: 0 auto;
    width: 60%;
    height: auto;
    border: 1px solid rgba(0, 0, 0, 0.192);
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-radius: 20px;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    background-color: rgba(255, 255, 255, 0.637);  
}

/* solo aparece cuando llueve */
.rain{
    background-image: url(../assets/img/lluvia.gif);
}


.titulo{
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    align-items: center;
}
    /* nombre de la ciudad */
    .ciudad{
        font-size: 2rem;
    }
    /* Ciclismo y running para elegir */
    .opciones{
        display: flex;
        align-items: center;
        margin: 0 auto;
        
    }

    .opciones > p{
        margin-right: 0.5rem;
    }

    .switch{
        display: flex;
        align-items: center;
        
    }
    .switchs {
    color: rgb(0, 0, 0);
    cursor: pointer;
    
    }

    /* estilos solo para el que esta seleccionado */
    .seleccionado{
        border: 1px solid rgba(0, 0, 0, 0.288);
        border-radius: 20px;
        box-shadow: 2px 2px 3px 0 rgba(31, 38, 135, 0.37);
        background-color: rgba(255, 255, 255, 0.637);
        padding: .2rem .5rem;
        
    }

/* container con la informacion */
.containerDatos{
    display: flex;
    align-items: center;
    height: auto;
    position: relative;
    justify-content: space-evenly;
}

    /* humedad y viento */
    .datosEspecificos{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        gap: 4rem;
    }
    
    .datosEspecificos > p{
        text-align: left;
    }
    .humedadimg{
        margin-left: 1rem;
    }

    .vientoimg > img{
        width: 4rem;
    }

    .humedadimg > img{
        width: 1.5rem;
    }

/* grados en grande */
.grados{
    place-self: center;
    font-size: 5rem;
}

        /* tamaño de los gifs ------------------------ */
        .ciclismo{
            width: 15rem;
        }

        .footing{
            width: 20rem;
        }

        .paraguas{
            width: 15rem;
        }

        .muchoCalor{
            width: 15rem;
        }

        .bored{
            width: 15rem;
        }

/* texto de recomendacion */
.recomendacion{
    border-radius: 20px;
    margin: 0 4rem 0 4rem;
    z-index: 10;
    background-color: rgba(255, 255, 255, 0.733);
    box-shadow: 2px 2px 2px 2px rgba(155, 153, 153, 0.438);
}



 @media screen and (max-width: 900px){
    #climaPrincipalDiario{
        width: 90%;
    }
    .titulo{
        grid-template-columns: auto;
        justify-content: center;
    }

 }
 @media screen and (max-width: 450px){
    #climaPrincipalDiario{
        width: 90vw;
        height: auto;
    }
    
    .containerDatos{
        flex-direction: column;
    }

    .nubesGrados{
        display: flex;
        gap: 4rem;
        flex-direction: row-reverse;
    }

    .fecha{
        display: none;
    }
    .hora{
        display: none;
    }

    .datosEspecificos{
    gap: 0rem;
    flex-direction: row;
    align-items: center;
    }

    .gif > div > img{
        width: 15rem;
    }
    .gif > img{
        width: 10rem;
    }

    .recomendacion{
        margin:1rem;
    }

    .gifBuscar{
        width: 90%;
        height: 15rem;
    }
    .gifBuscar > img{
        width: 50%;
    }
 }


</style>