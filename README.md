# stock-symbol-price-viewer
A simple stock price viewer using HTML, CSS, JS, and a free stock API
# 📈 Stock Price Viewer

A simple and clean web app that lets users check **live stock prices** by just entering the US stock symbol (like `AAPL` for Apple). Built with **HTML**, **CSS**, and **JS**, this project fetches real-time data from the **Finnhub**.

---

## 🌟 Features

- 🔍 Enter any US stock symbol and fetch its **current price**
- 🧠 Handles errors like invalid symbols or missing data
- ✨ Simple, clean, and responsive UI
- 🔄 Smooth experience with loading feedback

---

## 🧪 Demo

[👉 Click here to view the live site on Netlify](https://radiant-bienenstitch-9bb6ba.netlify.app)

---

## 🚀 How It Works

1. User types a valid **stock symbol** (like `AAPL`, `TSLA`, `GOOGL`).
2. The app calls the **Finnhub**.
3. It fetches and displays:
   - Current price
   - Optional: High, low, open, previous close (based on API)
4. If an invalid symbol is entered, it shows a helpful error message.

---

## 🛠 Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript 
- **API**: [Finnhub]((https://finnhub.io)) (Free API for real-time stock data)

---

## 📌 How to Use Locally

```bash
1. Clone the repository
2. Open `index.html` in your browser
