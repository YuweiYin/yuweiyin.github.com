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

- **Paper Info**: [arXiv](https://arxiv.org/abs/2207.04900) \| [Anthology](https://www.ijcai.org/proceedings/2022/618) \| [PDF](https://www.ijcai.org/proceedings/2022/0618.pdf) \| <!-- [Spotlight Video]() \| [Full Video]() \| --> [Slides](https://yuweiyin.github.io/files/slides/IJCAI2022-Presentation-205-UM4-full.pdf) \| [Code](https://github.com/YuweiYin/UM4)
- **Authors**: Jian Yang\*, <u>Yuwei Yin</u>\*, Shuming Ma, Dongdong Zhang, Shuangzhi Wu, Hongcheng Guo, Zhoujun Li, Furu Wei
- **Abstract**:
  - Most translation tasks among languages belong to the zero-resource translation problem where parallel corpora are unavailable. Multilingual neural machine translation (MNMT) enables one-pass translation using shared semantic space for all languages compared to the two-pass pivot translation but often underperforms the pivot-based method. In this paper, we propose a novel method, named as <b>U</b>nified <b>M</b>ultilingual <b>M</b>ultiple teacher-student <b>M</b>odel for N<b>M</b>T (<b>UM4</b>). Our method unifies source-teacher, target-teacher, and pivot-teacher models to guide the student model for the zero-resource translation. The source teacher and target teacher force the student to learn the direct source to target translation by the distilled knowledge on both source and target sides. The monolingual corpus is further leveraged by the pivot-teacher model to enhance the student model. Experimental results demonstrate that our model of 72 directions significantly outperforms previous methods on the WMT benchmark.

![picture](https://yuweiyin.github.io/files/publications/2022-07-23-IJCAI-MNMT-UM4.png)

<!-- - **Citation**:
  -  -->

```bibtex
@inproceedings{um4,
  title     = {UM4: Unified Multilingual Multiple Teacher-Student Model for Zero-Resource Neural Machine Translation},
  author    = {Yang, Jian and Yin, Yuwei and Ma, Shuming and Zhang, Dongdong and Wu, Shuangzhi and Guo, Hongcheng and Li, Zhoujun and Wei, Furu},
  booktitle = {Proceedings of the Thirty-First International Joint Conference on
               Artificial Intelligence, {IJCAI-22}},
  publisher = {International Joint Conferences on Artificial Intelligence Organization},
  editor    = {Lud De Raedt},
  pages     = {4454--4460},
  year      = {2022},
  month     = {7},
  note      = {Main Track},
  doi       = {10.24963/ijcai.2022/618},
  url       = {https://doi.org/10.24963/ijcai.2022/618},
}
```
