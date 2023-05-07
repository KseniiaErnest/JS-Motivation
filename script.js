'use strict'

const btn = document.querySelector('#btn');
const par = document.querySelector('#par');

const quotes = [
  `"The only way to do great work is to love what you do." - Steve Jobs`,
  `"Believe you can and you're halfway there." - Theodore Roosevelt`,
  `"Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill`,
  `"The greatest glory in living lies not in never falling, but in rising every time we fall." - Nelson Mandela`,
  `"Don't watch the clock; do what it does. Keep going." - Sam Levenson`,
  `"I can't change the direction of the wind, but I can adjust my sails to always reach my destination." - Jimmy Dean`,
  `"Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle." - Christian D. Larson`,
  `"You don't have to be great to start, but you have to start to be great." - Zig Ziglar`,
  `"If you can dream it, you can achieve it." - Zig Ziglar`,
  `"The future belongs to those who believe in the beauty of their dreams." - Eleanor Roosevelt`
  
]

btn.addEventListener('click', () => {
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  par.style.display = 'block';
  par.textContent = randomQuote;
})