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

{% include base_path %}

---

- **Office Address**
  - HW335A, 3/F, Haking Wong Building, The University of Hong Kong, Pokfulam Road, Hong Kong

- **Email Address**
  - [Gmail](mailto:seckexyin@gmail.com): seckexyin [at] gmail [dot] com
  - [HKU mail](mailto:yuweiyin@hku.hk): yuweiyin [at] hku [dot] hk
  - [HKUCS mail](mailto:ywyin@cs.hku.hk): ywyin [at] cs [dot] hku [dot] hk

- **Homepage**
  - Academic: [yuweiyin.com](https://www.yuweiyin.com/)
  - Misc: [yuweiyin.github.io](https://yuweiyin.github.io/)

- **Social Media**
  - GitHub: `@YuweiYin` [github.com/YuweiYin](https://github.com/YuweiYin)
  - Twitter: `@SeckexYIN` [twitter.com/SeckexYIN](https://twitter.com/SeckexYIN)
  - LinkedIn: `@yuwei-yin` [linkedin.com/in/yuwei-yin/](https://www.linkedin.com/in/yuwei-yin/)
  - LeetCode: `@YuweiYin` [leetcode.com/YuweiYin/](https://leetcode.com/YuweiYin/)

- **Instant Messaging**
  - WeChat ID: `SeckexYin`
  - WhatsApp (Mobile Phone): Please run the following Python3 program with the correct key.

```python
#!/usr/bin/env python3
# -*- coding:utf-8 -*-

# pip install pycrypto
from Crypto.Cipher import AES
from binascii import a2b_hex

key = "YuweiYin" + "yyyymmdd"  # TODO: replace "yyyymmdd" with my birthday
msg = "c373dd8641878b1fc4938a95b7e8165d"  # encrypted phone number
aes = AES.new(key.encode(), AES.MODE_CBC, b'0000000000000000')
print(aes.decrypt(a2b_hex(msg.encode())).rstrip(b'\0').decode())
```

---
