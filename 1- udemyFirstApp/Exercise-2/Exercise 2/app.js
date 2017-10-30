
new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
          myAlert: function () {
            alert("hi");
          },

          writeDown: function(event){
            this.value = event.target.value;
          }
        }
    });