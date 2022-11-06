function numRescueBoats(people: number[], limit: number): number {
    let sortedPeople  = people.sort((a, b) => a - b);
    let i = 0;
    let j =sortedPeople.length - 1;
    let boat = 0;
    
    while(i <= j){
        boat++
        if(sortedPeople[i] + sortedPeople[j] <= limit){
            i++;
        }
        j--;
    }
    return boat;
};