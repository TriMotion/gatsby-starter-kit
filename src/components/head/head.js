import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const Head = ({
    title = "",
    desc = "",
    src = "",
    alt = "",
    url = "",
    keywords = "",
    type = "page"
}) => (
    <Helmet title={title}>
        <meta name="description" content={desc} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="TriMotion" />

        <meta name="og:title" content={title} />
        <meta property="og:type" content={type} />
        <meta property="og:description" content={desc} />
        <meta property="og:site_name" content="TriMotion" />
        <meta property="og:locale" content="nl_NL" />
        <meta
            property="article:author"
            content="https://www.facebook.com/TriMotionVisuals"
        />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={src} />
        <meta property="og:image:alt" content={alt} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
        <meta name="twitter:creator" content="@TriMotion" />
        <meta name="twitter:image:src" content={src} />
        <meta name="twitter:image:alt" content={alt} />
        <meta name="twitter:domain" content="www.trimotion.nl" />

        <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css?family=Poppins:400,800&display=swap"
            rel="stylesheet"
            async
        />
        <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="../favicon/apple-touch-icon.png"
            async
        />
        <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="../favicon/favicon-32x32.png"
            async
        />
        <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="../favicon/favicon-16x16.png"
            async
        />

        <link
            rel="mask-icon"
            href="../favicon/safari-pinned-tab.svg"
            async
            color="#000061"
        />
        <link rel="shortcut icon" href="../public/favicon/favicon.ico" async />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
            name="msapplication-config"
            content="../public/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000061" />

        
    </Helmet>
);

Head.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
    url: PropTypes.string,
    keywords: PropTypes.string
};

export default Head;