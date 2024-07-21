<template>
        <div class="container">
            
        <sidebarCp/>

        <chatBoxCp/>
    </div>
    
</template>

<script>
import sidebarCp from './sidebar-cp.vue';
import chatBoxCp from './chatBox-cp.vue';
    export default {
        name:'chatContainer-cp',

        components:{
            chatBoxCp,
            sidebarCp
        }
    }
</script>

<style scoped>
.container {
    display: flex;
    width: 100%;
    height: 100%;
}
</style>