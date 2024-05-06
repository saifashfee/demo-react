import './App.css';
import Products from './components/Products';

function App() {

  const products = [
    {
      id:'pl1',
      title:'Saif',
      amount: 100,
      date: new Date(2021,8,10),
    },
    {
      id:'pl2',
      title:'Ashfee',
      amount: 500,
      date: new Date(2020,9,18),
    },
    {
      id:'pl3',
      title:'Ashborn',
      amount: 800,
      date: new Date(2025,1,11),
    },
    {
      id:'pl4',
      title:'Sung',
      amount: 900,
      date: new Date(2018,8,10),
    }
  ];

  return (
    <div>
      <Products items={products}/>
    </div>
  );

//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//     </div>
//   );
}

// const App = () => {
//   const products = [
//     {
//       id:'pl1',
//       title:'Saif',
//       amount: 100,
//       date: new Date(2021,8,10),
//     },
//     {
//       id:'pl2',
//       title:'Ashfee',
//       amount: 500,
//       date: new Date(2020,9,18),
//     },
//     {
//       id:'pl3',
//       title:'Ashborn',
//       amount: 800,
//       date: new Date(2025,1,11),
//     },
//     {
//       id:'pl4',
//       title:'Sung',
//       amount: 900,
//       date: new Date(2018,8,10),
//     }
//   ];

//   return (
//     <div>
//       <Products items={products}/>
//     </div>
//   );
// }

export default App;
