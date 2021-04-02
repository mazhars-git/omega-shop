// import React, { useContext } from 'react';
// import firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from './firebase.config';
// import { UserContext } from '../../App';
// import './Login.css';


// const Login = () => {
//     const [loggedInUser, setLoggedInUser] = useContext(UserContext);

//     if (firebase.apps.length === 0) {
//         firebase.initializeApp(firebaseConfig);
//     }

//     const handleGoogleSignIn = () => {
//         const provider = new firebase.auth.GoogleAuthProvider();
//         firebase.auth()
//         .signInWithPopup(provider)
//         .then((result) => {
//             const {displayName, email} = result.user;
//             const signedInUser = {name: displayName, email};
//             setLoggedInUser(signedInUser);
//         }).catch((error) => {
//             var errorMessage = error.message;
//         });
//     }

//     return (
//         <div className="container login-area">
//             <h3>Login Area</h3>
//             <button onClick={handleGoogleSignIn}>Login with Google</button>
//         </div>
//     );
// };

// export default Login;

import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import './Login.css';

    if (firebase.apps.length === 0) {
            firebase.initializeApp(firebaseConfig);
    }

const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then((result) => {
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email};
            setLoggedInUser(signedInUser);
            storeAuthToken();
            history.replace(from);
        }).catch((error) => {
            var errorMessage = error.message;
            console.log(errorMessage);
        });
    }

    const handleFbSignIn = () => {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            var credential = result.credential;
            var user = result.user;
            var accessToken = credential.accessToken;
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
        });
    }

    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
             isFieldValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(e.target.value);
        }
        if (isFieldValid) {
            const newUserInfo = {...loggedInUser};
            newUserInfo[e.target.name] = e.target.value;
            setLoggedInUser(newUserInfo);
        }
    }

    const handleSubmit = (e) => {
        if (newUser && loggedInUser.email && loggedInUser.password) {
            firebase.auth().createUserWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
            .then(res => {
                const newUserInfo = {...loggedInUser};
                newUserInfo.error = '';
                newUserInfo.success = true;
                setLoggedInUser(newUserInfo);
                updateUserName(loggedInUser.name)
                history.replace(from);
            })
            .catch(error => {
                const newUserInfo = {...loggedInUser};
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setLoggedInUser(newUserInfo);
            });
        }
        if (!newUser && loggedInUser.email && loggedInUser.password) {
            firebase.auth().signInWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
            .then(res => {
                const newUserInfo = {...loggedInUser};
                newUserInfo.error = '';
                newUserInfo.success = true;
                setLoggedInUser(newUserInfo);
                history.replace(from);
                console.log('signed in user info', res.user);
            })
            .catch(error => {
                const newUserInfo = {...loggedInUser};
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setLoggedInUser(newUserInfo);
            });
        }
        e.preventDefault();
    }

    const updateUserName = name => {
        const loggedInUser = firebase.auth().currentUser;
        loggedInUser.updateProfile({
        displayName: name,
        }).then(res => {
        // Update successful.
        console.log('Update user successfully');
        }).catch(error => {
        // An error happened.
        console.log(error);
        });
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function(idToken) {
            sessionStorage.setItem('token', idToken);
          }).catch(function(error) {
            // Handle error
          });
    }
    return (
        <div className="login-area">
            <button className="btn-style" onClick={() => handleGoogleSignIn()}>Login With Google</button>
            <button className="btn-style" onClick={() => handleFbSignIn()}>Login With Facebook</button><br/>
            <input onChange={() => setNewUser(!newUser)} type="checkbox" name="newUser" id=""/>
            <label htmlFor="newUser">Sign up New User</label>

            <form onSubmit={handleSubmit}>
                {newUser && <input onBlur={handleBlur} type="text" name="name" placeholder="Your Name" className="input-style"/>}
                <input onBlur={handleBlur} type="email" name="email" placeholder="Your Email" className="input-style"/>
                <input onBlur={handleBlur} type="password" name="password" placeholder="Password" className="input-style"/>
                <input type="submit" value={newUser ? 'Sign up' : 'Sign in'} className="btn-submit"/>
            </form>
            <p style={{color: 'red'}}>{loggedInUser.error}</p>
            {
                loggedInUser.success && <p style={{color: 'green'}}>User {newUser ? 'created' : 'logged in'} successfully</p>
            }
        </div>
    );
};

export default Login;