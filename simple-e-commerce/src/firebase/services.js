import { myFirebase } from "."

export const readDataFirebase = (ref) => {
    return new Promise((resolve, reject) => {
        const onError = error => reject(error);
        const onData = snap => resolve(snap.val());

        ref.on("value", onData, onError);
    });
}

export const addDataFirebase = (path, dataInput) => {
    return myFirebase.database().ref(path).set(dataInput)
}

export const updateDataFirebase = (path, dataInput) => {
    return myFirebase.database().ref(path).set(dataInput)
}

export const deleteDataFirebase = path => {
    return myFirebase.database().ref(path).set(null)
}
