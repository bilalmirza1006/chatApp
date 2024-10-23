import React from 'react'
import SideBarSubMenu from '../components/SideBarSubMenu'
import { LuMessagesSquare } from "react-icons/lu";
import { HiChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { MdWork } from "react-icons/md";
import { CiChat2 } from "react-icons/ci";
import { CiSaveDown2 } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { GoFileDirectoryFill } from "react-icons/go";
import ChatList from '../components/ChatList';
import dowloard from '../image/dowloard.jpg'




function Chat() {
    return (
        <div className='w-full h-screen '>
            <div className=' w-[95%] mx-auto border shadow-lg rounded-lg mt-10 p-2 grid'
                style={{ gridTemplateColumns: '80px 1fr 2fr 1fr' }}
            >
                <div className=''>

                    <SideBarSubMenu
                        icon={<HiChatBubbleOvalLeftEllipsis />}
                        title={'All chat'}
                    />
                    <SideBarSubMenu
                        icon={<MdWork />}
                        title={'work'}
                    />
                    <SideBarSubMenu
                        icon={<CiChat2 />}
                        title={'Personal'}
                    />
                    <SideBarSubMenu
                        icon={<CiSaveDown2 />}
                        title={'Saved'}
                    />
                    <SideBarSubMenu
                        icon={<SlCalender />}
                        title={'Calender'}
                    />
                    <SideBarSubMenu
                        icon={<GoFileDirectoryFill />}
                        title={'All file'}
                    />
                </div>
                <div className=''>
                <div className='h-20 bg-green-200'>
                    
                </div>

                    <ChatList
                        src={dowloard}
                        userName={'Bilal'}
                        lastMessage={'hallowewew'}
                        messageTime={'11:30 AM'}
                        icon={<GoFileDirectoryFill/>}
                        unreadMessage={5}
                        onlineStatus={true}
                        isTyping={true}

                    />
                    <ChatList
                        src={dowloard}
                        userName={'Bilal'}
                        lastMessage={'hallowewew'}
                        messageTime={'11:30 AM'}
                        icon={<GoFileDirectoryFill/>}
                        unreadMessage={0}
                        onlineStatus={true}
                        isTyping={true}

                    />
                    <ChatList
                        src={dowloard}
                        userName={'Bilal'}
                        lastMessage={'hallowewew'}
                        messageTime={'11:30 AM'}
                        icon={<GoFileDirectoryFill/>}
                        unreadMessage={5}
                        onlineStatus={true}
                        isTyping={true}

                    />
                    <ChatList
                        src={dowloard}
                        userName={'Bilal'}
                        lastMessage={'hallowewew'}
                        messageTime={'11:30 AM'}
                        icon={<GoFileDirectoryFill/>}
                        unreadMessage={5}
                        onlineStatus={true}
                        isTyping={false}

                    />
                    
                </div>
                <div className=' bg-red-800'>jyef</div>
                <div className=' bg-red-700'>jyef</div>
            </div>
        </div>

    )
}

export default Chat