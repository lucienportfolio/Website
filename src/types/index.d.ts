export type NFTItemInfo = {
  id: string | number
  bannerImages: string | string[]
}

export type NFTItemDisclaimer = {
  images: string | string[]
  content: string
}

export type NFTItem = NFTItemInfo & {
  disclaimer: NFTItemDisclaimer
}
