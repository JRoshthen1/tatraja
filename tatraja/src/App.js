import './App.css';

function App() {
  return (
    <div className="flex flex-col justify-center items-center Hero"> 
        <div className="text-3xl text-gray-light font-light underline">
          <a
           href="https://tailwindcss.com/docs"
           target="_blank"
            rel="noopener noreferrer"
           >
             Learn TailWind</a>
        </div>
        <br/>
        <a
          className="text-3xl text-gray-light font-light underline"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default App;
