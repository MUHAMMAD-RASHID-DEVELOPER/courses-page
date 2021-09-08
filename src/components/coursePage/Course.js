import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useState } from "react";
import Search from "search-react-input";
import UseBar from "../searchBar/UseBar"
// import Img from "../../assets/naveedsarwar.jpg"
// import Bar from "../searchBar/Bar"
import Bar from "../searchBar/Bar"






const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

// special logics
// var a = capturedSearch;
// import React from "react";







 export default function RecipeReviewCard() {
  // const a = capturedSearch;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);



  };
  const [setCapturedSearch ,capturedSearch, courses] = useState();
// const a = capturedSearch && capturedSearch;
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>


<h1>
          {/* {capturedSearch && "Hello and welcome to " + capturedSearch.label+" "+"Course"} */}
        </h1>
      <Card className={classes.root}>
        <CardHeader
        
          avatar={
            <Avatar style={{color:"white"}} aria-label="recipe" className={classes.avatar}
            >
            {/* <img src={Img}/>
            <img src={Img}/> */}
          T
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          
          title= {capturedSearch && capturedSearch}
          subheader="Naveed Sarwar"
        />
         <div><h1>{capturedSearch && capturedSearch.label}</h1></div>
        <CardMedia
          className={classes.media}
          image="data:image/jpeg;base64,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"
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
          {/* {the things that will come form} */}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>More Information:</Typography>
            <Typography paragraph>
              {/* write what comes from the other file */}
            </Typography>
            <Typography paragraph>
              As the rise of technology and the reliance on smartphones continues to advance, more job opportunities have been created in website and mobile application development.

              Now, Vancouver Career College is offering a Web and Mobile Application Development diploma program designed to prepare students for careers in computer, mobile, web, and application development.

              Learn concepts of application design; write, modify, and integrate software code in a variety of programming languages; build iOS and Android applications; create and optimize content for web and mobile applications, and more.

              In just 60 weeks, you will be fully versed in JavaScript, JQuery, Python, Swift, Linux operating system, HTML5, CSS3, and more, and be prepared to work in a variety of different software development firms, information technology consulting firms, or information technology units within public and private companies.
            </Typography>
            <Typography paragraph>
              Admission Requirements

              High school graduation or equivalent* OR mature student status**.

              *From an English language teaching institution.
              **19 years of age upon starting classes, and pass college’s admissions test.

              This program has been approved by the registrar of the Private Training Institutions Branch (PTIB) of the Ministry of Advanced Education, Skills and Training.


              This program is 60 weeks in length.
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then serve.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}








