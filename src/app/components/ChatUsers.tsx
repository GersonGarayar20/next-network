import CardUser from "./CardUser"


const ChatUsers = () => {
  return (
    <div className="hidden sm:flex sm:flex-col bg-slate-100 border-1 border-slate-200 overflow-hidden sm:bg-[#23232c] sm:text-white ">
     
     <h2 className='pl-2 pt-2'>Usuarios</h2>

     <form action="" className='w-full p-2'>
        <input  type="text"  className="h-10 rounded-2xl  bg-slate-200  sm:bg-zinc-700 pl-2 w-full" placeholder='Chatea con Alguien...'/>
      </form>
      

      <ul className="grid overflow-auto">
        <CardUser/>
        <CardUser/>
        <CardUser/>
        <CardUser/>
        <CardUser/>
        <CardUser/>
        <CardUser/>
        <CardUser/>
        <CardUser/>
        <CardUser/>
        <CardUser/>
        <CardUser/>

      </ul>
    </div>
  )
}

export default ChatUsers