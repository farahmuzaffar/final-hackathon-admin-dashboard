import {Montserrat  } from 'next/font/google';

// Define the Roboto font with desired options
export const montserrat = Montserrat({
  subsets: ['latin'], // Specify the subsets you need
  weight: ['400', '700'], // Specify font weights you want to include (e.g., normal and bold)
  style: ['normal', 'italic'], // Optional: Include styles like normal or italic
  display: 'swap', // Controls how the font is displayed while loading
});
