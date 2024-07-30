type HastagItemProps = {
  company: string;
  onSelectHashtag: (company: string) => void;
};

const HashtagItem = ({ company, onSelectHashtag }: HastagItemProps) => {
  return (
    <button
      onClick={() => onSelectHashtag(company)}
      className="me-2 rounded border border-gray-800 bg-gray-800 px-2.5 py-0.5 text-sm font-medium text-white transition-transform duration-300 ease-in-out hover:scale-110 hover:border-yellow-500 hover:bg-yellow-500 hover:text-black"
    >
      {`#${company}`}
    </button>
  );
};

export default HashtagItem;
