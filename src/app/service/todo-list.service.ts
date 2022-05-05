import { TodoList } from "../interface/todo-list";
import axios from "axios";

export async function recupera(): Promise<TodoList[]> {
    return await (await fetch('assets/db.json')).json()
}

export async function recuperaAxios(): Promise<TodoList[]> {
    const risposta = (await axios.get<TodoList[]>('assets/db.json')).data;
    return risposta;
}
