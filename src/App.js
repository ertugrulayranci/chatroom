import { useRef, useState } from 'react';
import Auth from './components/Auth';
import Chat from './components/chat';



function App() {
  
  const[isAuth,setIsAuth]= useState(localStorage.getItem("token"))

  const[room, setRoom] = useState (null);

  const inputRef = useRef(null)
console.log(room)

  //eğer kullanıcı henüz giriş yapmadı ise
  if(!isAuth){
    return(
      <div className='container'>
        <Auth setIsAuth={setIsAuth} />
      </div>
    );
  }

  //giriş yaptı ise
  return (
    <div className="container">
      {room ? (
        <Chat room={room} />
      ) : (
        <div className="room-container">
          <h1>Chat room</h1>
          <p>Which room will you enter?</p>
          <input
            ref={inputRef}
            type="text"
            placeholder="Write a room number.."
          />
          <button onClick={() => setRoom(inputRef.current.value)} id="enter">
            {" "}
            Enter the room{" "}
          </button>
          <button id="leave">Log Out</button>
        </div>
      )}
    </div>
  );
}

export default App;
