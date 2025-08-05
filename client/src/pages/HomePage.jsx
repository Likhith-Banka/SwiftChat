
import React from 'react'
import Sidebar from '../components/Sidebar'
import ChatContainer from '../components/ChatContainer'

const HomePage = () => {
  return (
    <div className='flex items-center justify-center h-screen w-screen p-2'>
      <div className="backdrop-blur-xl border-2 border-gray-600 rounded-2xl overflow-hidden h-[95%] w-[95%] flex relative">
        <Sidebar />
        <div className="flex-1 relative">
          <ChatContainer />
        </div>
      </div>
    </div>
  )
}

export default HomePage
