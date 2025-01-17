import FrontUser from "@/components/page/frontUser/FrontUser";

export type ParamsProps = {
  id: string
};

const Page = async ({ params } : { params: ParamsProps }) => {
  const { id } = params;

  return <FrontUser />
};

export default Page;