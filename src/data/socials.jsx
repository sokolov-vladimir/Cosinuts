import facebook from "./../assets/images/icon_social_facebook.svg";
import instagram from "./../assets/images/icon_social_instagram.svg";
import telegram from "./../assets/images/icon_social_telegram.svg";
import twitter from "./../assets/images/icon_social_twitter.svg";
import whatsapp from "./../assets/images/icon_social_whatsapp.svg";
import youtube from "./../assets/images/icon_social_youtube.svg";
import { constants } from "../constants/constants";

export const socials = [
	{
		title: constants.socials.altFacebook,
		href: constants.socials.refFacebook,
		img: facebook,
	},
	{
		title: constants.socials.altInstagram,
		href: constants.socials.refInstagram,
		img: instagram,
	},
	{
		title: constants.socials.altTelegram,
		href: constants.socials.refTelegram,
		img: telegram,
	},
	{
		title: constants.socials.altTwitter,
		href: constants.socials.refTwitter,
		img: twitter,
	},
	{
		title: constants.socials.altWhatsapp,
		href: constants.socials.refWhatsapp,
		img: whatsapp,
	},
	{
		title: constants.socials.altYoutube,
		href: constants.socials.refYoutube,
		img: youtube,
	},
];
