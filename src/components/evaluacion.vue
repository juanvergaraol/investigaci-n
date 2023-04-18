<template>
  <v-container fluid class="conte">
    <v-row>
      <v-col align="center">
        <v-row class="title_p mb-5" >
          <v-col align="center">
            <h1>Evaluación</h1>
            <p>En este cuestionario, vas a responder solo 5 preguntas: presiona el circulo para responder. Y después vamos a CODE.ORG</p>
          </v-col>
        </v-row>
        <v-row class="div_background px-5">
          <v-col align="center">

<!------------------------------------ PREGUNTA 1----------------------------------->
            <div v-show="view==0" class="my-5 mx-16 transition">
              <v-row no-gutters>
                <div class="title_h">
                  <h2>1.	Observa la secuencia de códigos, ¿La estructura permite que el Angry Bird aplaste al Cerdo?</h2>
                </div>
              </v-row>
              <div class="parrafo_p">
                <v-img
              src="../assets/evalua/1.png"
              height="auto"
              max-width="100%"
            ></v-img>
              <v-row no-gutters>
                <v-btn @click="registrar(0)" class="ml-10 my-2" color="blue" dark outlined icon x-small></v-btn>
                <p class="mx-2 my-2">Verdadero </p>
              </v-row>
              <v-row no-gutters>
                <v-btn @click="registrar(1)" class="ml-10 my-2" color="blue" dark outlined icon x-small></v-btn>
                <p class="mx-2 my-2">Falso </p>
              </v-row>            
              </div>
            </div>

<!------------------------------------ PREGUNTA 2----------------------------------->
            <div v-show="view==1" class="my-5 mx-16 transition">
              <v-row no-gutters>
                <div class="title_h">
                  <h2>2.	En la siguiente secuencia falta un bloque de código para que el Angry Bird aplaste al Cerdo, ¿Cuál Será?</h2>
                </div>
              </v-row>
              <div class="parrafo_p">
                    <v-img
                  src="../assets/evalua/2.png"
                  height="auto"
                  max-width="100%"
                  arigin="center"
                ></v-img>
              <v-row no-gutters>
                <v-btn @click="registrar(1)" class="ml-10 my-2" color="blue" dark outlined icon x-small></v-btn>
                <p class="mx-2 my-2">A. Girar a la derecha </p>
              </v-row>
              <v-row no-gutters>
                <v-btn @click="registrar(2)" class="ml-10 my-2" color="blue" dark outlined icon x-small></v-btn>
                <p class="mx-2 my-2">B. Girar a la Izquierda </p>
              </v-row> 
              <v-row no-gutters>
                <v-btn @click="registrar(3)" class="ml-10 my-2" color="blue" dark outlined icon x-small></v-btn>
                <p class="mx-2 my-2">C. Avanzar </p>
              </v-row>            
              </div>
            </div>

<!------------------------------------ PREGUNTA 3----------------------------------->
            <div v-show="view==2" class="my-5 mx-16 transition">
              <v-row no-gutters>
                <div class="title_h">
                  <h2>3.	En el bloque de “Bucle” ¿cuántas veces debe repetirse la Acción Avanzar para que la secuencia de códigos funcione?</h2>
                </div>
              </v-row>
              <div class="parrafo_p">
                <v-img
              src="../assets/evalua/3.png"
              height="auto"
              max-width="100%"
              arigin="center"
            ></v-img>
              <v-row no-gutters>
                <v-btn @click="registrar(2)" class="ml-10 my-2" color="blue" dark outlined icon x-small></v-btn>
                <p class="mx-2 my-2">A. 1</p>
              </v-row>
              <v-row no-gutters>
                <v-btn @click="registrar(0)" class="ml-10 my-2" color="blue" dark outlined icon x-small></v-btn>
                <p class="mx-2 my-2">B. 2</p>
              </v-row> 
              <v-row no-gutters>
                <v-btn @click="registrar(1)" class="ml-10 my-2" color="blue" dark outlined icon x-small></v-btn>
                <p class="mx-2 my-2">B. 3</p>
              </v-row>            
              </div>
            </div>

<!------------------------------------ PREGUNTA 4----------------------------------->
            <div v-show="view==3" class="my-5 mx-16 transition">
              <v-row no-gutters>
                <div class="title_h">
                  <h2>4.	Este código tiene un error, Indica cual es.</h2>
                </div>
              </v-row>
              <div class="parrafo_p">
                <v-img
              src="../assets/evalua/4.png"
              height="auto"
              max-width="100%"
              arigin="center"
            ></v-img>
              <v-row no-gutters>
                <v-btn @click="registrar(1)" class="ml-10 my-2" color="blue" dark outlined icon x-small></v-btn>
                <p class="mx-2 my-2">A. 1</p>
              </v-row>
              <v-row no-gutters>
                <v-btn @click="registrar(2)" class="ml-10 my-2" color="blue" dark outlined icon x-small></v-btn>
                <p class="mx-2 my-2">B. 2</p>
              </v-row>       
               <v-row no-gutters>
                <v-btn @click="registrar(3)" class="ml-10 my-2" color="blue" dark outlined icon x-small></v-btn>
                <p class="mx-2 my-2">C. 3</p>
              </v-row>
              <v-row no-gutters>
                <v-btn @click="registrar(0)" class="ml-10 my-2" color="blue" dark outlined icon x-small></v-btn>
                <p class="mx-2 my-2">C. 4</p>
              </v-row>         
              </div>
            </div>

<!------------------------------------ PREGUNTA 5----------------------------------->
            <div v-show="view==4" class="my-5 mx-16 transition">
              <v-row no-gutters>
                <div class="title_h">
                  <h2>5.	Mantén la calma y ayuda al Angry Bird a encontrar al cerdo malo, Identifica la secuencia correcta para atrapar a ese cerdo.</h2>
                </div>
              </v-row>
              <div class="parrafo_p">
                <v-img
              src="../assets/evalua/5.png"
              height="auto"
              max-width="100%"
              arigin="center"
            ></v-img>
              <v-row no-gutters>
                <v-btn @click="registrar(1)" class="ml-10 my-2" color="blue" dark outlined icon x-small></v-btn>
                <p class="mx-2 my-2">A</p>
              </v-row>
              <v-row no-gutters>
                <v-btn @click="registrar(2)" class="ml-10 my-2" color="blue" dark outlined icon x-small></v-btn>
                <p class="mx-2 my-2">B </p>
              </v-row>  
               <v-row no-gutters>
                <v-btn @click="registrar(3)" class="ml-10 my-2" color="blue" dark outlined icon x-small></v-btn>
                <p class="mx-2 my-2">C</p>
              </v-row>   
               <v-row no-gutters>
                <v-btn @click="registrar(4)" class="ml-10 my-2" color="blue" dark outlined icon x-small></v-btn>
                <p class="mx-2 my-2">D.</p>
              </v-row>         
              </div>
            </div>

<!------------------------------------ PREGUNTA 6-----------------------------------
            <div v-show="view==5" class="my-5 mx-16 transition">
              <v-row no-gutters>
                <div class="title_h">
                  <h2>6 - Las habilidades aprendidas se dividen en 2: ¿Cuales son?</h2>
                </div>
              </v-row>
              <div class="parrafo_p">
              <v-row no-gutters>
                <v-btn @click="registrar(1)" class="ml-10 my-2" color="blue" dark outlined icon x-small></v-btn>
                <p class="mx-2 my-2">A. Respirar y correr.</p>
              </v-row>
              <v-row no-gutters>
                <v-btn @click="registrar(2)" class="ml-10 my-2" color="blue" dark outlined icon x-small></v-btn>
                <p class="mx-2 my-2">B. Saltar y básica.</p>
              </v-row>   
              <v-row no-gutters>
                <v-btn @click="registrar(3)" class="ml-10 my-2" color="blue" dark outlined icon x-small></v-btn>
                <p class="mx-2 my-2">C. Innata y aprendidas.</p>
              </v-row> 
              <v-row no-gutters>
                <v-btn @click="registrar(4)" class="ml-10 my-2" color="blue" dark outlined icon x-small></v-btn>
                <p class="mx-2 my-2">D. Básica y específica.</p>
              </v-row>          
              </div>
            </div>

------------------------------------ PREGUNTA 7-----------------------------------
            <div v-show="view==6" class="my-5 mx-16 transition">
              <v-row no-gutters>
                <div class="title_h">
                  <h2>7 - ¿Cuáles son los cuatros grandes concepto de las habilidades básicas?</h2>
                </div>
              </v-row>
              <div class="parrafo_p">
              <v-row no-gutters>
                <v-btn @click="registrar(1)" class="ml-10 my-2" color="blue" dark outlined icon x-small></v-btn>
                <p class="mx-2 my-2">A. Practicar, cantar, correr, movimiento.</p>
              </v-row>
              <v-row no-gutters>
                <v-btn @click="registrar(2)" class="ml-10 my-2" color="blue" dark outlined icon x-small></v-btn>
                <p class="mx-2 my-2">B. Salto, correr, desplazamiento, control y manipulación de objetos.</p>
              </v-row>    
               <v-row no-gutters>
                <v-btn @click="registrar(3)" class="ml-10 my-2" color="blue" dark outlined icon x-small></v-btn>
                <p class="mx-2 my-2">C. Control del cuerpo, saltar , correr y caminar.</p>
              </v-row> 
               <v-row no-gutters>
                <v-btn @click="registrar(4)" class="ml-10 my-2" color="blue" dark outlined icon x-small></v-btn>
                <p class="mx-2 my-2">D. Todas las anteriores.</p>
              </v-row>         
              </div>
            </div>

---------------------------------- PREGUNTA 8-----------------------------------
            <div v-show="view==7" class="my-5 mx-16 transition">
              <v-row no-gutters>
                <div class="title_h">
                  <h2>8 - El salto se produce por: </h2>
                </div>
              </v-row>
              <div class="parrafo_p">
              <v-row no-gutters>
                <v-btn @click="registrar(1)" class="ml-10 my-2" color="blue" dark outlined icon x-small></v-btn>
                <p class="mx-2 my-2">A. Correr o trotar.</p>
              </v-row>
              <v-row no-gutters>
                <v-btn @click="registrar(2)" class="ml-10 my-2" color="blue" dark outlined icon x-small></v-btn>
                <p class="mx-2 my-2">B. Impulso de los brazos.</p>
              </v-row> 
               <v-row no-gutters>
                <v-btn @click="registrar(3)" class="ml-10 my-2" color="blue" dark outlined icon x-small></v-btn>
                <p class="mx-2 my-2">C. Impulso de las piernas.</p>
              </v-row>   
               <v-row no-gutters>
                <v-btn @click="registrar(4)" class="ml-10 my-2" color="blue" dark outlined icon x-small></v-btn>
                <p class="mx-2 my-2">D. Impulso de los pies.</p>
              </v-row>            
              </div>
            </div>

----------------------------------- PREGUNTA 9-----------------------------------
            <div v-show="view==8" class="my-5 mx-16 transition">
              <v-row no-gutters>
                <div class="title_h">
                  <h2>9 - ¿Que hacen los giros?</h2>
                </div>
              </v-row>
              <div class="parrafo_p">
              <v-row no-gutters>
                <v-btn @click="registrar(1)" class="ml-10 my-2" color="blue" dark outlined icon x-small></v-btn>
                <p class="mx-2 my-2">A. Un movimiento en todo el cuerpo alrededor de sus tres ejes principales.</p>
              </v-row>
              <v-row no-gutters>
                <v-btn @click="registrar(2)" class="ml-10 my-2" color="blue" dark outlined icon x-small></v-btn>
                <p class="mx-2 my-2">B. Un movimiento.</p>
              </v-row>   
              <v-row no-gutters>
                <v-btn @click="registrar(3)" class="ml-10 my-2" color="blue" dark outlined icon x-small></v-btn>
                <p class="mx-2 my-2">C. Importante pulsación del cuerpo.</p>
              </v-row>            
              </div>
            </div>            

------------------------------------ PREGUNTA 10-----------------------------------
            <div v-show="view==9" class="my-5 mx-16 transition">
              <v-row no-gutters>
                <div class="title_h">
                  <h2>10 - Hay tres tipos de giros: ¿Cuales son?</h2>
                </div>
              </v-row>
              <div class="parrafo_p">
              <v-row no-gutters>
                <v-btn @click="registrar(1)" class="ml-10 my-2" color="blue" dark outlined icon x-small></v-btn>
                <p class="mx-2 my-2">A. Vertical, horizontal, transversal.</p>
              </v-row>
              <v-row no-gutters>
                <v-btn @click="registrar(2)" class="ml-10 my-2" color="blue" dark outlined icon x-small></v-btn>
                <p class="mx-2 my-2">B. Derecha, izquierda y abajo.</p>
              </v-row>     
              <v-row no-gutters>
                <v-btn @click="registrar(3)" class="ml-10 my-2" color="blue" dark outlined icon x-small></v-btn>
                <p class="mx-2 my-2">C. Horizontal, derecha y arriba.</p>
              </v-row>  
              <v-row no-gutters>
                <v-btn @click="registrar(4)" class="ml-10 my-2" color="blue" dark outlined icon x-small></v-btn>
                <p class="mx-2 my-2">D. Vertical, transversal y derecha.</p>
              </v-row>         
              </div>
            </div>
------------------------------------Fin----------------------------------->
            <div v-show="view==5" class="my-5 mx-16 transition ">
              <v-row class="div_puntaje">
                <v-col>
                <h1>PUNTAJE</h1>
                <div class="box_div">
                <p>{{puntaje+"/5"}}</p>
                </div>
                 <v-btn class="mt-2" @click="reset()" dark color="teal" rounded>
                  <v-icon>mdi-undo-variant</v-icon> 
                  <h3>Volver a intentar</h3> 
                </v-btn>
               
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
        <v-spacer></v-spacer>
        <v-col>
        <v-row class="div_background2 px-5"
          align="center"
          justify="center">
          <v-col
            class="text-center"
            cols="12"
            align="center"
          >
              <div class="card text-center">
                <img src="" class="card-img-top" alt="">
              <div class="card-header">
                <b><h2>¡INFORMACIÓN IMPORTANTE!</h2></b>
              </div>
              <div class="card-body">
                <h5 class="card-title">¿Cuál es la importancia de code.org?</h5>
                <div class="card mb-3" style="max-width: 100%;">
                  <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card">
              <img src="../assets/imagen/ss.png" class="card-img-top"  width="200px" height="200px">
              <div class="card-body">
                <h5 class="card-title">Programar</h5>
                <p class="card-text">Hacen que todos los estudiantes comprendan la importancia de programar.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="../assets/imagen/informatica.jpg" class="card-img-top" width="200px" height="200px">
              <div class="card-body">
                <h5 class="card-title">Informática</h5>
                <p class="card-text">Hacen que los estudiantes aprendan la informática a través del uso de bloques de código</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="../assets/imagen/estrategia.jpg" class="card-img-top" width="200px" height="200px">
              <div class="card-body">
                <h5 class="card-title">Estrategias</h5>
                <p class="card-text">Conocen la forma de pensar de los estudiantes y aplicar una estrategia.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="../assets/imagen/recurso.jpg" class="card-img-top" width="200px" height="200px" >
              <div class="card-body">
                <h5 class="card-title">Recursos</h5>
                <p class="card-text">Hacen que los estudiantes comprendan los recursos disponibles a su alrededor</p>
              </div>
            </div>
          </div>
          </div>
              </div>  
          </div>
          <div class="text-center">
            <v-btn
              rounded
              color="primary"
              dark
              href="https://studio.code.org/s/express-2021"
              target="_blank"
            >
            ¡Vamos a code.org! 
            </v-btn>
          </div>
          <div class="card-footer text-muted">
            ¡Buena suerte!
          </div>
        </div> 
        </v-col> 
        
    </v-row>
    </v-col>
      </v-col>

    </v-row>

<v-snackbar
      v-model="snackbar1"
      :timeout="timeout"
      rounded="pill"
      >
      <h2>
        <v-icon x-large color="#00BCD4">
         mdi-emoticon-outline
        </v-icon>
          ¡BIEN!
      </h2>
    </v-snackbar>


    <v-snackbar
      v-model="snackbar2"
      :timeout="timeout"
      rounded="pill"
      >
      <h2>
        <v-icon x-large color="#FF5722">
         mdi-emoticon-sad-outline
        </v-icon>
          ¡MAL!
      </h2>
    </v-snackbar>
    
  </v-container>
</template>

<style>
.div_background {
  width: 80%;
  border: 5px dashed rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  background-color: rgba(255, 0, 128, 0.1);
}
.div_background2 {
  width: 80%;
  border: 5px dashed rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  background-color: rgb(250, 250, 250);
}
.title_p{
  background-color: #880E4F;
}

.title_p h1{
  color: white;
  font-size: 40px;
}

.title_p p{
  color: rgba(0, 0, 0, 0.8);
  font-size: 20px;
  background-color: white;;
}

.title_h{
  background-color: rgba(0, 88, 88, 0.9);
  width: 100%;
  color: white;
  padding: 10px;
  padding-left: 20px;
  border-radius: 20px 20px 0px 0px;
}

.parrafo_p{
  background-color: rgba(255, 255, 255, 0.445);
  border: 3px dashed rgba(0, 88, 88, 0.5);
  border-top:0px;

}
.transition{
  transition: all 5s;
}

.div_puntaje h1{
  background-color: white;
  border-radius: 20px;
  width: 40%;
  border:1px solid #880E4F;
}

.div_puntaje p{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 100%;
  width: 110px;
  height: 110px;
  font-size: 30px;
}
.box_div{
  background-color: #880e4f77;
  border-radius: 0px 0px 60px 60px;
  padding-top:10px ;
  padding-bottom:1px ;
  width: 35%;
}

</style>

<script>
export default {
  data: () => ({
    contador:0,
    snackbar1: false,
    snackbar2: false,
    timeout: 1000,
    puntaje:0,
    view:0,
    correctas:[1,3,1,1,3]
    
  }),

  methods:{
    registrar(resp){
      if(this.correctas[this.contador]==resp){
        this.contador++;
        this.view++;
        this.snackbar1=true;
        this.puntaje++
      }else{
        this.snackbar2=true;
        this.contador++;
        this.view++;

      }
  },

  reset(){
    this.view=0;
    this.contador=0;
    this.puntaje=0;
  }

}





}

</script>
