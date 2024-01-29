
import figlet from "figlet"
import Fraktur from 'figlet/importable-fonts/Fraktur.js'

const DEFAULT_FONT = 'Fraktur'

export const getFiglet = async (text) => {
  await figlet.parseFont(DEFAULT_FONT, Fraktur)

  return new Promise((resolve, reject) => {
    figlet.text(text, { font: DEFAULT_FONT },
      (err, data) => {
        if (err) {
          reject(err)
        } else {
          resolve(data)
        }
      }
    )
  })
}
