# cariad.earth

Hello! 👋 This repository *will* describe the infrastructure, website, and content for my CV at <https://cariad.earth>, but it's rather bare while I'm still pulling it all together.

## Prerequisites

- [Mise](https://mise.jdx.dev/) 2026.10.10

## Quick start

1. Clone this repository.

   ```bash
   git clone git@github.com:cariad/cariad.earth.git
   ```

1. Change into the repository's directory.

   ```bash
   cd cariad.earth
   ```

1. Install the project's dependencies.

   ```bash
   mise install
   ```

1. Initialise the OpenTofu modules.

   ```bash
   mise run infra:init
   ```

## Building the website

The `build` task uses [Platen](https://github.com/cariad/platen) to press the values in `site/values.yml` into the templates in `site/templates`, and writes the website to `site/public`:

```bash
mise run build
```

## Linting

The `lint` task runs all the linters:

```bash
mise run lint
```

The linters also run in CI when a pull request is opened.

The OpenTofu linter runs only for pull requests that change infrastructure files or the Mise configuration.

## AI disclosure

This project is developed by me, Cariad Eccleston, with the assistance of:

- *Claude Opus 5.5* in Claude Code for research, code, tests, and reviews
- *GitHub Copilot* for reviews

I own the scope, requirements, and design decisions. Claude writes the first drafts of code and tests, which I review for correctness and quality, then revise with Claude or by hand. Claude also writes the first draft of documentation, which I rewrite in my own voice.

When I'm satisfied, Claude reviews the workspace, and we act *only* on the feedback that I agree with, before I check my understanding and commit.

Finally, Copilot and I review every pull request, before I merge it.

I retain full responsibility for all changes that land in the `main` branch.
