import Container from "./components/Container";
import Footer from "./components/Footer";

import Pattern from "./components/Pattern";
import HashtagList from "./components/HashtagList";
function App() {
  return (
    <main className="bg-indigo-50">
      <Pattern />
      <div className="bg-tranparent max-w-screen-md mx-auto relative mb-4 mt-[-46rem] flex flex-col justify-center divide-x">
        <HashtagList />
        <Container />
      </div>
      <Footer />
    </main>
  );
}
export default App;
