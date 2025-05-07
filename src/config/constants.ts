import { Language } from "~/types";

export const SUPPORTED_LANGUAGES = [Language.English];
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const LocalStorageKeys = {
  PersistRoot: "persist:root",
};
