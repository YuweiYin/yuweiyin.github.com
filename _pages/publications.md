---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
redirect_from:
  - /publication
  - /publication/
  - /paper
  - /paper/
  - /papers
  - /papers/
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

"*If at first the idea is not absurd, then there is no hope for it.*" -- Albert Einstein

---

<!-- {% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %} -->

{% include base_path %}

<!-- {% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %} -->

<!-- <h2 id="yyw-directory">Directory</h2> -->

**Research Interests**: Natural Language Understanding & Generation, Multilingual NLP, Interpretable NLP

- [[C]](#yyw-pub-conference) **Conference Proceedings**
  - [[C4]](#yyw-pub-conference-MNMT-UM4) *UM4: Unified Multilingual Multiple Teacher-Student Model for Zero-Resource Neural Machine Translation*
  - [[C3]](#yyw-pub-conference-MNMT-HLT) *HLT-MT: High-resource Language-specific Training for Multilingual Neural Machine Translation*
  - [[C2]](#yyw-pub-conference-MNMT-auxSource) *Improving Multilingual Neural Machine Translation with Auxiliary Source Languages*
  - [[C1]](#yyw-pub-conference-MNMT-multiAgreement) *Multilingual Agreement for Multilingual Neural Machine Translation*
- [[J]](#yyw-pub-journal) **Journal Articles**
  - [[J1]](#yyw-pub-journal-Smart-Band-System) *Design and Implementation of Smart Band System*
<!-- - [[P]](#yyw-pub-preprints) **Preprints** -->
  <!-- - [[P1]](#yyw-pub-preprints-XNLP) *XNLP* -->

<!-- --- -->

<h2 id="yyw-pub-conference">Conference Proceedings</h2>

<h3 id="yyw-pub-conference-MNMT-UM4">[C4] UM4: Unified Multilingual Multiple Teacher-Student Model for Zero-Resource Neural Machine Translation</h3>

- Jian Yang\*, <u>Yuwei Yin</u>\*, Shuming Ma, Dongdong Zhang, Shuangzhi Wu, Hongcheng Guo, Zhoujun Li, Furu Wei
- Published in Conference: [IJCAI-ECAI 2022](https://ijcai-22.org/) (Vienna, Austria. July 2022)
- [Detail Page](https://yuweiyin.github.io/publications/2022-07-23-IJCAI-MNMT-UM4) \| [arXiv](https://arxiv.org/abs/2207.04900) \| [Anthology](https://www.ijcai.org/proceedings/2022/618) \| [PDF](https://www.ijcai.org/proceedings/2022/0618.pdf) \| <!-- [Spotlight Video]() \| [Full Video]() \| --> [Slides](https://yuweiyin.github.io/files/slides/IJCAI2022-Presentation-205-UM4-full.pdf) \| [Code](https://github.com/YuweiYin/UM4)
- <details><summary>Abstract</summary>Most translation tasks among languages belong to the zero-resource translation problem where parallel corpora are unavailable. Multilingual neural machine translation (MNMT) enables one-pass translation using shared semantic space for all languages compared to the two-pass pivot translation but often underperforms the pivot-based method. In this paper, we propose a novel method, named as <b>U</b>nified <b>M</b>ultilingual <b>M</b>ultiple teacher-student <b>M</b>odel for N<b>M</b>T (<b>UM4</b>). Our method unifies source-teacher, target-teacher, and pivot-teacher models to guide the student model for the zero-resource translation. The source teacher and target teacher force the student to learn the direct source to target translation by the distilled knowledge on both source and target sides. The monolingual corpus is further leveraged by the pivot-teacher model to enhance the student model. Experimental results demonstrate that our model of 72 directions significantly outperforms previous methods on the WMT benchmark.</details>


<h3 id="yyw-pub-conference-MNMT-HLT">[C3] HLT-MT: High-resource Language-specific Training for Multilingual Neural Machine Translation</h3>

- Jian Yang, <u>Yuwei Yin</u>, Shuming Ma, Dongdong Zhang, Zhoujun Li, Furu Wei
- Published in Conference: [IJCAI-ECAI 2022](https://ijcai-22.org/) (Vienna, Austria. July 2022)
- [Detail Page](https://yuweiyin.github.io/publications/2022-07-23-IJCAI-MNMT-HLT) \| [arXiv](https://arxiv.org/abs/2207.04906) \| [Anthology](https://www.ijcai.org/proceedings/2022/619) \| [PDF](https://www.ijcai.org/proceedings/2022/0619.pdf) \| <!-- [Spotlight Video]() \| [Full Video]() \| --> [Slides](https://yuweiyin.github.io/files/slides/IJCAI2022-Presentation-206-HLT-full.pdf) \| [Code](https://github.com/YuweiYin/HLT-MT)
- <details><summary>Abstract</summary>Multilingual neural machine translation (MNMT) trained in multiple language pairs has attracted considerable attention due to fewer model parameters and lower training costs by sharing knowledge among multiple languages. Nonetheless, multilingual training is plagued by language interference degeneration in shared parameters because of the negative interference among different translation directions, especially on high-resource languages. In this paper, we propose the multilingual translation model with the high-resource language-specific training (<b>HLT-MT</b>) to alleviate the negative interference, which adopts the two-stage training with the language-specific selection mechanism. Specifically, we first train the multilingual model only with the high-resource pairs and select the language-specific modules at the top of the decoder to enhance the translation quality of high-resource directions. Next, the model is further trained on all available corpora to transfer knowledge from high-resource languages (HRLs) to low-resource languages (LRLs). Experimental results show that HLT-MT outperforms various strong baselines on WMT-10 and OPUS-100 benchmarks. Furthermore, the analytic experiments validate the effectiveness of our method in mitigating the negative interference in multilingual training.</details>


<h3 id="yyw-pub-conference-MNMT-auxSource">[C2] Improving Multilingual Neural Machine Translation with Auxiliary Source Languages</h3>

- Weijia Xu, <u>Yuwei Yin</u>, Shuming Ma, Dongdong Zhang, Haoyang Huang
- Published in Conference: [EMNLP 2021](https://2021.emnlp.org/) (Punta Cana, Dominican Republic. November 2021)
- [Detail Page](https://yuweiyin.github.io/publications/2021-11-07-EMNLP-MNMT-auxSource) \| [Anthology](https://aclanthology.org/2021.findings-emnlp.260/) \| [PDF](https://aclanthology.org/2021.findings-emnlp.260.pdf)
- <details><summary>Abstract</summary>Multilingual neural machine translation models typically handle one source language at a time. However, prior work has shown that translating from multiple source languages improves translation quality. Different from existing approaches on multi-source translation that are limited to the test scenario where parallel source sentences from multiple languages are available at inference time, we propose to improve multilingual translation in a more common scenario by exploiting synthetic source sentences from auxiliary languages. We train our model on synthetic multi-source corpora and apply random masking to enable flexible inference with single-source or bi-source inputs. Extensive experiments on Chinese/English-Japanese and a large-scale multilingual translation benchmark show that our model outperforms the multilingual baseline significantly by up to +4.0 BLEU with the largest improvements on low-resource or distant language pairs.</details>


<h3 id="yyw-pub-conference-MNMT-multiAgreement">[C1] Multilingual Agreement for Multilingual Neural Machine Translation</h3>

- Jian Yang, <u>Yuwei Yin</u>, Shuming Ma, Haoyang Huang, Dongdong Zhang, Zhoujun Li, Furu Wei
- Published in Conference: [ACL-IJCNLP 2021](https://2021.aclweb.org/) (Bangkok, Thailand. August 2021)
- [Detail Page](https://yuweiyin.github.io/publications/2021-08-02-ACL-MNMT-multiAgreement) \| [Anthology](https://aclanthology.org/2021.acl-short.31/) \| [PDF](https://aclanthology.org/2021.acl-short.31.pdf)
- <details><summary>Abstract</summary>Although multilingual neural machine translation (MNMT) enables multiple language translations, the training process is based on independent multilingual objectives. Most multilingual models can not explicitly exploit different language pairs to assist each other, ignoring the relationships among them. In this work, we propose a novel agreement-based method to encourage multilingual agreement among different translation directions, which minimizes the differences among them. We combine the multilingual training objectives with the agreement term by randomly substituting some fragments of the source language with their counterpart translations of auxiliary languages. To examine the effectiveness of our method, we conduct experiments on the multilingual translation task of 10 language pairs. Experimental results show that our method achieves significant improvements over the previous multilingual baselines.</details>



<h2 id="yyw-pub-journal">Journal Articles</h2>

<h3 id="yyw-pub-journal-Smart-Band-System">[J1] Design and Implementation of Smart Band System</h3>

- Xuping Ma, Jiahao Cai, <u>Yuwei Yin</u>, Shangsu Ding
- Published in Journal: Computer Knowledge and Technology (December 2016, China)
- [Detail Page](https://yuweiyin.github.io/publications/2016-12-01-Smart-Band-System) \| [Anthology](https://www.cnki.net/kcms/doi/10.14004/j.cnki.ckt.2016.4822.html) \| [PDF](https://yuweiyin.github.io/files/publications/2016-12-01-Smart-Band-System.pdf)
- <details><summary>Abstract</summary>Nowadays, health and intelligent medical are hotspot of the society. According to this, here puts forward a design and implementation of smart band system, focus on measuring the heart rate and the sports situation. The first part is about the main technics which are used, including the Photo Plethysmography and acceleration measure; then the second part is the introduction about design of band, the telephone client and the backend server including the design of hardware, client and database, and how to process the data; in the end an instance is used to prove the practicability of the system. Based on this, a conclusion is drawn, and the future direction is put forward.</details>



<!-- <h2 id="yyw-pub-preprints">Preprints</h2> -->

<!-- <h3 id="yyw-pub-preprints-XNLP">[P1] XNLP</h3> -->
