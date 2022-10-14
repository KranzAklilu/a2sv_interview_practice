function isValid(s: string): boolean {
    let valid = true;
    let lastPth = '';
    const openingPth = ["(","{","["];
    const closingPth = [")","}","]"];
    const matchingPth = ["(", ")", "{", "}", "[","]"];
    const stack = [];
    
    for(let i = 0; i < s.length; i++){
        if(openingPth.find(pth => pth === s[i])){
            stack.push(s[i])   
        }
        if(closingPth.find(pth => pth === s[i])){
            const closingPthIdx = matchingPth.findIndex(pth => pth === s[i]);
            if(matchingPth[closingPthIdx -1 ] == stack[stack.length -1]){
                stack.pop();
            }else {
                valid = false;
                break
            }
        }
    }
    if(stack.length > 0){
        valid = false;
    }
    return valid;
}
