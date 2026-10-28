---
title: 'Enhancing battery anomaly detection via trend-reversal spectrograms and multi-modal cross-attention'
collection: publications
category: manuscripts
permalink: /publication/battery-anomaly-detection
date: 2026-10-28
venue: 'eTransportation'
abbr: 'eTransportation'
authors: '<b>Phuong-Nam Tran</b>, Trung Thanh Pham, Jae-Jo Lee, Eui-Nam Huh, Choong Seon Hong'
paperurl: 'https://www.sciencedirect.com/science/article/pii/S2590116826001025'
doi: '10.1016/j.etran.2026.100644'
preview: 'stfnet.png'
selected: true
dimensions: true
citation: '<b>Phuong-Nam Tran</b>, Trung Thanh Pham, Jae-Jo Lee, Eui-Nam Huh, Choong Seon Hong. (2026). &quot;Enhancing battery anomaly detection via trend-reversal spectrograms and multi-modal cross-attention.&quot; <i>eTransportation</i>, 30, 100644.'
---

![Enhancing battery anomaly detection via trend-reversal spectrograms and multi-modal cross-attention](/images/publication_preview/stfnet.png)

**Abstract.** Electric vehicles (EVs) have attracted growing attention in recent years due to their potential to reduce greenhouse gas emissions. However, anomaly detection in EV battery data remains challenging because of fluctuations, noise, and the inherent complexity of operational signals. In this study, we propose a deep learning-based, multi-modal anomaly detection framework to address these challenges. Specifically, we demonstrate that the Short-Time Fourier Transform (STFT) can be applied to capture signal “trend reversals” in sequential data, providing additional information for anomaly detection. Building on this insight, we introduce a multi-modal architecture that integrates spectrogram and time-series representations to improve the discriminability of reconstruction errors between normal and abnormal samples. Furthermore, we propose a dual-branch detection strategy with logical fusion, leveraging both reconstruction-based and classification-based approaches. In addition, a cross-brand adaptive model is developed to transfer knowledge across EV brands, enabling deployment in new domains where only normal (unlabeled-anomaly) data are available. Experimental results on a large-scale real-world EV dataset demonstrate an average F1 score of 0.8667 and AUROC of 0.9485, outperforming existing methods. These results confirm the effectiveness of the proposed framework and highlight its potential for practical deployment in the EV industry.

**Keywords:** Electric vehicle, Battery system, Anomaly detection, Dual-abnormality detection model, Trend-reversal spectrogram, Multi-modal anomaly detection
