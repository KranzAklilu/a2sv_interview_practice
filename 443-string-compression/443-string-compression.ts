function compress(chars: string[]): number {
    let count = 1;
    let length = 0;
    for(let i =1; i <= chars.length; i++){
        if(i < chars.length && chars[i] === chars[i -1 ]){
            count++;
        }else{
            chars[length++] = chars[i - 1];
            if(count <= 1) continue;
            for(let c of count.toString().split('')){
                chars[length++] = c;
            }
            count = 1
        }
    }
    return length;
};