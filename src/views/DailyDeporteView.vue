<template>
  <div class="nubesfondo">
    <div class="mostrarValoracion">
      <h1 class="titulomostrarValoracion"><i class="fa-regular fa-face-laugh-wink" style="color: #ffffff;"></i> + {{cantidadValoracion}}</h1>
      </div>
    <div class="contenedor_componentes">
      <DiarioPrincipalDeporteVue
        :climaActual="climaActual"
        :climaCompleto="climaCompleto"
      />
      <br />
      <ClimaHorasDia class="cuadroHorasDia"
        :climaActual="climaActual"
        :climaCompleto="climaCompleto"
      />
      <br />

      <div class="contenedorDetalles_AmanecerAtarceder">
        <DetallesClimaDia
          :climaActual="climaActual"
          :climaCompleto="climaCompleto"
        />

        <div>
          <AmanecerAtardecer
            :climaActual="climaActual"
            :climaCompleto="climaCompleto"
          />
        </div>
      </div>

      <br />
      <ValoraAppVue class="valoraAppComp" @noMeGusta="noMeGusta" @meGusta="meGusta"/>
    </div>
 
  </div>
</template>

<script setup>
import DiarioPrincipalDeporteVue from "@/components/DiarioPrincipalDeporte.vue";
import ClimaHorasDia from "@/components/ClimaHorasDia.vue";
import AmanecerAtardecer from "../components/AmanecerAtardercer.vue";
import DetallesClimaDia from "../components/DetallesClimaDia.vue";
import ValoraAppVue from "../components/ValoraApp.vue";

import { defineProps , ref} from "vue";

defineProps({
  climaActual: Object,
  climaCompleto: Object,
});

//valoracion contador
const cantidadValoracion = ref(0)
const meGusta = ()=>{
  cantidadValoracion.value++;
}
const noMeGusta = ()=>{
  if(cantidadValoracion.value > 0){
    cantidadValoracion.value--;
  }
  
}

</script>

<style>
.nubesfondo {
  background-image: url("../assets/img/v1015-101a.jpg");
  background-size: cover;
  min-height: 100vh;
}

.contenedor_componentes {
  padding: 2rem 0 2rem 0;
}

.mostrarValoracion {
  /* box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset; */
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10.5px);
  -webkit-backdrop-filter: blur(10.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  max-width: 90px;
  text-align: center;
  padding: 0.5rem 1rem ;
  margin: 0 auto 0 90%;
  position: absolute;
  top:7.5rem;
}
.titulomostrarValoracion{
  font-size: 1rem;
  color: #fff;
}
.cuadroHorasDia{
margin: 4rem 0;
}



/* -------------------Responsive Tablet ----------------*/

@media screen and (min-width: 481px) and (max-width: 835px) {
  .contenedorDetalles_AmanecerAtarceder {
    display: flex;
    justify-content: space-evenly;
  }
  /* .mostrarValoracion{
    margin: 0 auto 0 80%;
    top:8rem;
  } */
}

/* -------------------Responsive Desktop ----------------*/

@media screen and (min-width: 836px) {
  .contenedorDetalles_AmanecerAtarceder {
    display: flex;
    justify-content: space-evenly;
  }
}
</style>
