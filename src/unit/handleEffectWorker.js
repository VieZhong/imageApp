
onmessage = function(e) {

    let {imgData, effect} = e.data;
    let imgDataArray = imgData.data || [];
    let numPixels = imgDataArray.length/4;

    function Gray_Fn(Red, Green, Blue) {
        return (Red * 0.3 + Green * 0.59 + Blue * 0.11);
    }

    function BLACK_WHITE_Fn(value) {
        return value > 100 ? 255 : 0;
    }

    function REVERSE_Fn(value) {
        return 255 - value;
    }

    function BROWN_Fn(Red, Green, Blue) {
        return [
            0.393 * Red + 0.769 * Green + 0.189 * Blue, 
            0.349 * Red + 0.686 * Green + 0.168 * Blue, 
            0.272 * Red + 0.534 * Green + 0.131 * Blue
        ];
    }

    function DARK_Fn(value) {
        return value * value / 255;
    }

    switch(effect){
        case 'GRAY':
                for (let i = 0, Red, Green, Blue, Gray; i < numPixels; i++) {
                    Red = imgDataArray[i * 4];
                    Green = imgDataArray[i * 4 + 1];
                    Blue = imgDataArray[i * 4 + 2];
                    Gray = Gray_Fn(Red, Green, Blue);
                    imgDataArray[i * 4] = Gray;
                    imgDataArray[i * 4 + 1] = Gray;
                    imgDataArray[i * 4 + 2] = Gray;
                }
                break;
        case 'DARK':
                for (let i = 0; i < numPixels; i++) {
                    imgDataArray[i * 4] = DARK_Fn(imgDataArray[i * 4]);
                    imgDataArray[i * 4 + 1] = DARK_Fn(imgDataArray[i * 4 + 1]);
                    imgDataArray[i * 4 + 2] = DARK_Fn(imgDataArray[i * 4 + 2]);
                }
                break;
        case 'BROWN':
                for (let i = 0, Red, Green, Blue; i < numPixels; i++) {
                    Red = imgDataArray[i * 4];
                    Green = imgDataArray[i * 4 + 1];
                    Blue = imgDataArray[i * 4 + 2];
                    [imgDataArray[i * 4], imgDataArray[i * 4 +1], imgDataArray[i * 4 + 2]] = BROWN_Fn(Red, Green, Blue);
                }
                break;
        case 'RED':
                for (let i = 0; i < numPixels; i++) {
                    // imgDataArray[i * 4] = 0;
                    imgDataArray[i * 4 + 1] = 0;
                    imgDataArray[i * 4 + 2] = 0;
                }
                break;
        case 'GREEN':
                for (let i = 0; i < numPixels; i++) {
                    imgDataArray[i * 4] = 0;
                    // imgDataArray[i * 4 + 1] = 0;
                    imgDataArray[i * 4 + 2] = 0;
                }
                break;
        case 'BLUE':
                for (let i = 0; i < numPixels; i++) {
                    imgDataArray[i * 4] = 0;
                    imgDataArray[i * 4 + 1] = 0;
                    // imgDataArray[i * 4 + 2] = 0;
                }
                break;
        case 'BLACK_WHITE':
                for (let i = 0, Red, Green, Blue, Average; i < numPixels; i++) {
                    Red = imgDataArray[i * 4];
                    Green = imgDataArray[i * 4 + 1];
                    Blue = imgDataArray[i * 4 + 2];
                    Average = (Red + Green + Blue) / 3;
                    imgDataArray[i * 4] = BLACK_WHITE_Fn(Average);
                    imgDataArray[i * 4 + 1] = BLACK_WHITE_Fn(Average);
                    imgDataArray[i * 4 + 2] = BLACK_WHITE_Fn(Average);
                }
                break;
        case 'REVERSE':
                for (let i = 0; i < numPixels; i++) {
                    imgDataArray[i * 4] = REVERSE_Fn(imgDataArray[i * 4]);
                    imgDataArray[i * 4 + 1] = REVERSE_Fn(imgDataArray[i * 4 + 1]);
                    imgDataArray[i * 4 + 2] = REVERSE_Fn(imgDataArray[i * 4 + 2]);
                }
                break;
        case 'RELIEF': 
                let [preR, preG, preB] = [0, 0, 0];
                for (let i = 0, R, G , B, GRAY; i < numPixels; i++) {
                    R = imgDataArray[i * 4];
                    G = imgDataArray[i * 4 + 1];
                    B = imgDataArray[i * 4 + 2];

                    GRAY = Gray_Fn(R - preR + 128, G - preR + 128, G - preB + 128);

                    imgDataArray[i * 4] = GRAY;
                    imgDataArray[i * 4 + 1] = GRAY;
                    imgDataArray[i * 4 + 2] = GRAY;

                    [preR, preG, preB] = [R, G, B];
                }
                break;
        default:
                break;
    }

    postMessage(imgData);
}