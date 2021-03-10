import Head from 'next/head';
import Link from 'next/link';

import Logo from './Logo.svg';

const Layout = ({ children, title = 'Crypto Tracker' }) => {
  return (
    <div className="layout">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="header">
        <Link href="/" passHref>
          <a>
            <div className="coin_logo">
              <Logo />
            </div>
          </a>
        </Link>
      </header>

      {children}
    </div>
  );
};

export default Layout;
