import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import store from './store';
import {Helmet, HelmetProvider} from 'react-helmet-async';
import { Provider } from 'react-redux';
import RoutesAnimated from 'RoutesAnimated';





function App() {
  
  return (
    <HelmetProvider>
    <Helmet>
      <title>M41k80 | Software Agency</title>
      <meta name="description" content="M41k80 is a software agency that provides services to businesses in the software industry. We offer a wide range of services including web development, app development, digital marketing, and more." />
      <meta name="keywords" content='agencia de software, software agency, web development, creacion de pagina web' />
      <meta name="robots" content="all" />
      <link rel="canonical" href="" />
      <meta name="author" content="M41k80" />
      <meta name='publisher' content='M41k80' />

       {/* social media tags */}
      <meta property="og:title" content="M41k80 | Software Agency" />
      <meta property="og:description" content="M41k80 is a software agency that provides services to businesses in the software industry. We offer a wide range of services including web development, app development, digital marketing, and more." />
      <meta property="og:url" content="" />
      <meta property="og:site_name" content="M41k80 | Software Agency" />
      <meta property="og:image" content="" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@m41k80" />
      <meta name="twitter:creator" content="@m41k80" />
      <meta name="twitter:title" content="M41k80 | Software Agency" />
      <meta name="twitter:description" content="M41k80 is a software agency that provides services to businesses in the software industry. We offer a wide range of services including web development, app development, digital marketing, and more." />
      <meta name="twitter:image" content="" />
      <meta name="twitter:url" content="" />
    </Helmet>
    <Provider store={store}>
    <Router>

    
      <RoutesAnimated />
   </Router>


    </Provider>
    </HelmetProvider>
   
  );
}

export default App;
