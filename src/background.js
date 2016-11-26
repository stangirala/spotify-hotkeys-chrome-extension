function onCommand(command) {
  chrome.tabs.query({url: 'https://play.spotify.com/*'}, function(tabs) {

    var commandsKey = "document.getElementById('app-player').contentDocument.getElementById('" + command + "').click()";
    // Apply command on all spotify tabs.
    for (var tab of tabs) {
      chrome.tabs.executeScript(tab.id, {code: commandsKey});
    }

    // Unload background page as soon as we're done.
    window.close();
  });
};

chrome.commands.onCommand.addListener(onCommand);
