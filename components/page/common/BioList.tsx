
const BioList = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-5 pt-8">
      {children}
    </div>
  );
};

export default BioList;