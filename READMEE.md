# Example usage of shortcuts.js with shortcut signing

## Dependencies

You need node.js and npm installed. This must be run on a macOS machine as the shortcut signing tool is only available on macOS.

## Usage

1. Install the dependencies with `npm install`
2. Run `npm start` to create and sign the shortcut

## Details

Have a look at the command in `package.json` to see how the shortcut is created and signed. There are two parts
1) the script in index.js creates a shortcut file using the shortcuts.js package and
2) the script is signed using the commandline tool `shortcuts` that comes built in with a macOS installation.