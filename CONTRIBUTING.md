# Contributing to note-takr

This guide covers how to work in this repository: branches, commits, pull requests, and the code quality rules your submission is reviewed against. Read [README.md](README.md) and [PRD.md](PRD.md) first.

## Contents

- [Branch model](#branch-model)
- [Starting a feature](#starting-a-feature)
- [Branch naming](#branch-naming)
- [Commit messages](#commit-messages)
- [Keeping your branch up to date](#keeping-your-branch-up-to-date)
- [Opening a pull request](#opening-a-pull-request)
- [Review and merging](#review-and-merging)
- [Code quality rules](#code-quality-rules)

## Branch model

```
feature/*  ──PR──▶  dev  ──▶  staging  ──▶  main
             (you)       (maintainers only)
```

| Branch    | What it is                                 | Rules                                                          |
| --------- | ------------------------------------------ | -------------------------------------------------------------- |
| `main`    | Reviewed, released code.                   | Protected. Only maintainers promote `staging` into it.         |
| `staging` | Pre-release testing.                       | Protected. Only maintainers promote `dev` into it.             |
| `dev`     | Integration branch, and your starting point. | Protected. Changes arrive only through reviewed pull requests. |

All three branches are protected on GitHub: direct pushes are blocked, and a pull request needs an approving review from someone other than its author before it can be merged.

## Starting a feature

Every piece of work starts from the latest `dev`:

```bash
git checkout dev
git pull origin dev
git checkout -b feature/recording-screen
```

Never branch off `main` or `staging`, and never start a new feature from another feature branch.

If you do not have write access to this repository, fork it, then do the same thing in your fork and open the pull request from your fork's branch into `rege-ontop89/note-takr:dev`.

## Branch naming

Use `type/short-description` in lowercase kebab-case:

| Prefix      | Use for                                        | Example                         |
| ----------- | ---------------------------------------------- | ------------------------------- |
| `feature/`  | New screens, flows, or components              | `feature/folder-detail-screen`  |
| `fix/`      | Bug fixes                                      | `fix/timer-resets-on-rotate`    |
| `chore/`    | Tooling, config, dependencies, project setup   | `chore/setup-linting`           |
| `docs/`     | Documentation only                             | `docs/run-instructions`         |

Keep each branch to one feature. If you find yourself writing "and" in the branch name, it is probably two branches.

## Commit messages

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>: <what changed, in the imperative>

<optional body: why the change was made>
```

- Types: `feat`, `fix`, `refactor`, `style`, `chore`, `docs`, `test`.
- Write the subject in the imperative ("add", not "added" or "adds"), lowercase, no full stop, under 72 characters.
- One logical change per commit. "wip", "fix stuff", and "final final" are not commit messages.

Good:

```
feat: add empty state for folders with no lectures
fix: stop recording timer when app goes to background
refactor: extract LectureCard from LectureListScreen
```

## Keeping your branch up to date

If `dev` moves on while you work, bring your branch up to date before opening or updating a pull request:

```bash
git fetch origin
git rebase origin/dev
# resolve any conflicts, then
git push --force-with-lease
```

Only force-push your own feature branch, never a shared branch.

## Opening a pull request

When the feature is complete:

1. Run the app one more time and walk through the flows your change touches.
2. Run your formatter and linter. Both must pass with zero warnings.
3. Read your own diff top to bottom on GitHub before asking anyone else to.
4. Open a pull request with **base: `dev`** and **compare: your feature branch**.
5. Fill in every section of the pull request template.
6. Request a review.

Pull request expectations:

- **Title** follows the commit message format, for example `feat: recording flow with simulated transcription`.
- **Screenshots or a screen recording** are required for any change that touches the UI. Include the empty, loading, and error states you built, not only the happy path.
- **Run instructions** are included in your first pull request and updated whenever they change.
- **New dependencies** are listed with a one-line reason for each.
- **Keep it reviewable.** Small, focused pull requests are reviewed faster and more kindly than one enormous one.

## Review and merging

- **Never merge your own pull request**, even if GitHub lets you. A maintainer merges it once it is approved.
- Respond to every review comment, either with a change or a short reply explaining why not.
- Address feedback with new commits on the same branch. Do not close the pull request and open a new one.
- Do not resolve a reviewer's comment thread yourself. Let the reviewer resolve it.
- Never push directly to `dev`, `staging`, or `main`.

## Code quality rules

These rules apply whichever stack you choose. Where your language has an official style guide (for example, Effective Dart, the Swift API Design Guidelines, or the Kotlin coding conventions), follow it as well. Where the two disagree on casing, the language's own convention wins, but be consistent.

### Project structure

- Organise code by feature or by layer, pick one, and stick to it. A typical layout:

  ```
  src/
  ├── screens/       one folder or file per screen
  ├── components/    shared, reusable UI
  ├── theme/         colours, typography, spacing, radii, shadows
  ├── data/          dummy data and simulated services
  ├── models/        types for Lecture, Folder, Transcript, and so on
  ├── hooks/ or state/
  └── utils/
  ```

- No file should be a dumping ground. If `utils` grows past a handful of functions, split it by purpose.

### Components

- **One component per file.** The file is named after the component it exports.
- **Small and focused.** A component does one job. If a file passes roughly 200 lines, or you need to scroll to understand it, split it.
- **Screens compose, components render.** Screens fetch dummy data, hold screen state, and arrange components. Shared components receive what they need through props and do not reach into global state or dummy data directly.
- **Reuse before you rebuild.** If the same piece of UI appears on two or more screens, extract it into `components/` and use it in both places. No copy-pasted UI with small tweaks.
- **Explicit, typed props.** Every prop is typed. Optional props have sensible defaults. Avoid passing whole objects when a component only needs two fields.
- **Variants over duplicates.** One `Button` with `variant="primary" | "secondary" | "destructive"` beats three separate button components.
- **No logic in markup.** Pull non-trivial conditions and calculations out into well-named variables or functions above the return/build method.
- **Handle every state.** Any component or screen that shows data handles its loading, empty, and error states explicitly.

### Naming

| What                       | Convention                                   | Good                                             | Bad                               |
| -------------------------- | -------------------------------------------- | ------------------------------------------------ | --------------------------------- |
| Components, widgets, views | `PascalCase` noun                            | `LectureCard`, `RecordButton`, `FolderList`      | `card2`, `MyComponent`, `Stuff`   |
| Screens                    | `PascalCase`, ends in `Screen`               | `FolderDetailScreen`                             | `Folder2`, `Page3`                |
| Types and models           | `PascalCase` singular noun                   | `Lecture`, `Folder`, `TranscriptSegment`         | `lectures`, `IData`, `Obj`        |
| Variables and functions    | `camelCase` (or your language's convention)  | `recordingDuration`, `formatDuration()`          | `rd`, `x`, `temp`, `data2`        |
| Booleans                   | `is`, `has`, `can`, `should` prefix          | `isRecording`, `hasTranscript`, `canDelete`      | `recording`, `flag`, `status`     |
| Event handlers             | `handle` + event inside, `on` + event as prop | `handleStopPress` passed as `onStopPress`       | `click`, `doIt`, `fn`             |
| Functions                  | start with a verb                            | `createFolder()`, `getLecturesByFolder()`        | `folder()`, `lectureStuff()`      |
| Collections                | plural                                       | `lectures`, `folderIds`                          | `lectureList2`, `arr`             |
| Constants                  | `UPPER_SNAKE_CASE` (or language convention)  | `MAX_FOLDER_NAME_LENGTH`                         | `max`, `n`                        |
| Files                      | follow your stack's convention consistently  | `LectureCard.tsx`, `lecture_card.dart`, `LectureCard.swift` | mixed styles in one project |

General naming rules:

- Names say what something is, not how it is implemented. `lectures`, not `lectureArray`.
- No single-letter names outside very short loops and lambdas.
- No abbreviations beyond widely known ones (`id`, `url`, `ui`). `transcript`, not `trnscrpt`.
- Use the product's language. If the UI says "Folder", the code says `Folder`, not `Group` in one place and `Category` in another.

### Theme and styling

- **All colours, font sizes, font weights, spacing, radii, and shadows come from the theme.** No raw hex values or magic numbers inside components.
- Use a spacing scale (for example 4, 8, 12, 16, 24, 32) rather than arbitrary values like 13 or 27.
- Use **one icon set** throughout the app. Icon sizes come from the theme too.
- Support the system font size setting instead of fixing text sizes.

### Dummy data and simulated behaviour

- All sample lectures, folders, and transcripts live in `data/` (or equivalent), never inline inside a screen or component.
- Model the data with types (`Lecture`, `Folder`, `Transcript`) so screens are written as if the data were real.
- Wrap simulated behaviour (recording, transcription, saving) in small service functions with realistic delays and the ability to fail, so screens can show real loading and error states. Swapping in a real implementation later should not require touching the UI.
- Sample content should be realistic. "Lorem ipsum" and "Test lecture 1" undersell your design.

### Types and safety

- Use your language's type system fully: TypeScript in `strict` mode, Dart with sound null safety, Swift and Kotlin optionals used properly.
- No `any`, no `dynamic`, no force unwraps (`!`) without a comment explaining why it cannot fail.

### Clean code

- **Comments explain why, not what.** If code needs a comment to explain what it does, rename things until it does not.
- **No commented-out code.** Git remembers it for you.
- **No stray logs.** Remove `console.log`, `print`, and debug statements before you open a pull request.
- **No unused code.** Unused imports, variables, files, and dependencies are removed.
- **No duplicated logic.** If you have written the same thing twice, extract it.
- **Lists are virtualised** (`FlatList`, `ListView.builder`, `LazyColumn`, `List` in SwiftUI) rather than rendering every item at once.

### Formatting and linting

- Use your stack's standard formatter (Prettier, `dart format`, `swift-format`, `ktlint`) and linter (ESLint, `flutter analyze`, SwiftLint, detekt).
- Commit the config files so everyone formats the same way.
- Both must pass with **zero warnings** before you open a pull request.

### Accessibility

- Every icon-only button has a screen reader label.
- Touch targets are at least 44 x 44 pt on iOS and 48 x 48 dp on Android.
- Text and icons meet WCAG AA contrast (4.5:1 for body text) in every theme you ship.
- Never use colour alone to convey meaning (for example, the recording state also has a label or icon).

### Repository hygiene

- Add a `.gitignore` for your stack. Never commit `node_modules`, build output, `.DS_Store`, IDE folders, or local environment files.
- Never commit secrets or API keys. This project should not need any.
- Do not commit generated files unless your stack requires it.
