(window.webpackJsonp=window.webpackJsonp||[]).push([[325],{569:function(a,e,r){"use strict";r.r(e);var n=r(28),t=Object(n.a)({},(function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"plm-pretraining-language-model"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#plm-pretraining-language-model"}},[a._v("#")]),a._v(" PLM - PreTraining Language Model")]),a._v(" "),r("ul",[r("li",[a._v("Articles of Natural Language Processing series. Contact: "),r("a",{attrs:{href:"mailto:yuwei_yin@163.com?subject=Hello_YuweiYin&body=I'm interested in..."}},[a._v("Email")])]),a._v(" "),r("li",[a._v("For source files, please refer to the "),r("a",{attrs:{href:"https://github.com/YuweiYin/Natural_Language_Processing_YuweiYin",target:"_blank",rel:"noopener noreferrer"}},[a._v("GitHub Repository"),r("OutboundLink")],1),a._v(". (I'd be happy to see more people like this project and give "),r("strong",[a._v("Star")]),a._v(".)")])]),a._v(" "),r("hr"),a._v(" "),r("p",[a._v("By "),r("a",{attrs:{href:"https://yuweiyin.github.io/",target:"_blank",rel:"noopener noreferrer"}},[a._v("YuweiYin"),r("OutboundLink")],1)]),a._v(" "),r("ul",[r("li",[a._v("PreTraining Model\n"),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/article/natural-language-processing/nlp-research-topic/pretraining-language-model/CoVe.html"}},[a._v("CoVe")])],1),a._v(" "),r("li",[r("RouterLink",{attrs:{to:"/article/natural-language-processing/nlp-research-topic/pretraining-language-model/ELMo.html"}},[a._v("ELMo")])],1),a._v(" "),r("li",[r("RouterLink",{attrs:{to:"/article/natural-language-processing/nlp-research-topic/pretraining-language-model/Transformer.html"}},[a._v("Transformer")])],1),a._v(" "),r("li",[r("RouterLink",{attrs:{to:"/article/natural-language-processing/nlp-research-topic/pretraining-language-model/GPT.html"}},[a._v("GPT")])],1),a._v(" "),r("li",[r("RouterLink",{attrs:{to:"/article/natural-language-processing/nlp-research-topic/pretraining-language-model/BERT.html"}},[a._v("BERT")])],1),a._v(" "),r("li",[r("RouterLink",{attrs:{to:"/article/natural-language-processing/nlp-research-topic/pretraining-language-model/Transformer-XL.html"}},[a._v("Transformer-XL")])],1),a._v(" "),r("li",[r("RouterLink",{attrs:{to:"/article/natural-language-processing/nlp-research-topic/pretraining-language-model/XLM.html"}},[a._v("XLM")])],1),a._v(" "),r("li",[r("RouterLink",{attrs:{to:"/article/natural-language-processing/nlp-research-topic/pretraining-language-model/ERNIE.html"}},[a._v("ERNIE")])],1),a._v(" "),r("li",[r("RouterLink",{attrs:{to:"/article/natural-language-processing/nlp-research-topic/pretraining-language-model/XLNet.html"}},[a._v("XLNet")])],1),a._v(" "),r("li",[r("RouterLink",{attrs:{to:"/article/natural-language-processing/nlp-research-topic/pretraining-language-model/RoBERTa.html"}},[a._v("RoBERTa")])],1),a._v(" "),r("li",[r("RouterLink",{attrs:{to:"/article/natural-language-processing/nlp-research-topic/pretraining-language-model/MMBET.html"}},[a._v("MMBET")])],1),a._v(" "),r("li",[r("RouterLink",{attrs:{to:"/article/natural-language-processing/nlp-research-topic/pretraining-language-model/CTRL.html"}},[a._v("CTRL")])],1),a._v(" "),r("li",[r("RouterLink",{attrs:{to:"/article/natural-language-processing/nlp-research-topic/pretraining-language-model/ALBERT.html"}},[a._v("ALBERT")])],1),a._v(" "),r("li",[r("RouterLink",{attrs:{to:"/article/natural-language-processing/nlp-research-topic/pretraining-language-model/DistilBERT.html"}},[a._v("DistilBERT")])],1),a._v(" "),r("li",[r("RouterLink",{attrs:{to:"/article/natural-language-processing/nlp-research-topic/pretraining-language-model/T5.html"}},[a._v("T5")])],1),a._v(" "),r("li",[r("RouterLink",{attrs:{to:"/article/natural-language-processing/nlp-research-topic/pretraining-language-model/BART.html"}},[a._v("BART")])],1),a._v(" "),r("li",[r("RouterLink",{attrs:{to:"/article/natural-language-processing/nlp-research-topic/pretraining-language-model/DialoGPT.html"}},[a._v("DialoGPT")])],1),a._v(" "),r("li",[r("RouterLink",{attrs:{to:"/article/natural-language-processing/nlp-research-topic/pretraining-language-model/XLM-RoBERTa.html"}},[a._v("XLM-RoBERTa")])],1),a._v(" "),r("li",[r("RouterLink",{attrs:{to:"/article/natural-language-processing/nlp-research-topic/pretraining-language-model/CamemBERT.html"}},[a._v("CamemBERT")])],1),a._v(" "),r("li",[r("RouterLink",{attrs:{to:"/article/natural-language-processing/nlp-research-topic/pretraining-language-model/FlauBERT.html"}},[a._v("FlauBERT")])],1),a._v(" "),r("li",[r("RouterLink",{attrs:{to:"/article/natural-language-processing/nlp-research-topic/pretraining-language-model/ELECTRA.html"}},[a._v("ELECTRA")])],1)])])]),a._v(" "),r("h1",{attrs:{id:"_1-language-model"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-language-model"}},[a._v("#")]),a._v(" 1. Language Model")]),a._v(" "),r("p",[a._v("A "),r("strong",[a._v("statistical language model")]),a._v(" is a probability distribution over sequences of words. Given such a sequence of length m, it assigns a probability "),r("code",[a._v("P(w_1, w_2, ..., w_m)")]),a._v(" to the whole sequence. ("),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Language_model",target:"_blank",rel:"noopener noreferrer"}},[a._v("Wiki"),r("OutboundLink")],1),a._v(")")]),a._v(" "),r("p",[r("strong",[a._v("paper")]),a._v(": Language Models are Unsupervised Multitask Learners")]),a._v(" "),r("ul",[r("li",[a._v("Author: Alec Radford, Jeffrey Wu, Rewon Child, David Luan, Dario Amodei, Ilya Sutskever")]),a._v(" "),r("li",[r("a",{attrs:{href:"https://www.ceid.upatras.gr/webpages/faculty/zaro/teaching/alg-ds/PRESENTATIONS/PAPERS/2019-Radford-et-al_Language-Models-Are-Unsupervised-Multitask-%20Learners.pdf",target:"_blank",rel:"noopener noreferrer"}},[a._v("Paper Download"),r("OutboundLink")],1)])]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("@article{radford2019language,\n  title={Language models are unsupervised multitask learners},\n  author={Radford, Alec and Wu, Jeffrey and Child, Rewon and Luan, David and Amodei, Dario and Sutskever, Ilya},\n  journal={OpenAI Blog},\n  volume={1},\n  number={8},\n  pages={9},\n  year={2019}\n}\n")])])]),r("h1",{attrs:{id:"_2-pretraining-model"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-pretraining-model"}},[a._v("#")]),a._v(" 2. PreTraining Model")]),a._v(" "),r("h2",{attrs:{id:"_2-1-cove"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-cove"}},[a._v("#")]),a._v(" 2.1. CoVe")]),a._v(" "),r("p",[r("em",[r("strong",[a._v("CoVe")])]),a._v(": Contextualized Vector")]),a._v(" "),r("p",[r("strong",[a._v("paper")]),a._v(": Learned in Translation: Contextualized Word Vectors")]),a._v(" "),r("ul",[r("li",[a._v("Author: Bryan McCann, James Bradbury, Caiming Xiong, Richard Socher")]),a._v(" "),r("li",[a._v("Paper Link: "),r("a",{attrs:{href:"http://papers.nips.cc/paper/7209-learned-in-translation-contextualized-word-vectors",target:"_blank",rel:"noopener noreferrer"}},[a._v("NIPS 2017"),r("OutboundLink")],1)]),a._v(" "),r("li",[a._v("Paper Download: "),r("a",{attrs:{href:"https://papers.nips.cc/paper/7209-learned-in-translation-contextualized-word-vectors.pdf",target:"_blank",rel:"noopener noreferrer"}},[a._v("NIPS 2017"),r("OutboundLink")],1)]),a._v(" "),r("li",[a._v("Open Source Code: "),r("a",{attrs:{href:"https://github.com/salesforce/cove",target:"_blank",rel:"noopener noreferrer"}},[a._v("GitHub"),r("OutboundLink")],1)])]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("@inproceedings{mccann2017learned,\n  title={Learned in translation: Contextualized word vectors},\n  author={McCann, Bryan and Bradbury, James and Xiong, Caiming and Socher, Richard},\n  booktitle={Advances in Neural Information Processing Systems},\n  pages={6294--6305},\n  year={2017}\n}\n")])])]),r("h2",{attrs:{id:"_2-2-elmo"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-elmo"}},[a._v("#")]),a._v(" 2.2. ELMo")]),a._v(" "),r("p",[r("em",[r("strong",[a._v("ELMo")])])]),a._v(" "),r("p",[r("strong",[a._v("paper")]),a._v(": Deep contextualized word representations")]),a._v(" "),r("ul",[r("li",[a._v("Author: Matthew E. Peters, Mark Neumann, Mohit Iyyer, Matt Gardner, Christopher Clark, Kenton Lee, Luke Zettlemoyer")]),a._v(" "),r("li",[a._v("Paper Link: "),r("a",{attrs:{href:"https://arxiv.org/abs/1802.05365",target:"_blank",rel:"noopener noreferrer"}},[a._v("arXiv"),r("OutboundLink")],1)]),a._v(" "),r("li",[a._v("Paper Download: "),r("a",{attrs:{href:"https://arxiv.org/pdf/1802.05365.pdf",target:"_blank",rel:"noopener noreferrer"}},[a._v("arXiv"),r("OutboundLink")],1)]),a._v(" "),r("li",[a._v("Open Source Code: "),r("a",{attrs:{href:"https://github.com/allenai/allennlp",target:"_blank",rel:"noopener noreferrer"}},[a._v("GitHub"),r("OutboundLink")],1)])]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("@article{peters2018deep,\n  title={Deep contextualized word representations},\n  author={Peters, Matthew E and Neumann, Mark and Iyyer, Mohit and Gardner, Matt and Clark, Christopher and Lee, Kenton and Zettlemoyer, Luke},\n  journal={arXiv preprint arXiv:1802.05365},\n  year={2018}\n}\n")])])]),r("h2",{attrs:{id:"_2-3-transformer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-transformer"}},[a._v("#")]),a._v(" 2.3. Transformer")]),a._v(" "),r("p",[r("em",[r("strong",[a._v("Transformer")])])]),a._v(" "),r("p",[r("strong",[a._v("paper")]),a._v(": Attention is All you Need")]),a._v(" "),r("ul",[r("li",[a._v("Author: Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Łukasz Kaiser, Illia Polosukhin")]),a._v(" "),r("li",[a._v("Paper Link: "),r("a",{attrs:{href:"http://papers.nips.cc/paper/7181-attention-is-all-you-need",target:"_blank",rel:"noopener noreferrer"}},[a._v("NIPS 2017"),r("OutboundLink")],1)]),a._v(" "),r("li",[a._v("Paper Download: "),r("a",{attrs:{href:"https://papers.nips.cc/paper/7181-attention-is-all-you-need.pdf",target:"_blank",rel:"noopener noreferrer"}},[a._v("NIPS 2017"),r("OutboundLink")],1)]),a._v(" "),r("li",[a._v("Transformer-based Models in Pytorch and TensorFlow 2.0: "),r("a",{attrs:{href:"https://github.com/huggingface/transformers",target:"_blank",rel:"noopener noreferrer"}},[a._v("GitHub"),r("OutboundLink")],1)])]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("@inproceedings{vaswani2017attention,\n  title={Attention is all you need},\n  author={Vaswani, Ashish and Shazeer, Noam and Parmar, Niki and Uszkoreit, Jakob and Jones, Llion and Gomez, Aidan N and Kaiser, {\\L}ukasz and Polosukhin, Illia},\n  booktitle={Advances in neural information processing systems},\n  pages={5998--6008},\n  year={2017}\n}\n")])])]),r("h2",{attrs:{id:"_2-4-gpt"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-gpt"}},[a._v("#")]),a._v(" 2.4. GPT")]),a._v(" "),r("p",[r("em",[r("strong",[a._v("GPT")])]),a._v(": Generative Pre-Training")]),a._v(" "),r("p",[r("strong",[a._v("paper")]),a._v(": Improving Language Understanding by Generative Pre-Training")]),a._v(" "),r("ul",[r("li",[a._v("Author: Alec Radford, Karthik Narasimhan, Tim Salimans, Ilya Sutskever")]),a._v(" "),r("li",[a._v("Paper Download: "),r("a",{attrs:{href:"https://www.cs.ubc.ca/~amuham01/LING530/papers/radford2018improving.pdf",target:"_blank",rel:"noopener noreferrer"}},[a._v("arXiv"),r("OutboundLink")],1)]),a._v(" "),r("li",[a._v("Open Source Code: "),r("a",{attrs:{href:"https://github.com/openai/gpt-2",target:"_blank",rel:"noopener noreferrer"}},[a._v("GitHub gpt-2"),r("OutboundLink")],1)]),a._v(" "),r("li",[a._v("OpenAI Hempage: "),r("a",{attrs:{href:"https://openai.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Homepage"),r("OutboundLink")],1)]),a._v(" "),r("li",[a._v("OpenAI GitHub: "),r("a",{attrs:{href:"https://github.com/openai",target:"_blank",rel:"noopener noreferrer"}},[a._v("Git Homepage"),r("OutboundLink")],1)])]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("@misc{radford2018improving,\n  title={Improving language understanding by generative pre-training},\n  author={Radford, Alec and Narasimhan, Karthik and Salimans, Tim and Sutskever, Ilya},\n  year={2018}\n}\n")])])]),r("hr"),a._v(" "),r("p",[r("em",[r("strong",[a._v("GPT-2")])])]),a._v(" "),r("hr"),a._v(" "),r("p",[r("em",[r("strong",[a._v("GPT-3")])])]),a._v(" "),r("h2",{attrs:{id:"_2-5-bert"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-bert"}},[a._v("#")]),a._v(" 2.5. BERT")]),a._v(" "),r("p",[r("em",[r("strong",[a._v("BERT")])])]),a._v(" "),r("p",[r("strong",[a._v("paper")]),a._v(": BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding")]),a._v(" "),r("ul",[r("li",[a._v("Author: Jacob Devlin, Ming-Wei Chang, Kenton Lee, Kristina Toutanova")]),a._v(" "),r("li",[a._v("Paper Link: "),r("a",{attrs:{href:"https://arxiv.org/abs/1810.04805",target:"_blank",rel:"noopener noreferrer"}},[a._v("arXiv"),r("OutboundLink")],1)]),a._v(" "),r("li",[a._v("Paper Download: "),r("a",{attrs:{href:"https://arxiv.org/pdf/1810.04805.pdf",target:"_blank",rel:"noopener noreferrer"}},[a._v("arXiv"),r("OutboundLink")],1)]),a._v(" "),r("li",[a._v("Open Source Code: "),r("a",{attrs:{href:"https://github.com/google-research/bert",target:"_blank",rel:"noopener noreferrer"}},[a._v("GitHub"),r("OutboundLink")],1)]),a._v(" "),r("li",[a._v("Google Research GitHub: "),r("a",{attrs:{href:"https://github.com/google-research",target:"_blank",rel:"noopener noreferrer"}},[a._v("Git Homepage"),r("OutboundLink")],1)]),a._v(" "),r("li",[a._v("Google Research Repo: "),r("a",{attrs:{href:"https://github.com/google-research/google-research",target:"_blank",rel:"noopener noreferrer"}},[a._v("Git Repo"),r("OutboundLink")],1)])]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("@article{devlin2018bert,\n  title={Bert: Pre-training of deep bidirectional transformers for language understanding},\n  author={Devlin, Jacob and Chang, Ming-Wei and Lee, Kenton and Toutanova, Kristina},\n  journal={arXiv preprint arXiv:1810.04805},\n  year={2018}\n}\n")])])]),r("h2",{attrs:{id:"_2-6-transformer-xl"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-transformer-xl"}},[a._v("#")]),a._v(" 2.6. Transformer-XL")]),a._v(" "),r("p",[r("em",[r("strong",[a._v("Transformer-XL")])])]),a._v(" "),r("p",[r("strong",[a._v("paper")]),a._v(": Transformer-XL: Attentive Language Models Beyond a Fixed-Length Context")]),a._v(" "),r("ul",[r("li",[a._v("Author: Zihang Dai, Zhilin Yang, Yiming Yang, Jaime Carbonell, Quoc V. Le, Ruslan Salakhutdinov")]),a._v(" "),r("li",[a._v("Paper Link: "),r("a",{attrs:{href:"https://arxiv.org/abs/1901.02860",target:"_blank",rel:"noopener noreferrer"}},[a._v("arXiv"),r("OutboundLink")],1)]),a._v(" "),r("li",[a._v("Paper Download: "),r("a",{attrs:{href:"https://arxiv.org/pdf/1901.02860",target:"_blank",rel:"noopener noreferrer"}},[a._v("arXiv"),r("OutboundLink")],1)])]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("@article{dai2019transformer,\n  title={Transformer-xl: Attentive language models beyond a fixed-length context},\n  author={Dai, Zihang and Yang, Zhilin and Yang, Yiming and Carbonell, Jaime and Le, Quoc V and Salakhutdinov, Ruslan},\n  journal={arXiv preprint arXiv:1901.02860},\n  year={2019}\n}\n")])])]),r("h2",{attrs:{id:"_2-7-xlm"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-xlm"}},[a._v("#")]),a._v(" 2.7. XLM")]),a._v(" "),r("p",[r("em",[r("strong",[a._v("XLM")])])]),a._v(" "),r("p",[r("strong",[a._v("paper")]),a._v(": Cross-lingual Language Model Pretraining")]),a._v(" "),r("ul",[r("li",[a._v("Author: Guillaume Lample, Alexis Conneau")]),a._v(" "),r("li",[a._v("Paper Link: "),r("a",{attrs:{href:"https://arxiv.org/abs/1901.07291",target:"_blank",rel:"noopener noreferrer"}},[a._v("arXiv"),r("OutboundLink")],1)]),a._v(" "),r("li",[a._v("Paper Download: "),r("a",{attrs:{href:"https://arxiv.org/pdf/1901.07291",target:"_blank",rel:"noopener noreferrer"}},[a._v("arXiv"),r("OutboundLink")],1)])]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("@article{lample2019cross,\n  title={Cross-lingual language model pretraining},\n  author={Lample, Guillaume and Conneau, Alexis},\n  journal={arXiv preprint arXiv:1901.07291},\n  year={2019}\n}\n")])])]),r("h2",{attrs:{id:"_2-8-ernie"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-8-ernie"}},[a._v("#")]),a._v(" 2.8. ERNIE")]),a._v(" "),r("p",[r("em",[r("strong",[a._v("ERNIE")])])]),a._v(" "),r("p",[r("strong",[a._v("paper")]),a._v(": ERNIE: Enhanced Representation through Knowledge Integration")]),a._v(" "),r("ul",[r("li",[a._v("Author: Yu Sun, Shuohuan Wang, Yukun Li, Shikun Feng, Xuyi Chen, Han Zhang, Xin Tian, Danxiang Zhu, Hao Tian, Hua Wu")]),a._v(" "),r("li",[a._v("Paper Link: "),r("a",{attrs:{href:"https://arxiv.org/abs/1904.09223",target:"_blank",rel:"noopener noreferrer"}},[a._v("arXiv"),r("OutboundLink")],1)]),a._v(" "),r("li",[a._v("Paper Download: "),r("a",{attrs:{href:"https://arxiv.org/pdf/1904.09223",target:"_blank",rel:"noopener noreferrer"}},[a._v("arXiv"),r("OutboundLink")],1)])]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("@article{sun2019ernie,\n  title={Ernie: Enhanced representation through knowledge integration},\n  author={Sun, Yu and Wang, Shuohuan and Li, Yukun and Feng, Shikun and Chen, Xuyi and Zhang, Han and Tian, Xin and Zhu, Danxiang and Tian, Hao and Wu, Hua},\n  journal={arXiv preprint arXiv:1904.09223},\n  year={2019}\n}\n")])])]),r("h2",{attrs:{id:"_2-9-xlnet"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-9-xlnet"}},[a._v("#")]),a._v(" 2.9. XLNet")]),a._v(" "),r("p",[r("em",[r("strong",[a._v("XLNet")])])]),a._v(" "),r("p",[r("strong",[a._v("paper")]),a._v(": XLNet: Generalized Autoregressive Pretraining for Language Understanding")]),a._v(" "),r("ul",[r("li",[a._v("Author: Zhilin Yang, Zihang Dai, Yiming Yang, Jaime Carbonell, Ruslan Salakhutdinov, Quoc V. Le")]),a._v(" "),r("li",[a._v("Paper Link: "),r("a",{attrs:{href:"https://arxiv.org/abs/1906.08237",target:"_blank",rel:"noopener noreferrer"}},[a._v("arXiv"),r("OutboundLink")],1),a._v(" "),r("a",{attrs:{href:"http://papers.nips.cc/paper/8812-xlnet-generalized-autoregressive-pretraining-for-language-understanding",target:"_blank",rel:"noopener noreferrer"}},[a._v("NIPS 2019"),r("OutboundLink")],1)]),a._v(" "),r("li",[a._v("Paper Download: "),r("a",{attrs:{href:"https://arxiv.org/pdf/1906.08237.pdf",target:"_blank",rel:"noopener noreferrer"}},[a._v("arXiv"),r("OutboundLink")],1),a._v(" "),r("a",{attrs:{href:"https://papers.nips.cc/paper/8812-xlnet-generalized-autoregressive-pretraining-for-language-understanding.pdf",target:"_blank",rel:"noopener noreferrer"}},[a._v("NIPS 2019"),r("OutboundLink")],1)])]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("@inproceedings{yang2019xlnet,\n  title={Xlnet: Generalized autoregressive pretraining for language understanding},\n  author={Yang, Zhilin and Dai, Zihang and Yang, Yiming and Carbonell, Jaime and Salakhutdinov, Russ R and Le, Quoc V},\n  booktitle={Advances in neural information processing systems},\n  pages={5753--5763},\n  year={2019}\n}\n")])])]),r("h2",{attrs:{id:"_2-10-roberta"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-10-roberta"}},[a._v("#")]),a._v(" 2.10. RoBERTa")]),a._v(" "),r("p",[r("em",[r("strong",[a._v("RoBERTa")])])]),a._v(" "),r("p",[r("strong",[a._v("paper")]),a._v(": RoBERTa: A Robustly Optimized BERT Pretraining Approach")]),a._v(" "),r("ul",[r("li",[a._v("Author: Yinhan Liu, Myle Ott, Naman Goyal, Jingfei Du, Mandar Joshi, Danqi Chen, Omer Levy, Mike Lewis, Luke Zettlemoyer, Veselin Stoyanov")]),a._v(" "),r("li",[a._v("Paper Link: "),r("a",{attrs:{href:"https://arxiv.org/abs/1907.11692",target:"_blank",rel:"noopener noreferrer"}},[a._v("arXiv"),r("OutboundLink")],1)]),a._v(" "),r("li",[a._v("Paper Download: "),r("a",{attrs:{href:"https://arxiv.org/pdf/1907.11692",target:"_blank",rel:"noopener noreferrer"}},[a._v("arXiv"),r("OutboundLink")],1)])]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("@article{liu2019roberta,\n  title={Roberta: A robustly optimized bert pretraining approach},\n  author={Liu, Yinhan and Ott, Myle and Goyal, Naman and Du, Jingfei and Joshi, Mandar and Chen, Danqi and Levy, Omer and Lewis, Mike and Zettlemoyer, Luke and Stoyanov, Veselin},\n  journal={arXiv preprint arXiv:1907.11692},\n  year={2019}\n}\n")])])]),r("h2",{attrs:{id:"_2-11-mmbet"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-11-mmbet"}},[a._v("#")]),a._v(" 2.11. MMBET")]),a._v(" "),r("p",[r("em",[r("strong",[a._v("MMBET")])])]),a._v(" "),r("p",[r("strong",[a._v("paper")]),a._v(": Supervised Multimodal Bitransformers for Classifying Images and Text")]),a._v(" "),r("ul",[r("li",[a._v("Author: Douwe Kiela, Suvrat Bhooshan, Hamed Firooz, Davide Testuggine")]),a._v(" "),r("li",[a._v("Paper Link: "),r("a",{attrs:{href:"https://arxiv.org/abs/1909.02950",target:"_blank",rel:"noopener noreferrer"}},[a._v("arXiv"),r("OutboundLink")],1)]),a._v(" "),r("li",[a._v("Paper Download: "),r("a",{attrs:{href:"https://arxiv.org/pdf/1909.02950",target:"_blank",rel:"noopener noreferrer"}},[a._v("arXiv"),r("OutboundLink")],1)])]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("@article{kiela2019supervised,\n  title={Supervised multimodal bitransformers for classifying images and text},\n  author={Kiela, Douwe and Bhooshan, Suvrat and Firooz, Hamed and Testuggine, Davide},\n  journal={arXiv preprint arXiv:1909.02950},\n  year={2019}\n}\n")])])]),r("h2",{attrs:{id:"_2-12-ctrl"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-12-ctrl"}},[a._v("#")]),a._v(" 2.12. CTRL")]),a._v(" "),r("p",[r("em",[r("strong",[a._v("CTRL")])])]),a._v(" "),r("p",[r("strong",[a._v("paper")]),a._v(": CTRL: A Conditional Transformer Language Model for Controllable Generation")]),a._v(" "),r("ul",[r("li",[a._v("Author: Nitish Shirish Keskar, Bryan McCann, Lav R. Varshney, Caiming Xiong, Richard Socher")]),a._v(" "),r("li",[a._v("Paper Link: "),r("a",{attrs:{href:"https://arxiv.org/abs/1909.05858",target:"_blank",rel:"noopener noreferrer"}},[a._v("arXiv"),r("OutboundLink")],1)]),a._v(" "),r("li",[a._v("Paper Download: "),r("a",{attrs:{href:"https://arxiv.org/pdf/1909.05858",target:"_blank",rel:"noopener noreferrer"}},[a._v("arXiv"),r("OutboundLink")],1)])]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("@article{keskar2019ctrl,\n  title={Ctrl: A conditional transformer language model for controllable generation},\n  author={Keskar, Nitish Shirish and McCann, Bryan and Varshney, Lav R and Xiong, Caiming and Socher, Richard},\n  journal={arXiv preprint arXiv:1909.05858},\n  year={2019}\n}\n")])])]),r("h2",{attrs:{id:"_2-13-albert"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-13-albert"}},[a._v("#")]),a._v(" 2.13. ALBERT")]),a._v(" "),r("p",[r("em",[r("strong",[a._v("ALBERT")])])]),a._v(" "),r("p",[r("strong",[a._v("paper")]),a._v(": ALBERT: A Lite BERT for Self-supervised Learning of Language Representations")]),a._v(" "),r("ul",[r("li",[a._v("Author: Zhenzhong Lan, Mingda Chen, Sebastian Goodman, Kevin Gimpel, Piyush Sharma, Radu Soricut")]),a._v(" "),r("li",[a._v("Paper Link: "),r("a",{attrs:{href:"https://arxiv.org/abs/1909.11942",target:"_blank",rel:"noopener noreferrer"}},[a._v("arXiv"),r("OutboundLink")],1)]),a._v(" "),r("li",[a._v("Paper Download: "),r("a",{attrs:{href:"https://arxiv.org/pdf/1909.11942",target:"_blank",rel:"noopener noreferrer"}},[a._v("arXiv"),r("OutboundLink")],1)])]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("@article{lan2019albert,\n  title={Albert: A lite bert for self-supervised learning of language representations},\n  author={Lan, Zhenzhong and Chen, Mingda and Goodman, Sebastian and Gimpel, Kevin and Sharma, Piyush and Soricut, Radu},\n  journal={arXiv preprint arXiv:1909.11942},\n  year={2019}\n}\n")])])]),r("h2",{attrs:{id:"_2-14-distilbert"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-14-distilbert"}},[a._v("#")]),a._v(" 2.14. DistilBERT")]),a._v(" "),r("p",[r("em",[r("strong",[a._v("DistilBERT")])])]),a._v(" "),r("p",[r("strong",[a._v("paper")]),a._v(": DistilBERT, a distilled version of BERT: smaller, faster, cheaper and lighter")]),a._v(" "),r("ul",[r("li",[a._v("Author: Victor Sanh, Lysandre Debut, Julien Chaumond, Thomas Wolf")]),a._v(" "),r("li",[a._v("Paper Link: "),r("a",{attrs:{href:"https://arxiv.org/abs/1910.01108",target:"_blank",rel:"noopener noreferrer"}},[a._v("arXiv"),r("OutboundLink")],1)]),a._v(" "),r("li",[a._v("Paper Download: "),r("a",{attrs:{href:"https://arxiv.org/pdf/1910.01108.pdf",target:"_blank",rel:"noopener noreferrer"}},[a._v("arXiv"),r("OutboundLink")],1)])]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("@article{sanh2019distilbert,\n  title={DistilBERT, a distilled version of BERT: smaller, faster, cheaper and lighter},\n  author={Sanh, Victor and Debut, Lysandre and Chaumond, Julien and Wolf, Thomas},\n  journal={arXiv preprint arXiv:1910.01108},\n  year={2019}\n}\n")])])]),r("h2",{attrs:{id:"_2-15-t5"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-15-t5"}},[a._v("#")]),a._v(" 2.15. T5")]),a._v(" "),r("p",[r("em",[r("strong",[a._v("T5")])])]),a._v(" "),r("p",[r("strong",[a._v("paper")]),a._v(": Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer")]),a._v(" "),r("ul",[r("li",[a._v("Author: Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu")]),a._v(" "),r("li",[a._v("Paper Link: "),r("a",{attrs:{href:"https://arxiv.org/abs/1910.10683",target:"_blank",rel:"noopener noreferrer"}},[a._v("arXiv"),r("OutboundLink")],1)]),a._v(" "),r("li",[a._v("Paper Download: "),r("a",{attrs:{href:"https://arxiv.org/pdf/1910.10683",target:"_blank",rel:"noopener noreferrer"}},[a._v("arXiv"),r("OutboundLink")],1)])]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("@article{raffel2019exploring,\n  title={Exploring the limits of transfer learning with a unified text-to-text transformer},\n  author={Raffel, Colin and Shazeer, Noam and Roberts, Adam and Lee, Katherine and Narang, Sharan and Matena, Michael and Zhou, Yanqi and Li, Wei and Liu, Peter J},\n  journal={arXiv preprint arXiv:1910.10683},\n  year={2019}\n}\n")])])]),r("h2",{attrs:{id:"_2-16-bart"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-16-bart"}},[a._v("#")]),a._v(" 2.16. BART")]),a._v(" "),r("p",[r("em",[r("strong",[a._v("BART")])])]),a._v(" "),r("p",[r("strong",[a._v("paper")]),a._v(": BART: Denoising Sequence-to-Sequence Pre-training for Natural Language Generation, Translation, and Comprehension")]),a._v(" "),r("ul",[r("li",[a._v("Author: Mike Lewis, Yinhan Liu, Naman Goyal, Marjan Ghazvininejad, Abdelrahman Mohamed, Omer Levy, Ves Stoyanov, Luke Zettlemoyer")]),a._v(" "),r("li",[a._v("Paper Link: "),r("a",{attrs:{href:"https://arxiv.org/abs/1910.13461",target:"_blank",rel:"noopener noreferrer"}},[a._v("arXiv"),r("OutboundLink")],1)]),a._v(" "),r("li",[a._v("Paper Download: "),r("a",{attrs:{href:"https://arxiv.org/pdf/1910.13461",target:"_blank",rel:"noopener noreferrer"}},[a._v("arXiv"),r("OutboundLink")],1)])]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("@article{lewis2019bart,\n  title={Bart: Denoising sequence-to-sequence pre-training for natural language generation, translation, and comprehension},\n  author={Lewis, Mike and Liu, Yinhan and Goyal, Naman and Ghazvininejad, Marjan and Mohamed, Abdelrahman and Levy, Omer and Stoyanov, Ves and Zettlemoyer, Luke},\n  journal={arXiv preprint arXiv:1910.13461},\n  year={2019}\n}\n")])])]),r("h2",{attrs:{id:"_2-17-dialogpt"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-17-dialogpt"}},[a._v("#")]),a._v(" 2.17. DialoGPT")]),a._v(" "),r("p",[r("em",[r("strong",[a._v("DialoGPT")])])]),a._v(" "),r("p",[r("strong",[a._v("paper")]),a._v(": DialoGPT: Large-Scale Generative Pre-training for Conversational Response Generation")]),a._v(" "),r("ul",[r("li",[a._v("Author: Yizhe Zhang, Siqi Sun, Michel Galley, Yen-Chun Chen, Chris Brockett, Xiang Gao, Jianfeng Gao, Jingjing Liu, Bill Dolan")]),a._v(" "),r("li",[a._v("Paper Link: "),r("a",{attrs:{href:"https://arxiv.org/abs/1911.00536",target:"_blank",rel:"noopener noreferrer"}},[a._v("arXiv"),r("OutboundLink")],1)]),a._v(" "),r("li",[a._v("Paper Download: "),r("a",{attrs:{href:"https://arxiv.org/pdf/1911.00536",target:"_blank",rel:"noopener noreferrer"}},[a._v("arXiv"),r("OutboundLink")],1)])]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("@article{zhang2019dialogpt,\n  title={Dialogpt: Large-scale generative pre-training for conversational response generation},\n  author={Zhang, Yizhe and Sun, Siqi and Galley, Michel and Chen, Yen-Chun and Brockett, Chris and Gao, Xiang and Gao, Jianfeng and Liu, Jingjing and Dolan, Bill},\n  journal={arXiv preprint arXiv:1911.00536},\n  year={2019}\n}\n")])])]),r("h2",{attrs:{id:"_2-18-xlm-roberta"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-18-xlm-roberta"}},[a._v("#")]),a._v(" 2.18. XLM-RoBERTa")]),a._v(" "),r("p",[r("em",[r("strong",[a._v("XLM-RoBERTa")])])]),a._v(" "),r("p",[r("strong",[a._v("paper")]),a._v(": Unsupervised Cross-lingual Representation Learning at Scale")]),a._v(" "),r("ul",[r("li",[a._v("Author: Alexis Conneau, Kartikay Khandelwal, Naman Goyal, Vishrav Chaudhary, Guillaume Wenzek, Francisco Guzmán, Edouard Grave, Myle Ott, Luke Zettlemoyer, Veselin Stoyanov")]),a._v(" "),r("li",[a._v("Paper Link: "),r("a",{attrs:{href:"https://arxiv.org/abs/1911.02116",target:"_blank",rel:"noopener noreferrer"}},[a._v("arXiv"),r("OutboundLink")],1)]),a._v(" "),r("li",[a._v("Paper Download: "),r("a",{attrs:{href:"https://arxiv.org/pdf/1911.02116",target:"_blank",rel:"noopener noreferrer"}},[a._v("arXiv"),r("OutboundLink")],1)])]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("@article{conneau2019unsupervised,\n  title={Unsupervised cross-lingual representation learning at scale},\n  author={Conneau, Alexis and Khandelwal, Kartikay and Goyal, Naman and Chaudhary, Vishrav and Wenzek, Guillaume and Guzm{\\'a}n, Francisco and Grave, Edouard and Ott, Myle and Zettlemoyer, Luke and Stoyanov, Veselin},\n  journal={arXiv preprint arXiv:1911.02116},\n  year={2019}\n}\n")])])]),r("h2",{attrs:{id:"_2-19-camembert"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-19-camembert"}},[a._v("#")]),a._v(" 2.19. CamemBERT")]),a._v(" "),r("p",[r("em",[r("strong",[a._v("CamemBERT")])])]),a._v(" "),r("p",[r("strong",[a._v("paper")]),a._v(": CamemBERT: a Tasty French Language Model")]),a._v(" "),r("ul",[r("li",[a._v("Author: Louis Martin, Benjamin Muller, Pedro Javier Ortiz Suárez, Yoann Dupont, Laurent Romary, Éric Villemonte de la Clergerie, Djamé Seddah, Benoît Sagot")]),a._v(" "),r("li",[a._v("Paper Link: "),r("a",{attrs:{href:"https://arxiv.org/abs/1911.03894",target:"_blank",rel:"noopener noreferrer"}},[a._v("arXiv"),r("OutboundLink")],1)]),a._v(" "),r("li",[a._v("Paper Download: "),r("a",{attrs:{href:"https://arxiv.org/pdf/1911.03894",target:"_blank",rel:"noopener noreferrer"}},[a._v("arXiv"),r("OutboundLink")],1)])]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("@article{martin2019camembert,\n  title={Camembert: a tasty french language model},\n  author={Martin, Louis and Muller, Benjamin and Su{\\'a}rez, Pedro Javier Ortiz and Dupont, Yoann and Romary, Laurent and de la Clergerie, {\\'E}ric Villemonte and Seddah, Djam{\\'e} and Sagot, Beno{\\^\\i}t},\n  journal={arXiv preprint arXiv:1911.03894},\n  year={2019}\n}\n")])])]),r("h2",{attrs:{id:"_2-20-flaubert"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-20-flaubert"}},[a._v("#")]),a._v(" 2.20. FlauBERT")]),a._v(" "),r("p",[r("em",[r("strong",[a._v("FlauBERT")])])]),a._v(" "),r("p",[r("strong",[a._v("paper")]),a._v(": FlauBERT: Unsupervised Language Model Pre-training for French")]),a._v(" "),r("ul",[r("li",[a._v("Author: Hang Le, Loïc Vial, Jibril Frej, Vincent Segonne, Maximin Coavoux, Benjamin Lecouteux, Alexandre Allauzen, Benoît Crabbé, Laurent Besacier, Didier Schwab")]),a._v(" "),r("li",[a._v("Paper Link: "),r("a",{attrs:{href:"https://arxiv.org/abs/1912.05372",target:"_blank",rel:"noopener noreferrer"}},[a._v("arXiv"),r("OutboundLink")],1)]),a._v(" "),r("li",[a._v("Paper Download: "),r("a",{attrs:{href:"https://arxiv.org/pdf/1912.05372",target:"_blank",rel:"noopener noreferrer"}},[a._v("arXiv"),r("OutboundLink")],1)])]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("@article{le2019flaubert,\n  title={Flaubert: Unsupervised language model pre-training for french},\n  author={Le, Hang and Vial, Lo{\\\"\\i}c and Frej, Jibril and Segonne, Vincent and Coavoux, Maximin and Lecouteux, Benjamin and Allauzen, Alexandre and Crabb{\\'e}, Beno{\\^\\i}t and Besacier, Laurent and Schwab, Didier},\n  journal={arXiv preprint arXiv:1912.05372},\n  year={2019}\n}\n")])])]),r("h2",{attrs:{id:"_2-21-electra"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-21-electra"}},[a._v("#")]),a._v(" 2.21. ELECTRA")]),a._v(" "),r("p",[r("em",[r("strong",[a._v("ELECTRA")])])]),a._v(" "),r("p",[r("strong",[a._v("paper")]),a._v(": ELECTRA: Pre-training Text Encoders as Discriminators Rather Than Generators")]),a._v(" "),r("ul",[r("li",[a._v("Author: Kevin Clark, Minh-Thang Luong, Quoc V. Le, Christopher D. Manning")]),a._v(" "),r("li",[a._v("Paper Link: "),r("a",{attrs:{href:"https://arxiv.org/abs/2003.10555",target:"_blank",rel:"noopener noreferrer"}},[a._v("arXiv"),r("OutboundLink")],1)]),a._v(" "),r("li",[a._v("Paper Download: "),r("a",{attrs:{href:"https://arxiv.org/pdf/2003.10555",target:"_blank",rel:"noopener noreferrer"}},[a._v("arXiv"),r("OutboundLink")],1)])]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("@article{clark2020electra,\n  title={Electra: Pre-training text encoders as discriminators rather than generators},\n  author={Clark, Kevin and Luong, Minh-Thang and Le, Quoc V and Manning, Christopher D},\n  journal={arXiv preprint arXiv:2003.10555},\n  year={2020}\n}\n")])])])])}),[],!1,null,null,null);e.default=t.exports}}]);