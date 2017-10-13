
var change = false;
new Vue({
        el: '#exercise',
        data: {
            value: 0
        },
        computed: {
          result : function(){
            return this.value < 37? 'not there yet' : 'done';
          }
        },

        watch: {
          value: function(){
            var vm = this;
            if( change == false ){
              setTimeout(function(){
                vm.value = 0;
                change = false;
              }, 5000);
            }
            change = true;
          }
        }
    });