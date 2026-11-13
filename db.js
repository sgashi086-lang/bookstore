let books = [
    {
        "name": "Der Codex",
        "author": "Douglas Preston",
        "likes": 2840,
        "liked": false,
        "price": 10.99,
        "publishedYear": 2003,
        "genre": "Thriller",
        "image": "./assets/img/Der_Codex.png",
        "comments": [
            {
                "name": "DschungelFan",
                "comment": "Die Schatzsuche im Dschungel von Honduras war unglaublich packend beschrieben!"
            },
            {
                "name": "AdventureReader",
                "comment": "Ein echtes Abenteuerbuch mit einem tollen Wettlauf gegen die Zeit."
            },
            {
                "name": "SpannungsSucher",
                "comment": "Die Familiendynamik um das Erbe hat der Story eine richtig gute zusätzliche Würze gegeben."
            }
        ]
    },
    {
        "name": "Inferno",
        "author": "Dan Brown",
        "likes": 2950,
        "liked": false,
        "price": 16.00,
        "publishedYear": 2013,
        "genre": "Thriller",
        "image": "./assets/img/Inferno.png",
        "comments": [
            {
                "name": "DanteFan",
                "comment": "Die Einbindung von Dantes Göttlicher Komödie in diese moderne Schnitzeljagd ist absolut meisterhaft."
            },
            {
                "name": "KulturReisender",
                "comment": "Florenz und Venedig wurden so bildhaft beschrieben, dass man sofort dorthin reisen möchte."
            },
            {
                "name": "ScienceThrillerLover",
                "comment": "Das ethische Dilemma am Ende des Buches hat mich noch tagelang intensiv zum Nachdenken gebracht."
            }
        ]
    },
    {
        "name": "Sakrileg ",
        "author": "Dan Brown",
        "likes": 1520,
        "liked": false,
        "price": 15.00,
        "publishedYear": 2003,
        "genre": "Thriller",
        "image": "./assets/img/Sakrileg.png",
        "comments": [
            {
                "name": "KrimiFan99",
                "comment": "Die Rätsel und Symbole waren absolut fesselnd, ich konnte das Buch kaum aus der Hand legen!"
            },
            {
                "name": "HistoryBuff",
                "comment": "Die Mischung aus Kunstgeschichte und rasanter Thriller-Handlung ist einfach genial."
            },
            {
                "name": "PlotTwistLover",
                "comment": "Ein extrem spannendes Buch mit Wendungen, die mich bis zum Schluss überrascht haben."
            }
        ]
    },
    {
        "name": "Permanent Record",
        "author": "Edward Snowden",
        "likes": 4150,
        "liked": false,
        "price": 14.99,
        "publishedYear": 2019,
        "genre": "Biografie",
        "image": "./assets/img/Permanent_Record.png",
        "comments": [
            {
                "name": "PrivacyFirst",
                "comment": "Ein extrem wichtiges Buch, das einem die Augen über das Ausmaß der staatlichen Überwachung öffnet."
            },
            {
                "name": "TechInsider",
                "comment": "Faszinierende Einblicke in die Geheimdienste – verständlich und zugleich wie ein realer Thriller geschrieben."
            },
            {
                "name": "KritischerDenker",
                "comment": "Sein persönlicher Werdegang und die moralischen Beweggründe hinter der Enthüllung sind absolut packend."
            }
        ]
    },
    {
        "name": "Harry Potter und der Halbblutprinz",
        "author": "J.K. Rowling",
        "likes": 5420,
        "liked": false,
        "price": 18.00,
        "publishedYear": 2005,
        "genre": "Fantasy",
        "image": "./assets/img/harry_potter_und_der_halbblutprinz.png",
        "comments": [
            {
                "name": "HogwartsAlumni",
                "comment": "Die düstere Atmosphäre und die Einblicke in Voldemorts Vergangenheit machen diesen Band zu einem der besten der Reihe."
            },
            {
                "name": "Potterhead94",
                "comment": "Das Ende bricht mir jedes Mal aufs Neue das Herz, absolut genial geschrieben."
            }
        ]
    },
    {
        "name": "Der Herr der Ringe: Die Gefährten",
        "author": "J.R.R. Tolkien",
        "likes": 6150,
        "liked": false,
        "price": 19.95,
        "publishedYear": 1954,
        "genre": "Fantasy",
        "image": "./assets/img/Der_Herr_der_Ringe_Die_Gefährten.png",
        "comments": [
            {
                "name": "AuenlandGast",
                "comment": "Ein zeitloses Meisterwerk. Tolkiens Detailreichtum und sein Worldbuilding sind unerreicht."
            },
            {
                "name": "ElbenFreund",
                "comment": "Der epische Beginn einer Reise, die das gesamte Fantasy-Genre für immer geprägt hat."
            }
        ]
    },
    {
        "name": "Eragon - Das Vermächtnis der Drachenreiter",
        "author": "Christopher Paolini",
        "likes": 4820,
        "liked": false,
        "price": 15.00,
        "publishedYear": 2002,
        "genre": "Fantasy",
        "image": "./assets/img/Eragon_Das_Vermächtnis_der_Drachenreiter.png",
        "comments": [
            {
                "name": "SaphiraFan",
                "comment": "Die Bindung zwischen Eragon und Saphira ist einfach wunderschön beschrieben."
            },
            {
                "name": "AlagaesiaWalker",
                "comment": "Ein großartiger Auftakt zu einer epischen Quadrologie, die man als Fantasy-Fan gelesen haben muss."
            },
            {
                "name": "DrachenReiter",
                "comment": "Unglaublich, dass der Autor beim Schreiben dieses Buches erst so jung war. Ein echtes Meisterwerk."
            }
        ]
    },
    {
        "name": "Fear Street - Als das Grauen begann",
        "author": "R.L. Stine",
        "likes": 1850,
        "liked": false,
        "price": 9.99,
        "publishedYear": 1989,
        "genre": "Horror",
        "image": "./assets/img/Fear_Street_Als_das_Grauen_beginnt.png",
        "comments": [
            {
                "name": "NostalgiePur",
                "comment": "Der perfekte Einstieg in die Fear Street Reihe! Düster, spannend und weckt totale Kindheitserinnerungen."
            },
            {
                "name": "ShadysideResident",
                "comment": "R.L. Stine weiß einfach, wie man eine unheimliche Atmosphäre aufbaut. Ein echter Klassiker des Teenie-Horrors."
            },
            {
                "name": "ThrillerMaus",
                "comment": "Kurzweilig, rasant geschrieben und mit einem genialen, unerwarteten Twist am Ende."
            }
        ]
    }
    ,
    {
        "name": "Harry Potter und der Gefangene von Askaban",
        "author": "J.K. Rowling",
        "likes": 5890,
        "liked": false,
        "price": 18.00,
        "publishedYear": 1999,
        "genre": "Fantasy",
        "image": "./assets/img/Harry_Potter_und_der_Gefangene_von_Askaban.png",
        "comments": [
            {
                "name": "MaraudersFan",
                "comment": "Für mich der beste Teil der ganzen Reihe! Die Hintergrundgeschichte der Rumtreiber ist einfach genial."
            },
            {
                "name": "SiriusBlack_Fan",
                "comment": "Der Einstieg von Sirius und Remus bringt so viel Tiefe in die Story. Ich liebe die düstere Atmosphäre."
            },
            {
                "name": "Zeitumkehrer",
                "comment": "Das Finale mit dem Zeitumkehrer war perfekt konstruiert und bis zur letzten Sekunde extrem spannend."
            }
        ]
    }

]


// books.forEach(book => {
//     if (book.price == 18.00) {
//         console.log(book.name);
//     }
// });
