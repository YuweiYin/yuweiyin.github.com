---
title: "UM4: Unified Multilingual Multiple Teacher-Student Model for Zero-Resource Neural Machine Translation"
date: 2022-07-23
collection: publications
permalink: /publications/2022-07-23-IJCAI-MNMT-UM4
venue: "Conference (IJCAI-ECAI 2022)"
# paperurl: "https://yuweiyin.github.io/files/publications/2022-07-23-IJCAI-MNMT-UM4.pdf"
# paperurl: "http://localhost:4000/files/publications/2022-07-23-IJCAI-MNMT-UM4.pdf"
# paperurl: "https://ijcai-22.org/"
# picture: "https://yuweiyin.github.io/files/publications/2022-07-23-IJCAI-MNMT-UM4.png"
# picture: "http://localhost:4000/files/publications/2022-07-23-IJCAI-MNMT-UM4.png"
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

<!-- ## UM4: Unified Multilingual Multiple Teacher-Student Model for Zero-Resource Neural Machine Translation -->

- **Paper URL**: [To be published: IJCAI-ECAI 2022](https://ijcai-22.org/)
- **Authors**: Jian Yang\*, <u>Yuwei Yin</u>\*, Shuming Ma, Dongdong Zhang, Shuangzhi Wu, Hongcheng Guo, Zhoujun Li, Furu Wei
- **Open Source**: [GitHub Code & Data](https://github.com/YuweiYin/UM4)
- **Abstract**:
  - Most translation tasks among languages belong to the zero-resource translation problem where parallel corpora are unavailable. Multilingual neural machine translation (MNMT) enables one-pass translation using shared semantic space for all languages compared to the two-pass pivot translation but often underperforms the pivot-based method. In this paper, we propose a novel method, named as Unified Multilingual Multiple teacher-student Model for NMT (UM4). Our method unifies source-teacher, target-teacher, and pivot-teacher models to guide the student model for the zero-resource translation. The source teacher and target teacher force the student to learn the direct source-target translation by the distilled knowledge on both source and target sides. The monolingual corpus is further leveraged by the pivot-teacher model to enhance the student model. Experimental results demonstrate that our model of 72 directions significantly outperforms previous methods on the WMT benchmark.

![picture](https://yuweiyin.github.io/files/publications/2022-07-23-IJCAI-MNMT-UM4.png)
<!-- ![picture](http://localhost:4000/files/publications/2022-07-23-IJCAI-MNMT-UM4.png) -->

<!-- - **Citation**:
  -  -->

```bibtex
@inproceedings{um4,
  title = {UM4: Unified Multilingual Multiple Teacher-Student Model for Zero-Resource Neural Machine Translation},
  author = {Jian Yang and Yuwei Yin and Shuming Ma and Dongdong Zhang and Shuangzhi Wu and Hongcheng Guo and Zhoujun Li and Furu Wei}
  booktitle = {IJCAI 2022},
  year = {2022},
}
```