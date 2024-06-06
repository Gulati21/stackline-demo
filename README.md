Built with npm create-react-app to start with. Additional modifications then made to make it happy and healthy.

About The Project
Ideally, this would've had more time and love dedicated to it - my parents caught covid yesterday (June 5th) so I spent the day with them, and then produced this demo this morning.
The table component was intended to be custom, but ended up also being MaterialUI, so I could at least hand in a finished product
Everything else is a mix of my own code and the existing code from <https://www.npmjs.com/package/cra-template-complete-web-app> - Create React App is, as a whole, deprecated in favor of Vite, but for the purposes of a short demo this was much easier to get started with.
From there, modifications were made to fit the requirements - updating the CSS, adding in an appropriate Type, fixing the store + reducer and trimming a fair bit of code, and then rendering and testing.
Unfortunately, it means that some requirements weren't fully completed - most importantly the part where the webpage would be viewable via ghubpages, or that either the graph or the table component should be custom, but given the time constraints I think I still produced a reasonable approximation of the wireframe
Of note is that the graph <https://mui.com/x/react-charts/lines/> for some reason renders quite poorly on my Desktop, and I can't seem to identify why - hovering over the actual axis steps shows the correct data, but the render is stuck in the top left corner. Wish I had time to fix that.