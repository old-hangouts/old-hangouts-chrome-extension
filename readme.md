# Old Hangouts Chrome extension

## Description
Revert back to the old hangouts extension (with floating window chat) <br/>
The old hangouts chrome extension is not working since the 2nd of November but we are trying to fix it (and feel free to contribute).

## Workarounds (with the new chrome extension)
1. Install the new chrome app/extension - https://chrome.google.com/webstore/detail/google-hangouts/knipolnnllmklapflnccelgolnpehhpl
2. Click on the menu (3 bars next to your name)
3. In the settings menu, scroll down to the "Hangouts App Settings" section.
4. Enable "Always on top"
5. Use the arrow to open a conversation in a seperate window

## Solution (not working since the 2nd of November 2016)
You can always fork this repository and do the following tutorial if you want to try to solve the issue.

### Screenshot
![Alt text](screenshots/chrome.png "Old chrome extension")

### Important update
The [Chrome team has confirmed](https://bugs.chromium.org/p/chromium/issues/detail?id=467808) that starting from Chrome version 54 and above panels will not be supported.
Panels support is the feature in charge of docking floating windows in hangouts

![Alt text](screenshots/chromium.png "Chromium together with Chrome logos")

**Solution:** Follow instructions to **[Install Chromium version 52.0.2743.0](https://github.com/old-hangouts/Chromium-52.0.2743.0)** so Chromium (older open source version of Chrome that supports panels) and Chrome (with most recent updates) can be running at the same time. We highly advice not to stop updating your Chrome browser

### Installation (see screenshots below)
* Make sure you have installed [Chromium version 52.0.2743.0](https://github.com/old-hangouts/Chromium-52.0.2743.0)
* Download this repository (or clone it)
* Open Chromium and go to chrome://extensions
* Make sure "Developer Mode" is checked
* Click "Load Unpacked Extension..."
* Find the unzipped/cloned directory
* Make sure you disable the official extension

### Notice
* Dismiss the disable update Hangouts alert (included in the floating list of contacts)
* Don't disable developer mode extensions (you might see some alerts from Chromium)
* Don't move or delete the folder you added in Chromium (otherwise you will have to redo the installation steps)
* Keep using and updating Chrome as normal (except for the old hangouts extension).
* Don't use Chromium for anything besides hangouts.

### Installation - step by step
#### Step 1
* Download this repository (or clone it)
* Open Chromium and go to chrome://extensions
* Make sure "Developer Mode" is checked
* Click "Load Unpacked Extension..." <br/>
![Alt text](screenshots/step1.png "Step 1")

#### Step 2
* Find the unzipped/cloned directory <br/>
![Alt text](screenshots/step2.png "Step 2")

#### Step 3
* Make sure you disable the official extension in Chrome<br/>
![Alt text](screenshots/step3.png "Step 3")

## Authors
* Patricia MAYO TEJEDOR & Sandoche ADITTANE
* Made from the Google Chrome Extension

## Donations
Feel free to buy us beers :)
https://www.paypal.me/happybots
