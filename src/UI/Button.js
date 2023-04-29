import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <div>
      <button onClick={props.onClick} type="submit" className={classes.button}>
        New quote
      </button>
    </div>
  );
};

export default Button;
