<template>
<div class="container">
    <list-bios></list-bios>
</div>
</template>

<script>
import listBios from './bios/listBios'

export default {
    name: 'bios',
    components :{
        'list-bios': listBios
    }
   
}

</script>

<style>

</style>