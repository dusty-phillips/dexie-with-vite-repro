import { createContext, useContext } from "react";
import dexieCloud from "dexie-cloud-addon";

import Dexie from "dexie";

interface ICount {
  count: number;
}

class Database extends Dexie {
  count!: Dexie.Table<ICount, string>;

  constructor() {
    super("ReproDB", { addons: [dexieCloud] });
    this.version(2).stores({ count: "@id, count" });

    this.cloud.configure({
      databaseUrl: "https://zg9ldrbkk.dexie.cloud",
      requireAuth: true,
    });
  }
}

const db = new Database();

export const DexieContext = createContext(db);

export function useDexie() {
  return useContext(DexieContext);
}

export default db;
