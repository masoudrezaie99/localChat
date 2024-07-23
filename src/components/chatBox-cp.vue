<template>
    <div class="main-chat">
      <div class="chat-header">
        <div class="chat-header-info">
          <div class="chat-avatar-large"></div>
          <div class="chat-header-details">
            <div class="chat-header-name"> {{ destination }} </div>
            <div class="chat-last-seen">Last seen 10 minutes ago</div>
          </div>
        </div>
      </div>
      <div class="chat-messages">
        <template 
        v-for="item in myMessages" :key="item.origin">
          <div v-if="destination ==item.origin || destination==item.destination"
            
            
            :class="[
              item.origin === origin ? 'message-sent' : 'message-received',
              'message',
            ]"
          >
            <div class="message-content">
              <div class="message-header">{{ item.origin }}</div>
              {{ item.text }}
              <div class="message-time">{{ item.timestamp }}</div>
            </div>
          </div>
        </template>
      </div>
      <div class="chat-input">
        <button class="attach-button">📎</button>
        <input
          type="text"
          placeholder="Write a message and press Enter"
          v-model="message"
          @keyup.enter="sendMessage()"
          
        />
        <input
          type="text"
          placeholder="contact number"
          v-model="destination"
        />
        <button class="voice-button">🎤</button>
      </div>
    </div>
  </template>

<script>
import { useMessageStore } from '../stores/store';
import { storeToRefs } from 'pinia';
import { ref } from 'vue'

    export default {
        name:'chatBox-cp',


        setup(){
    const messageStore  = useMessageStore()

    let {Messages , message , origin , destination , timestamp , myMessages} = storeToRefs(messageStore)

    const filter = ref('all')

messageStore.setSession()


const sendMessage = ()=>{
  messageStore.sendMessage()
}



window.addEventListener("storage", (event) => {
        if (event.key === "chatMessages") {
          messageStore.updateMessage()
        }
        
      });

  



    return{Messages , message , origin , destination , timestamp,sendMessage,filter , myMessages}
  },
    }
</script>

<style scoped>
.main-chat {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  
  .chat-header {
    padding: 20px;
    border-bottom: 1px solid #ddd;
    display: flex;
    align-items: center;
  }
  
  .chat-header-info {
    display: flex;
    align-items: center;
  }
  
  .chat-avatar-large {
    width: 50px;
    height: 50px;
    background-color: #bbb;
    border-radius: 10px;
    margin-right: 10px;
  }
  
  .chat-header-details {
    display: flex;
    flex-direction: column;
  }
  
  .chat-header-name {
    font-weight: bold;
    font-size: 18px;
  }
  
  .chat-last-seen {
    font-size: 0.9em;
    color: #888;
  }
  
  .chat-messages {
    flex: 1;
    padding: 20px;
    overflow-y: auto;
    background-color: #fff;
  }
  
  .message {
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    max-width: 60%;
    word-wrap: break-word;
  }
  
  .message-sent .message-content {
    background-color: #b7daff;
    padding: 10px;
    border-radius: 10px;
    align-self: flex-end;
    color: black;
  }
  
  .message-received .message-content {
    background-color: #e9ecef;
    padding: 10px;
    border-radius: 10px;
    align-self: flex-start;
  }
  
  .message-header {
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .message-time {
    font-size: 0.8em;
    color: #888;
    margin-top: 5px;
    align-self: flex-end;
  }
  
  .chat-input {
    display: flex;
    padding: 10px;
    border-top: 1px solid #ddd;
    align-items: center;
  }
  
  .chat-input input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin: 0 10px;
  }
  
  .attach-button,
  .voice-button {
    padding: 10px;
    border: none;
    background-color: #f5f5f5;
    color: black;
    border-radius: 10px;
    cursor: pointer;
    font-size: 16px;
  }
  
  .attach-button:hover,
  .voice-button:hover {
    background-color: #eaeaea;
  }
</style>


<!-- item.destination===origin || item.origin===origin -->