
const FrontUserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="min-h-dvh flex items-center justify-center">
      <div className="max-w-[480px] w-screen grow self-stretch px-5 py-10">{children}</div>
    </section>
  );
};

export default FrontUserLayout;
