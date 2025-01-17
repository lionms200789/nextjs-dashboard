
const SocialMediaList = ({ children }: { children: React.ReactNode }) => {
  return <div className="max-w-[75%] mx-auto overflow-x-auto pt-6">
    <div className="w-fit mx-auto flex items-center justify-center gap-4">
    {children}
  </div>
  </div>
};

export default SocialMediaList;