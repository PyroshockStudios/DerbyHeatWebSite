import { defineStackbitConfig } from "@stackbit/types";

export default defineStackbitConfig({
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
