import React from 'react'
import user from "../assest/Images/profile-user.png";

const ChatMessage = ({name,message}) => {
  return (
    <div className="p-2 flex-col-reverse">
    <div className='flex items-center'>
    <img src={user} alt="search icon" className="w-6 cursor-pointer"/>
    <span className='font-bold ml-1'>{name}</span>
    <span className="ml-1">{message}</span>

  </div>
    </div>
  )
}

export default ChatMessage