# ↔️ Server Side Palindrome Checker

A web app that checks if a word or phrase is a palindrome (reads the same forwards and backwards, like "racecar"). The word is sent to a Node.js server, which does the check and sends the result back to show on the page.

[![Screenshot-2026-10-04-at-1-59-31-PM.png](https://i.postimg.cc/XYm769Cs/Screenshot-2026-10-04-at-1-59-31-PM.png)](https://postimg.cc/0zGqpMZS)

## How to Run It:

1. Clone this repo
2. In the project folder, run `npm install`
3. Start the server with `node server.js`
4. Open http://localhost:8000 in your browser

## How It's Made:

**Tech used:**

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

Node modules: `http`, `fs`, `url`, `querystring`, and the `figlet` package

**The server:** `server.js` uses Node's `http` module to create a server on port 8000. It checks the path of each request and uses `fs.readFile` to send back the right file: the HTML page, the CSS, the JavaScript, or the background image. Any other path gets a 404 page made with `figlet`, which turns "404!!" into big ASCII-art text.

**The palindrome check (server side):** All the logic happens in the `/api` route. When the user clicks Check, `main.js` sends the word to the server with `fetch` as `/api?word=racecar`. The server reads the word with `querystring`, then:

1. Cleans it up by making it lowercase and removing anything that isn't a letter or number, so "Taco cat!" becomes "tacocat"
2. Reverses it by splitting it into letters, reversing the array, and joining it back together
3. Compares the cleaned word to the reversed one and sets the result to "Palindrome" or "Not a Palindrome"

It sends back a JSON object with the word that was entered and the result.

**The client side:** `main.js` doesn't do any checking. It just sends the word, turns the server's response into an object with `response.json()`, and shows "You entered:" and "Result:" on the page.

**Styling:** Flexbox centers the game on the page over a full-screen background image, with everything inside a rounded, bordered container.

## Optimizations

Things I'd like to improve next:

- Send back a message when the input is empty, instead of saying an empty word is a palindrome
- Let the user press Enter to check, not just click the button
- Keep a list of the words that have been checked

## Lessons Learned:

This project helped the client and server idea really click for me. I built it from the same template as my coin flip project, and seeing that the setup stayed the same while only the logic in `/api` changed showed me how the pieces fit together. The browser only sends the input and shows the answer. The server does the actual work.

I also learned that I was building my own API: a URL that takes input and sends back JSON. And I learned to be careful when renaming variables, because every place that uses the old name has to change too, or the server crashes.
