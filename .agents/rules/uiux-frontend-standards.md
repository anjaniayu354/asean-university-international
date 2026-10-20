# AUI Frontend & UI/UX Standards

Whenever creating, editing, or refactoring frontend pages or UI components in this AUI repository:

1. **Activate the `aui-frontend-designer` skill** and strictly follow its guidelines.
2. **Never use TailwindCSS or utility frameworks**: Only use the vanilla design tokens in `src/app/globals.css` (`--brand`, `--gold`, `--cream`, `--paper`, `--ink`, `--muted`).
3. **Typography**: Always use `Fraunces` (`--serif`) for headings and `Karla` (`--sans`) for body/controls.
4. **Consistency with `template/`**: Reference the established HTML files in `template/` (`about.html`, `accademic.html`, `addmissions.html`, `payment.html`, `sample.html`).
5. **Hero Layout**: Keep the hero section clean, focused, and compact (Eyebrow + H1 + Lede + 2 CTA Buttons). Global search remains in the Header Navigation.
6. **Footer Logo**: Preserve the authentic colored crest/emblem from the header paired with pure white text (`/img/logo-footer.png`).
7. **Build Validation**: Always verify code changes with `npm run build` before completing a task.
