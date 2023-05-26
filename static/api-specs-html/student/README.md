# Working with Student API files
This briefly describes how to build the Student API docs

## Process 
Student PD provides a set of .json files. We **may** use these files for dynamic rendering **or** we may generate the static .html files from these files.

> NOTE: With the exception of Academics, the .html files were all generated using:
`$ npx @redocly/cli build-docs <filename>.json
`

### Academics
There are currently issues with Redocly rendering the Academics.json as a single file. Attempting to do so results in a JS Heap error. We have filed a ticket with the Redocly team and this is actively being looked into. 

#### Current Solution
In order to render for the html for Academics html I used the following steps:

1. **Use yaml... ** start with yaml for consistency: `$ yq -Poy academics.json > academics.yaml`
2. **Unbundle...** Split the file into sub-files (paths, components): `$ npx @redocly/cli split academics.yaml`
3. **Prepare individual bundles...** 
   1. Create the individual re-bundled files (see _specs_to_rebundle and _specs_post_rebundling).
4. **Re-Bundle...**
   1.  e.g. `$ npx @redocly/cli bundle only_academics_Common.yaml > only_academics_Common_bundled_noderef.yaml`
5.  **Build the static doc...**
    1. e.g. `$ npx @redocly/cli build-docs only_academics_Common_bundled_noderef.yaml`
    2. saves as `redoc-static.html`. Rename to correct endpoint... 
    e.g.: `$mv redoc-static.html academics_common.html`