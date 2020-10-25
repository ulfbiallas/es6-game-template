export default class AI {

    constructor() {

        // rewards for [turnLeft, turnRight, moveForward]
        this.rewards = [
            [ 0,  0,  0], //  0 invalid
            [ 0,  0,  0], //  1 invalid
            [ 0,  0,  0], //  2 invalid
            [ 0,  0,  0], //  3 invalid
            [-1, -1,  2], //  4 isItemInfront
            [ 1, -1,  0], //  5 isItemInfront, isItemLeft
            [-1,  1,  0], //  6 isItemInfront, isItemRight
            [ 0,  0,  0], //  7 invalid
            [ 1,  1, -1], //  8 isItemBehind
            [ 1, -1, -1], //  9 isItemBehind, isItemLeft
            [-1,  1, -1], // 10 isItemBehind, isItemRight
            [ 0,  0,  0], // 11 invalid
            [ 0,  0,  0], // 12 invalid
            [ 0,  0,  0], // 13 invalid
            [ 0,  0,  0], // 14 invalid
            [ 0,  0,  0], // 15 invalid
        ]

        // probabilities for [turnLeft, turnRight, moveForward]
        this.qMatrix = [
            [ 0,  0,  0], //  0 invalid
            [ 0,  0,  0], //  1 invalid
            [ 0,  0,  0], //  2 invalid
            [ 0,  0,  0], //  3 invalid
            [ 0,  0,  0], //  4 isItemInfront
            [ 0,  0,  0], //  5 isItemInfront, isItemLeft
            [ 0,  0,  0], //  6 isItemInfront, isItemRight
            [ 0,  0,  0], //  7 invalid
            [ 0,  0,  0], //  8 isItemBehind
            [ 0,  0,  0], //  9 isItemBehind, isItemLeft
            [ 0,  0,  0], // 10 isItemBehind, isItemRight
            [ 0,  0,  0], // 11 invalid
            [ 0,  0,  0], // 12 invalid
            [ 0,  0,  0], // 13 invalid
            [ 0,  0,  0], // 14 invalid
            [ 0,  0,  0], // 15 invalid
        ]

        // learning parameter
        this.gamma = 0.8

        this.lastDecision = null;
    }


    updateAgent(state, actions) {
        //defaultAI(state, actions);
        
        const {isItemLeft, isItemRight, isItemInfront, isItemBehind} = state;
        const {turnLeft, turnRight, moveForward} = actions;
        const actionArray = [turnLeft, turnRight, moveForward];

        const b2n = b => b ? 1 : 0;
        const stateId = b2n(isItemLeft) + 2 * b2n(isItemRight) + 4 * b2n(isItemInfront) + 8 * b2n(isItemBehind)


        // calculate reward for last decision
        if(this.lastDecision) {
            const lastStateId = this.lastDecision[0];
            const lastActionId = this.lastDecision[1];
            const qRow = this.qMatrix[stateId];
            const maxQValue = Math.max(qRow[0], qRow[1], qRow[2]);
            this.qMatrix[lastStateId][lastActionId] = this.rewards[lastStateId][lastActionId] + this.gamma * maxQValue;
        }

        // take new decision
        const stateProbs = this.qMatrix[stateId];
        const bestAction = argMax(stateProbs);
        const actionId = bestAction >= 0 ? bestAction : Math.floor(Math.random() * 3);

        const action = actionArray[actionId];
        action();

        this.lastDecision = [stateId, actionId]

        //console.log(stateId);
        //console.log(JSON.stringify(this.qMatrix))
    }

}


function argMax(array) {
    let ref = 0;
    let idx = -1;
    array.forEach((v, vIdx) => {
        if(v > ref) {
            idx = vIdx;
        }
    })
    return idx;
}


/*
function defaultAI(state, actions) {

    const {isItemLeft, isItemRight, isItemInfront, isItemBehind} = state;
    const {turnLeft, turnRight, moveForward} = actions;
    
    if(isItemInfront) {
        if(isItemLeft) {
            turnLeft();
        }
    
        if(isItemRight) {
            turnRight();
        }

        moveForward();
    }

    if(isItemBehind) {
        turnRight();
    }

}
*/
