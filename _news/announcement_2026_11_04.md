---
date: 2026-11-04 15:59:00-0400
title: 🗞️ Paper "Anchor-Aided Multi-User Semantic Communication with Adaptive Decoders" was published by IEEE Transactions on Network Science and Engineering.

---

- Loc X. Nguyen, Phuong-Nam Tran, Trung Thanh Pham, Avi Deb Raha, Eui-Nam Huh, Zhu Han, Choong Seon Hong, <a href="https://ieeexplore.ieee.org/abstract/document/11774962">“Anchor-Aided Multi-User Semantic Communication with Adaptive Decoders”</a>, [IEEE Transactions on Network Science and Engineering](https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=6488902), 2026.  

This paper looks at semantic communication with many users whose devices have different computing power, so each user runs a decoder with a different deep architecture. Training one shared encoder for a new user can make it forget how to serve earlier users (catastrophic forgetting). To avoid this, we first train the encoder with a temporary decoder that mirrors the encoder's architecture, so it gives feedback that matches what the encoder can extract. We then freeze the encoder and train each user's own decoder to match its outputs. Simulation experiments compare the framework with other benchmark methods.
