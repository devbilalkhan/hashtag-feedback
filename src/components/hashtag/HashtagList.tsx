import HashtagItem from "./HashtagItem";
// import useFeedback from "../../lib/hooks";
import { useFeedbackItemStore } from "../../stores/feedbackItemStore";

export default function HashtagList() {
  const companyList = useFeedbackItemStore((state) => state.getCompanyList());
  return (
    <section className="py-8">
      <div className="flex flex-wrap gap-y-2">
        {companyList.map((company: string, index: number) => (
          <HashtagItem key={`${company}-${index}`} company={company} />
        ))}
      </div>
    </section>
  );
}
