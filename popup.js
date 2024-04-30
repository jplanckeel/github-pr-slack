console.log('<----- Extension script started running ----->');

document.querySelector('.review').addEventListener('click', function () {
   
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var current = tabs[0];
        url = current.url;
        title = current.title;
        extractTitle = title.match(/(.*) · Pull Request #(/d+) · (.*)/i)
        console.log(extractTitle)
        prTitle= extractTitle[1]
        prId= extractTitle[2]
        prProject= extractTitle[3].replace(/\s/g, '')

        reviewMessage = ":please_review: `" + prProject + "` " + prTitle + " [PR" + prId +"](" + url + ")"    
        console.log(reviewMessage)
        navigator.clipboard.writeText(reviewMessage);
    });

});


document.querySelector('.merged').addEventListener('click', function () {
   
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var current = tabs[0];
        url = current.url;
        title = current.title;
        extractTitle = title.match(/(.*) · Pull Request #(/d+) · (.*)/i)
        console.log(extractTitle)
        prTitle= extractTitle[1]
        prId= extractTitle[2]
        prProject= extractTitle[3].replace(/\s/g, '')

        reviewMessage = ":merged: `" + prProject + "` " + prTitle + " [pr" + prId +"](" + url + ")"    
        console.log(reviewMessage)
        navigator.clipboard.writeText(reviewMessage);
    });

});
