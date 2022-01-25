import { AppBar, Container, createTheme, CssBaseline, Link, Switch, ThemeProvider, Toolbar, Typography, Badge } from '@material-ui/core';
import Head from 'next/head';
import NextLink from 'next/link';
import React, { useContext } from 'react';
import useStyles from '../utils/utils';
import { Store } from '../utils/Store';
import Cookies from 'js-cookie';

const Layout = ({title, description, children}) => {
    const {state, dispatch} = useContext(Store);
    const {darkMode, cart} = state;

    console.log(darkMode)

    const theme = createTheme({
        typography: {
            h1: {
                fontSize: '1.6rem',
                fontWeight: 400,
                margin: '1rem 0',
            },
            h2: {
                fontSize: '1.4rem',
                fontWeight: 400,
                margin: '1rem 0'
            },
            body1: {
                fontWeight: 'normal'
            }
        },
        palette: {
            mode: darkMode ? 'dark' : 'light',
            primary: {
                main: '#f0c000'
            },
            secondary: {
                main: '#208080'
            }
        }
    });
    const date = new Date().getFullYear();
    const classes = useStyles();

    // const handleDarkMode = () => {
    //     dispatch({type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON'});
    //     const newDarkMode = !darkMode;

    //     Cookies.set('darkMode', newDarkMode ? 'ON' : 'OFF')
    // }

    return (
        <div>
            <Head>
                <title>{title? `${title} - Next ecommerce` : 'Next ecommerce'}</title>
                {description && <meta name="description" content={description} />}
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppBar position='static' className={classes.navBar}> 
                    <Toolbar>
                        <NextLink href='/' passHref>
                            <Link>
                                <Typography className={classes.brand}>Next Ecommerce</Typography>
                            </Link>
                        </NextLink>
                        <div className={classes.grow}></div>
                        <div>
                            {/* <Switch checked={darkMode} onChange={handleDarkMode}></Switch> NOT WORKING */}
                            <NextLink href="/cart" passHref>
                                <Link>
                                    {cart.cartItems.length > 0 ? (
                                        <Badge
                                        color="secondary"
                                        badgeContent={cart.cartItems.length}
                                        >
                                        Cart
                                        </Badge>
                                    ) : (
                                        'Cart'
                                    )}
                                </Link>
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
            </ThemeProvider>
        </div>
    )
}

export default Layout
