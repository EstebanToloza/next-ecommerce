import { AppBar, Container, Link, Toolbar, Typography } from '@material-ui/core';
import Head from 'next/head';
import NextLink from 'next/link';
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
                    <NextLink href='/' passHref>
                        <Link>
                            <Typography className={classes.brand}>Next Ecommerce</Typography>
                        </Link>
                    </NextLink>
                    <div className={classes.grow}></div>
                    <div>
                        <NextLink href="/cart" passHref>
                            <Link>Cart</Link>
                        </NextLink>
                        <NextLink href="/login" passHref>
                            <Link>Login</Link>
                        </NextLink>
                    </div>
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
