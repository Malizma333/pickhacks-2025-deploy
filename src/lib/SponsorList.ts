import { ISponsor } from '@/interfaces/ISponsor';
import { accenture, tradebot, shelter, johndeere, sandia, nisc, veteransunited, garmin } from './Images';

export const GoldSponsors: ISponsor[] = [
	// {
	// 	logo: tradebot.src,
	// 	link: '',
	// },
  {
		logo: nisc.src,
		link: 'https://www.nisc.coop/',
	},
  {
		logo: veteransunited.src,
		link: 'https://www.veteransunitedinsurance.com/',
	},
];

export const SilverSponsors: ISponsor[] = [
	// {
	// 	logo: johndeere.src,
	// 	link: 'https://www.deere.com/en/index.html', //no link in database
	// },
	{
		logo: garmin.src,
		link: 'https://www.garmin.com/',
	},
];

export const BronzeSponsors: ISponsor[] = [
	// {
	// 	logo: tradebot.src,
	// 	link: 'https://www.tradebot.com/',
	// },
	// {
	// 	logo: accenture.src,
	// 	link: 'https://boards.greenhouse.io/accenturefederalservices/jobs/4271718006?gh_jid=4271718006',
	// },
	// {
	// 	logo: shelter.src,
	// 	link: 'https://www.shelterinsurance.com/',
	// },
	// {
	// 	logo: sandia.src,
	// 	link: 'https://www.sandia.gov/careers/',
	// },
];
