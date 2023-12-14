import { db } from "./firebase_helper";
import { collection, addDoc, getDocs, getDoc } from "firebase/firestore";

export const addData = async (coll, data) => { //coll ve collection benzer yapılardır.
    try {
        const docRef = await addDoc(collection(db, coll), data);
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export const getManyData = async (coll) => { //coll içerisinde bulunan bütün verileri 
    try {
        const snapshot = await getDocs(collection(db, coll));
        return snapshot;
    } catch (e) {
        console.error("Error adding document: ", e);
    }
    return null;
}

export const getData = async (coll, id) => { //filter eklenecekse kullanılacak olan yapı
    const docRef = doc(db, coll, id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
}