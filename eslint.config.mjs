import globals from "globals";


export default [
  {
    files: ["**/*.js"], languageOptions: { sourceType: "commonjs" }, 
    rules: {
      "no-dupe-else-if": "warn"

    }
  },
  { languageOptions: { globals: globals.node } },
];