# UILOG
A minimal JS/CSS framework for webgame developers to display text content.
---
---
## Features
- Control of message display through a single javascript object designated `UILOG`. All HTML is dynamically generated by its methods and styled automatically, meaning you can focus on content, not how to render it.
- Automatic timestamping of displayed messages.
- Built-in cycling of log messages to keep your UI neat.
- Meaningfully named methods that uniformly take string parameters, such as `UILOG.warn(warning)` or `UILOG.inform(information)`.
---
## How to incorporate UILOG in your project

1. Fork this repository or download the folder titled `uilog`.
2. In the head element of the HTML document where you're using UILOG, include the following tags:  
    ``` HTML
    <link rel="stylesheet" href="uilog/uilog_stylesheet.css">
    <script type="text/javascript" src="uilog/uilog.js"></script>
    ```
3. Anywhere in the body element of your HTML document, include an element with id `uilog` to serve as the container that your javascript can target to render messages.

    ``` HTML
    <div id="uilog"></div>
    ```

4. Render information to players using JS. For example:
   ``` Javascript
    PLAYER.buy = function(item, amount) {
        if (PLAYER.money < item.cost * amount) {
            UILOG.warn(
                `You don't have enough money to purchase ${amount} ${item.name}!`
            );
        } else {
            UILOG.update(
                `You bought ${amount} ${item.name} for ${item.cost * amount} coins.`
            );
            UILOG.inform(
                `You have ${PLAYER.money} coins left.`
            );
        }
    };
   ```
---
## TO DO:

1. Wrap the UILOG object in a JS class so multiple instances can be used in a single HTML document.
2. Allow users to customize the display cap on messages and the HTML element id the constructor method of the above-mentioned class.
3. Add methods for adding and/or customizing styles, including the extension of a UILOG instance with custom methods.
4. Add a method to toggle timestamp display.
5. Add stack-based storage of messages and methods for retrieval of historical messages, serialized as JSON.



