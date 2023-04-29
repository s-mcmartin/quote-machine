import classes from "./quote-box.module.css";

const QuoteBox = (props) => {
  return (
    <div id="quote-box" className={classes.quoteBox}>
      {props.children}
    </div>
  );
};

export default QuoteBox;
