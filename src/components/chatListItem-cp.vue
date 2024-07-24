<template>
  <!-- <template v-for="(item,index) in  myMessages" :key="item.origin">
    <div class="chat-item" @click="item.origin == origin ? destination = item.destination : destination = item.origin">
      <div class="chat-avatar"></div>
      <div class="chat-info">
        <div class="chat-name">{{ item.origin == origin ? item.destination : item.origin }}</div>
        <div class="chat-last-message">{{index}} , {{ item.text }}</div>
      </div>
      <div class="chat-details">
        <div class="chat-date">{{ item.timestamp }}</div>
        <div class="unread-count">3</div>
      </div>
    </div>
  </template> -->

  <template v-for="(item) in  filteredMessages" :key="item.timestamp">
    <div class="chat-item" @click="destination = item.contact">
      <div class="chat-avatar"></div>
      <div class="chat-info">
        <div class="chat-name">{{ item.contact }}</div>
        <div class="chat-last-message">{{item.msg}}</div>
      </div>
      <div class="chat-details">
        <div class="chat-date">{{ item.timestamp }}</div>
        <div class="unread-count">3</div>
      </div>
    </div>
  </template>
</template>

<script>
import { useMessageStore } from '../stores/store';
import { storeToRefs } from 'pinia';
import { ref } from 'vue'
    export default {
        name:'chatlistitem-cp',


        setup(){
    const messageStore  = useMessageStore()

    const {Messages , message , origin , destination , timestamp , myMessages,filteredMessages} = storeToRefs(messageStore)
messageStore.setSession()


const filter = ref('all')



    return{Messages , message , origin , destination , timestamp,  myMessages , filter,filteredMessages}
  },
    }
</script>

<style scoped>
.chat-item {
    display: flex;
    padding: 10px;
    border-bottom: 1px solid #ddd;
    cursor: pointer;
    align-items: center;
    justify-content: space-between;
  }
  
  .chat-item:hover {
    background-color: #eaeaea;
  }
  
  .chat-avatar {
    width: 40px;
    height: 40px;
    background-color: #bbb;
    border-radius: 10px;
    margin-right: 10px;
  }
  
  .chat-info {
    flex: 1;
  }
  
  .chat-name {
    font-weight: bold;
  }
  
  .chat-last-message {
    color: #666;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 150px;
  }
  
  .chat-details {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  
  .chat-date {
    font-size: 0.9em;
    color: #888;
  }
  
  .unread-count {
    background-color: #007bff;
    color: white;
    font-size: 0.8em;
    padding: 2px 6px;
    border-radius: 12px;
    margin-top: 5px;
  }
</style>