function solution(players, callings) {
   /*
   * players 는 1등부터 순서. 추월하면 오른쪽에서 왼쪽으로 이동
   * 추월 : 바로 앞 선수를 추월할 때 불림. (1등은 상관없음)
   * 
   */
    
    const playerMap = new Map();
  
    // calling 원소들의 idx를 미리 구해서 저장
    for (let i = 0; i < players.length; i++) {
        playerMap.set(players[i], i)
    }

    for (let i = 0; i < callings.length; i++) {
        const idx = playerMap.get(callings[i]);
        const swapIdx = players[idx-1];
      
        // 해당 idx와 이전 idx의 원소 교환
        players[idx-1] = callings[i];
        players[idx] = swapIdx;
      
        // map의 idx도 갱신
        playerMap.set(callings[i], idx - 1);
        playerMap.set(swapIdx, idx);
    }
    
    return players;

}