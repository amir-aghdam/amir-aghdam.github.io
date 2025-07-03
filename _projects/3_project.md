---
layout: page
title: Related Work Co-pilot
description: An AI-powered assistant for drafting related work sections, combining large language models and arXiv with a human-in-the-loop approach for structured, iterative refinement.
img: assets/img/projects/related_work_copilot.png
importance: 3
category: AI
---

📂 [View the code on GitHub](https://github.com/amir-aghdam/Research-co-pilot)
🎬 [Watch Demo Video](https://github.com/amir-aghdam/amir-aghdam.github.io/tree/main/assets/video/related-work-demo.mp4)

<video width="800" controls>
  <source src="{{ 'assets/video/related-work-demo.mp4' | relative_url }}" type="video/mp4">
  Your browser does not support the video tag.
</video>

## 🎯 Motivation

As a researcher, I often found myself overwhelmed while writing the *related work* section — juggling keywords, chasing arXiv threads, and trying to structure something meaningful.  

Tools like OpenAI’s Deep Research are fascinating, but I craved **more control**, **more transparency**, and a process that didn’t write *for* me, but *with* me.  

That’s why I tried building **Related Work Co-pilot** — an AI-powered assistant that lets you drive every decision: from finding papers to shaping your final draft.

> ⚙️ This project is a personal response to the automation trend: proving that AI doesn’t have to replace us — it can *empower* us, especially in the most nuanced parts of research writing.

## 👨‍🔬 What It Is

Related Work Co-pilot helps you:

- ✅ Define your topic with the help of AI-suggested, editable keywords  
- 📚 Find relevant arXiv papers through RAG-style iterative refinement  
- 🧠 Categorize those papers into meaningful sections using LLMs  
- ✍️ Draft a related work section — in **Text** or **LaTeX** — with your guidance  
- 🔁 Refine that draft interactively until it truly reflects *your voice*  
- 🧾 Export your citations in BibTeX, ready for submission

Unlike tools that push out paragraphs with minimal oversight, this co-pilot **keeps you in control** — step-by-step with unlimted iterative refinements per step.

## ✨ Why This Matters

🚫 Most research-assist tools are "black boxes."  
✅ This one invites you to **steer the wheel**.  

I followed my own workflow for conducting literature review. This tool halves the time we spend searching and drafting — and gives better structure and citation accuracy.

## 🧭 Workflow Overview

### 📝 1. Define Your Topic & Keywords  
- Add your topic  
- Enter or AI-suggest keywords  
- Provide anchor papers or DOIs  
- Click **Find Papers**

### 📚 2. Explore & Select Papers  
- Search results from **arXiv**  
- Browse abstracts, select papers  
- Use AI to refine the search based on selections  
- Iterate until satisfied

### 🗂️ 3. Structure with AI Help  
- Choose number of sections  
- LLM proposes titles & descriptions  
- Automatically assigns papers  
- You revise everything if needed

### ✍️ 4. Draft & Refine  
- Draft in **LaTeX** or plain text  
- Ask for refinements:
  - "Make section 1 more critical"
  - "Expand on paper X"
- Restore earlier versions

### 📄 5. Export & Cite  
- Copy or download the draft  
- Get BibTeX entries for selected papers  
- Ready for integration into your paper

## 🖼️ Interface Preview

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/related_work_copilot.png" title="Full control at every stage: Search, Categorize, Draft, Refine" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="caption">
  Designed for transparency and flexibility — choose papers, organize your structure, and edit drafts iteratively.
</div>

## 🧪 Technologies Used

- 🧠 **AI Providers**: Google Gemini & OpenAI  
- 📚 **Paper Data**: arXiv API  
- 🛠️ **Frontend**: React, Tailwind CSS  
- 🚀 **Build**: Vite, Node.js


<p><strong>Note:</strong> The components of this project were built with the assistance of <a href="https://aistudio.google.com/" target="_blank">Google AI Studio</a>.</p>
