import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'

export default function RealTimeMessage( { areaId }) {
  const [messages, setMessages] = useState([])



  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    )

    // setMessages(previousMessages =>
    //   GiftedChat.append(previousMessages, {
    //     _id: 2,
    //     text: 'Hi',
    //     createdAt: new Date(),
    //     user: {
    //       _id: 3,
    //       name: 'Tahsin Choudhury',
    //       avatar: 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png',
    //     },
    //   },),  
    // )

    

  }, [])

  async function handleMessageAdd() {
    console.log("Message Added")
  }



  return (
    <GiftedChat
      messages={messages}
      onSend={messages => 
        { onSend(messages)
          handleMessageAdd()
        }
      }
      user={{
        _id: 1,
        name: 'Fahim Shakil',
        avatar: 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png',
      }}
    />
  )
}