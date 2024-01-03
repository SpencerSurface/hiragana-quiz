class Kana {
    constructor(romaji, kana) {
        this.romaji = romaji;
        this.kana = kana;
    }
}

const kanaList = [
    // a i u e o
    new Kana("a", "あ"),
    new Kana("i", "い"),
    new Kana("u", "う"),
    new Kana("e", "え"),
    new Kana("o", "お"),
    // k g
    new Kana("ka", "か"),
    new Kana("ga", "が"),
    new Kana("ki", "き"),
    new Kana("gi", "ぎ"),
    new Kana("ku", "く"),
    new Kana("gu", "ぐ"),
    new Kana("ke", "け"),
    new Kana("ge", "げ"),
    new Kana("ko", "こ"),
    new Kana("go", "ご"),
    // s z
    new Kana("sa", "さ"),
    new Kana("za", "ざ"),
    new Kana("shi", "し"),
    new Kana("ji", "じ"),
    new Kana("su", "す"),
    new Kana("zu", "ず"),
    new Kana("se", "せ"),
    new Kana("ze", "ぜ"),
    new Kana("so", "そ"),
    new Kana("zo", "ぞ"),
    // t d
    new Kana("ta", "た"),
    new Kana("da", "だ"),
    new Kana("chi", "ち"),
    new Kana("ji", "ぢ"),
    new Kana("tsu", "つ"),
    new Kana("zu", "づ"),
    new Kana("te", "て"),
    new Kana("de", "で"),
    new Kana("to", "と"),
    new Kana("do", "ど"),
    // n
    new Kana("na", "な"),
    new Kana("ni", "に"),
    new Kana("nu", "ぬ"),
    new Kana("ne", "ね"),
    new Kana("no", "の"),
    // h b p
    new Kana("ha", "は"),
    new Kana("ba", "ば"),
    new Kana("pa", "ぱ"),
    new Kana("hi", "ひ"),
    new Kana("bi", "び"),
    new Kana("pi", "ぴ"),
    new Kana("fu", "ふ"),
    new Kana("bu", "ぶ"),
    new Kana("pu", "ぷ"),
    new Kana("he", "へ"),
    new Kana("be", "べ"),
    new Kana("pe", "ぺ"),
    new Kana("ho", "ほ"),
    new Kana("bo", "ぼ"),
    new Kana("po", "ぽ"),
    // m
    new Kana("ma", "ま"),
    new Kana("mi", "み"),
    new Kana("mu", "む"),
    new Kana("me", "め"),
    new Kana("mo", "も"),
    // y
    new Kana("ya", "や"),
    new Kana("yu", "ゆ"),
    new Kana("yo", "よ"),
    // r
    new Kana("ra", "ら"),
    new Kana("ri", "り"),
    new Kana("ru", "る"),
    new Kana("re", "れ"),
    new Kana("ro", "ろ"),
    // w
    new Kana("wa", "わ"),
    new Kana("wi", "ゐ"),
    new Kana("we", "ゑ"),
    new Kana("wo", "を"),
    // n
    new Kana("n", "ん")
]