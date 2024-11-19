let dicesides: number = 6;
const dicemax: number = 99;
const dicemin: number = 2;
let decision: boolean = true;

while (true) {
    while (decision === true) {
        if (input.buttonIsPressed(Button.A)) {
            if (dicesides > dicemin) {
                dicesides = dicesides - 1;
                basic.showNumber(dicesides);
                music.play(music.tonePlayable(Note.D, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            }
        }
        if (input.buttonIsPressed(Button.B)) {
            if (dicesides < dicemax) {
                dicesides = dicesides + 1;
                basic.showNumber(dicesides);
                music.play(music.tonePlayable(Note.C3, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            }
        }
        if (input.isGesture(Gesture.Shake)) {
            let dicerandom = randint(dicemin, dicesides);
            basic.showNumber(dicerandom);
            music.play(music.tonePlayable(Note.C, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            decision = false
        }
    }

    while (decision === false) {
        if (input.logoIsPressed()) {
            decision = true
            music.play(music.tonePlayable(Note.C3, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        }
    }
}