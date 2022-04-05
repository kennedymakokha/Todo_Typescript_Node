export interface BaseAuth {
  email: string;
  password: String;
  name: String | null;
  phone: Number | null;
  deletedAt:Date
}

export interface Auth extends BaseAuth {
  id: number;
}