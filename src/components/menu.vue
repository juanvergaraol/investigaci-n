<template>
  <v-app>
    <v-app-bar 
      absolute
      app
      dark
      color="#fcb69f"
      src="../assets/imagen/estudiantes.jpg"
      height="100px"
    > 
  <router-link :to="{name:'inicio'}" class="noneline ">
   <v-app-bar-nav-icon><v-icon class="mr-3" x-large left>mdi-home</v-icon>
    </v-app-bar-nav-icon>
  </router-link>
  
  <v-toolbar-title class="title_nav">
   Aprende a programar con Code.org
  </v-toolbar-title>
 
  <v-spacer></v-spacer>

    <router-link :to="{name:'contenido'}" class="noneline">
      <v-btn class="mx-3" color="#0D1A4F" depressed x-large rounded >
        <v-icon class="mr-3" x-large left>mdi-motion-play-outline</v-icon>
        Contenido
      </v-btn>
    </router-link>

    <router-link :to="{name:'act1'}" class="noneline">
       <v-btn class="mx-3" color="#126346" depressed x-large rounded>
         <v-icon class="mr-3" x-large left>mdi-head-flash-outline</v-icon>
        Actividades
      </v-btn>
      </router-link>

      <router-link :to="{name:'evaluacion'}" class="noneline">
          <v-btn class="mx-3" color="#136A6A" depressed x-large rounded>
         <v-icon class="mr-3" x-large left>mdi-account-group-outline</v-icon>
        Evaluación
      </v-btn>
      </router-link>

      <router-link :to="{name:'creditos'}" class="noneline">
          <v-btn elevation="5" depressed large  fab dark>
         <v-icon x-large>mdi-account-group</v-icon>
      </v-btn>
      </router-link>

    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>
