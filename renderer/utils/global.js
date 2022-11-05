
export const isStringsArray = arr => {
    return (
        arr.every(i => typeof i === "string")
    )
}

export const upsert = (array, payload, path) => {

    const i = array.findIndex(_item => _item.option[path] === payload.option[path]);
    if (i > -1) array[i] = payload;
    else array.push(payload);
    return array
}

export const deleteBrackets = (str) => str.replace(/ *\([^)]*\) */g, "")
