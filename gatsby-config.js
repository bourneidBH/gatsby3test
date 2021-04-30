module.exports = {
  siteMetadata: {
    title: "Woo Gatsby Test Site",
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "http://gatsby3test.local/graphql",
        schema: {
          perPage: 10,
          requestConcurrency: 2, 
          previewRequestConcurrency: 1, 
        },
        develop: {
          hardCacheMediaFiles: true,
          hardCacheData: true,
        },
        type: {
          MediaItem: {
            lazyNodes: true,
            localFile: {
              requestConcurrency: 2,
            },
          },
          Coupon: {
            exclude: true
          },
          Customer: {
            exclude: true
          },
          Order: {
            exclude: true
          },
          PaymentGateway: {
            exclude: true
          },
          PostFormat: {
            exclude: true
          },
          ShippingClass: {
            exclude: true
          },
          Refund: {
            exclude: true
          },
          TaxRate: {
            exclude: true
          },
          UserRole: {
            exclude: true
          },
        },
        excludeFieldNames: [
          `averageRating`, 
          `catalogVisibility`, 
          `dateOnSaleFrom`, 
          `dateOnSaleTo`, 
          `nodeType`, 
          `onSale`, 
          `purchasable`, 
          `purchaseNote`,
          `reviews`,
          `reviewCount`,
          `reviewsAllowed`,
          `totalSales`,
          `commentCount`,
          `commentStatus`,
          `comments`,
          `desiredSlug`,
          `enclosure`,
          `isRevision`,
          `isSticky`,
          `pingStatus`,
          `pinged`,
          `toPing`,
        ],
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
