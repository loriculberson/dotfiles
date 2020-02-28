#!/usr/bin/env node

const options = [
  "Yes Queen!", 
  "Yabba dabba dooo!",
  "Texas loves you",
  "You are an IRONMAN!"
]

function getGreeting(greetings) {
  const randNum = Math.floor(Math.random() * (4)) + 0; //The maximum is inclusive and the minimum is inclusive 
  console.log(greetings[randNum])
}

getGreeting(options)
