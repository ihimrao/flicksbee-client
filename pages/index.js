import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
// import makeStyles from '@material-ui/styles/makeStyles'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { decrement, increment } from "../src/actions";
import styles from "./index.style";
const useStyles = makeStyles(styles);

const Index = ({ value, from, action, actions: { increment, decrement } }) => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.card}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Dispatched from <b>{from}</b>
          </Typography>
          <Typography variant="h3" component="h2">
            {"value"}
          </Typography>
          <Typography color="textSecondary">{action}</Typography>
        </CardContent>
        <CardActions>
          <Fab variant="round" color="primary" size="small" onClick={() => {}}>
            <AddIcon />
          </Fab>
          <Fab
            variant="round"
            color="secondary"
            size="small"
            onClick={() => decrement()}
          >
            <RemoveIcon />
          </Fab>
        </CardActions>
      </Card>
    </>
  );
};

export default connect(
  (state) => state,
  (dispatch) => ({
    actions: bindActionCreators({ increment, decrement }, dispatch),
  })
)(Index);
