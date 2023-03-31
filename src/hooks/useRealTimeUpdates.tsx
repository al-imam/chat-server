import app from "@app/initializeFirebase";
import { useState, useEffect } from "react";
import {
  collection,
  getFirestore,
  query,
  orderBy,
  limitToLast,
} from "firebase/firestore";

interface Argument {
  reference: string;
  limit?: number;
}

const db = getFirestore(app);

function useRealTimeUpdates({ reference, limit = 30 }: Argument) {}
