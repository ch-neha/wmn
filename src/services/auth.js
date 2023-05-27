import firebase from "./firebase-init";
export const auth = firebase.auth();
/*
=================== How to use ===================
import { useAuthState } from "react-firebase-hooks/auth";
const [user] = useAuthState(auth);

for logout
auth.signOut();
*/
export const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider);
};

export const signOut = () => {
  auth.signOut();
};

/*
In template
========= import ==========
import { signInWithGoogle, auth, signOut } from "./services/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { checkIfExistingUSerElseAddUser } from "./services/user";

========= Function ==========
const [user] = useAuthState(auth);
if (user) checkIfExistingUSerElseAddUser(user);
*/
