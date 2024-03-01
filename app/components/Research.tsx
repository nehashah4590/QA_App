import React from 'react'

const Research = () => {
    return (
       <div className='bg-gray-200 h-[80vh] w-full'>
        <h1 className='text-3xl font-bold px-14 py-10'>Research</h1>
         <div className=' flex justify-center items-center gap-12'>   
            <div className='pl-14 text-sm '>
                <h2 className='font-bold text-lg text-gray-800'>How it started?</h2>
                <p>Nepal is a famous destination for most of the foreign tourists to explore in nature and
                    delve into the depths of nature. Nepal has very diverse landscapes, Tall mountains,
                    huge potential of adventure sports like rafting, kayaking, cannoying etc., diverse culture and traditions,
                    Festivals and many more things in which tourists can participate, enjoy, spend quality time and enjoy their vacation.
                    The tourism industry of Nepal at present generates USD $385.11 million per year and is expected to reach
                    USD $458.60 million in 2024 A.D. and with the growth rate of (CAGR 2024-2028) 7.15% it is expected to reach USD $604.40 million by 2028.
                    Eventhough Nepal posing so much of Potential for tourism the information related to the tourist destinations of Nepal are not
                    well organize. An individual has to go through a lot of web sites to
                    gain proper insights of the place they want to visit in Nepal. To bridge this gap our enthusistic team has developed a solution.</p>
            </div>
            <div>
                <p className='pr-14 text-sm '>
                Here, we present GPTNepal which is QA webapp for tourists who want to visit Nepal and are looking for insights for the places
                 they want to visit in Nepal. They can gain information for the places they want to visit at one location i.e. at our webapp.
                  We have built our webapp using the latest cutting edge technology called <span className='font-bold'>transformers</span> which is primarily built for NLP 
                  tasks. We have used the pre-trained GPT-2 model of Hugging Face. GPT-2 is a large transformer-based language model
                   with 1.5 billion parameters, trained on a dataset of 8 million web pages. GPT-2 is trained with a simple objective: predict
                    the next word, given all of the previous words within some text. The diversity of the dataset causes this simple goal to 
                    contain naturally occurring demonstrations of many tasks across diverse domains. GPT-2 is a direct scale-up of GPT, with 
                    more than 10X the parameters and trained on more than 10X the amount of data.
                </p>
            </div>

        </div>
       </div>
    )
}

export default Research
