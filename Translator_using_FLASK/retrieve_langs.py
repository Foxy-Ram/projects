from deep_translator import GoogleTranslator


lang = [26, 27, 33, 37, 38, 45, 53, 54, 56, 61, 67, 109, 114, 116 ]
lang_l = []

t = GoogleTranslator()
idx = 0
for i in t.get_supported_languages(as_dict=True).items():
    print(i," -> ",idx)
    if idx in lang:
        lang_l.append(i)
    idx -=-1
    
print(lang_l)
