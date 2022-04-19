import { changeStatusTyping } from "../redux/welcomPage/welcomPageSlice"
//typingTextEffect
function typingTextAnimation(arrWelcomText: string[], mainElement: string, startDelay: number, endDelay: number, delayDelete:number, typingSpeed: number, deleteSpeed:number, removePrevItem: boolean, dispatch?: Function) {
  document.addEventListener('DOMContentLoaded', function async() {

    const inElement = document.querySelector(`.${mainElement}`)

    const typingOneTextElement = (itemText: string, i: number) => {
      let itemElement = document.createElement('div')
      itemElement.className = `${mainElement}_${i}`
      itemElement.insertAdjacentHTML('afterbegin', "<p class='text'></p>")
      itemElement.insertAdjacentHTML('beforeend', "<p class='cursor'></p>")
      inElement?.append(itemElement)
      const itemTextElement = document.querySelector(`.${mainElement}_${i} .text`)
      const itemCursorElement = document.querySelector(`.${mainElement}_${i} .cursor`)
      const charText = itemText.trim().split('')

      const typingText = () => {
        let newText = ''
        let index = 0

        const typingOfChar = () => {
          newText = newText + charText[index]
          itemTextElement!.textContent = newText
          const prevElementDelete = document.querySelector(`.${mainElement}_${i}`)

          setTimeout(() => {
            if (removePrevItem) {
              prevElementDelete?.remove()
            } else {
              itemCursorElement?.remove()
            }
          },startDelay+delayDelete+charText.length*typingSpeed + charText.length * deleteSpeed)

          index++
          if (index <= charText.length - 1) {
            setTimeout(typingOfChar, typingSpeed)
          }

          if (index === charText.length - 1 && removePrevItem) {
            let indexDelete = 0
            let newTextDelete: string = itemText

            const deleteOfChar = () => {
              newTextDelete = newTextDelete.substring(0, newTextDelete.length - 1)
              itemTextElement!.textContent = newTextDelete

              indexDelete++
              if (indexDelete <= charText.length - 1) {
                setTimeout(deleteOfChar, deleteSpeed)
              }
            }

            setTimeout(deleteOfChar, delayDelete)
          }
        }

        typingOfChar()
      }

      setTimeout(typingText, startDelay)
    }

    let i = 0;
    let delay = 0
    const delayOfElements = () => {
      typingOneTextElement(arrWelcomText[i], i)
      delay = arrWelcomText[i].length * typingSpeed + arrWelcomText[i].length * deleteSpeed+startDelay+endDelay+delayDelete

      i++
      if (i <= arrWelcomText.length - 1) {
        setTimeout(delayOfElements, delay)
      } else {
        setTimeout(() => {
          if (dispatch) {
            dispatch!(changeStatusTyping())
          }
        }, delay)
      }
    }

    delayOfElements()
  })
}

export { typingTextAnimation }