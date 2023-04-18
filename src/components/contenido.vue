<template>
  <v-container fluid class="conte">
      <v-row
      align="center"
      justify="center"
    >
      <v-col
        class="text-center"
        cols="12"
      >
      <v-container fluid class="p-4 bg-dark" top: 50%;left: 45% >
        <v-row >
          <v-col> <v-img class="code" src="../assets/imagen/code.jpg"  width="500px" height="500px" >
            </v-img>
          </v-col>
      </v-row>
    </v-container>
      <v-card 
    class="mx-auto"
    max-width="800"
    color="#ECE5E4"
    
  > 
  <v-card-title class="d-flex justify-center mb-6">
          <h1 class="text-h4 font-weight-thin mb-4">
         <b> ¿Que es code.org?</b>
          </h1>
    
    </v-card-title>
    <v-card-subtitle>
      <h4 class="subheading">
        Es una organización sin fines de lucro, dedicada a expandir el acceso a Ciencias de la Computación; haciéndola disponible en más escuelas y a aumentar la participación de las mujeres y minorías subrepresentadas. Nuestra visión es que cada estudiante en cada escuela tenga la oportunidad de aprender informática, de la misma manera que biología, química o álgebra. Code.org es apoyado por donantes generosos como Amazon, Facebook, Google, la Fundación de Infosys, Microsoft y muchos más.
        </h4>
    </v-card-subtitle>
        </v-card>
        <v-row align="center"
      justify="center"
    >
    <v-col
      cols="6"
      sm="4"
    >
      <v-img
        src="../assets/carrete/1.jpg"
        gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
      ></v-img>
    </v-col>

    <v-col
      cols="6"
      sm="4"
    >
      <v-img src="../assets/carrete/2.jpg">
        <div class="fill-height bottom-gradient"></div>
      </v-img>
    </v-col>

    <v-col
      cols="6"
      sm="4"
    >
      <v-img src="../assets/carrete/3.jpg">
        <div class="fill-height repeating-gradient"></div>
      </v-img>
    </v-col>
    <v-col
      cols="6"
      sm="4"
    >
      <v-img src="../assets/carrete/4.jpg">
        <div class="fill-height repeating-gradient"></div>
      </v-img>
    </v-col>
    <v-col
      cols="6"
      sm="4"
    >
      <v-img src="../assets/carrete/5.jpg">
        <div class="fill-height repeating-gradient"></div>
      </v-img>
    </v-col>
    <v-col
      cols="6"
      sm="4"
    >
      <v-img src="../assets/carrete/6.jpg">
        <div class="fill-height repeating-gradient"></div>
      </v-img>
    </v-col>
  </v-row>
  <div class="card-body;" >
    <div class="card-footer">
        <div class="embed-responsive embed-responsive-16by9">
            <center>
                <b class="card" style="background-color:blue;" align="center"> 
                    <h2>Primeros pasos Code.org</h2>
             </b>
             <p></p>
             <iframe width="853" height="480" src="https://www.youtube.com/embed/KrWC6Ws04Yo" title="Primeros pasos CODE.ORG. Versión para alumnos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </center>
            </div>
          </div>
          </div>
              <b class="card"  align="center">
              <h2>Ejemplo Practico de  Code.org</h2></b>
          </v-col>
              <v-col 
                  v-for="n in 1"
                  :key="n"
                  cols="6"
                  >
                <v-carousel hide-delimiters>
              <v-carousel-item >
                <v-img  src="../assets/info/0.jpg" width="100%" height="auto"></v-img>
              </v-carousel-item>
              <v-carousel-item width="auto" height="1000px" >
                <v-img  src="../assets/info/1.jpg" cover></v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img class="info" src="../assets/info/2.jpg" max-height="300"></v-img>
              </v-carousel-item>
              <v-carousel-item>
                <img class="info" src="../assets/info/3.jpg">
              </v-carousel-item>
                <v-carousel-item>
                <img class="info" src="../assets/info/4.jpg">
              </v-carousel-item>
              <v-carousel-item>
                <img class="info" src="../assets/info/5.jpg">
              </v-carousel-item>
              <v-carousel-item>
                <img class="info" src="../assets/info/6.jpg">
              </v-carousel-item>
              <v-carousel-item>
                <img class="info" src="../assets/info/7.jpg">
              </v-carousel-item>
              <v-carousel-item>
                <img class="info" src="../assets/info/9.jpg">
              </v-carousel-item>
            </v-carousel>
          </v-col>
      </v-row>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      
    }
  },
}
</script>
<style scoped>
.info{
  margin-top: 15px;
  width: 100%;
  height: auto;
  max-height: auto;
  object-fit: cover;
  
}
.estilo{
  margin-top: 15px;
  width: 50%;
  height: auto;
  max-height: auto;
  object-fit: cover;
}
</style>