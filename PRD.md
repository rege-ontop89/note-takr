# Lecture Recording & Notes App

Product Requirements Document (PRD): Mobile Team Onboarding Project

## 1. Overview

Build a mobile note-taking application designed around recording lectures and organizing the resulting notes.

> **A student should be able to record a lecture, stop the recording, and have that lecture turned into a written transcript that they can return to later.**

For this onboarding project, the application does not need a functional backend, real audio recording, transcription, authentication, or cloud storage. The deliverable is a high-quality interactive frontend/dummy application where the important user flows can be experienced from beginning to end.

## 2. Objective

The goal is to design and build an application that makes recording and organizing lecture notes feel simple and intuitive.

The team is responsible for determining the application's visual identity, information architecture, navigation, screen structure, interactions, and overall user experience.

The final build should make it possible to understand how the real product would work without needing an explanation from the developers.

## 3. Core Product Requirements

- **Record a lecture.** The user should be able to begin a new recording and experience the complete recording flow, including an active recording state and stopping the recording.
- **Generate a transcript.** After a recording ends, the application should represent the process of converting the recording into written notes. Since this is a frontend prototype, this can use dummy/sample transcript content.
- **View previous recordings and notes.** Users should be able to return to lectures they previously recorded and view their transcripts.
- **Organize lectures.** Users should be able to create folders or another sensible organizational structure for grouping related lectures. For example, a student might organize recordings under a course such as COS 202.
- **Record directly into an existing folder.** A user viewing a particular folder should be able to start a new lecture recording within that context. Once completed, the resulting lecture/transcript should appear inside that folder.
- **Manage basic lecture information.** Recorded lectures should contain enough information for users to distinguish and find them again, with the exact structure left to the team's judgment.

## 4. Required User Flows

1. **New lecture:** User opens the app → begins recording → sees that recording is active → stops recording → transcription is represented → resulting lecture/note is accessible afterward.
2. **Organized lecture:** User accesses their organized lectures → opens a folder/course → starts a recording from within it → completes the recording → resulting lecture appears within that organization.
3. **Returning to notes:** User finds a previously recorded lecture → opens it → views the lecture information and transcript.

## 5. Scope

This project is primarily a product-design and frontend implementation exercise.

The team should focus on making the application feel coherent and believable rather than implementing production infrastructure.

Real audio recording, speech-to-text services, databases, cloud synchronization, authentication, AI integrations, and production APIs are not required.

Dummy data and simulated states should be used wherever necessary to make the complete experience testable.

## 6. Design Expectations

There is intentionally no provided UI/UX design.

The team should make its own decisions about navigation, screen hierarchy, visual language, interactions, empty states, recording experience, organization system, and other UX details required to make the product understandable.

The interface should feel like a cohesive mobile product rather than a collection of disconnected screens.

## 7. Definition of Done

The onboarding project is complete when someone can install/run the application and move through the major product flows without developer guidance.

The reviewer should be able to understand how they would record a lecture → finish it → access the transcript → organize recordings → find and revisit previous lectures, even though the underlying functionality is simulated.

The final implementation should demonstrate both technical frontend ability and thoughtful product/design decisions.
