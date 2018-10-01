function longestword(str) {
    
  let longestWord = '';
  let wordCount = str.replace(/[\:^&?!]/g, '').split(" ");

  for ( let i = 0; i < wordCount.length; i++) {
      if (wordCount[i].length > longestWord.length) {
          longestWord = wordCount[i];
      }
  }

  return longestWord;
}
//////////Another method//////////////////

function LongestWord(str) {
  var strSplit = str.split(' ');
  var word = '';
  for(var i = 0; i < strSplit.length;i++ ){
    if(strSplit[i].length > word.length){
	word = strSplit[i];
     }
  }
  return word;
}
findLongestWord("ubvgbjhg ubvgbjgg ababa aba.ba");