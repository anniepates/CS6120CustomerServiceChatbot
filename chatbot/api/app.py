from flask import Flask, request
import time
from transformers import T5Tokenizer
from transformers import T5ForConditionalGeneration
from textwrap import fill

app = Flask(__name__)

model = T5ForConditionalGeneration.from_pretrained('./flan-t5-trained', use_safetensors=True)
tokenizer = T5Tokenizer.from_pretrained("google/flan-t5-large")


@app.route('/')
def hello_world():  # put application's code here
    return 'Hello World!'


@app.route('/time')
def get_current_time():
    # for testing
    return {'time': time.time()}


@app.post('/getResponse')
def get_response():
    input_text = request.json["input"]
    fulfilled_inputs = "Answer this comment: " + input_text
    model_input = tokenizer(fulfilled_inputs, return_tensors="pt")
    outputs = model.generate(**model_input)
    answer = tokenizer.decode(outputs[0], skip_special_tokens=True)

    # preview the response
    # print(fill(answer, width=100))

    return {'botMessage': answer}


if __name__ == '__main__':
    app.run(debug=True)
