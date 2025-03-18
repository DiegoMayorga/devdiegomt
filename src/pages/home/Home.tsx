import { useEffect, useState } from "react";
import classes from "./Home.module.scss";

export default function HomePage() {
  const [dailyQuote, setDailyQuote] = useState({
    quote: "",
    author: "",
  });

  useEffect(() => {
    async function fetchDailyPhrase() {
      const url = "https://api.api-ninjas.com/v1/quotes";
      const response = await fetch(url, {
        headers: {
          "X-Api-Key": "DP6vpE9kshUe3rAzkwxabg==5BiIqc0jG8oiNGnC",
          "Content-Type": "application/json",
        },
      });
      const resData = await response.json();
      setDailyQuote(resData[0]);
    }

    fetchDailyPhrase();
  }, []);

  return (
    <section>
      <h1 className={classes.title}>Home</h1>
      <p>{dailyQuote.quote} - {dailyQuote.author}</p>
      <div className={classes.profile}></div>
    </section>
  );
}
