const Spinner = () => {
  return (
    <>
      <div className="flex h-32 items-center justify-center py-24">
        <div className="text-surface inline-block h-24 w-24 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-gray-400 motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
      </div>
    </>
  );
};

export default Spinner;
