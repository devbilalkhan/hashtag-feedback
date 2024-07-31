import FeedbackForm from "../feedback/FeedbackForm";
import Logo from "../Logo";


export default function Header() {
  
  return (
    <header className="flex flex-col gap-y-6 border-b-2 px-4">
      <Logo />
      <FeedbackForm  />
    </header>
  );
}
