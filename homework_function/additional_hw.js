function degree(deg){
  let c = 2
  for (let i = 1; i<=deg; i++){
  console.log(c**i)
  }
}
degree(10)


function smile(str, numberOfRaws){
  let i = 1
  let s = str
  while (i<= numberOfRaws){
    console.log(str)
    str += s
    i++
  } 
}

smile(';)', 8)

function getWordStructure(word){
  let vowels = 'AEIOU'
  let consonants = 'BCDFGHJKLMNPQRSTVWXYZ'
  let vow = 0;
  let con = 0;
  for (let i in word){
    if (vowels.includes(word[i].toUpperCase()))vow += 1
    if (consonants.includes(word[i].toUpperCase())) con += 1
  }
  console.log(`Слово ${word} состоит из  ${vow} гласных и ${con} согласных букв`)
}
getWordStructure('Check-list')

function isPalindrom(word){
  let rev_word = word.toLowerCase().split('').reverse().join('')
  if (rev_word == word.toLowerCase()) console.log("Palindrom")
  else console.log('Not palindrom')
}
isPalindrom('Abba')
