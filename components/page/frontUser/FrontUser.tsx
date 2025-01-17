import { v4 as uuidv4 } from 'uuid';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Skeleton } from '@/components/ui/skeleton';

import { LuInstagram, LuFacebook, LuYoutube } from 'react-icons/lu';
import { FaThreads } from 'react-icons/fa6';

import SocialMediaList from '../common/SocialMediaList';
import SocialMediaLink from '../common/SocialMediaLink';

import BioList from '../common/BioList';
import BioLink from '../common/BioLink';

const mockSicialLinks = [
  {
    type: 'INSTAGRAM',
    url: 'https://www.instagram.com/lionms200789',
    icon: LuInstagram,
  },
  {
    type: 'FACEBOOK',
    url: 'https://www.facebook.com/lionms200789',
    icon: LuFacebook,
  },
  {
    type: 'YOUTUBE',
    url: 'https://www.youtube.com/lionms200789',
    icon: LuYoutube,
  },
  {
    type: 'THREADS',
    url: 'https://www.threads.com/lionms200789',
    icon: FaThreads,
  },
];

const mockBioLinks = [
  {
    url: `https://www.google.com`,
    title: `美冴大屁屁妖怪小氣老太婆`,
    iconUrl: 'https://stickershop.line-scdn.net/stickershop/v1/product/19285/IOS/main_popup.png?20190801',
  },
  {
    url: `https://www.spotigy.com`,
    title: `我的 Spotify 歌單`,
    iconUrl: 'https://web.ntnu.edu.tw/~40047006S/hw1/7.jpg',
  },
  {
    url: `https://www.google.com`,
    title: `廣志臭腳`,
    iconUrl: 'https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/0783062d0d860b8ae7d8e859241a700359c4d981.png',
  },
  {
    url: `https://www.google.com`,
    title: `小白棉花糖`,
    iconUrl: 'https://web.ntnu.edu.tw/~40047006S/hw1/8.jpg',
  },
  {
    url: `https://www.google.com`,
    title: `娜娜子大姊姊`,
    iconUrl: '',
  },
];

const FrontUser = () => {
  return (
    <>
      <div className="flex items-center justify-center pb-5">
        {/** 大頭貼 */}
        <Avatar>
          <AvatarImage src="https://stickershop.line-scdn.net/stickershop/v1/product/19285/IOS/main_popup.png?20190801" alt="" />
          <AvatarFallback>
            <Skeleton className="w-full h-full rounded-full" />
          </AvatarFallback>
        </Avatar>
      </div>

      {/** 主頁標題 */}
      <div className="leading-normal text-center text-xl font-bold">
        <h2>出發茄子醬菜！</h2>
      </div>

      {/** 個人簡介 bio */}
      <div className="text-center text-sm pt-5">
        <p>就讀雙葉幼稚園向日葵班，春日部防衛隊隊員之一。招牌服裝為紅色短T-shirt配上黃色短褲、白色襪子、和黃色鞋子，髮型為黑色平頭。最愛的人是大原娜娜子。喜歡看動感超人、剛達姆機器人和魔法少女可愛P。</p>
      </div>

      {/** 社群媒體連結 */}
      <SocialMediaList>
        {mockSicialLinks.map((linkItem) => (
          <SocialMediaLink key={uuidv4()} link={linkItem} />
        ))}
      </SocialMediaList>

      {/** bio 連結 */}
      <BioList>
        {[...mockBioLinks, ...mockBioLinks].map((linkItem) => (
          <BioLink key={uuidv4()} link={linkItem} />
        ))}
      </BioList>
    </>
  );
};

export default FrontUser;
