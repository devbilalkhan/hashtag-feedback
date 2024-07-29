import Header from "./Header";
import FeedbackList from "./FeedbackList";
import HashtagList from "./HashtagList";
export default function Container() {
  return (
    <section className="flex justify-center gap-4 ">
      <div className="container bg-white">
        <Header />
        <FeedbackList />
      </div>
      <HashtagList />
    </section>
  );
}
