# Hangman Game

Welcome to the Hangman Game! This is a classic word-guessing game built with TypeScript. The game is interactive and can be started with a simple shell script.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Starting](#starting)

## Features

- **TypeScript:** The game is fully developed in TypeScript, ensuring type safety and better code organization.
- **Simple Start:** Start the game easily using the provided `start.sh` script.

## Requirements

Before you can start the game, ensure you have the following installed on your system:

- **Node.js** (version 14.x or higher)
- **npm** (Node package manager)

## Starting

Follow these steps to set up the Hangman game on your local machine:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/elizalsmn/Hangman.git
   cd Hangman
   ```
2. copy the line in start.sh one by one, and you'll have your own container with the game in it. Or you can just copy these lines one by one in the hangman directory
    ```bash
   sudo docker run -it --rm -v "$(pwd)":/content -p 0.0.0.0:8080:8080 node bash
   ```

   ```bash
   npm i
   ```

   ```bash
   npm run dev
   ```
4. open `localhost:8080` and start playing

  
