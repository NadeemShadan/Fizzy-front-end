<template>
   <div class="test"> <h1>{{title}} {{bikeBrand}}</h1>
     <form>
      <input type="text" v-model="bikeBrand" placeholder="Manufactured By">
     <input v-if="bikeBrand!=''" type="text" v-model="bikeName" placeholder="Enter Bike Name"><br /><br>
     <input v-if="bikeName!=''" type="text" v-model="bikeCategory" placeholder="Enter Bike category" ><br><br>
     <button class="btn btn-primary" v-on:click="addNew">Add {{bikeName}}</button>
   </form>
</div>
</template>

<script>
  export default {
    name: 'addBike',
    data() {
      return {
        title: 'Register a new bike for ',
        bikeName: '',
        bikeCategory: '',
        bikeBrand:'',
        showContent: true
      }
    },
    methods: {
      addNew: function(event){
        let a=confirm("is it okey to add "+this.bikeName+" under "+this.bikeCategory);
        if (a==true) {
          console.log("U take care we'll ");
        }
      }
    }
  }
</script>

<style scoped>

</style>
