 
 <template>
 <div>
     <single-bio v-for="bio in bios" :bio='bio'></single-bio>
 </div> 
</template>        

<script>
import bio from './singleBio'

export default {
    components :{
    'single-bio':bio
},
 data (){
        return {
         bios:[]
        }
    },
    created (){
        this.$http.get('api/bios').then(response=>{
               this.bios=response.body.data;
    });
},

}
</script>

<style>

</style>