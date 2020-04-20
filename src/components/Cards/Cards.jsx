import React from 'react';
import CountUp from 'react-countup'
import { Card, CardContent, Typography, Grid } from "@material-ui/core";

import styles from './Cards.module.css';

const Cards =({data: {confirmed, recovered, deaths ,lastUpdate}})=>{
    if(!confirmed){
        return 'Loading....';
    }
    return(
        <div className={styles.container}>
          <Grid container spacing={3} justify="center">
              <Grid item component={Card}>
                  <CardContent>
                      <Typography color="textSecondary" gutterBottom>Infected</Typography>
                      <Typography varaint="h5">
                          <CountUp 
                             start={0}
                             end={confirmed.value}
                             duration={2.5}
                             seperator=","/>
                       </Typography>
                      <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                      <Typography varaint="body2">No of Active Cases of COVID-19</Typography>
                  </CardContent>
              </Grid>
              <Grid item component={Card}>
                  <CardContent>
                      <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                      <Typography varaint="h5"><CountUp 
                             start={0}
                             end={recovered.value}
                             duration={2.5}
                             seperator=","/></Typography>
                      <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                      <Typography varaint="body2">No of Recovered Cases of COVID-19</Typography>
                  </CardContent>
              </Grid>
              <Grid item component={Card}>
                  <CardContent>
                      <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                      <Typography varaint="h5">
                      <CountUp 
                             start={0}
                             end={deaths.value}
                             duration={2.5}
                             seperator=","/></Typography>
                      <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                      <Typography varaint="body2">No of Deaths caused due COVID-19</Typography>
                  </CardContent>
              </Grid>

          </Grid>

        </div>
    )
}

export default Cards