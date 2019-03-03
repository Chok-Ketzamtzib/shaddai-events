import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import './home.css';

class Home extends Component {
    render() {
        return (
            <div className="page-body home">
                <h1 className="welcome-header">Event Planning {"&"} Design
                </h1> 
                <h2 className="welcome-header">Weddings | Personal Events 
                </h2> 
                <h2 className="welcome-header"> Conventions | International Events
                </h2>
                <Link className="button-link" to="/services">
                    <Button variant="contained" color="primary">
                        Let us take care of the magic for you!
                    </Button>
                </Link>

            </div>
        );
    }
}

export default Home;