import Head from 'next/head';

type Props = {
  title?: string;
};
export function PageHeader({ title }: Props) {
  return (
    <Head>
      <title>{title || 'Cleric'}</title>
      <meta name="description" content="Health manager" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
}
