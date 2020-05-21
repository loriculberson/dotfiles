#!/usr/bin/env node

const options = [
  "Yes Queen!", 
  "Yabba dabba dooo!",
  "Texas loves you",
  "You are an IRONMAN!",
  "I'm too sexy for this terminal",
  "You look marvelous!",
  "Kick ass!",
  "We need more power!",
  "There's no crying in baseball!",
  "A hug is always the right size."
]

function getGreeting(greetings) {
  const randNum = Math.floor(Math.random() * (10)); 
  console.log(greetings[randNum])
}

getGreeting(options)
