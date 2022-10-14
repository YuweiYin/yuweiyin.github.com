---
title: "GTrans: Grouping and Fusing Transformer Layers for Neural Machine Translation"
date: 2022-07-29
collection: publications
permalink: /publications/2022-07-29-IEEE-TASLP-GTrans
venue: "Journal (IEEE T-ASLP 2022)"
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

<!-- ## GTrans: Grouping and Fusing Transformer Layers for Neural Machine Translation -->

- **Paper Info**: [arXiv](https://arxiv.org/abs/2207.14467) \| [PDF](https://arxiv.org/pdf/2207.14467.pdf) \| [Code](https://github.com/YuweiYin/GTrans)
- **Authors**: Jian Yang, <u>Yuwei Yin</u>, Shuming Ma, Haoyang Huang, Dongdong Zhang, Furu Wei and Zhoujun Li
- **Abstract**:
  - Transformer structure, stacked by a sequence of encoder and decoder network layers, achieves significant development in neural machine translation. However, vanilla Transformer mainly exploits the top-layer representation, assuming the lower layers provide trivial or redundant information and thus ignoring the bottom-layer feature that is potentially valuable. In this work, we propose the Group-Transformer model (GTrans) that flexibly divides multi-layer representations of both encoder and decoder into different groups and then fuses these group features to generate target words. To corroborate the effectiveness of the proposed method, extensive experiments and analytic experiments are conducted on three bilingual translation benchmarks and two multilingual translation tasks, including the IWLST-14, IWLST-17, LDC, WMT-14 and OPUS-100 benchmark. Experimental and analytical results demonstrate that our model outperforms its Transformer counterparts by a consistent gain. Furthermore, it can be successfully scaled up to 60 encoder layers and 36 decoder layers.

![picture](https://yuweiyin.github.io/files/publications/2022-07-29-IEEE-TASLP-GTrans-model.png)

<!-- - **Citation**:
  -  -->

```bibtex
@article{gtrans,
  title     = {GTrans: Grouping and Fusing Transformer Layers for Neural Machine Translation},
  author    = {Yang, Jian and Yin, Yuwei and Ma, Shuming and Huang, Haoyang and Zhang, Dongdong and Wei, Furu and Li, Zhoujun},
  journal   = {IEEE/ACM Transactions on Audio, Speech, and Language Processing},
  year      = {2022},
  url       = {https://arxiv.org/abs/2207.14467},
}
```
