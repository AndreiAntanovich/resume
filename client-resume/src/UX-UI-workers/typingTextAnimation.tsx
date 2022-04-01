//typingTextEffect
function typingTextAnimation(arrWelcomText: String[], mainElement: string, startDelay: number, endDelay: number, typingSpeed: number, removePrevItem: boolean) {
  document.addEventListener('DOMContentLoaded', function async() {
    const inElement = document.querySelector(`.${mainElement}`)   //Get head element 
    //Eteration with all text-elements
    //Function for every elements of array string - Function
    const typingOneTextElement = (charText: any, i: number, delay: number) => {
        //Building structure HTML-element and start animation cursor
        let itemElement = document.createElement('div')
        itemElement.className = `${mainElement}_${i}`
        itemElement.insertAdjacentHTML('afterbegin', "<p class='text'></p>")
        itemElement.insertAdjacentHTML('beforeend', "<p class='cursor'></p>")
        inElement?.append(itemElement)
        const itemTextElement = document.querySelector(`.${mainElement}_${i} .text`)
        const itemCursorElement = document.querySelector(`.${mainElement}_${i} .cursor`)
        //Building structure HTML-element and start animation cursor

        //Typing Text in p with class .text and setting delay start-delay
        const typingText = ()=>{
          //Cicle for every char of string - Service
          let newText = ''
          let index = 0
          const typingOfChar = () => {
            newText = newText + charText[index]
            itemTextElement!.textContent = newText
            console.log(newText)
            const prevElementDelete = document.querySelector(`.${mainElement}_${i}`)
            setTimeout(() => {
              removePrevItem ? prevElementDelete?.remove() : itemCursorElement?.remove()   //set delete-no delete element to end typing text, and set delay
            }, charText.length * typingSpeed+endDelay)
            //Cicle for every char of string - Service

            //Cicle for every char of string - Service
            ++index
            if (index <= charText.length-1) {
              setTimeout(typingOfChar, typingSpeed)
            }
            //Cicle for every char of string - Service
          }
          typingOfChar()
        }
        setTimeout(typingText, startDelay)
        //Typing Text in p with class .text and setting delay start-delay
      }
    //Function for every elements of array string - Function

    //Cicle for every elements of array string - Service
    let i = 0;
    let delay = 0
    const delayOfElements = () => {
      const charText = arrWelcomText[i].trim().split('')
      typingOneTextElement(charText, i, delay)
      ++i
      delay = delay + charText.length
      if (i < arrWelcomText.length) {
        setTimeout(delayOfElements, delay * typingSpeed+startDelay+endDelay)
      }
    }
    delayOfElements()
    //Cicle for every elements of array string - Service
    //Eteration with all text-elements
  })
}
export { typingTextAnimation }
//typingTextEffect