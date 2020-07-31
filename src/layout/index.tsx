import React from 'react';

import Meta from './meta';

export interface Props {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const Layout: React.FC<Props> = ({
  title = 'NextJS Template',
  description = 'Minhas configurações que uso nos meus projetos de front-end usando Next.js com Typescript.',
  image = 'https://img.icons8.com/ios-filled/32/0080FF/typescript.png',
  url = 'https://nextjs-template-zevdvlpr.vercel.app',
  children,
}) => (
  <>
    <Meta title={title} description={description} image={image} url={url} />
    {children}
  </>
);

export default Layout;
