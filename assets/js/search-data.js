// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "My publications in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-will-finish-my-master-s-degree-in-computer-science-from-temple-university-this-summer",
          title: '🎉 I will finish my Master’s degree in Computer Science from Temple University...',
          description: "",
          section: "News",},{id: "news-my-most-recent-work-is-published-on-arxiv-in-collaboration-with-lmu-munich-project-page",
          title: '📢 My most recent work is published on arXiv in collaboration with LMU...',
          description: "",
          section: "News",},{id: "projects-actalign-zero-shot-fine-grained-video-classification",
          title: 'ActAlign: Zero-Shot Fine-Grained Video Classification',
          description: "A zero-shot framework that uses LLM-generated sub-action scripts and sequence alignment to classify fine-grained actions in video without any video–text supervision.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-beyond-confidence-evidential-learning-for-robust-classification",
          title: 'Beyond Confidence: Evidential Learning for Robust Classification',
          description: "A deep learning project focused on uncertainty-aware classification using Dirichlet-based evidential models improving F1 score by %10.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-related-work-co-pilot",
          title: 'Related Work Co-pilot',
          description: "An AI-powered assistant for drafting related work sections, combining large language models and arXiv with a human-in-the-loop approach for structured, iterative refinement.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-django-image-processor",
          title: 'Django Image Processor',
          description: "A cloud-hosted web app for applying image filters in real-time using Django and Pillow.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-3d-u-net",
          title: '3D U-Net',
          description: "a clean Pytorch implementation of 3D U-Net for volumetric medical images with a customized data pipeline.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-3d-brain-tumor-segmentation",
          title: '3D Brain Tumor Segmentation',
          description: "The PyTorch implementation of the first-place winning model on the BRATS dataset for 3D brain tumor segmentation using MRI scans.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%6D%69%72.%61%67%68%64%61%6D@%74%65%6D%70%6C%65.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/amir-aghdam", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/amir--aghdam", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=RUtOILIAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://medium.com/@amir.aghdam", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
