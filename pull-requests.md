---
title: Pull Requests
---

# Pull Requests

This page outlines the guidelines for creating branches, pull requests (PRs), and commit messages formatting.

## Branch Naming

To maintain clarity and avoid conflicts across systems, adhere to these branch naming rules:

- **Prefixes**:

  - Use `fix/` for bug fixes.
  - Use `feat/` for new features.

- **Formatting**:

  - Only use lowercase letters, numbers, and hyphens (`-`) as separators.
  - Avoid spaces, uppercase letters, or special characters.

- **Use descriptive name**:
  - ❌ **Bad**: `fix/error`
  - ✅ **Good**: `fix/runtime-error-when-filling-kly-amount`

## Pull Requests (PRs)

When creating a PR, follow these guidelines:

- Use the same name as the related Trello task for consistency and easier tracking.
- Always choose the `dev` branch as the target branch when opening a PR.
- Link the PR to its corresponding Trello task in the PR description.

## Commit Message Formatting

We follow the **Conventional Commits** standard for commit messages. This ensures consistency and compatibility with tools that rely on structured commit messages.

### Examples

- `fix: resolve runtime error when filling KLY amount`
- `feat: implement user profile page`

For more information, see the [Conventional Commits Documentation](https://www.conventionalcommits.org/en/v1.0.0-beta.4/).

---

By following these guidelines, we ensure a smooth and structured development process.
