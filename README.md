# 🌤️ Weather App

---

## 📌 Features

* 🔍 Search weather by city name
* 🌡️ Display current temperature
* ☁️ Show weather condition (Cloudy, Clear, Rain, etc.)
* 🌤️ Dynamic weather icons
* 🕒 Hourly weather forecast
* 📱 Fully responsive design
* 🎨 Modern glassmorphism UI
* ⚡ Fast data retrieval using Fetch API and Async/Await
* ❌ Basic error handling for invalid city names

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (ES6+)
* OpenWeather API
* Fetch API
* Async/Await

---

## 📂 Project Structure

```
Weather-App/
│
├── index.html
├── style.css
├── script.js
├── images/
│   └── weather icons
└── README.md
```

---

## ⚙️ How It Works

1. Enter the name of a city.
2. Click the **Search** button.
3. The application sends a request to the OpenWeather API.
4. The API returns the current weather information.
5. JavaScript processes the response.
6. The UI updates with:

   * Current temperature
   * Weather condition
   * Weather icon
   * Hourly forecast

---

## 🚀 Installation

1. Clone the repository

```bash
git clone https://github.com/shabab122/weather-app.git
```

2. Open the project folder.

3. Add your OpenWeather API key inside `script.js`.

4. Open `index.html` in your browser.

## 📖 What I Learned

During this project, I gained practical experience with:

* Working with REST APIs
* Fetch API and asynchronous JavaScript
* DOM manipulation
* Responsive web design
* CSS Flexbox
* Glassmorphism UI design
* Error handling
* Organizing frontend projects

## 👨‍💻 Author

**Shabab Ahmed**

Computer Science Undergraduate passionate about Web Development, Problem Solving, and Software Engineering.

Feel free to fork this project, suggest improvements, or contribute.

⭐ If you found this project helpful, don't forget to star the repository.

## Overall Project Flow
                    Start
                      │
                      ▼
            User Opens the Website
                      │
                      ▼
           Enter City Name in Input
                      │
                      ▼
          Click "Search" Button
                      │
                      ▼
        JavaScript Reads User Input
                      │
                      ▼
      Validate Input (Empty or Not?)
             │                 │
             │No               │Yes
             ▼                 ▼
     Show Error Message    Continue
                               │
                               ▼
             Send Request to OpenWeather API
                               │
                               ▼
                  Receive JSON Response
                               │
                               ▼
                 Is City Name Valid?
                  │                 │
                No│                 │Yes
                  ▼                 ▼
       Display Error Message   Extract Weather Data
                                      │
                                      ▼
                  Display Temperature
                                      │
                                      ▼
                Display Weather Details
                                      │
                                      ▼
                Display Weather Icon
                                      │
                                      ▼
               Display Hourly Forecast
                                      │
                                      ▼
                 Update Weather Card UI
                                      │
                                      ▼
                      Wait for Next Search
