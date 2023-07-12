import { IDBPDatabase, DBSchema } from "idb";

export interface UserSchema extends DBSchema {
  user: {
    key: string;
    value: UserData;
  };
}

export type IDBUserSchema = IDBPDatabase<UserSchema>;

export type UserData = {
  oauth?: {
    id: string;
    kind: "github" | "google" | "";
  };
  name: string;
  email: string;
  thumbnails: string;
  mento: boolean;
  language: string[];
  about?: {
    github: string;
    content: string;
  };
};
