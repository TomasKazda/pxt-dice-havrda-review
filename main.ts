let dicesides: number = 6;
const dicemax: number = 99;
const dicemin: number = 2;
let decision: boolean = true;

while (true) {
    if (decision) {
        if (input.buttonIsPressed(Button.A)) {
            if (dicesides > dicemin) {
                dicesides -= 1;
                whaleysans.showNumber(dicesides);
                music.play(music.tonePlayable(Note.D, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
            }

        }
        if (input.buttonIsPressed(Button.B)) {
            if (dicesides < dicemax) {
                dicesides += 1;
                whaleysans.showNumber(dicesides);
                music.play(music.tonePlayable(Note.C3, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
            }
        }
        if (input.isGesture(Gesture.Shake)) {
            let dicerandom = randint(1, dicesides);
            basic.showNumber(dicerandom);
            music.play(music.tonePlayable(Note.C, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
            decision = false
        }
    }

    if (!decision) {
        if (input.logoIsPressed()) {
            decision = true
            music.play(music.tonePlayable(Note.C3, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
        }
    }

    basic.pause(50)
}