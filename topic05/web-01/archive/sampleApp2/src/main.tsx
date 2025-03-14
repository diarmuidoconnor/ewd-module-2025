import ReactDOM from 'react-dom/client'
import FriendsApp from './App';

const styles = {
   container: {
     display: 'flex',
     flexDirection: 'column',
     justifyContent: 'flex-start', // Aligns children to the top

   },
   content: {
     marginTop: '20px', // Optional: Adds space from the top
   },
 };

ReactDOM.createRoot(document.getElementById('root')!).render(
 // <React.StrictMode>
 //<div style={styles.container}>
    <FriendsApp />
//</div>
 // </React.StrictMode>,
)
