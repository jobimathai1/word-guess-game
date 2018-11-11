const guessWords = ["lost", "Mississippi", "Sanitizer", "Nectarine", "Macintosh", "Samsung", "Cartridge", "Notification", "Pistachio", "Surround", "Potatoes" ]

const selectWord = () => {
    var word = guessWords[Math.floor(Math.random() * guessWords.length)];
    console.log(word);
}
selectWord();