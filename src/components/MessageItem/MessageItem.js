import React from 'react';
import './MessageItem.css';

const MessageItem = props => {
  if (Math.random() > 0.7) throw new Error('Well, this happened.');

  return (
    <div className="MessageItem">
        <h5>Name: {props.name}</h5>
      <p>Email: {props.email}</p>
      <p>Message: <strong>{props.message}</strong></p>
    </div>

  );
};

export default MessageItem;