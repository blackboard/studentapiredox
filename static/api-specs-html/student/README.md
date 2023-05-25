With the exception of Academics, hese specs were all generated using:

`$ npx @redocly/cli build-docs <filename>.json
`

Academics html was built via the following steps:

1. start with yaml for consistency: `$ yq -Poy academics.json > academics.yaml`
2. Split the file into sub-files (paths, components): `$ npx @redocly/cli split academics.yaml`
3. Create the individual re-bundled files (see _specs_to_rebundle and _specs_post_rebundling).
4. Re-Bundle.
   1.  e.g. `$ npx @redocly/cli bundle only_academics_Common.yaml > only_academics_Common_bundled_noderef.yaml`
5.  Build the static doc:
    1. e.g. `$ npx @redocly/cli build-docs only_academics_Common_bundled_noderef.yaml`
    2. saves as `redoc-static.html`. Rename to correct endpoint... 
    e.g.: `$mv redoc-static.html academics_common.html`