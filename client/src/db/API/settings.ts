// import { defaultSettingsData } from './../../constants/constants';
// import {
//   collection,
//   doc,
//   query,
//   where,
//   getDocs,
//   addDoc,
//   Timestamp,
//   serverTimestamp,
//   updateDoc,
// } from 'firebase/firestore';
// import { db } from '../config';
// import { getCurrentUser } from './auth';
import { IInputsPreferences } from '../../types/formTypes';
import { showToastMsg } from '../../common/showToastMsg';

export const createDefaultSettingsAPI = async (userId: string) => {
  // try {
  //   const docRef = await addDoc(collection(db, 'settings'), {
  //     ...defaultSettingsData,
  //     userId,
  //     createdDate: Timestamp.fromDate(new Date()),
  //   });
  // } catch (e) {
  //   console.error(e);
  // }
};

export const addDefaultSettingsIfNotExistsAPI = async (userId: string) => {
  // const q = query(collection(db, 'settings'), where('userId', '==', userId));
  // const querySnapshot = await getDocs(q);
  // if (querySnapshot.size === 0) createDefaultSettingsAPI(userId);
};

export const getUserSettingsAPI = async () => {
  // const { userId } = getCurrentUser();
  // if (!userId) {
  //   return { data: defaultSettingsData, selectLanguage: 'en' };
  // }
  // const q = query(collection(db, 'settings'), where('userId', '==', userId));
  // const querySnapshot = await getDocs(q);
  // let data: any[] = [];
  // try {
  //   querySnapshot.forEach(doc => {
  //     // doc.data() is never undefined for query doc snapshots
  //     // console.log(doc.id, ' => ', doc.data());
  //     data = [...data, { ...doc.data(), id: doc.id }];
  //   });
  //   return { data: data[0], selectLanguage: data[0].selectLanguage };
  // } catch (e) {
  //   showToastMsg('Something went wrong. Try again!', 'error');
  //   return { data: defaultSettingsData, selectLanguage: 'en' };
  // }
};

export const updateUserSettings = async (
  id: string,
  dataToUpdate: IInputsPreferences
) => {
  // const docRef = doc(db, 'settings', id);
  // // Set the "capital" field of the city 'DC'
  // try {
  //   await updateDoc(docRef, {
  //     ...dataToUpdate,
  //     updatedDate: serverTimestamp(),
  //   });
  //   showToastMsg('Setting updated!', 'success');
  // } catch (e) {
  //   console.log(e);
  //   showToastMsg('Something went wrong. Try again!', 'error');
  // }
};
