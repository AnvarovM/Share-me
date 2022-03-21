import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '9msw3zyp',
  dataset: 'production',
  apiVersion: '2021-11-16',
  useCdn: true,
  token: 'sknWLTcD6RV3cz4iihpmAleBUacIOdFF9FBK3k0APVryiCMGyaHeoLq4CZVsGGHREz8xILRczEG2JLZeoJYDOx0Tg6uofeEKJourWF9PiHHUNAPDnBUULhA7E5ywwYkcl8r4JpNcF7Yu9utldBd87Z3fI5twZuudN3OIJmDdEDqXQNTVRLR5',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
