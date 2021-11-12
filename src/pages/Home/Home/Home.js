import { Button, Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../../shared/Navigation/Navigation';
import HomeBanner from '../HomeBanner/HomeBanner';

const Home = () => {
    const [guitars, setGuitars] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/guitars')
            .then(res => res.json())
            .then(data => {
                setGuitars(data)
            })
    }, [])
    return (
        <div>

            <HomeBanner></HomeBanner>
            <h2>GUITAR'S ARE ON TRENDING</h2>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                    guitars.slice(0, 6).map(guitar =>
                        <Grid item xs={12} md=
                            {6}>
                            <Container >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        '& > :not(style)': {
                                            m: 5,
                                            width: 500,
                                            height: 550,
                                        },
                                    }}
                                >

                                    <Paper elevation={3}>
                                        <img style={{ width: "400px", border: '2px solid gray', marginTop: '10px' }} src={guitar.img} alt="" />
                                        <Typography sx={{ fontWeight: '700' }} variant='h5'>{guitar.guitarName}</Typography>
                                        <Typography variant='h6'>{guitar.speciality}</Typography>
                                        <Typography variant='h5'>$ {guitar.price}</Typography>
                                        <Typography variant='body1'>{guitar.desc}</Typography>
                                        <Link to={`./purchase/${guitar._id}`} style={{ textDecoration: 'none' }}><Button sx={{ mt: 2 }} variant='contained'>Purchase Now</Button></Link>

                                    </Paper>
                                </Box>
                            </Container>
                        </Grid>

                    )
                }
            </Grid>


        </div>
    );
};

export default Home;