import { Tweet } from 'react-tweet';

const tweets = [
  '1853171412766466119',
  '1853560800050651632',
  '1853447982781239383',
  '1853242495540363750',
  '1853191842377941445',
  '1853201667480527032',
  '1853535228746489966',
  '1853172223533633623',
  '1853210238586876361',
  '1853763013406265717',
  '1853180857198014719',
  '1853246071566180575',
  '1853318197891490178',
  '1853202171350884569',
  '1853188496288100420',
  '1853183811195949065',
  '1853174376696623129',
  '1853310553407762491',
  '1853556609030434979',
  '1853734512024334340',
  '1853769403541639569',
  '1853436749650755708',
  '1853448825454592211',
  '1853434573339738583',
  '1853429177459905008',
  '1853423751464952051',
  '1853368337889100159',
  '1853367222946918616',
  '1853301610656698479',
  '1855655408112722325',
  '1856003447549538392',
  '1855956182823014891',
  '1855656670346825737',
  '1856003447549538392',
  '1856782547046600770',
  '1856800101718499701',
];

export const Social = () => (
  <div className="py-24 sm:py-32">
    <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
      <h2 className="font-medium text-base/7 text-neutral-500 dark:text-neutral-400">
        Loved by the community
      </h2>
      <p className="mt-2 max-w-lg text-pretty font-bold text-3xl text-neutral-950 tracking-tighter sm:text-4xl sm:text-5xl dark:text-white">
        Free and open source, forever.
      </p>
      <div className="mt-10 columns-1 gap-4 sm:mt-16 md:columns-2 lg:columns-3">
        {tweets.map((tweet, index) => (
          <div key={tweet} className={index ? '' : 'sm:-mt-6'}>
            <Tweet id={tweet} />
          </div>
        ))}
      </div>
    </div>
  </div>
);
