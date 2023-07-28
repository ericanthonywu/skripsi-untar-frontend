const globalState = {
    id: 0
};

export default (state = globalState, action) => {
    switch (action.type) {
        default:
            return globalState
    }
};