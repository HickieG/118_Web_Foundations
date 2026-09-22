debugging week!

I decided not to bug up my webpage, so instead I just used a simple example similar to the one we went over in class with some tweaks. 

Troubleshooting process:
When first looking at my bugged webpage, it is obvious that one bug is the stylesheet is not linked properly! The simple fix is to either change the filename to whatever it is called in the html, or more likely change the name in the html to the proper filename (style.css -> styles.css)

Even before the styles worked properly, there was still a clickable button. However, clicking it did not change anything, and still won't after updating the stylesheet to reflect on the website. The reasoning for this one doesn't come as clearly as the first, but the bug you will likely come across is that the javascript filename is also not spelled correctly. It is missing an underscore (debugfile.js -> debug_file.js). Even fixing this doesn't fix the button though! Time to move to the javascript file.

In the debug_file.js, there isn't a lot to look at, so the final bug is pretty easy to spot. In the variable for "statusMessage", the querySelector is not properly setup to the html file's status message because it is spelled "statusMsg" instead of "statusMessage". By inputting the proper name and saving, the website's button miraculously works!