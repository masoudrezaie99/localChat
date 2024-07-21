<template>
    <div class="sidebar">
      <div class="sidebar-header">
        <h2>Local Chat</h2>
        <input type="text" placeholder="Search" />
      </div>
      <div class="chat-list">
        <chatListItem/>
      </div>
    </div>
  </template>

<script>
import chatListItem from './chatListItem-cp.vue';
    export default {
        name:'sidebar-cp',

        components:{
            chatListItem
}
    }

    
</script>

<style scoped>
  .sidebar {
    width: 30%;
    background-color: #f5f5f5;
    border-right: 1px solid #ddd;
    display: flex;
    flex-direction: column;
  }
  
  .sidebar-header {
    padding: 20px;
    border-bottom: 1px solid #ddd;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .sidebar-header h2 {
    margin: 0;
    margin-bottom: 10px;
  }
  
  .sidebar-header input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  .chat-list {
    flex: 1;
    overflow-y: auto;
  }
</style>