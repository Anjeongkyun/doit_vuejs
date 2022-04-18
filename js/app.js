var localCmp = {
  template: '<div>this is a local cmp </div>'
}

Vue.component('my-global-component', {
  template: '<div>this is a global cmp </div>'
})

var app = new Vue({
  el: '#app',
  data: {
    message : 'This is a paraent component'
  },
  components:{
    'my-local-component' : localCmp
  }
})
