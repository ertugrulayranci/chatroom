import {auth, provider} from "../firebase/FirebaseConfig";

//Giriş yapmak için gerekli fonksiyon

import { signInWithPopup } from "firebase/auth";

const Auth = ({ setIsAuth }) => {
    // giriş
    const signIn = () => {
      // promise döndürür
      signInWithPopup(auth, provider)
        .then((res) => {
          localStorage.setItem('token', res.user.refreshToken);
          setIsAuth(true);
        })
        .catch((err) => console.log(err));
    };
    
    return(
        <div className="auth">
            <h1>Chat Room</h1>
            <p> Click to login</p>
            <button onClick= {signIn}>Login with google</button>
        </div>
    );
};


export default Auth;