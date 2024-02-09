import { Link, useLoaderData } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const News = () => {
    const news = useLoaderData()
    const {category_id, details, title, image_url} = news;

    return (
        <Card>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Text>{details}</Card.Text>
                <Card.Title>{title}</Card.Title>
                <Link to={`/category/${category_id}`}>
                    <Button variant="primary">All news in this category</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default News;