import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Badge } from "@material-ui/core";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },

    link: {
        textDecoration: "none",
        color: "#fff",
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
}));

const Navbar = (props) => {
    const classes = useStyles();

    const { buckets } = props.data;

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <Link className={classes.link} to="/">
                        <Typography variant="h6" className={classes.title}>
                            Saulet Yskak - Техническое задание (Somnium)
                        </Typography>
                    </Link>

                    <div>
                        <Link to="/" className={classes.link}>
                            <Button color="inherit">Главная</Button>
                        </Link>

                        <Badge badgeContent={buckets.length} color="primary">
                            <Link to="/bucket" className={classes.link}>
                                <Button color="inherit">Корзина</Button>
                            </Link>
                        </Badge>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

const mapStateToProps = (state) => ({
    data: state.data,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
