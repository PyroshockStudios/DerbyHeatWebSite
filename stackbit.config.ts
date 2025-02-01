import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: '~0.6.0',
  ssgName: 'nuxt',
  nodeVersion: '20',
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
