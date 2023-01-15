import React,{useState,useEffect} from 'react'
import Image from 'next/image'

interface messages{
  from:String,
  body:String
  }
  
  
  interface PageState{
  message:string,
  messages:Array<messages>
  }

  interface Props{
  socket:any
  }


const MessagesChat = ({socket}:Props) => {

  


  const [message, setMessage] = useState<PageState["message"]>("");
  const [messages, setMessages] = useState<PageState["messages"]>([{
    body:"hola juan",
    from:"use1",
  },
  {
    body:"hola bro😎",
    from:"use2",
  },
  {
    body:"Como estas?",
    from:"use2",
  },
  {
    body:"Bien, y tu?",
    from:"use1",
  },
  {
    body:"muy bien",
    from:"use2",
  },
  {
    body:"de tiempo te veo",
    from:"use2",
  }

]);


  useEffect(() => {
    const reciveMessage= (message:messages) =>setMessages([...messages,message])
    socket.on("message",reciveMessage )

    return(()=>{
      socket.off("message",reciveMessage)
    })

  }, [messages])
  

  const handleSubmit=(evt:React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    
    socket.emit('message',message)

    const newMessage ={
      body:message,
      from:"me"
    }


    setMessages([...messages,newMessage])
    setMessage("")

  }





  return (
    <div className="w-full h-full flex flex-col bg-slate-200  sm:bg-[#23232c]   "> 
      <div className='h-20 bg-white rounded-b-2xl flex justify-start items-center px-2 gap-4  sm:bg-[#23232c]  sm:border-b-[2px] sm:border-zinc-900 sm:text-white '>
        <img src="https://placeimg.com/50/50/tech" alt="" className='rounded-full' />
{/*           <Image
          width={500}
          src="https://randomuser.me/api/portraits/men/88.jpg"
          alt="Picture of the author"
          height={500}
        /> */}
        <p>
         <span> Sebastian Rudiger</span> <br/>
         <p className="w-2 h-2 bg-green-500 inline-block rounded-full"></p> <span>online</span> 
        </p>
      </div>
      <div className='grow '>
        {
          messages.map((message,i) =>
            ( <div key={i} className={`my-2 p-2 flex ${(message.from =="use1" ?'justify-start' :'justify-end ' )} `}>
       
              <span className={`bg-blue-500 p-2 px-4 text-xs text-white ${(message.from =="use1" ?'rounded-r-xl rounded-tl-xl' :'rounded-l-xl rounded-tr-xl bg-green-500' )}`}> {message.body}</span>

              {/* */}
            </div> 
            )

            
            

          )
        }
      </div>
        
      <form onSubmit={handleSubmit} className="w-100 h-20 bg-white sm:bg-[#23232c]  sm:border-t-[2px] sm:border-zinc-900 grid grid-cols-[80%,20%] justify-center items-center rounded-t-2xl">
        <input onChange={e=> setMessage(e.target.value)} type="text" value={message} className="h-10 rounded-2xl mx-2 bg-slate-200 pl-2 sm:bg-zinc-700" placeholder='Escribe aqui...'/>
        <button className="h-10 w-10 rounded-full bg-slate-200 m-auto flex justify-center items-center sm:bg-zinc-700"> 
          <img src="send.svg" alt="" />
        </button>
      </form>

   </div>
  )
}

export default MessagesChat