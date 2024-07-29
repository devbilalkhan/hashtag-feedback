import Container from "./components/Container";
import Footer from "./components/Footer";

import Pattern from "./components/Pattern";

function App() {
  return (
    <>
      <Pattern />
      <div className="bg-tranparent relative mb-4 mt-[-42rem]">
        <Container />
      </div>
      <Footer />
    </>
  );
}
export default App;
