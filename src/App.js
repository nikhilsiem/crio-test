import React,{ useState, useEffect } from 'react'
import { Row } from 'react-bootstrap';
import Restaurant from './components/Restaurant';
import './App.css'


function App() {

	const [restaurant, setRest] = useState([]);
  
	
	useEffect(() => {
		getRestaurants();
	});
	
	const getRestaurants = async () => {
			const response = await fetch(
				`https://developers.zomato.com/api/v2.1/geocode?lat=12.9039&lon=77.6013`, 
				{
					method: 'GET',
					headers: {
						Accept: 'application/json',
						'user-key': 'f91be19c725fd96a6fb68414adc6ec34'
					}
				}
			);
			const data = await response.json();
			setRest(data.nearby_restaurants);
		}
    
	return (
	    <div className="Zomato">
        <div className="buttons-align">
          <Row>
            <button class="btn btn-small">Filter</button>
            <button class="btn btn-small">Rating: 4.0+</button> 
            <button class="btn btn-small">Safe and Hygienic</button> 
            <button class="btn btn-small">Delivery Time</button>
            <button class="btn btn-small">Rating</button> 
            <button class="btn btn-small">Cost</button>            
          </Row>
        </div>
	  		<h2>Restaurants near you:</h2>
        <div>
        {restaurant.map(rest => (
				<Restaurant
					key = {rest.restaurant.R.res_id}
					name = {rest.restaurant.name}
					thumb = {rest.restaurant.thumb}
					cuisines = {rest.restaurant.cuisines}
					cost = {rest.restaurant.average_cost_for_two}
					rating = {rest.restaurant.user_rating.aggregate_rating}
					votes = {rest.restaurant.user_rating.votes}
				  />	  
			  ))}
        </div>
	    </div>
  );
}

export default App;