const SECONDS_IN_EARTH_YEAR = 31557600

const PLANET_YEAR_PER_EARTH_YEAR =  {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1.0,
    mars: 1.8808158 ,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132 
}
const VALID_PLANETS = new Set(Object.keys(PLANET_YEAR_PER_EARTH_YEAR))

const secondsPerYear  = planet =>
    SECONDS_IN_EARTH_YEAR * PLANET_YEAR_PER_EARTH_YEAR[planet]

const round = (n, places=2) =>
    Math.round(n * Math.pow(10, places)) / Math.pow(10, places)

export const age = (planet, seconds) => {
    if(!VALID_PLANETS.has(planet)) throw new Error('invalid planet')

    return round(seconds / secondsPerYear(planet))
}
