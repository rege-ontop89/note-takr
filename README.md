# note-takr

The onboarding project for applicants joining the mobile development team.

You will design and build **note-takr**, a mobile app that lets a student record a lecture, stop the recording, and get a written transcript they can come back to later, with lectures organised into folders such as a course (for example, COS 202).

The full brief is in **[PRD.md](PRD.md)**. Read it before you start.

## Contents

- [It only needs to be a dummy flow](#it-only-needs-to-be-a-dummy-flow)
- [How you will be judged](#how-you-will-be-judged)
- [The flows we will walk through](#the-flows-we-will-walk-through)
- [Tech stack](#tech-stack)
- [Branches and workflow](#branches-and-workflow)
- [Code quality](#code-quality)
- [Submitting your work](#submitting-your-work)
- [Repository layout](#repository-layout)

## It only needs to be a dummy flow

**The app does not have to be functional end to end.** A convincing dummy flow is exactly what we want.

You do **not** need to build any of the following:

- Real audio recording
- Real speech-to-text or transcription
- A backend, database, or API
- Authentication or user accounts
- Cloud storage or sync
- AI integrations

Fake all of it. Use hard-coded sample lectures, folders, and transcripts. Use timers to simulate recording and processing. What matters is that someone holding the phone believes the product works and can get through every flow without you explaining it.

Time spent wiring up real infrastructure is time not spent on the things below, which are what we score.

## How you will be judged

You are assessed on three areas. Functionality beyond the dummy flow earns nothing extra.

### 1. Design

Does it look and feel like one coherent product?

- **Icon consistency:** one icon set, one style (outlined or filled, not both at random), consistent sizes and stroke weights.
- **Overall look:** a clear visual identity with a deliberate colour palette, spacing scale, and corner radii, applied everywhere.
- **Consistent feel:** the same action looks and behaves the same way on every screen. Buttons, cards, headers, and sheets come from a shared set of components rather than being restyled per screen.
- **Visual hierarchy:** the most important thing on each screen is obvious. The record action in particular should never be hard to find.
- **Recording experience:** the active recording state is unmistakable (timer, live indicator, waveform or similar).
- **Light and dark mode** support is a plus.

### 2. Behaviour

Does the app handle every state, not just the happy path?

- **Empty states:** no folders yet, an empty folder, no lectures, no search results. Each one should explain what is going on and offer a next step.
- **Loading and processing states:** the "transcribing" step after a recording ends should be represented clearly, along with any other simulated waits.
- **Error states:** simulate at least a couple of failures (for example, microphone permission denied, transcription failed with a retry, a folder name that is empty or already taken) and show how the app recovers.
- **Confirmations and destructive actions:** stopping or discarding a recording, deleting a lecture or folder. Ask before destroying anything, or offer undo.
- **Feedback after actions:** the user always knows an action worked (a toast, a state change, navigation to the result).
- **Navigation:** back behaves predictably, nothing dead-ends, and the user can always find their way to the recording they just made.

### 3. General usability

Is it comfortable and clear to use?

- **Typography:** a defined type scale with a small number of sizes and weights, used consistently for titles, body, and captions.
- **Legibility:** sufficient colour contrast, comfortable line length and line height in transcripts, and text that respects the system font size setting.
- **Haptic feedback:** used purposefully on key moments such as start and stop recording, success, and errors. Not on every tap.
- **Touch targets:** at least 44 x 44 pt (iOS) or 48 x 48 dp (Android), with enough space between them.
- **Copy:** clear, short, consistent labels and messages written for a student, not a developer.
- **Motion:** transitions that help the user follow what changed, kept short and never blocking.
- **Accessibility:** icon-only buttons have screen reader labels, and the main flows work with VoiceOver or TalkBack.

## The flows we will walk through

Reviewers will install your build and try these three flows from the PRD without any guidance from you:

1. **New lecture:** open the app → start recording → see that recording is active → stop → see transcription happen → open the resulting lecture.
2. **Organised lecture:** open a folder or course → start recording from inside it → finish → the new lecture appears in that folder.
3. **Returning to notes:** find an earlier lecture → open it → read its details and transcript.

If a reviewer gets stuck on any of these, that counts against you, so test them on a real device with someone who has not seen the app.

## Tech stack

**Your choice.** Use whatever you are strongest in: React Native (Expo or bare), Flutter, SwiftUI, Jetpack Compose, Kotlin Multiplatform, or another mobile stack.

Whatever you pick, you must:

- Run on a real device or simulator/emulator (a mobile web page in a browser does not count).
- Document in your pull request how to install and run it, from a clean machine, in as few steps as possible.
- Follow your stack's official style guide and formatter on top of the rules in [CONTRIBUTING.md](CONTRIBUTING.md).

## Branches and workflow

This repository has three long-lived branches:

| Branch    | Purpose                                                                 | Who updates it         |
| --------- | ----------------------------------------------------------------------- | ---------------------- |
| `main`    | Reviewed, released code.                                                | Maintainers only       |
| `staging` | Pre-release testing. Promoted from `dev`.                               | Maintainers only       |
| `dev`     | Integration branch. Every feature branch starts here and returns here.  | Maintainers merge PRs  |

The rules:

1. **Always branch off `dev`.** Never branch off `main` or `staging`.
2. **One branch per feature**, for example `feature/recording-screen`.
3. When the feature is complete, **open a pull request into `dev`**.
4. **Never merge your own pull request.** A maintainer reviews it and merges it. Do not push directly to `main`, `staging`, or `dev`.

```bash
git clone https://github.com/rege-ontop89/note-takr.git
cd note-takr
git checkout dev
git pull origin dev
git checkout -b feature/<short-description>
```

Branch naming, commit messages, keeping your branch up to date, and the pull request checklist are all in **[CONTRIBUTING.md](CONTRIBUTING.md)**.

## Code quality

Reviewers read your code as well as your app. The full rules are in [CONTRIBUTING.md](CONTRIBUTING.md#code-quality-rules). The ones we check first:

- **Components** are small, do one job, and live in their own file. Anything used on two or more screens moves to a shared components folder.
- **Naming** is descriptive and consistent: `PascalCase` for components and types, `camelCase` for variables and functions (or your language's equivalent), booleans start with `is`, `has`, `can`, or `should`, and event handlers are `handleX` internally and `onX` as props.
- **No hard-coded styles:** colours, spacing, font sizes, and radii come from one theme file.
- **Dummy data lives in one place**, separate from UI code, and is typed.
- **Every screen handles its loading, empty, and error states.**
- **Clean diffs:** no commented-out code, no stray logs, no unused imports, formatter and linter pass with zero warnings.

## Submitting your work

Your submission is your pull request into `dev`. Use the pull request template, and include:

- How to install and run the app
- The stack and key libraries you chose, and why
- Screenshots or a screen recording of all three flows
- Which empty, loading, and error states you built and how to trigger them
- Any design decisions you want the reviewer to notice, and anything you ran out of time for

Then request a review and leave it. Do not merge it.

## Repository layout

```
.
├── PRD.md            Product requirements (read first)
├── README.md         This file
├── CONTRIBUTING.md   Workflow and code quality rules
└── .github/
    └── pull_request_template.md
```

Your app's source goes alongside these files on your feature branch. Keep the project root tidy and add a `.gitignore` suited to your stack so build output, dependencies, and local config are never committed.
