import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Grid, Card, CardHeader, CardContent, CardActions, Chip, Button, Typography } from '@material-ui/core';
import GroupIcon from '@material-ui/icons/Group';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import './EventsItem.scss';
import sportImage from '../../img/noImage.svg';

class EventsItem extends Component{
    render(){
        const {event} = this.props;
        
        return(
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card className="eventList_card">
                    <Link to={`/event/${event._id}`}>
                        <img style={{width: '100%', height: '220px'}} src={event.imageURL ? event.imageURL : sportImage}
                          alt="Sport" />
                    </Link>
                    <CardHeader className="padB-0" title={event.eventName} />
                    <CardContent>
                        <Typography className="marginB-1" variant="body2" color="textSecondary" component="p">
                            {event.description}
                        </Typography>
                        <Chip icon={<SportsBasketballIcon />} label={event.sportType}/>
                        <Chip icon={<GroupIcon />} label={event.playerStrength}/>
                        
                    </CardContent>
                    <CardActions>
                        <Button className="primary-color createvent-btn white-link" size="large" variant="contained" fullWidth  component={Link} to={`/event/${event._id}`}>
                            More Details
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        );
    }
}

export default connect(null)(EventsItem);