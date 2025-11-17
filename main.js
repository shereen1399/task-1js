let pluse = document.querySelector('.pluse')
let mun = document.querySelector('.mun')
let plusebtn = document.querySelector('.plusbtn')
let munbtn = document.querySelector('.munbtn')
let span = document.querySelector('.cuonter')
let del = document.querySelector('.del')


const sound = new Audio()
sound.src="suond/mixkit-metal-button-radio-ping-2544.wav"
  sound.preload = "auto";
const sound2 = new Audio("suond/mixkit-alien-technology-button-3118.wav")



//  transform: scale(1.1);
let count =0
del.disabled = true
del.style.opacity = "0.2"
mun.disabled = true
mun.style.opacity = "0.2"
// mun.style.transform = "scale(0.2)"
munbtn.disabled = true
munbtn.style.opacity = "0.2"

 const handelClick =function(mode){
    if(mode ==="pluse"){
      count +=1 
      sound.play()
        
    }else if(mode === "mun"){
        if(count === 0)return
       count -=1
       sound2.play()

        
    }else if( mode === 'plus10'){
        count +=10
        sound.play()
        

    }else if(mode === 'mun10'){
        count -=10
        sound2.play()
        

    }
    span.innerHTML = count


    if( count === 0){
        del.disabled = true
        del.style.opacity = "0.2"
   
    } else{
        del.disabled = false
        del.style.opacity = "1"
      
        
    }
    
    
    if(count === 0){
        mun.disabled=true
    }else{
        mun.disabled = false
        mun.style.opacity = "1"
     }
      if(count === 0){
        munbtn.disabled = true
      }else if( count >= 10){
        munbtn.disabled =false
        munbtn.style.opacity = "1"
      }
}



  del.onclick = function(){
    if (count === 0)return
    count = 0;
    span.innerHTML = count;
    del.disabled = true;
    del.style.opacity ="0.2" 
    
   mun.style.opacity ="0.2" 
   munbtn.style.opacity ="0.2" 
    
    sound2.play()
}
