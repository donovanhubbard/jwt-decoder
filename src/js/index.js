
import * as DOMPurify from 'dompurify';
import {Buffer} from 'buffer';
import Beautify from 'js-beautify/js/lib/beautify';

const jwtRE = /^([A-Za-z0-9+/_=]+)\.([A-Za-z0-9+/_=]+)\.([A-Za-z0-9+/_=]+)$/;

export function decodeJWT(){ 
    clearError();
    const encodedJWT = document.getElementById('jwtInput').value;
    var headerTextArea = document.getElementById('headerTextArea');
    var payloadTextArea = document.getElementById('payloadTextArea');
    var errorDisplay = document.getElementById('error-banner');

    headerTextArea.innerHTML = '';
    payloadTextArea.innerHTML = '';
    errorDisplay.innerHTML = '';

    if(jwtRE.test(encodedJWT)){
        const match = jwtRE.exec(encodedJWT);
        const encodedHeader = match[1];
        const encodedPayload = match[2];

        try{
            const cleanHeader = DOMPurify.sanitize(encodedHeader);
            const cleanPayload = DOMPurify.sanitize(encodedPayload);

            const decodedHeader = Buffer.from(cleanHeader, 'base64').toString();
            const decodedPayload = Buffer.from(cleanPayload, 'base64').toString();

            console.log(decodedHeader);
            console.log(decodedPayload);

            const formatedHeader = Beautify.js_beautify(decodedHeader, {
                indent_with_tabs: true
            });
            const formatedPayload = Beautify.js_beautify(decodedPayload, {
                indent_with_tabs: true
            });

            headerTextArea.innerHTML = formatedHeader;
            payloadTextArea.innerHTML = formatedPayload;
            

        }catch(e){
            console.log('failed to decode');
            console.log(e);
            displayError('Failed to decode');
        }
        
    }else{
        displayError('Invalid JWT');
    }
}

function displayError(msg){
    var errorDisplay = document.getElementById('error-banner');
    errorDisplay.innerHTML = msg;
    errorDisplay.classList.remove('banner-off');
}

function clearError(){
    var errorDisplay = document.getElementById('error-banner');
    errorDisplay.classList.add('banner-off');
}
