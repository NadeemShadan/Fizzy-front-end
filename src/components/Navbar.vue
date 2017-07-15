<template>
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <a class="navbar-brand" href="#"><i class="glyphicon glyphicon-book"></i></a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#/">Home</a></li>
        <li>
        <router-link to="/bios">
        View bios
        </router-link>
        </li>
        <li><a href="#/addMoto">Add Bike</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#/register"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
        <li><a href="#/login"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    name:'navabar'
}

</script>

<style >

</style>
