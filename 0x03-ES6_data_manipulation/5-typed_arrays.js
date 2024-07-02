// 5-typed_arrays.js

function createInt8TypedArray(length, position, value) {
    const buffer = new ArrayBuffer(length);
    const view = new DataView(buffer);

    if (position >= length || position < 0) {
        throw new Error('Position outside range');
    }

    view.setInt8(position, value);
    return view;
}

export default createInt8TypedArray;

