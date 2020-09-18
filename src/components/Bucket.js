import React, { Fragment } from "react";
import { CardContent, Card, Button, Typography, Chip, Box, Grid } from "@material-ui/core";
import { connect } from "react-redux";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import { clearBucket } from "./redux/actions";
const useStyles = makeStyles((theme) => ({
    ...theme.main,
}));

const Bucket = (props) => {
    const classes = useStyles();

    const { buckets } = props.data;

    const sum = buckets.reduce((a, b) => +a + +parseInt(b.price), 0);

    return (
        <Fragment>
            <Grid container justify="center" spacing={2}>
                <Grid item xs={12}>
                    {buckets.length > 0 && (
                        <Fragment>
                            <Typography variant="h6" color="primary">
                                <AttachMoneyIcon color="primary" style={{ marginRight: 5 }} />
                                Общая сумма: {sum}
                            </Typography>
                            <Box my={1}>
                                <Typography variant="body2" color="primary">
                                    Количество книг: {buckets.length}
                                </Typography>
                            </Box>

                            <Button variant="contained" color="primary" size="small" onClick={props.clearBucket}>
                                Очистить Корзину
                            </Button>
                        </Fragment>
                    )}
                </Grid>
                {buckets &&
                    buckets.map((item) => (
                        <Grid item xs={12} key={item.id}>
                            <Card elevation={0} className={classes.card}>
                                <CardContent>
                                    <Typography color="primary" variant="h5">
                                        {item.title}
                                    </Typography>

                                    <Box my={1}>
                                        <Typography variant="body1">{item.author}</Typography>
                                    </Box>

                                    <Chip label={item.price + " тг"} />
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                {buckets.length === 0 && (
                    <Grid item xs={12}>
                        <Alert severity="info">Ваша Корзина Пуста! Добавьте книгу</Alert>
                    </Grid>
                )}
            </Grid>
        </Fragment>
    );
};

const mapStateToProps = (state) => ({
    data: state.data,
});

const mapDispatchToProps = {
    clearBucket,
};

export default connect(mapStateToProps, mapDispatchToProps)(Bucket);
