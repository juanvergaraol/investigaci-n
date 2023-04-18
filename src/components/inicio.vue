<template>
    <v-container fluid class="inicio">
      <v-row align="center" class="my-5">
        <v-col align="center" class="my-5">
          <div>
            <v-img
              width="250px"
              height="250px"
              class="mt-15"
              src="../assets/play-button.svg">
              </v-img>
            <router-link :to="{name:'contenido'}" class="noneline">
            <v-btn class="my-5" width="250px" dark x-large rounded>INICIAR</v-btn>
            </router-link>
            <h1 class="h1">Code.org</h1>
          </div>
        </v-col>
      </v-row>
    </v-container>

</template>

<script>
export default {
  data: () => ({
    //
  }),
};
</script>
<style ang="ccs" src="../css/estilo.css" ></style>

