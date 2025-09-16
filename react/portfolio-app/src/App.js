import './css/style.css';
// import './css/style2.css';
import { Header } from './components/Header.jsx';
// import { Header2 } from './components/Header2.jsx';
import { Content } from './components/Content.jsx';
// import { Content2 } from './components/Content2.jsx';

export default function App() {
  return (
      <div>
        <Header/>
        <Content/>
      </div>
  );
}