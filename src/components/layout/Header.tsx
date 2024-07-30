import FeedbackForm from "../feedback/FeedbackForm";
import Logo from "../Logo";

type HeaderProps = {
  handleAddFeedbackItem: (text: string) => void;
};

export default function Header({ handleAddFeedbackItem }: HeaderProps) {
  return (
    <header className="flex flex-col gap-y-6 border-b-2 px-4">
      <Logo />
      <FeedbackForm onAddFeedbackItem={handleAddFeedbackItem} />
    </header>
  );
}
