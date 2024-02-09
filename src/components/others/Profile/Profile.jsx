import React, { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Profile = () => {

    const {user} = useContext(AuthContext)
    const [name, setName] = useState(user.displayName)
    const photoURLRef = useRef(user.photoURL)

    const handleSubmit = event =>{
        event.preventDefault()
        console.log(name)
    }

    const handleNameChange = event =>{
        setName(event.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control onChange={handleNameChange} type="text" name="name" placeholder="Your name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control ref={photoURLRef} defaultValue={user?.photoURL} type="text" name="photoURL" placeholder="Photo url" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control readOnly defaultValue={user?.email} type="email" name="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Text className="text-danger">
                {error}
            </Form.Text><br></br>

            <Button variant="primary" type="submit" disabled={!accepted}>
                Update
            </Button>
        </form>
    );
};

export default Profile;