const hourEl = document.getElementById("hour")
const minuteEl = document.getElementById("minute")
const secondEl = document.getElementById("second")
var rand =  [
    "url(https://images.unsplash.com/photo-1655635643617-72e0b62b9278?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80)",
    "url(https://images.unsplash.com/photo-1655635949212-1d8f4f103ea1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80)",
    "url(https://images.unsplash.com/photo-1655635643532-fa9ba2648cbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80)"
]

function clockUpdate() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    hourEl.innerHTML = h < 10 ? "0" + h: h
    minuteEl.innerHTML = m < 10 ? "0" + m : m
    secondEl.innerHTML = s < 10? "0" + s : s
    setTimeout(clockUpdate, 1000)
}    

clockUpdate()


function changeBk(){
    console.log("clicked")
    var randomEl = rand[Math.floor(Math.random() * rand.length)]
    document.body.style.backgroundImage = randomEl

}