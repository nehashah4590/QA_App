"use client"
import React from 'react';
import { motion } from 'framer-motion';

const Research = () => {
    return (
        <div className='h-[80vh] w-full px-[10vw] flex flex-col justify-center'>
            <motion.h1
          initial={{ opacity: 0, x: -200 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
             className='text-3xl font-extrabold text-center pb-2 text-[#fcce1c] tracking-[1px] '>Research</motion.h1>
            <motion.h2
             initial={{ opacity: 0, x: 200 }}
             transition={{ duration: 1 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className='font-bold text-lg text-[#da123c] py-2 '>How it started?</motion.h2>
            <div className=' flex justify-center items-center gap-12 text-gray-500 text-sm text-justify'>
             <div>
             <motion.p 
              initial={{ opacity: 0, y: 200 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
             className='py-2'>Nepal is a famous destination for most of the foreign tourists to explore in nature and
                    delve into the depths of nature. Nepal has very diverse landscapes, Tall mountains,
                    huge potential of adventure sports like rafting, kayaking, cannoying etc., diverse culture and traditions, 
                    Festivals and many more things in which tourists can participate, enjoy, spend quality time and enjoy their vacation.
                    The tourism industry of Nepal at present generates <span className='font-bold '>USD $385.11 million per year</span> and is expected to reach
                    USD $458.60 million in 2024 A.D. and with the growth rate of (CAGR 2024-2028) 7.15% it is expected to reach USD $604.40 million by 2028.
                    Eventhough Nepal posing so much of Potential for tourism the information related to the tourist destinations of Nepal are not
                    well organize. An individual has to go through a lot of web sites to
                    gain proper insights of the place they want to visit in Nepal. To bridge this gap our enthusistic team has developed a solution.
                    </motion.p >

                <motion.p
                initial={{ opacity: 0, y: 200 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} className='py-2'>
                    Here, we present<span className='font-bold ' > GPTNepal </span>which is QA webapp for tourists who want to visit Nepal and are looking for insights for the places
                    they want to visit in Nepal. They can gain information for the places they want to visit at one location i.e. at our webapp.
                    We have built our webapp using the latest cutting edge technology called <span className='font-bold'> transformers </span> which is primarily built for NLP
                    tasks. We have used the <span className='font-bold  ' > pre-trained GPT-2 model of Hugging Face </span>. GPT-2 is a large transformer-based language model
                    with 1.5 billion parameters, trained on a dataset of 8 million web pages. GPT-2 is trained with a simple objective: predict
                    the next word, given all of the previous words within some text. The diversity of the dataset causes this simple goal to
                    contain naturally occurring demonstrations of many tasks across diverse domains. GPT-2 is a direct scale-up of GPT, with
                    more than 10X the parameters and trained on more than 10X the amount of data.
                </motion.p>
            </div>
             </div>

        </div>
    )
}

export default Research
