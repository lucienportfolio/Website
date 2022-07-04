import type { NFTItem } from '@/types'

const demoNFTItem: NFTItem = {
  id: 1,
  bannerImages: [
    'http://localhost:3000/demo/images/nft-banner-thorn.png',
    'http://localhost:3000/demo/images/nft-banner-thorn@2x.png',
    'http://localhost:3000/demo/images/nft-banner-thorn@3x.png'
  ],
  disclaimer: {
    images: [
      'http://localhost:3000/demo/images/nft-disclaimer.png',
      'http://localhost:3000/demo/images/nft-disclaimer.png',
      'http://localhost:3000/demo/images/nft-disclaimer.png'
    ],
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id vestibulum diam. Sed aliquet dolor leo, eu facilisis magna porta vel. Etiam vulputate augue ac odio suscipit interdum. Donec nec auctor lectus, eu molestie odio. Nullam euismod, felis eu venenatis tincidunt, arcu enim dictum est, quis viverra nisl est quis est. Nulla facilisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris tincidunt est nec tortor pellentesque finibus. Suspendisse lacinia eu metus id lacinia. Nullam elementum nisl dui, ut iaculis est tristique eget. Suspendisse odio magna, gravida ultricies molestie in, blandit vel dui. Nam convallis ante lacus, a interdum orci bibendum ut. Sed placerat augue vehicula diam bibendum commodo. Sed a porta orci.'
  }
}

export async function getNFTItemInfo(id: number | string): Promise<NFTItem> {
  return demoNFTItem
}
