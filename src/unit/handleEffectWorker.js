
onmessage = function(e) {
    console.log(e.data)
    let {imgData, effect} = e.data;
    let imgDataArray = imgData.data || [];
    let numPixels = imgDataArray.length/4;

    function GrayFn(Red, Green, Blue) {
        return (Red * 0.3 + Green * 0.59 + Blue * 0.11);
    }

    switch(effect){
        case 'GRAY':
                for (let i = 0, Red, Green, Blue, Gray; i < numPixels; i++) {
                    Red = imgDataArray[i * 4];
                    Green = imgDataArray[i * 4 +1];
                    Blue = imgDataArray[i * 4 + 2];
                    Gray = GrayFn(Red, Green, Blue);
                    imgDataArray[i * 4] = Gray;
                    imgDataArray[i * 4 +1] = Gray;
                    imgDataArray[i * 4 + 2] = Gray;
                }
                break;
        default:
                break;
    }

    postMessage(imgData);
}