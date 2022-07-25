export type AuctionImages = string
export type AuctionDetail = {
  title: string
  introduction: {
    title: string
    content: string
    style: { [key: string]: string }
  }[]
}
export type AuctionNotes = {
  title: string
  subtitle: string
  content: string
}
export type AuctionActions = {
  text: string
  button: string
  link: string
  buttonStyle: { [key: string]: string }
}

export type Auction = {
  subtitle: string
  subtitleFocus: string
  title: string
  images: AuctionImages[]
  detail: AuctionDetail[]
  notes: AuctionNotes
  actions: AuctionActions
}
