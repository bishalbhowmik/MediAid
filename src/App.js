import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Route/Route';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className='w-[500px] mx-auto bg-gray-300'>
    <h1 className="text-3xl text-center">MediAid</h1>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer
      hideProgressBar={true}
      position="top-center"
      autoClose={6000}
    />
  </div>

  );
}

export default App;
