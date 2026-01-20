import { FaHandshakeSimple } from 'react-icons/fa6';
import { BsChatRightQuoteFill } from 'react-icons/bs';

export const WORKS = [
    {
        id: 0,
        title: (
            <>
                ポートフォリオ
                <br />
                サイト
            </>
        ),
        image: 'assets/work.jpg',
        description: 'Reactを使ってポートフォリオサイトを作成しました。',
        icon: <FaHandshakeSimple className="text-white" />,
    },
    {
        id: 1,
        title: '名言ジェネレータ',
        image: 'assets/work.jpg',
        description: 'APIを使った名言生成アプリです。',
        icon: <BsChatRightQuoteFill className="text-white" />,
    },
    {
        id: 2,
        title: 'アプリ3',
        image: 'assets/work.jpg',
        description: '',
        icon: <FaHandshakeSimple className="text-white" />,
    },
    {
        id: 3,
        title: 'アプリ4',
        image: 'assets/work.jpg',
        description: '',
        icon: <BsChatRightQuoteFill className="text-white" />,
    },
];

export const SOCIAL = {
    github: 'https://github.com/Kyo-page',
    twitter: '',
    blog: '',
};