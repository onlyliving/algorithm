function solution(bandage, health, attacks) {
    let curHealth = health;
    const [castingTime, recoveryAmountPerSecond, additionalRecoveryAmount] = bandage;
    
    const attacksSeconds = attacks.map(item => item[0]);
    const attacksTotalTime = attacksSeconds[attacksSeconds.length -1];
    let successStreak = 0;
    
    for (let i = 1; i <= attacksTotalTime; i ++) {
        if (attacksSeconds.indexOf(i) !== -1) {
            // 공격받음
            successStreak = 0;
            const minus = attacks[attacksSeconds.indexOf(i)][1];
            curHealth -= minus;
        } else {
            // 회복
            successStreak ++;
            curHealth += recoveryAmountPerSecond;
            if (successStreak === castingTime) {
                 curHealth +=  additionalRecoveryAmount;
                 successStreak = 0;
            }
            
            if (curHealth > health) {
                curHealth = health;
            }

        }
        
        if (curHealth <= 0) {
            return curHealth = -1;
        }
        
    }
    
    return curHealth <= 0 ? -1 : curHealth;
}