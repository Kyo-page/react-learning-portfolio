import { FaGithub } from 'react-icons/fa';
import { BASE_URL } from "../constants";

export const Hero = () => {
  return (
    <>
      <section id="top">
        <div
          className="hero min-h-[calc(100vh-4rem)] lg:min-h-screen"
          style={{
            backgroundImage:
              `url(${BASE_URL}/hero.jpg)`,
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="">
              <h1 className="mb-5 text-5xl font-bold">
                Welcome to My Portfolio
              </h1>
              <p className="mb-5">
                React初心者の Kyo です！
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
