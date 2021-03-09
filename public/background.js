(function () {
    chrome.app.runtime.onLaunched.addListener(start);
    chrome.runtime.onInstalled.addListener(start);

    function start() {
        chrome.app.window.create('index.html',
            {
                'bounds': {
                    'width': 800,
                    'height': 680
                },
                id: 'app'
            },
            onWindowCreated
        );
    }

    function onWindowCreated(appWin) {
        //nothing for now 
    }

}());
