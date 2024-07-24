import { defineStore } from 'pinia';


export const useMessageStore = defineStore('messagestore',{
    state : ()=>({
        localStorageData : localStorage.getItem("chatMessages"),
        Messages:[],
        message:'',
        origin:'',
        destination:'',
        timestamp: new Date().toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          }),

    }),


    getters:{
        myMessages(){
            return this.Messages.filter((message)=> message.origin==this.origin || message.destination == this.origin)
        },

        




        messageList(){
            let msgList = []
            for (let i = 0; i < this.myMessages.length; i++){
                if(this.myMessages[i].origin == this.origin){msgList.push({'contact':this.myMessages[i].destination,'msg':this.myMessages[i].text,'timestamp':this.myMessages[i].timestamp})}
                else if(this.myMessages[i].destination == this.origin){msgList.push({'contact':this.myMessages[i].origin,'msg':this.myMessages[i].text,'timestamp':this.myMessages[i].timestamp})}
            }
            return msgList
        },


        filteredMessages() {
            return Object.values(this.messageList.reduceRight((acc, message) => {
                if (!acc[message.contact]) {
                    acc[message.contact] = message;
                }
                return acc;
            }, {}));
        }

    },


    actions:{
        setSession(){
            if (!sessionStorage.origin)
            sessionStorage.setItem("origin", Math.floor(Math.random() * 1000 + 1));
          this.origin = sessionStorage.origin;
          if (localStorage.chatMessages)
              this.Messages = JSON.parse(localStorage.chatMessages);
        },





        sendMessage(){
            const newMessage = {
                text:this.message,
                timestamp:this.timestamp,
                origin:this.origin,
                destination:this.destination,
            }

            this.Messages.push(newMessage)
            localStorage.chatMessages = JSON.stringify(this.Messages)
            
        },


        updateMessage(){
            this.Messages = JSON.parse(localStorage.chatMessages);
        },




    }





    
})