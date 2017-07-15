<template>
   <div class="panel text-center">
                <h3><a href="#">{{bio.title}}</a></h3>
                <span class="label label-info">{{bio.created_at}}</span>
        </div>

 </template>
 
 <script>
 export default {
     props:['bio']
 
 }
 </script>
 
 <style>
   
 </style>
 