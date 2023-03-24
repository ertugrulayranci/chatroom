import { addDoc,collection, onSnapshot, orderBy, query, serverTimestamp, where,  } from "firebase/firestore";
import React, {useEffect, useState} from "react";
import { db, auth} from "../firebase/FirebaseConfig";

const Chat =({room})=>{
    const [newMsg,setNewMsg]=useState('');
    const [messages , setMessages] = useState([])    
    //kolleksiyonun referansını alma
const messagesRef = collection(db, 'messages');

    //mesajı firebase gönderme

    const handleSubmit = (event) =>{
        event.preventDefault();
        if(!newMsg) return;
        addDoc(messagesRef,{
            text:  newMsg,
            user: auth.currentUser.displayName,
            room: room,
            createdAt: serverTimestamp(),
        }); 
        console.log(newMsg);

        setNewMsg('');
    };

    //mesajları çekme

    useEffect((  )=>{
        const queryMessage = query(
            messagesRef, 
            where("room", "==", room),
            orderBy('createdAt')
        )  
        //Veritabanı değiştiginde  mesajlari ceker
        onSnapshot(queryMessage,(snapshot)=>{
            //gelen mesajları bir diziye aktarma
            let commingMessages = [];
            snapshot.forEach((doc)=> {
                commingMessages.push({...doc.data(), id: doc.id});
            }  );
            setMessages(commingMessages);
        })
    })
    return(
        <div className="chat">
            <div className="chat-info">
                <p> deneme</p>
                <h3>{room}</h3>
                <a href='/'>Another room</a>
            </div>
            <div className="messages">
                {messages.map((message)=>(
                    <>
                    {
                        auth.currentUser.displayName === message.user ? (
                            <p className="user-message">{message.text}</p>
                        ):(
                        <p>
                            <span className='message-info'>{message.user} :</span>
                            <span className="message">{message.text}</span>
                        </p>)
                    }
                    </>
                ))}
            </div>
            <form onSubmit ={handleSubmit}>
                <input onChange={(e)=>setNewMsg(e.target.value)} 
                placeholder="Write your message.." type="text" 
                value={newMsg}/>
                <button type='submit'>Send</button>
            </form>
            
        </div>
    )
}

export default Chat;