let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");

const url = "https://api.api-ninjas.com/v1/quotes";
const apiKey = "9hITuBiaCfa4h25as0ZXxA==xyfjnxjwDVP1nKRo";

let getQuote = async () => {
  try {
    let response = await fetch(url, {
      method: "GET",
      headers: {
        "X-Api-Key": apiKey,
      },
    });

    let data = await response.json();

    if (data.length > 0) {
      let fullQuote = data[0].quote;
      let maxWords = 30; // Limit to approximately 3 lines

      let shortenedQuote =
        fullQuote.split(" ").length > maxWords
          ? fullQuote.split(" ").slice(0, maxWords).join(" ") + "..."
          : fullQuote;

      quote.innerText = shortenedQuote;
      author.innerText = `- ${data[0].author}`;
    } else {
      quote.innerText = "No quote available.";
      author.innerText = "";
    }
  } catch (error) {
    console.error("Error fetching quote:", error);
    quote.innerText = "Failed to fetch quote.";
    author.innerText = "";
  }
};

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);
