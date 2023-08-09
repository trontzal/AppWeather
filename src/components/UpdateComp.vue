<template>
  <div class="home">
    <div class="wrapper fadeInDown">
      <div id="formContent">
        <div class="fadeIn first">
          <h1>CRUD</h1>
          <form v-on:submit.prevent="postNew">
            <input
              type="text"
              id="delid"
              class="fadeIn second"
              name="id"
              placeholder="Introducir el Id"
              v-model="id"
            />
            <input
              type="text"
              id="avatar"
              class="fadeIn third"
              name="avatar"
              placeholder="Introducir enlace avatar"
              v-model="avatar"
            />
            <input
              type="text"
              id="name"
              class="fadeIn fourth"
              name="name"
              placeholder="Introducir el nombre"
              v-model="name"
            />
            <input
              type="date"
              id="fecha"
              class="fadeIn fifth"
              name="fecha"
              placeholder="Introducir la fecha"
              v-model="fecha"
            />
            <input
              type="text"
              id="ciudad"
              class="fadeIn sixth"
              name="ciudad"
              placeholder="Introducir ciudad"
              v-model="ciudad"
            />
            <input
              type="text"
              id="foto"
              class="fadeIn seventh"
              name="foto"
              placeholder="Introducir enlace foto"
              v-model="foto"
            />
            <input
              type="text"
              id="comentario"
              class="fadeIn eighth"
              name="comentario"
              placeholder="Introducir comentario"
              v-model="comentario"
            />
            <input
              type="button"
              class="fadeIn twelfth"
              @click="updateNew"
              value="UPDATE"
            />
            <input
              type="button"
              class="fadeIn twelfth"
              @click="getId"
              value="GET"
            />
            <input
              type="button"
              class="fadeIn ninth"
              @click="delNew"
              value="DELETE"
            />
            <input
              type="button"
              class="fadeIn ninth"
              @click="search"
              value="SEARCH"
            />
            <input type="submit" class="fadeIn ninth" value="POST" />

            <div class="error" v-if="error">{{ error }}</div>
          </form>
        </div>
      </div>
      <div class="container">
        <div class="resultados" id="formContent-2">
          <div class="resultado" v-for="result in results" :key="result.id">
            <img class="avatar-img" :src="result.avatar" alt="avatar" />
            <h4>
              {{ result.name }} <strong>ID {{ result.id }}</strong>
            </h4>
            <p class="fecha">{{ result.fecha }} {{ result.ciudad }}</p>
            <p></p>
            <img class="foto" :src="result.foto" alt="foto" />
            <p class="comentario">{{ result.comentario }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";

const avatar = ref("");
const name = ref("");
const fecha = ref("");
const ciudad = ref("");
const foto = ref("");
const comentario = ref("");

const id = ref("");
const error = ref("");
// coger un id y te proporciona los datos
const getId = async () => {
  try {
    const response = await axios.get(
      "http://localhost:3000/fotografias/" + id.value
    );
    const data = response.data;
    console.log(response);
    avatar.value = data.avatar;
    name.value = data.name;
    fecha.value = data.fecha;
    ciudad.value = data.ciudad;
    foto.value = data.foto;
    comentario.value = data.comentario;
  } catch (error) {
    alert("El Id no existe");
    console.log(error);
  }
};

//eliminas los datos
const delNew = async () => {
  try {
    await axios.delete("http://localhost:3000/fotografias/" + id.value);
    console.log("http://localhost:3000/fotografias/" + id.value);
    alert(`La entrada id: ${id.value} ha sido eliminada de la base de datos`);

    location.reload();
  } catch (error) {
    console.log(error.value);
  }
};

// para actualizar los datos
const updateNew = async () => {
  try {
    const response = await axios.put(
      `http://localhost:3000/fotografias/${id.value}`,
      {
        id: id.value,
        avatar: avatar.value,
        name: name.value,
        fecha: fecha.value,
        ciudad: ciudad.value,
        foto: foto.value,
        comentario: comentario.value,
      }
    );
    console.log(response);
    location.reload();
    alert("Actualizado correctamente");
  } catch (error) {
    console.log(error);
    error.value = "Error no se han actualizado los datos";
  }
};

//ESte es el post
const postNew = async () => {
  try {
    if (
      !name.value ||
      !fecha.value ||
      !ciudad.value ||
      !comentario.value ||
      !foto.value ||
      !avatar.value
    ) {
      error.value = "No puede haber campos vacios";
      return;
    }

    const response = await axios.post("http://localhost:3000/fotografias", {
      avatar: avatar.value,
      name: name.value,
      fecha: fecha.value,
      ciudad: ciudad.value,
      foto: foto.value,
      comentario: comentario.value,
    });
    console.log(response);
    location.reload();
    alert("Nuevo post añadido");
  } catch (error) {
    console.log(error);
    error.value = "Error al envia los datos";
  }
};

// datos de la busqueda
const results = ref([]);
const search = async () => {
  try {
    const response = await axios.get(
      `http://localhost:3000/fotografias/?name=${name.value}`
    );
    results.value = response.data;
    console.log(response.data);
  } catch (error) {
    error.value = "Nombre no existe";
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 20px;
}

#formContent {
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background: #fff;
  padding: 30px;
  width: 90%;
  max-width: 850px;
  position: relative;
  padding: 0px;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  text-align: center;
}

#formContent-2 {
  padding: 30px;
  max-width: 850px;
  margin: 0 auto;
}

input[type="button"],
input[type="submit"] {
  background-color: #56baed;
  border: none;
  color: white;
  padding: 15px 80px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-size: 13px;
  -webkit-box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
  box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
  margin: 5px 20px 40px 20px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

input[type="button"]:hover,
input[type="submit"]:hover {
  background-color: #39ace7;
}

input[type="button"]:active,
input[type="submit"]:active {
  -moz-transform: scale(0.95);
  -webkit-transform: scale(0.95);
  -o-transform: scale(0.95);
  -ms-transform: scale(0.95);
  transform: scale(0.95);
}

input[type="text"],
[type="date"] {
  background-color: #f6f6f6;
  border: none;
  color: #0d0d0d;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  width: 85%;
  border: 2px solid #f6f6f6;
}

input[type="text"]:focus {
  background-color: #fff;
  border-bottom: 2px solid #5fbae9;
}

input[type="text"]:placeholder {
  color: #cccccc;
}

.error {
  background-color: red;
  color: white;
}

#delid {
  margin-top: 2rem;
}

.resultados {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.resultado {
  border: 1px solid black;
  flex-wrap: wrap;
}

.avatar-img {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  object-fit: cover;
}

.foto {
  max-width: 100%;
  width: 10rem;
  height: 10rem;
  border-radius: 10px;
}

.comentario {
  width: 10rem;
}

.fecha {
  width: 10rem;
}
</style>
