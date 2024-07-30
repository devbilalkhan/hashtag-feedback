import Header from "./Header";
import FeedbackList from "../feedback/FeedbackList";
import { TFeedbackItem } from "../../lib/types";

type TContainerProps = {
  feedbackItems: TFeedbackItem[];
  isLoading: boolean;
  errorMessage: string;
  handleAddFeedbackItem: (text: string) => void;
};

export default function Container({
  feedbackItems,
  isLoading,
  errorMessage,
  handleAddFeedbackItem,
}: TContainerProps) {
  return (
    <section className="container flex bg-white">
      <Header handleAddFeedbackItem={handleAddFeedbackItem} />
      <FeedbackList
        feedbackItems={feedbackItems}
        isLoading={isLoading}
        errorMessage={errorMessage}
      />
    </section>
  );
}
