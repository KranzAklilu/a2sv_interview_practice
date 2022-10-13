function sortSentence(s: string): string {
    const constructedWords = [];
    const words = s.split(' ');
    
    for(let i = 0; i<words.length;i++){
        const wordWithoutIdx = words[i].split('');
        wordWithoutIdx.splice(words[i].length-1, 1);
        const idx = parseInt(words[i][words[i].length - 1]);
        constructedWords[idx -1]  = wordWithoutIdx.join('').trim();
        console.log(constructedWords);
    }
    
    return constructedWords.join(' ');
};