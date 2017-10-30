<template>
    <div class="col-xs-12 col-sm-6">
        <p> Server Id: {{ server.id }} </p>
        <p> Server Status: {{ server.status }} </p>
        <hr>
        <button @click="resetStatus"> Change Status to: Normal</button>
    </div>
</template>

<script>
  import {eventBus} from '../../main';
  export default{
    data: function(){
      return {
        server : {}
      }
    },
    methods:{
      resetStatus(){
        this.server.status = 'Normal';
      }
    },
    created(){
      eventBus.$on('serverInformation', (server) => {
        this.server = server;
      });
    }
  }
</script>

<style>

</style>
