import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Donations from "../../components/Donations";
import Masthead from "../../components/Masthead";
import Home from "..";

/**
 *  @description
 *  This is the root (or index) page of our application.
 *
 *  @summary
 *  From the folder structure (being the index page), you can access this page via ---> http://localhost:3000/
 * 
 *  @requires
 *  Your server to be running ---> Run `npm run dev` in your terminal
 */

function Example() {
  return (
    <div>
        <Masthead />
      <Navbar />

      <section>
        <div className="container">
          <h1>Welcome to Example</h1>
          <p>
            Yo, you are at example page
          </p>
        </div>
      </section>
      <Donations />
      <Footer />
    </div>
  );
}

export default Example;
