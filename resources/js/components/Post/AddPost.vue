<template id="add-post">
    <div class="container mt-2">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card shadow-lg">
                    <div class="card-header">
                        <h4>Agregar nuevo post</h4>
                    </div>

                    <div class="card-body">

                        <form v-on:submit.prevent = "createPost">
                            <div class="form-group">
                                <label for="add-title">Title</label>
                                <input type="text" v-model="post.title" class="form-control" id="add-title" required >
                                <p class="help-block">
                                    Help text here
                                </p>
                            </div>
                            <div class="form-group">
                                <label for="add-body">Body</label>
                                <textarea class="form-control" rows="10"  v-model="post.body"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary"> Agregar</button>
                            <router-link class="btn btn-danger" v-bind:to="'/'">Cancelar</router-link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>    

    export default  {
        data: function(){
                return {post: {title: '', body: ''}}
            },
    methods:{
        createPost: function(){
            let uri = 'http://127.0.0.1:8000/posts/';
            Axios.post(uri, this.post ).then( 
                (response) => 
                {
                this.$router.push( { name:'ListPosts' } )
                }
            );

        }
    }
    
}

</script>

