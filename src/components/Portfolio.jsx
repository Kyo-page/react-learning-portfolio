import { useState } from 'react';
import { FaHandshakeSimple } from 'react-icons/fa6';
import { BsChatRightQuoteFill } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';
export const Portfolio = () => {
    const works = [
        {
            id: 0,
            title: (
                <>
                    ポートフォリオ
                    <br />
                    サイト
                </>
            ),
            image: 'https://b13o.github.io/react-portfolio//warikan-culculator.png',
            description: 'Reactを使ってポートフォリオサイトを作成しました。',
            icon: <FaHandshakeSimple className="text-white" />,
        },
        {
            id: 1,
            title: '名言ジェネレータ',
            image: 'https://b13o.github.io/react-portfolio//warikan-culculator.png',
            description: 'APIを使った名言生成アプリです。',
            icon: <BsChatRightQuoteFill className="text-white" />,
        },
        {
            id: 2,
            title: 'アプリ3',
            image: 'https://b13o.github.io/react-portfolio//warikan-culculator.png',
            description: '',
            icon: <BsChatRightQuoteFill className="text-white" />,
        },
        {
            id: 3,
            title: 'アプリ4',
            image: 'https://b13o.github.io/react-portfolio//warikan-culculator.png',
            description: '',
            icon: <BsChatRightQuoteFill className="text-white" />,
        },
    ];

    const [activeId, setActiveId] = useState(0);
    const activeWork = works[activeId];
    return (
        <>
            <section className="bg-base-200 py-12 lg:py-20" id="portfolio">
                <div className="container max-w-4xl mx-auto px-5">
                    <div>
                        <p className="font-bold text-primary md:text-left">Portfolio</p>

                        <h2 className="mb-4 text-2xl font-bold sm:text-3xl md:mb-6 md:text-left">
                            製作事例
                        </h2>

                        <p className="mb-6 sm:text-lg">
                            学習を通じて、実際に開発した成果物のリストです🤖
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-x-6 items-stretch">
                            {/* 左カラム */}
                            <div className="grid grid-cols-2 md:grid-cols-1 gap-4 h-full">
                                {works.map((work) => (
                                    <button
                                        key={work.id}
                                        onClick={() => setActiveId(work.id)}
                                        className={`py-3 md:py-6 px-4 rounded-xl shadow-sm grid md:grid-cols-[auto_1fr] gap-2 md:gap-4 items-center cursor-pointer border transition
        ${activeId === work.id
                                                ? 'bg-base-200 border-primary'
                                                : 'bg-white border-neutral-content hover:bg-base-200'
                                            }`}
                                    >
                                        <div className="bg-primary text-xl md:text-3xl h-12 w-12 md:h-16 md:w-16 rounded-full flex justify-center items-center">
                                            {work.icon}
                                        </div>
                                        <h3 className="font-medium text-stone-800 text-left">
                                            {work.title}
                                        </h3>
                                    </button>
                                ))}
                            </div>

                            {/* 右カラム */}
                            <div className="w-full h-full col-span-2 grid lg:grid-rows-4 border border-neutral-content rounded-xl overflow-hidden shadow-lg transition">
                                <div className="row-span-3">
                                    <img
                                        src={activeWork.image}
                                        alt={activeWork.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="bg-white p-5 row-span-1">
                                    <p className="text-stone-600 mb-2">{activeWork.description}</p>
                                    <a
                                        className="text-secondary underline"
                                        href="#"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FiExternalLink className="inline-block mr-1" />
                                        <span>View on GitHub</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};