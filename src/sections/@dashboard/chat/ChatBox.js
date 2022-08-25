import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';

// all available props
const theme = {
  background: '#f5f8fb',
  paddingTop:"20px",
  paddingBottom:"50px",
  fontFamily: 'Roboto',
  headerBgColor: '#d0f2ff',
  headerFontColor: '#111',
  headerFontSize: '18px',
  botBubbleColor: '#d0f2ff',
  botFontColor: '#111',
  userBubbleColor: '#111',
  userFontColor: '#4a4a4a',
};

const steps = [
  {
    id: '1',
    message: 'Hello, I am Carna AI, how can I help you?',
    end: true,
  },
];

const ChatBox = () => (
  <ThemeProvider theme={theme}>
    <div style={{textAlign:"-webkit-center", backgroundImage:"url(../static/mock-images/covers/two-circles.png)", backgroundPosition:"center", backgroundRepeat:"repeat",  paddingBottom:"24px"}}>  <ChatBot steps={steps} />
    </div>
  
  </ThemeProvider>
);

export default ChatBox;