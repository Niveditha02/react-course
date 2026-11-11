# Moving Changes to Another Branch

These are the steps used to move the live restaurant UI changes from
`feature/filter_in_Body` to `feature/fetch_data_api` without committing them on
the original branch.

## Move uncommitted changes

Check the current branch and working tree:

```bash
git status --short --branch
git branch --list
```

Save the uncommitted changes, switch branches, and reapply them:

```bash
git stash push -m "Move live data UI changes to feature/fetch_data_api"
git switch feature/fetch_data_api
git stash pop
```

If Git reports a conflict, edit the conflicted file to combine the intended
changes, then mark it resolved:

```bash
git add src/components/Body.jsx
```

Review the changes and run the project's build before committing:

```bash
git status
git diff
npm run build
```

Stage and commit the intended files:

```bash
git add src/components/Body.jsx src/components/RestaurantCard.jsx
git commit -m "Render live restaurant data from API"
```

## Push the committed branch

The changes are committed locally on `feature/fetch_data_api` as
`ef669da`. They have not been pushed yet. Push the branch with:

```bash
git push -u origin feature/fetch_data_api
```

The `-u` option sets `origin/feature/fetch_data_api` as the upstream, so later
pushes can usually use `git push`.

## Backup stash

The original `git stash pop` encountered a conflict and left its backup stash in
place. After confirming the commit contains the needed changes, inspect the
stash with:

```bash
git stash list
git stash show -p 'stash@{0}'
```

Only remove it after confirming it is no longer needed:

```bash
git stash drop 'stash@{0}'
```
