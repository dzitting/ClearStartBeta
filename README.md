# ClearStartBeta
A momentum chrome extension clone that I will eventually add upon and build out for more personal customization
___
## What is ClearStartBeta?


This project was developed for the final work on CS50.

It's starting basis was to become a clone of the popular producitivity chrome extension called: [Momentum](https://chrome.google.com/webstore/detail/momentum/laookkfknpbbblfpciffpaejjkokdgca).

I found flaws or critiques I wanted to adjust about the extension and decided to emulate the idea rather than recreate it one-to-one.

## What to expect when installing the extension

Once the extension is installed from the [Web Store](https://chrome.google.com/webstore/category/extensions)

1. From the web store use the search bar to search "ClearStartBeta"
2. Enable/Install the extension by pressing "Add to Chrome"
3. Open a newtab to begin setup

The initial opening of the extension will interact with an installation script `setup-config.js` and `setup.js` which will go through the setup process.

### Greeting Modal
You'll be welcomed by the `modal` and be asked to select a desired theme, input your name, zipcode, and be given brief directions to complete setup.
ClearStart Beta overrides the new-tab through the `manifest.json` so that every new tab opened, and even startup, will show you a personalized, productivity driven
starting space.

### Privacy Expectations/Usage/Data Collection
Per the `privacy policy` document, any data provided by the user is not collected or stored by developer. All the information provided by the user is stored locally on their device in `localStorage` for the extension to call to with future usage so as to prevent the user from reentering their information. 

For example, when the user completes setup, the final "continue" button triggers a flag `localStorage.setupComplete` to be set to true, and it is stored locally. This prevents the user from experiencing another setup modal.
