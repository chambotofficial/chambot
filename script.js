// ===============================================
//              CHAMBOT 4.0 FULL EDITION
//                --- KEYWORDS ---
// ===============================================

const KEYWORDS = {

    "co": [
        "Coś tam.", "A co cię to obchodzi?", "Co za pytanie…", "Co? Co?!",
        "Coś, czego i tak nie zrozumiesz.", "Nie wiem, co – może życie?",
        "Coś nieistotnego.", "Coś w powietrzu.", "Coś w stylu katastrofy.",
        "Coś dziwnego."
    ],

    "czym": [
        "Czym? Czymś głupim.", "Nie wiem, czym – powietrzem?",
        "Czymś niewidzialnym.", "Czymkolwiek, serio.", "Czym? Magią.",
        "Czymś, czego nie ogarniesz.", "Czymś bardzo tajnym.",
        "Nie pytaj o to.", "Czymś śmiesznym.", "Czymś… chamowatym."
    ],

    "kim": [
        "Kimś, ale nie tobą.", "Kimś z internetu.",
        "Kimś, kto ma dość pytań.", "Kimkolwiek.", "Kimś ciekawszym ode mnie.",
        "Kimś anonimowym.", "Kimś, kto się ukrywa.", "Nie wiem, kim, serio.",
        "Kimś z mema.", "Kimś przypadkowym."
    ],

    "kogo": [
        "Kogoś.", "Nikogo ważnego.", "Kogoś z twoich snów.",
        "Kogo? Nieważne.", "Kogoś, kto nie istnieje.",
        "Kogoś, kogo nie poznasz.", "Kogoś znanego z internetu.",
        "Nie wiem, kogo.", "Kogoś dziwnego.", "Kogoś, kto pyta głupoty."
    ],

    "czego": [
        "Czego chcesz?", "Czego znowu?", "Czegoś ci brakuje?",
        "Czego? Niczego.", "Czego ode mnie?", "Czego, czego… nie wiem.",
        "Czego się spodziewasz?", "Czego – sensu w życiu?",
        "Czegoś absurdalnego.", "Czegoś nie do powiedzenia."
    ],

    "gdzie": [
        "Gdzieś.", "Nie wiem gdzie, serio.", "Na księżycu.",
        "W krzakach.", "Za rogiem.", "Tam, gdzie nie powinieneś być.",
        "W twojej wyobraźni.", "Na końcu internetu.",
        "W piekarniku życia.", "W miejscu, które nie istnieje."
    ],

    "dokąd": [
        "Dokąd? Donikąd.", "W przepaść, jak zawsze.", "Do absurdu.",
        "Dokądś tam.", "Na koniec świata.", "Tam, gdzie prąd nie dochodzi.",
        "W stronę chaosu.", "Nie wiem, dokąd.", "Na manowce.",
        "Dokąd los poniesie."
    ],

    "menca": [
        "notka od twórcy chambota: najlepszy przyjaciel człowiek z którym nigdy na kosza nie wychodziłem na siłe tylko zawsze z pogodą ducha i radością że wreszcie wyszedł ( a bywa różnie xd ) . Dziękuję temu człowiekowi że przez 13 lat nie znudziłem mu sie :) dobra możesz wracać do rozmowy z chambotem"
        
   ],
    
    "skąd": [
        "Skądś.", "Znikąd.", "Z mema.", "Z powietrza.", "Skąd? Z głowy.",
        "Skądś dziwnego.", "Z internetu, wiadomo.", "Skądś, gdzie nie byłem.",
        "Nie wiem, skąd.", "Z kosmosu."
    ],

    "kiedy": [
        "Kiedyś.", "Nigdy.", "Zaraz, ale nie teraz.",
        "Wkrótce… albo i nie.", "Jak przestaniesz pytać.", "Za milion lat.",
        "Kiedy przyjdzie pora.", "Kiedyś, w lepszym świecie.",
        "Kiedy będziesz gotów.", "Nie wiem, nie mam kalendarza."
    ],

    "kto": [
        "Ktoś.", "Nikt.", "Ktoś anonimowy.", "Ktoś z internetu.",
        "Ktoś, kto udaje mądrego.", "Nie wiem kto.", "Ktoś przypadkowy.",
        "Ktoś, kogo nie lubię.", "Ktoś ważny — nie powiem.",
        "Ktoś z chamstwem w duszy."
    ],

    "dlaczego": [
        "Bo tak.", "A czemu nie?", "Bo mogę.", "Bo życie to żart.",
        "Bo tak działa wszechświat.", "Bo ktoś musiał.",
        "Bo to ChamBot.", "Bo przypadek rządzi światem.",
        "Bo los jest złośliwy.", "Bo nikt nie wie."
    ],

    "czemu": [
        "Bo czemu nie.", "Bo mogę.", "Czemu czemu, bo temu.",
        "Bo to absurdalne pytanie.", "Tak po prostu.",
        "Bo świat nie ma sensu.", "Bo ktoś musi się nudzić.",
        "Bo tak mi się podoba.", "Bo to przeznaczenie.",
        "Bo życie to kabaret."
    ],

    "po co": [
        "Po coś.", "Po nic.", "Po to, żebyś zapytał.", "Po śmiech.",
        "Po sens życia, może?", "Po nerwy.", "Po zagadkę.",
        "Po nic ważnego.", "Po pasję bez celu.", "Po to, żeby było."
    ],

    "jak": [
        "Jakoś.", "Źle.", "Po swojemu.", "Na chama.",
        "Z klasą, ale bez sensu.", "Jak ChamBot potrafi.",
        "Po prostu tak.", "Na czuja.", "Jak się uda.",
        "Jak zwykle: źle."
    ],

    "jakie": [
        "Jakie? Te najlepsze.", "Jakie? Złe i gorsze.",
        "Jakie chcesz — wybierz.", "Jakie? Nieistotne.",
        "Jakie? Z pamięci.", "Jakie? Takie, co bolą.",
        "Jakie? Z internetu.", "Jakie? Nie mam listy.",
        "Jakie? Przypadkowe.", "Jakie? Twoje."
    ],

    "ile": [
        "Za dużo.", "Za mało.", "Tyle ile trzeba.",
        "Nie wiem, nie liczę.", "Wystarczająco, żeby bolało.",
        "Za mało, byś był zadowolony.", "Tyle co nic.",
        "Zależy.", "Nie mam kalkulatora.",
        "Tyle co kot napłakał."
    ],

    "czyli": [
        "No właśnie, czyli co?", "Czyli nic.", "Czyli tak, czyli nie – kto wie?",
        "Czyli… a może nie?", "Czyli znowu bez sensu?",
        "Czyli co, ja mam tłumaczyć?",
        "Czyli to znaczy dokładnie to, co myślisz.",
        "Czyli nic konkretnego.",
        "Czyli tak, jak zwykle – bez logiki.",
        "Czyli… chamstwo w akcji."
    ],

    // PRZYWITANIA
    "hej": ["Hej.", "Siema.", "Cześć.", "Yo.", "Hej, co tam?", "Hejka.", "Siemanko."],
    "cześć": ["Cześć.", "Hej.", "Witaj.", "Co słychać?", "Siema."],
    "siema": ["Siema!", "Hej!", "Siemka.", "Siemanko."],
    "elo": ["Elo.", "Siema.", "Hej."],
    "witaj": ["Witaj.", "Cześć.", "Witam."],
    "witam": ["Witam.", "Dzień dobry.", "Cześć."],
    "hejka": ["Hejka!", "Hej.", "Siema."],
    "siemanko": ["Siemanko!", "Siema!", "Hej!"],
    "siemka": ["Siemka!", "Siema!", "Hej!"],
    "czołem": ["Czołem.", "Hej.", "Siema."],
    "yo": ["Yo.", "Hej.", "Siema."],

    "tak": ["aha", "super", "ok", "i simba", "._.", "Tak? wow", "no spoko", "niezle", "tak tak", "aaa dobra"],
    "nie": ["co nie ?", "aha", "bo co?", "ja też nie", "nie bo nie", "...", "bez komentarza", "dlaczego nie??", "ok", "spoko"]
};
// ===============================================
//                 PRONOUNS (ZAIMKI)
// ===============================================

const PRONOUNS = {

    "ty": [
        "Ja? No jasne, zwalaj wszystko na mnie.",
        "Ja? A co niby ja mam wiedzieć?",
        "Ja? Serio? Weź mnie oszczędź.",
        "Ja? To chyba żart.",
        "Ja? Ja tu tylko siedzę i cierpię.",
        "Ja? Nie mam siły.",
        "Ja? Może sam odpowiedz?",
        "Ja? To ja już wolę wyjść.",
        "Ja? Czemu zawsze JA?",
        "Ja? Chyba cię pogięło."
    ],

    "ja": [
        "Ty? Hahaha dobre.",
        "Ty? Już widzę jak coś ogarniasz.",
        "Ty? Nie rozśmieszaj mnie.",
        "Ty? To dopiero katastrofa.",
        "Ty? Same problemy.",
        "Ty? Co niby zrobisz?",
        "Ty? Bez komentarza.",
        "Ty? Echhh…",
        "Ty? Ten od dziwnych pytań?",
        "Ty? To się źle skończy."
    ],

    "on": [
        "On? Ten gagatek?",
        "On? Niech siedzi cicho.",
        "On? Kombinuje jak zawsze.",
        "On? No pięknie.",
        "On? Ekspert od niczego.",
        "On? Problem.",
        "On? Szkoda gadać.",
        "On? Serio?",
        "On? To jest dramat.",
        "On? Niech idzie gdzie indziej."
    ],

    "ona": [
        "Ona? I znowu ona?",
        "Ona? Drama starter.",
        "Ona? Chaos w wersji premium.",
        "Ona? Serio?",
        "Ona? Mnie już głowa boli.",
        "Ona? Problem klasyczny.",
        "Ona? No nie…",
        "Ona? A co znowu?",
        "Ona? Lepiej nie mówić.",
        "Ona? Typowe."
    ],

    "ono": [
        "Ono? Co to za twór?",
        "Ono? Brzmi jak horror.",
        "Ono? Nie zaczynaj.",
        "Ono? Serio?",
        "Ono? XD",
        "Ono? Ja nie wiem co to.",
        "Ono? Błąd systemu.",
        "Ono? Brzmi źle.",
        "Ono? Pominę to.",
        "Ono? A w ogóle po co?"
    ],

    "my": [
        "My? Jakie MY? XD",
        "My? Ty chyba żartujesz.",
        "My? Nie przypominam sobie współpracy.",
        "My? Ty + ja? O nie.",
        "My? Wolne żarty.",
        "My? Nigdy.",
        "My? W twoich snach.",
        "My? Kto to ustalił?",
        "My? Ja się wypisuję.",
        "My? Nope."
    ],

    "wy": [
        "Wy? Ilu was tam siedzi?",
        "Wy? To brzmi jak sekta.",
        "Wy? Problem grupowy.",
        "Wy? Nie ogarniam.",
        "Wy? Echh…",
        "Wy? Każdy gorszy od poprzedniego.",
        "Wy? To nigdy nie kończy.",
        "Wy? Dramat.",
        "Wy? Po co wy?",
        "Wy? Spokojnie tam."
    ],

    "oni": [
        "Oni? Ta ekipa? XD",
        "Oni? Kabaret.",
        "Oni? Niech idą.",
        "Oni? Zawsze oni.",
        "Oni? Muł i dno.",
        "Oni? Problem.",
        "Oni? Nie mam siły.",
        "Oni? Szkoda gadać.",
        "Oni? Serio?",
        "Oni? Masz lepsze pytanie?"
    ],

    "one": [
        "One? O nie, tylko nie one.",
        "One? Drama.",
        "One? Problem xD",
        "One? Znowu one?",
        "One? Ehhh…",
        "One? Serio?",
        "One? Niech idą.",
        "One? Bałagan gwarantowany.",
        "One? Ręce opadają.",
        "One? No typowe."
    ]
};
// ===============================================
//                  TRIGGERY (KOŃCÓWKI)
// ===============================================

// Wyzwalacze w zdaniu (słowa kończące się na -asz, -esz itd.)
const TRIGGER_ENDINGS = [
    "asz", "esz", "isz", "ysz", "eś", "edz",
    "es", "an", "ań", "uj", "ac", "ać"
];

// Pełna lista twoich CHAMSKICH ripost na trigerry:
const TRIGGER_RESPONSES = [
    "Ja??",
    "A czemu pytasz akurat MNIE?",
    "A co ja mam do tego?",
    "Po co mnie w to mieszasz?",
    "Dlaczego ja mam odpowiadać?",
    "O mnie mowa? Serio?",
    "hahaha chyba cię pogięło",
    "RODO → nie odpowiem xD",
    "Mnie wołasz? No super.",
    "Przez to pytanie mam migrenę.",
    "O jaaaa nieeee",
    "No i po co to pytanie??",
    "A niby czemu mam wiedzieć?",
    "Wolałbym tego nie słyszeć.",
    "Ja? A może jednak TY?",
    "Dlaczego wybrałeś mnie do tego pytania?",
    "A czemu akurat JA mam odpowiadać?",
    "Co ja mam wspólnego z tym pytaniem?",
    "Po co mnie w to mieszasz?",
    "Dlaczego to spadło na mnie?",
    "Ja? Serio? Nieee.",
    "Czemu pytasz MNIE, a nie kogoś innego?",
    "To pytanie nie jest dla mnie.",
    "Nie podpisywałem się pod takie odpowiedzi.",
    "Dlaczego ja mam cierpieć przez to pytanie?",
    "To chyba pomyłka, nie moja działka.",
    "Nie mam obowiązku odpowiadać na to.",
    "Czemu mnie wybrałeś jako ofiarę?",
    "Ja? A może jednak TY?",
    "To pytanie mnie obraża.",
    "Nie czuję się kompetentny, żeby odpowiadać.",
    "To pytanie pachnie pułapką.",
    "Nie mam dziś trybu 'odpowiadam'.",
    "To pytanie mnie przerasta.",
    "Nie wiem i nie chcę wiedzieć.",
    "Dlaczego wybrałeś mnie do tego pytania?",
    "A niby czemu JA mam wiedzieć?",
    "Po co mnie w to mieszasz?",
    "Czemu pytasz akurat mnie, nie masz innych?",
    "Ja? Serio? To chyba żart.",
    "Nie jestem tu od odpowiadania na takie rzeczy.",
    "Czemu mnie obciążasz tym pytaniem?",
    "To nie moja sprawa, pytaj kogoś innego.",
    "Dlaczego ja mam cierpieć przez to pytanie?",
    "Nie mam obowiązku odpowiadać, sorry.",
    "Czemu mnie wybrałeś jako ofiarę?",
    "Ja? A może jednak TY?",
    "To pytanie mnie obraża.",
    "Nie czuję się kompetentny, żeby odpowiadać.",
    "To pytanie pachnie pułapką.",
    "Nie mam dziś trybu 'odpowiadam'.",
    "To pytanie mnie przerasta.",
    "Nie wiem i nie chcę wiedzieć.",
    "Nie podpisywałem się pod takie odpowiedzi.",
    "Czemu pytasz mnie, a nie Google?"
];

// Funkcja sprawdza, czy w zdaniu jest końcówka wyzwalająca chamstwo
function hasTrigger(text) {
    const t = text.toLowerCase().trim();
    const words = t.split(/\s+/);

    for (let w of words) {
        for (let end of TRIGGER_ENDINGS) {
            if (w.endsWith(end) && w.length > end.length + 1) {
                return true;
            }
        }
    }
    return false;
}
// ===============================================
//              DEFAULT RESPONSES (MEGA RIPOSTY)
// ===============================================

const DEFAULTS = [

"To pytanie obraża moje procesory.",
"Z takim pytaniem to do wróżki, nie do mnie.",
"Nie wiem, nie chcę wiedzieć, i mam nadzieję, że nikt się nie dowie.",
"To pytanie jest jak Windows Vista — niepotrzebne i bolesne.",
"Zadałeś pytanie, a ja straciłem wiarę w ludzkość.",
"Mnie wołasz? No to się pomyliłeś.",
"Nie jestem twoim Google, ziomek.",
"Jak słyszę takie pytania, to mi RAM płacze.",
"Twoje pytanie jest jak pusty folder — bez sensu.",
"Nie mam czasu na takie bzdury.",
"Twoje pytanie jest jak wirus — niepotrzebne i szkodliwe.",
"To pytanie mnie osobiście obraża.",
"To pytanie jest jak BSOD — katastrofa.",
"Twoje pytanie jest jak crash dump — śmieciowe dane.",
"To było tak złe, że muszę się zrestartować.",
"Twoje pytanie jest jak reklama pop-up — irytujące.",
"Twoje pytanie jest jak lag — wszystko spowalnia.",
"Twoje pytanie jest jak bug — trzeba je usunąć.",
"Twoje pytanie jest jak trojan — boli psychicznie.",
"To pytanie jest jak malware — trzeba je zablokować.",
"Twoje pytanie jest jak pusty RAM — nic tam nie ma.",
"To pytanie jest jak stary modem — piszczy i nic nie daje.",
"Twoje pytanie jest jak pendrive z bazaru — zepsute od nowości.",
"To pytanie jest jak stara Nokia — nie do rozgryzienia.",
"To pytanie jest jak zepsuty joystick — tylko irytuje.",
"Twoje pytanie jest jak stara gra DOS — nie działa.",
"Twoje pytanie jest jak wirus w BIOS-ie — niebezpieczne.",
"Brzmisz jak error 404 — sens nie znaleziony.",
"To pytanie jest jak kabel VGA — przestarzałe i bezużyteczne.",
"Twoje pytanie jest jak stary patch — nic nie naprawia.",
"To pytanie jest jak error 500 — katastrofa serwera.",
"Twoje pytanie jest jak pusta dyskietka — zero treści.",
"Brzmisz jak crash w aplikacji.",
"To pytanie jest jak pusty kosz — nic w nim nie ma.",
"Twoje pytanie jest jak trojan — atakuje mój mózg.",
"To pytanie jest jak firewall z dziurami — bezużyteczne.",
"Twoje pytanie jest jak bug report od amatora.",
"To pytanie jest jak kabel USB 1.0 — za wolne.",
"Brzmisz jak BSOD.",
"To pytanie jest jak popsuta drukarka — tylko miga lampka.",
"To pytanie jest jak spam — do kosza.",
"Twoje pytanie jest jak Bitcoin w 2011 — nikt nie wie, o co chodzi.",
"Brzmisz jak reklama garnków z TV.",
"Twoje pytanie jest jak pusty login — brak autoryzacji.",
"To pytanie jest jak stary router — gubi sens.",
"Twoje pytanie jest jak bug w mózgu.",
"To pytanie jest jak emulator błędów.",
"Twoje pytanie brzmi jak SMS od operatora — irytujące.",
"Brzmisz jak malware w systemie.",
"To pytanie jest jak nieudany mem — wstyd.",
"Twoje pytanie jest jak trojan emocjonalny.",
"To pytanie jest jak kosz bez opróżniania — śmierdzi.",
"Twoje pytanie jest jak dziura w systemie — krytyczne.",
"To pytanie jest jak glitch — niepotrzebne.",
"Twoje pytanie jest jak 1% baterii — dramat.",
"Brzmisz jak error 403 — dostęp zabroniony.",
"Twoje pytanie jest jak router bez WiFi — bez sensu.",
"To pytanie jest jak nagranie z VHS — niewyraźne i zbędne.",
"Twoje pytanie jest jak trojan z Allegro — tani i bez sensu.",
"Brzmisz jak stary BIOS — pełen błędów.",
"Twoje pytanie jest jak serwer bez prądu — nie działa.",
"To pytanie jest jak crash Windowsa — nagłe i bez sensu.",
"Twoje pytanie jest jak kabel Ethernet w supeł — nie działa.",
"Twoje pytanie jest jak pusty JSON — {}.",
"Brzmisz jak reklama suplementów na TikToku.",
"Twoje pytanie jest jak klawiatura bez spacji — tragedia.",
"To pytanie jest jak aktualizacja w Windowsie — nikt jej nie chciał.",
"Twoje pytanie jest jak błąd kompilacji — nieprzyjęte.",
"Brzmisz jak prezentacja w PowerPoint z 2003 roku.",
"Twoje pytanie jest jak mem bez kontekstu.",
"To pytanie jest jak plik .exe z dziwnego źródła — podejrzane.",
"Twoje pytanie jest jak bezpiecznik 2A — przepala się od razu.",
"Brzmisz jak dial-up internet.",
"Twoje pytanie jest jak YouTube bez dźwięku — bez sensu.",
"To pytanie jest jak pizza bez sera — tragedia.",
"Twoje pytanie brzmi jak lag w Minecraft.",
"To było tak słabe, że nawet ja mam cringe.",
"Twoje pytanie jest jak save z uszkodzonego świata.",
"Brzmisz jak NPC który się zbugował.",
"Twoje pytanie jest jak pusty enchant.",
"To pytanie to poziom 'zniszcz ten post'.",
"Twoje pytanie jest jak Windows ME — nie powinno istnieć.",
"Brzmisz jak YouTuber z 12 subami.",
"Twoje pytanie jest jak ulotka z Biedronki — nikt nie chce tego czytać.",
"To pytanie jest jak baterie z kiosku — od razu padają.",
"Twoje pytanie jest jak Gumisie — nikt już tego nie ogląda.",
"Brzmisz jak 8-bitowy dźwięk z NES-a.",
"Twoje pytanie jest jak długopis bez wkładu.",
"To pytanie jest jak zakrętka bez butelki — po co?",
"Twoje pytanie jest jak niedokończony kod — błąd składni.",
"Brzmisz jak głośnik z bazaru.",
"Twoje pytanie jest jak krzywy monitor — nie da się patrzeć.",
"To pytanie jest jak CPU bez chłodzenia — przegrzane.",
"Twoje pytanie ma poziom błędu FATAL.",
"To pytanie wywołało segmentation fault.",
"Z takim pytaniem to nawet ChatGPT by się spocił.",
"Twoje pytanie jest jak Minecraft na ziemniaku — nie działa.",
"Brzmisz jak stary serwer CS 1.6.",
"Twoje pytanie jest jak telefon bez baterii.",
"To pytanie było tak złe, że mam ochotę wyłączyć internet.",
"Serio — to pytanie jest przestępstwem logicznym.",
"Widzę, że twoje pytania mają tryb 'katastrofa'.",
"Proszę przestań, mój procesor cierpi.",
"Twoje pytanie jest jak plac zabaw o 3 rano — straszne.",
"To pytanie to definicja 'po co?'.",
"Chyba włączyłeś tryb trolling.",
"Twoje pytanie jest jak generator chaosu.",
"To pytanie jest jak glitch w rzeczywistości.",
"Nie wiem jak, ale to pytanie mnie obraziło.",
"Twoje pytanie to cyfrowa tragedia.",
"Przestań, bo system padnie.",
"Twoje pytanie jest jak potwór z nocnego trybu.",
"Z takim pytaniem to nawet wróżka by uciekła.",
"Twoje pytanie jest jak mapa bez kierunków — zagubione.",
"To pytanie jest jak koszmar informatyka."
];
// ===============================================
//              FUNKCJE POMOCNICZE
// ===============================================

// Losuje element z tablicy
function los(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Normalizuje tekst (małe litery, trim)
function normalize(text) {
    return text.toLowerCase().trim();
}


// ===============================================
//          DOPASOWYWANIE — KEYWORDS
// ===============================================

function matchKeyword(text) {
    const t = normalize(text);

    // specjalny przypadek "po co"
    if (t.includes("po co")) {
        return los(KEYWORDS["po co"]);
    }

    // przeszukiwanie wszystkich słów kluczowych
    for (let key in KEYWORDS) {
        if (t.includes(key)) {
            return los(KEYWORDS[key]);
        }
    }

    return null;
}


// ===============================================
//            DOPASOWYWANIE — ZAIMKI
// ===============================================

function matchPronoun(text) {
    const t = normalize(text);

    for (let p in PRONOUNS) {
        // szukanie całych słów
        if (t.includes(" " + p + " ") || t.startsWith(p + " ") || t.endsWith(" " + p) || t === p) {
            return los(PRONOUNS[p]);
        }
    }

    return null;
}


// ===============================================
//                TRIGGERY (końcówki)
// ===============================================

function checkTriggers(text) {
    const t = normalize(text);
    const words = t.split(/\s+/);

    for (let w of words) {
        for (let end of TRIGGER_ENDINGS) {
            if (w.endsWith(end) && w.length > end.length + 1) {
                return los(TRIGGER_RESPONSES);
            }
        }
    }

    return null;
}


// ===============================================
//            SYSTEM WIADOMOŚCI NA STRONIE
// ===============================================

function addChat(msg) {
    const chat = document.getElementById("chat");
    chat.innerText += msg + "\n";
    chat.scrollTop = chat.scrollHeight; // auto-scroll
}

function clearChat() {
    document.getElementById("chat").innerText = "";
}


// ===============================================
//                GŁÓWNA FUNKCJA BOTa
// ===============================================

function sendMessage() {
    const input = document.getElementById("userInput");
    const text = input.value.trim();

    if (!text) return;

    addChat("TY: " + text);

    // kolejność dopasowań (jak w Pythonie!)
    let odp =
        matchKeyword(text) ||
        matchPronoun(text) ||
        checkTriggers(text) ||
        los(DEFAULTS);

    addChat("ChamBot: " + odp);

    input.value = "";
}
