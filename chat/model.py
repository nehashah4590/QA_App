from transformers import GPT2Tokenizer, GPT2LMHeadModel
import torch

tokenizer = GPT2Tokenizer.from_pretrained('gpt2')
model = GPT2LMHeadModel.from_pretrained('qamodel')

# def generate_answer(question, max_length=512):
#
#     # Encode the question to tensor of integers using the tokenizer
#     input_ids = tokenizer.encode(question, return_tensors='pt')
#
#     # Generate a sequence of tokens in response to the input question
#     output = model.generate(input_ids, max_length=max_length, num_return_sequences=1, pad_token_id=tokenizer.eos_token_id)
#
#     # Decode the generated ids to a string
#     answer = tokenizer.decode(output[0], skip_special_tokens=True,temperature=0.7,top_p=0.9,repetition_penalty=1.2,do_sample=False,early_stopping=True)
#     return answer

def generate_answer(question, max_length=256):

    # Encode the question to tensor of integers using the tokenizer
    input_ids = tokenizer.encode(question, return_tensors='pt')

    # Generate a sequence of tokens in response to the input question
    output = model.generate(input_ids, max_length=max_length, num_return_sequences=1, pad_token_id=tokenizer.eos_token_id)

    # Decode the generated ids to a string
    answer = tokenizer.decode(output[0], skip_special_tokens=True,temperature=0,top_p=0.85,top_k=20,repetition_penalty=1.5,do_sample=False,early_stopping=True,no_repeat_ngram_size=4)
    return answer
