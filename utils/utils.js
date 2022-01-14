import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    navBar: {
        backgroundColor: "#203040",
        '& a': {
            color: "#fff",
            marginLeft: 10
        },
    },
    brand: {
        fontWeight: 'bold',
        fontSize: '1.5rem'
    },
    grow: {
        flexGrow: 1
    },
    main: {
        minHeight: '80vh'
    }, 
    footer: {
        textAlign: 'center'
    }
});

export default useStyles;