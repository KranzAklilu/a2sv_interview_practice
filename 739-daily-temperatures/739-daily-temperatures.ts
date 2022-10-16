function dailyTemperatures(temperatures: number[]): number[] {
    const output = Array(temperatures.length).fill(0);
    for(let i = 0; i < temperatures.length; i++){
        let daysCount = 0;
        for(let j = i + 1; j < temperatures.length; j++){
            daysCount++
            if(temperatures[i] < temperatures[j]){
                output[i] = daysCount;
                break;
            }
        }
    }
    return output;
};