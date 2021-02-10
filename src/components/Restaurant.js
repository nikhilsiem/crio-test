import React from 'react'
import { Card, Col, Row , Container, Image} from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";
import StarComponent from './StarComponent'

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
                        <Card.Text className="res-name">{name}</Card.Text>
                       
                            <div className="row">
                                <div className="col-sm">
                                    <StarComponent value={rating} text={`${rating} (${votes}) delievery reviews`}/>
                                
                                </div>
                                
                            </div>
                      
                        <Card.Text className="res-cuisines" >{cuisines}</Card.Text>
                        <Card.Text className="res-cost">₹{cost/2} per person</Card.Text>
                    </div>
                </Card>
            </Row>
            
        </Container>

	)
}

export default Restaurant
