#!/bin/bash

# create array of phrases
# set variable for random one selected
# echo variable

greetings=("Have a fantastic day!" "Hello gorgeous!" "What are you coding today?" "Let’s have some fun!" "Have I told you how much I love you?" "You look marvelous!" "Good morning sunshine!")
FLOOR=1;
CEILING=7

result=$(jot -r 1 $FLOOR $CEILING)
greeting=${greetings[result]}
# echo "greeting"
echo greeting

