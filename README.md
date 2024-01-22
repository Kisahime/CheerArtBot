# CheerArtBot: DALL-E-3 Driven Image Generation for Twitch Cheers

## Overview
CheerArtBot is an innovative Twitch chat bot that utilizes OpenAI's DALL-E-3 to transform cheer messages into unique images. This bot enhances Twitch streamer-audience interaction by converting bits into creative visual art.

## Prerequisites
Before installing CheerArtBot, make sure you have Node.js installed on your system.

### Installing Node.js
- **Windows:**
  - Download the installer from [Node.js website](https://nodejs.org/).
  - Run the installer and follow the setup wizard.

- **macOS:**
  - Install Node.js via Homebrew:
    ```bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    brew install node
    ```

- **Linux:**
  - For Ubuntu, use:
    ```bash
    sudo apt update
    sudo apt install nodejs npm
    ```

## Installation
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Kisahime/CheerArtBot.git
   cd CheerArtBot
2. **Run Install Script:**
   - On Windows, run the provided batch file to install dependencies:
     ```bash
     install.bat

## Configuration
To configure CheerArtBot for your Twitch channel, follow these steps:
- Create a .env file in the root directory of the project.
- Add the following configurations to the .env file, replacing placeholders with your actual data:
  ```bash
  TWITCH_USERNAME=your_twitch_username
  TWITCH_OAUTH_TOKEN=your_oauth_token
  TWITCH_CHANNEL=your_twitch_channel
  OPENAI_API_KEY=your_openai_api_key
  ```
  - TWITCH_USERNAME: Your Twitch bot's username.
  - TWITCH_OAUTH_TOKEN: OAuth token for Twitch authentication. Generate one from Twitch Chat OAuth Password Generator.
  - TWITCH_CHANNEL: Name of the Twitch channel where the bot will operate.
  - OPENAI_API_KEY: Your OpenAI API key for accessing DALL-E-3.

## Usage
- To start CheerArtBot, run the following command in the terminal:
  ```bash
  node server.js
  ```

## License
This project is licensed under the MIT License - see the LICENSE file for details.
