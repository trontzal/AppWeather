<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid bgnav">
      <router-link to="/" class="navbar-brand col-3 d-flex justify-content-center ">
        <img class= "logo" src="../assets/img/logotiempo.png" alt="logo"> 
       
      </router-link>
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end col-4">
          <li class="nav-item ">

            <router-link to="/" class="nav-link active border border-muted " id="nav"
            aria-current="page">Semanal</router-link>
          </li>
          <li class="nav-item">

            <router-link to="/daily" class="nav-link active border borde-muted" id="nav2"
            
             >Diario</router-link>
          </li>
          <!-- <div><span class="material-icons-outlined ">
              language
            </span></div> -->

        </ul>
        <form class="d-flex col-6" v-on:submit.prevent="doSearch">
          <input v-model="search" class="form-control me-2" type="search" placeholder="Introducir Ciudad" aria-label="Search">
          <button class="btn btn-outline-grey" type="submit">Buscar</button>
        </form>
      </div>
    </div>
  </nav>



  <CardHome />
  
</template>

<script setup>
import CardHome from "./CardHome.vue";
  import {ref} from "vue"
  let search = ref("");
  let result = ref("");

  //
  const doSearch = async () => {
    try{

            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?&q=${search.value}&appid=7efa332cf48aeb9d2d391a51027f1a71&units=metric`);
            const data = await response.json();
            result.value = data;
            console.log("++PADRE+++",result.value.name);
            }
            catch(error){
              console.log(error)
            }
        };
</script>



<style scoped>
.bgnav {
  widows: 100%;
  height: auto;
  background-color: #C4DDFF;
}

.nav-link {
  background-color: rgba(218, 218, 218, 0.158);
  padding: 0.3em;
  border-radius: 9px;
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
