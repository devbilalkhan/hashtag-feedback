import Container from "./components/Container";
import Footer from "./components/Footer";

import Pattern from "./components/Pattern";
import HashtagList from "./components/HashtagList";
import { TFeedbackItem } from "./lib/types";
import { useEffect, useState } from "react";
function App() {
  const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleAddFeedbackItem = (text: string) => {
    const companyName = text
      .split(" ")
      .find((word: string) => word.includes("#"))!
      .substring(1);

    const newItem: TFeedbackItem = {
      id: new Date().getTime(),
      text: text,
      upvoteCount: 0,
      daysAgo: 0,
      companyName: companyName,
      badgeLetter: companyName.substring(0, 1).toUpperCase(),
    };
    setFeedbackItems([...feedbackItems, newItem]);
  };

  const fetchComments = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
      );

      if (!response.ok) {
        throw new Error();
      }
      const data = await response.json();
      setFeedbackItems(data.feedbacks);
    } catch (e) {
      setErrorMessage("An Error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);
  return (
    <main className="bg-indigo-50">
      <Pattern />
      <div className="bg-tranparent relative mx-auto mb-4 mt-[-46rem] flex max-w-screen-md flex-col justify-center divide-x">
        <HashtagList />
        <Container
          feedbackItems={feedbackItems}
          isLoading={isLoading}
          errorMessage={errorMessage}
        />
      </div>
      <Footer />
    </main>
  );
}
export default App;
