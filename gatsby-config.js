module.exports = {
  siteMetadata: {
    title: 'Sanath Kumar Ramesh',
    description:
      'Dad. Innovator. Speaker. Software Builder',
    url: 'www.sanathkr.com',
    author: 'Sanath Kumar Ramesh',
    // TODO: Need to change this image
    image: 'https://gatsby-starter-amsterdam.netlify.com/og-image.jpg',

    intro: 'Dad. Innovator. Speaker. Software Builder',
    menuLinks: [
      {
        name: 'Sanath Kumar Ramesh',
        slug: '/',
      },
      {
        name: 'Meet Sanath',
        slug: '/about/',
      },
      {
        name: 'Speaking',
        slug: '/speaking/',
      },
      {
        name: 'Research',
        slug: '/research/',
      },
      {
        name: 'Media Coverage',
        slug: '/media/',
      },
    ],
    footerLinks: [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/sanathkr/',
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/sanathkr_',
      },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-theme-amsterdam',
      options: {
        "basePath": "/",
        "contentPat": "content",
        "transitions": false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Theme Amsterdam`,
        short_name: `Amsterdam`,
        background_color: `#f5f0eb`,
        theme_color: `#f5f0eb`,
        start_url: `/`,
        display: `standalone`,
        icon: require.resolve('./src/images/favicon.png'),
      },
    },
  ],
}
