import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

export default function Video_cards() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 , backgroundColor:'#383838', color:'white'}}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon sx={{color:'white'}}/>
          </IconButton>
        }
        title="Insert Title Here "
        subheader="Published: September 14, 2016"
        sx={{color:'white'}}
        subheaderTypographyProps={{ style: { color: 'white' } }}  


      />
      <CardMedia
        component="img"
        height="194"
        image="/images/image.png"
        alt="Insert Image here "
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'white' }}>
          Insert Description here
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
   
       
        <ExpandMore
        sx={{color:'white'}}
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        
          <Typography sx={{ marginBottom: 2 , color:'white'}}>
              Students Assigned To:
          
          </Typography>
         
       
        </CardContent>
      </Collapse>
    </Card>
  );
}