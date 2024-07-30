import Header from "./Header";
import FeedbackList from "./FeedbackList";
import { TFeedbackItem } from "../lib/types";

type TContainerProps = {
  feedbackItems: TFeedbackItem[];
  isLoading: boolean;
  errorMessage: string;
};

export default function Container({
  feedbackItems,
  isLoading,
  errorMessage,
}: TContainerProps) {
  return (
    <section className="container flex bg-white">
      <Header />
      <FeedbackList
        feedbackItems={feedbackItems}
        isLoading={isLoading}
        errorMessage={errorMessage}
      />
    </section>
  );
}
