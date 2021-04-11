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
  name: {
    padding: "10px",
  },
  address: {
    paddingTop: "10px",
    fontSize: "18px"
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
                <h2 className={classes.name}>Name: {props.singleUsers.name}</h2>
                <h3>username: {props.singleUsers.username}</h3>
                <h3>email: {props.singleUsers.email}</h3>
                <h3>phone: {props.singleUsers.phone}</h3>
                <h3>website: {props.singleUsers.website}</h3>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        </Grid>
    </>
  );
};

export default User;
