import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from './firebase'; // Assurez-vous d'importer les fonctions spécifiques

const Login = () => {

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        // Utilisation de la fonction modulaire signInWithEmailAndPassword
        signInWithEmailAndPassword(auth, email, password)
            .then(auth => {
                history.push('/');
            })
            .catch(error => alert(error.message));
    }

    const register = e => {
        e.preventDefault();

        // Utilisation de la fonction modulaire createUserWithEmailAndPassword
        createUserWithEmailAndPassword(auth, email, password)
            .then((auth) => {
                // Si l'utilisateur est créé avec succès
                console.log(auth);
                if(auth){
                    history.push('/');
                }
            })
            .catch(error => alert(error.message));
    }

    return (
        <div className="login">
            <Link to="/">
                <img 
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png" 
                    alt="Amazon logo login"
                />
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input 
                    type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input 
                    type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button 
                    type='submit'
                    onClick={signIn}
                    className="login__signInButton">Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the RAFAmazon Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button 
                onClick={register}
                className="login__registerButton">Create your RAFAmazon Account</button>
            </div>
        </div>
    );
}

export default Login;
