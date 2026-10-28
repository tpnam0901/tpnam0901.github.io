---
date: 2026-10-28 15:59:00-0400
title: 🗞️ Paper "Enhancing battery anomaly detection via trend-reversal spectrograms and multi-modal cross-attention" was published by eTransportation.

---

- Phuong-Nam Tran, Trung Thanh Pham, Jae-Jo Lee, Eui-Nam Huh, Choong Seon Hong, <a href="https://www.sciencedirect.com/science/article/pii/S2590116826001025">“Enhancing battery anomaly detection via trend-reversal spectrograms and multi-modal cross-attention”</a>, [eTransportation](https://www.sciencedirect.com/journal/etransportation), vol. 30, 100644, 2026. 📖 [Read it for free](https://authors.elsevier.com/a/1o0RS9CxAHLow1)  

This paper detects anomalies in electric vehicle (EV) battery data. We show that the Short-Time Fourier Transform (STFT) captures "trend reversals" in battery signals, and we combine these spectrograms with the raw time series in a multi-modal cross-attention model (STFNet). The model detects anomalies with two branches, one based on reconstruction and one on classification, and fuses their decisions with logic rules. A cross-brand adaptive version transfers knowledge to new EV brands where only normal data are available. On a large real-world EV dataset, it reaches an average F1 score of 0.8667 and an AUROC of 0.9485, outperforming existing methods.

<img src="/images/publication_preview/stfnet.png" alt="STFNet overview">
