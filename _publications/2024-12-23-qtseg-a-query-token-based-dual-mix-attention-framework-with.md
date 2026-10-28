---
title: 'QTSeg: A Query Token-Based Dual-Mix Attention Framework with Multi-Level Feature Distribution for Medical Image Segmentation'
collection: publications
category: preprints
permalink: /publication/qtseg-a-query-token-based-dual-mix-attention-framework-with
date: 2024-12-23
venue: 'arXiv preprint arXiv:2412.17241'
authors: '<b>Phuong-Nam Tran</b>, Nhat Truong Pham, Duc Ngoc Minh Dang, Eui-Nam Huh, Choong Seon Hong'
paperurl: 'https://arxiv.org/abs/2412.17241'
selected: false
citation: '<b>Phuong-Nam Tran</b>, Nhat Truong Pham, Duc Ngoc Minh Dang, Eui-Nam Huh, Choong Seon Hong. (2024). &quot;QTSeg: A Query Token-Based Dual-Mix Attention Framework with Multi-Level Feature Distribution for Medical Image Segmentation.&quot; <i>arXiv preprint arXiv:2412.17241</i>.'
---

**Abstract (excerpt).** Medical image segmentation plays a crucial role in assisting healthcare professionals with accurate diagnoses and enabling automated diagnostic processes. Traditional convolutional neural networks (CNNs) often struggle with capturing long-range dependencies, while transformer-based architectures, despite their effectiveness, come with increased computational complexity. Recent efforts have focused on combining CNNs and transformers to balance performance and efficiency, but existing approaches still face challenges in achieving high segmentation accuracy while maintaining low computational costs. Furthermore, many methods underutilize the CNN encoder's capability to capture local spatial information, concentrating primarily on mitigating long-range dependency issues. To address these limitations, we propose QTSeg, a novel architecture for medical image segmentation that effectively integrates local and global information. QTSeg features a dual-mix attention decoder designed to enhance segmentation performance through: (1) a cross-attention mechanism for improved feature alignment, (2) a spatial attention module to capture long-range dependencies, and (3) a channel attention block to learn inter-channel relationships. Additionally, we introduce a multi-level feature distribution module, which adaptively balances feature propagation between the encoder and decoder, further boosting performance. Extensive experiments on five publicly available datasets covering diverse segmentation tasks, including lesion, polyp, breast cancer, cell, and retinal vessel segmentation, demonstrate that QTSeg outperforms state-of-the-art …

[Read the full paper](https://arxiv.org/abs/2412.17241)
