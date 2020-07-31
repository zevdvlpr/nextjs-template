import Head from 'next/head';
import React from 'react';

import { Props } from '.';

const layout: React.FC<Props> = ({ title, description, image, url }) => (
  <Head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />

    <title>{title}</title>

    <link itemProp="url" href={url} />
    <meta itemProp="name" content={title} />
    <meta itemProp="description" content={description} />

    <meta name="image" content={image} />
    <meta name="description" content={description} />

    <meta property="og:title" content={title} />
    <meta property="og:url" content={url} />
    <meta property="og:description" content={description} />

    <meta property="og:image:width" content="1920" />
    <meta property="og:image:height" content="1080" />

    <meta property="og:image" content={image} />
    <meta property="og:image:secure_url" content={image} />

    <meta name="twitter:site" content="aa" />
    <meta name="twitter:creator" content="aa" />
    <meta name="twitter:card" content="summary_large_image" />

    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />

    <meta name="twitter:image" content={image} />
    <meta name="twitter:image:src" content={image} />

    <link rel="icon" href={image} />
    <link rel="shortcut icon" href={image} />
  </Head>
);

export default layout;