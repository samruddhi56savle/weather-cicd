async function getWeather() {
  const city = document.getElementById("city").value;

  const apiKey = "24cfaf621fb0b47e6c213346177d8cf8"; // replace this
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      document.getElementById("result").innerHTML = `
        <h2>${data.name}</h2>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Condition: ${data.weather[0].main}</p>
      `;
    } else {
      document.getElementById("result").innerHTML = "City not found!";
    }
  } catch (error) {
    document.getElementById("result").innerHTML = "Error fetching data";
  }
}
