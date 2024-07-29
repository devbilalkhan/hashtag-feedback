import FeedbackForm from "./FeedbackForm";
import Logo from "./Logo";
import PageHeading from "./PageHeading";
import Pattern from "./Pattern";

export default function Header() {
  return (
    <div>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm />
    </div>
  );
}
