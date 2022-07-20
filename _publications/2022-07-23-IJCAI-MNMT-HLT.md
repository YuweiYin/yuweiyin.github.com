---
title: "HLT-MT: High-resource Language-specific Training for Multilingual Neural Machine Translation"
date: 2022-07-23
collection: publications
permalink: /publications/2022-07-23-IJCAI-MNMT-HLT
venue: "Conference (IJCAI-ECAI 2022)"
# paperurl: "https://yuweiyin.github.io/files/publications/2022-07-23-IJCAI-MNMT-HLT.pdf"
# paperurl: "http://localhost:4000/files/publications/2022-07-23-IJCAI-MNMT-HLT.pdf"
# paperurl: "https://ijcai-22.org/"
# picture: "https://yuweiyin.github.io/files/publications/2022-07-23-IJCAI-MNMT-HLT.png"
# picture: "http://localhost:4000/files/publications/2022-07-23-IJCAI-MNMT-HLT.png"
---

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
<script> 
MathJax = {
  tex: {
    inlineMath: [['$', '$']],
    processEscapes: true
  }
};
</script>

<!-- ## HLT-MT: High-resource Language-specific Training for Multilingual Neural Machine Translation -->

- **Paper Info**: [arXiv](https://arxiv.org/abs/2207.04906) \| [Anthology](https://www.ijcai.org/proceedings/2022/619) \| [PDF](https://www.ijcai.org/proceedings/2022/0619.pdf) \| <!-- [Spotlight Video]() \| [Full Video]() \| --> [Slides](https://yuweiyin.github.io/files/slides/IJCAI2022-Presentation-206-HLT-full.pdf) \| [Code](https://github.com/YuweiYin/HLT-MT)
- **Authors**: Jian Yang, <u>Yuwei Yin</u>, Shuming Ma, Dongdong Zhang, Zhoujun Li, Furu Wei
- **Abstract**:
  - Multilingual neural machine translation (MNMT) trained in multiple language pairs has attracted considerable attention due to fewer model parameters and lower training costs by sharing knowledge among multiple languages. Nonetheless, multilingual training is plagued by language interference degeneration in shared parameters because of the negative interference among different translation directions, especially on high-resource languages. In this paper, we propose the multilingual translation model with the high-resource language-specific training (<b>HLT-MT</b>) to alleviate the negative interference, which adopts the two-stage training with the language-specific selection mechanism. Specifically, we first train the multilingual model only with the high-resource pairs and select the language-specific modules at the top of the decoder to enhance the translation quality of high-resource directions. Next, the model is further trained on all available corpora to transfer knowledge from high-resource languages (HRLs) to low-resource languages (LRLs). Experimental results show that HLT-MT outperforms various strong baselines on WMT-10 and OPUS-100 benchmarks. Furthermore, the analytic experiments validate the effectiveness of our method in mitigating the negative interference in multilingual training.

![picture](https://yuweiyin.github.io/files/publications/2022-07-23-IJCAI-MNMT-HLT.png)

<!-- - **Citation**:
  -  -->

```bibtex
@inproceedings{hltmt,
  title     = {High-resource Language-specific Training for Multilingual Neural Machine Translation},
  author    = {Yang, Jian and Yin, Yuwei and Ma, Shuming and Zhang, Dongdong and Li, Zhoujun and Wei, Furu},
  booktitle = {Proceedings of the Thirty-First International Joint Conference on
               Artificial Intelligence, {IJCAI-22}},
  publisher = {International Joint Conferences on Artificial Intelligence Organization},
  editor    = {Lud De Raedt},
  pages     = {4461--4467},
  year      = {2022},
  month     = {7},
  note      = {Main Track},
  doi       = {10.24963/ijcai.2022/619},
  url       = {https://doi.org/10.24963/ijcai.2022/619},
}
```
