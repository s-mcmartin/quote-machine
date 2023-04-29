import "./App.css";
import Quote from "./components/Quote";

function App() {
  const newQuoteHandler = (event) => {
    event.preventDefault();
    const url = "https://quotes15.p.rapidapi.com/quotes/random/";

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "f061c870a0mshdf12dc96eb1dd03p184abejsn0d8a347d010d",
        "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((err) => console.error("error:" + err));
  };
    return <Quote onClick={newQuoteHandler} />;
  
}

export default App;
