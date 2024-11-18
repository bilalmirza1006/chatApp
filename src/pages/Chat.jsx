import React, { useState } from 'react'
import SideBarSubMenu from '../components/SideBarSubMenu'
import { LuMessagesSquare } from "react-icons/lu";
import { HiChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { MdWork } from "react-icons/md";
import { CiChat2 } from "react-icons/ci";
import { CiSaveDown2 } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { IoLink } from "react-icons/io5";

import { GoFileDirectoryFill } from "react-icons/go";
import ChatList from '../components/ChatList';
import dowloard from '../image/dowloard.jpg'
import CustomInput from '../components/CustomInput';
import ChatHeader from '../components/ChatHeader';
import Message from '../components/Message';
import MessageInput from '../components/MessageInput';
import UserDetail from '../components/UserDetail';
import Member from '../components/Member';
import VideoAndPhotos from '../components/VideoAndPhotos';




function Chat() {
    const [messages, setMessages] = useState([
        { message: "Hello!", timestamp: "10:15 AM", isSender: false },
        { message: "Hi, how are you?", timestamp: "10:16 AM", isSender: true },
        { message: "I'm good! What about you?", timestamp: "10:17 AM", isSender: false },
        { message: "I'm good! What about you?", timestamp: "10:17 AM", isSender: false },
        { message: "I'm good! What about you?", timestamp: "10:17 AM", isSender: true },
        { message: "I'm good! What about you?awretxf wehfouweof wefweoief oiwe foi wehhfoiweh oif wef woiefoiwehfouwehfoweh fowheofu hweoufh weouefh weouhcygvhbjnkm", timestamp: "10:17 AM", isSender: false },
    ]);
    const handleUserAction = (actionType, data) => {
        if (actionType === 'emailClick') {
            console.log('Email clicked:', data);
        } else if (actionType === 'phoneClick') {
            console.log('Phone clicked:', data);
        }
    };
    const members = [
        { avatar: 'https://cdn.pixabay.com/photo/2023/03/12/18/26/girl-7847557_1280.jpg' },
        { avatar: 'https://cdn.pixabay.com/photo/2023/03/12/18/26/girl-7847557_1280.jpg' },
        { avatar: 'https://cdn.pixabay.com/photo/2023/03/12/18/26/girl-7847557_1280.jpg' },
        { avatar: 'https://cdn.pixabay.com/photo/2023/03/12/18/26/girl-7847557_1280.jpg' },
        { avatar: 'https://cdn.pixabay.com/photo/2023/03/12/18/26/girl-7847557_1280.jpg' },
        { avatar: 'https://cdn.pixabay.com/photo/2023/03/12/18/26/girl-7847557_1280.jpg' },
        { avatar: 'https://cdn.pixabay.com/photo/2023/03/12/18/26/girl-7847557_1280.jpg' },
        { avatar: 'https://cdn.pixabay.com/photo/2023/03/12/18/26/girl-7847557_1280.jpg' },
        { avatar: 'https://cdn.pixabay.com/photo/2023/03/12/18/26/girl-7847557_1280.jpg' },
        { avatar: 'https://cdn.pixabay.com/photo/2023/03/12/18/26/girl-7847557_1280.jpg' },
        { avatar: 'https://cdn.pixabay.com/photo/2023/03/12/18/26/girl-7847557_1280.jpg' },
        { avatar: 'https://cdn.pixabay.com/photo/2023/03/12/18/26/girl-7847557_1280.jpg' },
        { avatar: 'https://cdn.pixabay.com/photo/2023/03/12/18/26/girl-7847557_1280.jpg' },
        { avatar: 'https://cdn.pixabay.com/photo/2023/03/12/18/26/girl-7847557_1280.jpg' },
        { avatar: 'https://cdn.pixabay.com/photo/2023/03/12/18/26/girl-7847557_1280.jpg' },
        { avatar: 'https://cdn.pixabay.com/photo/2023/03/12/18/26/girl-7847557_1280.jpg' },
        { avatar: 'https://cdn.pixabay.com/photo/2023/03/12/18/26/girl-7847557_1280.jpg' },
    ];

    const additionalCount = 27; // Example count


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
                <div className='border-l-2 border-solid border-gray-300'>
                    <div className='h-20 flex items-center w-full p-2 border-b-2 border-solid border-gray-300'>
                        <CustomInput
                            className='rounded-2xl bg-gray-200'
                            placeholder='Search'
                            icon={<IoIosSearch />}
                        />
                    </div>
                    <ChatList
                        src={dowloard}
                        userName={'Bilal'}
                        lastMessage={'Hello, how are you?'}
                        messageTime={'11:30 AM'}
                        icon={<GoFileDirectoryFill />}
                        unreadMessage={0}
                        onlineStatus={false}
                        isTyping={false}
                        messageStatus={'delivered'}
                    />
                    <ChatList
                        src={dowloard}
                        userName={'Bilal'}
                        lastMessage={'Hello, how are you?'}
                        messageTime={'11:30 AM'}
                        icon={<GoFileDirectoryFill />}
                        unreadMessage={0}
                        onlineStatus={true}
                        isTyping={true}
                        messageStatus={'delivered'}
                    />
                    <ChatList
                        src={dowloard}
                        userName={'Bilal'}
                        lastMessage={'Hello, how are you?'}
                        messageTime={'11:30 AM'}
                        icon={<GoFileDirectoryFill />}
                        unreadMessage={4}
                        onlineStatus={true}
                        isTyping={false}
                        messageStatus={'delivered'}
                    />
                    <ChatList
                        src={dowloard}
                        userName={'Bilal'}
                        lastMessage={'Hello, how are you?'}
                        messageTime={'11:30 AM'}
                        icon={<GoFileDirectoryFill />}
                        unreadMessage={0}
                        onlineStatus={true}
                        isTyping={false}
                        messageStatus={'pending'}
                    />
                    <ChatList
                        src={dowloard}
                        userName={'Bilal'}
                        lastMessage={'Hello, how are you?'}
                        messageTime={'11:30 AM'}
                        icon={<GoFileDirectoryFill />}
                        unreadMessage={0}
                        onlineStatus={true}
                        isTyping={false}
                        messageStatus={'delivered'}
                    />
                    <ChatList
                        src={dowloard}
                        userName={'Bilal'}
                        lastMessage={'Hello, how are you?'}
                        messageTime={'11:30 AM'}
                        icon={<GoFileDirectoryFill />}
                        unreadMessage={0}
                        onlineStatus={true}
                        isTyping={false}
                        messageStatus={'received'}
                    />

                    <ChatList
                        src={dowloard}
                        userName={'Bilal'}
                        lastMessage={'Hello, how are you?'}
                        messageTime={'11:30 AM'}
                        icon={<GoFileDirectoryFill />}
                        unreadMessage={0}
                        onlineStatus={true}
                        isTyping={false}
                        messageStatus={'read'}
                    />
                </div>
                <div className='border-l-2 border-solid  border-gray-300'>
                    <div className='h-20 flex items-center w-full p-2 border-b-2 border-solid border-gray-300'>
                        <ChatHeader
                            userName={'Bilel mirza'}
                            lastSeen={'13:03'}
                        />
                    </div>
                    <div className="flex flex-col h-screen p-4 bg-white">
                        <div className="flex-1 overflow-y-auto space-y-4">
                            {messages.map((msg, index) => (
                                <Message
                                    key={index}
                                    message={msg.message}
                                    timestamp={msg.timestamp}
                                    isSender={msg.isSender}
                                    src={dowloard}
                                    icon={<GoFileDirectoryFill />}
                                    messageStatus={'read'}

                                />
                            ))}
                        </div>
                        <div className="mt-4 flex items-center">
                            {/* <input
                                type="text"
                                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg"
                                placeholder="Type a message..."
                            />
                            <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg">
                                Send
                            </button> */}
                            <MessageInput />
                        </div>
                    </div>
                </div>
                <div className='border-l-2 border-solid  pl-2 border-gray-300'>
                    <UserDetail
                        src={dowloard}
                        userName="John Doe"
                        member="Premium Member"
                        description="Software Developer kwetfwiefei rgwcuorrywei eeuwe fofywe9f8 w98e 98we y98we y9w ef98 ewf9"
                        email="bilal.tech1006@gmail.com"
                        phone={<IoLink />}
                        onAction={handleUserAction} // Pass function as prop
                    />
                    <Member
                        members={members}
                    />
                    <VideoAndPhotos
                    members={members}/>
                </div>
            </div>
        </div>

    )
}

export default Chat