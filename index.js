const { buildShortcut, actionOutput, withVariables } = require('@joshfarrant/shortcuts-js');
const { showAlert } = require('@joshfarrant/shortcuts-js/actions');

const actions = [
  showAlert({
    title: withVariables`Hello Twitter!`,
    message: actionOutput()
  })
];

const shortcut = buildShortcut(actions);

require('fs').writeFile('HelloTwitter.shortcut', shortcut, (err) => {
  if (err) console.error('Error writing file:', err);
  else console.log('Shortcut saved to HelloTwitter.shortcut');
});
