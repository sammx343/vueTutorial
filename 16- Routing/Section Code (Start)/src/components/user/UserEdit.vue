<template>
  <div>
    <h3>Edit the User</h3>
    <p> Locale : {{ $route.query.locale }} </p>
    <p> Analitycs : {{ $route.query.q }} </p>
    <hr>
    <button class="btn btn-primary" @click="confirmed = true"> Confirm</button>
    <div style="height: 700px"></div>
    <div id="data"> Hola</div>
  </div>
</template>

<script type="text/javascript">
  export default{
    data(){
      return{
        confirmed: false
      }
    },
    beforeRouteLeave(to, from, next){
      if(this.confirmed){
        next();
      }else{
        if(confirm('Are you sure?')){
          next();
        }else{
          next(false);
        }
      }
    }
  }
</script>