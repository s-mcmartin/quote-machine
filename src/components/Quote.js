import Button from "../UI/Button";
import QuoteBox from "../UI/quote-box";
import classes from "./Quote.module.css";
const Quote = (props) => {
  return (
    <QuoteBox>
      <div className={classes.quoteMain}>
        "This is the main quote that will display when new quote is pressed.
        Should I surround this with QuoteBox?"
      </div>
      <p className={classes.author}>-author here</p>
      <Button onClick={props.onClick} />
    </QuoteBox>
  );
};

export default Quote;
