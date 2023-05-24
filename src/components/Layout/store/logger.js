function logger(reducer) {
    return (preveState, action) => {
        console.group(action.type)
        console.log('prev state:', preveState);
        const newState = reducer(preveState, action)
        console.log('newState:', newState);
        console.groupEnd()
        return newState
    }
}
export default logger 