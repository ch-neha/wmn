import { db } from "./firebase-init";

export const checkIfExistingUSerElseAddUser = (user) => {
  db.collection("users")
    .where("uid", "in", [user.uid])
    .onSnapshot((snapshot) => {
      if (
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        })).length === 0
      ) {
        const userRef = db.doc(`users/${user.uid}`);
        const data = {
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        };
        userRef.set(data, { merge: true });
      }
    });
};

export const getUserbyId = async (id) => {
  return await db
    .collection("users")
    .doc(id)
    .get()
    .then(async (documentSnapshot) => {
      const data = documentSnapshot.data();
      return data;
    });
};

export const updateUser = async (user_id, data) => {
  const userRef = db.doc(`users/${user_id}`);
  userRef.set(data, { merge: true });
};
