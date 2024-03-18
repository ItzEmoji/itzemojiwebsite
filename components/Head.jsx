import Head from "next/head";

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="ItzEmoji Profolio." />
      <meta name="keywords" content="ItzEmoji, ItzEmoji, ItzEmoji, ItzEmoji ItzEmoji, ItzEmoji" />
      <meta property="og:title" content="ItzEmoji's Portfolio" />
      <meta property="og:description" content="ItzEmoji's Profolio." />
      <meta property="og:image" content="https://imgur.com/2NqZL3h.png" />
      <meta property="og:url" content="https://emoji.is-a.dev" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: "ItzEmoji",
};
