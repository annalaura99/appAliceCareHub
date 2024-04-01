import 'react-native-gesture-handler';
import React, { useEffect, useState, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, HomeScreen, RegistrationScreen } from './src/screens';
import { decode, encode } from 'base-64';
import database from '@react-native-firebase/database';
import Chat from './Chat';
import Chats from './Chats';

if (!global.btoa) { 
  global.btoa = encode;
}
if (!global.atob) { 
  global.atob = decode;
}

const Stack = createStackNavigator();

export default function App() {
  const messagesWrapperRef = useRef();
  const [user, setUser] = useState({});
  const [messages, setMessages] = useState([]);
  const chatRef = database().ref('/applications/17/chat');
  const messageRef = database().ref('/applications/3/chat/messages');

  // Restante do seu código aqui

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Chats" component={Chats} />
        <Stack.Screen name="Chat" component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
