---
title: "/usm — User Story Mapping & Multi-Vector Sprint Orchestrator"
category: "Agent Skill"
section: "projects"
date: "2026-08-24"
description: "Bridges 2D USM Matrix with 1D Backlogs in GitHub Projects & Issues, automated with a 6-Vector Gap Ideation Engine and Human-in-the-Loop AI execution."
tags: ["User Story Mapping", "CJM", "JTBD", "GitHub Projects", "Agent Orchestration", "Agile", "Sprint Planning", "PLG"]
---

# /usm — User Story Mapping & Multi-Vector Sprint Orchestrator

The **`/usm`** agent skill bridges human visual project management in **GitHub Projects** with machine-readable task execution in **GitHub Issues**. It automates the transformation of a **2D User Story Mapping Matrix** into a **1D Prioritized Product Backlog**, powers continuous **6-Vector Gap Exploration**, and drives the **Human-in-the-Loop AI execution cycle**.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ 2D USM Matrix (CJM Steps S_1..S_N x Release Slices)                         │
│ ┌──────────────┬──────────────┬──────────────┬────────────┐                 │
│ │ CJM Stage 1  │ CJM Stage 2  │ ...          │ CJM Stage N│                 │
│ ├──────────────┼──────────────┼──────────────┼────────────┤                 │
│ │ 🔴 MVP Card  │ 🔴 MVP Card  │ 🔴 MVP Card  │ 🔴 MVP Card│ ───┐            │
│ ├──────────────┼──────────────┼──────────────┼────────────┤    │            │
│ │ 🟡 Ver.2 Card│ 🟡 Ver.2 Card│ 🟡 Ver.2 Card│ 🟡 Ver.2   │ ───┼──> 1D Backlog
│ ├──────────────┼──────────────┼──────────────┼────────────┤    │    (🔴 -> 🟡 -> 🟢)
│ │ 🟢 Ver.3 Card│ 🟢 Ver.3 Card│ 🟢 Ver.3 Card│ 🟢 Ver.3   │ ───┘            │
│ └──────────────┴──────────────┴──────────────┴────────────┘                 │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 💎 Core Philosophy: Dual-Representation Architecture

AI coding agents need unambiguous linear priorities, while product managers and founders need visual 2D context across Customer Journey Map (CJM) stages. `/usm` creates a **dual-representation model**:

1. **For Humans (GitHub Projects):**
   - **`📋 Backlog`** (Table View): Full backlog sorted by Priority (🔴 $\rightarrow$ 🟡 $\rightarrow$ 🟢) and CJM stage.
   - **`🗺️ USM Matrix`** (2D Board View): Columns by `CJM Stage`, Horizontal Swimlanes by `Priority`.
   - **`⚡ Current Sprint`** (Kanban Board): Active sprint tasks flowing from `Todo` $\rightarrow$ `In Progress` $\rightarrow$ `Done`.

2. **For AI Agents (Pinned GitHub Context Issue):**
   - A single pinned Master Context Issue titled `[USM] <App Name>: User Story Map & Unified Context`.
   - Contains the 2D Matrix table and the unrolled 1D checklist:
     - 🔴 **Critical (MVP)** slices unrolled left-to-right across CJM.
     - 🟡 **Important (Ver.2)** slices unrolled left-to-right across CJM.
     - 🟢 **Additional (Ver.3)** slices unrolled left-to-right across CJM.

---

## 🔍 The 6 Ideation Streams & Gap Exploration Engine

When planning new sprints or exploring product holes, `/usm` runs an exhaustive **6-Vector Audit** with a strict **Anti-Symmetry Rule** (real products have asymmetrical bottlenecks; no forced quotas):

```
 1. 🗺️ CJM Transition Scan (S_1 ➔ S_N)
    ➔ Step-by-step audit of all transition boundaries to eliminate blank canvas drops and time-to-value friction.

 2. 👂 Support & Voice of Customer (VOC) Radar
    ➔ Eliminating user fatigue, passive text traps, unsaved draft losses, and unhandled failure states.

 3. 🧬 Competitor & Cross-Niche Reverse Engineering
    ➔ Adapting psychological mechanics from adjacent domains (Duolingo streaks, Tinder swipe decisions, Raycast Cmd+K palettes).

 4. 📈 Product Analytics & PLG Signals
    ➔ Accelerating the "Aha!" moment in the first 60s, cloning power-user behaviors for casual users, and launching K-factor loops.

 5. 🔍 SEO, Search Intent & Demand Mining
    ➔ Capturing high-intent organic search demand (data export to Notion/Markdown, privacy-first local memory, public prompt galleries).

 6. ⚡ Event Storming & Domain-Driven Ideation (DDD)
    ➔ Modeling domain events, offline-first IndexedDB transaction queues, and optimistic CRDT versioning for collaborative states.
```

---

## 🤖 Human-in-the-Loop Execution Cycle

1. **Human Control:** The user toggles checkboxes or changes task `Status` between `Todo`, `In Progress`, and `Done` directly in GitHub Projects or Issues.
2. **AI Scanning:** When prompted to execute a sprint or feature, the agent queries `gh project item-list` for active non-Done tasks.
3. **Priority Order:** The agent strictly picks the top uncompleted task ordered by `🔴 Critical` $\rightarrow$ `🟡 Important` $\rightarrow$ `🟢 Additional` and chronological CJM stage.
4. **Execution & Auto-Done:** The agent switches `Status: In Progress`, implements and verifies code, sets `Status: Done`, closes the issue, and checks the box in Master Context Issue #1.

---

## ⚙️ Operational Invariants & SDD Specification

1. **Repository Link Invariant:** GitHub Projects must always be bound to the target repository via `linkProjectV2ToRepository`.
2. **Real Issue Invariant:** Project draft items are converted into real repository issues via `convertProjectV2DraftIssueItemToIssue`.
3. **Unrolled Sequence Invariant:** 1D Product Backlog is strictly sorted by Priority ascending (Critical $\rightarrow$ Important $\rightarrow$ Additional) and CJM Stage ascending ($1 \rightarrow N$).
4. **Anti-Symmetry Invariant:** Gap exploration never fabricates artificial quotas; feature volume reflects actual codebase bottlenecks.
