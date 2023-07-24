import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import {SplashPage, Button} from "../GlobalStyle"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components"

const FormContainer = styled.div`
width: 420px;
`;
const Form = styled.form`
    width: 100%;
    h2 {
        margin-bottom: 1.6rem;
    }
    input {
        display: block;
        width: 100%;
        margin-bottom: .4rem;
        border: none;
        padding: .6rem;
        background: #322f30;
    }
    button {
        margin-top: 1.6rem;
    }
`;


const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const navigate = useNavigate();

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then(
            (userCredential) => {
                navigate('/controlcenter');
            }).catch((error) => {
                console.log(error);
                setError(error.message); // set the error message if an error occurs
            })
    }

    return (
        <>
        <SplashPage>
            <Navbar />
            <FormContainer>
            <Form onSubmit={signIn}>
                <h2>Sign In</h2>
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type="password" 
                    placeholder="Enter your password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit">Log In</Button>
                {error && <p>{error}</p>}
            </Form>
            </FormContainer>
        </SplashPage>
        <Footer />
        </>
    )
}

export default SignIn;