// import { CodegenConfig } from "@graphql-codegen/cli";

// const config: CodegenConfig = {
//   schema: "http://localhost:8000",
//   documents: ["src/**/*.tsx"],
//   ignoreNoDocuments: true,
//   generates: {
//     "./src/gql/": {
//       preset: "client",
//     },
//   },
// };

// export default config;

import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:8000/graphql",
  generates: {
    "src/generated/graphql.ts": {
      plugins: ["typescript"],
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
