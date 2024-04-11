import React, { useState } from 'react';
import '../App.css'

const Add = ({ onAdd }) => {
    const [newRestaurant, setNewRestaurant] = useState({
        name: '',
        description: '',
        hours: '',
        address: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewRestaurant({ ...newRestaurant, [name]: value });
    };

    const handleAddRestaurant = () => {
        if (newRestaurant.name && newRestaurant.description && newRestaurant.hours && newRestaurant.address) {
            onAdd(newRestaurant);

            setNewRestaurant({
                name: '',
                description: '',
                hours: '',
                address: ''
            });
        } else {
            alert("Please fill in all fields.");
        }
    };

    return (
        <div className='main'>
            <div className='top'>
                <input type="text" name="name" value={newRestaurant.name} onChange={handleInputChange} placeholder="Name" /> <br/>
                <input type="text" name="description" value={newRestaurant.description} onChange={handleInputChange} placeholder="Description" /> <br/>
                <input type="text" name="hours" value={newRestaurant.hours} onChange={handleInputChange} placeholder="Hours (ex. 8am-9pm)" /> <br/>
                <input type="text" name="address" value={newRestaurant.address} onChange={handleInputChange} placeholder="Address" /> <br/>
                <div className='buttondiv'>
                    <button className='button1' onClick={handleAddRestaurant}>Save</button>
                </div>
            </div>
            <div className='bottom'>
                <img className='img1' src='https://t3.ftcdn.net/jpg/04/49/73/64/360_F_449736488_IAGo58o7DloC8Os5S5v9vppX3BIxzK4S.jpg' />
            </div>
        </div>
    );
};

export default Add;
