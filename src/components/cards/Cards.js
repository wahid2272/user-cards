import React from 'react';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    width: "300px",
    margin: "2em",
    padding: "1em",
    textAlign: "center"
  },
  heading: {
    textAlign: "center",
    color: "green",
    fontSize: "3em"
  },
}));


const Admin = () => {
  const [spacing] = React.useState(2);
  const classes = useStyles();

  return (
    <div>
      <h1 className={classes.heading}>Users</h1>

      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={spacing}>
            
            <Card className={classes.card}>
              <CardContent>
                <h1>Users</h1>
              </CardContent>
              <Button color="primary">Details</Button>
            </Card>

          </Grid>
        </Grid>
      </Grid> 
    </div>
  );
};

export default Admin;
