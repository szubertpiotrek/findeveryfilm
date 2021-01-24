// @ts-nocheck
import { createServer } from "miragejs";

export const backendCreateServer = () =>
  createServer({
    routes() {
      this.namespace = "api";
      this.timing = 0;

      this.get("/films", {
        page: 1,
        results: [
          {
            adult: false,
            backdrop_path: "/hziiv14OpD73u9gAak4XDDfBKa2.jpg",
            genre_ids: [12, 14],
            id: 671,
            original_language: "en",
            original_title: "Harry Potter and the Philosopher's Stone",
            overview:
              "Harry Potter dowiaduje się, w dniu swoich 11-tych urodzin, że jest osieroconym dzieckiem dwojga potężnych czarodziejów i sam posiada magiczne zdolności. W Szkole Magii i Czarodziejstwa w Hogwarcie przeżywa największą przygodę swojego życia. Uczy się latania na miotle i różnych pożytecznych zaklęć. Przeżywa także chwile grozy rozwiązując zagadkę tajemniczego kamienia filozoficznego i tocząc walkę z potężnym i złym czarodziejem-Lordem Voldermort.",
            popularity: 178.689,
            poster_path: "/lz1qjw1wDbE2Kj76iTXpGKQSPKD.jpg",
            release_date: "2001-11-16",
            title: "Harry Potter i Kamień Filozoficzny",
            video: false,
            vote_average: 7.9,
            vote_count: 19293,
          },
          {
            adult: false,
            backdrop_path: "/8f9dnOtpArDrOMEylpSN9Sc6fuz.jpg",
            genre_ids: [12, 14, 10751],
            id: 674,
            original_language: "en",
            original_title: "Harry Potter and the Goblet of Fire",
            overview:
              "W Hogwarcie rozgrywa się Turniej Trójmagiczny, na który przybywają uczniowie szkół z Francji i Bułgarii. Zgodnie ze starą tradycją, do turnieju mają być wybrani trzej przedstawiciele, każdej ze szkół. Jednak dziwnym zbiegiem okoliczności do turnieju zostaje wybranych czterech uczestników, w tym i Harry Potter. Odtąd na głównego bohatera czekają trzy zadania, a w związku z nimi wiele niesamowitych i niebezpiecznych przygód.",
            popularity: 158.576,
            poster_path: "/kRGddmzmxXcFZsJcEqVlgXUb29S.jpg",
            release_date: "2005-11-16",
            title: "Harry Potter i Czara Ognia",
            video: false,
            vote_average: 7.8,
            vote_count: 14811,
          },
          {
            adult: false,
            backdrop_path: "/kT8bDEAgEYBKhRJtqM97qTw6uRW.jpg",
            genre_ids: [12, 14],
            id: 767,
            original_language: "en",
            original_title: "Harry Potter and the Half-Blood Prince",
            overview:
              "Lord Voldemort zaciska swoją złowieszczą pętlę wokół świata Mugoli i czarodziejów, a Hogwart przestaje być – jak dawniej - bezpieczną przystanią. Harry podejrzewa, że niebezpieczeństwo może czaić się w samym zamku, ale Dumbledorowi zależy raczej na przygotowaniu go do ostatecznego starcia, które jego zdaniem nastąpi niebawem. Razem usiłują znaleźć broń zdolną skruszyć zapory Voldemorta. Harry’emu coraz bardziej podoba się Ginny...niestety, Dean Thomas jest nią również zainteresowany. Lavender Brown dochodzi do wniosku, że Ron jest jej przeznaczeniem, nie bierze tylko pod uwagę czekoladek Romildy Vane! No i oczywiście Hermiona, przeżywająca męki zazdrości, lecz zdecydowana nie ujawniać uczuć. Gdy romanse kwitną, tylko jeden uczeń pozostaje wyniosły i obojętny. Postanowił wywrzeć swoje niezatarte – choć mroczne – piętno na życiu Akademii. Miłość wisi w powietrzu, lecz za nią czai się dramat i Hogwart być może już nigdy nie będzie taki jak przedtem.",
            popularity: 131.415,
            poster_path: "/z7uo9zmQdQwU5ZJHFpv2Upl30i1.jpg",
            release_date: "2009-07-07",
            title: "Harry Potter i Książę Półkrwi",
            video: false,
            vote_average: 7.7,
            vote_count: 13981,
          },
          {
            adult: false,
            backdrop_path: "/1stUIsjawROZxjiCMtqqXqgfZWC.jpg",
            genre_ids: [12, 14],
            id: 672,
            original_language: "en",
            original_title: "Harry Potter and the Chamber of Secrets",
            overview:
              "Harry powraca do Hogwartu, aby ponownie zmierzyć się z niebezpieczeństwem tym razem zagrażającym także jego najlepszej przyjaciółce. Podczas drugiego roku pobytu w Szkole Magii i Czarodziejststwa młody Potter spotyka starych wrogów, poznaje nowego nauczyciela, odkrywa w sobie nowe zdolności, unika śmierci z rąk domowego skrzata chcącego za wszelką cenę uratować mu życie i wraz z dwójką swoich przyjaciół: Ronem i Hermioną znów udaje mu się rozwiązać trudną zagadkę.",
            popularity: 143.37,
            poster_path: "/csOv5H7R2zdnKaYuTrGVWohmo8d.jpg",
            release_date: "2002-11-13",
            title: "Harry Potter i Komnata Tajemnic",
            video: false,
            vote_average: 7.7,
            vote_count: 15738,
          },
          {
            adult: false,
            backdrop_path: "/vbk5CfaAHOjQPSAcYm6AoRRz2Af.jpg",
            genre_ids: [12, 14],
            id: 673,
            original_language: "en",
            original_title: "Harry Potter and the Prisoner of Azkaban",
            overview:
              "Harry Potter i jego najlepsi przyjaciele Ron i Hermiona, po przerwie letniej powracają do Hogwartu, aby rozpocząć trzeci rok nauki. W tym samym czasie z pilnie strzeżonego więzienia dla czarodziejów ucieka niebezpieczny przestępca - Syriusz Black! Wszystko wskazuję na to, że Black poluje na Harrego. Cały świat czarodziejów rozpoczyna poszukiwania zbiega; z Azkabanu zostają wysłane przerażające istoty - Dementorzy, w celu zabicia przestępcy.",
            popularity: 143.484,
            poster_path: "/v0wMKEEGaNc9evdqGYfIvoWXh24.jpg",
            release_date: "2004-05-31",
            title: "Harry Potter i więzień Azkabanu",
            video: false,
            vote_average: 8,
            vote_count: 15449,
          },
          {
            adult: false,
            backdrop_path: "/pkxPkHOPJjOvzfQOclANEBT8OfK.jpg",
            genre_ids: [12, 14, 9648],
            id: 675,
            original_language: "en",
            original_title: "Harry Potter and the Order of the Phoenix",
            overview:
              "Harry Potter tym razem nie może mieć spokojnych wakacji. Lord Voldemort powrócił, a prasa czarodziejska milczy na ten temat. Na mugolskim osiedlu Little Whinging pojawiają się Dementorzy, a zbzikowana sąsiadka Dursley'ów pani Figg jest charłakiem! W dodatku Harry staje przed całym Wizengamotem za użycie czarów przez nieletniego, a Straż Przednia zabiera go do kwatery głównej Zakonu Feniksa - organizacji powołanej przez Dumbledora do walki z Sam-Wiesz-Kim. Tymczasem w Hogwarcie rządy przejmuje sprzymierzeniec Korneliusza Knota i nauczycielka obrony przed czarną magią profesor Umbridge. Wygląda na to, że nikt nie wierzy Harry'emu i Dumbledorowi, że Lord Voldemort odrodził się na nowo. Kiedy zaatakuje wszystko wyjdzie na jaw, ale czy wtedy nie będzie już za późno?",
            popularity: 123.219,
            poster_path: "/g6n8G0xPnBVUIKKK41sNmbZB5h4.jpg",
            release_date: "2007-06-28",
            title: "Harry Potter i Zakon Feniksa",
            video: false,
            vote_average: 7.7,
            vote_count: 14200,
          },
          {
            adult: false,
            backdrop_path: "/n5A7brJCjejceZmHyujwUTVgQNC.jpg",
            genre_ids: [14, 12],
            id: 12445,
            original_language: "en",
            original_title: "Harry Potter and the Deathly Hallows: Part 2",
            overview:
              "W drugiej części widowiskowego zakończenia serii walka sił dobra z siłami zła świata czarodziejów przeistacza się w otwartą wojnę. Stawka nigdy nie była tak wysoka; nikt nie może czuć się bezpieczny. Być może w trakcie nieuchronnie zbliżającej się ostatecznej rozgrywki z Lordem Voldemortem to Harry Potter będzie zmuszony do ostatecznego poświęcenia. Tak kończy się cała opowieść.",
            popularity: 131.772,
            poster_path: "/da22ZBmrDOXOCDRvr8Gic8ldhv4.jpg",
            release_date: "2011-07-07",
            title: "Harry Potter i Insygnia Śmierci: Część II",
            video: false,
            vote_average: 8.1,
            vote_count: 15035,
          },
          {
            adult: false,
            backdrop_path: "/AqLcLsGGTzAjm3pCCq0CZCQrp6m.jpg",
            genre_ids: [12, 14],
            id: 12444,
            original_language: "en",
            original_title: "Harry Potter and the Deathly Hallows: Part 1",
            overview:
              "Harry, Ron i Hermiona wyruszają z niebezpieczną misją, by odnaleźć i zniszczyć horkruksy, w których tkwi tajemnica siły Voldemorta. Zdani tylko na siebie, ścigani teraz bardziej niż kiedykolwiek, mogą polegać tylko na sobie, a Siły Ciemności, które są blisko, próbują ich rozdzielić.",
            popularity: 117.334,
            poster_path: "/iGoXIpQb7Pot00EEdwpwPajheZ5.jpg",
            release_date: "2010-10-17",
            title: "Harry Potter i Insygnia Śmierci: Część I",
            video: false,
            vote_average: 7.8,
            vote_count: 13993,
          },
          {
            adult: false,
            backdrop_path: "/22esNAKvdcHaeyzhXD5uhTjDwTK.jpg",
            genre_ids: [28, 80, 53],
            id: 984,
            original_language: "en",
            original_title: "Dirty Harry",
            overview:
              "W swojej sztandarowej roli Clint Eastwood wcielił się w postać przebiegłego policyjnego detektywa z San Francisco, który jest najlepszy w tym co robi. Bezwzględny snajper Scorpio (Andrew Robinson) zabił już dwoje niewinnych ludzi. Harry Callahan zamierza się nim zająć... w taki czy inny sposób... bez względu na przepisy.",
            popularity: 22.877,
            poster_path: "/cr0nai1uS8Qyc3zoirMIj8wzhM9.jpg",
            release_date: "1971-07-14",
            title: "Brudny Harry",
            video: false,
            vote_average: 7.5,
            vote_count: 1485,
          },
          {
            adult: false,
            backdrop_path: "/AhmRmdlu7GYdiucfZzVCGyP8ICf.jpg",
            genre_ids: [53, 80, 18, 28],
            id: 25941,
            original_language: "en",
            original_title: "Harry Brown",
            overview:
              "Dynamiczny film o krwawej zemście w stylu „Uprowadzonej”. Miasto, w którym mieszka Harry Brown (Michael Caine), były żołnierz piechoty morskiej, pogrąża się we wszechogarniającej przemocy. Grupy chuliganów atakują przechodniów i wprowadzają terror. Tego stanu rzeczy nie może znieść Leonard, przyjaciel Harry’ego. Podczas próby powstrzymania bandytów dochodzi do bójki i mężczyzna zostaje zabity. Zatrzymani za morderstwo młodzi przestępcy zostają jednak wypuszczeni przez policję na wolność. Harry bierze sprawy w swoje ręce. Bandytów czeka bezlitosna zemsta.",
            popularity: 10.949,
            poster_path: "/tHynkXrurd8qL57fbP5xVpKDh1l.jpg",
            release_date: "2009-11-11",
            title: "Harry Brown",
            video: false,
            vote_average: 6.8,
            vote_count: 662,
          },
          {
            adult: false,
            backdrop_path: "/cXU4zg2aKglQrMOLokHLbnxwkGV.jpg",
            genre_ids: [35, 10749, 18],
            id: 639,
            original_language: "en",
            original_title: "When Harry Met Sally...",
            overview:
              "Historia dwunastoletniego związku dwojga młodych ludzi, których drogi po skończeniu studiów rozchodzą się. Po pięciu latach przypadkowo spotykają się w samolocie. Początkowa niechęć z wolna przeobraża się w przyjaźń. Po wielu wspólnie spędzonych chwilach ciężko jest im stwierdzić czy dalej są tylko przyjaciółmi, czy łączy ich coś więcej.",
            popularity: 17.209,
            poster_path: "/t7vXcgNGnZ8czPov0UkQI7o3QRn.jpg",
            release_date: "1989-01-12",
            title: "Kiedy Harry poznał Sally",
            video: false,
            vote_average: 7.4,
            vote_count: 2709,
          },
          {
            adult: false,
            backdrop_path: "/4LOxoeZWt5wr9mooxEZRFK96lDd.jpg",
            genre_ids: [99],
            id: 483898,
            original_language: "en",
            original_title: "50 Greatest Harry Potter Moments",
            overview: "",
            popularity: 46.37,
            poster_path: "/g1xiBoLD6v3ZaXPa4QtuXiQeYKW.jpg",
            release_date: "2011-07-27",
            title: "50 Greatest Harry Potter Moments",
            video: false,
            vote_average: 7.8,
            vote_count: 22,
          },
          {
            adult: false,
            backdrop_path: "/coJLkvK5KZQoMl8vGqcpgAZYroi.jpg",
            genre_ids: [35, 18],
            id: 2639,
            original_language: "en",
            original_title: "Deconstructing Harry",
            overview: "",
            popularity: 9.837,
            poster_path: "/2ZkTBt5wunAIIEx6UFtxxLdzkKM.jpg",
            release_date: "1997-12-12",
            title: "Przejrzeć Harry'ego",
            video: false,
            vote_average: 7.4,
            vote_count: 532,
          },
          {
            adult: false,
            backdrop_path: "/hNQ0R4wSaXTUPUQti8FtKLf1HQ6.jpg",
            genre_ids: [35, 80, 9648],
            id: 11718,
            original_language: "en",
            original_title: "Who's Harry Crumb?",
            overview:
              "Harry Crumb należy do największej rodziny prywatnych detektywów. Niestety, przez niezdarność został z niej wyrzucony na 10 lat. W tym czasie interes został przejęty przez Eliota Draisena. Gdy Harry powraca, Eliot zleca mu sprawę porwanego dziecka. Robi to, by móc uciec z żoną klienta. Za pomocą przebrań Harry chce rozwiązać sprawę i udowodnić, że należy do rodziny Crumbów.",
            popularity: 9.261,
            poster_path: "/qf7LNguEfBHF9WRs9sKGPBaQYEt.jpg",
            release_date: "1989-02-03",
            title: "Kim jest Harry Crumb?",
            video: false,
            vote_average: 5.7,
            vote_count: 178,
          },
          {
            adult: false,
            backdrop_path: "/71gHxSX2Tzg9mi1VYRdwCECfmpj.jpg",
            genre_ids: [35, 14, 10751],
            id: 8989,
            original_language: "en",
            original_title: "Harry and the Hendersons",
            overview:
              "George, Nancy oraz ich dzieci, Sarah i Ernie, wracają samochodem z wakacji. Przejeżdżając przez las, potrącają na szosie wielkie, kudłate zwierzę. Przekonani, że stworzenie jest martwe, przywożą je do domu, by powiadomić o wypadku nadleśnictwo. Wkrótce okazuje się, że stwór żyje i szybko wraca do sił. Hendersonowie przywiązują się do łagodnej istoty, której nadają imię Harry. Pewnego dnia olbrzym ucieka. W mieście wybucha panika. Hendersonowie próbują za wszelką cenę uratować włochatego przyjaciela, którego ściga myśliwy.",
            popularity: 10.607,
            poster_path: "/7bmtLtiei9WLe8wY8hKk1Smf65z.jpg",
            release_date: "1987-06-05",
            title: "Harry i Hendersonowie",
            video: false,
            vote_average: 5.9,
            vote_count: 426,
          },
          {
            adult: false,
            backdrop_path: "/nKM71iyHoXG2DUBXml0mNwPChvg.jpg",
            genre_ids: [10749, 10770, 35],
            id: 647325,
            original_language: "en",
            original_title: "The Thing About Harry",
            overview: "",
            popularity: 14.686,
            poster_path: "/sdn5NdFMcsub3QUwlovOA9fPJoW.jpg",
            release_date: "2020-02-15",
            title: "The Thing About Harry",
            video: false,
            vote_average: 7.9,
            vote_count: 88,
          },
          {
            adult: false,
            backdrop_path: "/bDqchWjPhko0XvRBx4pErPMk0Hv.jpg",
            genre_ids: [10749],
            id: 518527,
            original_language: "en",
            original_title: "Harry & Meghan: A Royal Romance",
            overview: "",
            popularity: 13.107,
            poster_path: "/2ODzSaM8EKF28mGjNTH3ptb3BJu.jpg",
            release_date: "2018-05-13",
            title: "Harry & Meghan: A Royal Romance",
            video: false,
            vote_average: 6.9,
            vote_count: 150,
          },
          {
            adult: false,
            backdrop_path: "/kagW7NjLnnWzF7BFX8CfNUobQWM.jpg",
            genre_ids: [18, 10749],
            id: 27091,
            original_language: "en",
            original_title: "Harry + Max",
            overview: "",
            popularity: 5.998,
            poster_path: "/nIamsnmqYgRLuosJFlWGiCMXS8A.jpg",
            release_date: "2004-01-17",
            title: "Harry + Max",
            video: false,
            vote_average: 5.6,
            vote_count: 18,
          },
          {
            adult: false,
            backdrop_path: "/eAPj43jprYqhQvqzaP7B1LL7B0N.jpg",
            genre_ids: [12, 35, 18, 10749],
            id: 42448,
            original_language: "en",
            original_title: "Harry and Tonto",
            overview: "",
            popularity: 5.275,
            poster_path: "/5aCrpRRJJBPZ0QqNuMmW2Rzp9FQ.jpg",
            release_date: "1974-08-12",
            title: "Harry and Tonto",
            video: false,
            vote_average: 7.1,
            vote_count: 51,
          },
          {
            adult: false,
            backdrop_path: "/4PHbeHC7q7XJk44TsbAUwDS2rv1.jpg",
            genre_ids: [18],
            id: 91767,
            original_language: "en",
            original_title: "Harry & Son",
            overview:
              "Harry (Paul Newman), mężczyzna w średnim wieku, ma duże problemy z komunikacją ze swym nastoletnim synem, Howardem (Robby Benson). Podczas gdy Harry chce, aby Howard znalazł sobie pracę i zarabiał na swoje życie, wrażliwy chłopak woli wybrać karierę pisarską. Howard stara się przekonac ojca do własnej decyzji, ale dochodzi do wniosku, że musi sam wziąć się za własne życie. W dodatku jego dziewczyna zachodzi w ciążę...",
            popularity: 5.058,
            poster_path: "/kl9yUlWRBEyXNGIXav1WIRBy5te.jpg",
            release_date: "1984-03-02",
            title: "Harry i syn",
            video: false,
            vote_average: 6.1,
            vote_count: 39,
          },
        ],
        total_pages: 22,
        total_results: 434,
      });

      this.get("/filmDetails", {
        adult: false,
        backdrop_path: "/hziiv14OpD73u9gAak4XDDfBKa2.jpg",
        belongs_to_collection: {
          id: 1241,
          name: "Harry Potter - Kolekcja",
          poster_path: "/1GPJWb8ctSHWLn8QvpIFuYv2SG4.jpg",
          backdrop_path: "/wfnMt6LGqYHcNyOfsuusw5lX3bL.jpg",
        },
        budget: 125000000,
        genres: [
          { id: 12, name: "Przygodowy" },
          { id: 14, name: "Fantasy" },
        ],
        homepage:
          "https://www.warnerbros.com/movies/harry-potter-and-sorcerers-stone/",
        id: 671,
        imdb_id: "tt0241527",
        original_language: "en",
        original_title: "Harry Potter and the Philosopher's Stone",
        overview:
          "Harry Potter dowiaduje się, w dniu swoich 11-tych urodzin, że jest osieroconym dzieckiem dwojga potężnych czarodziejów i sam posiada magiczne zdolności. W Szkole Magii i Czarodziejstwa w Hogwarcie przeżywa największą przygodę swojego życia. Uczy się latania na miotle i różnych pożytecznych zaklęć. Przeżywa także chwile grozy rozwiązując zagadkę tajemniczego kamienia filozoficznego i tocząc walkę z potężnym i złym czarodziejem-Lordem Voldermort.",
        popularity: 165.296,
        poster_path: "/wNRk1vec98vfAQa2YdZOt7h0DGe.jpg",
        production_companies: [
          {
            id: 174,
            logo_path: "/ky0xOc5OrhzkZ1N6KyUxacfQsCk.png",
            name: "Warner Bros. Pictures",
            origin_country: "US",
          },
          {
            id: 437,
            logo_path: "/nu20mtwbEIhUNnQ5NXVhHsNknZj.png",
            name: "Heyday Films",
            origin_country: "GB",
          },
          {
            id: 436,
            logo_path: "/A7WCkG3F0NFvjGCwUnclpGdIu9E.png",
            name: "1492 Pictures",
            origin_country: "US",
          },
        ],
        production_countries: [
          { iso_3166_1: "GB", name: "United Kingdom" },
          { iso_3166_1: "US", name: "United States of America" },
        ],
        release_date: "2001-11-16",
        revenue: 976475550,
        runtime: 153,
        spoken_languages: [
          { english_name: "English", iso_639_1: "en", name: "English" },
        ],
        status: "Released",
        tagline: "Podróż poza granice wyobraźni.",
        title: "Harry Potter i Kamień Filozoficzny",
        video: false,
        vote_average: 7.9,
        vote_count: 19389,
      });

      this.get("/filmActors", {
        id: 671,
        cast: [
          {
            adult: false,
            gender: 2,
            id: 10980,
            known_for_department: "Acting",
            name: "Daniel Radcliffe",
            original_name: "Daniel Radcliffe",
            popularity: 8.892,
            profile_path: "/j0A7iK2wIQ1NWwJVVaTegMmKgR.jpg",
            cast_id: 27,
            character: "Harry Potter",
            credit_id: "52fe4267c3a36847f801be91",
            order: 0,
          },
          {
            adult: false,
            gender: 2,
            id: 10989,
            known_for_department: "Acting",
            name: "Rupert Grint",
            original_name: "Rupert Grint",
            popularity: 7.203,
            profile_path: "/iFlkpTaOF6fGLqxz8b0PhI0i0zN.jpg",
            cast_id: 37,
            character: "Ron Weasley",
            credit_id: "52fe4267c3a36847f801beb9",
            order: 1,
          },
          {
            adult: false,
            gender: 1,
            id: 10990,
            known_for_department: "Acting",
            name: "Emma Watson",
            original_name: "Emma Watson",
            popularity: 13.464,
            profile_path: "/dMbd2Rx9ZD5Gl9VXAkGcIKGrAxJ.jpg",
            cast_id: 49,
            character: "Hermione Granger",
            credit_id: "531736ea92514138c00010a3",
            order: 2,
          },
          {
            adult: false,
            gender: 2,
            id: 194,
            known_for_department: "Acting",
            name: "Richard Harris",
            original_name: "Richard Harris",
            popularity: 5.582,
            profile_path: "/feNslXF8WLVfpouXyGdKvCYBLht.jpg",
            cast_id: 23,
            character: "Albus Dumbledore",
            credit_id: "52fe4267c3a36847f801be81",
            order: 3,
          },
          {
            adult: false,
            gender: 2,
            id: 10993,
            known_for_department: "Acting",
            name: "Tom Felton",
            original_name: "Tom Felton",
            popularity: 6.08,
            profile_path: "/bg5TcioIqc5Kt6CE609wXziZ9Cm.jpg",
            cast_id: 41,
            character: "Draco Malfoy",
            credit_id: "52fe4267c3a36847f801bec9",
            order: 4,
          },
          {
            adult: false,
            gender: 2,
            id: 4566,
            known_for_department: "Acting",
            name: "Alan Rickman",
            original_name: "Alan Rickman",
            popularity: 9.813,
            profile_path: "/7tADZs4ILE93oJ5pAh6mKQFEq2m.jpg",
            cast_id: 44,
            character: "Severus Snape",
            credit_id: "52fe4267c3a36847f801bed5",
            order: 5,
          },
          {
            adult: false,
            gender: 2,
            id: 1923,
            known_for_department: "Acting",
            name: "Robbie Coltrane",
            original_name: "Robbie Coltrane",
            popularity: 6.109,
            profile_path: "/jOHs3xvlwRiiG2CLtso5zzmGCXg.jpg",
            cast_id: 25,
            character: "Rubeus Hagrid",
            credit_id: "52fe4267c3a36847f801be89",
            order: 6,
          },
          {
            adult: false,
            gender: 1,
            id: 10978,
            known_for_department: "Acting",
            name: "Maggie Smith",
            original_name: "Maggie Smith",
            popularity: 4.103,
            profile_path: "/pxJSXL9NELIsawroTYNQOt5JlZz.jpg",
            cast_id: 24,
            character: "Minerva McGonagall",
            credit_id: "52fe4267c3a36847f801be85",
            order: 7,
          },
          {
            adult: false,
            gender: 2,
            id: 10983,
            known_for_department: "Acting",
            name: "Richard Griffiths",
            original_name: "Richard Griffiths",
            popularity: 3.202,
            profile_path: "/3xJvWe2qoWJZUQ3BdWdZdMT4CvB.jpg",
            cast_id: 30,
            character: "Vernon Dursley",
            credit_id: "52fe4267c3a36847f801be9d",
            order: 8,
          },
          {
            adult: false,
            gender: 2,
            id: 10985,
            known_for_department: "Acting",
            name: "Ian Hart",
            original_name: "Ian Hart",
            popularity: 4.76,
            profile_path: "/xMC8aPDwhEZcjRHEFcgytSr3BzM.jpg",
            cast_id: 32,
            character: "Professor Quirrell/Voldemort",
            credit_id: "52fe4267c3a36847f801bea5",
            order: 9,
          },
          {
            adult: false,
            gender: 1,
            id: 10981,
            known_for_department: "Acting",
            name: "Fiona Shaw",
            original_name: "Fiona Shaw",
            popularity: 6.277,
            profile_path: "/imZ9Ad2RIPmxHZjeflF9po4WVfO.jpg",
            cast_id: 28,
            character: "Petunia Dursley",
            credit_id: "52fe4267c3a36847f801be95",
            order: 10,
          },
          {
            adult: false,
            gender: 2,
            id: 5049,
            known_for_department: "Acting",
            name: "John Hurt",
            original_name: "John Hurt",
            popularity: 11.4,
            profile_path: "/99ZZrx3mJZoxqQeJ2oeurwxBlKf.jpg",
            cast_id: 35,
            character: "Garrick Ollivander",
            credit_id: "52fe4267c3a36847f801beb1",
            order: 11,
          },
          {
            adult: false,
            gender: 2,
            id: 11180,
            known_for_department: "Acting",
            name: "David Bradley",
            original_name: "David Bradley",
            popularity: 3.209,
            profile_path: "/znpkwHitb3pcaJbUmgDqG0YenYp.jpg",
            cast_id: 53,
            character: "Argus Filch",
            credit_id: "55022362c3a3685bab003478",
            order: 12,
          },
          {
            adult: false,
            gender: 2,
            id: 96841,
            known_for_department: "Acting",
            name: "Matthew Lewis",
            original_name: "Matthew Lewis",
            popularity: 2.125,
            profile_path: "/oDF0GxbLmbuZurVwdXvGn8vc78v.jpg",
            cast_id: 43,
            character: "Neville Longbottom",
            credit_id: "52fe4267c3a36847f801bed1",
            order: 13,
          },
          {
            adult: false,
            gender: 2,
            id: 11179,
            known_for_department: "Acting",
            name: "Sean Biggerstaff",
            original_name: "Sean Biggerstaff",
            popularity: 2.498,
            profile_path: "/6g9cQWg3ikD3xboDtyF8qKdpmgl.jpg",
            cast_id: 52,
            character: "Oliver Wood",
            credit_id: "5502218bc3a3685ba6003950",
            order: 14,
          },
          {
            adult: false,
            gender: 2,
            id: 11184,
            known_for_department: "Acting",
            name: "Warwick Davis",
            original_name: "Warwick Davis",
            popularity: 2.939,
            profile_path: "/vUwjgAYcBEcCv0OVAN00qUUXX3V.jpg",
            cast_id: 50,
            character: "Goblin Bank Teller / Filius Flitwick",
            credit_id: "54ecf79cc3a3680be60022eb",
            order: 15,
          },
          {
            adult: false,
            gender: 2,
            id: 10982,
            known_for_department: "Acting",
            name: "Harry Melling",
            original_name: "Harry Melling",
            popularity: 5.263,
            profile_path: "/b0pHwi2MeqxEpeWnF4Llihu53aJ.jpg",
            cast_id: 29,
            character: "Dudley Dursley",
            credit_id: "52fe4267c3a36847f801be99",
            order: 16,
          },
          {
            adult: false,
            gender: 2,
            id: 96851,
            known_for_department: "Acting",
            name: "James Phelps",
            original_name: "James Phelps",
            popularity: 1.22,
            profile_path: "/qt9VZiasqGxRqbOLgSgoHmOGtoy.jpg",
            cast_id: 154,
            character: "Fred Weasley",
            credit_id: "58f1c6b29251412fb9004a38",
            order: 17,
          },
          {
            adult: false,
            gender: 2,
            id: 140368,
            known_for_department: "Acting",
            name: "Oliver Phelps",
            original_name: "Oliver Phelps",
            popularity: 1.936,
            profile_path: "/rBRUVl2AZ1oz5TOSJdSKHLDPsB6.jpg",
            cast_id: 155,
            character: "George Weasley",
            credit_id: "58f1c6bd9251412fb9004a3f",
            order: 18,
          },
          {
            adult: false,
            gender: 2,
            id: 8930,
            known_for_department: "Acting",
            name: "John Cleese",
            original_name: "John Cleese",
            popularity: 4.543,
            profile_path: "/kg63gNYQtGPi2fSNIvCnVAclCbi.jpg",
            cast_id: 51,
            character: "Nearly Headless Nick (Sir Nicolas)",
            credit_id: "55021c2a9251413da800389e",
            order: 19,
          },
          {
            adult: false,
            gender: 2,
            id: 10992,
            known_for_department: "Acting",
            name: "Chris Rankin",
            original_name: "Chris Rankin",
            popularity: 0.781,
            profile_path: "/bGrWreM4CeXWLJ7VulJnXoJfSgj.jpg",
            cast_id: 40,
            character: "Percy Weasley",
            credit_id: "52fe4267c3a36847f801bec5",
            order: 20,
          },
          {
            adult: false,
            gender: 2,
            id: 234923,
            known_for_department: "Acting",
            name: "Alfred Enoch",
            original_name: "Alfred Enoch",
            popularity: 1.62,
            profile_path: "/eEVvPHmxRBcEGqtoTujncmwNDhR.jpg",
            cast_id: 152,
            character: "Dean Thomas",
            credit_id: "57b42075c3a3686f6d004933",
            order: 21,
          },
          {
            adult: false,
            gender: 2,
            id: 234922,
            known_for_department: "Acting",
            name: "Devon Murray",
            original_name: "Devon Murray",
            popularity: 1.363,
            profile_path: "/jlwr3uKGgGmcWq06u2eUEerQ3kG.jpg",
            cast_id: 156,
            character: "Seamus Finnigan",
            credit_id: "58f1c6d89251412fdf00498c",
            order: 22,
          },
          {
            adult: false,
            gender: 2,
            id: 956224,
            known_for_department: "Acting",
            name: "Jamie Waylett",
            original_name: "Jamie Waylett",
            popularity: 0.785,
            profile_path: "/2Eg3ImAsq5c5tNAyJFHcFC1lejf.jpg",
            cast_id: 157,
            character: "Vincent Crabbe",
            credit_id: "58f1c6f49251412fdf00499c",
            order: 23,
          },
          {
            adult: false,
            gender: 2,
            id: 11212,
            known_for_department: "Acting",
            name: "Josh Herdman",
            original_name: "Josh Herdman",
            popularity: 2.106,
            profile_path: "/hebwDG5XsbfMaEaWJ0X6OrvlXwW.jpg",
            cast_id: 158,
            character: "Gregory Goyle",
            credit_id: "58f1c7019251412ff4004a3b",
            order: 24,
          },
          {
            adult: false,
            gender: 1,
            id: 20240,
            known_for_department: "Acting",
            name: "Zoë Wanamaker",
            original_name: "Zoë Wanamaker",
            popularity: 3.434,
            profile_path: "/keFC6KG1ewLW0ZaP7YkmLVECRrQ.jpg",
            cast_id: 45,
            character: "Misses Hooch",
            credit_id: "52fe4267c3a36847f801bed9",
            order: 25,
          },
          {
            adult: false,
            gender: 1,
            id: 477,
            known_for_department: "Acting",
            name: "Julie Walters",
            original_name: "Julie Walters",
            popularity: 3.105,
            profile_path: "/bCTkV2OUgzbJdQEoCk3GesE4DXq.jpg",
            cast_id: 42,
            character: "Molly Weasley",
            credit_id: "52fe4267c3a36847f801becd",
            order: 26,
          },
          {
            adult: false,
            gender: 1,
            id: 10991,
            known_for_department: "Acting",
            name: "Bonnie Wright",
            original_name: "Bonnie Wright",
            popularity: 4.998,
            profile_path: "/xQGPeaIQ6KJXUFbPPW70xKCR5Ee.jpg",
            cast_id: 39,
            character: "Ginny Weasley",
            credit_id: "52fe4267c3a36847f801bec1",
            order: 27,
          },
          {
            adult: false,
            gender: 2,
            id: 871100,
            known_for_department: "Acting",
            name: "Luke Youngblood",
            original_name: "Luke Youngblood",
            popularity: 1.141,
            profile_path: "/9IAkI7agudRLfX1qX0KQYghihtf.jpg",
            cast_id: 160,
            character: "Lee Jordan",
            credit_id: "58f1c7379251412fb1004a5a",
            order: 28,
          },
          {
            adult: false,
            gender: 2,
            id: 10987,
            known_for_department: "Acting",
            name: "Verne Troyer",
            original_name: "Verne Troyer",
            popularity: 1.448,
            profile_path: "/42pTYfAt6qeCNoXeLunIOLSkW3U.jpg",
            cast_id: 34,
            character: "Griphook",
            credit_id: "52fe4267c3a36847f801bead",
            order: 29,
          },
          {
            adult: false,
            gender: 2,
            id: 1643,
            known_for_department: "Acting",
            name: "Adrian Rawlins",
            original_name: "Adrian Rawlins",
            popularity: 1.337,
            profile_path: "/G0PGZqTjenuVTAQiib4ScU7vAI.jpg",
            cast_id: 167,
            character: "James Potter",
            credit_id: "58f1c7b29251412ff4004aa3",
            order: 30,
          },
          {
            adult: false,
            gender: 1,
            id: 10988,
            known_for_department: "Acting",
            name: "Geraldine Somerville",
            original_name: "Geraldine Somerville",
            popularity: 2.665,
            profile_path: "/yVV0D1aet5FWEvfildXToOmcvkg.jpg",
            cast_id: 36,
            character: "Lily Potter",
            credit_id: "52fe4267c3a36847f801beb5",
            order: 31,
          },
          {
            adult: false,
            gender: 1,
            id: 1220119,
            known_for_department: "Acting",
            name: "Elizabeth Spriggs",
            original_name: "Elizabeth Spriggs",
            popularity: 1.009,
            profile_path: "/l7pJk2IkXlb47QXg8Z8xq2vBjc3.jpg",
            cast_id: 153,
            character: "The Fat Lady",
            credit_id: "582600ebc3a368361400b475",
            order: 32,
          },
          {
            adult: false,
            gender: 2,
            id: 19903,
            known_for_department: "Acting",
            name: "Richard Bremmer",
            original_name: "Richard Bremmer",
            popularity: 1.129,
            profile_path: "/f6B04svt1I5WWwWWFd6AIu7YAfG.jpg",
            cast_id: 205,
            character: "Lord Voldemort",
            credit_id: "5bf9eca80e0a263ab3020c05",
            order: 33,
          },
          {
            adult: false,
            gender: 1,
            id: 58778,
            known_for_department: "Acting",
            name: "Nina Young",
            original_name: "Nina Young",
            popularity: 1.742,
            profile_path: "/wHsH06MXZ9KAYAaQBcZnJq8aUfD.jpg",
            cast_id: 169,
            character: "The Grey Lady",
            credit_id: "58f1c7d79251412fa9004a65",
            order: 34,
          },
          {
            adult: false,
            gender: 0,
            id: 10732,
            known_for_department: "Acting",
            name: "Terence Bayler",
            original_name: "Terence Bayler",
            popularity: 0.6,
            profile_path: "/ui0sfTzTnum4IkFVrLdpOsUbJDL.jpg",
            cast_id: 171,
            character: "The Bloody Barron",
            credit_id: "58f1c8049251412fb1004afa",
            order: 35,
          },
          {
            adult: false,
            gender: 2,
            id: 1815748,
            known_for_department: "Acting",
            name: "Harry Taylor",
            original_name: "Harry Taylor",
            popularity: 1.188,
            profile_path: "/tJVi0TZbqUxOHHDUaV2eExKyykC.jpg",
            cast_id: 206,
            character: "Station Guard (uncredited)",
            credit_id: "5bf9edd292514104d201d0a5",
            order: 36,
          },
          {
            adult: false,
            gender: 1,
            id: 1795303,
            known_for_department: "Acting",
            name: "Jean Southern",
            original_name: "Jean Southern",
            popularity: 0.6,
            profile_path: "/cdItrlTcghSBIgQO5JHt27OdPbT.jpg",
            cast_id: 207,
            character: "Dimpled Woman on Train (uncredited)",
            credit_id: "5bf9f09392514104cc01cb75",
            order: 37,
          },
          {
            adult: false,
            gender: 2,
            id: 10655,
            known_for_department: "Acting",
            name: "Leslie Phillips",
            original_name: "Leslie Phillips",
            popularity: 1.771,
            profile_path: "/c4i7qIuX8adXpW1SC4J3Q7HyUVG.jpg",
            cast_id: 48,
            character: "The Sorting Hat (voice)",
            credit_id: "52fe4267c3a36847f801bee1",
            order: 38,
          },
          {
            adult: false,
            gender: 2,
            id: 1261131,
            known_for_department: "Acting",
            name: "Simon Fisher-Becker",
            original_name: "Simon Fisher-Becker",
            popularity: 0.6,
            profile_path: "/wt7FOsSF0DDIkQnsiyQbb9G75QG.jpg",
            cast_id: 170,
            character: "Fat Friar",
            credit_id: "58f1c7e49251412fb5004a31",
            order: 39,
          },
        ],
      });
    },
  });
