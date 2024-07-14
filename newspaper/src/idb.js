// src/idb.js
import { openDB } from "idb";

const dbPromise = openDB("articles-store", 1, {
  upgrade(db) {
    db.createObjectStore("articles", { keyPath: "id" });
  },
});

export const saveArticle = async (article) => {
  const db = await dbPromise;
  await db.put("articles", article);
};

export const getArticle = async (id) => {
  const db = await dbPromise;
  return db.get("articles", id);
};
