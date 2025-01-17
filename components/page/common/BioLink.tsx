import Link from 'next/link';
import Image from 'next/image';

export type BioLinkProps = {
  url: string;
  title: string;
  iconUrl?: string | null;
};

const BioLink = ({ link }: { link: BioLinkProps }) => {
  const { url, title, iconUrl } = link;

  return (
    <div className='relative'>
      <Link href={url} target="_blank" rel="noopener noreferrer" className="p-2.5 py-4 flex items-center justify-center rounded-full bg-stone-400 text-white text-sm shadow-sm hover:shadow-lg transition-all duration-300">
        {iconUrl && <Image src={iconUrl} alt={title} width={36} height={36} className='rounded-full aspect-[1/1] absolute left-2.5 top-1/2 -translate-y-1/2' />}
        <span>{title}</span>
      </Link>
    </div>
  );
};

export default BioLink;
