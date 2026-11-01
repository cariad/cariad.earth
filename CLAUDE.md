# CLAUDE.md

## Running the pinned tools

Run tools through mise (`mise exec -- <tool>`), not bare. In Claude's shell a bare `rumdl` can resolve to a different installed version than the one pinned here.

```bash
mise exec -- rumdl check --fix     # Fix Markdown
mise exec -- tombi format .        # Format TOML
```

Don't run OpenTofu yourself, whether directly, through `mise exec`, or through the `infra:init` and `lint:tofu` tasks (which `mise run lint` includes). Ask me to run it instead, such as `mise exec -- tofu fmt -recursive` to format OpenTofu files.

## Tooling conventions

- **Adding a linter:** add a `lint:<name>` task to `.config/mise.toml` (the `lint` task picks it up through `depends = ["lint:*"]`), *and* add a matching named step to `.github/workflows/ci.yml`, or to `.github/workflows/infra.yml` for an OpenTofu linter. CI calls each task in its own step on purpose, so failures are easier to find. `infra.yml` runs only when OpenTofu's inputs change, so add any new file it reads to both of its `paths` lists.
- **Changing tool versions:** after editing `[tools]` in `.config/mise.toml`, run `mise lock` to regenerate `.config/mise.lock`. CI sets `MISE_LOCKED=1` and verifies provenance, so a stale lockfile fails the build. `minimum_release_age = "7d"` means mise won't resolve a release younger than a week (Dependabot has the same 7-day cooldown for Actions and OpenTofu providers). OpenTofu's version is also pinned by `compatible_with` in each root module's `versions.tofu`, so change them all together. Platen's version is also pinned by the `platen-version` input in `.github/workflows/ci.yml`.
- **New file types:** `.gitattributes` lists every tracked file type explicitly (all LF), so add an entry when you introduce one.

## OpenTofu

- **Before linting:** `lint:tofu` validates the root modules, so it needs `mise run infra:init` first, and again after a module `source` changes. Ask me to run both.
- **The bootstrap's state:** `infra/bootstrap/terraform.tfstate` is gitignored, and it's the only record of the resources the bootstrap created. Never delete, move, or overwrite it.
