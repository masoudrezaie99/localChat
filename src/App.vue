<template>
  <chatContainer/>
</template>

<script>
import { useMessageStore } from './stores/store';
import { storeToRefs } from 'pinia';
import chatContainer from './components/chatContainer-cp.vue';
import { ref } from 'vue'

export default {
  name: 'App',
  
  setup(){
    const messageStore  = useMessageStore()

    const {Messages , message , origin , destination , timestamp} = storeToRefs(messageStore)
messageStore.setSession()


const filter = ref('all')



    return{Messages , message , origin , destination , timestamp,filter}
  },


  components:{
    chatContainer,
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  display: flex;
  height: 100vh;
}

#app {
  width: 100%;
}
</style>
