debugging week!

I decided not to bug up my webpage, so instead I just used a simple example similar to the one we went over in class with some tweaks. 

Troubleshooting process:
When first looking at my bugged webpage, it is obvious that one bug is the stylesheet is not linked properly! The simple fix is to either change the filename to whatever it is called in the html, or more likely change the name in the html to the proper filename (style.css -> styles.css)

Even before the styles worked properly, there was still a clickable button. However, clicking it did not change anything, and still won't after updating the stylesheet to reflect on the website. The reasoning for this one doesn't come as clearly as the first, but the bug you will likely come across is that the javascript filename is also not spelled correctly. It is missing an underscore (debugfile.js -> debug_file.js). Even fixing this doesn't fix the button though! Time to move to the javascript file.

For the final bug, there is a console.log test; I put within the js function "showStatus" a test to see whether or not the double click on the button is registered. At this point, once the js file is properly linked from the previous step, the console.log shows the function is being ran but not finishing its status message. We get a hint from the console: 

showStatus @ debug_file_fixedcopy.js:7
debug_file_fixedcopy.js:6 Within showStatus function:Button double-clicked
debug_file_fixedcopy.js:7 Uncaught TypeError: Cannot set properties of null (setting 'textContent')
    at HTMLButtonElement.showStatus (debug_file_fixedcopy.js:7:31)

The solution may not be immediately visible, but there aren't many places to look in our js file. In the variable for "statusMessage", the querySelector is not properly setup to the html file's status message because it is spelled "statusMsg" instead of "statusMessage". By inputting the proper name and saving, the website's button works!