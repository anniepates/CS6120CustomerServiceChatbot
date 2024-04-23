# Customer Service Chatbot & Evaluation
Final project for CS6120 at Northeastern University. 

In this project we are fine-tuning FLAN-T5 to serve as a customer service chatbot and proposing a novel metric for evaluating chatbot performance called the RAJ Score.

We train our sentiment analysis model with user ratings and user reviews from amazon_reviews_us_Digital_Software_v1_00.tsv.
We train our FLAN-T5 chatbot with QA300.txt.
We run sentiment analysis and calculate RAJ score on QA10_orig_model.txt and QA10_my_model.txt.

flan_t5_model.ipynb contains our chatbot training code
sentiment_analysis_raj_score.ipynb contains our sentiment analysis training code as well as RAJ score calculation code

Team members: Peng Gu, Mingchen Li, Annie Pates, Bhavna Rajan Nair
