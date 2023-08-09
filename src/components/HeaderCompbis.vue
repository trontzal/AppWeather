<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid bgnav">
      <router-link to="/logo" class="navbar-brand col-3 d-flex justify-content-center ">
        
       
      </router-link>
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end col-4">
          
          <li class="nav-item ">

            <p to="/daily">Capturar datos de la  API</p>
          </li>
         

        </ul>
        <form class="d-flex col-6" v-on:submit.prevent="doSearch">
          <input class="form-control me-2" v-model="search" type="search" placeholder="Introducir Ciudad" aria-label="Search">
          <button class="btn btn-outline-white text-white" type="submit">Buscar</button>
        </form>
      </div>
    </div>
  </nav>

  <div class="result" v-if="result" >
      <h2 class="result__name">{{ result.name }}</h2>
      <p class="result__bio">Temperatura {{ result.main.temp }}°</p>
  </div> 
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'HeaderCompbis',
  setup() {
    const API ="https://api.openweathermap.org/data/2.5/weather?&q="
    const apikey ="&appid=b9964f2d4f56729f81838a84d98556fe"
    let search = ref(null)
    let result = ref(null)
      
    const doSearch= async()=>{
        const response = await fetch(API + search.value + apikey)
        const data= await response.json()
        console.log(data);
        result.value = data
        console.log(result.value.name);
        }
      return{
        search,
        result,
        doSearch,
      }
      
    }
  
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.result{
  text-align: center;
}
.bgnav {
  widows: 100%;
  height: 5rem;
  background-color: #000915;
  color: white;
  margin: 1rem;
}

.nav-link {
  background-color: rgba(218, 218, 218, 0.158);
  padding: 0.3em;
  border-radius: 40%;
  margin: 0.1em;

}

.logo {
  max-width: 5em;
 padding: 0.5rem; 
}
#nav.router-link-active {
color: blue;
 background-color: rgba(133, 128, 128, 0.158); 
 
}
#nav2.router-link-active {
color: blue;
 background-color: rgba(133, 128, 128, 0.158); 

}
 #nav, #nav2 {
  color: rgb(196, 187, 66);

} 
.navbar {
  padding: 0;
}
</style>
