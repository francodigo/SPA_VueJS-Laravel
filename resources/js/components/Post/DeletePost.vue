<template id="delete-post">
    <div class="container mt-2">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card shadow-lg">
                    <div class="card-header">
                        <h4 class="text-center">Eliminar post Nro: {{post.id}} </h4>
                    </div>
                    <div class="card-body">
                        <p> Titulo: {{post.title}} </p>

                        <form v-on:submit.prevent = "deletePost">
                            <p class="alert alert-danger" role="alert"> ¡Atención! El post se eliminará para siempre</p>
                            <button type="submit" class="btn btn-danger" name="button">
                                Confirmar Eliminación
                            </button>
                            <router-link v-bind:to="'/'" class="btn btn-primary"> Volver </router-link>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>


<script>
export default {
    data: function(){
        return {
            post: {
                title: '',
                body: ''
            }
        }
    },
    created: function(){
        
        let uri  = 'http://127.0.0.1:8000/posts/'+ this.$route.params.id +'/edit';
        //Petición get vía axios promise asyncronous
        Axios.get(uri).then(
            (response) => {
                this.post = response.data;
            }
        );
    },
    methods: {
        deletePost : function() {
            let uri  = 'http://127.0.0.1:8000/posts/'+ this.$route.params.id;

            Axios.delete(uri, this.post).then(
                (response) => {
                    this.$router.push({name:'ListPosts'})
                }
            );

    }
    }
}
</script>