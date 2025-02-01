import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  cmsName: "contentful",
  nodeVersion: "20",
  ssgName: "custom",
  devCommand: "npm run dev -- -p {PORT}",
  experimental: {
    ssg: {
      name: "Nuxt3",
      logPatterns: { up: ["Local:    http"] },
      passthrough: ["/vite-hmr/**"]
    }
  },
  modelExtensions: [
    {
      name: "Page", 
      type: "page", 
      urlPath: "/{slug}"
    }
  ],
  contentSources: [
    {
      rootPath: __dirname,
      contentDirs: ["content"],
      models: [
        {
          name: "Page",
          type: "page",
          urlPath: "/{slug}",
          filePath: "content/pages/{slug}.json",
          fields: [{ name: "title", type: "string", required: true }]
        }
      ]
    }
  ]
});
