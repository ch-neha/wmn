import React, { useState } from 'react';

const ChatApp = () => {
  const [user1Message, setUser1Message] = useState('');
  const [user2Message, setUser2Message] = useState('');
  const [messages, setMessages] = useState([]);

  const handleUser1Send = () => {
    const newMessage = {
      user: 'User 1',
      message: user1Message,
      align: 'right',
    };

    setMessages([...messages, newMessage]);
    setUser1Message('');
  };

  const handleUser2Send = () => {
    const newMessage = {
      user: 'User 2',
      message: user2Message,
      align: 'left',
    };

    setMessages([...messages, newMessage]);
    setUser2Message('');
  };

  return (
    <div>
      <div>
        <h3>User 1</h3>
        <input
          type="text"
          value={user1Message}
          onChange={(e) => setUser1Message(e.target.value)}
        />
        <button onClick={handleUser1Send}>Send</button>
      </div>

      <div>
        <h3>User 2</h3>
        <input
          type="text"
          value={user2Message}
          onChange={(e) => setUser2Message(e.target.value)}
        />
        <button onClick={handleUser2Send}>Send</button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h3>Chat Messages</h3>
        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              alignSelf: message.align === 'right' ? 'flex-end' : 'flex-start',
              backgroundColor: message.align === 'right' ? '#DCF8C6' : '#EEE',
              borderRadius: '4px',
              padding: '8px',
              margin: '4px',
              maxWidth: '70%',
            }}
          >
            <strong>{message.user}: </strong>
            {message.message}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatApp;
