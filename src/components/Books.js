import { CardContent, Card, CardActions, Button, Typography, Chip, Box, Grid } from "@material-ui/core";
import React, { Fragment } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { connect } from "react-redux";
import { addToBucket } from "./redux/actions";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    ...theme.main,
}));

const Books = (props) => {
    const classes = useStyles();

    const buyBook = (book) => {
        props.addToBucket(book);
    };

    const { data } = props.data;

    return (
        <Fragment>
            <Grid container justify="center" spacing={2}>
                {data &&
                    data.map((item) => (
                        <Grid item xs={4} key={item.id}>
                            <Card elevation={0} className={classes.card}>
                                <CardContent>
                                    <Typography color="primary" variant="h5">
                                        {item.title}
                                    </Typography>

                                    <Box my={1}>
                                        <Typography variant="body1">{item.author}</Typography>
                                    </Box>

                                    <div style={{ textAlign: "center" }}>
                                        <img src={item.img} alt="Books" className={classes.imgFluid} />
                                    </div>
                                    <Chip label={item.price + " тг"} />
                                </CardContent>
                                <CardActions>
                                    <Button color="primary" onClick={() => buyBook(item)}>
                                        <ShoppingCartIcon style={{ marginRight: 5 }} />
                                        Добавить в корзину
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
            </Grid>
        </Fragment>
    );
};

const mapStateToProps = (state) => ({
    data: state.data,
});

const mapDispatchToProps = {
    addToBucket,
};

export default connect(mapStateToProps, mapDispatchToProps)(Books);
