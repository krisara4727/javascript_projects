setInterval(setClock2,1000)
const hourHand2 = document.querySelector('[data-hour-hand2]')
const minuteHand2 = document.querySelector('[data-minute-hand2]')
const secondHand2 = document.querySelector('[data-second-hand2]')

function setClock2() {
  var aestTime = new Date().toLocaleString("en-US", {timeZone: "Australia/Brisbane"})
  const currentDate = new Date(aestTime)
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(secondHand2, secondsRatio)
  setRotation(minuteHand2, minutesRatio)
  setRotation(hourHand2, hoursRatio)

}
function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock2()
