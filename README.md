# UILOG
A minimal JS/CSS framework for webgame developers to display dynamic text content.
---
---
## Features:
- Control of message display through a single javascript class designated `UILOG`. 
- Dynamically generated HTML through Javascript methods with automatic styling, meaning you can focus more on creating content and focus less on how to render it.
- Automatic, toggle-able timestamping of displayed messages.
- Built-in cycling of log messages to keep your UI from getting cluttered.
- Meaningfully named methods that uniformly take string parameters, such as `UILOG.warn(warning)` or `UILOG.inform(info)`.
- No external dependencies and no JSX (<i>though there might be an alternative version using JSX in the far future</i>).
---
## How to incorporate UILOG in your project

1. Fork this repository or download the folder titled `uilog`.
2. In the head element of the HTML document where you're using UILOG, include the following tags:  
    ``` HTML
    <link rel="stylesheet" href="uilog/uilog_stylesheet.css">
    <script type="text/javascript" src="uilog/uilog.js"></script>
    ```
3. In your javascript, declare a new UILOG object with a unique ID.
   ```Javascript
   const myUILOG = new UILOG('my-UILOG-id')
4. Anywhere in the body element of your HTML document, include an element with that id that will be targeted by the UILOG object's methods.

    ``` HTML
    <div id="my-UILOG-id"></div>
    ```

5. You're ready to render information to players using JS. Below is just one example of a use case:
   ``` Javascript
   const myUILOG = new UILOG('my-UILOG-id');
   
   const PLAYER = {
    money: 0,
    }
    
    const UNAFFORDABLE_SHOP_ITEM = {
        name: `Serj Tankian's Grand Piano`,
        cost: 1e30 // 1 decillion
    }
    
    PLAYER.buy = function(item) {
        if (PLAYER.money < item.cost * amount) {
            myUILOG.warn(
                `You don't have enough money to purchase ${amount} ${item.name}!`
            );
        } else {
            myUILOG.update(
                `You bought ${amount} ${item.name} for ${item.cost * amount} coins.`
            );
            myUILOG.inform(
                `You have ${PLAYER.money} coins left.`
            );
        }
    };
    
    PLAYER.buy(UNAFFORDABLE_SHOP_ITEM, 2)
   ```
---
## TO DO:

1. ~~Wrap the UILOG object in a JS class so multiple instances can be used in a single HTML document.~~
2. ~~Allow users to customize the display cap on messages and the HTML element id the constructor method of the above-mentioned class.~~
3. Add methods for adding and/or customizing styles, including the extension of a UILOG instance with custom methods.
4. ~~Add a method to toggle timestamp display.~~
5. ~~Add stack-based storage of messages and methods for retrieval of historical messages,~~ ***serialized as JSON***.