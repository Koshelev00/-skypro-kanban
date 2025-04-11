import "./App.css";
import AppRoutes from "./components/AppRoutes.jsx";



export default function App() {
  return <AppRoutes/>
}
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 3000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       <SGlobal />
//       <div className="wrapper">
//         {/* <!-- pop-up start--> */}

        
//         <PopNewCard />
//         <PopBrowse />
//         <PopUser />

//         {/* <!-- pop-up end--> */}

//         {loading ? (
//           <>
//             <Header /> <p className="loud">Идёт загрузка...</p>{" "}
//           </>
//         ) : (
//           <>
//             <Header />
//             <Main />
//           </>
//         )}
//       </div>

//       <script src="js/script.js"></script>
//     </>
//   );
// }
