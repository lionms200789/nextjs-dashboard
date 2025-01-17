import Link from "next/link";
import { IconType } from "react-icons";

export type SocialMediaLinkProps = {
  url: string;
  type: string;
  icon: IconType
}

const SocialMediaLink = ({ link }: { link: SocialMediaLinkProps }) => {
  const { icon: Icon, url} = link;

  return <>
    <Link href={url} target="_blank" rel="noopener noreferrer">
      <Icon className="w-6 h-6" />
    </Link>
  </>
};

export default SocialMediaLink;