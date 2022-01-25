interface Todo {
    id: string;
    todo: string;
    complete: boolean;
}

type TodoList = {
    list: Todo[];
}