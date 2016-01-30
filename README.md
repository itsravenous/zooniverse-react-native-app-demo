# React Native Subject Annotator
Hackalicious [React Native](https://facebook.github.io/react-native/) app for annotating subjects. Currently pretty fudgey, but runs on Android and iOS.

## Requirements
### General
Node >= 4.0.0 (on OSX and Linux I recommend installing via [n](https://github.com/tj/n))
React Native CLI (`npm install -g react-native-cli` - may need sudo/admin depending on your setup)

### iOS
OSX, Xcode >= 7.0.

### Android
Android SDK with build tools 23.0.1 installed (or change the `buildToolsVersion` property in `android/app/build.gradle`)

## Run
### iOS
Open iOS/AwesomeProject.xcodeproj in Xcode and press the run button (or `⌘-R`). A terminal window will open with the react native server for debugging, live reload etc. This terminal window might show an error about `setup_env.sh` not having permission to set ulimit. If so, comment out the `ulimit set` line in `node_modules/react-native/local-cli/setup_env.sh` and set ulimit yourself with `sudo`.

To enable debugging and livereload, edit `ios/AwesomeProject/AppDelegate.m`, replacing `localhost` with your Mac's IP address in the `jsCodeLocation` line.

### Android
Start the server with `react-native start`, then run the app (in another terminal) with `react-native run-android`.

To enable debugging and livereload, bring up the dev menu in the app (shake your device or press the menu button), go to Dev Settings and enter your ip address/hostname and port 8081 in the "Debug server host & port for device" section.

### Debugging & livereload
To enable livereload or debugging, bring up the dev menu in the app by shaking the device or (on older Android devices) pressing the menu button and select the appropriate option. Debugging will open up a Chrome tab on your host computer, allowing you to debug the app from Chrome devtools. I found it crashed fairly frequently on Linux/Android, but it is very helpful. Livereload seems pretty reliable.

## TODO
- Fetch projects and subjects from Panoptes (use [panoptes-javascript-client](https://github.com/zooniverse/panoptes-javascript-client))
- Use proper drawing primitives
- Maintain coordinates when rotating device
- Allow moving annotations
- Add more annotation tools
- Try and reuse more [PFE](https://github.com/zooniverse/Panoptes-Front-End) code (might need to add a CoffeeScript/CJSX compiler)
