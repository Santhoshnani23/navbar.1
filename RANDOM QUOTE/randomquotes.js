quotes=[ {
        author:' Steve Jobs',
        quote:'The only way to do great work is to love what you do'

    },
    {
        author:'Robert Frost',
        quote:'"In three words I can sum up everything Ive learned about life: it goes on'
    },
    {
        author:'Winston Churchill',
        quote:'Success is not final, failure is not fatal: It is the courage to continue that counts.'
    },
    {
        author:'Peter Drucker',
        quote:'The best way to predict the future is to create it.'
    },
    {
        author:'John Lennon',
        quote:'Life is what happens when youre busy making other plans.'
    },
    {
        author:' Franklin D. Roosevelt',
        quote:'The only thing we have to fear is fear itself.'
    },
    {
        author:' Ralph Waldo Emerson',
        quote:'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.'
    },
    {
        author:'Albert Einstein',
        quote:'Two things are infinite: the universe and human stupidity; and Im not sure about the universe.'
    },
    {
        author:'Nelson Mandela',
        quote:'The greatest glory in living lies not in never falling, but in rising every time we fall.'
    },
    {
        author:'Wayne Gretzky',
        quote:'You miss 100% of the shots you dont take.'
    },
    {
        author:' Heraclitus',
        quote:'The only constant in life is change'
    },
     
    {
        author:'Chinese Proverb',
        quote:'The best time to plant a tree was 20 years ago. The second best time is now'
    },
    {
        author:'Muhammad Ali',
        quote:'Dont count the days; make the days count.'
    },
    {
        author:' Franklin D. Roosevelt',
        quote:'The only limit to our realization of tomorrow will be our doubts of today.'
    },
    {
        author:'Dalai Lama',
        quote:'Happiness is not something ready-made. It comes from your own actions'
    },
    {
        author:'Chris Cornell',
        quote:'To be yourself is all that you can do.'
    },
    {
        author:' Lao Tzu',
        quote:'The journey of a thousand miles begins with one step.'
    },
    {
        author:'Martin Luther King Jr.',
        quote:'In the end, we will remember not the words of our enemies, but the silence of our friends.'
    },
    {
        author:'Confucius',
        quote:'Life is really simple, but we insist on making it complicated.'
    },
    {
        author:'John Lennon',
        quote:'Life is what happens when youre busy making other plans'
    }
]

let quotation=document.getElementById('display')
let authorname1=document.getElementById('authorname')
function random(){
    let randomno=Math.floor(Math.random()*quotes.length)
    quotation.innerText=quotes[randomno].quote
    authorname1.innerText="--" + quotes[randomno].author


}
