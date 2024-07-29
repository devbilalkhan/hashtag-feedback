import FeedbackForm from "./FeedbackForm";
import Logo from "./Logo";
import PageHeading from "./PageHeading";

export default function Header() {
  return (
    <div>
      <Logo />
      <PageHeading />
      <FeedbackForm />
    </div>
  );
}
