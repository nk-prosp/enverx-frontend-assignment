import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const addTransaction = async (data) => {
    const docRef = await addDoc(collection(db, "transactions"), {
        ...data,
    });
    return docRef;
};

export const getTransactions = async () => {
    let results = [];
    const refs = await getDocs(collection(db, "transactions"));
    refs.docs.forEach((doc) => {
        results.push(doc.data());
    });
    return results;
};
