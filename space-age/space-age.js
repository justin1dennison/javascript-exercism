const secondsPerYear  = planet => {
    const earth = 31557600
    switch(planet) {
    case 'mercury':
        return 0.2408467 * earth
    case 'venus':
        return 0.61519726 * earth
    case 'mars':
        return 1.8808158 * earth
    case 'jupiter':
        return 11.862615 * earth
    case 'saturn':
        return 29.447498 * earth
    case 'uranus':
        return 84.016846 * earth
    case 'neptune':
        return 164.79132 * earth
    default:
        return earth
    }
}
const round = (n, places=2) =>
      Math.round(n * Math.pow(10, places)) / Math.pow(10, places)
export const age = (planet, seconds) => round(seconds / secondsPerYear(planet))
