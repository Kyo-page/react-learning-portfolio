export const About = () => {
    return (
        <>
            <section className="py-12 lg:py-20" id="about">
                <div className="container max-w-4xl mx-auto px-5">
                    <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-12">
                        <div>
                            <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                                <img
                                    src="./assets/about.jpg"
                                    loading="lazy"
                                    alt="Photo by Martin Sanchez"
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                        </div>

                        <div>
                            <p className="font-bold text-primary md:text-left">About</p>

                            <h2 className="mb-4 text-2xl font-bold sm:text-3xl md:mb-6">
                                自己紹介
                            </h2>

                            <p className="md:text-lg">
                                React初心者の Kyo です！<br />
                                練習用にポートフォリオサイトを<br />作成しています。
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};