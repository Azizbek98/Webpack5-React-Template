import ClickCounter from './components/ClickCounter';
import ImageComp from './components/ImageComp';
import './App.scss';
import './App.css';

const App: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div>
      <h1>Hello {title}</h1>
      <h2>Application running on {process.env.webpackMode} mode</h2>
      <ImageComp />
      <hr />
      <ClickCounter />
    </div>
  );
};

export default App;
