# ClearStartBeta
A momentum chrome extension clone that I will eventually add upon and build out for more personal customization
___
## What is ClearStartBeta?


This project was developed for the final work on CS50.

It's starting basis was to become a clone of the popular producitivity chrome extension called: Momentum.

I found flaws or critiques I wanted to adjust about the extension and decided to emulate the idea rather than recreate it one-to-one.

## What to expect when installing the extension

Once the extension is installed from the [Web Store](https://chrome.google.com/webstore/category/extensions)

1. From the web store use the search bar to search "ClearStart Beta"
2. Enable/Install the extension

The initial opening of the extension will interact with an installation script `setup.js` which will go through the setup process.

### Greeting Modal
You'll be welcomed by the `modal` and be asked to select a desired theme, input your name, and be given a brief walk around of the clean tab look.
ClearStart Beta overrides the new-tab through the `manifest.json` so that every new tab opened, and even startup, will show you a personalized, productivity driven
starting space.
