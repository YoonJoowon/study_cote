function solution(cards1, cards2, goal) {
    
    //goal을 하나씩 앞에서부터 꺼내서 cards1과 cards2 에 각각 앞에서 확인
    for(let i = 0; i < goal.length; i ++){
        
    //만약 있으면 shift를 통해서 앞에 제거 그리고 반복
        if(goal[i] === cards1[0]){
            cards1.shift();
        } else if (goal[i] === cards2[0]){
            cards2.shift();
        } else {
            //없을 경우 그대로F no resturn 
            return 'No'            
        }
    }   
    
    return 'Yes'  
}