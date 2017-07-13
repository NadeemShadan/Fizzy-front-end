<template>
<div class="container">
        <div class="col-md-4 col-md-offset-4">
            <div id="register" class="panel panel-default">
                <div class="panel-heading text-center">{{text}} <span class="pull-right"><i class="glyphicon glyphicon-pushpin"></i> </span> </div>
                <div class="panel-body">
                       <form>
                            <div class="form-group">
                                <input type="text" v-model="name" class="form-control" value="" placeholder="FullName"/><br/>
                                <input type="email" v-model="email" class="form-control" value="" placeholder="email"/><br/>
                                <input type="password" v-model="password" placeholder="password" class="form-control" /><br/>
                                <input type="password" v-model="confirm" placeholder="confirm password" class="form-control" /><br/>
                                <button :disabled="isDisabled" v-on:click="validate" class="btn btn-success">Sign in</button>
                            </div>
                       </form>
                </div>
            </div>
        </div>
</div>
</template>

<script>
export default {
    name:'register',
    data(){
        return{
            isDisabled:false,
            text: 'Sign up for fizzy blog',
            name:'',
            email:'',
            password:'',
            confirm:''

        }
        },
    methods: {
        validate: function(event){
            if(this.password!=this.confirm){
               this.isDisabled=true;
            alert("Passwords does not match");
            this.password="";
            this.confirm="";
            }
        }
    }
    }

</script>

<style>

</style>