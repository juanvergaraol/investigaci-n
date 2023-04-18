<template>
<v-container fluid class="conte">
  <v-row  justify="center" no-gutters >
    
    <router-link :to="{name:'act1'}" class="noneline">
      <v-btn class="mx-3" color="#889CED" depressed x-large rounded >
        <v-icon class="mr-3" x-large left>mdi-check-circle-outline</v-icon>
        Actividad #1
      </v-btn>
    </router-link>

    <router-link :to="{name:'act2'}" class="noneline">
       <v-btn class="mx-3" color="#8FEAF3" depressed x-large rounded>
         <v-icon class="mr-3" x-large left>mdi-check-circle-outline</v-icon>
        Actividad #2
      </v-btn>
      </router-link>

      <router-link :to="{name:'act3'}" class="noneline">
          <v-btn class="mx-3" color="#88F0DD" depressed x-large rounded>
         <v-icon class="mr-3" x-large left>mdi-check-circle-outline</v-icon>
        Actividad #3
      </v-btn>
      </router-link>
    </v-row>

<v-main style="padding: 0px 0px 0px">
<router-view>

</router-view>
</v-main>
</v-container>

</template>

<style>

.fond_row{
  border-radius: 2px;
  transition: all 0.2s;
  background-color: teal;
}

.fond_row:hover{
  background: rgb(0, 119, 119);
}

.titles h2{
  color: rgba(255, 255, 255);
  font-size:40px;
  border-radius: 20px;
}
</style>


<script>
export default {

  data: () => ({
    title:["ACTIVIDAD 1: SELECCIÓN MULTIPLE", "ACTIVIDAD 2: RELACIONA", "ACTIVIDAD 3: Sopa de letras"],
    index:0,
  }),

  methods:{
    next(){
        this.index=1;
        },

    back(){
      this.index=0;
      }

    },

   

};
</script>
