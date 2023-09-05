//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector('button').addEventListener('click',picOfDay)

function picOfDay(){
    let date = Number(document.querySelector('input').value)

    fetch(`https://api.nasa.gov/planetary/apod?date = ${date}`)
    .then(res => res.json())
    .then(data =>{
        console.log(data.date)
        document.querySelector('h2').innerText = data.date

        // document.querySelector('img').src = data.url
    })
    .then(err =>{
        console.log(`error ${err}`)
    })

}
