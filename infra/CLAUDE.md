# CLAUDE.md

## OpenTofu

- **Changing provider versions:** after editing a root module's `versions.tofu`, ask me to run `mise exec -- tofu -chdir=infra/<module> init -upgrade` to update its `.terraform.lock.hcl`. `infra:init` passes `-lockfile=readonly`, which rejects `-upgrade`, so it fails on a stale lock rather than fixing it. `init -upgrade` records every platform's hashes, so `tofu providers lock` isn't needed.
- **Adding a root module:** `infra:init`, the `validate` in `lint:tofu`, and `.github/dependabot.yml` each name every root module explicitly, so add the new module to all three.
- **`.tofu` files:** `versions.tofu` holds a `language` block, which only OpenTofu understands. Keep it out of `.tf` files, because some tools that read `.tf` files fail on it.
