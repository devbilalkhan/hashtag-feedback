import { useContext, useEffect, useState } from "react";
import { FeedbackContext } from '../context/FeedbackContextProvider';
import { TFeedbackItem } from "./types";

export default function useFeedback() {
  return useContext(FeedbackContext)
}


export function useFeedbackItems() {
  const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
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
  return {
    feedbackItems,
    isLoading,
    errorMessage,
    setFeedbackItems
  }

}