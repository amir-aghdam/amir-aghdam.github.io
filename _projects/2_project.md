---
layout: page
title: "Beyond Confidence: Evidential Learning for Robust Classification"
description: "A deep learning project focused on uncertainty-aware classification using Dirichlet-based evidential models improving F1 score by %10."
img: assets/img/projects/evidential_classification.png
importance: 2
category: AI
---
> 📄 [Read the full project report](https://github.com/amir-aghdam/amir-aghdam.github.io/tree/main/assets/pdf/evidential_classification.pdf)
> 📂 Code available at: [https://github.com/amir-aghdam/evidential-classification](https://github.com/amir-aghdam/evidential-classification)

Deep neural networks are often **overconfident and unaware of their own limitations**, especially in uncertain or ambiguous situations. This project takes a bold step forward by applying **evidential deep learning** to visual classification — combining **transformer-based representation learning** with **probabilistic uncertainty modeling**.

We introduce a novel pipeline built on **DINO v2 Vision Transformers**, replacing standard classification heads with a Dirichlet-based evidential output. This empowers the model not only to predict, but to **quantify how much it trusts its own decisions** — an essential feature for safety-critical or fine-grained tasks.

---

### 🚀 Quick Highlight

> **Achieved +4.1% absolute accuracy gain** and vastly improved uncertainty calibration over standard deep networks — showing promise for real-world deployment where reliability matters.

---

### 🌼 Dataset and Task

We validated our approach on a challenging **fine-grained flower classification task**, known for subtle inter-class differences. This serves as a perfect benchmark for testing uncertainty-aware methods.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/flower_examples.png" title="Sample images from dataset" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Samples from the Flowers dataset, illustrating subtle inter-class differences.
</div>

---

### 🧠 Architecture and Training

We adapt a pretrained **DINO v2 ViT-S/14** and append an evidential layer. The model is trained using an **uncertainty-regularized evidential loss**, allowing it to estimate both **class prediction** and **confidence bounds**. Our architecture adds an evidential head on top of a frozen DINO v2 encoder, trained with a KL-regularized loss function.

---

### 📊 Performance

| Metric     | Cross-Entropy | Evidential |
|------------|----------------|-------------|
| Accuracy   | 94.55%         | ⭐ **98.69%** |
| Precision  | 86.32%         | **96.55%**  |
| Recall     | 86.07%         | **96.61%**  |
| F1 Score   | 86.14%         | **96.55%**  |

In addition to numerical gains, the model **calibrates its uncertainty**, lowering trust in incorrect predictions and raising confidence only when justified.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/evidential_classification.png" title="Uncertainty scatter plot" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Evidential models express higher uncertainty on incorrect predictions — a crucial trait missing in standard classifiers.
</div>

---

### 🎯 Visual Interpretability

Grad-CAM and t-SNE visualizations show that evidential models develop more semantically meaningful feature spaces and focus on more relevant image regions.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/gradcam.png" title="GradCAM visualizations" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Grad-CAM reveals sharper and more interpretable attention regions in evidential networks.
</div>

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/t-sne.png" title="t-SNE embeddings" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Clearer cluster formation in evidential models shows more structured representation learning.
</div>

---

### 💡 Why This Matters

This work demonstrates that **uncertainty isn't just a bonus — it's essential**. By embedding calibrated confidence into model outputs, we build a foundation for safer, more responsible AI systems in domains like **healthcare, robotics, autonomous driving, and scientific discovery**, where “I don't know” is often the most important answer.