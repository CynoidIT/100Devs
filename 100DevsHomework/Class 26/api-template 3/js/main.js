fetch('https://api.ipify.org/?format=json')
    .then(response => response.json()
    )
    .then(data => fetch('https://api.techniknews.net/ipgeo/' + data.ip)
    )
    .then(response => response.json()
    )
    //.then(data => document.getElementById('location').innerText = data.city)
    .then(data => fetch(`https://api.open-meteo.com/v1/forecast?latitude=${data.lat}&longitude=${data.lon}&hourly=temperature_2m&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch`)
    )
    
    .then(response => response.json()
    )
    .then(data => {
      console.log(data)
      document.getElementById('temperature').innerText = data.current_weather.temperature
    })
 