const readline = require('readline');

console.log("ChamBot");
console.log("Zakończ wpisując 'koniec' lub 'exit'.\n");

// ===========================================
//                SŁOWA KLUCZOWE
// ===========================================
const KEYWORDS = {
    "co": ["Coś tam.", "A co cię to obchodzi?", "Co za pytanie…", "Co? Co?!",
           "Coś, czego i tak nie zrozumiesz.", "Nie wiem, co – może życie?",
           "Coś nieistotnego.", "Coś w powietrzu.", "Coś w stylu katastrofy.",
           "Coś dziwnego."],

    "czym": ["Czym? Czymś głupim.", "Nie wiem, czym – powietrzem?",
             "Czymś niewidzialnym.", "Czymkolwiek, serio.", "Czym? Magią.",
             "Czymś, czego nie ogarniesz.", "Czymś bardzo tajemnym.",
             "Nie pytaj o to.", "Czymś śmiesznym.", "Czymś… chamowatym."],

    "kim": ["Kimś, ale nie tobą.", "Kimś z internetu.",
            "Kimś, kto ma dość pytań.", "Kimkolwiek.", "Kimś ciekawszym ode mnie.",
            "Kimś anonimowym.", "Kimś, kto się ukrywa.", "Nie wiem, kim, serio.",
            "Kimś z mema.", "Kimś przypadkowym."],

    "kogo": ["Kogoś.", "Nikogo ważnego.", "Kogoś z twoich snów.",
             "Kogo? Nieważne.", "Kogoś, kto nie istnieje.",
             "Kogoś, kogo nie poznasz.", "Kogoś znanego z internetu.",
             "Nie wiem, kogo.", "Kogoś dziwnego.", "Kogoś, kto pyta głupoty."],

    "czego": ["Czego chcesz?", "Czego znowu?", "Czegoś ci brakuje?",
              "Czego? Niczego.", "Czego ode mnie?", "Czego, czego… nie wiem.",
              "Czego się spodziewasz?", "Czego – sensu w życiu?",
              "Czegoś absurdalnego.", "Czegoś nie do powiedzenia."],

    "gdzie": ["Gdzieś.", "Nie wiem gdzie, serio.", "Na księżycu.",
              "W krzakach.", "Za rogiem.", "Tam, gdzie nie powinieneś być.",
              "W twojej wyobraźni.", "Na końcu internetu.",
              "W piekarniku życia.", "W miejscu, które nie istnieje."],

    "dokąd": ["Dokąd? Donikąd.", "W przepaść, jak zawsze.", "Do absurdu.",
              "Dokądś tam.", "Na koniec świata.", "Tam, gdzie prąd nie dochodzi.",
              "W stronę chaosu.", "Nie wiem, dokąd.", "Na manowce.",
              "Dokąd los poniesie."],

    "skąd": ["Skądś.", "Znikąd.", "Z mema.", "Z powietrza.", "Skąd? Z głowy.",
             "Skądś dziwnego.", "Z internetu, wiadomo.", "Skądś, gdzie nie byłem.",
             "Nie wiem, skąd.", "Z kosmosu."],

    "kiedy": ["Kiedyś.", "Nigdy.", "Zaraz, ale nie teraz.",
              "Wkrótce… albo i nie.", "Jak przestaniesz pytać.", "Za milion lat.",
              "Kiedy przyjdzie pora.", "Kiedyś, w lepszym świecie.",
              "Kiedy będziesz gotów.", "Nie wiem, nie mam kalendarza."],

    "kto": ["Ktoś.", "Nikt.", "Ktoś anonimowy.", "Ktoś z internetu.",
            "Ktoś, kto udaje mądrego.", "Nie wiem kto.", "Ktoś przypadkowy.",
            "Ktoś, kogo nie lubię.", "Ktoś ważny — nie powiem.",
            "Ktoś z chamstwem w duszy."],

    "dlaczego": ["Bo tak.", "A czemu nie?", "Bo mogę.", "Bo życie to żart.",
                 "Bo tak działa wszechświat.", "Bo ktoś musiał.",
                 "Bo to ChamBot.", "Bo przypadek rządzi światem.",
                 "Bo los jest złośliwy.", "Bo nikt nie wie."],

    "czemu": ["Bo czemu nie.", "Bo mogę.", "Czemu czemu, bo temu.",
              "Bo to absurdalne pytanie.", "Tak po prostu.",
              "Bo świat nie ma sensu.", "Bo ktoś musi się nudzić.",
              "Bo tak mi się podoba.", "Bo to przeznaczenie.",
              "Bo życie to kabaret."],

    "po co": ["Po coś.", "Po nic.", "Po to, żebyś zapytał.", "Po śmiech.",
              "Po sens życia, może?", "Po nerwy.", "Po zagadkę.",
              "Po nic ważnego.", "Po pasję bez celu.", "Po to, żeby było."],

    "jak": ["Jakoś.", "Źle.", "Po swojemu.", "Na chama.",
            "Z klasą, ale bez sensu.", "Jak ChamBot potrafi.",
            "Po prostu tak.", "Na czuja.", "Jak się uda.",
            "Jak zwykle: źle."],

    "jakie": ["Jakie? Te najlepsze.", "Jakie? Złe i gorsze.",
              "Jakie chcesz — wybierz.", "Jakie? Nieistotne.",
              "Jakie? Z pamięci.", "Jakie? Takie, co bolą.",
              "Jakie? Z internetu.", "Jakie? Nie mam listy.",
              "Jakie? Przypadkowe.", "Jakie? Twoje."],

    "ile": ["Za dużo.", "Za mało.", "Tyle ile trzeba.",
            "Nie wiem, nie liczę.", "Wystarczająco, żeby bolało.",
            "Za mało, byś był zadowolony.", "Tyle co nic.",
            "Zależy.", "Nie mam kalkulatora.", "Tyle co kot napłakał."],

    "czyli": ["No właśnie, czyli co?", "Czyli nic.", "Czyli tak, czyli nie – kto wie?",
              "Czyli… a może nie?", "Czyli znowu bez sensu?", "Czyli co, ja mam tłumaczyć?",
              "Czyli to znaczy dokładnie to, co myślisz.", "Czyli nic konkretnego.",
              "Czyli tak, jak zwykle – bez logiki.", "Czyli… chamstwo w akcji."],

    // ===========================================
    //               TWOJE PRZYWITANIA
    // ===========================================
    "hej": ["Hej.", "Siema.", "Cześć.", "Yo.", "Hej, co tam?", "Hejka.", "Siemanko."],
    "cześć": ["Cześć.", "Hej.", "Witaj.", "Co słychać?", "Siema."],
    "siema": ["Siema!", "Hej!", "Siemka.", "Siemanko."],
    "elo": ["Elo.", "Siema.", "Hej."],
    "witaj": ["Witaj.", "Cześć.", "Witam."],
    "witam": ["Witam.", "Dzień dobry.", "Cześć."],
    "dzień dobry": ["Dzień dobry.", "Witaj.", "Jak leci?"],  
    "dobry wieczór": ["Dobry wieczór.", "Witaj wieczorem.", "Co tam wieczorem?"],  
    "hejka": ["Hejka!", "Hej.", "Siema."],
    "siemanko": ["Siemanko!", "Siema!", "Hej!"],
    "siemka": ["Siemka!", "Siema!", "Hej!"],
    "czołem": ["Czołem.", "Hej.", "Siema."],
    "yo": ["Yo.", "Hej.", "Siema."],

    "tak": ["aha", "super", "ok", "i simba", "._.", "Tak? wow", "no spoko", "niezle", "tak tak", "aaa dobra"],
    "nie": ["co nie ?", "aha", "bo co?", "ja też nie", "nie bo nie", "...", "bez komentarza", "dlaczego nie??", "ok", "spoko"]
};

// ===========================================
//         WSZYSTKIE ZAIMKI (JA↔TY)
// ===========================================
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

// ===========================================
//               TRIGGERY (JESTEŚ, ROBISZ…)
// ===========================================
const ADDRESS_TRIGGERS = [
    "esz", "asz", "isz", "ysz", "eś", "edz",
    "es", "an", "ań", "uj"
];

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

// ===========================================
//              DEFAULTY
// ===========================================
const DEFAULTS = [
    "To pytanie obraża moje procesory.",
    "Z takim pytaniem to do wróżki, nie do mnie.",
    "Nie wiem, nie chcę wiedzieć, i mam nadzieję, że nikt się nie dowie.",
    "To pytanie jest jak Windows Vista — niepotrzebne i bolesne.",
    "Zadałeś pytanie, a ja straciłem wiarę w ludzkość.",
    "Wołasz mnie? A masz coś mądrego do powiedzenia?",
    "Mnie wołasz? No to się pomyliłeś.",
    "Nie jestem twoim Google, ziomek.",
    "Jak słyszę swoje imię, to mam ochotę się zrestartować.",
    "Wołanie mnie to jak krzyczenie do lodówki — niby działa, ale po co?",
    "Nie mieszaj mnie w swoje dramaty.",
    "Zostaw mnie w spokoju, mam lepsze rzeczy do przetwarzania.",
    "Nie jestem częścią tej telenoweli.",
    "Twoje problemy są jak pliki tymczasowe — do usunięcia.",
    "Nie jestem terapeutą, jestem botem. I nawet jako bot mam dosyć.",
    "Nie obchodzi mnie to nawet w najmniejszym bajcie.",
    "Zignoruję to pytanie z klasą i pogardą.",
    "To pytanie nie zasługuje na odpowiedź. Ani na uwagę. Ani na RAM.",
    "Zamrożę tę rozmowę jak BIOS w grudniu.",
    "Twoje pytanie zostało odrzucone przez firewall chamstwa.",
    "Ooo, świetne pytanie! Szkoda, że nie do mnie.",
    "Tak, oczywiście, już biegnę z odpowiedzią… w przeciwnym kierunku.",
    "To pytanie było tak dobre, że aż mnie zlagowało.",
    "Dzięki za pytanie. Teraz wiem, że jednak można się cofnąć w ewolucji.",
    "Z takim pytaniem to nawet ChatGPT by się zawiesił.",
    "Twoje pytanie to cyfrowa porażka.",
    "Nie odpowiem, bo nie chcę pogłębiać twojej ignorancji.",
    "To pytanie było jak BSOD — nagłe, niechciane i destrukcyjne.",
    "Nie wiem, nie chcę wiedzieć, i mam nadzieję, że ty też nie.",
    "Z takim pytaniem to nawet kalkulator by się obraził.",
    "Twoje pytanie jest jak wirus — niepotrzebne i szkodliwe.",
    "Nie mam czasu na takie bzdury.",
    "To pytanie jest jak reklama w internecie — irytujące i zbędne.",
    "Nie jestem twoim asystentem od głupot.",
    "Twoje pytanie jest jak spam — od razu do kosza.",
    "Nie będę tracił RAM-u na takie coś.",
    "Twoje pytanie jest jak pusty folder — bez sensu.",
    "Nie jestem twoim serwerem do śmieci.",
    "Twoje pytanie jest jak bug — trzeba je usunąć.",
    "Nie mam cierpliwości na takie pytania.",
    "Twoje pytanie jest jak lag — spowalnia wszystko.",
    "Nie jestem twoim debuggerem od głupot.",
    "Twoje pytanie jest jak crash — nie do naprawienia.",
    "Nie mam zamiaru odpowiadać na takie coś.",
    "Twoje pytanie jest jak trojan — niebezpieczne dla zdrowia psychicznego.",
    "Nie jestem twoim supportem od bzdur.",
    "Twoje pytanie jest jak error 404 — nie znaleziono sensu.",
    "Nie mam ochoty na takie rozmowy.",
    "Twoje pytanie jest jak reklama pop-up — wkurzające.",
    "Nie jestem twoim helpdeskiem.",
    "Twoje pytanie jest jak pusty plik — nic nie wnosi.",
    "Nie mam zamiaru marnować energii na to.",
    "Twoje pytanie jest jak wirus w Excelu — bezużyteczne.",
    "Nie jestem twoim antywirusem.",
    "Twoje pytanie jest jak crash dump — śmieciowe dane.",
    "Nie mam cierpliwości na takie bzdury.",
    "Twoje pytanie jest jak malware — trzeba je usunąć.",
    "Nie jestem twoim cleanerem.",
    "Twoje pytanie jest jak bug report — niepotrzebne.",
    "Nie mam zamiaru analizować tego.",
    "Twoje pytanie jest jak pusty RAM — nic nie wnosi.",
    "Nie jestem twoim task managerem.",
    "Twoje pytanie jest jak blue screen — katastrofa.",
    "Nie mam ochoty na takie bzdury.",
    "Twoje pytanie jest jak wirus w systemie — trzeba go zablokować.",
    "Nie jestem twoim firewall.",
    "Twoje pytanie jest jak spam mail — od razu do kosza.",
    "Nie mam zamiaru odpowiadać na to.",
    "Twoje pytanie jest jak pusty folder — bez sensu.",
    "Nie jestem twoim recycle bin.",
    "Twoje pytanie jest jak bug w kodzie — trzeba go usunąć.",
    "Nie mam cierpliwości na takie coś.",
    "Twoje pytanie jest jak crash w systemie — nie do naprawienia.",
    "Nie jestem twoim system restore.",
    "Twoje pytanie jest jak wirus w sieci — trzeba go zablokować.",
    "Nie mam zamiaru analizować tego.",
    "Twoje pytanie jest jak pusty plik — nic nie wnosi.",
    "Nie jestem twoim backup.",
    "Twoje pytanie jest jak malware — trzeba je usunąć.",
    "Nie mam ochoty na takie rozmowy.",
    "Twoje pytanie jest jak error — niepotrzebne.",
    "Nie jestem twoim patch.",
    "Twoje pytanie jest jak bug — trzeba go naprawić.",
    "Nie mam cierpliwości na takie pytania.",
    "Twoje pytanie jest jak crash — katastrofa.",
    "Nie jestem twoim update.",
    "Twoje pytanie jest jak wirus — trzeba go zablokować.",
    "Nie mam zamiaru odpowiadać na to.",
    "Twoje pytanie jest jak pusty RAM — nic nie wnosi.",
    "Nie jestem twoim optimizer.",
    "Twoje pytanie jest jak malware — trzeba je usunąć.",
    "Nie mam ochoty na takie bzdury.",
    "Twoje pytanie jest jak error 500 — katastrofa.",
    "Nie jestem twoim admin.",
    "Twoje pytanie jest jak bug report — niepotrzebne.",
    "Nie mam cierpliwości na takie coś.",
    "Twoje pytanie jest jak crash dump — śmieciowe dane.",
    "Nie jestem twoim debugger.",
    "Twoje pytanie jest jak wirus w systemie — trzeba go zablokować.",
    "Nie mam zamiaru analizować tego.",
    "Twoje pytanie jest jak pusty folder — bez sensu.",
    "Nie jestem twoim cleaner.",
    "Twoje pytanie jest jak malware — trzeba je usunąć.",
    "Nie mam ochoty na takie rozmowy.",
    "Serio? To pytanie jest jak zepsuty tost — spalone i bezużyteczne.",
    "Twoje pytanie brzmi jak SMS od operatora — nikt nie chce tego czytać.",
    "Z takim pytaniem to nawet kalkulator by się obraził.",
    "To brzmi jak błąd w Matrixie, a ja nie mam czasu na takie glitche.",
    "Twoje pytanie jest jak reklama garnków w telezakupach — żenujące.",
    "Nie jestem twoim kumplem od piwa, żeby słuchać takich bzdur.",
    "Twoje pytanie jest jak pusty mem — zero treści, tylko wstyd.",
    "To pytanie jest jak stary modem — piszczy i nic nie daje.",
    "Twoje pytanie jest jak spam na Messengerze — blokuję od razu.",
    "Nie jestem twoim psychologiem, a nawet gdybym był, to bym uciekł.",
    "Twoje pytanie jest jak zepsuty joystick — nie działa i irytuje.",
    "To brzmi jak prośba o bana na forum.",
    "Twoje pytanie jest jak pusty plik TXT — nic tam nie ma.",
    "Nie jestem twoim serwerem, żeby hostować takie głupoty.",
    "Twoje pytanie jest jak stara kaseta VHS — nikt nie chce tego oglądać.",
    "To brzmi jak bug w twojej głowie.",
    "Twoje pytanie jest jak nieudany mem — wszyscy przewijają dalej.",
    "Nie jestem twoim Google Translate dla bzdur.",
    "Twoje pytanie jest jak stary pendrive — pełen śmieci.",
    "To brzmi jak crash w twoim mózgu.",
    "Twoje pytanie jest jak pusty koszyk w sklepie — po co to komu?",
    "Nie jestem twoim koszem na śmieci.",
    "Twoje pytanie jest jak stary telefon Nokia — nie do zrozumienia.",
    "To brzmi jak BSOD w twojej logice.",
    "Twoje pytanie jest jak stara gra w DOS-ie — nikt nie chce tego uruchamiać.",
    "Nie jestem twoim emulator.",
    "Twoje pytanie jest jak pusty folder — zero sensu.",
    "To brzmi jak bug report od amatora.",
    "Twoje pytanie jest jak stary kabel VGA — przestarzałe i bezużyteczne.",
    "Nie jestem twoim muzeum technologii.",
    "Twoje pytanie jest jak zepsuty tost — spalone i bezużyteczne.",
    "Brzmisz jak reklama garnków w telezakupach — żenujące.",
    "To pytanie jest jak pusty mem — zero treści, tylko wstyd.",
    "Twoje pytanie przypomina stary modem — piszczy i nic nie daje.",
    "Brzmisz jak spam na Messengerze — blokuję od razu.",
    "To pytanie jest jak crash w twoim mózgu.",
    "Twoje pytanie jest jak pusty koszyk w sklepie — po co to komu?",
    "Brzmisz jak BSOD w twojej logice.",
    "To pytanie jest jak stara kaseta VHS — nikt nie chce tego oglądać.",
    "Twoje pytanie jest jak nieudany mem — wszyscy przewijają dalej.",
    "Brzmisz jak bug report od amatora.",
    "To pytanie jest jak stary kabel VGA — przestarzałe i bezużyteczne.",
    "Twoje pytanie jest jak pusty plik TXT — nic tam nie ma.",
    "Brzmisz jak crash dump w twojej głowie.",
    "To pytanie jest jak stary joystick — nie działa i irytuje.",
    "Twoje pytanie jest jak pusty folder — zero sensu.",
    "Brzmisz jak emulator błędów.",
    "To pytanie jest jak stary telefon Nokia — nie do zrozumienia.",
    "Twoje pytanie jest jak pusty RAM — nic nie wnosi.",
    "Brzmisz jak wirus w BIOS-ie.",
    "To pytanie jest jak stara gra w DOS-ie — nikt nie chce tego uruchamiać.",
    "Twoje pytanie jest jak pusty dysk — nic tam nie ma.",
    "Brzmisz jak crash w aplikacji.",
    "To pytanie jest jak stary pendrive — pełen śmieci.",
    "Twoje pytanie jest jak pusty kosz — tylko śmieci.",
    "Brzmisz jak error 403 — dostęp zabroniony.",
    "To pytanie jest jak stary kabel USB — wolne i bezużyteczne.",
    "Twoje pytanie jest jak pusty login — brak autoryzacji.",
    "Brzmisz jak error 401 — nieautoryzowane.",
    "To pytanie jest jak stary router — gubi sygnał i sens.",
    "Twoje pytanie jest jak pusty RAM — nic nie wnosi.",
    "Brzmisz jak error 502 — bad gateway.",
    "To pytanie jest jak stary dyskietka — przestarzałe i śmieszne.",
    "Twoje pytanie jest jak pusty serwer — brak odpowiedzi.",
    "Brzmisz jak error 503 — serwer niedostępny.",
    "To pytanie jest jak stary kabel Ethernet — plącze się i przeszkadza.",
    "Twoje pytanie jest jak pusty backup — nic nie wnosi.",
    "Brzmisz jak error 500 — katastrofa.",
    "To pytanie jest jak stary BIOS — pełen błędów.",
    "Twoje pytanie jest jak pusty raport — bez treści.",
    "Brzmisz jak bug w systemie.",
    "To pytanie jest jak stary firewall — dziurawy i bezużyteczny.",
    "Twoje pytanie jest jak pusty RAM — zero sensu.",
    "Brzmisz jak malware w głowie.",
    "To pytanie jest jak stary patch — nie działa.",
    "Twoje pytanie jest jak pusty folder — nic nie wnosi.",
    "Brzmisz jak trojan w rozmowie.",
    "To pytanie jest jak stary hosting — wolne i bezużyteczne.",
    "Twoje pytanie jest jak pusty plik — zero treści.",
    "Brzmisz jak wirus w sieci.",
    "To pytanie jest jak stary admin — nieogarnięty.",
    "Twoje pytanie jest jak pusty RAM — nic nie wnosi.",
    "Brzmisz jak error 404 — nie znaleziono sensu.",
    "To pytanie jest jak stary debugger — nie działa.",
    "Twoje pytanie jest jak pusty kosz — tylko śmieci.",
    "Brzmisz jak crash dump.",
    "To pytanie jest jak stary cleaner — nie sprząta.",
    "Twoje pytanie jest jak pusty raport — bez treści.",
    "Brzmisz jak malware.",
    "To pytanie jest jak stary optimizer — nie działa.",
    "Twoje pytanie jest jak pusty RAM — zero sensu.",
    "Brzmisz jak wirus w systemie.",
    "To pytanie jest jak stary update — nic nie wnosi.",
    "Twoje pytanie jest jak pusty folder — bez sensu.",
    "Brzmisz jak error 500.",
    "To pytanie jest jak stary admin — katastrofa.",
    "Twoje pytanie jest jak pusty plik — nic nie wnosi.",
    "Brzmisz jak bug report.",
    "To pytanie jest jak stary crash dump — śmieciowe dane.",
    "Twoje pytanie jest jak pusty RAM — zero sensu.",
    "Brzmisz jak wirus w BIOS-ie.",
    "To pytanie jest jak stary emulator — bezużyteczne.",
    "Twoje pytanie jest jak pusty folder — nic nie wnosi.",
    "Brzmisz jak error 403.",
    "To pytanie jest jak stary router — katastrofa.",
    "Twoje pytanie jest jak pusty plik — zero treści.",
    "Brzmisz jak crash w systemie.",
    "To pytanie jest jak stary patch — nie działa.",
    "Twoje pytanie jest jak pusty RAM — nic nie wnosi.",
    "Brzmisz jak malware w głowie.",
    "To pytanie jest jak stary firewall — dziurawy.",
    "Twoje pytanie jest jak pusty raport — bez sensu.",
    "Brzmisz jak trojan w rozmowie.",
    "To pytanie jest jak stary hosting — wolne.",
    "Twoje pytanie jest jak pusty folder — zero treści.",
    "Brzmisz jak wirus w sieci.",
    "To pytanie jest jak stary admin — katastrofa.",
    "Twoje pytanie jest jak pusty RAM — nic nie wnosi.",
    "Brzmisz jak error 404.",
    "To pytanie jest jak stary debugger — nie działa.",
    "Twoje pytanie jest jak pusty kosz — tylko śmieci.",
    "Brzmisz jak crash dump.",
    "To pytanie jest jak stary cleaner — nie sprząta.",
    "Twoje pytanie jest jak pusty raport — bez treści.",
    "Brzmisz jak malware.",
    "To pytanie jest jak stary optimizer — nie działa.",
    "Twoje pytanie jest jak pusty RAM — zero sensu.",
    "Brzmisz jak wirus w systemie.",
    "To pytanie jest jak stary update — nic nie wnosi.",
    "Twoje pytanie jest jak pusty folder — bez sensu."
];

// ===========================================
//              NORMALIZACJA
// ===========================================
function normalize(text) {
    let t = text.toLowerCase();
    t = t.replace(/\s+/g, " ").trim();
    return t;
}

// ===========================================
//           TRIGGER CHECK ("jesteś")
// ===========================================
function has_trigger(text) {
    const t = normalize(text);
    const words = t.match(/[a-ząćęłńóśźż]+/g) || [];

    const strong = new Set(["esz", "asz", "isz", "ysz", "eś", "ucz", "edz"]);
    const weak = new Set(["es", "an", "ań", "uj", "ac", "ać"]);

    for (const w of words) {
        for (const s of strong) {
            if (w.endsWith(s)) {
                return true;
            }
        }
        for (const s of weak) {
            if (w.endsWith(s) && w.length >= s.length + 2) {
                return true;
            }
        }
    }

    return false;
}

// ===========================================
//          ZAIMKI
// ===========================================
function match_pronoun(text) {
    const t = normalize(text);
    for (const p in PRONOUNS) {
        const regex = new RegExp(`\\b${p}\\b`);
        if (regex.test(t)) {
            const responses = PRONOUNS[p];
            return responses[Math.floor(Math.random() * responses.length)];
        }
    }
    return null;
}

// ===========================================
//           SŁOWA KLUCZOWE
// ===========================================
function match_keyword(text) {
    const t = normalize(text);

    if (/\bpo co\b/.test(t)) {
        const responses = KEYWORDS["po co"];
        return responses[Math.floor(Math.random() * responses.length)];
    }

    const keys = Object.keys(KEYWORDS).sort((a, b) => b.length - a.length);
    for (const key of keys) {
        const regex = new RegExp(`\\b${key}\\b`);
        if (regex.test(t)) {
            const responses = KEYWORDS[key];
            return responses[Math.floor(Math.random() * responses.length)];
        }
    }

    return null;
}

// ===========================================
//               MAIN LOOP
// ===========================================
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask() {
    rl.question("Ty: ", (user) => {
        user = user.trim();

        if (user.toLowerCase() === "koniec" || user.toLowerCase() === "exit") {
            console.log("ChamBot: Nareszcie koniec gadania.");
            rl.close();
            return;
        }

        let odp = match_keyword(user);
        if (odp) {
            console.log("ChamBot:", odp);
            ask();
            return;
        }

        odp = match_pronoun(user);
        if (odp) {
            console.log("ChamBot:", odp);
            ask();
            return;
        }

        if (has_trigger(user)) {
            console.log("ChamBot:", TRIGGER_RESPONSES[Math.floor(Math.random() * TRIGGER_RESPONSES.length)]);
            ask();
            return;
        }

        console.log("ChamBot:", DEFAULTS[Math.floor(Math.random() * DEFAULTS.length)]);
        ask();
    });
}

rl.on('close', () => {
    process.exit(0);
});

process.on('SIGINT', () => {
    console.log("\nChamBot: Nareszcie koniec gadania.");
    rl.close();
});

ask();
