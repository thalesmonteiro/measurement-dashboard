import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";

import BlurOn from "@material-ui/icons/BlurOn"
import DonutLarge from "@material-ui/icons/DonutLarge"
import Tonality from "@material-ui/icons/Tonality"
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import { bugs, website, server } from "variables/general.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Search from "@material-ui/icons/Search";
import Send from "@material-ui/icons/Send"


import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);


export default function Dashboard() {
  const classes = useStyles();
  const [inputMeasure, setInputMeasure] = React.useState("")

  const [inputButton, setButtonMeasure] = React.useState(false)

  const [data, onChange] = React.useState(new Date());

  const [inputList, setInputList] = React.useState(["tuim", "tuim2", "tuim3"])

  const handleclickButtonMeasure = events =>{
    // TODO
    //Request to API
    console.log(inputMeasure)
    // setInputMeasure(events.target.value)
    events.preventDefault() 
  }
  console.log(inputMeasure)
  console.log(data)
  return (
    <div>
      <GridContainer>
        <GridItem xs={4} >
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>view_week</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Last measurement</p>
              <h3 className={classes.cardTitle}>
                251 <small>pF</small>
              </h3>
            </CardHeader>
            <CardFooter stats>
  
            </CardFooter>
            {/* <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  <Warning />
                </Danger>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  2 hours ago
                </a>
              </div>
            </CardFooter> */}
          </Card>
        </GridItem>
        <GridItem xs={4} >
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <BlurOn/>
              </CardIcon>
              <p className={classes.cardCategory}>Relative permittivity</p>
              <h3 className={classes.cardTitle}>2.3</h3>
            </CardHeader>
            <CardFooter stats>
            </CardFooter>
          </Card>
        </GridItem>
        {/* <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <DonutLarge/>
              </CardIcon>
              <p className={classes.cardCategory}>Measurement type</p>
              <h3 className={classes.cardTitle}>Capacitance</h3>
            </CardHeader>
            <CardFooter stats>
          
            </CardFooter>
          </Card>
        </GridItem> */}
        <GridItem xs={4}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Tonality/>
              </CardIcon>
              <p className={classes.cardCategory}>Oil Classification</p>
              <h3 className={classes.cardTitle}>Pure</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>  
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>

      {/* GRAFICO  */}
      <GridContainer>
        <GridItem xs={12}>
          <Card chart >
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
                style={{ height: "250px", width: "100%", display: "block" }}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Measures</h4>
              <p className={classes.cardCategory}>
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        {/* <GridItem xs={12} sm={6}>
          <Card chart>
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart"
                data={emailsSubscriptionChart.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Email Subscriptions</h4>
              <p className={classes.cardCategory}>Last Campaign Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem> */}
      </GridContainer>

     
      <GridContainer>
        {/* Primeiro form */}
      <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>Search for measurement</h4>
            </CardHeader>
            <CardBody style={{display: "flex", flexDirection: "column", alignItems:"center"}}>

            <Calendar
              onChange={onChange}
              data={data}
            />
            <Button
              color="transparent"
              //color={window.innerWidth > 959 ? "transparent" : "white"}
              justIcon={window.innerWidth > 959}
              simple={!(window.innerWidth > 959)}
              aria-label="Send"
              className={classes.buttonLink}
              onClick={handleclickButtonMeasure}
            >
              <Send/>
            </Button> 

            {inputList.map(item => {
              return(
                <div> {item} </div>
              )
            })}


            </CardBody>
          </Card>
        </GridItem>

        {/* Segundo form */}
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>Request measurement</h4>
            </CardHeader>
            <CardBody>
            <CustomInput
              formControlProps={{
                className: classes.margin + " " + classes.search
              }}
              inputProps={{
                placeholder: "Number of measures",
                inputProps: {
                  "aria-label": "Value"
                },
                onChange: (e) => setInputMeasure(e.target.value),
                value: inputMeasure
              }}
        />
      <Button
        color="transparent"
        //color={window.innerWidth > 959 ? "transparent" : "white"}
        justIcon={window.innerWidth > 959}
        simple={!(window.innerWidth > 959)}
        aria-label="Send"
        className={classes.buttonLink}
        onClick={handleclickButtonMeasure}
      >
        <Send/>
       </Button> 

            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
