

const defaultAI = (state, actions) => {

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


export default {
    update: defaultAI
};
