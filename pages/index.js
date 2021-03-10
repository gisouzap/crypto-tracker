import { useState, useEffect } from 'react';
import Router, { withRouter } from 'next/router';
import Loader from 'react-loader-spinner';

import SearchBar from '../components/SearchBar';
import CoinList from '../components/CoinList';
import Layout from '../components/Layout';
import Pager from '../components/Pager';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

function Home({ filteredCoins, router }) {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCurrency, setCurrentCurrency] = useState('usd');
  const [resultsPerPage, setResultsPerPage] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);
    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);

  const allCoins = filteredCoins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = e => {
    e.preventDefault;
    setSearch(e.target.value.toLowerCase());
  };

  const resultsPerPageHandler = value => {
    const currentPath = router.pathname;
    const currentQuery = router.query;
    currentQuery.results = value;

    router.push({
      pathname: currentPath,
      query: currentQuery,
    });
  };

  const paginationHandler = page => {
    const currentPath = router.pathname;
    const currentQuery = router.query;
    currentQuery.page = page;
    setCurrentPage(page);

    router.push({
      pathname: currentPath,
      query: currentQuery,
    });
  };

  const currencyHandler = currency => {
    const currentPath = router.pathname;
    const currentQuery = router.query;
    currentQuery.currency = currency;
    setCurrentCurrency(currency);
    router.push({
      pathname: currentPath,
      query: currentQuery,
    });
  };

  return (
    <>
      <Layout>
        <div className="coin_app">
          <SearchBar placeholder="Search" onChange={handleChange} />
          <CoinList filteredCoins={allCoins} />
          <Pager
            onChange={paginationHandler}
            currentPage={currentPage}
            currency={currentCurrency}
            onChangeResultsPerPage={resultsPerPageHandler}
          />
        </div>
      </Layout>
      {loading && (
        <div className="loading_container">
          <Loader
            type="Puff"
            color="#ac00c8"
            height={100}
            width={100}
            timeout={3000}
          />
        </div>
      )}
    </>
  );
}

export const getServerSideProps = async ({ query }) => {
  const page = query.page || 1;
  const currency = query.currency || 'usd';
  const results = query.results || 10;

  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${results}&page=${page}&sparkline=false`
  );

  const filteredCoins = await res.json();

  return {
    props: {
      filteredCoins,
    },
  };
};

export default withRouter(Home);
