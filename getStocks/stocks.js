const https = require("https");

async function getStockInformation(date) {
  // API endpoint: https://jsonmock.hackerrank.com/api/stocks?date=<date>

  let dateToPass = new Date("");
  https
    .get(
      "https://jsonmock.hackerrank.com/api/stocks?date=5-January-2000",
      (response) => {
        console.log(response);

        response.on("data", (data) => {
          console.log(data);
        });
      }
    )
    .on("error", (error) => {
      console.error(error);
    });
}

console.log(getStockInformation("5-January-2000"));