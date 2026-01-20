import { FaGithub } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { FaBlog } from 'react-icons/fa';
import { SOCIAL } from "../constants/index.jsx";

const SocialLinkCard = ({ href, children }) => {
    return (
        <a
            className="bg-white p-3 rounded-xl shadow-sm border border-neutral-content flex justify-center items-center aspect-square cursor-pointer transition hover:bg-base-200"
            href={href}
            target="_blank"
        >
            {children}
        </a>
    );
};

const SOCIAL_LINKS = [
    { href: SOCIAL.github, Icon: FaGithub, label: "GitHub" },
    { href: SOCIAL.twitter, Icon: BsTwitterX, label: "Twitter" },
    { href: SOCIAL.blog, Icon: FaBlog, label: "Blog" },
];

export const Social = () => {
    return (
        <>
            <section className="py-12 lg:py-20" id="social">
                <div className="container max-w-4xl mx-auto px-5">
                    <div>
                        <p className="font-bold text-primary md:text-center">Social</p>

                        <h2 className="mb-4 text-2xl font-bold sm:text-3xl md:mb-6 md:text-center">
                            ソーシャル
                        </h2>

                        <p className="mb-6 md:text-center">
                            主に以下の媒体で活動しています。
                        </p>

                        <div className="grid grid-cols-3 gap-4 max-w-80 mx-auto">
                            {SOCIAL_LINKS.map(({ href, Icon, label }) => (
                                <SocialLinkCard key={label} href={href}>
                                    <Icon className="text-primary w-10 h-10" />
                                </SocialLinkCard>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};