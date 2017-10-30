new Vue({
  el: '#exercise',
  data: {
    name: 'Sebastian Mayor',
    age: '21'
  },
  methods: {
    random: function() {
      return Math.random(1);
    },

    image: function(){
      var link = "https://www.w3schools.com/css/trolltunga.jpg"
      return link
    }
  }
})