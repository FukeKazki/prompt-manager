import {
  addDoc,
  CollectionReference,
  getDocs,
  Query,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";

import * as R from "remeda";

function deserialize(data: unknown): unknown {
  if (data instanceof Timestamp) {
    return data.toDate();
  }

  if (Array.isArray(data)) {
    return data.map(deserialize);
  }

  if (R.isPlainObject(data)) {
    return R.mapValues(data, deserialize);
  }

  return data;
}

export const getDocsWithQuery = async <T>(
  ref: CollectionReference<T> | Query<T>,
) => {
  const snapshot = await getDocs(ref);

  return snapshot.docs.map(
    (doc) => deserialize({ id: doc.id, ...doc.data() }) as T,
  );
};

export const createDoc = async <T>(ref: CollectionReference<T>, data: T) => {
  await addDoc(ref, {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
};
