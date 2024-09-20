import { createStore, createEvent, createEffect } from 'effector';

// События для добавления и удаления задач
export const addTodo = createEvent();
export const removeTodo = createEvent();

// Эффект для загрузки элементов из jsonplaceholder
export const fetchItems = createEffect(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.slice(0, 5);; // Возвращаем 5 загруженных задач
});

// Хранилище для задач
export const todosStore = createStore([])
    .on(addTodo, (state, todo) => [...state, todo])
    .on(removeTodo, (state, index) => state.filter((_, i) => i !== index));

// Хранилище для загруженных элементов
export const itemsStore = createStore([]).on(fetchItems.doneData, (_, items) => items);

// Подписка на эффект для обновления состояния
fetchItems.done.watch(({ result }) => {
    console.log('Fetched items:', result); 
    result.forEach(item => addTodo(item.title)); 
});


fetchItems();






