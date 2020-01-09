<template id="post-list">
    <div class="container mt-2">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card shadow-lg">
                    <div class="card-header">
                        <h4>Lista de Posts</h4>
                        <router-link class="btn btn-xs btn-success" v-bind:to="{path: '/add-post'}"> 
                            + Nuevo Post
                        </router-link>
                  
                    </div>

                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Post Title</th>
                                        <th>Post Body</th>
                                        <th class="col-md-2">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr v-for='post in posts'>
                                        <td>{{ post.id }}</td>
                                        <td>{{ post.title}}</td>
                                        <td>{{ post.body}}</td>
                                        <td>
                                            <router-link class="btn btn-info btn-xs" v-bind:to="{name : 'ViewPost', params: {id: post.id}}">Show</router-link>
                                            <router-link class="btn btn-warning btn-xs" v-bind:to="{name : 'EditPost', params: {id: post.id}}">Edit</router-link>
                                            <router-link class="btn btn-danger btn-xs" v-bind:to="{name : 'DeletePost', params: {id: post.id}}">Delete</router-link>
                                        </td>
                                    </tr>
                                    </tbody>
                            </table>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
    export default {
        data: function(){
            return {posts: []};

        },
        created: function(){
            let uri = 'http://127.0.0.1:8000/posts/'
            Axios.get(uri).then((response)=> {
                this.posts = response.data;
            });
        },
        computed: {
            filteredPosts: function(){
                if(this.posts.length){
                    return this.posts;
                }
            }
        }   
    }
</script>
