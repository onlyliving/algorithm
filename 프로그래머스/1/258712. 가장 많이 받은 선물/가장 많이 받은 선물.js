function solution(friends, gifts) {
    /*
    * 이 문제는 한번 더 봐야 할 듯
    * 다음달에 가장 많은 선물을 받는 친구가 받을 선물을 수를 return
    */
    
    const friendsLength = friends.length;
    const nextMonth = new Array(friendsLength).fill(0);
    const friendsIdx = new Map();
    const giftTable = new Array(friendsLength).fill(0).map(_ => new Array(friendsLength).fill(0));
    const rankInfo = new Array(friendsLength).fill(0);
    
    friends.forEach((name, idx) => {
        friendsIdx.set(name, idx)
    });    
    
    // 선물 준 내용 카운트
    gifts.forEach(gift => {
        const [giver, receiver] = gift.split(" ");
        giftTable[friendsIdx.get(giver)][friendsIdx.get(receiver)]++;
    });

    // 선물지 수 - 누적 계산
    for (let i = 0; i < friendsLength; i ++) {       
        // 준 선물 누적
        rankInfo[i] = giftTable[i].reduce((acc, cur) => acc += cur, 0);

        // 받은 선물
        for (let j = 0; j < friendsLength; j ++) {
            rankInfo[i] -= giftTable[j][i];
        }
    }
    
    // 다음달 선물 계산
    for (let i = 0; i < friendsLength; i ++) {
      for (let j = 0; j < friendsLength; j ++) {
 
            if (giftTable[i][j] > giftTable[j][i]) {
                nextMonth[i]++;
            } else if(giftTable[i][j] === giftTable[j][i]) {
                if (rankInfo[i] > rankInfo[j]) {
                    nextMonth[i]++;
                }
            }
        }     
    }
    
    return Math.max(...nextMonth)
}