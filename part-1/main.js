const textarea = document.querySelector('textarea'),
voiseList = document.querySelector('select'),
speechBtn = document.querySelector('button');

let synth = speechSynthesis;
isSpeacking = true;

function voices(){
    for(let voise of synth.getVoices()){
        let select = voise.name === "Google US English" ? "select": "";
        let option = `<option value="${voise.name}">${voise.name} (${voise.name}) </option>`
        voiseList.insertAdjacentHTML("beforeend", option);
    }
}


synth.addEventListener("voiceschanged", voices);
  
function textToSpeech(text){
    let utternance= new SpeechSynthesisUtterance(text);
    for(let voice of synth.getVoices()){
        if (voice.name ===  voiseList.value){
            utternance.voice =voice;
        }
    }
    synth.speak(utternance);
}


speechBtn.addEventListener("click" , e =>{
    e.preventDefault();
    if(textarea.value !== ""){
        if(!synth.speakimg){
            textToSpeech(textarea.value);
        }
        if(textarea.value.length>80){
            if(isSpeacking){
               synth.resume();
               isSpeacking = false; 
               speechBtn.innerHTML = "Puse Speech";
            }else{
                synth.pause();
                isSpeacking = true;
                speechBtn.innerHTML = "Resume Speech";
            }

            setInterval(() =>{
                if(!synth.speakimg && isSpeacking){
                    isSpeacking = true;
                    speechBtn.innertext = "Convert To Speech"
                }
            });
            }else{
                speechBtn.innerHTML = "Convert To Speech";
        }
    }
});
