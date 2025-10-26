---
title: "Redbud: A Journey to an AI-Powered Onboarding and Training Platform"
publishedAt: 2025-10-26
description: "A behind-the-scenes story of why and how Redbud came to be—an employee onboarding and training platform built with Django, React, and a Gemini-powered RAG assistant."
slug: "redbud-build-story"
isPublish: true
---

## Redbud: From chaos to calm onboarding

Onboarding shouldn't feel like a scavenger hunt through stale wikis, sprawling spreadsheets, and contradictory Slack threads. Redbud is my answer to that chaos: a single place where teams manage employees, orchestrate training, and get an AI assistant that actually knows your content. The goal is simple—shorter ramp time, fewer ping-me DMs, and a calmer learning experience that doesn't depend on tribal knowledge.

### The spark

A few quarters ago during a Friday release rehearsal, a new teammate spent hours bouncing between links that looked right but were slightly outdated. Three people sent three versions of the "definitive" playbook, and search kept surfacing a page we meant to retire months earlier. By Monday, we hadn't shipped; we'd just hunted. That weekend I started sketching Redbud—a workflow-native training surface that guides, retrieves, and explains with context pulled from the materials we already trust.

### What I built

Redbud is an employee onboarding and training platform with role-aware access, structured courses and modules, and a AI assistant grounded in your own materials. It covers the basics—employee and role management, course/module authoring, evaluations and progress—then layers in AI that can summarize a module or answer clarifying questions without sending people spelunking through doc forests. The experience replaces hunt-the-doc with guided flows and semantic retrieval.

### Why I built it

Onboarding sprawls across tools, which makes important steps easy to miss and confidence hard to build. Most HR suites optimize for forms and compliance but don't deliver a developer-friendly, retrieval-first learning workflow. RAG finally makes GenAI useful for learning, as long as it's tightly grounded in your actual training materials.

## How it works

The architecture is intentionally boring (in the best way): a Django REST backend, a React frontend, and a Gemini-powered RAG layer that retrieves relevant chunks before generation. Materials are chunked and embedded; on any question or "summarize this" action, the system pulls the top‑k passages and composes an answer anchored to those passages. This keeps responses fast, contextual, and auditable—more like a helpful layer over your library than a black box.

```
[ Django Backend ]  ←→  [ REST API ]  ←→  [ React Frontend ]
↓                                   ↓
[ PostgreSQL / Redis ]          [ GenAI Engine + RAG Layer ]
```

### What it contains today

The platform includes employee and role management for managers, trainers, and trainees. It features course and module authoring with multi-format content and clear learning objectives. Trainer evaluations and progress tracking provide accountability and iteration. A RAG assistant summarizes modules, answers clarifying questions, and points back to source materials. The modern web UI is backed by a clean REST API for a straightforward authoring and learning experience.

### Build choices and tradeoffs

Django with DRF provides crisp domain modeling, mature auth patterns, and predictable APIs. React with utility-first styling enables fast iteration on forms, tables, and learning flows. Gemini with RAG delivers strong summarization and instruction-following grounded in retrieved content to reduce hallucinations. The REST-first approach is simple and widely compatible; GraphQL is a future option if client flexibility becomes critical.

## The GenAI layer, briefly

The ingestion process splits modules and materials into semantically meaningful chunks and computes embeddings. For retrieval, when a question or "summarize this module" request comes in, the system fetches the most relevant chunks by vector similarity. Generation composes an answer using those chunks as context so outputs remain faithful to source materials. Guardrails prefer extractive or cite-heavy responses when retrieval confidence is low.

## A day in the life

A trainee opens "Learn," asks "What's the quickest way to set up the local environment for the payments module?" and gets a concise, step-by-step answer with links to the exact module sections. A trainer reviews a cohort's progress, sees where people stall, adds a submodule, and the assistant's summaries update immediately. A manager assigns the next course by role and trusts the assistant to handle routine questions without creating a support queue.

## Quickstart mentality

Local-first development and fast feedback loops matter. The setup pairs a Django API with a React app, wires in the Gemini SDK and retrieval pipeline, and you're answering questions over your content quickly. This pattern has become a reliable way to prototype and evolve AI-backed internal tools without drowning in infrastructure complexity.

## Lessons learned

Retrieval quality is the product: chunking, metadata, and evaluation matter or the assistant feels vague. Authoring experience is leverage: if trainers can't structure content quickly, the AI has nothing reliable to ground on. Start narrow: pick a few high‑impact onboarding flows, make them excellent, then widen the scope.

## What's next

The roadmap includes deeper analytics that tie modules to ramp speed and fewer escalations. Richer content connectors will ingest slide decks, docs, and videos at scale. Provider abstraction will allow switching GenAI backends based on cost, latency, or policy. Certifications, badges, and manager dashboards will serve compliance‑heavy teams.

## Why it matters

Onboarding is where motivation solidifies or evaporates. A calmer, guided experience helps people contribute sooner, cuts repeated questions, and preserves team energy for real work. Redbud exists to close the loop: structure the learning, then let retrieval‑augmented intelligence carry the last mile.
