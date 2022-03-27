//typingTextEffect
function typingTextAnimation(arrWelcomText: String[], mainElement: string, typingSpeed: number, delayArrItem: number) {
  document.addEventListener('DOMContentLoaded', function async() {
    const inElement = document.querySelector(`.${mainElement}`)
    //Eteration with all text-elements
    const typingOneTextElement = (string: any, i: number) => {
      let itemElement = document.createElement('p')
      itemElement.className = `welcome-page-item_text-${i}`
      itemElement.insertAdjacentHTML('afterbegin', "<p class='text'></p>")
      itemElement.insertAdjacentHTML('beforeend', "<p class='cursor'></p>")
      inElement?.append(itemElement)
      const itemTextElement = document.querySelector(`.welcome-page-item_text-${i} .text`)
      const itemCursorElement = document.querySelector(`.welcome-page-item_text-${i} .cursor`)
      const charText = string.trim().split('')
      const typingText = () => {
        let newText = ''
        let index = 0
        const delayOfChar = () => {
          itemTextElement!.textContent = newText
          newText = newText + charText[index]
          ++index
          setTimeout(() => {
            itemCursorElement?.remove()
          }, (charText.length * typingSpeed) + 1000)
          if (index <= charText.length) {
            setTimeout(delayOfChar, 50)
          }
        }
        delayOfChar()
      }
      setTimeout(typingText, 1000)
    }
    let i = 0;
    const delayOfElements = () => {
      typingOneTextElement(arrWelcomText[i], i)
      ++i
      if (i < arrWelcomText.length) {
        setTimeout(delayOfElements, (i + 1) * delayArrItem)
      }
    }
    delayOfElements()

    //Eteration with all text-elements
  })
}
export { typingTextAnimation }
//typingTextEffect