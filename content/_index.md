---
# Leave the homepage title empty to use the site title
title: ""
date: 2022-10-24
type: landing

design:
  # Default section spacing
  spacing: "6rem"

sections:
  - block: resume-biography-3
    content:
      username: admin
      text: |
        Motivated IT professional with four years of experience at Airports Authority of India and a strong academic foundation from IIT Delhi. I build data products and responsible AI systems that improve airport operations while keeping fairness, transparency, and public policy at the core.

        I am currently pursuing the MS(Research) programme at IIT Delhi under the guidance of Prof. Srikanta Bedathur, where I explore fairness-aware diffusion models and trustworthy analytics for large-scale infrastructure planning.
      button:
        text: Email Me
        url: mailto:lakshay.218044@aaiaero.org
    design:
      css_class: dark overlay-gradient
      background:
        color: '#050817'
        image:
          filename: stacked-peaks.svg
          filters:
            brightness: 0.55
          size: cover
          position: center
          parallax: false
  - block: markdown
    content:
      title: 'Professional Snapshot'
      text: |-
        - **Assistant Manager (IT), Airports Authority of India (2019–Present):** Leading digitisation programmes such as Airsewa, NOCAS, BCAS compliance, and airport slot allocation platforms.
        - **MS(Research) Scholar, IIT Delhi (2023–Present):** Investigating fairness-aware diffusion models and analytical pipelines for aviation and public policy.
        - **Strengths:** Data visualisation, statistical modelling, machine learning, operations research, and stakeholder storytelling.
    design:
      columns: '1'
  - block: markdown
    content:
      title: 'Academic Achievements'
      text: |-
        - Graduate Aptitude Test in Engineering (GATE) 2023 — AIR 428 in Computer Science & Engineering.
        - Graduate Aptitude Test in Engineering (GATE) 2022 — AIR 494 in Computer Science & Engineering.
        - CBSE Class X Examination 2011 — CGPA 9.4/10.
    design:
      columns: '1'
  - block: markdown
    content:
      title: 'Academic Projects at IIT Delhi'
      text: |-
        - **Statistical Learning II (Spring 2024):** Conducted fairness audits of convolutional neural networks on the German Traffic Sign Recognition Benchmark (GTSRB), benchmarking parity metrics, robustness, and mitigation strategies.
        - **Statistical Learning I (Autumn 2023):** Compared classical and modern ML pipelines on the Adult Income dataset, analysing the trade-offs between accuracy and demographic parity while implementing reweighing-based bias mitigation.
        - **Graduate Seminar on Diffusion Models (Autumn 2023):** Delivered a literature review on diffusion and score-based generative models, focusing on controllability, regularisation, and their implications for public data ecosystems.
    design:
      columns: '1'
  - block: markdown
    content:
      title: 'Ongoing Projects & Research'
      text: |-
        - **Fair Diffusion for Aviation:** Building diffusion-model pipelines that preserve demographic diversity in synthetic aerial imagery to support safer perception systems.
        - **Data-driven Policy Analytics:** Prototyping dashboards and optimisation frameworks for airport slot allocation and service quality in collaboration with Airports Authority of India.
    design:
      columns: '1'
  - block: markdown
    id: presentations
    content:
      title: 'Project Presentations Delivered at IIT Delhi'
      text: |-
        - *Bias and Fairness in GTSRB Classification*, Statistical Learning II, Spring 2024 — evaluated parity metrics and mitigation outcomes for traffic sign recognition models.
        - *Responsible AI for Aviation Operations*, Research Colloquium, 2023 — shared learnings from fairness-aware modelling and optimisation for airport slot allocation.
    design:
      columns: '1'
  - block: markdown
    content:
      title: 'Course Project Highlights'
      text: |-
        - High Performance Computing — Parallelised numerical kernels and benchmarking exercises on multi-core CPU clusters.
        - Reinforcement Learning — Experimented with policy gradient methods for resource allocation scenarios inspired by air traffic flow management.
        - Statistical Machine Learning — Implemented ensemble methods and calibration pipelines for structured datasets.
        - Computer Vision — Built transfer-learning workflows for remote-sensing image recognition.
        - Advanced Algorithms — Studied approximation algorithms and combinatorial optimisation with practical case studies from aviation.
    design:
      columns: '1'
  - block: markdown
    content:
      title: 'Key Coursework'
      text: |-
        Artificial Intelligence · Machine Learning · Deep Learning · Statistical Learning I & II · Data Mining · Reinforcement Learning · Computer Vision · Natural Language Processing · High Performance Computing · Algorithms · Probability & Statistics · Operations Research · Linear Programming.
    design:
      columns: '1'
---
