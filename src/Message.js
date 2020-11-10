///rfce

import { Card, CardContent, Typography } from '@material-ui/core'
import React, { forwardRef } from 'react'
import './Message.css';
import { MessageBox } from 'react-chat-elements'
import 'react-chat-elements/dist/main.css';
import { MessageList } from 'react-chat-elements'
import { ChatItem } from 'react-chat-elements'


const Message = forwardRef(({ message, username }, ref) => {

    const isUser = username === message.username;
    return (
        <div ref={ref} className={`message ${isUser && 'message_user'} `}>
            <Card className={isUser ? "message_userCard" : "message_questCard"}>
                < CardContent >
                    <Typography
                        color="white"
                        variant="h5"
                        component="h2"
                    >
                        {!isUser && `${message.username || 'Unknown user'}: `} {message.message}
                    </Typography>
                </CardContent >
            </Card >


            {/* <MessageBox
                position={'left'}
                type={'photo'}
                text={'react.svg'}
                data={{
                    uri: 'https://www.robinwieruch.de/static/d85ae32863f6f0202206045e5cf1e4c3/9842e/banner.jpg?w=100px',
                    status: {
                        click: false,
                        loading: 0,
                    }
                }} /> */}

            {/* <ChatItem
                avatar={'https://facebook.github.io/react/img/logo.svg'}
                alt={'Reactjs'}
                title={'Facebook'}
                subtitle={'What are you doing?'}
                date={new Date()}
                unread={0} />

            <MessageList
                className='message-list'
                lockable={true}
                toBottomHeight={'100%'}
                dataSource={[
                    {
                        position: 'right',
                        type: 'text',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                        date: new Date(),
                    },
                    {
                        position: 'right',
                        type: 'text',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                        date: new Date(),
                    },
                ]} /> */}
        </div>
    )
})

export default Message



