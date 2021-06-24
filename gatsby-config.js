module.exports = {
  siteMetadata: {
    title: "Picholine Restaurant",
    description:
      "Take your tastebuds on a Mediterranean fling no matter what the time of year with favourites including fish and roasted veg.",
    keywords: [
      "Mediterranean",
      "Restaurant",
      "Food",
      "Holloway",
      "London",
      "Paella",
    ],
    location:
      "https://www.google.com/maps/place/Picholine+Restaurant/@51.559369,-0.12041,21z/data=!4m5!3m4!1s0x0:0x4112b422414baffb!8m2!3d51.5594037!4d-0.120395?hl=en-GB",
    instagram:
      "https://instagram.com/picholine_restaurant?igshid=15zrrwqlps58k",
    author: "@acewf",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/data`,
      },
    },
    "gatsby-transformer-json",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Picholine Restaurant",
        short_name: "Picholine",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "data/images/gatsby-icon.png", // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Lora", "Poppins"],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GCMS",
        fieldName: "gcms",
        url:
          "https://api-eu-central-1.graphcms.com/v2/ckawwii4809yh01yx7lzl076f/master",
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-19969281-6",
      },
    },
  ],
}

/* {
  resolve: "gatsby-plugin-load-script",
  options: {
    src: "https://booking-widget.quandoo.com/index.js",
  },
}, */
