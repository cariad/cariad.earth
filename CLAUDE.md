# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the pinned tools

Run tools through mise (`mise exec -- <tool>`), not bare. In Claude's shell a bare `rumdl` can resolve to a different installed version than the one pinned here.

```bash
mise exec -- rumdl check --fix     # Fix Markdown
mise exec -- tombi format .        # Format TOML
```

## Tooling conventions

- **Adding a linter:** add a `lint:<name>` task to `.config/mise.toml` (the `lint` task picks it up through `depends = ["lint:*"]`), *and* add a matching named step to `.github/workflows/ci.yml`. CI calls each task in its own step on purpose, so failures are easier to find.
- **Changing tool versions:** after editing `[tools]` in `.config/mise.toml`, run `mise lock` to regenerate `.config/mise.lock`. CI sets `MISE_LOCKED=1` and verifies provenance, so a stale lockfile fails the build. `minimum_release_age = "7d"` means mise won't resolve a release younger than a week (Dependabot has the same 7-day cooldown for Actions).
- **New file types:** `.gitattributes` lists every tracked file type explicitly (all LF), so add an entry when you introduce one.
