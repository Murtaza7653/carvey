import React from 'react';

export default function Chatbot() {

    return (

        <div className='chatbot'>
            <iframe
                title='carvey-chatbot'
                className='chatbot__frame'
                allow="microphone;"
                src="https://console.dialogflow.com/api-client/demo/embedded/26da9ac0-36bd-4650-87f3-5fe4403b301b">
            </iframe>
        </div>

    )

}