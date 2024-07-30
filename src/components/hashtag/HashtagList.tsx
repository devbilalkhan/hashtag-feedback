import HashtagItem from "./HashtagItem";

type HashtagListProps = {
  companyList: string[];
  handleSelectHashtag: (company: string) => void;
};

export default function HashtagList({
  companyList,
  handleSelectHashtag,
}: HashtagListProps) {
  return (
    <section className="py-8">
      <div className="flex flex-wrap gap-y-2">
        {companyList.map((company: string, index: number) => (
          <HashtagItem
            key={`${company}-${index}`}
            company={company}
            onSelectHashtag={handleSelectHashtag}
          />
        ))}
      </div>
    </section>
  );
}
