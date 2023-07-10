import React from 'react';

const Favicons = () => {
  return (
    <>
        {/* Favicon */}
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="icon" href="/images/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/images/favicon-32x32.png" sizes="32x32" type="image/png" />

        {/* Apple Touch Icon */}
        <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/apple-touch-icon.png"
        type="image/png"
        />

        {/* Android Chrome Icons */}
        <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/images/android-chrome-192x192.png"
        />
        <link
        rel="icon"
        type="image/png"
        sizes="512x512"
        href="/images/android-chrome-512x512.png"
        />
    </>
  );
};

export default Favicons;
