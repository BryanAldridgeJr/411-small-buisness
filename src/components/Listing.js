import React, { useState } from 'react'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@mui/material'
import { Link } from 'react-router-dom';
import Add from './Add';


const Listing = () => {
    const [restaurants, setRestaurants] = useState([
        { name: "ConTodo", description: "Chef Joseph Gomez highlights the culinary wonders of the Rio Grande Valley through his North Austin truck, and don’t call the menu Tex-Mex. Rather, he explores the true depths of Mexican food along the border of south Texas.", hours: "12pm-10pm", address: "10001 Metric Blvd, Austin, TX 78758" },
        { name: "Komé", description: "Co-owners Také and Kayo Asazu transformed their popular sushi trailer Sushi A-Go-Go into a full-blown laid-back North Loop restaurant, offering their takes on homestyle Japanese fare.", hours: "11am-10pm", address: "5301 Airport Blvd #100, Austin, TX 78751" },
        { name: "KoreaHouse", description: "Dining at the casual Korean restaurant in North Shoal Creek is a perfectly homey experience. The menu is a traditional one, loads of stews (budae jjigae and the seaweed-y miyukguk), kimbap, and kimchi jeon. ", hours: "9am-9pm", address: "2700 W Anderson Ln (Village Shopping Center), Austin, TX 78757" },

    ]);

    const handleAdd = (newRestaurant) => {
        setRestaurants([...restaurants, newRestaurant]); 
    };
    return (
        <Container>

            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Hours</TableCell>
                        <TableCell>Address</TableCell>
                    </TableRow>
                </TableHead>

                {restaurants.map((restaurant, index) => (
                    <TableBody key={index}>
                        <TableCell> <Link to={`/restaurant/${restaurant.name}`}>{restaurant.name}</Link> </TableCell>
                        <TableCell>{restaurant.description}</TableCell>
                        <TableCell>{restaurant.hours}</TableCell>
                        <TableCell>{restaurant.address}</TableCell>
                    </TableBody>
                ))}
            </Table>
        </Container>
    )
}

export default Listing;