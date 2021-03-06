import React from "react";
import cx from "classnames";
import {Card, CardContent, Typography, Grid} from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";

const Cards = ({data : {confirmed, recovered, deaths, lastUpdate}}) => {
    if(!confirmed){
        
        return "Loading...";
    }

return(
    <div className={StyleSheet.container}>
        <Grid container spacing ={3} justify ="center" align="center">
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}
      >
          <CardContent>
              <Typography color="textSecondary" gutterBottom >Infected</Typography>
              <Typography variant="h5">
                  <CountUp
                      start={0}
                      end={confirmed.value}
                      duration={1}
                      separator=","

                  />
              </Typography>
              <Typography variant="body2">Number of Confirmed Cases</Typography>
          </CardContent>
          </Grid>

          <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}
          style={{backgroundColor: "#d0efb5"}}>
          <CardContent>
              <Typography color="textSecondary" gutterBottom>Recovered</Typography>
              <Typography variant="h5">
                  <CountUp
                      start={0}
                      end={recovered.value}
                      duration={1}
                      separator=","

                  />
              </Typography>
              <Typography variant="body2">Number of Recoveries</Typography>
          </CardContent>
          </Grid>

          <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}
          style={{backgroundColor: "#dedede"}}>
          <CardContent>
              <Typography color="textSecondary" gutterBottom>Deaths</Typography>
              <Typography variant="h5">
                  <CountUp
                      start={0}
                      end={deaths.value}
                      duration={1}
                      separator=","

                  />
              </Typography>
              <Typography variant="body2">Number of Deceased</Typography>
          </CardContent>
          </Grid>
        </Grid>
    </div>

);
}

export default Cards;