import { useEffect, useState } from "react";
import FeedbackItem from "./FeedbackItem";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";
type FeedbackItemType = {
  id: number;
  upvoteCount: number;
  badgeLetter: string;
  companyName: string;
  text: string;
  daysAgo: number;
};

export default function FeedbackList() {
  const [feedbackItems, setFeedbackItems] = useState<FeedbackItemType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
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
    fetchComments();
  }, []);
  return (
    <div className="w-full">
      {<ErrorMessage message={errorMessage} />}
      {isLoading && <Spinner />}
      <ol className="flex flex-col">
        {feedbackItems.map((feedbackItem: FeedbackItemType) => (
          <FeedbackItem {...feedbackItem} key={feedbackItem.id} />
        ))}
      </ol>
    </div>
  );
}
