export const SITE = {
  name: 'Elle & Alexander',
  site: 'https://ellealexander.lol',
  base: '/',
  trailingSlash: false,
  googleSiteVerificationId: '',
};

export const I18N = {
  language: 'en',
  textDirection: 'ltr',
};

export const METADATA = {
  title: {
    default: 'Elle & Alexander — October 15, 2026',
    template: '%s — Elle & Alexander',
  },
  description: 'Join us as we celebrate the marriage of Elle and Alexander on October 15, 2026 at TBD.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    site_name: 'Elle & Alexander Wedding',
    images: [
      {
        url: '~/assets/images/default.png',
        width: 1200,
        height: 628,
      },
    ],
    type: 'website',
  },
  twitter: {
    handle: '',
    site: '',
    cardType: 'summary_large_image',
  },
};

export const APP_BLOG = {
  isEnabled: true,
  postsPerPage: 6,
  isRelatedPostsEnabled: false,
  relatedPostsCount: 0,
  post: {
    isEnabled: true,
    permalink: '/%slug%',
    robots: {
      index: true,
      follow: true,
    },
  },
  list: {
    isEnabled: true,
    pathname: 'announcements',
    robots: {
      index: true,
      follow: true,
    },
  },
  category: {
    isEnabled: false,
    pathname: 'category',
    robots: {
      index: true,
      follow: true,
    },
  },
  tag: {
    isEnabled: false,
    pathname: 'tag',
    robots: {
      index: false,
      follow: true,
    },
  },
};

export const UI = {
  theme: 'light:only',
};

export const ANALYTICS = {
  vendors: {
    googleAnalytics: {
      id: null,
      partytown: true,
    },
  },
};
