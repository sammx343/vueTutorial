new Vue({
  el: '#exercise',
  data: {
    changeEffect : true,
    myClass : '',
    width : 0
  },
  computed: {
    divClass : function(){
      return { 
        highlight: this.changeEffect,
        shrink: !this.changeEffect
      }
    },

    giveClass : function(){
      return {
        suize: true,
        tui: true
      }
    },

    progressBar: function(){
      return {width: this.width+'px'}
    }
  },
  methods: {
    startEffect: function() {
      this.changeEffect = !this.changeEffect;
    },
    startProgress: function(){
      var vm = this;
      setInterval(function(){ 
        vm.width++;
        console.log(vm.width);
      }, 1000);
    }
  }
});
