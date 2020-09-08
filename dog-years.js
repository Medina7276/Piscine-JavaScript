const planets = {
    earth: 1,
    mercury: 0.2408467,
    venus: 0.61519726,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
}
let year = 31557600;
function dogYears(planet, dogsAge) {
    dogsAge = dogsAge / year
    let period = planets[planet]
    dogsAge = dogsAge / period * 7
    return Math.round(dogsAge * 100) / 100;
}
// console.log(dogYears('earth', 1000000000))