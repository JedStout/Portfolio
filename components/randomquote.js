window.addEventListener('load', function () {
    getQuote()
  })

const quote_url = 'https://favqs.com/api/qotd';
const getQuote = async () => {
    const response = await fetch(quote_url);
    const data = await response.json();
    console.log(data);
    return data;
  };

const quote = [{
    author: "Jed Stout",
    words: "This is a test!"
}]
