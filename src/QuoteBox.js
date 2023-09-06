import React from "react";
const quoteData = [
    { text: `“The purpose of our lives is to be happy.”`, author: "Dalai Lama" },
    { text: `“Life is what happens when you’re busy making other plans.”`, author: "John Lennon" },
    { text: `“Get busy living or get busy dying.”`, author: "Stephen King" },
    { text: `“You only live once, but if you do it right, once is enough.”`, author: "Mae West" },
    { text: ` “Many of life’s failures are people who did not realize how close they were to success when they gave up.”`, author: "Thomas A. Edison" },
    {text:`"It’s your place in the world, it’s your life. Go on and do all you can with it, and make it the life you want to live."`, author:"Mae Jemison"},
    {text:`"You may be disappointed if you fail, but you are doomed if you don’t try."` ,author:'Beverly Sills'},
    {text:`"Remember no one can make you feel inferior without your consent."` ,author:'Eleanor Roosevelt'},
    {text:`"Life is what we make it, always has been, always will be."`, author:'Grandma Moses'},
    {text:`"The question isn’t who is going to let me; it’s who is going to stop me."` ,author:'Ayn Rand'},
    {text:`"When everything seems to be going against you, remember that the airplane takes off against the wind, not with it."` ,author:'Henry Ford'},
    {text:`"It’s not the years in your life that count. It’s the life in your years."` ,author:'Abraham Lincoln'},
    {text:`"Change your thoughts and you change your world."` ,author:'Norman Vincent Peale'},
    {text:`"Either write something worth reading or do something worth writing."` ,author:'Benjamin Franklin'},
    {text:` "Nothing is impossible, the word itself says, “I’m possible!”"` ,author:'Audrey Hepburn'},
    {text:`"Limitations live only in our minds.  But if we use our imaginations, our possibilities become limitless."` ,author:'Jamie Paolinetti'},
    {text:`"You take your life in your own hands, and what happens? A terrible thing, no one to blame."` ,author:'Erica Jong'},
    {text:`"What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do."` ,author:'Bob Dylan'},
    {text:`"I didn’t fail the test. I just found 100 ways to do it wrong."` ,author:'Benjamin Franklin'},
    {text:`"In order to succeed, your desire for success should be greater than your fear of failure."` ,author:'Bill Cosby'},
    {text:`"A person who never made a mistake never tried anything new."` ,author:'Albert Einstein'},
    {text:`"The person who says it cannot be done should not interrupt the person who is doing it."` ,author:'Chinese Proverb'},
    {text:`"There are no traffic jams along the extra mile."` ,author:'Roger Staubach'},
    {text:`["It is never too late to be what you might have been."` ,author:'George Eliot'},
    {text:`"You become what you believe." ` ,author:'"Oprah Winfrey"'},
    {text:`"I would rather die of passion than of boredom."` ,author:'Vincent van Gogh'},
    {text:`"It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings."` ,author:'Ann Landers'},
    
   
  {text:`The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at."` ,author:'Jesse Owens'},
    {text:`"It does not matter how slowly you go as long as you do not stop."`, author:'Confucius'},
    
  ];
  
  const QuoteBox=({quote,handleNewquote})=>
  
   { return(
      <div id="quote-box">
        <p id="text">{quote.text}</p>
        <h2 id="author">{quote.author}</h2>
        <div className="action">
        <button id="new-quote" className="button" onClick={handleNewquote}>New Quote</button>
        <a href="twitter.com/intent/tweet" id="tweet-quote" target="_blank">tweet</a>
  
        </div>
        
        </div>);
   }
  export default QuoteBox;
  