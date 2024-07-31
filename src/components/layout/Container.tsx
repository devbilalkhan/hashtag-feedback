import Header from "./Header";
import FeedbackList from "../feedback/FeedbackList";

export default function Container() {
  return (
    <section className="container flex bg-white">
      <Header />
      <FeedbackList />
    </section>
  );
}
