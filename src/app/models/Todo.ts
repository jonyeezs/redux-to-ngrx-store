export class Todo {
  id?: number; // set as optional so newly created Todo can intialize with out a generated id
  label: string;
  complete: boolean;
  tags: string[];
}
