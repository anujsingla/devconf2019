function useStateClosure(initialValue) {
    const state = {value: undefined};
    state.value = initialValue;
    const setStateValue = function(newStateValue) {
        state.value = newStateValue;
    };
    return [state, setStateValue];
}

const [state1, setState1] = useStateClosure('foo');
const [state2, setState2] = useStateClosure('bar');
console.log(state1.value); // foo
console.log(state2.value); // bar

setState1('baz');
setState2('zap');
console.log(state1.value); // baz
console.log(state2.value); // zap
