import React from 'react'
import { AppBar, Toolbar, IconButton, 
  Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import '../Navigation.css';

const Navigation = () => {
    return (
        <AppBar position="relative">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                    Austin Small Buisness
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to="/">Listings</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/add">Add</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/add">Login</Link>
                    </li>
                </ul>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation