// https://random-word-api.herokuapp.com/word?length=5&number=1
const NUMBER_OF_WORDS = 1

const getWordLength = () => Math.floor(Math.random() * 3) + 4

const API_URL = `https://random-word-api.herokuapp.com/word?length=${getWordLength()}&number=${NUMBER_OF_WORDS}`

export const getRandomWord = () => {
  return new Promise((resolve, reject) => {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch random word. Status: ${response.status}`);
        }
        return response.json()
      })
      .then((data) => {
        resolve(data[0])
      })
      .catch((error) => {
        console.error('Error fetching random word:', error.message);
        reject(error)
      })
  })
}
