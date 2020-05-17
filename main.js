       let keys=['a','s','d','f','g','h','j','k','l']
       let hash={ a:'clap',s:'hihat',d:'kick',f:'openhat',g:'boom',h:'ride',j:'snake',k:'tom',l:'tink'}
       index=0
       while(index<keys['length']){// 0 1 2
         divKbd=document.createElement('div')
         divKbd.classList.add('key')
         main.appendChild(divKbd)
         divKbd.setAttribute("data-key", keys[index])
            kbdVar=document.createElement('kbd')
            kbdVar.textContent=keys[index]       
            divKbd.appendChild(kbdVar)
            soundName=document.createElement('span')
            soundName.textContent=hash[keys[index]]
            divKbd.appendChild(soundName)
            index+=1
       }
       //play music and add animation
       function playMusic(e){
         const audio=document.querySelector(`audio[data-key="${e.key}"]`)
         const key=document.querySelector(`.key[data-key="${e.key}"`)
           if(!audio) return;
           audio.currentTime=0
           audio.play()
           key.classList.add('playing')
       }
  
      //stop animating when transitionend
      function removePlaying(e){
        if(e.propertyName!=='transform') return;
        this.classList.remove('playing')
      }
      //keyAll points transitionevents
      const keyAll=document.querySelectorAll('.key')
       //listen to keydown event event
     window.addEventListener('keydown',playMusic)
    //in keyAll (transitionevents)search for key,listen to transitionend event
    keyAll.forEach(key=>key.addEventListener('transitionend',removePlaying))
