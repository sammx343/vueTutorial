new Vue({
  el: '#exercise',
  data: {
    on: true,
    thing: [2,4],
    array: ['Max', 'Anna', 'Chris', 'Manu'],
    myObject: {
      title: 'Lord of the Rings',
      author: 'J.R.R. Tolkiens',
      books: '3'
    },
    testData: {
      name: 'TESTOBJECT', 
      id: 10,
      data: [1.67, 1.33, 0.98, 2.21]
    },
    object: {title: 'Lord of the Rings', author: 'J.R.R. Tolkiens', books: '3'}
  },
  methods: {
    change: function(){
      this.on = !this.on;
    },
    add: function(){
      console.log(this.thing);
      console.log("message");
      this.thing.push(Math.floor((Math.random() * 10) + 1));
    }
  }
});
