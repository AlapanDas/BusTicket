import './App.css';
import Form from './components/Form';


function App() {
  return (
    <body className=' w-full h-screen'>
      <div className='searchbox flex flex-col items-center  gap-2 rounded-2xl bg-opacity-40 backdrop-blur-sm  backdrop-brightness-75 bac text-onsecondary  bg-secondary  w-max mx-auto my-3 p-4  '>
        <Form />
      </div>
    </body>
  );
}

export default App;
