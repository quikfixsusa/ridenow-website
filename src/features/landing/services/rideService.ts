import { db } from "@/shared/services/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { RideType } from "@/shared/types";

export const fetchRides = async (): Promise<RideType[]> => {
  try {
    const ridesRef = collection(db, "rides");
    const q = query(ridesRef, orderBy("priority", "asc"));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as RideType[];
  } catch (error) {
    console.error("Error fetching rides from Firestore:", error);
    return [];
  }
};
