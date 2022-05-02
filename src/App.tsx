import {init} from 'emailjs-com';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import {theme} from './config/theme';
import {Home} from './pages/Home';
import Teams from './pages/Teams';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Init emailJs for contact form
init(process.env.REACT_APP_EMAILJS_USER_ID ?? '');

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/team" component={Teams} />
        </Switch>
        <div class='cookie-banner' style='display: none'>
        <p>
        By using our website, you agree to our 
        <a href='https://deftify.io'>cookie policy</a>
        </p>
        </div>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
