function solution(bandage, health, attacks) {
    let curHealth = health;
    const [castingTime, recoveryAmountPerSecond, additionalRecoveryAmount] = bandage;
    
    const attacksSeconds = attacks.map(item => item[0]);
    const attacksTotalTime = attacksSeconds[attacksSeconds.length -1];
    let successStreak = 0;
    
    for (let i = 1; i <= attacksTotalTime; i ++) {
         console.log(i);
        
        
        if (attacksSeconds.indexOf(i) !== -1) {
            // 공격받음
            successStreak = 0;
            const minus = attacks[attacksSeconds.indexOf(i)][1];
            curHealth -= minus;
            console.log("공격받음", i, minus, curHealth);
        } else {
            // 회복
            successStreak ++;
            curHealth += recoveryAmountPerSecond;
             console.log("회복", i, curHealth);

            if (successStreak === (castingTime)) {
                 curHealth +=  additionalRecoveryAmount;
                 successStreak = 0;
                console.log("회복 + 추가회복", i, curHealth);
            }
            
            if (curHealth > health) {
                curHealth = health;
                console.log("회복이 기본체력 넘어가면 초기화", i, curHealth);
            }

        }
        
        if (curHealth <= 0) {
            console.log("체력이 0!! die", i);
            return curHealth = -1;
        }
        
    }
    
    return curHealth <= 0 ? -1 : curHealth;
}