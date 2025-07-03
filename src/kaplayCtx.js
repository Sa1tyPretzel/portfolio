import kaplay from "kaplay";

export default function makeKaplayCtx() {
    return kaplay({
        global: false,
        pixelDensity: 2,
        touchToMouse: true,
        debug: true, //False in prod
        debugKey: "f1",
        canvas: document.getElementById("game"),
    });
}