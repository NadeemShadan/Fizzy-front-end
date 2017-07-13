
<template>
     <div class="test"> <h1>{{title}}</h1>
<ul v-if="showContent">
  <li v-for="bike in bikes">{{bike.name}} <small>{{bike.category}}</small></li>
</ul>
<h4 v-else>You look lost, you should probably head home</h4>

<a href="#/addMoto">Release a New Bike Instead</a>
</div>
</template>

<script>
  export default {
    name: 'test',
    data() {
      return {
        title: 'Welcome To DSK',
        bikes: [{
          name: 'TNT 25',
          category: 'naked'
        }, {
          name: 'TNT 300',
          category: 'naked'
        }, {
          name: 'TNT 600i',
          category: 'Super naked'
        }],
        showContent:false
      }
    }
  }
</script>

<style scoped>

</style>
