function evalRPN(tokens: string[]): number {
    const stack = [];
    
    for(let i = 0; i < tokens.length; i++){
        if(tokens[i] === "+"){
            stack.push(stack.pop() + stack.pop());
            continue;
        }
        if(tokens[i] === "-"){
            let prevPoped = stack.pop();
            let latestPoped = stack.pop();
            stack.push(latestPoped - prevPoped);
            continue;
        }
        if(tokens[i] === "*"){
            stack.push(stack.pop() * stack.pop());
            continue;
        }
        if(tokens[i] === "/"){
            let prevPoped = stack.pop();
            let latestPoped = stack.pop();
            let divided = latestPoped / prevPoped + ""
            stack.push(parseInt(divided));
            continue;
        }
        stack.push(parseInt(tokens[i]))
    }
    
    return stack[0];
};