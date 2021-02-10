import React from 'react'
import { Card, Col, Row , Container, Image} from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";

import './style.css'

const Restaurant = ({key, name, thumb, cuisines, cost , rating, votes }) => {

    const ratingChanged = (newRating) => {
        console.log(newRating);
      };


	return (
        <Container fluid className="res-container">
            
            <Row>
                <Card className='res-card' >
                    <div className='inline-show'>
                        <Image src={thumb} className="res-image" rounded />
                        <Card.Title className="res-name">{name}</Card.Title>
                        <div style={{ display: 'inline-block' }}>
                            <ReactStars
                                count={rating}
                                onChange={ratingChanged}
                                size={18}
                                activeColor="#800000"
                            />
                            <Card.Text className="res-rating">{rating}</Card.Text>
                            <Card.Text className="res-votes" >({votes}) delivery reviews</Card.Text>
                        </div>
                        <Card.Text className="res-cuisines" >{cuisines}</Card.Text>
                        <Card.Text className="res-cost">₹{cost} per person</Card.Text>
                    </div>
                </Card>
            </Row>
            
        </Container>

	)
}

export default Restaurant
