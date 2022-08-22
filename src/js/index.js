
import * as DOMPurify from 'dompurify';

const jwtRE = /^([A-Za-z0-9+/_]+)\.([A-Za-z0-9+/_]+)\.([A-Za-z0-9+/_]+)$/;

export function decodeJWT(){ 
    const encodedJWT = document.getElementById('jwtInput').value;
    var headerTextArea = document.getElementById('output-header');
    var payloadTextArea = document.getElementById('output-payload');

    if(jwtRE.test(encodedJWT)){
        const match = jwtRE.exec(encodedJWT);
        const encodedHeader = match[1];
        const encodedPayload = match[2];

        try{
            //TODO fix deprecation
            const decodedHeader = atob(encodedHeader);
            const decodedPayload = atob(encodedPayload);

            const cleanHeader = DOMPurify.sanitize(decodedHeader);
            const cleanPayload = DOMPurify.sanitize(decodedPayload);

            headerTextArea.innerHTML = cleanHeader;
            payloadTextArea.innerHTML = cleanPayload;

        }catch(e){
            console.log('failed to decode');
            console.log(e);
            //TODO display an error message
        }
        
    }else{
        //TODO display an error message
        console.log('INVALID JWT');
    }
}