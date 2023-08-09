<template>
  <div class="nubesfondo">
    <div class="contenedor_componentes">
        
    
        <CardHome :climaActual="climaActual" :climaCompleto="climaCompleto"/>
          <br>
        <SemanaComp :climaActual="climaActual" :climaCompleto="climaCompleto"/>
        

  </div>
  </div>


</template>

<script setup>
import { defineProps } from "vue"
import CardHome from '../components/CardHome.vue';

import SemanaComp from '@/components/SemanaComp.vue';






defineProps({

  climaActual: Object,
  climaCompleto: Object
});
</script>

<style scoped>

.nubesfondo{
  background-image:url("../assets/img/v1015-101a.jpg");
  background-size: cover;
  min-height: 100vh;

}
.contenedor_componentes{
  padding: 2rem 0 2rem 0;
}

</style>



