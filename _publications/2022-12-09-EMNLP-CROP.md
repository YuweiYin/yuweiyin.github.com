---
title: "CROP: Zero-shot Cross-lingual Named Entity Recognition with Multilingual Labeled Sequence Translation"
date: 2022-12-09
collection: publications
permalink: /publications/2022-12-09-EMNLP-CROP
venue: "Conference (EMNLP 2022)"
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

<!-- ## CROP: Zero-shot Cross-lingual Named Entity Recognition with Multilingual Labeled Sequence Translation -->

- **Paper Info**: [arXiv](https://arxiv.org/abs/2210.07022) \| <!-- [Anthology](https://aclanthology.org/) \| --> [PDF](https://arxiv.org/pdf/2210.07022.pdf) \| [Code](https://github.com/YuweiYin/CROP)
- **Authors**: Jian Yang, Shaohan Huang, Shuming Ma, <u>Yuwei Yin</u>, Li Dong, Dongdong Zhang, Hongcheng Guo, Zhoujun Li and Furu Wei
- **Abstract**:
  - Named entity recognition (NER) suffers from the scarcity of annotated training data, especially for low-resource languages without labeled data. Cross-lingual NER has been proposed to alleviate this issue by transferring knowledge from high-resource languages to low-resource languages via aligned cross-lingual representations or machine translation results. However, the performance of cross-lingual NER methods is severely affected by the unsatisfactory quality of translation or label projection. To address these problems, we propose a <b>Cro</b>ss-lingual Entity <b>P</b>rojection framework (<b>CROP</b>) to enable zero-shot cross-lingual NER with the help of a multilingual labeled sequence translation model. Specifically, the target sequence is first translated into the source language and then tagged by a source NER model. We further adopt a labeled sequence translation model to project the tagged sequence back to the target language and label the target raw sentence. Ultimately, the whole pipeline is integrated into an end-to-end model by the way of self-training. Experimental results on two benchmarks demonstrate that our method substantially outperforms the previous strong baseline by a large margin of +3 ~ 7 F1 scores and achieves state-of-the-art performance.

![picture](https://yuweiyin.github.io/files/publications/2022-12-09-EMNLP-CROP.png)

<!-- - **Citation**:
  -  -->

```bibtex
@inproceedings{crop,
  title     = {CROP: Zero-shot Cross-lingual Named Entity Recognition with Multilingual Labeled Sequence Translation},
  author    = {Yang, Jian and Huang, Shaohan and Ma, Shuming and Yin, Yuwei and Dong, Li and Zhang, Dongdong and Guo, Hongcheng and Li, Zhoujun and Wei, Furu},
  booktitle = {Findings of the Association for Computational Linguistics: EMNLP 2022},
  year      = {2022},
}
```
