//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector('button').addEventListener('click',picOfDay)

function picOfDay(){
    let nasa = Number(document.querySelector('input').value)

    fetch(`https://api.nasa.gov/planetary/apod?api_key= nasa`)
    .then(res => res.json())
    .then(data =>{
        console.log(data.nasa)
        document.querySelector('h2').innerText = data.nasa

        document.querySelector('img').src = data.url
    })
    .then(err =>{
        console.log(`error ${err}`)
    })

}
//2023-03-04
