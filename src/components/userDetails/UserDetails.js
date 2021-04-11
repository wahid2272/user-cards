import React from 'react';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    maxWidth: "45vw",
    margin: "2em",
    padding: "1em",
    textAlign: "center"
  },
  heading: {
    textAlign: "center",
    color: "green",
    fontSize: "3em"
  },
  address: {
    paddingTop: "10px",
    color: ""
  }
}));

const User = (props) => {
  const [spacing] = React.useState(2);
  const classes = useStyles();
  return (
    <>
      <h1 className={classes.heading}>User Details</h1>

      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={spacing}>
            
            <Card className={classes.card}>
              <CardContent>
                <h1>-name: {props.singleUsers.name}</h1>
                <h2>-username: {props.singleUsers.username}</h2>
                <h2>-email: {props.singleUsers.email}</h2>
                <h2>-phone: {props.singleUsers.phone}</h2>
                <h2>-company: {props.singleUsers.company.name}</h2>
                <h2>-website: {props.singleUsers.website}</h2>
                <h2 className={classes.address}>-address: <span></span>
                  <p>-street: {props.singleUsers.address.street}</p>
                  <p>-suite: {props.singleUsers.address.suite}</p>
                  <p>-city: {props.singleUsers.address.city}</p>
                  <p>-zipcode: {props.singleUsers.address.zipcode}</p>
                </h2>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        </Grid>
    </>
  );
};

export default User;
