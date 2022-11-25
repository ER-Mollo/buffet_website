// import logo from './logo.svg';
import '../App.scss';
import Projects from '../Projects/Project';
import Header from './header/header';
import About from './about/about';
import Comments from './comments/comment';


function Main() {
  return (
    <div className="app">
        <Header/>
        <About/>
        <Projects/>
        <Comments/>
    </div>

  );
}

export default Main;
