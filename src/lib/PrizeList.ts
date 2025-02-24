import { IPrize } from '@/interfaces/IPrize';
import { flashforge, metaquest3, acer, kingspec, giftcard, beats, redragon } from './Images';

export const PrizeList: IPrize[] = [
	{
		id: 1,
		img: flashforge.src,
		title: 'Overall 1st Place',
		description: '4x FLASHFORGE Adventurer 5M Pro 3D Printer',
		link: 'https://a.co/d/8LdsziJ',
	},
	{
		id: 2,
		img: metaquest3.src,
		title: 'Overall 2nd Place',
		description: '4x Meta Quest 3s',
		link: 'https://www.meta.com/quest/quest-3s/',
	},
	{
		id: 3,
		img: acer.src,
		title: 'Overall 3rd Place',
		description: '4x ACER Nitro 27" 1500R Curved Gaming Monitor',
		link: 'https://a.co/d/b1gg3Ek',
	},
	{
		id: 4,
		img: kingspec.src,
		title: 'Best Hardware Hack',
		description: '4x KingSpec Z5 1TB External SSD',
		link: 'https://a.co/d/4vklbR5',
	},
	{
		id: 5,
		img: giftcard.src,
		title: "Best Women's Hack",
		description: '4x $50 Amazon Gift Card',
		link: 'https://www.amazon.com/gift-cards/b?ie=UTF8&node=2238192011',
	},
	{
		id: 6,
		img: giftcard.src,
		title: 'Community Vote',
		description: '4x $50 Amazon Gift Card',
		link: 'https://www.amazon.com/gift-cards/b?ie=UTF8&node=2238192011',
	},
	{
		id: 7,
		img: beats.src,
		title: 'Best Solo Hack',
		description: '1x Beats Fit Pro',
		link: 'https://a.co/d/2xynlZN',
	},
	{
		id: 8,
		img: redragon.src,
		title: 'Best Beginner Hack',
		description: '4x Redragon Mechanical Noise Canceling Foam Keyboard',
		link: 'https://a.co/d/b7rwfBP',
	},
	{
		id: 9,
		img: giftcard.src,
		title: 'Raffle Prizes',
		description: '3x $25 Amazon Gift Card',
		link: 'https://www.amazon.com/gift-cards/b?ie=UTF8&node=2238192011',
	},
];
