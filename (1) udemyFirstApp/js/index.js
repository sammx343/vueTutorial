
new Vue({
  el: '#part1',
  data: {
    title: 'Hello World',
    link: 'http://google.com',
    finishedTitle: '<h1> This is a title man </h1>'
  },
  methods: {
    changeTitle : function(event){
      this.title = event.target.value;
    },

    sayHello : function(){
      return this.title
    },
    myWrite : function(event){
      this.title = event.target.value;
    }
  }
})


new Vue({
  el: '#part2',

  data:{
    counter: 0,
    x: 0,
    y: 0,
    sourceText: 'Holi'
  },
  methods: {
    increase: function(number, event){
      this.counter += number;
      console.log(event);
    },

    updateCoordinate: function(event){
      this.x = event.clientX;
      this.y = event.clientY;
    },

    alertMe: function(){
      alert("we");
    }
  }
})

new Vue({
  el: '#part3',

  data:{
    counter: 4,
    secondCounter: 1
  },
  computed: {
    output : function(){
      console.log('computed');
      return this.counter > 5? 'Greater than 5' : 'Smaller than 5';
    }
  },
  watch: {
    counter: function(value){
      var vm = this;
      setTimeout(function(){
        vm.counter = 0;
      }, 2000);
    }
  },
  methods : {
    result : function(){
      console.log('method');
      return this.counter > 5? 'Greater than 5' : 'Smaller than 5';
    },
    resul2t : function(){
      console.log('method2');
      //return this.counter > 5? 'Greater than 5' : 'Smaller than 5';
      return 'wefw'
    },
    resul3t : function(){
      console.log('method3');
      //return this.counter > 5? 'Greater than 5' : 'Smaller than 5';
      return 'wefwe'
    }
  }
})

new Vue({
  el: '#part4',
  data: {
    attachRed: false,
    color: 'green',
    width: 100
  },
  computed: {
    divClasses: function(){
      return {
        red: this.attachRed,
        green: !this.attachRed
      }
    },
    myStyle: function(){
      return {
        backgroundColor: this.color,
        width: this.width + 'px'
      }
    }
  }
})