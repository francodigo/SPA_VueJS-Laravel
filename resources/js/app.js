require('./bootstrap');


window.Vue = require('vue');

window.VueRouter=require('vue-router').default;

window.VueAxios=require('vue-axios').default;

window.Axios=require('axios').default;

let AppLayout= require('./components/App.vue').default;

// show the list post template
const ListPosts=Vue.component('ListPosts', require('./components/Post/ListPosts.vue').default);

// add post template
const AddPost =Vue.component('AddPost', require('./components/Post/AddPost.vue').default);

// edite post template
const EditPost =Vue.component('EditPost', require('./components/Post/EditPost.vue').default);

// delete post template
const DeletePost =Vue.component('DeletePost', require('./components/Post/DeletePost.vue').default);

// view single post template
const ViewPost =Vue.component('ViewPost', require('./components/Post/ViewPost.vue').default);

// registering Modules
Vue.use(VueRouter,VueAxios, Axios);

const routes = [
  {
    name: 'ListPosts',
    path: '/',
    component: ListPosts
  },
  {
    name: 'AddPost',
    path: '/add-post',
    component: AddPost
  },
  {
    name: 'EditPost',
    path: '/edit/:id',
    component: EditPost
  },
  {
    name: 'DeletePost',
    path: '/post-delete',
    component: DeletePost
  },
  {
    name: 'ViewPost',
    path: '/view/:id',
    component: ViewPost
  }
];

const router = new VueRouter({ mode: 'history', routes: routes});

new Vue(
 Vue.util.extend(
 { router },
 AppLayout
 )
).$mount('#app');