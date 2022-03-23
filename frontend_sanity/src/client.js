import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import {
  REACT_APP_SANITY_PROJECT_ID,
  REACT_APP_SANITY_TOKEN
} from './constants/constant';

export const client = sanityClient({
  projectId: REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2021-11-16',
  useCdn: true,
  token: REACT_APP_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
