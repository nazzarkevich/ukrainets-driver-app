import { getDocs, collection, QuerySnapshot, addDoc } from 'firebase/firestore';

import { auth, firestore } from '../../firebase';
import { FirestoreCollections } from '../../types';

export class FirebaseService {
  get currentUser() {
    return auth.currentUser;
  }

  async getDocuments<T>(collectionName: FirestoreCollections): Promise<T[]> {
    const querySnapshot = (await getDocs(
      collection(firestore, collectionName)
    )) as QuerySnapshot<T>;

    return querySnapshot.docs.map((doc) => doc.data());
  }

  async addDocument<T>(collectionName: FirestoreCollections, document: T) {
    await addDoc(collection(firestore, collectionName), document);
  }
}

export const firebaseService = new FirebaseService();
