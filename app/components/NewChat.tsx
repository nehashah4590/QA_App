"use client"
import React, { useState, useEffect } from 'react';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import {usePathname} from 'next/navigation';

const NewChat = () => {
  const [newChat, setNewChat] = useState(false);
  const [chatId, setNewChatId] = useState();
  const router = useRouter();
  const currentPage = usePathname();

  const { data: session } = useSession();
  const token = session?.user?.access_token;
  const id = session?.user?.chat_id;

  useEffect(() => {
    setNewChatId(id);
    console.log("chatId",chatId)
  }, [id])

  const handleNewChat = () => {
    setNewChat(true);
    const id =parseInt(chatId)  + 1;
    setNewChatId(id);
    console.log("dwd", chatId);
    router.push(`${currentPage}?value=${chatId}`)
    // const axios = require('axios');

    // let config = {
    //   method: 'post',
    //   maxBodyLength: Infinity,
    //   url: 'http://127.0.0.1:8000/chatid/?chat_id=3',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Authorization': `Bearer ${token}`
    //   }
    // };

    // axios.request(config)
    //   .then((response: any) => {
    //     console.log(JSON.stringify(response.data));
    //   })
    //   .catch((error: any) => {
    //     console.log(error);
    //   });

  }

  return (
    <div >
    
    </div>
  )
}

export default NewChat