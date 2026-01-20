import { FaGithub } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
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
                            私は、主に下記の媒体で、活動の記録を更新しています。
                            <br />
                            そして、多くの開発者と繋がれることを、楽しみにしています🙌
                        </p>

                        <div className="grid grid-cols-3 gap-4 max-w-80 mx-auto">
                            <a
                                href="/"
                                target="_blank"
                                className="bg-white p-3 rounded-xl shadow-sm border border-neutral-content flex justify-center items-center aspect-square cursor-pointer transition hover:bg-base-200"
                            >
                                <FaGithub className="text-primary w-10 h-10" />
                            </a>
                            <a
                                href="/"
                                target="_blank"
                                className="bg-white p-3 rounded-xl shadow-sm border border-neutral-content flex justify-center items-center aspect-square cursor-pointer transition hover:bg-base-200"
                            >
                                <BsTwitterX className="text-primary w-10 h-10" />
                            </a>
                            <a
                                href="/"
                                target="_blank"
                                className="bg-white p-3 rounded-xl shadow-sm border border-neutral-content flex justify-center items-center aspect-square cursor-pointer transition hover:bg-base-200"
                            >
                                <BsYoutube className="text-primary w-10 h-10" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};