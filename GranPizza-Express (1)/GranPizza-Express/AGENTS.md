<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep shared restaurant navigation and ordering dialog in a browser-safe site module, with distinct content routes for shareable pages.
- Store supplied menu entries in a shared data module without invented product prices or recipes, so all menu views stay consistent.
- Until the restaurant supplies its exact ordering URL, order actions must offer the supplied telephone rather than redirect to a generic platform domain.
- Prebundle shared shell dependencies with React in Vite to prevent late dependency discovery from invalidating active browser modules.
