import { StrictMode } from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import { Portfolio } from './App';
import { Header } from './components/Header.jsx';
import { Hero } from './components/Hero.jsx';
import { FaGithub } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Header />
    <Hero />

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
              私は、プログラミングを始めて約１年半となる、ビギナーの開発者です。
              現在は、React、TypeScript、Tailwind CSS などを使用した、
              フロントエンド 開発のスキルアップに、情熱を注いでいます。
              趣味は、キャンプです🏕️
            </p>
          </div>
        </div>
      </div>
    </section>

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

          <Portfolio />
        </div>
      </div>
    </section>

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

    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Kyo
        </p>
      </aside>
    </footer>
  </StrictMode>
);
