import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";

import Pattern from "./components/Pattern";
import HashtagList from "./components/hashtag/HashtagList";
import FeedbackContextProvider from "./context/FeedbackContextProvider";

function App() {
  return (
    <main className="bg-indigo-50">
      <Pattern />
      <div className="bg-tranparent relative mx-auto mb-4 mt-[-46rem] flex max-w-screen-md flex-col justify-center divide-x">
        <FeedbackContextProvider>
          <HashtagList />
          <Container />
        </FeedbackContextProvider>
      </div>
      <Footer />
    </main>
  );
}
export default App;
