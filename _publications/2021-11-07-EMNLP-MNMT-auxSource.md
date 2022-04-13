---
title: "Improving Multilingual Neural Machine Translation with Auxiliary Source Languages"
date: 2021-11-07
collection: publications
permalink: /publications/2021-11-07-EMNLP-MNMT-auxSource
# excerpt: "Abstract: Multilingual neural machine translation models typically handle one source language at a time. However, prior work has shown that translating from multiple source languages improves translation quality. Different from existing approaches on multi-source translation that are limited to the test scenario where parallel source sentences from multiple languages are available at inference time, we propose to improve multilingual translation in a more common scenario by exploiting synthetic source sentences from auxiliary languages. We train our model on synthetic multi-source corpora and apply random masking to enable flexible inference with single-source or bi-source inputs. Extensive experiments on Chinese/English-Japanese and a large-scale multilingual translation benchmark show that our model outperforms the multilingual baseline significantly by up to +4.0 BLEU with the largest improvements on low-resource or distant language pairs."
venue: "Conference (EMNLP 2021)"
# paperurl: "https://yuweiyin.github.io/files/publications/2021-11-07-EMNLP-MNMT-auxSource.pdf"
# paperurl: "http://localhost:4000/files/publications/2021-11-07-EMNLP-MNMT-auxSource.pdf"
# paperurl: "https://aclanthology.org/2021.findings-emnlp.260.pdf"
picture: "https://yuweiyin.github.io/files/publications/2021-11-07-EMNLP-MNMT-auxSource.png"
# picture: "http://localhost:4000/files/publications/2021-11-07-EMNLP-MNMT-auxSource.png"
# citation: "Weijia Xu, Yuwei Yin, Shuming Ma, Dongdong Zhang, and Haoyang Huang. 2021. Improving Multilingual Neural Machine Translation with Auxiliary Source Languages. In Findings of the Association for Computational Linguistics: EMNLP 2021, pages 3029–3041, Punta Cana, Dominican Republic. Association for Computational Linguistics."
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

<!-- ## Improving Multilingual Neural Machine Translation with Auxiliary Source Languages -->

- **Paper URL**: [https://aclanthology.org/2021.findings-emnlp.260/](https://aclanthology.org/2021.findings-emnlp.260/)
- **Authors**: Weijia Xu, <u>Yuwei Yin</u>, Shuming Ma, Dongdong Zhang, Haoyang Huang
- **Abstract**:
  - Multilingual neural machine translation models typically handle one source language at a time. However, prior work has shown that translating from multiple source languages improves translation quality. Different from existing approaches on multi-source translation that are limited to the test scenario where parallel source sentences from multiple languages are available at inference time, we propose to improve multilingual translation in a more common scenario by exploiting synthetic source sentences from auxiliary languages. We train our model on synthetic multi-source corpora and apply random masking to enable flexible inference with single-source or bi-source inputs. Extensive experiments on Chinese/English-Japanese and a large-scale multilingual translation benchmark show that our model outperforms the multilingual baseline significantly by up to +4.0 BLEU with the largest improvements on low-resource or distant language pairs.

![picture](https://yuweiyin.github.io/files/publications/2021-11-07-EMNLP-MNMT-auxSource.png)
<!-- ![picture](http://localhost:4000/files/publications/2021-11-07-EMNLP-MNMT-auxSource.png) -->

<!-- - **Citation**:
  - Weijia Xu, Yuwei Yin, Shuming Ma, Dongdong Zhang, and Haoyang Huang. 2021. Improving Multilingual Neural Machine Translation with Auxiliary Source Languages. In Findings of the Association for Computational Linguistics: EMNLP 2021, pages 3029–3041, Punta Cana, Dominican Republic. Association for Computational Linguistics. -->

```bibtex
@inproceedings{xu-etal-2021-improving-multilingual,
    title = "Improving Multilingual Neural Machine Translation with Auxiliary Source Languages",
    author = "Xu, Weijia  and
      Yin, Yuwei  and
      Ma, Shuming  and
      Zhang, Dongdong  and
      Huang, Haoyang",
    booktitle = "Findings of the Association for Computational Linguistics: EMNLP 2021",
    month = nov,
    year = "2021",
    address = "Punta Cana, Dominican Republic",
    publisher = "Association for Computational Linguistics",
    url = "https://aclanthology.org/2021.findings-emnlp.260",
    doi = "10.18653/v1/2021.findings-emnlp.260",
    pages = "3029--3041",
    abstract = "Multilingual neural machine translation models typically handle one source language at a time. However, prior work has shown that translating from multiple source languages improves translation quality. Different from existing approaches on multi-source translation that are limited to the test scenario where parallel source sentences from multiple languages are available at inference time, we propose to improve multilingual translation in a more common scenario by exploiting synthetic source sentences from auxiliary languages. We train our model on synthetic multi-source corpora and apply random masking to enable flexible inference with single-source or bi-source inputs. Extensive experiments on Chinese/English-Japanese and a large-scale multilingual translation benchmark show that our model outperforms the multilingual baseline significantly by up to +4.0 BLEU with the largest improvements on low-resource or distant language pairs.",
}
```
