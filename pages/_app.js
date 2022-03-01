import NavBar from "../components/NavBar";
import "../styles/globals.css";
export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <span>hello</span>
      <style jsx global>{`
        nav {
          background-color: tomato;
        }
        a {
          text-decoration: none;
        }
        .active {
          color: #fff;
        }
      `}</style>
    </>
  );
}
