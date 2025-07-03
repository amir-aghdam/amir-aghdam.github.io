---
layout: page
title: Django Image Processor
description: A cloud-hosted web app for applying image filters in real-time using Django and Pillow.
img: assets/img/projects/image-processor-demo.png
importance: 4
category: Web
---

📂 [View the code on GitHub](https://github.com/amir-aghdam/Image-Editor-AWS)  
---

## 🎓 About the Project

This project was developed as part of the **Cloud Computing** course at **Temple University**. It explores deploying a responsive web-based image processing tool on a **EC2 instance of Amazon AWS servers** using Django.

The application lets users upload images and apply a set of filters including grayscale, sepia, posterize, blur, and edge detection. Results are displayed side-by-side and can be downloaded directly.

---

## 🖼️ Interface Preview
<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/image-processor-demo.png" title="Upload and filter selection" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="caption">
  Image upload form with filter options.
</div>

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/convert-demo.png" title="Original vs Processed" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="caption">
  Processed output displayed alongside the original image.
</div>


---

## 🔧 Technology Stack

- **Backend:** Django, Pillow
- **Frontend:** HTML, CSS, JavaScript, Bootstrap 5
- **Deployment:** AWS EC2 (Ubuntu 22.04)
- **Web Server:** Nginx
- **App Server:** Gunicorn
- **Database:** SQLite (lightweight for demo purposes)

---

## 🔄 Workflow

1. User uploads an image through the web UI.
2. The backend handles validation and stores the image.
3. Based on user selection, the filter is applied using Pillow.
4. Filtered image is saved and previewed.
5. A download link is offered for the processed result.

---

## ☁️ Cloud Deployment

The full stack runs on an **AWS EC2 instance** with the following setup:

- 🐍 Python + Django app running in virtualenv
- 🔥 Gunicorn as WSGI server
- 🧱 Nginx reverse proxy to serve static/media files
- 💾 Database: SQLite (lightweight for demo purposes)



<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/architecture.png" title="System Architecture" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="caption">
  System architecture showing user interaction with Django app through Nginx and Gunicorn on AWS EC2.
</div>

---

## 📋 Features

- Upload images (JPG, PNG, etc.)
- Saves each users processed images in database.
- Apply filters instantly with visual feedback
- On-demand download of output
- Responsive and simple UI

---

## 🧪 Notes

This project demonstrates the end-to-end development and deployment of a real-time image processing web app using cloud-native tools. The front-end design and boilerplate code has been completed with assitance of Replit.