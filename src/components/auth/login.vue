<template>
<div class="container">
        <div class="col-md-4 col-md-offset-4">
            <div class="panel panel-default">
                <div class="panel-heading text-center">Login to Fizzy Blog</strong></div>
                <div class="panel-body">
                       <form>
                            <div class="form-group">
                                <input type="text" class="form-control" v-model="email" placeholder="User Name"/><br/>
                                <input type="password" placeholder="password" v-model="password" class="form-control" /><br/>
                                <button @click="login" class="btn btn-success">Sign in</button>
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
    email:'',
    password:''

        }
    },
    methods: {
        login (){
            let auth={
                client_id:2,
                client_secret:'lvcjbjyeZBXlTteSo5KINmlNmu7m9bJVEaYAHCuG',
                grant_type:'password',
                username:this.email,
                password:this.password
            }
            console.log(auth);
            this.$http.post("oauth/token",auth).then(response=>{
                console.log(auth.username);
                this.$auth.setToken(response.body.access_token,response.body.expires_in+Date.now());
            })
        }
    }
}

</script>

<style>

</style>