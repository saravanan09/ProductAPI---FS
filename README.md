# Prerequisites

1. install java devolepment kit (JDK) on your computer.

http://www.oracle.com/technetwork/java/javase/overview/index.html

Notes: It is always recommended to have latest JDK on your computer.

2. install node.js

Go to https://nodejs.org/en/ and get the current version

3. Download the latest standalone selenium server.

Download the latest java standalone server at their website -- (http://www.seleniumhq.org/download/) or alternatively at their [release page](http://selenium-release.storage.googleapis.com/index.html).

This requires [java](http://www.oracle.com/technetwork/java/index.html).

To run, navigate to the folder where you saved your .jar file and  execute the below command from the terminal:

"java -jar selenium-server-standalone-3.X.X.jar"

"X - replace the `selenium-server-standalone` version with the version you have downloaded".

4. Download the Chrome and `geckodriver` Webdrivers

--> Go to the [Selenium Github Docs](http://seleniumhq.github.io/selenium/docs/api/javascript/) and download the latest drivers based on your computer configuration.

Place the drivers and selenium standalone server in the same folder.

For example, `chromedriver` or `geckodriver` with be placed alongside the standalone server.

```
My Folder
    ├── selenium-server-standalone-3.0.1.jar
    ├── chromedriver
    ├── geckodriver

# IDE Installation
```
5. Download and Install Sublime text or Webstorm

https://www.sublimetext.com/download

* webstorm need a license key.

# Running automated tests

1. Clone "automationtests".

2. open "automationtests" project using sublime or webstorm.

3. open terminal & navigate to "automationtests" folder and execute below command to install mpm modules.

"npm install"

4. To Run automation script --

## Locally

* Assuming the selenium standalone server is already up and running.

The local build is placed in the root, `runTest.sh` and run:

```bash
./runTest.sh
```
-- This executes test cases based tags mentioned in the "runTest.sh"

## Taking screenshots 

Add this snippet to the `runTest.sh`:

```
SCREENSHOTS='yes' \
```

#### Firefox instructions (Mac)

1. The current versions of firefox (47-49) are [not supported by selenium](https://github.com/mozilla/geckodriver/issues/128). Download [Firefox Nightly](https://nightly.mozilla.org/) instead.
2. In your Applications folder, rename `Firefox Nightly` to `Firefox`

#### Chrome instructions

1. Download the chrome driver, can be found on the [Selenium Github Docs](http://seleniumhq.github.io/selenium/docs/api/javascript/)

Under `features/support/world.js` we list the browser as such:

```javascript
var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .usingServer(process.env.SELENIUM_URL)
    .build();
```

2. Change the `world.js` snippet to `.forBrowser('chrome)`

## QA Notes
1. for all Given, pass in the driver for the page. example: loginPage.driver = this.driver;

