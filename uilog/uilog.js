class UILOG {
    
    constructor(elementId, maxRenderableChildren = 4, maxHistory = 255, useTimestamps = true) {
        this.elementId = elementId;
        this.maxRenderableChildren = maxRenderableChildren;
        this.maxHistory = maxHistory;
        this.useTimestamps = useTimestamps;
        this.messageHistory = [];
    };
    
    toggleTimestamps(){
        this.useTimestamps = ~this.useTimestamps;
        return this.useTimestamps;
    };
    
    getTimestamp(){
        
        let now = new Date();
        
        // If timestamps are toggled off, HTML content should be an empty string, otherwise wrap the timestamp in a <div> element:
        let renderContent = this.useTimestamps;
        
        // return an object with the raw timestamp content as well as what will be rendered.
        return (
            {
                rawTimestamp: now, 
                renderContent: renderContent
            }
        );
    };
    
    warn(warningMessage) {
        let ui = document.getElementById(this.elementId);
        let timestamp = this.getTimeStamp();
        ui.innerHTML += `<div class="uilogwarning">${timestamp.renderContent ? generateTimestampHTML(timestamp.rawTimestamp) : ''} ${warningMessage}</div>`;
        this.addToMessageHistory(warningMessage, 'warning', timestamp);
        this.popOverflow();
    };
    
    inform(infoMessage) {
        let ui = document.getElementById(this.elementId);
        let timestamp = this.getTimeStamp();
        ui.innerHTML += `<div class="uiloginfo">${timestamp.renderContent ? generateTimestampHTML(timestamp.rawTimestamp) : ''} ${infoMessage}</div>`;
        this.addToMessageHistory(infoMessage, 'info', timestamp);
        this.popOverflow();
    };
    
    upgrade(upgradeMessage) {
        let ui = document.getElementById(this.elementId);
        let timestamp = this.getTimeStamp();
        ui.innerHTML += `<div class="uilogupgrade">${timestamp.renderContent ? generateTimestampHTML(timestamp.rawTimestamp) : ''} ${upgradeMessage}</div>`;
        this.addToMessageHistory(upgradeMessage, 'upgrade', timestamp);
        this.popOverflow();
    };
    
    addToMessageHistory(message, type, timestamp){
        this.messageHistory.push(
            {
                messageType: type,
                timestamp: timestamp,
                content: message,
            }
        );
        if (this.messageHistory.length > this.maxHistory){
            this.messageHistory.shift();
        }
    }
    
    popOverflow() {
        let ui = document.getElementById(this.elementId);
        if (ui.children.length > this.maxRenderableChildren) {
            ui.removeChild(ui.children[0]);
        }
    };
    
};

function generateTimestampHTML(timestamp){
    return `<div class="uilogtimestamp">${timestamp}:</div>`;
}