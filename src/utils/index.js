
function * makeId() {
    let id = 1;
    while(true) {
        yield id++
    }
}

export const genId = makeId();
