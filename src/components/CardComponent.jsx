import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import CartComponent from './CartComponent';

const CardComponent = ({title,price,rating,category,brand,desc}) => {
const [show1,setShow1] = React.useState(false)
  const [show2,setShow2] = React.useState(false)
  return (
    <Card sx={{ maxWidth: 300,marginBottom:"2%"  }}>
      <Stack direction="row" spacing={2}>
      <CardMedia sx={{  width :"30%" }}
        className='imagem'
        component="img"
        alt="Product Image"
        height="140"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDimSCVz_yVvf4ih1sbq_WP9BB1tCTKWQffA&usqp=CAU"
      />
      <CardContent sx={{ maxWidth: 200,marginBottom:"2%" }} className='cardAdjustment'>
        <Typography  variant="h8" component="div" >
        {title}
        </Typography>
        <Rating name="size-small" defaultValue={rating} size="small"  readOnly/>
        <br/>
        <span>Description</span>
        <span onClick={()=>{setShow1(!show1) 
                            }}>{show1?<ExpandMoreIcon/>:<ExpandLessIcon/>}</span>
        {show1 && <Typography className='typog' variant="body2" color="text.secondary">
          {desc}
        </Typography>}
        <div className='dsp' >
            <span>Details</span>
            <span onClick={()=>setShow2(!show2)}>{show2?<ExpandMoreIcon/>:<ExpandLessIcon />}</span>
            {show2 && <Typography className='typog2' variant="body2" color="text.secondary">
            Category : {category} ,
            Brand : {brand}
            </Typography>}
        </div>
      </CardContent>
      </Stack>
      <CardActions>
      <Stack direction="row" spacing={18} className='adjustment'>
      <Typography>
          Rs.{price}
      </Typography>
      <CartComponent price={price}/>
      </Stack> 
      </CardActions>
      {/* <CardActions>
      <Stack direction="row" spacing={18} className='adjustment'>
      <h4>Total</h4>
      <h3>Rs.{total[0]}</h3>
      </Stack>
      </CardActions> */}
    </Card>
  )
}

export default CardComponent