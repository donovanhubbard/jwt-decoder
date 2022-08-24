
import * as DOMPurify from 'dompurify';
import {Buffer} from 'buffer';

const jwtRE = /^([A-Za-z0-9+/_=]+)\.([A-Za-z0-9+/_=]+)\.([A-Za-z0-9+/_=]+)$/;

export function decodeJWT(){ 
    const encodedJWT = document.getElementById('jwtInput').value;
    var headerTextArea = document.getElementById('output-header');
    var payloadTextArea = document.getElementById('output-payload');
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

            const decodedHeader = Buffer.from(cleanHeader, 'base64');
            const decodedPayload = Buffer.from(cleanPayload, 'base64');

            headerTextArea.innerHTML = decodedHeader;
            payloadTextArea.innerHTML = decodedPayload;
            

        }catch(e){
            console.log('failed to decode');
            console.log(e);
            const message = 'Failed to decode';
            errorDisplay.innerHTML = message;
        }
        
    }else{
        const message = 'Invalid JWT';
        errorDisplay.innerHTML = message;
    }
}
