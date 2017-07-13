<template>
<div class="container">
        <div class="col-md-4 col-md-offset-4">
            <div class="panel panel-default">
                <div class="panel-heading text-center">Login to {{text}}</strong></div>
                <div class="panel-body">
                       <form>
                            <div class="form-group">
                                <input type="text" class="form-control" v-model="email" placeholder="User Name"/><br/>
                                <input type="password" placeholder="password" v-model="password" class="form-control" /><br/>
                                <button @click="test" class="btn btn-success">Sign in</button>
                            </div>
                       </form>
                </div>
            </div>
        </div>
</div>
</template>

<script>
export default {
    name:'login',
    data(){
        return{
    text:'Login to Fizzy Blog',
    email:'',
    password:''

        }
    },
    methods: {
        test (){
            this.$http.get("http://localhost:8000/api/test").then(function(response){
                console.log(response)
            })
        }
    }
}

</script>

<style>

</style>