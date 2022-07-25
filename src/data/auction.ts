import type { Auction } from '@/types/auction'

export const auction: Auction = {
  subtitle: 'E4C Rangers NFT Series 1',
  subtitleFocus: 'Ultimate Edition',
  title: 'auction event',
  images: [
    'https://ambrus.s3.amazonaws.com/1657877346203_0.92_206.jpg',
    'https://ambrus.s3.amazonaws.com/1657877346199_0.09_204.jpg',
    'https://ambrus.s3.amazonaws.com/1657877346191_0.92_107.jpg ',
    'https://ambrus.s3.amazonaws.com/1657877346186_0.34_105.jpg ',
    'https://ambrus.s3.amazonaws.com/1657877346176_0.08_102.jpg'
  ],
  detail: [
    {
      title: 'The Ultimate Utilities',
      introduction: [
        {
          title: '2%',
          content: 'Exclusive IP didvidend ownership',
          style: {}
        },
        {
          title: 'E4C',
          content: 'Governance token airdrop',
          style: {}
        },
        {
          title: 'Loots',
          content: '& other in-game assets airdrops',
          style: {}
        },
        {
          title: 'VIP',
          content: 'RSVP, bid, and get our exclusive customized NFT airdrop and more',
          style: {}
        }
      ]
    },
    {
      title: 'Details of the Auction Event',
      introduction: [
        {
          title: 'When',
          content: 'July 31st 9AM EST - <br> August 6th 9AM EST',
          style: {
            lineHeight: '51px',
            fontSize: '42px'
          }
        },
        {
          title: 'How',
          content:
            'Open ascending bid auction in which the highest bidder wins and pays the second highest price',
          style: {
            lineHeight: '51px',
            fontSize: '42px'
          }
        },
        {
          title: 'Where',
          content: 'OpenSea',
          style: {
            lineHeight: '51px',
            fontSize: '42px'
          }
        },
        {
          title: 'How much',
          content: 'Starting from 6.5 ETH',
          style: {
            lineHeight: '51px',
            fontSize: '42px'
          }
        }
      ]
    }
  ],
  notes: {
    title: 'Rin',
    subtitle: 'Heir of Musashi',
    content: `Rin is the first ranger came to life in <a href="#">E4C Verse</a>. We crafted 15 best-quality 3D arts as our one-of-one NFTs, each having a meaningful background, the most special texture and color combinations, and ultimately unique vibes.<br/><br/>She’ll also make an appearance in our upcoming games, <a href="#">E4C Final Salvation</a>.`
  },
  actions: {
    text: 'Sign up and get 5% off the bidding price',
    button: 'RSVP for the auction', // Big on Opensea
    link: 'https://forms.gle/wNDrwLKkbCwfW44EA',
    buttonStyle: {
      backgroundColor: '#ff4125' // #2081E2
    }
  }
}
