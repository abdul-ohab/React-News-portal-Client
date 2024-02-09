import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Register = () =>{

    const [error, setError] = useState('')
    const [accepted, setAccepted] = useState(false)
    const navigate = useNavigate()
    const {createUser, updateUserProfile, emailVerification} = useContext(AuthContext)

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(result =>{
            const user = result.user
            console.log(user)
            setError('')
            form.reset()
            navigate('/')
            handleUpdateUserProfile(name, photoURL)
            handleEmailVerification()
            toast.success('Please check your email & verify email address')
        })       
        .catch(error => {
            console.error(error)
            setError(error.message)
        }) 
    }

    const handleUpdateUserProfile = (name, photoURL) =>{
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
        .then(() =>{})
        .catch(error => console.error(error))
    }

    const handleEmailVerification = () =>{
        emailVerification()
        .then(() =>{})
        .catch(error => console.error(error))
    }

    const handleAccepted = () =>{
        setAccepted(event.target.checked)
    }
        
    return (
        <form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Your name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control type="text" name="photoURL" placeholder="Photo url" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Check
                    type="checkbox"
                    label={<>Accept <Link to='/terms'>Terms and Conditions</Link></>}
                    onClick={handleAccepted}>
                </Form.Check>
            </Form.Group>

            <Form.Text className="text-danger">
                {error}
            </Form.Text><br></br>

            <Button variant="primary" type="submit" disabled={!accepted}>
                Register
            </Button>
        </form>
    );
};

export default Register;