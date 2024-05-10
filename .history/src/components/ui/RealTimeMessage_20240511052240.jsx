import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useCallback, useEffect } from 'react'
import { ToastAndroid } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'
import { ENDPOINT } from '../../../GlobalVariables';

export default function RealTimeMessage( { areaId }) {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    async function getMessages() {
      const token = await AsyncStorage.getItem("token");
        if (!token) {
          ToastAndroid.show("You are unauthorized", ToastAndroid.SHORT);
          return;
        }
        const parsedToken = JSON.parse(token);
        console.log(parsedToken)
        const response = await fetch(`${ENDPOINT}/citizen/messages/${areaId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + parsedToken.accessToken,
            "ngrok-skip-browser-warning": "69420"
          }
        });
        const data = await response.json();
        console.log(data)
        if (data.detail === "Unauthorized") {
          ToastAndroid.show("You are not authorized.", ToastAndroid.SHORT);
        }
        else {
          const messages = data.map(message => {
            return {
              _id: message.id,
              text: message.content,
              createdAt: new Date(message.created_at),
              user: {
                _id: message.user_id,
                name: message.name,
                avatar: "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
              },
            }
          })
          setMessages(messages)
        }
    }
    
    getMessages()
    
  }, [])

  console.log(messages)

  

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

  async function handleMessageAdd(messages) {
    const token = await AsyncStorage.getItem("token");
    if (!token) {
      ToastAndroid.show("You are unauthorized", ToastAndroid.SHORT);
      return;
    }
    const parsedToken = JSON.parse(token);
    const message = {
      content: messages[0].text,
      location_id: areaId
    }
    console.log(message)
    const response = await fetch(`${ENDPOINT}/citizen/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + parsedToken.accessToken,
        "ngrok-skip-browser-warning": "69420"
      },
      body: JSON.stringify(message)
    });
    const data = await response.json();
    console.log(data)
    if (data.detail === "Unauthorized") {
      ToastAndroid.show("You are not authorized.", ToastAndroid.SHORT);
    }
  }



  return (
    <GiftedChat
      messages={messages}
      onSend={messages => 
        { onSend(messages)
          handleMessageAdd(messages)
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