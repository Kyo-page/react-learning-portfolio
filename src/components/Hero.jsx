import { FaGithub } from 'react-icons/fa';

export const Hero = () => {
  return (
    <>
      <section id="top">
        <div
          className="hero min-h-[calc(100vh-4rem)] lg:min-h-screen"
          style={{
            backgroundImage:
              'url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)',
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="">
              <h1 className="mb-5 text-5xl font-bold">
                Welcome to My Portfolio
              </h1>
              <p className="mb-5">
                React と Tailwind CSS が好きな、
                <br className="block md:hidden" />
                初心者プログラマの Kyo です！
              </p>
              <a
                href="https://github.com/Kyo-page"
                target="_blank"
                className="btn btn-primary"
              >
                <FaGithub className="w-6 h-6" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
