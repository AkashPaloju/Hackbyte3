import Image from "next/image";
import { StaticImageData } from "next/image";

import galleryPageSticker from "@/public/gallerySticker.webp";
import faqsPageSticker from "@/public/faqsSticker.webp";
import humansPageSticker from "@/public/humansSticker.webp";

const redirectingData = [
	{
		title: "Gallery",
		link: "/gallery",
		image: galleryPageSticker,
	},
	{
		title: "FAQS",
		link: "/faqs",
		image: faqsPageSticker,
	},
	{
		title: "Humans",
		link: "/humans",
		image: humansPageSticker,
	},
];

interface RedirectCardsProps {
	title: string;
	link: string;
	image: StaticImageData;
};

const RedirectingCard = ({ title, link, image }: RedirectCardsProps) => {
	return (
		<a href={link}>
			<div
				className="bg-[#333333] rounded-[22px] flex flex-col gap-2 items-center justify-center
                      p-[16px] shadow-lg"
			>
				<Image src={image} alt={title} />
				<h3 className="text-white lg:text-[40px]">{title}</h3>
			</div>
		</a>
	);
};

const YetToBeDisclosed: React.FC = () => {
	return (
		<div
			className="flex flex-col items-center justify-center text-center
                rounded-[40px] lg:pt-[22px] lg:pb-[66px] lg:mx-20 xl:mx-28 lg:my-10 border-2 border-[#333333] border-dashed"
		>
			<h1 className="text-white lg:text-[64px] font-medium page-title">
				Yet to be disclosed
			</h1>
			<p className="text-supporting-mediumGray lg:text-[24px]">
				These details are not yet disclosed, so stay sharp.
			</p>
			<h3 className="text-white lg:text-[32px] lg:mt-[40px]">Meanwhile,</h3>
			<p className="text-supporting-mediumGray lg:text-[24px] lg:mb-[40px]">
				why don&apos;t you check these out!
			</p>
			<div className="flex lg:gap-[44px]">
				{redirectingData.map((data) => (
					<RedirectingCard
						key={data.title}
						title={data.title}
						link={data.link}
						image={data.image}
					/>
				))}
			</div>
		</div>
	);
};

export default YetToBeDisclosed;
