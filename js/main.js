var quote = [
   {
      line: '“Always forgive your enemies; nothing annoys them so much.”',
      author: '― Oscar Wilde'
   },
   {
      line: '“It is better to be hated for what you are than to be loved for what you are not.”',
      author: '― Andre Gide, Autumn Leaves'
   },
   {
      line: '“I have not failed. I have just found 10,000 ways that will not work.”',
      author: '― Thomas A. Edison'
   },
   {
      line: '“The man who does not read has no advantage over the man who cannot read.”',
      author: '― Mark Twain'
   },
   {
      line: '“It is never too late to be what you might have been.”',
      author: '― George Eliot'
   }
];
var previousRandom;
var quoteGenerator = function () {
   var quoteRandom = Math.floor(Math.random() * quote.length);
   if (previousRandom == quoteRandom) {
      quoteRandom = (quoteRandom + 1) % 5
   }
   previousRandom = quoteRandom;
   document.getElementById('quote').innerHTML = (quote[Math.floor(quoteRandom)].line)
   document.getElementById('author').innerHTML = (quote[Math.floor(quoteRandom)].author)
};
