var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var discrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
apik ="fd87ad518d63e6479dede57421acb20e"
function convertion(val)
{
    return (val - 273).toFixed(3)
}

btn.addEventListener('click', function() 
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
    .then(res => res.json())

    .then(data => 
    {
        var nameval = data['name']
        var descrip = data['weather']['0']['description']
        var temerpature = data['main']['temp']
        var windspeed = data['wind']['speed']


        city.innerHTML='weather of <span>${nameva1}<span> '
        temp.innerHTML = 'Temperature: <span>${ convertion(temperature)} c</sapn>'
        description.innerHTML = 'sky conditon: <span>${decription}<span>'
        wind.innerHTML = 'wind speed: <span>${windspeed} km/h<span>'

    })  
    
    
    .catch(err => alert('you entered wrong city name'))
})