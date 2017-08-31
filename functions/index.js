const functions = require('firebase-functions');
const admin = require('firebase-admin');
const request = require('request');
admin.initializeApp(functions.config().firebase);

exports.addCompany = functions.database.ref('/companies/{pushId}').onWrite(event => {
    console.info(event.data.val());

    return request({
        url: 'https://api.api.ai/v1/entities/aa37c136-77a4-4657-a22f-f80e5358b81f/entries',
        headers: {
            'Authorization': `Bearer 758ef234d7ec40ac811dad724d424a7b`
        },
        body: JSON.stringify([{value: event.data.val(), synonyms: []}])
    });
});
exports.webhhok = functions.https.onRequest((request, response) => {
    console.log('headers: ' + JSON.stringify(request.headers));
    console.log('body: ' + JSON.stringify(request.body));
    return response.send(JSON.stringify({ "speech": request.body.result.fulfillment.speech, "displayText": request.body.result.fulfillment.speech}));
});