import React from "react";

import {Typography, AppBar, Button, Card, CardActions, CardContent, CssBaseline, Grid, Toolbar, Container, CardMedia} from '@mui/material';
import { PhotoCamera } from "@mui/icons-material";

import useStyles from './styles';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export function PhotoAlbum () {

    const classes = useStyles();


    return(
        <>
        <CssBaseline/>
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera className={classes.icon}/>
                    <Typography variant='h6'>
                        Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container}>
                    <Container maxWidth="sm">
                        <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
                            Optical illusion photos
                        </Typography>
                        <Typography variant='h5' align='center' color='textSecondary' paragraph>
                            'Cause why the fuck not!
                        </Typography>
                        <div className={classes.button}>
                            <Grid container spacing={2} justifyContent='center'>
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        See my photos
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        Secondary action
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                    {cards.map((card) => (
                       <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia 
                                    className={classes.cardMedia}
                                    //image="http://source.unsplash.com/random"
                                    image="images/Optical-illusion-1.png"
                                    title="Image title"
                                />
                                    
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5">
                                        Heading
                                    </Typography>
                                    <Typography>
                                        This is a media card. You can use this section to describe the content
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">View</Button>
                                    <Button size="small" color="primary">Edit</Button>
                                </CardActions>
                            </Card>
                        </Grid> 
                    ))}             
                    </Grid>
                </Container>
            </main>
            <footer className={classes.footer}>
                <Typography variant='h6' align="center" gutterBottom>
                    Contact Me!
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary">
                    akiva147@gmil.com        @akiva.levi          0545606801 
                </Typography>
            </footer>
            

        </>
    );
}

export default PhotoAlbum;