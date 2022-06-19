import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../actions/todo";
import useStyles from "./styles";
import DeleteIcon from "@mui/icons-material/Delete";
function toBase64(arr) {
  //arr = new Uint8Array(arr) if it's an ArrayBuffer
  return btoa(arr.reduce((data, byte) => data + String.fromCharCode(byte), ""));
}
const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const deleteHandler = () => {
    dispatch(deleteTodo(todo._id));
  };
  return (
    <Card className={classes.card}>
      <CardHeader title={todo.title} className={classes.header} />

      <CardMedia
        className={classes.cardMedia}
        component="img"
        alt={`${todo.title}`}
        image={`data:image/png;base64,${toBase64(todo.todoPic.data)}`}
      />
      <CardContent>
        <Typography className={classes.typo}>
          {`${todo.description}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button className={classes.btn} onClick={deleteHandler}>
          <DeleteIcon />
          &nbsp; Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Todo;
