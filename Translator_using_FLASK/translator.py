from flask import Flask, render_template, request,redirect, url_for
from deep_translator import GoogleTranslator

app = Flask(__name__)

lang_dict = dict([('Auto','auto'),('dutch', 'nl'), ('english', 'en'), ('french', 'fr'), ('german', 'de'), ('greek', 'el'), \
                  ('hindi', 'hi'), ('italian', 'it'), ('japanese', 'ja'), ('kannada', 'kn'), ('korean', 'ko'), \
                  ('latin', 'la'), ('spanish', 'es'), ('tamil', 'ta'), ('telugu', 'te')])

@app.route('/', methods=['POST','GET'])
def index():
    if request.method == 'POST':

        # Getting the data from the Html file
        text = request.form['user_text']
        from_lang = str(request.form['from_lang'])
        to_lang = str(request.form['to_lang'])

        # Importing model from deef_translator
        translator = GoogleTranslator(source=lang_dict.get(from_lang),target=lang_dict.get(to_lang))
        translated_text = translator.translate(str(text))

        return render_template("index.html",before_translate = text ,translated_text=translated_text,text=text,sam=from_lang)
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True)
    
