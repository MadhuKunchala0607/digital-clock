function refresh(){
    var date=new Date()
var time=document.getElementById("time")
var day=document.getElementById("date")

let hours=date.getHours()
let min=date.getMinutes()
let sec=date.getSeconds()


time.innerText=`${hours}:${min}:${sec}`
day.innerText=date.toDateString()
}
refresh()

setInterval(refresh,1000)
