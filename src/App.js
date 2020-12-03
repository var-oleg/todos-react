import './App.css';
import React, {useState, useEffect} from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
    //State stuff
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");
    const [filteredTodos, setFilteredTodos] = useState([]);
    //useEffect

    useEffect(() => {
        filterHandler();
        saveLocalTodos();
    }, [todos, status])

    //Functions
    const filterHandler = () => {
        switch (status) {
            case 'completed' :
                setFilteredTodos(todos.filter((todo) => todo.completed === true));
                break;
            case 'uncompleted' :
                setFilteredTodos(todos.filter((todo) => todo.completed === false));
                break;
            default :
                setFilteredTodos(todos);
                break;
        }
    };
    //Save to Local
    const saveLocalTodos = () => {
        if(localStorage.getItem('todos') === null){
            localStorage.setItem('todos', JSON.stringify([]));
        } else {
            localStorage.setItem('todos', JSON.stringify(todos));
        }
    };
    const getLocalTodos = () => {
        if(localStorage.getItem('todos') === null){
            localStorage.setItem('todos', JSON.stringify([]));
        } else {
            localStorage.setItem('todos', JSON.stringify(todos));
        }
    };
    return (
        <div className="App">
            <header>
                <h1>Todo list</h1>
            </header>
            <Form todos={todos}
                  setTodos={setTodos}
                  inputText={inputText}
                  setInputText={setInputText}
                  status={status}
                  setStatus={setStatus}

            />
            <TodoList todos={todos}
                      setTodos={setTodos}
                      filterTodos={filteredTodos}
            />
        </div>
    );
}

export default App;
