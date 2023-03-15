import type { GatsbyConfig } from "gatsby"
import type { IPluginOptions } from "plugin"

const config: GatsbyConfig = {
  graphqlTypegen: true,
  plugins: [
    // Load the plugin with its options
    {
      resolve: `plugin`,
      // You can pass any serializable options to the plugin
      options: {} satisfies IPluginOptions,
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}

export default config
