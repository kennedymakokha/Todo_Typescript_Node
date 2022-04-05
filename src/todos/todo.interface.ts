export interface BaseTodo {
  todo: string;
  isDone: boolean;
  _id: string
  deletedAt: any
 
}

export interface Todo extends BaseTodo {
  id: number;
}