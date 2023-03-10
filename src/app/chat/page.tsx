'use client'
import io from 'socket.io-client'
import MessagesChat from '@/app/components/MessagesChat'
import ChatUsers from '@/app/components/ChatUsers'


const Chat = () => {
 
  const socket =  io('http://localhost:4000/')

  return (
    <div className=" h-screen w-screen sm:grid sm:grid-cols-[30%,70%] max-w-6xl m-auto sm:p-2 ">
      <ChatUsers/>
      <MessagesChat socket={socket}/>
    </div>
  )
}

export default Chat