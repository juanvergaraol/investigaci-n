<template>
  <v-container fluid class="fondo">
        <v-row align="center">
                <v-card
              class="mx-auto"
              max-width="344"
              cols="3"
            >
           <div class="col">
            <v-img
              src="../assets/profile/J.V.jpeg"
              height="250px"
              width="300px"
            ></v-img>

            <v-card-title>
              Juan José Vergara Olivero
            </v-card-title>

            <v-card-subtitle>
              Estudiante
            </v-card-subtitle>

            <v-card-actions>
              <v-btn
                color="orange lighten-2"
                text
              >
                Datos
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn
                icon
                @click="show = !show"
              >
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                  <p><b>Correo</b></p>
                  <p>jvergaraolivero47@Correo.unicordoba.edu.co</p>
                </v-card-text>
              </div>
            </v-expand-transition>
          </div>
          </v-card>

          <v-col align-self="start" class="pa-10"  cols="4">
            <v-card
            class="mx-auto"
            max-width="344"
          >
          <div class="col-md">
            <v-img
              src="../assets/profile/E.R.jpg"
              display="block" 
              width="100%" 
              max-height="250" 
              ></v-img>

            <v-card-title>
              Eduardo José Robles Carmona
            </v-card-title>

            <v-card-subtitle>
              Estudiante
            </v-card-subtitle>

            <v-card-actions>
              <v-btn
                color="orange lighten-2"
                text
              >
                Datos
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn
                icon
                @click="show = !show"
              >
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                  <p><b>Correo</b></p>
                  <p>eroblescarmona@correo.unicordoba.edu.co</p>
                </v-card-text>
              </div>
            </v-expand-transition>
          </div>
          </v-card>
        </v-col>
    </v-row>
      <v-row justify="center">
          <v-card
        class="mx-auto"
        max-width="344"
        cols="4"
      >
      <div class="col-md">
        <v-img
          src="../assets/profile/aly.jpg"
          display="block" 
          max-width="100%" 
          height="auto" 
        ></v-img>

        <v-card-title>
          Aly Benhur Culchac Le la Vega
        </v-card-title>

        <v-card-subtitle>
          Docente
        </v-card-subtitle>

        <v-card-actions>
          <v-btn
            color="orange lighten-2"
            text
          >
            Datos
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn
            icon
            @click="show = !show"
          >
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>
              <p><b>Correo</b></p>
              <p>confidencial</p>
            </v-card-text>
          </div>
        </v-expand-transition>
      </div>
      </v-card>
      <v-card
        class="mx-auto"
        max-width="344"
        cols="4"
      >
      <div class="col-md">
        <v-img
          src="../assets/profile/dalia.jpeg"
          display="block" 
          width="auto" 
          max-height="350px" 
        ></v-img>

        <v-card-title>
        Dalia Patricia Madera Doval
        </v-card-title>

        <v-card-subtitle>
          Docente
        </v-card-subtitle>

        <v-card-actions>
          <v-btn
            color="orange lighten-2"
            text
          >
            Datos
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn
            icon
            @click="show = !show"
          >
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>
              <p><b>Correo</b></p>
              <p>confidencial</p>
            </v-card-text>
          </div>
        </v-expand-transition>
        </div>
      </v-card>
      <v-card
        class="mx-auto"
        max-width="344"
        cols="4"
      >
      <div class="col">
        <v-img
          src="../assets/profile/J.G.jpg"
          display="block" 
          max-width="100%" 
          height="auto" 
        ></v-img>

        <v-card-title>
          Juan Carlos Giraldo
        </v-card-title>

        <v-card-subtitle>
          Docente
        </v-card-subtitle>

        <v-card-actions>
          <v-btn
            color="orange lighten-2"
            text
          >
            Datos
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn
            icon
            @click="show = !show"
          >
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>
              <p><b>Correo</b></p>
              <p>confidencial</p>
            </v-card-text>
          </div>
        </v-expand-transition>
        </div>
      </v-card>
      </v-row>

  </v-container>
</template>

<script>
  export default {
    data: () => ({
      show: false,
    }),
  }
</script>
<style scoped>
</style>