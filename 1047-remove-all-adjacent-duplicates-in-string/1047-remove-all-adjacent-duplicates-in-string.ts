function removeDuplicates(s: string): string {
    let output = []
    for(let i = 0; i < s.length; i++){
        if(output[output.length - 1] === s[i]){
            output.pop()
        }else{
            output.push(s[i])
        }
    }
   return output.join('');
};