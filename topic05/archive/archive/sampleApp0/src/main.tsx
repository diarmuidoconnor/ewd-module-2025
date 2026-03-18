import ReactDOM from 'react-dom/client'
import Counter from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Counter jump={5} />
)
