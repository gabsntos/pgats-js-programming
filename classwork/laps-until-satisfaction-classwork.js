/**
 * 
 */

pitchLaps = 0
dogSatisfaction = Boolean

while (pitchLaps <= 5) {
    pitchLaps > 5 ? dogSatisfaction = true : dogSatisfaction = false
    console.log(`dog is running... Lap number ${pitchLaps}`)
    pitchLaps++
}

dogSatisfaction = true ? console.log(`dog is done running`) : console.log('!@#$%errorI:Ç]')