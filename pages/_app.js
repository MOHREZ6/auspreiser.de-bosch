import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
 
 

function MyApp({ Component, pageProps }) {
  return <div className="bg-info">
    
      <Component {...pageProps} />
      </div>
  ;
}
export default MyApp;
