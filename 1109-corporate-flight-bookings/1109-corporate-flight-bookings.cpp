function corpFlightBookings(bookings: number[][], n: number): number[] {
    const answer = Array(n).fill(0);
    for(let i = 0; i < bookings.length; i++){
        let count = bookings[i][0];
        while(count >= bookings[i][0] && count <= bookings[i][1]){
            answer[count - 1] += bookings[i][2]
            count++
        }
    }
    return answer;
};