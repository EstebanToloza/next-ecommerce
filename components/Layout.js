import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import Head from 'next/head';
import React from 'react';

const Layout = ({children}) => {
    const date = new Date().getFullYear();

    return (
        <div>
            <Head>
                <title>Next ecommerce</title>
            </Head>
            <AppBar position='static'>
                <Toolbar>
                    <Typography>Next Ecommerce</Typography>
                </Toolbar>
            </AppBar>
            <Container>
                {children}
            </Container>
            <footer>
                <Typography>
                    &copy; {`All rights reserved. Next Eccommerce. ${date}`}
                </Typography>
            </footer>
        </div>
    )
}

export default Layout
