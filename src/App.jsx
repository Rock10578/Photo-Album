import React from "react";
import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import useStyles from "./styles";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const App = () => {
    const classes = useStyles();
    return(
        <>
            <CssBaseline/>
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera className={classes.icon}/>
                    <Typography varient='h6'>
                        Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container}>
                    <Container maxWidth="sm" style={{ marginTop: '5px' }}>
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography varient="h5" align="center" color="textSecondary" paragraph>
                            Hello Everyone This is a photo Album you can add as many as photo you want. You can access this photo album from anywhere and anytime you want. Join Us to save your pics online in cloud.
                        </Typography>
                        <div className={classes.buttons}>
                            <Grid container spacing={2} justifyContent="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        See my photos
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="secondary">
                                        Secondary Action
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxwidth="md">
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia 
                                    className={classes.cardMedia}
                                    image="https://source.unsplash.com/random"
                                    title="Image title"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom varient="h5">
                                        Heading
                                    </Typography>
                                    <Typography>
                                        This is a media card, You can use this section to describe the content
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">view</Button>
                                    <Button size="small" color="primary">edit</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography varient='subtitle1' align="center" color="textSecondary">
                    Something here to give footer a purpose
                </Typography>
            </footer>
        </>
    );
}

export default App;