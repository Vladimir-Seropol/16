
import ToDoList from './componets/ToDo/ToDoList.jsx'
import './App.css'


function App() {


  return (
    <>
       <main>
      <div className="container md mx-auto my-20 p-8 bg-white rounded-3xl backdrop-blur bg-white/30 ">
        <h1 className="text-4xl font-bold underline">Список задач</h1>
        <ToDoList />
      </div>
    </main>
    </>
  );
}

export default App;
