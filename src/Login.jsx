import Header from "./components/Header";
import Banner from "./components/Banner";
import Signin from "./components/Sign-in";
import Recharge from "./components/Recharge";
import Footer from "./components/Footer";
function Login() {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          background: "#fff",
        }}
      >
        <Header />
        <div
          style={{
            // overflow: "scroll",
            overflowY: "scroll",
            width: "100%",
            height: "90vh",
          }}
        >
          <Banner />
          <Signin />
          <Recharge />
          <Footer/>
        </div>
      </div>
    </>
  );
}
export default Login;
