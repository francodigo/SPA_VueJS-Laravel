<template id="post">
    <div class="container mt-2">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card shadow-lg">
                    <div class="card-header">
                        <h4>{{post.title}}</h4>
                    </div>

                    
                    <div class="card-body">
                        <strong>Body: </strong>
                        <div>
                            {{post.body}}
                        </div>
                        <router-link v-bind:to="'/'" class="btn btn-danger mt-2">Volver</router-link>
                    </div>
                
                
                </div>
            </div>
        </div>

    </div>
    
</template>

<script>
export default {
        data: function(){
            return {post: {title: '' , body: ''}};

        },
        created: function(){
            let uri = 'http://127.0.0.1:8000/posts/'+this.$route.params.id;
            Axios.get(uri).then((response)=> {
                this.post = response.data;
            });
        }

}
</script>