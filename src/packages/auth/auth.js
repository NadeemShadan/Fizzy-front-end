export default function(Vue){
    Vue.auth={
        setToken (token,expiresIn){
            localStorage.setItem('token',token);
            localStorage.setItem('expiresIn',expiresIn);
        },
        getToken(){
            let token=localStorage.getItem('token');
            let expiresIn=localStorage.getItem('expiresIn');
            if (!token || !expiresIn)
                return null;
            if(Date.now()>parseInt(expiresIn)){
                this.destroyToken()
                return null;
            }
            else{
                return token;
            }
        },

        destroyToken () {
            localStorage.removeItem('token');
            localStorage.removeItem('expiresIn');
        },

        isAuthenticated (){
            if(this.getToken())
                return true;
            else
                return false;
        }
    }
    Object.defineProperties(Vue.prototype,{
        $auth : {
            get : ()=>{
                return Vue.auth;

            }
        }
    })
}