---
permalink: /
title: "Phuong-Nam Tran, Ph.D.c"
excerpt: "An Artificial Intelligence Researcher"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

{% include base_path %}

<a href="https://www.khu.ac.kr/eng/user/main/view.do">Kyung Hee University, Suwon Campus, Republic of Korea</a>

[![](https://img.shields.io/endpoint?url=https%3A%2F%2Fgoogle-scholar-badge.vercel.app%2Fcitations%3Fuser%3DNKbwDD8AAAAJ)](https://scholar.google.com/citations?user=NKbwDD8AAAAJ)

I am Tran **Phuong Nam** (Trần **Phương Nam** in Vietnamese), a Ph.D. candidate at Kyung Hee University, Republic of Korea, and a member of the <a href="http://networking.khu.ac.kr/">Networking Intelligence Laboratory</a> led by Prof. <a href="https://scholar.google.com/citations?user=oKANWloAAAAJ">Choong Seon Hong</a>.

My research focuses on **multimodal deep learning** and its use in real-world systems. I have worked on:

- **Emotion recognition** from speech and text, including <a href="https://www.nature.com/articles/s41598-025-89202-x">MemoCMT</a> (*Scientific Reports*, 2025).
- **Anomaly detection** for electric vehicle batteries, using spectrograms and time-series data (*eTransportation*, 2026).
- **Large language models and federated learning**, including two surveys in *ACM Computing Surveys*: one on reinforcement-learning-based LLMs and wireless networks, and one on foundation models for personalized federated intelligence.

I received my B.Sc. in Artificial Intelligence from <a href="https://uni.fpt.edu.vn/en-US/home">FPT University</a>, Vietnam, in 2023, graduating as valedictorian of Information Technology. That same year, our paper on image captioning won the Best Paper Award at ICTC 2023. Before starting my Ph.D., I worked as an AI engineer at K&G Technology, as an AI researcher at Pythera AI, and as a researcher at the AiTA Lab, FPT University.

<h2><a href="{{ base_path }}/news/" style="color: inherit">🗞️ News 🗞️</a></h2>

{% include news-list.html limit=5 scrollable=true %}

<h2><a href="{{ base_path }}/publications/" style="color: inherit">🏅 Selected publications 🏅</a></h2>

{% assign selected = site.publications | where: "selected", true | sort: "date" | reverse %}
{% for post in selected %}{% include selected-publication.html %}{% endfor %}

<div class="visitor-map">
  <script type="text/javascript" id="mapmyvisitors" src="//mapmyvisitors.com/map.js?d=xW7nMfAHDma4ZgSElvdBVQL-ntbmeGrv_H6wyuEbSpM&cl=ffffff&w=a"></script>
</div>
