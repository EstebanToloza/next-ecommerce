import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import Head from 'next/head';
import React from 'react';
import useStyles from '../utils/utils';

const Layout = ({children}) => {
    const date = new Date().getFullYear();

    const classes = useStyles();

    return (
        <div>
            <Head>
                <title>Next ecommerce</title>
            </Head>
            <AppBar position='static' className={classes.navBar}>
                <Toolbar>
                    <Typography>Next Ecommerce</Typography>
                </Toolbar>
            </AppBar>
            <Container className={classes.main}>
                {children}
            </Container>
            <footer className={classes.footer}>
                <Typography>
                    &copy; {`All rights reserved. Next Eccommerce. ${date}`}
                </Typography>
            </footer>
        </div>
    )
}

export default Layout
