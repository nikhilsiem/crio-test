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
                        <Card.Text className="res-name">{name}</Card.Text>
                       
                            <div className="row">
                                <div className="col-sm-3">
                                <ReactStars
                                    count={rating}
                                    onChange={ratingChanged}
                                    size={18}
                                    activeColor="#E74C3C"
                                    className="star"
                                />
                                </div>
                                <div className="col-sm-2">
                                <Card.Text className="res-rating">{rating}</Card.Text>
                                </div>
                                <div className="col-sm-5">
                                <Card.Text className="res-votes" >({votes}) delivery reviews</Card.Text>
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
