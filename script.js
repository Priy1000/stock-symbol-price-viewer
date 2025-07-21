// uses finnhub to fetch stock symbol data
async function getStockData() {
    const symbol = document.getElementById("symbol").value.toUpperCase();
    const apiKey = "<enter your api key here>";  
    const url = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apiKey}`;

    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "Fetching data...";

    // error handling using try catch
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (!data.c || data.c === 0) {
            outputDiv.innerHTML = "Invalid symbol or data not available.";
            return;
        }

        outputDiv.innerHTML = `
            <h3>${symbol} Current Price: $${data.c}</h3>
            <p>High: $${data.h}</p>
            <p>Low: $${data.l}</p>
            <p>Open: $${data.o}</p>
            <p>Previous Close: $${data.pc}</p>
        `;
    } catch (error) {
        outputDiv.innerHTML = "Error fetching data. Please try again later.";
    }
}


 
