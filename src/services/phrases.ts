import { phrases } from '../data'

export function getRandomPhrase(){
  return phrases[Math.floor(Math.random() * phrases.length)]; 
}