---
layout: archive
title: "Contact"
permalink: /contact/
author_profile: true
# redirect_from:
#   - /contacts
#   - /contacts/
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

<!-- "*If at first the idea is not absurd, then there is no hope for it.*" -- Albert Einstein -->

{% include base_path %}

---

- Address
  - Department of Computer Science, Chow Yei Ching Building,
  - The University of Hong Kong, Pok Fu Lam Road,
  - Central and Western District, Hong Kong
  <!-- - Department of Computer Science, Rm 301, Chow Yei Ching Building, The University of Hong Kong, Pokfulam, Hong Kong -->
  <!-- - Hong Kong S.A.R., P.R. China -->

---

- E-mail
  1. [Gmail](mailto:seckexyin@gmail.com) (preferred): seckexyin [at] gmail [dot] com
  2. [HKU mail](mailto:yuweiyin@hku.hk): yuweiyin [at] hku [dot] hk
  3. [HKU CS mail](mailto:ywyin@cs.hku.hk): ywyin [at] cs [dot] hku [dot] hk

---

- Website & Social Media
  - GitHub: [@YuweiYin](https://github.com/YuweiYin)
  - Twitter: [@SeckexYIN](https://twitter.com/SeckexYIN)
  - LinkedIn: [@yuwei-yin](https://www.linkedin.com/in/yuwei-yin/)
  - LeetCode: [@YuweiYin](https://leetcode.com/YuweiYin/)

---

- Instant Messaging
  - WeChat: -Sic-Parvis-Magna-
  - WhatsApp & Skype (Mobile Phone): Please run the following Python3 program with the correct key.

```python
#!/usr/bin/env python3
# -*- coding:utf-8 -*-

# pip install pycrypto
from Crypto.Cipher import AES
from binascii import a2b_hex

key = "YuweiYin" + "yyyymmdd"  # TODO: please replace "yyyymmdd" with my birthday
msg = "5d7fe87888fda52b5aa2193d587419147c70c219b082fefa3971b0ed768b990c"  # encrypted phone number
aes = AES.new(key.encode(), AES.MODE_CBC, b'0000000000000000')
print(aes.decrypt(a2b_hex(msg.encode())).rstrip(b'\0').decode())
```

---
