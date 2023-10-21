import React, { useEffect, useState } from 'react'
import ResponsiveAppBar from '../NavbarComponent'
import axios from 'axios'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width:340
    }));

const Products = () => {

    const [Data,setData] = useState([])

    useEffect(()=>{

        axios.get("https://dummyjson.com/products")
        .then(res => setData(res.data.products))
        .catch(error => {
            console.error("Error fetching data:", error);
        });


    },[])

    return (
        <div>
            <ResponsiveAppBar/>
            <Box sx={{ flexGrow: 1 ,m:2}}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {Data.map((item, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
                <Item>
            <Card sx={{ maxWidth: 340 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={item.images[0]}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {`$ ${item.price}`}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant='contained'  sx={{marginRight:"80px"}}>More Details</Button>
                <Button size="small" variant='contained'>Add to cart</Button>
            </CardActions>
            </Card>
                </Item>
            </Grid>
            ))}
        </Grid>
        </Box>
        
        </div>
    )
}

export default Products
