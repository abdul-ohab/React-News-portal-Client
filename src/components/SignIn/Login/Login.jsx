import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Login = () => {

    const [error, setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const {logIn, setLoading} = useContext(AuthContext)

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)

        logIn(email, password)
        .then(result =>{
            const user = result.user
            console.log(user)
            setError('')
            form.reset()
            if(user.emailVerified){
                navigate(from, { replace: true })
            }
            else{
                toast.error('Your email is not verified, Please verify your email')
            }
        })
        .catch(error =>{
            console.error(error)
            setError(error.message)
        })
        .finally(() =>{
            setLoading(false)
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" />
            </Form.Group>

            <Form.Text className="text-danger">
                {error}
            </Form.Text><br></br>

            <Button variant="primary" type="submit">
                Login
            </Button>
        </form>
    );
};

export default Login;