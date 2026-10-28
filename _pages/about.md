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

My name is Tran **Phuong Nam**  (Trần **Phương Nam** - Vietnamese). I received a B.Sc degree in Artificial Intelligence from <a href="https://uni.fpt.edu.vn/en-US/home">FPT University</a>, Vietnam, in 2023. Currently, I am pursuing my Ph.D. studies at Kyung Hee University in the Republic of Korea and being a member of the <a href="http://networking.khu.ac.kr/"> Networking Intelligence Laboratory</a> led by Prof. <a href="https://scholar.google.com/citations?user=oKANWloAAAAJ">Choong Seon Hong</a>.

<h2><a href="{{ base_path }}/news/" style="color: inherit">🗞️ News 🗞️</a></h2>

{% include news-list.html limit=5 scrollable=true %}

<h2><a href="{{ base_path }}/publications/" style="color: inherit">🏅 Selected publications 🏅</a></h2>

{% assign selected = site.publications | where: "selected", true | sort: "date" | reverse %}
{% for post in selected %}{% include selected-publication.html %}{% endfor %}

<div class="visitor-map">
  <script type="text/javascript" id="mapmyvisitors" src="//mapmyvisitors.com/map.js?d=xW7nMfAHDma4ZgSElvdBVQL-ntbmeGrv_H6wyuEbSpM&cl=ffffff&w=a"></script>
</div>
