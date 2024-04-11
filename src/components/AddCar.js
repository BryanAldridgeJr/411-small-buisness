import React, { useState } from "react";
import Login from "./Login";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Add from "./Add";

const AddBuisness = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        border: 'none', 
        boxShadow: 'none',
      }));

      const handleAdd = (newRestaurant) => {
        console.log("Adding new restaurant:", newRestaurant);

    };

    return loggedIn ? (
        <Add onAdd={handleAdd} />
    ) : (
        <div id='all'>
            <div id='login'>
                <Box sx={{ width: '100%' }}>
                <Stack  direction="column" alignItems="stretch" >
                    <Item>
                        <TextField id="standard-basic" label="Username *" variant="standard" />
                    </Item>
                    <Item>
                        <TextField id="standard-basic" label="Password *" variant="standard" />
                    </Item>
                    <Item>
                        <Button variant="contained" style={{ width: '200px', backgroundColor: '#3f51b5', color: '#fff' }} onClick={() => setLoggedIn(true)}>Login</Button>
                    </Item>
                </Stack>
                </Box>
            </div>
        </div>
    )

}

export default AddBuisness;