// ==UserScript==
// @name        Online shopping assistant & Automatically query coupons & Save money
// @name:ar     مساعد التسوق عبر الإنترنت & الاستعلام عن القسائم تلقائيًا & توفير المال
// @name:bg     Онлайн асистент за пазаруване & Автоматично търсене на купони & Спестяване на пари
// @name:ckb    یارمەتی کڕینی ئۆنلاین & داواکاری خۆکارانەی کوپۆنەکان & پارە پاشەکەوتکردن
// @name:cs     Online nákupní asistent & Automatické vyhledávání kupónů & Šetřete peníze
// @name:da     Online shoppingassistent & Automatisk søgning efter kuponer & Spar penge
// @name:de     Online-Shopping-Assistent & Automatische Gutscheinsuche & Geld sparen
// @name:el     Βοηθός διαδικτυακών αγορών & Αυτόματη αναζήτηση κουπονιών & Εξοικονόμηση χρημάτων
// @name:en     Online shopping assistant & Automatically query coupons & Save money
// @name:eo     Reta aĉethelpilo & Aŭtomata kuponserĉado & Ŝparu monon
// @name:es     Asistente de compras online & Búsqueda automática de cupones & Ahorrar dinero
// @name:es-419 Asistente de compras en línea & Consulta automática de cupones & Ahorra dinero
// @name:fi     Verkkokauppa-avustaja & Automaattinen kuponkihaku & Säästä rahaa
// @name:fr     Assistant de shopping en ligne & Recherche automatique de coupons & Économiser de l'argent
// @name:fr-CA  Assistant d'achat en ligne & Recherche automatique de coupons & Économiser de l'argent
// @name:he     עוזר קניות אונליין & חיפוש קופונים אוטומטי & לחסוך כסף
// @name:hr     Internetski asistent za kupovinu & Automatsko pretraživanje kupona & Uštedite novac
// @name:hu     Online vásárlási asszisztens & Kuponok automatikus lekérdezése & Pénzmegtakarítás
// @name:id     Asisten belanja online & Pencarian kupon otomatis & Hemat uang
// @name:it     Assistente per lo shopping online & Ricerca automatica di coupon & Risparmiare denaro
// @name:ja     オンラインショッピングアシスタント & クーポンの自動検索 & 節約
// @name:ka     ონლაინ შოპინგ ასისტენტი & ავტომატური კუპონის ძიება & დაზოგეთ ფული
// @name:ko     온라인 쇼핑 도우미 & 쿠폰 자동 검색 & 돈 절약
// @name:nb     Online shoppingassistent & Automatisk kupongsøk & Spar penger
// @name:nl     Online winkelassistent & Automatisch coupons opzoeken & Geld besparen
// @name:pl     Asystent zakupów online & Automatyczne wyszukiwanie kuponów & Oszczędzaj pieniądze
// @name:pt-BR  Assistente de compras online & Pesquisa automática de cupons & Economize dinheiro
// @name:ro     Asistent de cumpărături online & Căutare automată de cupoane & Economisiți bani
// @name:ru     Помощник для онлайн-покупок & Автоматический поиск купонов & Экономия денег
// @name:sk     Online nákupný asistent & Automatické vyhľadávanie kupónov & Šetrite peniaze
// @name:sr     Асистент за онлајн куповину & Аутоматско претраживање купона & Уштедите новац
// @name:sv     Online shoppingassistent & Automatisk kupongsökning & Spara pengar
// @name:th     ผู้ช่วยช้อปปิ้งออนไลน์ & ค้นหาคูปองอัตโนมัติ & ประหยัดเงิน
// @name:tr     Çevrimiçi alışveriş asistanı & Otomatik kupon sorgulama & Para tasarrufu
// @name:uk     Помічник для онлайн-шопінгу & Автоматичний пошук купонів & Економія грошей
// @name:ug     تور سودا سېتىۋېلىش ياردەمچىسى & ئاپتوماتىك كۇپون ئىزدەش & پۇل تېجەش
// @name:vi     Trợ lý mua sắm trực tuyến & Tự động tìm kiếm mã giảm giá & Tiết kiệm tiền
// @description        Automatically search for coupons on popular shopping platforms to help you find the best deals on the products you need, without overspending. Currently supports: Aliexpress, Lazada, eBay, Amazon, and more.
// @description:ar     البحث التلقائي عن القسائم على منصات التسوق الشهيرة لمساعدتك في العثور على أفضل العروض للمنتجات التي تحتاجها، دون إنفاق مبالغ زائدة. يدعم حاليًا: علي إكسبرس، لازادا، إيباي، أمازون والمزيد.
// @description:bg     Автоматично търсене на купони на популярни търговски платформи, за да ви помогне да намерите най-добрите оферти за продуктите, от които се нуждаете, без да харчите прекалено много. В момента поддържа: Aliexpress, Lazada, eBay, Amazon и други.
// @description:ckb    داواکاری خۆکارانەی کوپۆنەکان لە سەردەمی فەرەشەکانەوە بۆ یارمەتی کردنی تۆ لە دۆزینەوەی باشترین بەرهەمهاتەکان بۆ بەرهەمی پێویستەکانت، بێ گەورە کردنی ھەزەرەکان. ئیشکراوی ئێستا: Aliexpress، Lazada، eBay، Amazon و زۆرتر.
// @description:cs     Automatické vyhledávání kupónů na populárních nákupních platformách, které vám pomohou najít nejlepší nabídky pro produkty, které potřebujete, aniž byste přeplatili. Momentálně podporuje: Aliexpress, Lazada, eBay, Amazon a další.
// @description:da     Automatisk søgning efter kuponer på populære shoppingplatforme, der hjælper dig med at finde de bedste tilbud på de produkter, du har brug for, uden at bruge for meget. Understøtter i øjeblikket: Aliexpress, Lazada, eBay, Amazon og mere.
// @description:de     Automatisches Suchen nach Gutscheinen auf beliebten Shopping-Plattformen, um Ihnen zu helfen, die besten Angebote für die Produkte zu finden, die Sie benötigen, ohne zu viel auszugeben. Unterstützt derzeit: Aliexpress, Lazada, eBay, Amazon und mehr.
// @description:el     Αυτόματη αναζήτηση κουπονιών σε δημοφιλείς πλατφόρμες αγορών για να σας βοηθήσει να βρείτε τις καλύτερες προσφορές για τα προϊόντα που χρειάζεστε, χωρίς να ξοδέψετε υπερβολικά. Υποστηρίζει αυτή τη στιγμή: Aliexpress, Lazada, eBay, Amazon και άλλα.
// @description:en     Automatically search for coupons on popular shopping platforms to help you find the best deals on the products you need, without overspending. Currently supports: Aliexpress, Lazada, eBay, Amazon, and more.
// @description:eo     Aŭtomate serĉi kuponojn en popularaj aĉetplatformoj por helpi vin trovi la plej bonajn oferton por la produktoj, kiujn vi bezonas, sen tro elspezi. Nuntempe subtenas: Aliexpress, Lazada, eBay, Amazon kaj aliaj.
// @description:es     Buscar automáticamente cupones en plataformas de compras populares para ayudarte a encontrar las mejores ofertas de los productos que necesitas, sin gastar de más. Actualmente es compatible con: Aliexpress, Lazada, eBay, Amazon y más.
// @description:es-419 Buscar automáticamente cupones en plataformas de compras populares para ayudarte a encontrar las mejores ofertas de los productos que necesitas, sin gastar de más. Actualmente es compatible con: Aliexpress, Lazada, eBay, Amazon y más.
// @description:fi     Automaattinen kuponkien haku suosituilla ostosalustoilla auttaaksesi löytämään parhaat tarjoukset tarvitsemasi tuotteista ilman, että käytät liikaa rahaa. Tällä hetkellä tuetaan: Aliexpress, Lazada, eBay, Amazon ja muita.
// @description:fr     Recherche automatique de coupons sur des plateformes de shopping populaires pour vous aider à trouver les meilleures offres sur les produits dont vous avez besoin, sans trop dépenser. Actuellement pris en charge : Aliexpress, Lazada, eBay, Amazon et plus.
// @description:fr-CA  Recherche automatique de coupons sur des plateformes de shopping populaires pour vous aider à trouver les meilleures offres sur les produits dont vous avez besoin, sans trop dépenser. Actuellement pris en charge : Aliexpress, Lazada, eBay, Amazon et plus.
// @description:he     חיפוש אוטומטי של קופונים בפלטפורמות קניות פופולריות כדי לעזור לך למצוא את ההצעות הטובות ביותר למוצרים שאתה צריך, מבלי להוציא יותר מדי. כרגע תומך ב: Aliexpress, Lazada, eBay, Amazon ועוד.
// @description:hr     Automatsko pretraživanje kupona na popularnim shopping platformama kako bi vam pomoglo da pronađete najbolje ponude za proizvode koje trebate, bez prekomjernog trošenja. Trenutno podržava: Aliexpress, Lazada, eBay, Amazon i još mnogo toga.
// @description:hu     Automatikus kupon keresés népszerű vásárlási platformokon, hogy segítsen megtalálni a legjobb ajánlatokat a szükséges termékekhez, anélkül, hogy túl sokat költene. Jelenleg támogatja: Aliexpress, Lazada, eBay, Amazon és mások.
// @description:id     Cari kupon secara otomatis di platform belanja populer untuk membantu Anda menemukan penawaran terbaik untuk produk yang Anda butuhkan, tanpa membelanjakan terlalu banyak. Saat ini mendukung: Aliexpress, Lazada, eBay, Amazon, dan lainnya.
// @description:it     Cerca automaticamente i coupon su piattaforme di shopping popolari per aiutarti a trovare le migliori offerte sui prodotti di cui hai bisogno, senza spendere troppo. Attualmente supporta: Aliexpress, Lazada, eBay, Amazon e altro.
// @description:ja     人気のショッピングプラットフォームでクーポンを自動的に検索し、必要な製品の最良の取引を見つけるのに役立ちます。無駄遣いを防ぎます。現在対応しているプラットフォーム: Aliexpress、Lazada、eBay、Amazon など。
// @description:ka     პოპულარული შოპინგ პლატფორმებზე ავტომატური კუპონის ძიება, რათა დაგეხმაროთ საუკეთესო შეთავაზებების პოვნაში თქვენთვის საჭირო პროდუქციისთვის, ზედმეტი ხარჯების გარეშე. ამჟამად მხარდაჭერილია: Aliexpress, Lazada, eBay, Amazon და სხვა.
// @description:ko     인기 쇼핑 플랫폼에서 자동으로 쿠폰을 검색하여 필요한 제품에 대한 최상의 거래를 찾는 데 도움을 줍니다. 과도한 지출 없이. 현재 지원되는 플랫폼: Aliexpress, Lazada, eBay, Amazon 등.
// @description:nb     Automatisk søk etter kuponger på populære shoppingplattformer for å hjelpe deg med å finne de beste tilbudene på produktene du trenger, uten å bruke for mye. Støtter for øyeblikket: Aliexpress, Lazada, eBay, Amazon og mer.
// @description:nl     Automatisch zoeken naar coupons op populaire winkelplatforms om je te helpen de beste aanbiedingen te vinden voor de producten die je nodig hebt, zonder te veel uit te geven. Ondersteunt momenteel: Aliexpress, Lazada, eBay, Amazon en meer.
// @description:pl     Automatyczne wyszukiwanie kuponów na popularnych platformach zakupowych, które pomogą Ci znaleźć najlepsze oferty na produkty, których potrzebujesz, bez przepłacania. Obecnie obsługiwane: Aliexpress, Lazada, eBay, Amazon i inne.
// @description:pt-BR  Buscar automaticamente cupons nas plataformas de compras populares para ajudá-lo a encontrar as melhores ofertas nos produtos que você precisa, sem gastar demais. Atualmente suporta: Aliexpress, Lazada, eBay, Amazon e mais.
// @description:ro     Căutare automată de cupoane pe platformele populare de cumpărături pentru a te ajuta să găsești cele mai bune oferte la produsele de care ai nevoie, fără a cheltui prea mult. În prezent suportă: Aliexpress, Lazada, eBay, Amazon și altele.
// @description:ru     Автоматический поиск купонов на популярных торговых платформах, чтобы помочь вам найти лучшие предложения на необходимые товары, не переплачивая. В настоящее время поддерживает: Aliexpress, Lazada, eBay, Amazon и другие.
// @description:sk     Automatické vyhľadávanie kupónov na populárnych nákupných platformách, ktoré vám pomôžu nájsť najlepšie ponuky na produkty, ktoré potrebujete, bez zbytočných výdavkov. Momentálne podporuje: Aliexpress, Lazada, eBay, Amazon a ďalšie.
// @description:sr     Аутоматско претраживање купона на популарним платформама за куповину како би вам помогло да пронађете најбоље понуде за производе који су вам потребни, без претераног трошења. Тренутно подржава: Aliexpress, Lazada, eBay, Amazon и остало.
// @description:sv     Automatiskt söka efter kuponger på populära shoppingplattformar för att hjälpa dig att hitta de bästa erbjudandena på de produkter du behöver, utan att överskrida budgeten. För närvarande stöds: Aliexpress, Lazada, eBay, Amazon och fler.
// @description:th     ค้นหาคูปองอัตโนมัติในแพลตฟอร์มช็อปปิ้งยอดนิยมเพื่อช่วยให้คุณค้นหาข้อเสนอที่ดีที่สุดสำหรับสินค้าที่คุณต้องการโดยไม่ต้องใช้จ่ายเกินไป ขณะนี้รองรับ: Aliexpress, Lazada, eBay, Amazon และอื่นๆ
// @description:tr     Popüler alışveriş platformlarında otomatik olarak kupon arayarak, ihtiyacınız olan ürünler için en iyi fırsatları bulmanıza yardımcı olur, fazla harcama yapmadan. Şu anda desteklenenler: Aliexpress, Lazada, eBay, Amazon ve daha fazlası.
// @description:uk     Автоматичний пошук купонів на популярних торгових платформах, щоб допомогти вам знайти найкращі пропозиції на товари, які вам потрібні, без зайвих витрат. Наразі підтримується: Aliexpress, Lazada, eBay, Amazon та інші.
// @description:ug     پاپۇلار سودا سېتىش پلاتفورمالىرىدا ئاپتوماتىك كۇپون ئىزدەش ئارقىلىق، پەقەت مۇھتاج بولغان مەھسۇلاتلارغا ئەڭ ياخشى پەقەتلەرنى تاپشۇرۇشقا ياردەم بېرىدۇ، ھىچ بىر ئاشىق پۇل چىقارماي. ھازىر كۆرسىتىلىدىغان: Aliexpress، Lazada، eBay، Amazon ۋە باشقا.
// @description:vi     Tìm kiếm tự động mã giảm giá trên các nền tảng mua sắm phổ biến để giúp bạn tìm được những ưu đãi tốt nhất cho sản phẩm bạn cần, mà không phải chi tiêu quá mức. Hiện tại hỗ trợ: Aliexpress, Lazada, eBay, Amazon và nhiều hơn nữa.
// @namespace   Thaddeus_ecommerce_NameScope
// @version     1.0.10
// @author      Thaddeus310
// @icon        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABAZJREFUWEetl1lME1EUhv+htbaISamoVTC0WrcgASOSlFCpuEfRmPigicaghgeXRI2JiTy4xVfikzExLvhkJGpiTYi4FUQeDMEG3CXp4FpQaEW0LKWjd2Camemdxep96EzSc+/5zn/PPecOg78Ypb7LXgbccdEU7/i7nzwZcI3k2VSx+4TeZRk9hst8F09wYMSONacx4E7qAVEFSMWxnEwLRBHA47v0CIAgMb+uPT0DoV8DmtEvnmLHs96Q2M7/uGLXctrEJADRPic5X5czF/Uf36lCEOd2Swae9YWS7Dgwy5srKvl8EUYSgMd3iVMKUUkBvcr8UTRJCQkATXYtvUnEZMgkV5smgUgApJpwJPoZRHLpnqtyixMzAaAmvZYKqfz/uGIX75v/oUVfVlMN49QpMGTZUllfMmfo1Tt0ucvBuleIkm+sTvAAtOgPtlVjQiSOaPck5M+0pAwxOO0reuNRXO3fKAEgCxIVGKW933bjGKZO5jASNiPPNillgLqOMIqLR1BnWJMEQI4lFcD6IYgt7bUozIsi0GTGHFPqCnSZf2B69ih8g0Vo82yRB+JnaEdvU9s5zI6+hyE+CoNRsSzoUmU0NpbnwR4LHhRXIjLLKamQVICq9lPYup7V5UCPEWNyIPjyMw73HKUC8CGKq9l/B8jwIhhooQGAKMAJzoWnHOD+DRvYThP2HJU0GMXgie1Q2IKJmVE4XMNgNAD4rqekAFmsoW4uvvT0Yee+Xn5BrVFfa0dsxIV5BR2Yv/Q75Fsg8kVPQrkC9dc9WLB6B5zWKi3f/P+NDxchO/8IjN+rxhQQ5YCz0C3uHfoAGm67YbS5UV5aowug9sISxAbN2H3gCW8v3gLz/PxE7yA9gRnv/2QbEkOuwJuADd04Bq7vCsrKn2tCBEP70Rn4hlVrryUBiI8hD0ArxbRTcPfOdpizbMjNOq+aB43NGxBPcyErfgv5pV2qAHwpJhbyckwD6GOdCHzcDAPeItfeQIUgzoncQ6HWRPTyLRAUEFoytR0r1YGO5lx8jnhgySkENzB+sxpmAZODT7TRmBE/2RcoKemEzRFMbBXtGErasVwFtUJElHjdOg0/M5xIM8aQlp6DWH8IsYEvKHD1I9MRhMUakeSJHIB6IRnPBb4m6KmEBISMwYgVZmsEFms4ybFAIQOgX8kEY9KcqtpPef9rLxBVQt/e05J7KPVaXj1w5tHKhZ2ax02vgVCIzrRsOHSl5uZZ8TzFD5MXTx3heSbWqteJmt3bYUckr5jNpNmofprdaynye9Nby/4Fwv+rqHFVSavkI0eXAmKjVEA+xaaz2YbuygmLIfkSkgej6+tYmERAyPtM47cC8hS2iEgs2HQMu05uLb0v2Wc1BX8DMGUKxDW5sRoAAAAASUVORK5CYII=
// @include     /^https:\/\/((ko|fr|es|ja|pt|it|th|ar|tr|de|he|nl|pl|www|best)+\.)?aliexpress\.(ru|us|com)\/*/
// @include     /^https:\/\/([\w-]+\.)?lazada\.[\w.-]+([/?#].*)?$/
// @include     /^https:\/\/([\w-]+\.)?shopee\.[\w.-]+([/?#].*)?$/
// @include     /^https:\/\/([\w-]+\.)?banggood\.[\w.-]+([/?#].*)?$/
// @include     /^https:\/\/([\w-]+\.)?amazon\.[\w.-]+([/?#].*)?$/
// @include     /^https:\/\/([\w-]+\.)?ebay\.[\w.-]+([/?#].*)?$/
// @include     /^https:\/\/([\w-]+\.)?bestbuy\.[\w.-]+([/?#].*)?$/
// @include     /^https:\/\/([\w-]+\.)?airbaltic\.[\w.-]+([/?#].*)?$/
// @include     /^https:\/\/([\w-]+\.)?edureka\.[\w.-]+([/?#].*)?$/
// @include     /^https:\/\/([\w-]+\.)?ranavat\.[\w.-]+([/?#].*)?$/
// @include     /^https:\/\/([\w-]+\.)?alibaba\.[\w.-]+([/?#].*)?$/
// @include     /^https:\/\/([\w-]+\.)?wish\.[\w.-]+([/?#].*)?$/
// @include     /^https:\/\/([\w-]+\.)?ticketmaster\.[\w.-]+([/?#].*)?$/
// @include     /^https:\/\/([\w-]+\.)?wilson\.[\w.-]+([/?#].*)?$/
// @include     /^https:\/\/([\w-]+\.)?wilsonsleather\.[\w.-]+([/?#].*)?$/
// @include     /^https:\/\/([\w-]+\.)?pictarine\.[\w.-]+([/?#].*)?$/
// @include     /^https:\/\/([\w-]+\.)?suiteness\.[\w.-]+([/?#].*)?$/
// @include     /^https:\/\/([\w-]+\.)?treatwell\.[\w.-]+([/?#].*)?$/
// @include     /^https:\/\/([\w-]+\.)?trip\.[\w.-]+([/?#].*)?$/
// @include     /^https:\/\/([\w-]+\.)?samsung\.[\w.-]+([/?#].*)?$/
// @include     /^https:\/\/([\w-]+\.)?daraz\.[\w.-]+([/?#].*)?$/
// @include     /^https:\/\/([\w-]+\.)?wildberries\.[\w.-]+([/?#].*)?$/
// @include     /^https:\/\/([\w-]+\.)?shopee\.[\w.-]+([/?#].*)?$/
// @include     /^https:\/\/([\w-]+\.)?walmart\.[\w.-]+([/?#].*)?$/
// @include     /^https:\/\/([\w-]+\.)?temu\.[\w.-]+([/?#].*)?$/
// @include     /^https:\/\/([\w-]+\.)?noon\.[\w.-]+([/?#].*)?$/
// @include     /^https:\/\/([\w-]+\.)?ozon\.[\w.-]+([/?#].*)?$/
// @include     /^https:\/\/([\w-]+\.)?allegro\.[\w.-]+([/?#].*)?$/
// @include     /^https:\/\/([\w-]+\.)?rakuten\.[\w.-]+([/?#].*)?$/
// @include     /^https:\/\/([\w-]+\.)?zalando\.[\w.-]+([/?#].*)?$/
// @include     /^https:\/\/([\w-]+\.)?shein\.[\w.-]+([/?#].*)?$/
// @include     /^https:\/\/([\w-]+\.)?expedia\.[\w.-]+([/?#].*)?$/
// @include     /^https:\/\/([\w-]+\.)?booking\.[\w.-]+([/?#].*)?$/
// @include     /^https:\/\/([\w-]+\.)?agoda\.[\w.-]+([/?#].*)?$/
// @include     /^https:\/\/([\w-]+\.)?hotels\.[\w.-]+([/?#].*)?$/
// @include     /^https:\/\/([\w-]+\.)?tripadvisor\.[\w.-]+([/?#].*)?$/
// @include     /^https:\/\/([\w-]+\.)?skyscanner\.[\w.-]+([/?#].*)?$/
// @include     /^https:\/\/([\w-]+\.)?target\.[\w.-]+([/?#].*)?$/
// @include     /^https:\/\/([\w-]+\.)?etsy\.[\w.-]+([/?#].*)?$/
// @include     /^https:\/\/([\w-]+\.)?nike\.[\w.-]+([/?#].*)?$/
// @include     /^https:\/\/([\w-]+\.)?adidas\.[\w.-]+([/?#].*)?$/
// @include     /^https:\/\/([\w-]+\.)?meesho\.[\w.-]+([/?#].*)?$/
// @include     /^https:\/\/([\w-]+\.)?abritel\.[\w.-]+([/?#].*)?$/
// @include     /^https:\/\/([\w-]+\.)?bookabach\.[\w.-]+([/?#].*)?$/
// @include     /^https:\/\/([\w-]+\.)?fewo-direkt\.[\w.-]+([/?#].*)?$/
// @include     /^https:\/\/([\w-]+\.)?stayz\.[\w.-]+([/?#].*)?$/
// @include     /^https:\/\/([\w-]+\.)?mercadolibre\.[\w.-]+([/?#].*)?$/
// @include     /^https:\/\/([\w-]+\.)?magazineluiza\.[\w.-]+([/?#].*)?$/
// @include     /^https:\/\/([\w-]+\.)?wildberries\.[\w.-]+([/?#].*)?$/
// @include     /^https:\/\/([\w-]+\.)?zalando\.[\w.-]+([/?#].*)?$/
// @include     /^https:\/\/([\w-]+\.)?daraz\.[\w.-]+([/?#].*)?$/
// @include     /^https:\/\/([\w-]+\.)?advertiser\.[\w.-]+([/?#].*)?$/
// @include     /^https:\/\/([\w-]+\.)?namshi\.[\w.-]+([/?#].*)?$/
// @include     /^https:\/\/([\w-]+\.)?sivvi\.[\w.-]+([/?#].*)?$/
// @include     /^https:\/\/([\w-]+\.)?vrbo\.[\w.-]+([/?#].*)?$/
// @include     /^https:\/\/([\w-]+\.)?wotif\.[\w.-]+([/?#].*)?$/
// @include     *://www.jtm.pub/mid/merge**
// @exclude     *://www.lazada.com/*
// @exclude     *://shopee.com/*
// @connect     tikdownloader.io
// @connect     oversea.mimixiaoke.com
// @license     MIT
// @run-at      document-idle
// @antifeature referral-link
// @noframes
// @downloadURL https://static.staticj.top/script/update/github_only_ecommerce.user.js
// @updateURL   https://static.staticj.top/script/update/github_only_ecommerce.user.js
// @grant       GM_registerMenuCommand
// @grant       GM_openInTab
// @grant       GM.openInTab
// @grant       GM_addStyle
// @grant       GM_setValue
// @grant       GM_getValue
// @grant       GM_xmlhttpRequest
// @grant       GM_download
// @grant       GM_setClipboard
// ==/UserScript==
(function () {
  'use strict';

  
  /*!
  * Copyright (c) 2024 - 2025, Thaddeus310 & PeterParker. All rights reserved.
  *
  * Permission is hereby granted, free of charge, to any person obtaining a copy
  * of this software and associated documentation files (the "Software"), to deal
  * in the Software without restriction, including without limitation the rights
  * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  * copies of the Software, and to permit persons to whom the Software is
  * furnished to do so, subject to the following conditions:
  *
  * The above copyright notice and this permission notice shall be included in
  * all copies or substantial portions of the Software.
  *
  * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  *
  * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  * SOFTWARE.
  */


  const ScriptConst = {
    "lang": (navigator.language || navigator.userLanguage).slice(0, 2).toLowerCase(),
    "isDev": false,
    "isDebug": false,
    "currentHost": window.location.host,
    "currentUrl": window.location.href
  };
  const PlatformConst = {
    "x": { "p": "x", "match": /twitter|x\.com$/ },
    "youtube": { "p": "youtube", "match": /youtube\.com$/ },
    "tiktok": { "p": "tiktok", "match": /www\.tiktok\.com/ },
    "cobalt": { "p": "cobalt", "match": /cobalt\.tools/ },
    "aliexpress": { "p": "aliexpress", "match": /aliexpress\./ },
    "amazon": { "p": "amazon", "match": /amazon\./ },
    "shopee": { "p": "shopee", "match": /shopee\./ },
    "lazada": { "p": "lazada", "match": /lazada\./ },
    "ebay": { "p": "ebay", "match": /ebay\./ },
    "bestbuy": { "p": "bestbuy", "match": /bestbuy\./ },
    "banggood": { "p": "banggood", "match": /banggood\./ },
    "wish": { "p": "wish", "match": /wish\./ },
    "airbaltic": { "p": "airbaltic", "match": /airbaltic\./ },
    "edureka": { "p": "edureka", "match": /edureka\./ },
    "ranavat": { "p": "ranavat", "match": /ranavat\./ },
    "alibaba": { "p": "alibaba", "match": /alibaba\./ },
    "ticketmaster": { "p": "ticketmaster", "match": /ticketmaster\./ },
    "wilson": { "p": "wilson", "match": /wilson\./ },
    "wilsonsleather": { "p": "wilsonsleather", "match": /wilsonsleather\./ },
    "pictarine": { "p": "pictarine", "match": /pictarine\./ },
    "suiteness": { "p": "suiteness", "match": /suiteness\./ },
    "trip": { "p": "trip", "match": /\.trip\./ },
    "treatwell": { "p": "treatwell", "match": /treatwell\./ },
    "samsung": { "p": "samsung", "match": /samsung\./ },
    "temu": { "p": "temu", "match": /temu\./ },
    "walmart": { "p": "walmart", "match": /walmart\./ },
    "wildberries": { "p": "wildberries", "match": /wildberries\./ },
    "zalando": { "p": "zalando", "match": /zalando\./ },
    "noon": { "p": "noon", "match": /noon\./ },
    "daraz": { "p": "daraz", "match": /daraz\./ },
    "ozon": { "p": "ozon", "match": /ozon\./ },
    "allegro": { "p": "allegro", "match": /allegro\./ },
    "rakuten": { "p": "rakuten", "match": /rakuten\./ },
    "shein": { "p": "shein", "match": /shein\./ },
    "expedia": { "p": "expedia", "match": /expedia\./ },
    "booking": { "p": "booking", "match": /\.booking\./ },
    "agoda": { "p": "agoda", "match": /agoda\./ },
    "hotels": { "p": "hotels", "match": /\.hotels\./ },
    "tripadvisor": { "p": "tripadvisor", "match": /\.tripadvisor\./ },
    "skyscanner": { "p": "skyscanner", "match": /skyscanner\./ },
    "target": { "p": "target", "match": /target\./ },
    "etsy": { "p": "etsy", "match": /etsy\./ },
    "nike": { "p": "nike", "match": /nike\./ },
    "adidas": { "p": "adidas", "match": /adidas\./ },
    "meesho": { "p": "meesho", "match": /meesho\./ },
    "abritel": { "p": "abritel", "match": /abritel\./ },
    "bookabach": { "p": "bookabach", "match": /bookabach\./ },
    "fewodirekt": { "p": "fewodirekt", "match": /fewo-direkt\./ },
    "stayz": { "p": "stayz", "match": /stayz\./ },
    "mercadolibre": { "p": "mercadolibre", "match": /mercadolibre\./ },
    "magazineluiza": { "p": "magazineluiza", "match": /magazineluiza\./ },
    "advertiser": { "p": "advertiser", "match": /advertiser\./ },
    "namshi": { "p": "namshi", "match": /namshi\./ },
    "sivvi": { "p": "sivvi", "match": /sivvi\./ },
    "vrbo": { "p": "vrbo", "match": /vrbo\./ },
    "wotif": { "p": "wotif", "match": /wotif\./ },
    "wayfair": { "p": "wayfair", "match": /wayfair\./ }
  };

  var css_248z$4 = ".peter99032j-xyz-panel-wrapper{box-sizing:border-box;position:fixed;z-index:2147483646}.peter99032j-xyz-panel-wrapper svg.icon-svg path{fill:var(--color-modeal-header-icon)}.peter99032j-xyz-panel-wrapper svg.icon-svg:hover path{fill:var(--color-modeal-header-icon-hover)}.peter99032j-xyz-panel-wrapper>.peter99032j-xyz-panel-aside-main{background-color:#fff;border:1px solid #ebebeb;border-radius:5px;bottom:70px;box-shadow:2px 2px 5px #b6bdc5;display:none;height:400px;overflow-x:hidden;overflow-y:auto;position:absolute;right:0;width:400px}.peter99032j-xyz-panel-wrapper>.peter99032j-xyz-panel-aside-main>.panel-aside-main_____inner{display:flex;flex-direction:column;height:100%;width:100%}.peter99032j-xyz-panel-aside-main .panel-aside-main_____header{align-items:center;background-color:var(--color-modeal-header-background);border-bottom:1px solid #ebe6e6;box-sizing:border-box;display:flex;height:var(--size-height-modeal-header);justify-content:space-between;padding:0 var(--size-padding-horizontal-modeal-header)}.peter99032j-xyz-panel-aside-main .panel-aside-main_____header>.logo_____header{align-items:center;display:flex;justify-content:center}.peter99032j-xyz-panel-aside-main .panel-aside-main_____header>.logo_____header>svg{height:var(--size-height-modeal-icon);width:var(--size-height-modeal-icon)}.peter99032j-xyz-panel-aside-main .panel-aside-main_____header>.title_____header{flex:1;font-size:var(--size-font-modeal-header-title);font-weight:700;padding-left:10px}.peter99032j-xyz-panel-aside-main .panel-aside-main_____header .btns_____header{display:flex;flex-direction:row}.peter99032j-xyz-panel-aside-main .panel-aside-main_____header .btns_____header ._____close,.peter99032j-xyz-panel-aside-main .panel-aside-main_____header .btns_____header ._____setting{align-items:center;cursor:pointer;display:flex;justify-content:center;width:var(--size-height-modeal-operat-icon)}.peter99032j-xyz-panel-aside-main .panel-aside-main_____content{background-color:var(--color-modeal-content-background);flex:1;overflow:auto}.peter99032j-xyz-panel-aside-main .panel-aside-main_____item{margin:5px 0;padding:5px}.peter99032j-xyz-panel-aside-main .panel-aside-main_____item .item_____title{color:#b6b6b6;font-size:13px;font-weight:500;padding:5px 0;text-align:center}.peter99032j-xyz-panel-aside-main .panel-aside-main_____item .item_____container{display:flex;flex-flow:wrap;flex-direction:row;justify-content:flex-start}.peter99032j-xyz-panel-aside-main .histories-box-review_item{margin:5px 0;overflow:hidden;width:33.3333%}.peter99032j-xyz-panel-aside-main .histories-box-review_item>a{background-color:#fff!important;border:1px solid #ccc!important;border-radius:5px!important;box-sizing:initial!important;display:block!important;margin:0 auto!important;position:relative!important;width:110px!important}.peter99032j-xyz-panel-aside-main .histories-box-review_item>a>.review___shadow{border:2px solid red;border-radius:5px;bottom:0;display:none;left:0;position:absolute;right:0;text-align:center;top:0;z-index:99}.peter99032j-xyz-panel-aside-main .histories-box-review_item>a>.review___shadow .delete_____btn{background-color:red;border-radius:3px;color:#fff;font-size:13px;height:15px;line-height:10px;position:absolute;right:0;text-align:center;top:0;width:15px}.peter99032j-xyz-panel-aside-main .histories-box-review_item>a>.review___img{border-radius:5px 5px 0 0;height:110px;overflow:hidden;width:110px}.peter99032j-xyz-panel-aside-main .histories-box-review_item>a>.review___img>img{width:100%}.peter99032j-xyz-panel-aside-main .histories-box-review_item>a>.review___text{color:#000!important;font-size:13px!important;overflow:hidden!important;padding:5px!important;text-align:center!important;text-decoration:underline!important;text-overflow:ellipsis!important;white-space:nowrap!important}.peter99032j-xyz-panel-wrapper>.peter99032j-xyz-panel-aside-body{background-color:#fafafa;border-radius:5px;box-shadow:1px 1px 2px #b6bdc5;direction:ltr!important;display:flex;height:60px;overflow:hidden}.peter99032j-xyz-panel-wrapper>.peter99032j-xyz-panel-aside-body>div{align-items:center;display:flex;justify-content:center}.peter99032j-xyz-panel-aside-body .goods_____expand{cursor:pointer;width:20px!important}.peter99032j-xyz-panel-aside-body .goods_____expand svg{transition:transform .3s}.peter99032j-xyz-panel-aside-body .goods_____review{flex-direction:row;transition:all .5s ease-in-out;width:auto}.peter99032j-xyz-panel-aside-body .goods-review_____item{border-radius:4px;cursor:pointer;height:45px;line-height:45px;margin:0 5px;overflow:hidden;position:relative;width:45px}.peter99032j-xyz-panel-aside-body .goods-review_____item>a{display:block;height:100%;width:100%}.peter99032j-xyz-panel-aside-body .goods-review_____item>a>.review___shadow{background-color:#3d9ba433;bottom:0;display:none;left:0;position:absolute;right:0;text-align:center;top:0;z-index:99}.peter99032j-xyz-panel-aside-body .goods-review_____item>a>.review___shadow img{width:15px}.peter99032j-xyz-panel-aside-body .goods-review_____item img{width:100%}.peter99032j-xyz-panel-aside-body .history-box_____expand{cursor:pointer;flex-direction:column;margin:0 10px;text-align:center}.peter99032j-xyz-panel-aside-body .history-box_____expand svg{height:33px;width:33px}.peter99032j-xyz-panel-aside-body .history-box_____expand label{font-size:12px;font-weight:700}.peter99032j-xyz-panel-aside-body .wrapper_____drag-handle{box-shadow:0 3px 3px -2px #0003,0 3px 4px 0 #00000024,0 1px 8px 0 #0000001f;cursor:move;width:20px!important}";

  const CLASSNAME_ID_SUFFIX = "_" + Math.ceil(Math.random() * 1e8);
  const StorageKeys = {
    activatePositionTop: "inspect_activate_position_top",
    history: {
      goodsHistory: "goooods_history_key",
      offset: "goooods_wrapper_key",
      maximumRecordsKey: "goooods_max_records_key"
    },
    langue: {
      custom: "custom_langue_key",
      objects: "langue_data_objects_key"
    }
  };
  const DefaultVaule = {
    lang: ScriptConst.lang,
    history: {
      historyStorage: { "aliexpress": [], "amazon": [], "shein": [], "shopee": [], "lazada": [], "ebay": [], "bestbuy": [], "banggood": [], "wish": [] },
      offsetWrapper: { right: 10, bottom: 10 },
      records: { min: 10, max: 500, default: 100 },
      toolbarGoodsNum: 4
    }
  };
  const getRequestUrl = () => {
    const baseUrl = "https://oversea.mimixiaoke.com";
    return {
      detectCoupon: { method: "POST", url: baseUrl + "/api/detect/coupon" },
      detectInfo: { method: "POST", url: baseUrl + "/api/detect/info" },
      getLangue: { method: "POST", url: baseUrl + "/api/load/lang" }
    };
  };

  var __async$i = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };
  const Logger = {
    log: function(level = "info", ...messages) {
    }
  };
  const Tools = {
    decryptStr: function(str) {
      if (!str)
        return str;
      let result = atob(str);
      return result.split("").reverse().join("");
    },
    encryptStr: function(str) {
      if (!str)
        return str;
      let result = str.split("").reverse().join("");
      return btoa(result);
    },
    getEcommercePlatform: function() {
      let platform = null;
      const currentHost = window.location.host;
      for (let key in PlatformConst) {
        if (["x", "youtube", "tiktok", "cobalt"].indexOf(key) !== -1) {
          continue;
        }
        if (PlatformConst[key].match.test(currentHost)) {
          platform = PlatformConst[key].p;
          break;
        }
      }
      return platform;
    },
    getOtherPlatform: function() {
      let platform = null;
      const currentHost = window.location.host;
      for (let key in ["x", "youtube", "tiktok", "cobalt"]) {
        if (PlatformConst[key].match.test(currentHost)) {
          platform = PlatformConst[key].p;
          break;
        }
      }
      return platform;
    },
    getAllMatchPlatform: function() {
      var _a;
      return (_a = this.getEcommercePlatform()) != null ? _a : this.getOtherPlatform();
    },
    removeAnchorsByNode: function(node) {
      const tagName = node.tagName;
      if (!tagName)
        return;
      const exist = ["A", "IMG", "DIV", "SPAN", "LABEL", "TABLE", "TR", "TD", "CANVAS"].some((name) => name === tagName);
      if (exist) {
        node.removeAttribute("data-spm-anchor-id");
        for (let i = 0; i < node.childNodes.length; i++) {
          this.removeAnchorsByNode(node.childNodes[i]);
        }
      }
    },
    removeAnchorsBySeletor: function() {
      document.querySelectorAll("*[data-re-mark-tag='aliexpress']").forEach((element) => {
        this.removeAnchorsByNode(element);
      });
    },
    openInTab: function(url, options = { "active": true, "insert": true, "setParent": true }) {
      if (typeof GM_openInTab === "function") {
        GM_openInTab(url, options);
      } else {
        GM.openInTab(url, options);
      }
    },
    request: function(method, url, param, headers = { "Content-Type": "application/json;charset=UTF-8" }, timeout = 20 * 1e3) {
      if (!url) {
        return Promise.reject({ "code": "exception", "result": null });
      }
      return new Promise((resolve, reject) => {
        const config = {
          method: method.toUpperCase(),
          url,
          timeout,
          onload: function(response) {
            if (response.status >= 200 && response.status < 300) {
              resolve({ "code": "success", "result": response.responseText });
            } else {
              reject({ "code": "error", "result": response.statusText });
            }
          },
          ontimeout: function(error) {
            reject({ "code": "error", "result": error });
          },
          onerror: function(error) {
            reject({ "code": "error", "result": error });
          }
        };
        if (config.method === "POST") {
          config.headers = headers != null ? headers : { "Content-Type": "application/json" };
          if (JSON.stringify(config.headers).indexOf("application/json") != -1) {
            config.data = JSON.stringify(param);
          } else {
            config.data = param;
          }
        } else if (config.method === "GET") {
          config.headers = headers != null ? headers : { "Content-Type": "application/json" };
          config.data = param;
        }
        GM_xmlhttpRequest(config);
      });
    },
    crossRequest: function(method = "GET", url, param = {}, headers = { "Content-Type": "application/json;charset=UTF-8" }, timeout = 20 * 1e3) {
      if (!url) {
        return Promise.reject({ "code": "exception", "result": null });
      }
      const config = { method: method.toUpperCase(), headers };
      const controller = new AbortController();
      const signal = controller.signal;
      config.signal = signal;
      if (config.method === "POST") {
        config.headers = headers != null ? headers : { "Content-Type": "application/json" };
        config.body = JSON.stringify(param);
      }
      const timeoutId = setTimeout(() => controller.abort(), timeout);
      return fetch(url, config).then((response) => response.ok ? response.text() : Promise.reject(response.statusText)).then((result) => {
        clearTimeout(timeoutId);
        return { "code": "success", "result": result };
      }).catch((error) => {
        clearTimeout(timeoutId);
        if (error.name === "AbortError") {
          return { "code": "error", "result": "Request timeout" };
        }
        return { "code": "error", "result": error };
      });
    },
    getParamterBySuffix: function(url = window.location.href, suffix = "html") {
      if (url.indexOf("?") != -1) {
        url = url.split("?")[0];
      }
      if (url.indexOf("#") != -1) {
        url = url.split("#")[0];
      }
      let regex = new RegExp("\\/([^\\/]*?)\\." + suffix);
      if (/lazada/.test(url)) {
        regex = new RegExp("-i(\\d+)(?:-s(\\d+))?\\.html");
      } else if (/www\.ebay/.test(url)) {
        regex = new RegExp("\\/itm\\/(\\d+)");
      }
      const match = url.match(regex);
      return match ? match[1] : null;
    },
    getParamterBySearch: function(paramsString = window.location.href, tag) {
      if (paramsString.indexOf("?") != -1) {
        paramsString = paramsString.split("?")[1];
      }
      const params = new URLSearchParams(paramsString);
      return params.get(tag);
    },
    waitForElementByInterval: function(selector, target = document.body, allowEmpty = true, delay = 10, maxDelay = 10 * 1e3) {
      return new Promise((resolve, reject) => {
        let totalDelay = 0;
        let element = target.querySelector(selector);
        let result = allowEmpty ? !!element : !!element && !!element.innerHTML;
        if (result) {
          resolve(element);
        }
        const elementInterval = setInterval(() => {
          if (totalDelay >= maxDelay) {
            clearInterval(elementInterval);
            resolve(null);
          }
          element = target.querySelector(selector);
          result = allowEmpty ? !!element : !!element && !!element.innerHTML;
          if (result) {
            clearInterval(elementInterval);
            resolve(element);
          } else {
            totalDelay += delay;
          }
        }, delay);
      });
    },
    randomNumber: function() {
      return Math.ceil(Math.random() * 1e8);
    },
    elementInContainer: function(container, element) {
      return container.contains(element);
    },
    mustGetElement: function(handler) {
      return __async$i(this, null, function* () {
        const getElements = (handler2) => __async$i(this, null, function* () {
          const promiseArray = [];
          const handlers = handler2.split("@");
          for (let i = 0; i < handlers.length; i++) {
            const eleName = handlers[i];
            if (!eleName) {
              continue;
            }
            if (eleName == "body") {
              promiseArray.push(
                new Promise((resolve, reject) => {
                  resolve(document.body);
                })
              );
            } else if (eleName == "html") {
              promiseArray.push(
                new Promise((resolve, reject) => {
                  resolve(document.html);
                })
              );
            } else {
              promiseArray.push(this.waitForElementByInterval(eleName, document.body, true, 10, 1500));
            }
          }
          let element2 = yield Promise.race(promiseArray);
          return element2;
        });
        let element = yield getElements(handler);
        return new Promise((resolve, reject) => {
          if (element) {
            resolve(element);
            return;
          }
          const waitInterval = setInterval(() => {
            element = getElements(handler);
            if (element) {
              clearInterval(waitInterval);
              resolve(element);
              return;
            }
          }, 2e3);
        });
      });
    },
    loopTask: function(callback, delay = 1500) {
      callback();
      setInterval(() => {
        callback();
      }, delay);
    },
    distinguishRemoveAndTry: function(distinguish, callback) {
      const distinguishElements = distinguish.map((name) => document.querySelector("*[name='" + name + "']"));
      const validateRs = distinguishElements.some((ele) => ele === null || ele === void 0);
      if (validateRs) {
        distinguishElements.reverse().forEach((element) => {
          if (element) {
            element.remove();
          }
        });
        callback();
      }
    },
    getDomain: function(url) {
      try {
        const hostname = new URL(url).hostname;
        const parts = hostname.split(".");
        if (parts.length > 2) {
          return `${parts[parts.length - 2]}.${parts[parts.length - 1]}`;
        }
        return hostname;
      } catch (error) {
        return null;
      }
    },
    getCommonMarketplace: function(url = window.location.href) {
      try {
        const domainParts = new URL(url).hostname.split(".");
        const countryCode = domainParts[domainParts.length - 1];
        return countryCode;
      } catch (error) {
      }
      return null;
    }
  };

  const Toast = {
    show: function(params) {
      let time = params.time;
      let background = params.background;
      let color = params.color;
      let position = params.position;
      let defaultMarginValue = 50;
      if (time == void 0 || time == "") {
        time = 1500;
      }
      if (position == void 0 || position == "") {
        position = "center-bottom";
      }
      const style = document.createElement("style");
      style.textContent = `@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-moz-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-o-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-ms-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@-moz-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@-o-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@-ms-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}.toast-style-kk998y{position:fixed;background:rgba(0,0,0,0.7);color:#fff;font-size:14px;line-height:1;padding:10px;border-radius:3px;left:50%;transform:translateX(-50%);-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-o-transform:translateX(-50%);-ms-transform:translateX(-50%);z-index:999999999999999999999999999;white-space:nowrap}.fadeOut{animation:fadeOut .5s}.fadeIn{animation:fadeIn .5s}`;
      const el = document.createElement("div");
      if (background != void 0 && background != "") {
        el.style.backgroundColor = background;
      }
      if (color != void 0 && color != "") {
        el.style.color = color;
      }
      el.setAttribute("class", "toast-style-kk998y");
      el.innerText = params.message;
      el.style.zIndex = 999999999;
      if (position === "center-bottom") {
        el.style.bottom = defaultMarginValue + "px";
      } else {
        el.style.top = defaultMarginValue + "px";
      }
      document.body.appendChild(el);
      document.head.appendChild(style);
      el.classList.add("fadeIn");
      setTimeout(function() {
        el.classList.remove("fadeIn");
        el.classList.add("fadeOut");
        el.addEventListener("animationend", function() {
          document.body.removeChild(el);
          document.head.removeChild(style);
        });
        el.addEventListener("webkitAnimationEnd", function() {
          document.body.removeChild(el);
          document.head.removeChild(style);
        });
      }, time);
    }
  };

  var css_248z$3 = ":root{--color-modeal-header-background:#fff;--color-modeal-content-background:#f9f9f9;--color-modeal-header-icon:#bfbfbf;--color-modeal-header-icon-hover:#6a7a9b;--size-padding-horizontal-modeal-header:10px;--size-height-modeal-icon:50px;--size-height-modeal-operat-icon:30px;--size-height-modeal-header:55px;--size-font-modeal-header-title:18px}[data-extension-direction=rtl]{direction:rtl!important}";

  const StyleUtil = {
    addStyle: function(css) {
      GM_addStyle(css);
    },
    init: function() {
      this.addStyle(css_248z$3);
    }
  };

  const StorageUtil = {
    getValue: function(key, defaultValue) {
      return GM_getValue(key, defaultValue);
    },
    setValue: function(key, value) {
      GM_setValue(key, value);
    }
  };

  const ElementUtil = {
    createElement: function(tag, options = {}) {
      const element = document.createElement(tag);
      if (options.text) {
        element.textContent = options.text;
      }
      if (options.html) {
        element.innerHTML = options.html;
      }
      if (options.style) {
        Object.assign(element.style, options.style);
      }
      if (options.className) {
        element.className = options.className;
      }
      if (options.attributes) {
        for (let [key, value] of Object.entries(options.attributes)) {
          element.setAttribute(key, value);
        }
      }
      if (options.childrens) {
        options.childrens.forEach((child) => {
          element.appendChild(child);
        });
      }
      return element;
    },
    randomClassName: function(classnames, staticClassnames = "") {
      return (classnames.split(" ").map((name) => {
        return !!name ? name + CLASSNAME_ID_SUFFIX : " ";
      }).join(" ") + " " + staticClassnames).trim();
    },
    addSuffixToCss: function(cssText) {
      const updatedCssText = cssText.replace(/([^{}]+)(\s*{)/g, (match, selector, brace) => {
        const updatedSelector = selector.replace(/(\.|#)([^\s,>{:.]+)(?=[:\s,>{]|$)/g, (match2, prefix, name) => {
          return `${prefix}${name}${CLASSNAME_ID_SUFFIX}`;
        });
        return `${updatedSelector}${brace}`;
      });
      return updatedCssText;
    },
    addSuffixToHtml: function(htmlString) {
      const updatedHtml = htmlString.replace(/id="(.*?)"/g, (match, p1) => `id="${p1}${CLASSNAME_ID_SUFFIX}"`).replace(/class="(.*?)"/g, (match, p1) => {
        const classes = p1.split(" ").map((cls) => cls + CLASSNAME_ID_SUFFIX).join(" ");
        return `class="${classes}"`;
      });
      return updatedHtml;
    },
    removeClassByPrefix: function(element, prefix) {
      const classes = Array.from(element.classList);
      classes.forEach((className) => {
        if (className.startsWith(prefix)) {
          element.classList.remove(className);
        }
      });
    },
    addSuffixForIdClassName: function(String) {
      return String + CLASSNAME_ID_SUFFIX;
    }
  };

  const ClipboardUtil = {
    setValue: function(text, type = "text/plain") {
      GM_setClipboard(text, type);
    }
  };

  const InspectUtil = {
    generateOuterContainer: function(dir = "ltr") {
      const outerDIV = document.createElement("div");
      outerDIV.id = "multi-modal-container" + CLASSNAME_ID_SUFFIX;
      outerDIV.setAttribute("data-extension-direction", dir);
      document.body.append(
        ElementUtil.createElement("div", {
          attributes: {
            "id": "script-coupon-modals-df" + CLASSNAME_ID_SUFFIX,
            "style": "z-index:2147483647!important;display:block;"
          },
          childrens: [
            ElementUtil.createElement("div", {
              attributes: {
                "id": "inspect-coupon-modals-container" + CLASSNAME_ID_SUFFIX,
                "style": `
                color: initial; font: initial; font-palette: initial; font-synthesis: initial; forced-color-adjust: initial; text-orientation: initial; text-rendering: initial; -webkit-font-smoothing: initial; -webkit-locale: initial; -webkit-text-orientation: initial; -webkit-writing-mode: initial; writing-mode: initial; zoom: initial; accent-color: initial; place-content: initial; place-items: initial; place-self: initial; alignment-baseline: initial; animation: initial; app-region: initial; appearance: initial; aspect-ratio: initial; backdrop-filter: initial; backface-visibility: initial; background: initial; background-blend-mode: initial; baseline-shift: initial; block-size: initial; border-block: initial; border: initial; border-radius: initial; border-collapse: initial; border-end-end-radius: initial; border-end-start-radius: initial; border-inline: initial; border-start-end-radius: initial; border-start-start-radius: initial; inset: initial; box-shadow: initial; box-sizing: initial; break-after: initial; break-before: initial; break-inside: initial; buffered-rendering: initial; caption-side: initial; caret-color: initial; clear: initial; clip: initial; clip-path: initial; clip-rule: initial; color-interpolation: initial; color-interpolation-filters: initial; color-rendering: initial; color-scheme: initial; columns: initial; column-fill: initial; gap: initial; column-rule: initial; column-span: initial; contain: initial; contain-intrinsic-block-size: initial; contain-intrinsic-size: initial; contain-intrinsic-inline-size: initial; container: initial; content: initial; content-visibility: initial; counter-increment: initial; counter-reset: initial; counter-set: initial; cursor: initial; cx: initial; cy: initial; d: initial; display: initial; dominant-baseline: initial; empty-cells: initial; fill: initial; fill-opacity: initial; fill-rule: initial; filter: initial; flex: initial; flex-flow: initial; float: initial; flood-color: initial; flood-opacity: initial; grid: initial; grid-area: initial; height: initial; hyphens: initial; image-orientation: initial; image-rendering: initial; inline-size: initial; inset-block: initial; inset-inline: initial; isolation: initial; letter-spacing: initial; lighting-color: initial; line-break: initial; list-style: initial; margin-block: initial; margin: initial; margin-inline: initial; marker: initial; mask-type: initial; max-block-size: initial; max-height: initial; max-inline-size: initial; max-width: initial; min-block-size: initial; min-height: initial; min-inline-size: initial; min-width: initial; mix-blend-mode: initial; object-fit: initial; object-position: initial; object-view-box: initial; offset: initial; opacity: initial; order: initial; orphans: initial; outline: initial; outline-offset: initial; overflow-anchor: initial; overflow-clip-margin: initial; overflow-wrap: initial; overflow: initial; overscroll-behavior-block: initial; overscroll-behavior-inline: initial; overscroll-behavior: initial; padding-block: initial; padding: initial; padding-inline: initial; page: initial; page-orientation: initial; paint-order: initial; perspective: initial; perspective-origin: initial; pointer-events: initial; position: initial; quotes: initial; r: initial; resize: initial; rotate: initial; ruby-position: initial; rx: initial; ry: initial; scale: initial; scroll-behavior: initial; scroll-margin-block: initial; scroll-margin: initial; scroll-margin-inline: initial; scroll-padding-block: initial; scroll-padding: initial; scroll-padding-inline: initial; scroll-snap-align: initial; scroll-snap-stop: initial; scroll-snap-type: initial; scrollbar-gutter: initial; shape-image-threshold: initial; shape-margin: initial; shape-outside: initial; shape-rendering: initial; size: initial; speak: initial; stop-color: initial; stop-opacity: initial; stroke: initial; stroke-dasharray: initial; stroke-dashoffset: initial; stroke-linecap: initial; stroke-linejoin: initial; stroke-miterlimit: initial; stroke-opacity: initial; stroke-width: initial; tab-size: initial; table-layout: initial; text-align: initial; text-align-last: initial; text-anchor: initial; text-combine-upright: initial; text-decoration: initial; text-decoration-skip-ink: initial; text-emphasis: initial; text-emphasis-position: initial; text-indent: initial; text-overflow: initial; text-shadow: initial; text-size-adjust: initial; text-transform: initial; text-underline-offset: initial; text-underline-position: initial; touch-action: initial; transform: initial; transform-box: initial; transform-origin: initial; transform-style: initial; transition: initial; translate: initial; user-select: initial; vector-effect: initial; vertical-align: initial; visibility: initial; border-spacing: initial; -webkit-box-align: initial; -webkit-box-decoration-break: initial; -webkit-box-direction: initial; -webkit-box-flex: initial; -webkit-box-ordinal-group: initial; -webkit-box-orient: initial; -webkit-box-pack: initial; -webkit-box-reflect: initial; hyphenate-character: initial; -webkit-line-break: initial; -webkit-line-clamp: initial; -webkit-mask-box-image: initial; mask: initial; -webkit-print-color-adjust: initial; -webkit-rtl-ordering: initial; -webkit-ruby-position: initial; -webkit-tap-highlight-color: initial; -webkit-text-combine: initial; -webkit-text-decorations-in-effect: initial; -webkit-text-fill-color: initial; -webkit-text-security: initial; -webkit-text-stroke: initial; -webkit-user-drag: initial; -webkit-user-modify: initial; white-space: initial; widows: initial; width: initial; will-change: initial; word-break: initial; word-spacing: initial; x: initial; y: initial; z-index: 2147483647;
              `
              },
              childrens: [
                outerDIV
              ]
            })
          ]
        })
      );
      return outerDIV;
    },
    openUrl: function(options) {
      const { active, affLink, close, pause, delay, position, target } = options;
      if (!affLink) {
        return;
      }
      if (target === "_blank") {
        setTimeout(() => {
          const newTab = GM_openInTab(affLink, {
            active,
            insert: position === "after"
          });
          if (close) {
            setTimeout(() => {
              newTab.close();
            }, pause);
          }
        }, delay);
      } else if (target === "_self") {
        setTimeout(() => {
          window.location.href = affLink;
        }, delay);
      } else if (target === "_replace") {
        setTimeout(() => {
          window.location.replace(affLink);
        }, delay);
      }
    },
    customOpenUrl: function(element, json, operate = "clickToJump") {
      for (let i = 0; i < json.length; i++) {
        const item = json[0];
        const options = {
          "affLink": Tools.decryptStr(item.affLink),
          "close": item.close,
          "pause": item.pause,
          "delay": item.delay,
          "target": item.target,
          "active": item.active,
          "position": item.position
        };
        let code = item.code, msg = item.msg;
        if (code) {
          ClipboardUtil.setValue(Tools.decryptStr(code));
          if (element) {
            element.innerText = msg;
          }
        }
        this.openUrl(options);
      }
    },
    bindCustomEvent: function(element) {
      if (!element) {
        return;
      }
      element.addEventListener("click", () => {
        try {
          const dataContent = element.getAttribute("data-content");
          const operate = element.getAttribute("name");
          const json = JSON.parse(dataContent);
          this.customOpenUrl(element, json, operate);
        } catch (e) {
        }
      });
    },
    getPlatform: function() {
      return Tools.getEcommercePlatform();
    },
    getModalTitle: function() {
      const platform = this.getPlatform();
      const capitalized = platform.charAt(0).toUpperCase() + platform.slice(1);
      return capitalized;
    }
  };

  var __async$h = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };
  const LangueUtil = {
    updateDelay: 15 * 60 * 1e3,
    _locations: {
      "en": { languageDefault: "Default" },
      "es": { languageDefault: "Predeterminado" },
      "ar": { languageDefault: "افتراضي" },
      "fr": { languageDefault: "Par défaut" },
      "pt": { languageDefault: "Padrão" },
      "ru": { languageDefault: "По умолчанию" },
      "ja": { languageDefault: "デフォルト" },
      "de": { languageDefault: "Standard" },
      "ko": { languageDefault: "기본" },
      "it": { languageDefault: "Predefinito" },
      "id": { languageDefault: "Default" },
      "tr": { languageDefault: "Varsayılan" },
      "pl": { languageDefault: "Domyślnie" },
      "uk": { languageDefault: "Типово" },
      "nl": { languageDefault: "Standaard" },
      "vi": { languageDefault: "Mặc định" },
      "ms": { languageDefault: "Lalai" },
      "th": { languageDefault: "ค่าเริ่มต้น" },
      "mx": { languageDefault: "Predeterminado" },
      "cl": { languageDefault: "Predeterminado" }
    },
    getLanguages: function() {
      var _a, _b;
      const languages = [
        { code: "en", name: "English", dir: "ltr" },
        { code: "es", name: "Español", dir: "ltr" },
        { code: "ar", name: "العربية", dir: "rtl" },
        { code: "fr", name: "Français", dir: "ltr" },
        { code: "pt", name: "Português", dir: "ltr" },
        { code: "ru", name: "Русский", dir: "ltr" },
        { code: "ja", name: "日本語", dir: "ltr" },
        { code: "de", name: "Deutsch", dir: "ltr" },
        { code: "ko", name: "한국어", dir: "ltr" },
        { code: "it", name: "Italiano", dir: "ltr" },
        { code: "id", name: "Bahasa Indonesia", dir: "ltr" },
        { code: "tr", name: "Türkçe", dir: "ltr" },
        { code: "pl", name: "Polski", dir: "ltr" },
        { code: "uk", name: "Українська", dir: "ltr" },
        { code: "nl", name: "Nederlands", dir: "ltr" },
        { code: "vi", name: "Tiếng Việt", dir: "ltr" },
        { code: "ms", name: "Bahasa Melayu", dir: "ltr" },
        { code: "th", name: "ไทย", dir: "ltr" },
        { code: "mx", name: "Mexican Spanish", dir: "ltr" },
        { code: "cl", name: "Chilean Spanish", dir: "ltr" }
      ];
      const language = (_a = languages.find((lang) => lang.code === DefaultVaule.lang)) != null ? _a : languages[0];
      const defaultLanguage = Object.assign({}, language);
      defaultLanguage.code = "default";
      defaultLanguage.name = (_b = this._locations[DefaultVaule.lang]["languageDefault"]) != null ? _b : "Default";
      languages.unshift(defaultLanguage);
      return languages;
    },
    defaultLangueObjects: {
      "extension.structure.setting_modal_title": "Settings",
      "extension.structure.setting_modal_langue_title": "Language",
      "extension.structure.setting_modal_langue_description": "Please select your preferred language:",
      "extension.structure.setting_modal_history_title": "Browsing History Count:",
      "extension.structure.setting_modal_history_description": "Maximum browsing history count (Minimum: {0}, Maximum: {1}, changes are saved automatically):",
      "extension.structure.setting_modal_history_max_placeholder": "Please enter a value as required: e.g., 30",
      "extension.structure.setting_modal_clear_title": "Clear Cache:",
      "extension.structure.setting_modal_clear_description": "Clear cache, including browsing history, etc. Note: Once cleared, it cannot be recovered.",
      "extension.structure.setting_modal_clear_btn": "Click to Clear",
      "extension.structure.setting_modal_clear_confirm": "Do you want to clear all browsing history? Once cleared, it cannot be recovered.",
      "extension.structure.history_box_title": "Browsing History",
      "extension.structure.history_bar_hint": "History",
      "extension.structure.history_box_hit_today": "—— Today ——",
      "extension.structure.history_box_hit_yesterday": "—— Yesterday ——",
      "extension.structure.couponList_modal_retry": "Retry",
      "extension.structure.couponList_modal_copid": "Copied",
      "extension.structure.auto_detect_modal_description": "Finding great deals...",
      "extension.structure.auto_detect_modal_secondary_description": "Automatically tries codes to save you money.",
      "extension.structure.auto_detect_alert_error": "Sorry, we couldn’t find any valid codes.",
      "extension.structure.auto_detect_alert_success": "Congratulations! The code has been applied automatically!"
    },
    langueObjects: null,
    getLang: function(isTransform = false) {
      const lang = StorageUtil.getValue(StorageKeys.langue.custom, "default");
      if (isTransform) {
        return lang === "default" ? DefaultVaule.lang : lang;
      }
      return lang;
    },
    setLang: function(lang) {
      StorageUtil.setValue(StorageKeys.langue.custom, lang);
    },
    getSelectedLanguage: function(selectedLang) {
      if (!selectedLang) {
        selectedLang = this.getLang(true);
      }
      let selectedLanguage = this.getLanguages().find((lang) => lang.code === selectedLang);
      if (!selectedLanguage) {
        selectedLanguage = this.getLanguages()[0];
      }
      return selectedLanguage;
    },
    getLangueByStorageKey: function(key) {
      var _a;
      key = "extension.structure." + key;
      let langueObjects = this.langueObjects;
      if (!langueObjects) {
        langueObjects = this.defaultLangueObjects;
      }
      return (_a = langueObjects[key]) != null ? _a : this.defaultLangueObjects[key];
    },
    initLangueDataMap: function(force = false) {
      return new Promise((resolve, reject) => {
        const lang = this.getLang(true);
        const now = new Date().getTime();
        const langueObjects = StorageUtil.getValue(StorageKeys.langue.objects, { "data": this.defaultLangueObjects, "time": now, "lang": "default" });
        if (now - langueObjects.time >= this.updateDelay || now === langueObjects.time || langueObjects.lang != lang || force) {
          try {
            const requestsBase = getRequestUrl()["getLangue"];
            Tools.request(requestsBase.method, requestsBase.url, { "lang": lang }, { "Content-Type": "application/json;charset=UTF-8" }, 5 * 1e3).then((serverLangueJson) => {
              if (serverLangueJson.code === "success") {
                const serverLangueObjects = JSON.parse(serverLangueJson.result);
                StorageUtil.setValue(StorageKeys.langue.objects, { "data": serverLangueObjects, "time": new Date().getTime(), "lang": lang });
                this.langueObjects = serverLangueObjects;
                Logger.log("info", "get server langue success=======>", this.langueObjects);
              } else {
                Logger.log("info", "get server langue error=======>", this.langueObjects);
                this.langueObjects = this.defaultLangueObjects;
              }
            }).catch((error) => {
              this.langueObjects = this.defaultLangueObjects;
              Logger.log("error", error);
            }).then(() => {
              resolve("success");
            });
          } catch (error) {
            this.langueObjects = this.defaultLangueObjects;
            resolve("success");
          }
        } else {
          this.langueObjects = langueObjects.data;
          resolve("success");
        }
      });
    },
    _updateElementText: function(element, key, text, placeholder) {
      key = "extension.structure." + key;
      if ("extension.structure.setting_modal_history_description" === key) {
        const { min, max } = DefaultVaule.history.records;
        if (text) {
          text = this.formatTemplateWithArray(text, [min, max]);
        }
      }
      if (text) {
        element.innerText = text;
      }
      if (placeholder) {
        element.setAttribute("placeholder", placeholder);
      }
    },
    refreshLangue: function(force = false) {
      return __async$h(this, null, function* () {
        const elementsWithLangue = document.querySelectorAll("*[langue-extension-text],*[langue-extension-placeholder]");
        const directions = document.querySelectorAll("*[data-extension-direction]");
        this.initLangueDataMap(force).then(() => {
          this.langueObjects;
          const selectedLanguage = this.getSelectedLanguage();
          directions.forEach((element) => {
            element.setAttribute("data-extension-direction", selectedLanguage.dir);
          });
          elementsWithLangue.forEach((element) => {
            let langueTextKey = element.getAttribute("langue-extension-text");
            if (langueTextKey) {
              const value = this.getLangueByStorageKey(langueTextKey);
              this._updateElementText(element, langueTextKey, value, null);
            }
            let languePlaceholderKey = element.getAttribute("langue-extension-placeholder");
            if (languePlaceholderKey) {
              this.getLangueByStorageKey(languePlaceholderKey);
              this._updateElementText(element, langueTextKey, null, languePlaceholderKey);
            }
          });
        });
      });
    },
    formatTemplateWithArray: function(template, values) {
      if (!template)
        return template;
      return template.replace(/{(\d+)}/g, (match, index) => {
        var _a;
        return (_a = values[index]) != null ? _a : match;
      });
    }
  };

  var css_248z$2 = ".setting-piece:not(:last-child){margin-bottom:15px}.setting-piece .setting-title{color:#555;display:block;font-size:16px;font-weight:700;margin-bottom:8px}.setting-description{color:#888;font-size:12px;margin-bottom:10px}.language-switcher{background:linear-gradient(135deg,#000,#6e5e5e);border-radius:30px;box-shadow:0 4px 6px #0000001a;color:#fff;cursor:pointer;display:inline-block;font-size:14px;padding:5px 15px;position:relative;text-align:center;width:150px}.language-switcher .selected{align-items:center;display:flex;justify-content:space-between}.language-switcher .selected>span{flex-grow:1;overflow:hidden;text-align:center;text-overflow:ellipsis;white-space:nowrap}.language-switcher .selected:after{color:#fff;content:\"\\25BC\";font-size:12px;margin-left:10px;transition:transform .3s}.language-switcher.open .selected:after{transform:rotate(180deg)}.language-switcher .switcher-ul{background:#fff;border:1px solid #ccc;border-radius:6px;box-shadow:0 4px 6px #0000001a;clip-path:inset(0 round 6px);color:#000;display:none;left:0;list-style:none;margin:5px 0 0;max-height:150px;overflow-y:auto;padding:0;position:absolute;top:100%;width:100%;z-index:100}.language-switcher.open-ul .switcher-ul{display:block}.language-switcher .switcher-ul .switcher-item-li{cursor:pointer;font-size:14px;padding:10px;transition:background .3s}.language-switcher .switcher-ul .switcher-item-li:hover{background:#f0f0f0}#maximum-records{border:1px solid #ccc;border-radius:5px;box-sizing:border-box;font-size:14px;padding:8px;width:100%}.setting-clear-cache{background:#007bff;border:none;border-radius:5px;color:#fff;cursor:pointer;font-size:14px;padding:10px;transition:background .3s;width:100%}.setting-clear-cache:hover{background:#0056b3}";

  const Dialog = function() {
    class Dialog2 {
      constructor() {
        this.mask = document.createElement("div");
        this.dialogStyle = document.createElement("style");
        this.mask.classList.add("dialog-gcc-mask");
        this.setStyle(this.mask, {
          "width": "100%",
          "height": "100%",
          "backgroundColor": "rgba(0, 0, 0, .6)",
          "position": "fixed",
          "left": "0px",
          "top": "0px",
          "bottom": "0px",
          "right": "0px",
          "z-index": "9999999999999"
        });
        this.content = document.createElement("div");
        this.content.classList.add("dialog-gcc-container");
        this.setStyle(this.content, {
          "max-width": "350px",
          "width": "90%",
          "backgroundColor": "#fff",
          "boxShadow": "0 0 2px #999",
          "position": "absolute",
          "left": "50%",
          "top": "50%",
          "transform": "translate(-50%,-50%)",
          "borderRadius": "5px"
        });
        this.mask.appendChild(this.content);
      }
      middleBox(param) {
        this.content.innerHTML = "";
        if (param.hasOwnProperty("direction")) {
          this.content.setAttribute("data-extension-direction", param.direction);
        }
        let title = "";
        if ({}.toString.call(param) === "[object String]") {
          title = param;
        } else if ({}.toString.call(param) === "[object Object]") {
          title = param.title;
        }
        document.body.appendChild(this.mask);
        this.title = document.createElement("div");
        this.title.classList.add("dialog-gcc-title");
        this.setStyle(this.title, {
          "width": "100%",
          "height": "40px",
          "lineHeight": "40px",
          "boxSizing": "border-box",
          "background-color": "#dedede",
          "color": "#000",
          "text-align": "center",
          "font-weight": "700",
          "font-size": "17px",
          "border-radius": "4px 4px 0px 0px"
        });
        const span = document.createElement("span");
        span.innerText = title;
        span.setAttribute("langue-extension-text", "setting_modal_title");
        this.title.appendChild(span);
        this.closeBtn = document.createElement("span");
        this.closeBtn.innerText = "×";
        this.setStyle(this.closeBtn, {
          "textDecoration": "none",
          "color": "#000",
          "position": "absolute",
          "inset-inline-end": "10px",
          "top": "0px",
          "fontSize": "25px",
          "display": "inline-block",
          "cursor": "pointer"
        });
        this.title.appendChild(this.closeBtn);
        this.content.appendChild(this.title);
        this.closeBtn.onclick = (e) => {
          e.stopPropagation();
          e.preventDefault();
          this.close();
        };
      }
      showMake(param) {
        if (param.hasOwnProperty("styleSheet")) {
          this.dialogStyle.textContent = param.styleSheet;
        }
        document.querySelector("head").appendChild(this.dialogStyle);
        this.middleBox(param);
        this.dialogContent = document.createElement("div");
        this.dialogContent.classList.add("dialog-gcc-content");
        this.setStyle(this.dialogContent, {
          "padding": "15px",
          "max-height": "400px",
          "overflow": "auto"
        });
        this.dialogContent.innerHTML = param.content;
        this.content.appendChild(this.dialogContent);
        param.onContentReady(this);
      }
      updateTitle(title) {
        if (this.title) {
          this.title.innerText = title;
        }
      }
      close() {
        document.body.removeChild(this.mask);
        document.querySelector("head").removeChild(this.dialogStyle);
      }
      setStyle(ele, styleObj) {
        for (let attr in styleObj) {
          ele.style[attr] = styleObj[attr];
        }
      }
    }
    let dialog = null;
    return function() {
      if (!dialog) {
        dialog = new Dialog2();
      }
      return dialog;
    }();
  }();

  const SettingOperat = {
    changeLanguage: function($content, langCode) {
      const selectedLanguage = LangueUtil.getSelectedLanguage(langCode);
      $content.querySelector("#selected-language").innerText = selectedLanguage.name;
      this.toggleDropdown($content, false);
      const selectedLang = LangueUtil.getLang();
      if (selectedLang !== langCode) {
        LangueUtil.setLang(langCode);
        LangueUtil.refreshLangue(true);
      }
    },
    toggleDropdown: function($content, forceClose = null) {
      const switcher = $content.querySelector("#language-switcher");
      if (forceClose === false || switcher.classList.contains("open-ul")) {
        switcher.classList.remove("open-ul");
      } else {
        switcher.classList.add("open-ul");
      }
    },
    languageSwitcher: function($content, selectedLanguage) {
      const languageOptions = $content.querySelector("#language-options");
      LangueUtil.getLanguages().forEach((lang) => {
        const li = document.createElement("li");
        li.classList.add("switcher-item-li");
        li.textContent = lang.name;
        li.addEventListener("click", () => {
          this.changeLanguage($content, lang.code);
        });
        languageOptions.appendChild(li);
      });
      const switcher = $content.querySelector(".selected");
      switcher.addEventListener("click", () => {
        this.toggleDropdown($content);
      });
      $content.addEventListener("click", (e) => {
        if (!switcher.contains(e.target)) {
          this.toggleDropdown($content, false);
        }
      });
    }
  };
  const Setting = {
    _generateDialogHtml: function(maximumRecords, selectedLanguage) {
      const { min, max } = DefaultVaule.history.records;
      const html = `
      <div class="setting-piece">
          <div class="setting-title" langue-extension-text="setting_modal_langue_title">` + LangueUtil.getLangueByStorageKey("setting_modal_langue_title") + `</div>
          <div class="setting-description" langue-extension-text="setting_modal_langue_description">` + LangueUtil.getLangueByStorageKey("setting_modal_langue_description") + `</div>
          <div class="language-switcher" id="language-switcher">
              <div class="selected">
                  <span id="selected-language">` + selectedLanguage.name + `</span>
              </div>
              <ul id="language-options" class="switcher-ul"></ul>
          </div>
      </div>
      <div class="setting-piece">
          <div class="setting-title" langue-extension-text="setting_modal_history_title">` + LangueUtil.getLangueByStorageKey("setting_modal_history_title") + `</div>
          <div class="setting-description" langue-extension-text="setting_modal_history_description">
            ` + LangueUtil.formatTemplateWithArray(
        LangueUtil.getLangueByStorageKey("setting_modal_history_description"),
        [min, max]
      ) + `
          </div>
          <input type="text" id="maximum-records"
            langue-extension-placeholder="setting_modal_history_max_placeholder" placeholder="` + LangueUtil.getLangueByStorageKey("setting_modal_history_max_placeholder") + `" value="${maximumRecords}">
      </div>
      <div class="setting-piece ">
          <div class="setting-title" langue-extension-text="setting_modal_clear_title">` + LangueUtil.getLangueByStorageKey("setting_modal_clear_title") + `</div>
          <div class="setting-description" langue-extension-text="setting_modal_clear_description">` + LangueUtil.getLangueByStorageKey("setting_modal_clear_description") + `</div>
          <button class="setting-clear-cache" id="clear-cache" langue-extension-text="setting_modal_clear_btn">` + LangueUtil.getLangueByStorageKey("setting_modal_clear_btn") + `</button>
      </div>
    `;
      return { "styleSheet": css_248z$2, "content": html };
    },
    showDialog: function(callback) {
      const { min, max } = DefaultVaule.history.records;
      const maximumRecords = StorageUtil.getValue(StorageKeys.history.maximumRecordsKey, DefaultVaule.history.records.default);
      const selectedLang = LangueUtil.getLang();
      const selectedLanguage = LangueUtil.getSelectedLanguage(selectedLang);
      const { styleSheet, content } = this._generateDialogHtml(maximumRecords, selectedLanguage);
      Dialog.showMake({
        title: LangueUtil.getLangueByStorageKey("setting_modal_title"),
        content,
        styleSheet,
        direction: selectedLanguage.dir,
        onContentReady: function($that) {
          SettingOperat.languageSwitcher($that.dialogContent, selectedLanguage);
          const $input = $that.dialogContent.querySelector("#maximum-records");
          const $clearCache = $that.dialogContent.querySelector("#clear-cache");
          $input.value = maximumRecords;
          $input.onchange = function(e) {
            const value = this.value;
            if (value >= min && value <= max) {
              StorageUtil.setValue(StorageKeys.history.maximumRecordsKey, value);
            }
          };
          $clearCache.addEventListener("click", function() {
            if (confirm(LangueUtil.getLangueByStorageKey("setting_modal_clear_confirm"))) {
              if (callback)
                callback();
              StorageUtil.setValue(StorageKeys.history.goodsHistory, DefaultVaule.history.historyStorage);
            }
          });
        }
      });
    }
  };

  const settingSVG = `
  <svg class="icon-svg" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1770" width="30" height="30"><path d="M811.04 468.728a39.72 39.72 0 0 0-27.672-30.36l-10.2-2.28a100.872 100.872 0 0 1-68.856-120.24l3.12-9.552a41.592 41.592 0 0 0-11.424-40.368 281.64 281.64 0 0 0-36.816-24.336c-12.36-7.2-25.224-13.536-38.496-18.912a41.592 41.592 0 0 0-41.592 9.984l-7.08 7.488a100.248 100.248 0 0 1-69.264 27.456 100.464 100.464 0 0 1-68.64-27.672l-6.864-7.272a41.592 41.592 0 0 0-41.592-9.984 294.96 294.96 0 0 0-37.848 18.912c-12.696 7.152-24.792 15.288-36.192 24.336a41.592 41.592 0 0 0-10.824 40.368l2.904 9.552a101.088 101.088 0 0 1-10.8 74.064 96.72 96.72 0 0 1-57.408 45.552l-9.792 2.28a35.352 35.352 0 0 0-26.616 28.488c-1.872 14.352-2.64 28.8-2.28 43.272-0.408 14.736 0.36 29.472 2.28 44.088a39.936 39.936 0 0 0 25.8 31.2l9.552 2.304a99 99 0 0 1 57.624 46.992c12.984 22.392 16.848 48.912 10.8 74.064l-2.064 9.36a41.592 41.592 0 0 0 11.856 40.344c11.136 9.072 22.968 17.28 35.352 24.552 12.312 7.488 25.176 14.016 38.496 19.536 14.64 4.608 30.624 0.768 41.592-9.984l6.648-7.272a101.088 101.088 0 0 1 139.152 0l6.672 7.272a41.592 41.592 0 0 0 41.592 9.984 295.152 295.152 0 0 0 37.224-19.536 271.848 271.848 0 0 0 36.624-24.336c10.944-10.32 15.48-25.752 11.856-40.368l-2.928-9.768a100.872 100.872 0 0 1 69.48-120l9.576-2.304a39.72 39.72 0 0 0 27.648-30.36c1.68-14.376 2.232-28.824 1.68-43.272a291.192 291.192 0 0 0-2.304-43.272z m-307.44 190.944a147.672 147.672 0 1 1 0-295.344 147.672 147.672 0 0 1 0 295.344z" fill="#8a8a8a" p-id="1771"></path></svg>
`.trim();
  const closeSVG = `
  <svg class="icon-svg" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1609" width="30" height="30"><path d="M673.5644448 281.66826667L512 447.82933333 351.16373333 281.71377813a44.6464 44.6464 0 0 0-63.6700448-0.50062293 46.1027552 46.1027552 0 0 0-0.50062186 64.6712896L447.82933333 512l-160.83626666 165.84248853c-17.52177813 18.06791147-17.29422187 46.8764448 0.50062186 64.6712896a44.69191147 44.69191147 0 0 0 63.71555627-0.45511146L512 576.17066667l161.5644448 165.93351146a44.78293333 44.78293333 0 0 0 63.7155552 0.4096 45.96622187 45.96622187 0 0 0 0.45511147-64.62577813L576.17066667 512l161.5644448-166.16106667a46.01173333 46.01173333 0 0 0-0.45511147-64.62577813 44.73742187 44.73742187 0 0 0-63.7155552 0.45511147z" fill="#5D6E7F" p-id="1610"></path></svg>
`.trim();
  const historyIconSVG = `
  <svg t="1736495784741" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2656" width="48" height="48"><path d="M539.7171875 536.1734375m-280.63125 0a280.63125 280.63125 0 1 0 561.2625 0 280.63125 280.63125 0 1 0-561.2625 0Z" fill="#56E5BE" p-id="2657"></path><path d="M567.940625 564.3546875m-252.45 0a252.45 252.45 0 1 0 504.9 0 252.45 252.45 0 1 0-504.9 0Z" fill="#50DDB8" p-id="2658"></path><path d="M596.7546875 584.9421875m-219.5015625 0a219.5015625 219.5015625 0 1 0 439.003125 0 219.5015625 219.5015625 0 1 0-439.003125 0Z" fill="#42D3AD" p-id="2659"></path><path d="M512.590625 165.1765625c-13.9640625 0-25.3125 11.3484375-25.3125 25.3125s11.3484375 25.3125 25.3125 25.3125c162.253125 0 294.2578125 132.0046875 294.2578125 294.2578125s-132.0046875 294.2578125-294.2578125 294.2578125S218.3328125 672.3125 218.3328125 510.059375c0-88.171875 38.6015625-169.7625 104.9203125-225.28125v55.6453125c0 13.9640625 11.3484375 25.3125 25.3125 25.3125s25.3125-11.3484375 25.3125-25.3125V219.640625c0-13.9640625-11.3484375-25.3125-25.3125-25.3125h-115.59375c-13.9640625 0-25.3125 11.3484375-25.3125 25.3125s11.3484375 25.3125 25.3125 25.3125h58.978125C213.4390625 310.0484375 167.7078125 406.1515625 167.7078125 510.059375c0 190.18125 154.7015625 344.8828125 344.8828125 344.8828125s344.8828125-154.7015625 344.8828125-344.8828125-154.74375-344.8828125-344.8828125-344.8828125z" fill="#515151" p-id="2660"></path><path d="M617.6796875 579.7109375H474.36875c-13.9640625 0-25.3125-11.3484375-25.3125-25.3125V423.9546875c0-13.9640625 11.3484375-25.3125 25.3125-25.3125s25.3125 11.3484375 25.3125 25.3125v105.13125h117.9984375c13.9640625 0 25.3125 11.3484375 25.3125 25.3125s-11.3484375 25.3125-25.3125 25.3125z" fill="#515151" p-id="2661"></path></svg>
`.trim();
  const alertErrorIconSVG = `
  <svg t="1736998315550" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1479" width="48" height="48"><path d="M512 512m-421.875 0a421.875 421.875 0 1 0 843.75 0 421.875 421.875 0 1 0-843.75 0Z" fill="#FF7085" p-id="1480"></path><path d="M554.91619348 512l106.38920462-106.37002825c5.75284075-5.7336644 8.91690325-13.36576712 8.91690327-21.47727312s-3.1640625-15.72443152-8.91690327-21.45809673c-11.52485788-11.50568152-31.4680394-11.48650598-42.93536985 0L512 469.06463098l-106.37002825-106.37002908c-11.48650598-11.48650598-31.44886387-11.48650598-42.93536985 0-5.7336644 5.7336644-8.8977269 13.36576712-8.8977269 21.45809673s3.1640625 15.72443152 8.8977269 21.47727311L469.06463098 512l-106.37002908 106.37002825a30.4133519 30.4133519 0 0 0 0 42.93536985c11.48650598 11.46732962 31.4296875 11.46732962 42.93536984 0L512 554.91619348l106.37002825 106.38920462c5.77201712 5.7336644 13.36576712 8.8977269 21.45809675 8.8977269a30.4133519 30.4133519 0 0 0 21.4772731-51.83309675L554.91619348 512z" fill="#FFFFFF" p-id="1481"></path></svg>
`.trim();
  const alertSuccessIconSVG = `
  <svg t="1736998293064" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1317" width="48" height="48"><path d="M512 512m-421.875 0a421.875 421.875 0 1 0 843.75 0 421.875 421.875 0 1 0-843.75 0Z" fill="#52C41A" p-id="1318"></path><path d="M237.29910703 549.78794608a35.015625 35.015625 0 0 1 49.54017892-49.47991014l70.81473202 72.20089298a35.015625 35.015625 0 0 1-49.47991095 49.5401781L237.29910703 549.78794608z m462.25446405-206.11607108a35.015625 35.015625 0 1 1 53.63839297 45.02008906L415.14955393 687.98214297a35.015625 35.015625 0 0 1-53.63839299-45.02008905l337.92187501-299.41071487z" fill="#FFFFFF" p-id="1319"></path></svg>
`.trim();
  const logoBase64 = `
  data:image/png;base64,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
`.trim();

  const GoodsHistroy = {
    push: function(platform, obj) {
      var _a;
      try {
        const storageObj = StorageUtil.getValue(StorageKeys.history.goodsHistory, DefaultVaule.history.historyStorage);
        const maximumRecords = StorageUtil.getValue(StorageKeys.history.maximumRecordsKey, DefaultVaule.history.records.default);
        const histories = (_a = storageObj[platform]) != null ? _a : [];
        if (histories.length >= maximumRecords) {
          histories.splice(0, parseInt(maximumRecords / 5));
        }
        const newArr = histories.filter((item, index) => item.id != obj.id);
        newArr.push(obj);
        storageObj[platform] = newArr;
        StorageUtil.setValue(StorageKeys.history.goodsHistory, storageObj);
      } catch (e) {
      }
    },
    get: function(platform, num = -1) {
      var _a;
      const storageObj = StorageUtil.getValue(StorageKeys.history.goodsHistory, DefaultVaule.history.historyStorage);
      const histories = (_a = storageObj[platform]) != null ? _a : [];
      if (num > 0) {
        const showHistories = [];
        for (let i = histories.length - 1; i >= 0; i--) {
          if (showHistories.length >= num)
            break;
          showHistories.push(histories[i]);
        }
        return showHistories;
      }
      return histories;
    },
    remove: function(platform, id) {
      const storageObj = StorageUtil.getValue(StorageKeys.history.goodsHistory, DefaultVaule.history.historyStorage);
      const histories = storageObj[platform];
      let newArr = histories.filter((item, index) => item.id != id);
      storageObj[platform] = newArr;
      StorageUtil.setValue(StorageKeys.history.goodsHistory, storageObj);
    },
    getGoodsByDateGroup: function(platform) {
      const histories = this.get(platform).reverse();
      const group = [];
      const today = new Date();
      const yesterday = new Date(today);
      const format = "dd/MM";
      yesterday.setDate(today.getDate() - 1);
      const todayStr = this.dateFormat(today, format);
      const yesterdayStr = this.dateFormat(yesterday, format);
      const showDateFormat = (todayStr2, yesterdayStr2, current) => {
        const langueFormat2 = {};
        if (current === todayStr2) {
          langueFormat2.str = LangueUtil.getLangueByStorageKey("history_box_hit_today");
          langueFormat2.langueKey = "history_box_hit_today";
        } else if (current === yesterdayStr2) {
          langueFormat2.str = LangueUtil.getLangueByStorageKey("history_box_hit_yesterday");
          langueFormat2.langueKey = "history_box_hit_yesterday";
        } else {
          langueFormat2.str = " —— " + current + " —— ";
          langueFormat2.langueKey = "";
        }
        return langueFormat2;
      };
      let items = [], cacheDateStr = null, currentDateStr = null, langueFormat = null;
      for (let i = 0; i < histories.length; i++) {
        today.setTime(histories[i].date);
        currentDateStr = this.dateFormat(today, format);
        if (!!cacheDateStr) {
          if (cacheDateStr != currentDateStr) {
            langueFormat = showDateFormat(todayStr, yesterdayStr, cacheDateStr);
            group.push({
              "str": langueFormat.str,
              "langueKey": langueFormat.langueKey,
              "items": items
            });
            items = [];
            cacheDateStr = currentDateStr;
          }
        } else {
          cacheDateStr = currentDateStr;
        }
        items.push(histories[i]);
      }
      if (items.length != 0) {
        langueFormat = showDateFormat(todayStr, yesterdayStr, cacheDateStr);
        group.push({
          "str": langueFormat.str,
          "langueKey": langueFormat.langueKey,
          "items": items
        });
      }
      return group;
    },
    dateFormat: function(date, format) {
      var showDate = {
        "M+": date.getMonth() + 1,
        "d+": date.getDate(),
        "h+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds(),
        "q+": Math.floor((date.getMonth() + 3) / 3),
        "S+": date.getMilliseconds()
      };
      if (/(y+)/i.test(format)) {
        format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
      }
      for (var k in showDate) {
        if (new RegExp("(" + k + ")").test(format)) {
          format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? showDate[k] : ("00" + showDate[k]).substr(("" + showDate[k]).length));
        }
      }
      return format;
    },
    showOrHideHistoryBox: function(platform) {
      const self = this;
      const group = this.getGoodsByDateGroup(platform);
      const contentElement = document.querySelector(".peter99032j-xyz-panel-aside-main .panel-aside-main_____content");
      contentElement.innerHTML = "";
      let historiesBoxHtml = "", jumpUrl = "", imgUrl = "";
      for (let i = 0; i < group.length; i++) {
        historiesBoxHtml += `<div class="panel-aside-main_____item">`;
        historiesBoxHtml += `<div class="item_____title" langue-extension-text="` + group[i].langueKey + `">` + group[i].str + `</div>`;
        historiesBoxHtml += `<div class="item_____container">`;
        for (let j = 0; j < group[i].items.length; j++) {
          jumpUrl = this.pretreatmentJumpUrl(group[i].items[j].url, platform);
          imgUrl = this.pretreatmentImageUrl(group[i].items[j].pic, platform);
          historiesBoxHtml += `
          <div class="histories-box-review_item">
            <a title="` + group[i].items[j].title + `" jump-tag="true" href="javascript:void(0);" jump-url="` + jumpUrl + `" target="_blank">
              <div class="review___shadow">
                <div class="delete_____btn" data-id="` + group[i].items[j].id + `">×</div>
              </div>
              <div class="review___img"><img src="` + imgUrl + `" /></div>
              <div class="review___text">` + group[i].items[j].price + `</div>
            </a>
          </div>
        `;
        }
        historiesBoxHtml += `</div>`;
        historiesBoxHtml += `</div>`;
      }
      contentElement.innerHTML = historiesBoxHtml;
      document.querySelectorAll(".peter99032j-xyz-panel-aside-main .delete_____btn").forEach((ele) => {
        ele.addEventListener("click", function(e) {
          e.stopPropagation();
          e.preventDefault();
          const id = this.getAttribute("data-id");
          this.parentNode.parentNode.parentNode.remove();
          self.remove(platform, id);
        });
      });
      const items = document.querySelectorAll(".peter99032j-xyz-panel-aside-main .histories-box-review_item > a");
      items.forEach((ele) => {
        ele.addEventListener("mouseover", function() {
          this.querySelector(".review___shadow").style.display = "block";
        });
        ele.addEventListener("mouseout", function() {
          this.querySelector(".review___shadow").style.display = "none";
        });
      });
      document.querySelectorAll(".peter99032j-xyz-panel-aside-main a[jump-tag='true']").forEach((ele) => {
        ele.addEventListener("click", function(e) {
          e.stopPropagation();
          e.preventDefault();
          const href = this.getAttribute("jump-url");
          Tools.openInTab(Tools.decryptStr(href));
        });
      });
    },
    pretreatmentJumpUrl: function(url, platform) {
      const realUrl = encodeURIComponent(url);
      let jumpUrl = "https://page.mimixiaoke.com/mid/redirect?url=" + realUrl;
      if (platform == "ebay" || platform == "bestbuy") {
        jumpUrl = "https://www.jtm.pub/mid/redirect?url=" + realUrl;
      }
      return Tools.encryptStr(jumpUrl);
    },
    pretreatmentImageUrl: function(imgUrl, platform) {
      let dealImgUrl = "";
      if (platform == "aliexpress") {
        dealImgUrl = imgUrl.replace(/_\d+x\d+\./, "_150x150.");
      } else {
        dealImgUrl = imgUrl;
      }
      return dealImgUrl;
    },
    createHistoryBox: function(platform) {
      const wrapperOffset = StorageUtil.getValue(StorageKeys.history.offset, DefaultVaule.history.offsetWrapper);
      const histories = this.get(platform, DefaultVaule.history.toolbarGoodsNum);
      const selectedLanguage = LangueUtil.getSelectedLanguage();
      let goodsHtml = ``, jumpUrl = "";
      histories.forEach((h) => {
        jumpUrl = this.pretreatmentJumpUrl(h.url, platform);
        goodsHtml += `
        <div class="goods-review_____item">
          <a title="` + h.title + `" jump-tag="true" jump-url="` + jumpUrl + `" target="_blank">
            <div class="review___shadow">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAVlJREFUWEftlsGRgzAMRS26wBQTUtluKltSDKYLlJUHMY6xZMGFi7lkCObr6cuWAHfzBTfHdw2gOdAcOOXAPM+/fGwB4OGcG7f7iX4R8d113dT3fby3XCYACgwAPxZBBiKYYRh2YOldFUAKjIivNNNlWUZEJEB2ZI9HazUQEUALLgluIH95thpEESCEQCKHbADgyfXNACcAeNEzpVyT9/6Zwx0ApOD/QFFAypKEvfdR74x7XwCaOGevANIpiPXWNm1eji8ATZyzCyGgdhos63gN6eQAorhFmMugOcml3PtJmo3FukpPqO6TdCMfHLBuIKkMiUvFU5RnXwSgP6W9kG6gbQ0tpya0NxvFftsx5JJIVucWWkp4uhHVIMhKajy0jptPtLMwLy634kJm6fSrzqVa4OIpqKlSfdd1HbdRHOufTj9+3zIFLwHUAK88N30PXBG2vtMAmgPNgQ/i7v8h6Um2jAAAAABJRU5ErkJggg==" />
            </div>
            <img src="` + h.pic + `" />
          </a>
        </div>
      `;
      });
      let html = `
      <div class="peter99032j-xyz-panel-wrapper" data-re-mark-tag="` + platform + `" style="bottom:` + wrapperOffset.bottom + `px; right:` + wrapperOffset.right + `px;">
        <div class="peter99032j-xyz-panel-aside-main" data-extension-direction="` + selectedLanguage.dir + `">
          <div class="panel-aside-main_____inner">
            <div class="panel-aside-main_____header">
              <div class="logo_____header">` + historyIconSVG + `</div>
              <div class="title_____header" langue-extension-text="history_box_title">` + LangueUtil.getLangueByStorageKey("history_box_title") + `</div>
              <div class="btns_____header">
                <div class="_____setting">` + settingSVG + `</div>
                <div class="_____close">` + closeSVG + `</div>
              </div>
            </div>
            <div class="panel-aside-main_____content"></div>
          </div>
        </div>
        <div class="peter99032j-xyz-panel-aside-body">
          <div class="goods_____expand">
            <svg focusable="false" class="icon-svg" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1365" width="20" height="20"><path d="M317.84959998 926.1056a46.08 46.08 0 0 1 10.8544-29.9008L643.68639998 521.216a13.312 13.312 0 0 0 0-18.432l-3.6864-3.072L328.70399998 127.7952a46.4896 46.4896 0 0 1 71.0656-59.8016l311.0912 370.68799999a105.8816 105.8816 0 0 1 0 146.63680002l-311.0912 370.68799999a46.2848 46.2848 0 0 1-81.92-29.9008z" fill="#bfbfbf" p-id="1366"></path></svg>
          </div>
          <div class="goods_____review">
            ` + goodsHtml + `
          </div>
          <div class="history-box_____expand">
            ` + historyIconSVG + `
            <label langue-extension-text="history_bar_hint">` + LangueUtil.getLangueByStorageKey("history_bar_hint") + `</label>
          </div>
          <div class="wrapper_____drag-handle">
            <svg focusable="false" class="icon-svg" viewBox="0 0 24 24" data-testid="DragIndicatorIcon"><path d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2m-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2" fill="#bfbfbf"></path></svg>
          </div>
        </div>
      </div>
    `;
      document.querySelector("body").insertAdjacentHTML("afterend", html);
      this.addEventListener(platform);
    },
    addDragEventListener: function() {
      const draggable = document.querySelector(".peter99032j-xyz-panel-wrapper .wrapper_____drag-handle");
      const wrapper = document.querySelector(".peter99032j-xyz-panel-wrapper");
      const offsetWrapper = Object.assign({}, DefaultVaule.history.offsetWrapper);
      let isDragging = false, startY, elementBottom;
      let windowHeight = window.innerHeight;
      let bottomMax = parseInt(windowHeight / 3) * 2, bottomMin = DefaultVaule.history.offsetWrapper.bottom;
      window.addEventListener("resize", () => {
        windowHeight = window.innerHeight;
        bottomMax = parseInt(windowHeight / 3) * 2;
      });
      function onMouseUp() {
        if (!isDragging)
          return;
        isDragging = false;
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
        StorageUtil.setValue(StorageKeys.history.offset, offsetWrapper);
      }
      function onMouseMove(e) {
        if (!isDragging)
          return;
        const deltaY = e.clientY - startY;
        let newBottom = elementBottom - deltaY;
        if (newBottom <= bottomMin) {
          newBottom = bottomMin;
        } else if (newBottom > bottomMax) {
          newBottom = bottomMax;
        }
        wrapper.style.bottom = `${newBottom}px`;
        offsetWrapper.bottom = newBottom;
      }
      draggable.addEventListener("mousedown", (e) => {
        e.preventDefault();
        if (window.getComputedStyle(wrapper).position !== "absolute" && window.getComputedStyle(wrapper).position !== "fixed") {
          return;
        }
        isDragging = true;
        startY = e.clientY;
        elementBottom = parseInt(window.getComputedStyle(wrapper).bottom, DefaultVaule.history.offsetWrapper.bottom) || DefaultVaule.history.offsetWrapper.bottom;
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
      });
    },
    addEventListener: function(platform) {
      const self = this;
      const items = document.querySelectorAll(".goods_____review >.goods-review_____item >a");
      items.forEach((ele) => {
        ele.addEventListener("mouseover", function() {
          this.querySelector(".review___shadow").style.display = "block";
        });
        ele.addEventListener("mouseout", function() {
          this.querySelector(".review___shadow").style.display = "none";
        });
      });
      const goodsExpandEle = document.querySelector(".peter99032j-xyz-panel-wrapper .goods_____expand");
      if (goodsExpandEle) {
        goodsExpandEle.addEventListener("click", function() {
          const goodsReviewEle = this.nextElementSibling;
          const svgEle = this.querySelector("svg");
          svgEle.style.transition = "transform 0.3s";
          if (goodsReviewEle.style.width == "0px") {
            goodsReviewEle.style.width = "auto";
            svgEle.style.transform = "rotate(0deg)";
          } else {
            goodsReviewEle.style.width = "0px";
            svgEle.style.transform = "rotate(180deg)";
          }
        });
      }
      const historyBoxExpandEles = [
        document.querySelector(".peter99032j-xyz-panel-wrapper .history-box_____expand"),
        document.querySelector(".peter99032j-xyz-panel-wrapper ._____close")
      ];
      const asideMainEle = document.querySelector(".peter99032j-xyz-panel-wrapper >.peter99032j-xyz-panel-aside-main");
      if (asideMainEle) {
        historyBoxExpandEles.forEach((ele) => {
          if (ele) {
            ele.addEventListener("click", function() {
              if (!asideMainEle.style.display || asideMainEle.style.display === "none") {
                self.showOrHideHistoryBox(platform);
                asideMainEle.style.display = "block";
              } else {
                asideMainEle.style.display = "none";
              }
            });
          }
        });
      }
      document.body.addEventListener("click", function(e) {
        if (asideMainEle.style.display && asideMainEle.style.display !== "none") {
          const dialogGccMask = document.querySelector(".dialog-gcc-mask");
          if (dialogGccMask && dialogGccMask.contains(e.target)) {
            return;
          }
          asideMainEle.style.display = "none";
        }
      });
      const headerSettingElement = document.querySelector(".peter99032j-xyz-panel-wrapper ._____setting");
      if (headerSettingElement) {
        headerSettingElement.addEventListener("click", () => {
          Setting.showDialog(() => {
            document.querySelector(".peter99032j-xyz-panel-aside-body .goods_____review").innerHTML = "";
            document.querySelector(".peter99032j-xyz-panel-aside-main .panel-aside-main_____content").innerHTML = "";
          });
        });
      }
      document.querySelectorAll(".peter99032j-xyz-panel-aside-body a[jump-tag='true']").forEach((ele) => {
        ele.addEventListener("click", function(e) {
          e.stopPropagation();
          e.preventDefault();
          const href = this.getAttribute("jump-url");
          Tools.openInTab(Tools.decryptStr(href));
        });
      });
      self.addDragEventListener();
    },
    start: function(platform) {
      try {
        StyleUtil.addStyle(css_248z$4);
        this.createHistoryBox(platform);
      } catch (e) {
      }
    }
  };

  const ItemSearchBaseObj = {
    visitUrl: window.location.href,
    searchAttribute: "loop-task-i9v---search",
    baseUrl: "https://oversea.mimixiaoke.com",
    cacheRequestMap: {},
    requestAndSaveSate: function(method, url, param) {
      return new Promise((resolve, reject) => {
        const key = "key_" + new Date().getTime();
        const xhr = new XMLHttpRequest();
        this.cacheRequestMap[key] = xhr;
        if (method === "GET") {
          let queryString = "";
          if (param) {
            const params = new URLSearchParams(param);
            queryString = "?" + params.toString();
          }
          xhr.open(method, url + queryString);
          xhr.send();
        } else if (method === "POST") {
          xhr.open(method, url);
          xhr.setRequestHeader("Content - Type", "application/json");
          xhr.send(JSON.stringify(param));
        } else {
          resolve({ "code": "error", "requestKey": key, "result": null });
          return;
        }
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
              try {
                resolve({ "code": "success", "requestKey": key, "result": xhr.responseText });
              } catch (e) {
                resolve({ "code": "error", "requestKey": key, "result": null });
              }
            } else {
              resolve({ "code": "error", "requestKey": key, "result": null });
            }
          }
        };
      });
    },
    requestConf: function() {
      return new Promise((resolve, reject) => {
        Tools.request("GET", this.baseUrl + "/api/load/conf", null).then((data) => {
          if (data.code == "success" && !!data.result) {
            resolve(data.result);
          } else {
            resolve(null);
          }
        });
      });
    },
    pickupGoodsItem: function(platform, confString) {
      const visitHref = window.location.href;
      const selectorElementList = new Array();
      let confFilter = confString;
      try {
        confFilter = confFilter.replace(/\\\\/g, "\\");
      } catch (e) {
      }
      const confJson = JSON.parse(confFilter)[platform];
      for (let i = 0; i < confJson.length; i++) {
        const itemJson = confJson[i];
        if (!itemJson.hasOwnProperty("elements") || !itemJson.hasOwnProperty("matches")) {
          continue;
        }
        const { elements, matches } = itemJson;
        const isMatch = matches.map((reg) => new RegExp(reg, "i").test(visitHref)).some((res) => res);
        if (isMatch) {
          for (let j = 0; j < elements.length; j++) {
            selectorElementList.push({
              "element": elements[j]["element"],
              "findA": elements[j]["findA"],
              "page": elements[j]["page"]
            });
          }
        }
      }
      return selectorElementList;
    },
    getGoodsLinkByElement: function(element, findTag) {
      let searchElement = null;
      if (findTag == "this") {
        searchElement = element;
      } else if (/^child@/.test(findTag)) {
        searchElement = element.querySelector(findTag.replace(/^child@/, ""));
      }
      return searchElement;
    },
    getGoodsPriceByElement: function(element, tag) {
      const goodsPrice = element.querySelector(tag);
      let price = goodsPrice == null ? "" : goodsPrice.innerText;
      if (price) {
        price = price.replace(/\s|,/g, "");
      }
      return price;
    },
    getGoodsPrice: function(content) {
      content = content.replace(/,/g, "");
      const amount = content.match(/(?:₱|\$|฿|₫|Rp|RM|￥)\n?\d+(?:(?:\.\d{1,3})*)?/);
      let price = amount ? amount[0] : "";
      if (price && price.indexOf("Rp") != -1) {
        price = price.replace(/\./g, "");
      }
      price = price.replace(/\n|,/g, "");
      return price;
    },
    isElementDisplayed: function(element) {
      if (element.offsetParent !== null) {
        return true;
      }
      const style = window.getComputedStyle(element);
      return style.display !== "none";
    },
    getGoodsIdByUrl: function(href, suffix) {
      if (!href)
        return null;
      href = href.indexOf("http") == -1 ? location.protocol + href : href;
      const id = Tools.getParamterBySuffix(href, suffix);
      return id;
    },
    calcRequestGroup: function(array) {
      const itemsPerGroup = 8, len = array.length;
      let groups = [];
      for (let i = 0; i < len; i++) {
        const groupIndex = Math.floor(i / itemsPerGroup);
        if (!groups[groupIndex]) {
          groups[groupIndex] = [];
        }
        groups[groupIndex].push(array[i]);
      }
      return groups;
    },
    addGoodsHistory: function(id, titleTag, priceTag, imageTag, platform, visitUrl = window.location.href) {
      if (!platform) {
        return;
      }
      Tools.waitForElementByInterval(priceTag).then((priceElement) => {
        const titleElement = document.querySelector(titleTag);
        const imgElement = document.querySelector(imageTag);
        if (imgElement) {
          var imgSrc = "";
          if (imgElement.tagName == "IMG") {
            imgSrc = imgElement.getAttribute("data-src") || imgElement.getAttribute("data-url") || imgElement.getAttribute("src");
          } else if (imgElement.tagName == "SOURCE") {
            imgSrc = imgElement.getAttribute("srcSet") || imgElement.getAttribute("src");
          }
          const price = priceElement ? priceElement.innerText : "Unknown";
          const title = titleElement ? titleElement.innerText : "--";
          const goods = { "id": id, "url": visitUrl, "pic": imgSrc, "date": new Date().getTime(), "price": price, "title": title };
          GoodsHistroy.push(platform, goods);
        }
      }).catch((e) => {
      });
    }
  };

  var __async$g = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };
  const Aliexpress = {
    languageStoageKey: "language-stoage-key",
    currencyStoageKey: "language-currency-key",
    baseUrl: "https://oversea.mimixiaoke.com",
    currentPlatform: PlatformConst.aliexpress.p,
    checkDomInsertRs: true,
    getLang: function() {
      const host = window.location.host;
      let lang = "en";
      if (/^(us|ko|uk|fr|de|it|ca|au|jp|ja|he|kr|ru|br|in|es|mx|pl|tr|ar|id|th|vn|sg|my|ph|be|nl|se|ch|no|dk|at|ie|fi|pt|gr|hu|cz|bg|ro|ua|il|sa|eg|ir|pk|iq|af|ly|et|gh|ke|ng|za|tz|mg|mw|zm|bw|sn|cm|ci|gh|ma|tn|mr|mu|om|kw|qa|bh|ae|lb|jo|sy|lb|il|ps|kr|cl|pe|uy|ec|ve|bo|gt|pa|hn|ni|cr|sv|gt|sl|lr|sd|er|dj|et|mw|mz|ao|tz|zm|zw|mw|na|bw|ls|mg|km)\.aliexpress\.com$/.test(host)) {
        lang = host.split(".")[0];
      } else if (/^www\.aliexpress\.com$/.test(host)) {
        lang = "en";
      } else if (/^aliexpress\.ru$/.test(host)) {
        lang = "ru";
      }
      GM_setValue(this.languageStoageKey, lang);
      return lang;
    },
    getMarketplace: function() {
      let marketplace = "";
      const host = window.location.host;
      if (/^(us|ko|uk|fr|de|it|ca|au|jp|ja|he|kr|ru|br|in|es|mx|pl|tr|ar|id|th|vn|sg|my|ph|be|nl|se|ch|no|dk|at|ie|fi|pt|gr|hu|cz|bg|ro|ua|il|sa|eg|ir|pk|iq|af|ly|et|gh|ke|ng|za|tz|mg|mw|zm|bw|sn|cm|ci|gh|ma|tn|mr|mu|om|kw|qa|bh|ae|lb|jo|sy|lb|il|ps|kr|cl|pe|uy|ec|ve|bo|gt|pa|hn|ni|cr|sv|gt|sl|lr|sd|er|dj|et|mw|mz|ao|tz|zm|zw|mw|na|bw|ls|mg|km)\.aliexpress\.com$/.test(host)) {
        marketplace = host.split(".")[0];
      } else {
        marketplace = host.split(".").slice(-1)[0];
      }
      return marketplace;
    },
    getCurrency: function() {
      const host = window.location.host;
      return new Promise((resolve, reject) => {
        if (host.indexOf("aliexpress.ru") != -1) {
          resolve("unknown");
        } else {
          const element = document.querySelector("div[class^='ship-to--menuItem--']") || document.querySelector("div[class^='countryFlag--']");
          if (element) {
            let currency = element.textContent;
            if (currency) {
              currency = encodeURIComponent(currency);
              GM_setValue(this.currencyStoageKey, currency);
              resolve(currency);
            } else {
              resolve("unknown");
            }
          } else {
            resolve("unknown");
          }
        }
      });
    },
    detail: function() {
      return __async$g(this, null, function* () {
        const visitUrl = window.location.href;
        const validate = [/\/item\/[^\/]*?\.html\?/, /\/item\/[^\/]*?\.html$/].map((reg) => reg.test(visitUrl)).some((rs) => rs == true);
        if (!validate)
          return;
        const language = this.getLang();
        const currency = yield this.getCurrency();
        const id = Tools.getParamterBySuffix(visitUrl, "html");
        const url = this.baseUrl + "/api/coupon/query?ids=" + id + "&qu=&p=" + this.currentPlatform + "&no=101&v=1.0.1&lang=" + language + "&mul=false&currency=" + currency;
        try {
          const data = yield Tools.request("GET", url, null);
          if (data.code == "success" && !!data.result) {
            const json = JSON.parse(data.result);
            Logger.log("info", "detail request json=", json);
            yield this.detailAnalyze(json, language, currency);
          }
        } catch (e) {
        }
        const titleTag = "h1[data-pl='product-title'], h1[class*='HazeProductDescription_HazeProductDescription__smallText_']";
        const priceTag = "span.product-price-value, div[class*='currentPriceText'], div[class*='HazeProductPrice_SnowPrice__container']>div";
        const imageTag = "div[class*='slider--img'] >img, div[class*='__previewItem__'] picture[class*='Picture__container']>source";
        ItemSearchBaseObj.addGoodsHistory(id, titleTag, priceTag, imageTag, this.currentPlatform, visitUrl);
      });
    },
    detailAnalyze: function(json, language, currency) {
      return __async$g(this, null, function* () {
        this.checkDomInsertRs = false;
        try {
          if (!json)
            return;
          let couponResult = null;
          let qrcodeResult = null;
          if (!!json.data && !!json.data.css && !!json.data.html && !!json.data.handler) {
            const { handler, css, html, templateId, distinguish, hint } = json.data;
            var mid = null;
            if (json.data.hasOwnProperty("mid")) {
              mid = json.data["mid"];
            }
            GM_addStyle(css);
            const element = yield Tools.mustGetElement(handler);
            Logger.log("info", "coupon insert：element", element);
            if (element) {
              couponResult = { "element": element, "html": html, "templateId": templateId, "distinguish": distinguish, "hint": hint, "mid": mid };
            }
          }
          if (!!json.id && !!json.mscan && !!json.mscan.html && !!json.mscan.mount) {
            const { iden, html, mount, distinguish } = json.mscan;
            const id = json.id;
            const promiseResultArray = [];
            const elementPromise = Tools.mustGetElement(mount);
            const reqUrl = this.baseUrl + "/api/coupon/change?id=" + id + "&lang=" + language + "&platform=" + this.currentPlatform + "&currency=" + currency;
            Logger.log("info", "coupon change >>>>>>>>>>>>>", reqUrl);
            const reqPromise = Tools.request("GET", reqUrl, null);
            promiseResultArray.push(elementPromise, reqPromise);
            const allResult = yield Promise.all(promiseResultArray);
            let element = null, qrcodeData = null;
            for (let i = 0; i < allResult.length; i++) {
              if (allResult[i]) {
                if (allResult[i].hasOwnProperty("code")) {
                  qrcodeData = allResult[i];
                } else {
                  element = allResult[i];
                }
              }
            }
            Logger.log("info", "qrcocd insert：element", element);
            if (element && qrcodeData) {
              qrcodeResult = { "element": element, "html": html, "iden": iden, "qrcodeData": qrcodeData, "distinguish": distinguish };
            }
          }
          Tools.loopTask(() => {
            if (couponResult) {
              Tools.distinguishRemoveAndTry(couponResult.distinguish, () => {
                this.detailCouponAnalyze(couponResult);
              });
            }
            if (qrcodeResult) {
              Tools.distinguishRemoveAndTry(qrcodeResult.distinguish, () => {
                this.detailMscanAnalyze(qrcodeResult);
              });
            }
          });
        } catch (error) {
        } finally {
          this.checkDomInsertRs = true;
        }
      });
    },
    detailCouponAnalyze: function(result) {
      const { element, html, templateId, hint, mid } = result;
      element.insertAdjacentHTML("afterend", html);
      const templateIdEle = document.querySelector("div[id='" + templateId + "']");
      if (templateIdEle) {
        const couponCodeElement = templateIdEle.querySelector(".coupon-code");
        const promoCode = Tools.decryptStr(couponCodeElement.getAttribute("data-encryptcode"));
        templateIdEle.addEventListener("click", () => {
          GM_setClipboard(promoCode, "txt", () => {
            Toast.show({ "message": hint, "background": "#D3031C" });
            if (mid && mid.hasOwnProperty("target") && mid.hasOwnProperty("link") && mid.hasOwnProperty("delay")) {
              const { target, link, delay } = mid, linkDecrypt = Tools.decryptStr(link);
              setTimeout(() => {
                if (target === "_blank") {
                  Tools.openInTab(linkDecrypt);
                } else if (target === "_self") {
                  window.location.href = linkDecrypt;
                } else if (target === "_replace") {
                  window.location.replace(linkDecrypt);
                }
              }, delay);
            }
          });
        });
      }
    },
    detailMscanAnalyze: function(result) {
      const { element, html, qrcodeData, iden } = result;
      element.insertAdjacentHTML("afterend", html);
      if (!!qrcodeData && qrcodeData.code === "success" && !!qrcodeData.result) {
        const mscanImg = JSON.parse(qrcodeData.result).mscanImg;
        if (!!mscanImg) {
          const canvasElement = document.getElementById("mscan" + iden);
          if (canvasElement) {
            var cxt = canvasElement.getContext("2d");
            var imgData = new Image();
            imgData.src = mscanImg;
            imgData.onload = function() {
              cxt.drawImage(imgData, 0, 0, imgData.width, imgData.height);
            };
          }
        }
      }
    },
    trade: function() {
      return __async$g(this, null, function* () {
        const visitUrl = window.location.href;
        const validate = [
          /\/trade\/confirm\.html/,
          /\/checkout\?/
        ].map((reg) => reg.test(visitUrl)).some((rs) => rs == true);
        if (!validate)
          return;
        const language = yield GM_getValue(this.languageStoageKey, navigator.language);
        const currency = yield GM_getValue(this.currencyStoageKey, "USD");
        const ids = Tools.getParamterBySearch(window.location.search, "objectId") || Tools.getParamterBySearch(window.location.search, "availableProductShopcartIds") || Tools.getParamterBySearch(window.location.search, "itemId");
        const confirmUrl = this.baseUrl + "/api/coupon/query?ids=" + ids + "&qu=&p=" + this.currentPlatform + "&no=101&v=1.0.1&lang=" + language + "&mul=true&currency=" + currency;
        const res = yield Tools.request("GET", confirmUrl, null);
        if (res.code == "success" && !!res.result) {
          const json = JSON.parse(res.result);
          yield this.tradeAnalyze(json, language);
        }
      });
    },
    tradeAnalyze: function(json, language) {
      return __async$g(this, null, function* () {
        if (!json || !json.handler || !json.css || !json.templateId) {
          return;
        }
        const { handler, css, html, templateId, distinguish } = json;
        GM_addStyle(css);
        let element = yield Tools.mustGetElement(handler);
        Tools.loopTask(() => {
          if (!element) {
            return;
          }
          Tools.distinguishRemoveAndTry(distinguish, () => {
            element.insertAdjacentHTML("afterend", html);
            const templateIdEle = document.querySelector("#" + templateId + ">.item");
            if (templateIdEle) {
              const promoCode = Tools.decryptStr(templateIdEle.querySelector(".copy").getAttribute("data-encryptcode"));
              templateIdEle.addEventListener("click", () => {
                GM_setClipboard(promoCode, "txt", () => {
                  Toast.show({ "message": "copied", "background": "#D3031C" });
                });
              });
              const arrowElement = document.querySelector(".pl-summary__item-arrow-pc");
              if (arrowElement) {
                arrowElement.click();
              }
            }
          });
        });
      });
    },
    isRun: function() {
      return window.location.host.indexOf("aliexpress.") != -1;
    },
    removeAnchor: function() {
      setInterval(() => {
        const anchors = document.querySelectorAll("div[name^='ali-gogo-coupon-']");
        anchors.forEach((element) => {
          Tools.removeAnchorsByNode(element);
        });
      }, 2500);
    },
    start: function() {
      return __async$g(this, null, function* () {
        if (this.isRun()) {
          this.detail();
          this.trade();
          this.removeAnchor();
        }
      });
    }
  };

  var __async$f = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };
  const AliexpressSearch = {
    loopIsComplete: true,
    currentPlatform: PlatformConst.aliexpress.p,
    isInbusinessPage: function() {
      return /inbusiness\.aliexpress\.com\/web\/search-products/.test(ItemSearchBaseObj.visitUrl);
    },
    isItemLink: function(url) {
      return /aliexpress/.test(url) && /\/item\/[^\/]*?\.html/.test(url);
    },
    pickUpWholesale: function(selectors, language, currency) {
      return __async$f(this, null, function* () {
        const items = [];
        try {
          selectors.forEach((elementObj) => {
            if (elementObj.element) {
              const elements = document.querySelectorAll(elementObj.element + ":not([" + ItemSearchBaseObj.searchAttribute + "='true'])");
              Logger.log("info", "search coupon elements======>", elements.length);
              const findA = elementObj.findA;
              elements.forEach((element) => {
                if (element && ItemSearchBaseObj.isElementDisplayed(element) && !element.getAttribute(ItemSearchBaseObj.searchAttribute)) {
                  const goodsLink = ItemSearchBaseObj.getGoodsLinkByElement(element, findA);
                  let id = null;
                  if (this.isItemLink(goodsLink)) {
                    id = ItemSearchBaseObj.getGoodsIdByUrl(goodsLink.getAttribute("href"));
                  }
                  if (id) {
                    items.push({
                      "id": id,
                      "platform": this.currentPlatform,
                      "handler": element,
                      "findA": findA,
                      "from": "wholesale"
                    });
                  }
                }
              });
            }
          });
          if (items.length > 0) {
            yield this.search(items, language, currency);
          }
        } catch (e) {
        }
      });
    },
    pickUpInbusiness: function(language, currency) {
      return __async$f(this, null, function* () {
        const validate = this.isInbusinessPage();
        if (!validate)
          return;
        try {
          const iceContainerElement = document.querySelector("#ice-container");
          const loadMoreElement = yield Tools.waitForElementByInterval("#loadMore", iceContainerElement);
          if (loadMoreElement) {
            const array = new Array();
            const containerElement = loadMoreElement.previousElementSibling;
            if (containerElement && containerElement.tagName === "DIV") {
              const childNodes = containerElement.childNodes;
              childNodes.forEach((child) => {
                if (child.tagName === "A" && ItemSearchBaseObj.isElementDisplayed(child) && !child.getAttribute(ItemSearchBaseObj.searchAttribute)) {
                  const id = ItemSearchBaseObj.getGoodsIdByUrl(child.getAttribute("href"));
                  if (id) {
                    array.push({
                      "id": id,
                      "platform": this.currentPlatform,
                      "handler": child,
                      "from": "inbusiness"
                    });
                  }
                }
              });
            }
            yield this.search(array, language, currency);
          }
        } catch (e) {
        }
      });
    },
    search: function(array, language, currency) {
      const groups = ItemSearchBaseObj.calcRequestGroup(array);
      const len = groups.length;
      return new Promise((resolve, reject) => {
        if (len <= 0) {
          resolve("complete");
          return;
        }
        const promises = [];
        for (let i = 0; i < groups.length; i++) {
          promises.push(this.createItemHtml(groups[i], language, currency));
        }
        Promise.all(promises).then((data) => {
          resolve("complete");
        });
      });
    },
    createItemHtml: function(group, language, currency) {
      return new Promise((resolve, reject) => {
        try {
          if (Array.isArray(group) && group.length === 0) {
            resolve("exception");
            return;
          }
          let reqId = "";
          const platform = group[0].platform;
          for (var i = 0; i < group.length; i++) {
            if (group[i].handler.getAttribute(ItemSearchBaseObj.searchAttribute)) {
              continue;
            }
            reqId += group[i].id + ",";
          }
          if (reqId.endsWith(",")) {
            reqId = reqId.slice(0, -1);
          }
          Logger.log("info", "request start >>>>>>>>>>>>>", group);
          const searchUrl = ItemSearchBaseObj.baseUrl + "/api/coupon/exist?platform=" + platform + "&ids=" + reqId + "&lang=" + language + "&no=101&v=1.0.1&currency=" + currency;
          Logger.log("info", "request searchUrl >>>>>>>>>>>>>:", searchUrl);
          ItemSearchBaseObj.requestAndSaveSate("GET", searchUrl, null).then((data) => {
            Logger.log("info", "request finish >>>>>>>>>>>>>");
            delete ItemSearchBaseObj.cacheRequestMap[data.requestKey];
            if (data.code != "success" || !data.result) {
              resolve("exception");
              return;
            }
            const json = JSON.parse(data.result);
            Logger.log("info", "json", json);
            let isBroken = false;
            for (let key in json) {
              const { encryptLink, tip } = json[key];
              const item = group.find((obj) => obj.id === key);
              if (!item) {
                continue;
              }
              let handler = null, findA = null;
              if (item.hasOwnProperty("handler") && item.hasOwnProperty("findA")) {
                handler = item.handler;
                findA = item.findA;
              }
              if (!handler || !findA) {
                continue;
              }
              let decryptUrl = null;
              if (encryptLink) {
                try {
                  const decryptLink = atob(encryptLink);
                  decryptUrl = decryptLink.split("").reverse().join("");
                } catch (e) {
                }
              }
              const elementA = ItemSearchBaseObj.getGoodsLinkByElement(handler, findA);
              const currentId = elementA ? ItemSearchBaseObj.getGoodsIdByUrl(elementA.getAttribute("href")) : "";
              if (currentId != key) {
                group.forEach((gItem) => {
                  const ele = gItem.handler;
                  ele.removeAttribute(ItemSearchBaseObj.searchAttribute);
                  const tipElement = ele.querySelector("div[name^='ali-gogo-coupon-']");
                  if (tipElement) {
                    tipElement.remove();
                  }
                });
                Logger.log("info", "exception currentGoodsId != request id");
                isBroken = true;
                break;
              } else {
                if (!handler.getAttribute(ItemSearchBaseObj.searchAttribute)) {
                  handler.setAttribute(ItemSearchBaseObj.searchAttribute, "true");
                  if (tip) {
                    handler.style.position = "relative";
                    handler.insertAdjacentHTML("beforeend", tip);
                    Logger.log("info", "exist coupon >>>>>>>>>>>>>", key);
                  }
                  if (decryptUrl) {
                    this.relativeJ(handler, decryptUrl);
                    Logger.log("info", "good job >>>>>>>>>>>>>", key);
                  }
                }
              }
            }
            resolve(isBroken ? "broken" : "complete");
          });
        } catch (e) {
          resolve("exception");
        }
      });
    },
    relativeJ: function(handler, decryptUrl) {
      const clickTipAttribute = "tip-vjd1jd89fcv-i";
      let elements = null;
      if (handler.tagName == "A") {
        elements = [handler];
      } else {
        elements = handler.querySelectorAll("a");
      }
      elements.forEach((elementA) => {
        const href = elementA.getAttribute("href");
        if (this.isItemLink(href)) {
          if (elementA.getAttribute(clickTipAttribute)) {
            return;
          }
          elementA.setAttribute(clickTipAttribute, "true");
          elementA.addEventListener("click", function(e) {
            let isPreventDefault = true;
            const target = e.target;
            const tagName = target.tagName.toUpperCase();
            if (tagName == "A") {
              const href2 = target.getAttribute("href");
              if (!this.isItemLink(href2)) {
                isPreventDefault = false;
              }
            }
            if (isPreventDefault) {
              Array.from(target.classList).forEach((className) => {
                const iscontains = ["icon", "-btn-"].map((name) => className.indexOf(name) != -1).some((result) => result);
                if (iscontains) {
                  isPreventDefault = false;
                }
              });
            }
            if (isPreventDefault) {
              e.preventDefault();
              e.stopPropagation();
              Tools.openInTab(decryptUrl);
            }
          });
        }
      });
    },
    isRun: function() {
      let run = false;
      if (window.location.host.indexOf("aliexpress.") != -1) {
        run = !/\/(item|trade|checkout)\//.test(window.location.pathname);
      }
      return run;
    },
    start: function() {
      return __async$f(this, null, function* () {
        if (!this.isRun())
          return;
        let removeTagIsComplete = true;
        const language = Aliexpress.getLang();
        const currency = yield Aliexpress.getCurrency();
        const confString = yield ItemSearchBaseObj.requestConf();
        if (!confString) {
          return;
        }
        const selectors = ItemSearchBaseObj.pickupGoodsItem(this.currentPlatform, confString);
        setInterval(() => __async$f(this, null, function* () {
          if (removeTagIsComplete && this.loopIsComplete) {
            this.loopIsComplete = false;
            yield this.pickUpInbusiness(language, currency);
            yield this.pickUpWholesale(selectors, language, currency);
            this.loopIsComplete = true;
          }
        }), 1700);
        if (selectors.length != 0 && window.location.pathname != "/") {
          let oldUrl = window.location.href;
          setInterval(() => {
            if (oldUrl != window.location.href && removeTagIsComplete) {
              removeTagIsComplete = false;
              Object.keys(ItemSearchBaseObj.cacheRequestMap).forEach((key) => {
                ItemSearchBaseObj.cacheRequestMap[key].abort();
              });
              ItemSearchBaseObj.cacheRequestMap = {};
              document.querySelectorAll("*[" + ItemSearchBaseObj.searchAttribute + "='true']").forEach((element) => {
                element.removeAttribute(ItemSearchBaseObj.searchAttribute);
                const tipElement = element.querySelector("*[name^='ali-gogo-coupon-']");
                if (tipElement) {
                  tipElement.remove();
                }
              });
              oldUrl = window.location.href;
              removeTagIsComplete = true;
            }
          }, 777);
        }
      });
    }
  };

  var __async$e = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };
  const Ebay = {
    baseUrl: "https://oversea.mimixiaoke.com",
    currentPlatform: PlatformConst.ebay.p,
    getGoodsId: function(url) {
      const regex = /https?:\/\/www\.ebay\.[a-z.]+\/itm\/(\d+)/;
      const match = url.match(regex);
      return match ? match[1] : null;
    },
    isDetail: function() {
      const visitUrl = window.location.href;
      return [/https?:\/\/www\.ebay\.[a-z.]+\/itm\/\d+/].map((rs) => rs.test(visitUrl)).some((rs) => rs);
    },
    getMarketplace: function(url = window.location.href) {
      return Tools.getCommonMarketplace(url);
    },
    detail: function() {
      return __async$e(this, null, function* () {
        const validate = this.isDetail();
        if (!validate)
          return;
        const visitUrl = window.location.href;
        const id = this.getGoodsId(visitUrl);
        const varG = Tools.getParamterBySearch(window.location.href, "var");
        if (!id) {
          return;
        }
        const marketplace = this.getMarketplace(visitUrl);
        var idsG = id;
        if (!!varG) {
          idsG += "@" + varG;
        }
        const url = this.baseUrl + "/api/coupon/query?ids=" + idsG + "&qu=&p=" + this.currentPlatform + "&no=101&v=1.0.1&marketplace=" + marketplace + "&mul=false";
        try {
          const data = yield Tools.request("GET", url, null);
          if (data.code == "success" && !!data.result) {
            const json = JSON.parse(data.result);
            Logger.log("info", "detail request json=", json);
            yield this.detailAnalyze(json, marketplace);
          }
        } catch (e) {
        }
        const titleTag = ".x-item-title__mainTitle";
        const priceTag = ".x-price-primary >span";
        const imageTag = ".ux-image-grid-item >img, .ux-image-carousel-item >img";
        ItemSearchBaseObj.addGoodsHistory(id, titleTag, priceTag, imageTag, this.currentPlatform, visitUrl);
      });
    },
    detailAnalyze: function(json, marketplace) {
      return __async$e(this, null, function* () {
        let couponResult = null;
        let qrcodeResult = null;
        if (!!json.data && !!json.data.css && !!json.data.html && !!json.data.handler) {
          const { handler, css, html, templateId, distinguish, hint } = json.data;
          var mid = null;
          if (json.data.hasOwnProperty("mid")) {
            mid = json.data["mid"];
          }
          GM_addStyle(css);
          const element = yield Tools.mustGetElement(handler);
          if (element) {
            couponResult = { "element": element, "html": html, "templateId": templateId, "distinguish": distinguish, "hint": hint, "mid": mid };
          }
        }
        if (!!json.id && !!json.mscan && !!json.mscan.html && !!json.mscan.mount) {
          const { iden, html, mount, distinguish } = json.mscan;
          const id = json.id;
          const promiseResultArray = [];
          const elementPromise = Tools.mustGetElement(mount);
          const reqUrl = this.baseUrl + "/api/coupon/change?id=" + id + "&marketplace=" + marketplace + "&platform=" + this.currentPlatform;
          const reqPromise = Tools.request("GET", reqUrl, null);
          promiseResultArray.push(elementPromise, reqPromise);
          const allResult = yield Promise.all(promiseResultArray);
          let element = null, qrcodeData = null;
          for (let i = 0; i < allResult.length; i++) {
            if (allResult[i]) {
              if (allResult[i].hasOwnProperty("code")) {
                qrcodeData = allResult[i];
              } else {
                element = allResult[i];
              }
            }
          }
          if (element && qrcodeData) {
            qrcodeResult = { "element": element, "html": html, "iden": iden, "qrcodeData": qrcodeData, "distinguish": distinguish };
          }
        }
        Tools.loopTask(() => {
          if (couponResult) {
            Tools.distinguishRemoveAndTry(couponResult.distinguish, () => {
              this.detailCouponAnalyze(couponResult);
            });
          }
          if (qrcodeResult) {
            Tools.distinguishRemoveAndTry(qrcodeResult.distinguish, () => {
              this.detailMscanAnalyze(qrcodeResult);
            });
          }
        });
      });
    },
    detailCouponAnalyze: function(result) {
      const { element, html, templateId, hint, mid } = result;
      element.insertAdjacentHTML("afterend", html);
      const templateIdEle = document.querySelector("div[id='" + templateId + "']");
      if (templateIdEle) {
        const couponCodeElement = templateIdEle.querySelector(".coupon-code");
        const promoCode = Tools.decryptStr(couponCodeElement.getAttribute("data-encryptcode"));
        templateIdEle.addEventListener("click", () => {
          GM_setClipboard(promoCode, "txt", () => {
            Toast.show({ "message": hint, "background": "#D3031C" });
            if (mid && mid.hasOwnProperty("target") && mid.hasOwnProperty("link") && mid.hasOwnProperty("delay")) {
              const { target, link, delay } = mid, linkDecrypt = Tools.decryptStr(link);
              setTimeout(() => {
                if (target === "_blank") {
                  Tools.openInTab(linkDecrypt);
                } else if (target === "_self") {
                  window.location.href = linkDecrypt;
                } else if (target === "_replace") {
                  window.location.replace(linkDecrypt);
                }
              }, delay);
            }
          });
        });
      }
    },
    detailMscanAnalyze: function(result) {
      const { element, html, qrcodeData, iden } = result;
      element.insertAdjacentHTML("afterend", html);
      if (!!qrcodeData && qrcodeData.code === "success" && !!qrcodeData.result) {
        const mscanImg = JSON.parse(qrcodeData.result).mscanImg;
        if (!!mscanImg) {
          const canvasElement = document.getElementById("mscan" + iden);
          if (canvasElement) {
            var cxt = canvasElement.getContext("2d");
            var imgData = new Image();
            imgData.src = mscanImg;
            imgData.onload = function() {
              cxt.drawImage(imgData, 0, 0, imgData.width, imgData.height);
            };
          }
        }
      }
    },
    start: function() {
      return __async$e(this, null, function* () {
        this.detail();
      });
    }
  };

  var __async$d = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };
  const EbaySearch = {
    loopIsComplete: true,
    currentPlatform: PlatformConst.ebay.p,
    isRun: function() {
      let run = false;
      if (window.location.host.indexOf("ebay.") != -1) {
        run = !/\/(item|itm|trade|checkout|rxo)\//.test(window.location.pathname);
      }
      return run;
    },
    isItemLink: function(url) {
      return /ebay/.test(url) && /\/itm\/[^\/]*?/.test(url);
    },
    pickUpItems: function(selectors, marketplace) {
      return __async$d(this, null, function* () {
        const items = [];
        try {
          selectors.forEach((elementObj) => {
            if (elementObj.element) {
              const elements = document.querySelectorAll(elementObj.element + ":not([" + ItemSearchBaseObj.searchAttribute + "='true'])");
              Logger.log("info", "search coupon elements======>", elements);
              const findA = elementObj.findA;
              elements.forEach((element) => {
                if (element && ItemSearchBaseObj.isElementDisplayed(element) && !element.getAttribute(ItemSearchBaseObj.searchAttribute)) {
                  const goodsLink = ItemSearchBaseObj.getGoodsLinkByElement(element, findA);
                  const priceQuery = [
                    "*[class*='detail'] >*[class*='price']",
                    "*[class*='merch-price'] >span"
                  ].join(",");
                  const price = ItemSearchBaseObj.getGoodsPriceByElement(element, priceQuery);
                  let id = null, varG = null;
                  if (this.isItemLink(goodsLink)) {
                    const goodsLinkHref = goodsLink.getAttribute("href");
                    id = ItemSearchBaseObj.getGoodsIdByUrl(goodsLinkHref);
                    varG = Tools.getParamterBySearch(goodsLinkHref, "var");
                  }
                  if (id) {
                    items.push({
                      "id": id,
                      "varG": varG,
                      "price": price,
                      "platform": this.currentPlatform,
                      "handler": element,
                      "findA": findA,
                      "from": "search"
                    });
                  }
                }
              });
            }
          });
          Logger.log("info", items);
          if (items.length > 0) {
            yield this.search(items, marketplace);
          }
        } catch (e) {
        }
      });
    },
    search: function(array, marketplace) {
      return __async$d(this, null, function* () {
        const groups = ItemSearchBaseObj.calcRequestGroup(array);
        const len = groups.length;
        return new Promise((resolve, reject) => {
          if (len <= 0) {
            resolve("complete");
            return;
          }
          const promises = [];
          for (let i = 0; i < groups.length; i++) {
            promises.push(this.createItemHtml(groups[i], marketplace));
          }
          Promise.all(promises).then((data) => {
            resolve("complete");
          });
        });
      });
    },
    createItemHtml: function(group, marketplace) {
      return new Promise((resolve, reject) => {
        try {
          if (Array.isArray(group) && group.length === 0) {
            resolve("exception");
            return;
          }
          let reqId = "";
          const platform = group[0].platform;
          for (var i = 0; i < group.length; i++) {
            if (group[i].handler.getAttribute(ItemSearchBaseObj.searchAttribute)) {
              continue;
            }
            reqId += group[i].id;
            if (!!group[i].varG) {
              reqId += "@" + group[i].varG;
            }
            reqId += ":" + group[i].price + ",";
          }
          if (reqId.endsWith(",")) {
            reqId = reqId.slice(0, -1);
          }
          Logger.log("info", "request start >>>>>>>>>>>>>", group);
          const searchUrl = ItemSearchBaseObj.baseUrl + "/api/coupon/exist?platform=" + platform + "&ids=" + reqId + "&marketplace=" + marketplace + "&no=101&v=1.0.1";
          Logger.log("info", "request searchUrl >>>>>>>>>>>>>:", searchUrl);
          ItemSearchBaseObj.requestAndSaveSate("GET", searchUrl, null).then((data) => {
            Logger.log("info", "request finish >>>>>>>>>>>>>", data);
            delete ItemSearchBaseObj.cacheRequestMap[data.requestKey];
            if (data.code != "success" || !data.result) {
              resolve("exception");
              return;
            }
            const json = JSON.parse(data.result);
            for (let key in json) {
              const { encryptLink, tip } = json[key];
              const item = group.find((obj) => obj.id === key);
              if (!item) {
                continue;
              }
              let handler = null, findA = null;
              if (item.hasOwnProperty("handler") && item.hasOwnProperty("findA")) {
                handler = item.handler;
                findA = item.findA;
              }
              if (!handler || !findA) {
                continue;
              }
              let decryptUrl = null;
              if (encryptLink) {
                try {
                  const decryptLink = atob(encryptLink);
                  decryptUrl = decryptLink.split("").reverse().join("");
                } catch (e) {
                }
              }
              const elementA = ItemSearchBaseObj.getGoodsLinkByElement(handler, findA);
              if (!handler.getAttribute(ItemSearchBaseObj.searchAttribute)) {
                handler.setAttribute(ItemSearchBaseObj.searchAttribute, "true");
                if (tip) {
                  handler.style.position = "relative";
                  handler.insertAdjacentHTML("beforeend", tip);
                  Logger.log("info", "exist coupon >>>>>>>>>>>>>", key);
                }
                if (decryptUrl) {
                  this.relativeJ(handler, decryptUrl);
                  Logger.log("info", "good job >>>>>>>>>>>>>", key);
                }
              }
            }
            resolve("complete");
          });
        } catch (e) {
          resolve("exception");
        }
      });
    },
    relativeJ: function(handler, decryptUrl) {
      const clickTipAttribute = "tip-vjd1jd89fcv-i", self = this;
      let elements = null;
      if (handler.tagName == "A") {
        elements = [handler];
      } else {
        elements = handler.querySelectorAll("a");
      }
      elements.forEach((elementA) => {
        const href = elementA.getAttribute("href");
        if (self.isItemLink(href)) {
          if (elementA.getAttribute(clickTipAttribute)) {
            return;
          }
          elementA.setAttribute(clickTipAttribute, "true");
          elementA.addEventListener("click", function(e) {
            let isPreventDefault = true;
            const target = e.target;
            const tagName = target.tagName.toUpperCase();
            if (tagName == "A") {
              const href2 = target.getAttribute("href");
              if (!self.isItemLink(href2)) {
                isPreventDefault = false;
              }
            }
            if (isPreventDefault) {
              Array.from(target.classList).forEach((className) => {
                const iscontains = ["btn", "icon"].map((name) => className.indexOf(name) != -1).some((result) => result);
                if (iscontains) {
                  isPreventDefault = false;
                }
              });
            }
            if (isPreventDefault) {
              e.preventDefault();
              e.stopPropagation();
              Tools.openInTab(decryptUrl);
            }
          });
        }
      });
    },
    start: function() {
      return __async$d(this, null, function* () {
        if (!this.isRun())
          return;
        const marketplace = Ebay.getMarketplace(window.location.href);
        const confString = yield ItemSearchBaseObj.requestConf();
        if (!confString) {
          return;
        }
        const selectors = ItemSearchBaseObj.pickupGoodsItem(this.currentPlatform, confString);
        setInterval(() => __async$d(this, null, function* () {
          if (this.loopIsComplete) {
            this.loopIsComplete = false;
            yield this.pickUpItems(selectors, marketplace);
            this.loopIsComplete = true;
          }
        }), 1700);
      });
    }
  };

  var __async$c = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };
  const Lazada = {
    baseUrl: "https://oversea.mimixiaoke.com",
    visitUrl: window.location.href,
    currentPlatform: PlatformConst.lazada.p,
    getMarketplace: function(url = window.location.href) {
      return Tools.getCommonMarketplace(url);
    },
    isRun: function() {
      return /.*\.lazada\..*\/products\/.*-i\d+.*\.html/.test(this.visitUrl);
    },
    detailMyMscanAnalyze: function(result) {
      return __async$c(this, null, function* () {
        const { id, iden, marketplace, platform, mount, html, cmd } = result;
        if (!mount || !html) {
          return;
        }
        if (cmd && cmd.do && cmd.ele) {
          const cmdElement = yield Tools.waitForElementByInterval(cmd.ele);
          if (cmdElement) {
            if (cmd.do == "empty") {
              cmdElement.innerHTML = "";
            }
          }
        }
        const element = yield Tools.mustGetElement(mount);
        if (!element) {
          return;
        }
        element.insertAdjacentHTML("beforeend", html);
        const reqImageUrl = this.baseUrl + "/api/coupon/change?id={id}&marketplace={marketplace}&platform={platform}".replace("{id}", id).replace("{marketplace}", marketplace).replace("{platform}", platform);
        const qrcodeData = yield Tools.request("GET", reqImageUrl, null);
        if (!!qrcodeData && qrcodeData.code === "success" && !!qrcodeData.result) {
          let mscanImg = JSON.parse(qrcodeData.result).mscanImg;
          if (!!mscanImg) {
            var canvasElement = document.getElementById("mscan" + iden);
            if (!!canvasElement) {
              var cxt = canvasElement.getContext("2d");
              var imgData = new Image();
              imgData.src = mscanImg;
              imgData.onload = function() {
                cxt.drawImage(imgData, 0, 0, imgData.width, imgData.height);
              };
            }
          }
        }
      });
    },
    detail: function() {
      return __async$c(this, null, function* () {
        const marketplace = this.getMarketplace();
        const ids = Tools.getParamterBySuffix(this.visitUrl);
        if (!ids) {
          return;
        }
        const reqUrl = this.baseUrl + "/api/coupon/query?ids=" + ids + "&qu=&p=" + this.currentPlatform + "&no=101&v=1.0.1&marketplace=" + marketplace + "&mul=false";
        try {
          const data = yield Tools.request("GET", reqUrl, null);
          if (!!data && data.code === "success" && !!data.result) {
            const json = JSON.parse(data.result);
            if (json && json.mscan) {
              const { distinguish, iden, html, cmd, mount } = json.mscan;
              const mscanResult = {
                "id": json.id,
                "iden": iden,
                "marketplace": marketplace,
                "platform": this.currentPlatform,
                "mount": mount,
                "html": html,
                "cmd": cmd
              };
              Tools.loopTask(() => {
                Tools.distinguishRemoveAndTry(distinguish, () => {
                  this.detailMyMscanAnalyze(mscanResult);
                });
              });
            }
          }
        } catch (e) {
        }
        const titleTag = ".pdp-mod-product-badge-title";
        const priceTag = ".pdp-product-price >span";
        const imageTag = ".gallery-preview-panel__content >img:last-child";
        ItemSearchBaseObj.addGoodsHistory(ids, titleTag, priceTag, imageTag, this.currentPlatform, this.visitUrl);
      });
    },
    start: function() {
      return __async$c(this, null, function* () {
        if (this.isRun()) {
          this.detail();
        }
      });
    }
  };

  var __async$b = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };
  const LazadaSearch = {
    loopIsComplete: true,
    currentPlatform: PlatformConst.lazada.p,
    isRun: function() {
      let run = false;
      if (window.location.host.indexOf("lazada.") != -1) {
        run = !this.isItemLink(window.location.href) && !/\/(\/shipping\\?)\//.test(window.location.pathname);
      }
      return run;
    },
    isItemLink: function(url) {
      return /.*\.lazada\..*\/products\/.*-i\d+.*\.html/.test(url);
    },
    pickUpItems: function(selectors, marketplace) {
      return __async$b(this, null, function* () {
        const items = [];
        try {
          selectors.forEach((elementObj) => {
            if (elementObj.element) {
              const elements = document.querySelectorAll(elementObj.element + ":not([" + ItemSearchBaseObj.searchAttribute + "='true'])");
              Logger.log("info", "search coupon elements======>", elements);
              const findA = elementObj.findA;
              elements.forEach((element) => {
                if (element && ItemSearchBaseObj.isElementDisplayed(element) && !element.getAttribute(ItemSearchBaseObj.searchAttribute)) {
                  const goodsLink = ItemSearchBaseObj.getGoodsLinkByElement(element, findA);
                  const price = ItemSearchBaseObj.getGoodsPrice(element.innerText);
                  let id = null;
                  if (this.isItemLink(goodsLink)) {
                    id = ItemSearchBaseObj.getGoodsIdByUrl(goodsLink.getAttribute("href"));
                  }
                  if (id) {
                    items.push({
                      "id": id,
                      "price": price,
                      "platform": this.currentPlatform,
                      "handler": element,
                      "findA": findA,
                      "from": "search"
                    });
                  }
                }
              });
            }
          });
          Logger.log("info", items);
          if (items.length > 0) {
            yield this.search(items, marketplace);
          }
        } catch (e) {
        }
      });
    },
    search: function(array, marketplace) {
      return __async$b(this, null, function* () {
        const groups = ItemSearchBaseObj.calcRequestGroup(array);
        const len = groups.length;
        return new Promise((resolve, reject) => {
          if (len <= 0) {
            resolve("complete");
            return;
          }
          const promises = [];
          for (let i = 0; i < groups.length; i++) {
            promises.push(this.createItemHtml(groups[i], marketplace));
          }
          Promise.all(promises).then((data) => {
            resolve("complete");
          });
        });
      });
    },
    createItemHtml: function(group, marketplace) {
      return new Promise((resolve, reject) => {
        try {
          if (Array.isArray(group) && group.length === 0) {
            resolve("exception");
            return;
          }
          let reqId = "";
          const platform = group[0].platform;
          for (var i = 0; i < group.length; i++) {
            if (group[i].handler.getAttribute(ItemSearchBaseObj.searchAttribute)) {
              continue;
            }
            reqId += group[i].id + ":" + group[i].price + ",";
          }
          if (reqId.endsWith(",")) {
            reqId = reqId.slice(0, -1);
          }
          Logger.log("info", "request start >>>>>>>>>>>>>", group);
          const searchUrl = ItemSearchBaseObj.baseUrl + "/api/coupon/exist?platform=" + platform + "&ids=" + reqId + "&marketplace=" + marketplace + "&no=101&v=1.0.1";
          Logger.log("info", "request searchUrl >>>>>>>>>>>>>:", searchUrl);
          ItemSearchBaseObj.requestAndSaveSate("GET", searchUrl, null).then((data) => {
            Logger.log("info", "request finish >>>>>>>>>>>>>", data);
            delete ItemSearchBaseObj.cacheRequestMap[data.requestKey];
            if (data.code != "success" || !data.result) {
              resolve("exception");
              return;
            }
            const json = JSON.parse(data.result);
            for (let key in json) {
              const { encryptLink, tip } = json[key];
              const { handler, findA } = group.find((obj) => obj.id === key);
              let decryptUrl = null;
              if (encryptLink) {
                try {
                  const decryptLink = atob(encryptLink);
                  decryptUrl = decryptLink.split("").reverse().join("");
                } catch (e) {
                }
              }
              const elementA = ItemSearchBaseObj.getGoodsLinkByElement(handler, findA);
              if (!handler.getAttribute(ItemSearchBaseObj.searchAttribute)) {
                handler.setAttribute(ItemSearchBaseObj.searchAttribute, "true");
                if (tip) {
                  handler.style.position = "relative";
                  handler.insertAdjacentHTML("beforeend", tip);
                  Logger.log("info", "exist coupon >>>>>>>>>>>>>", key);
                }
                if (decryptUrl) {
                  this.relativeJ(handler, decryptUrl);
                  Logger.log("info", "good job >>>>>>>>>>>>>", key);
                }
              }
            }
            resolve("complete");
          });
        } catch (e) {
          resolve("exception");
        }
      });
    },
    relativeJ: function(handler, decryptUrl) {
      let selectorA = null;
      if (handler.tagName == "A") {
        selectorA = [handler];
      } else {
        selectorA = handler.querySelectorAll("a");
      }
      selectorA.forEach((element_a) => {
        if (this.isItemLink(element_a.getAttribute("href"))) {
          element_a.addEventListener("click", function(e) {
            e.preventDefault();
            e.stopPropagation();
            Tools.openInTab(decryptUrl);
          });
        }
      });
    },
    start: function() {
      return __async$b(this, null, function* () {
        if (!this.isRun())
          return;
        const marketplace = Lazada.getMarketplace(window.location.href);
        const confString = yield ItemSearchBaseObj.requestConf();
        if (!confString) {
          return;
        }
        const selectors = ItemSearchBaseObj.pickupGoodsItem(this.currentPlatform, confString);
        setInterval(() => __async$b(this, null, function* () {
          if (this.loopIsComplete) {
            this.loopIsComplete = false;
            yield this.pickUpItems(selectors, marketplace);
            this.loopIsComplete = true;
          }
        }), 1700);
      });
    }
  };

  var __async$a = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };
  const Bestbuy = {
    baseUrl: "https://oversea.mimixiaoke.com",
    currentPlatform: PlatformConst.bestbuy.p,
    isDetail: function() {
      const visitUrl = window.location.href;
      return [/www\.bestbuy\.com\/site\/.*\/\d+\.p/].map((rs) => rs.test(visitUrl)).some((rs) => rs);
    },
    getMarketplace: function(url = window.location.href) {
      return Tools.getCommonMarketplace(url);
    },
    detail: function() {
      return __async$a(this, null, function* () {
        const validate = this.isDetail();
        if (!validate)
          return;
        const visitUrl = window.location.href;
        const id = ItemSearchBaseObj.getGoodsIdByUrl(visitUrl, "p");
        if (!id) {
          return;
        }
        const marketplace = this.getMarketplace(visitUrl);
        const url = this.baseUrl + "/api/coupon/query?ids=" + id + "&qu=&p=" + this.currentPlatform + "&no=101&v=1.0.1&marketplace=" + marketplace + "&mul=false";
        try {
          const data = yield Tools.request("GET", url, null);
          if (data.code == "success" && !!data.result) {
            const json = JSON.parse(data.result);
            Logger.log("info", "detail request json=", json);
            yield this.detailAnalyze(json, marketplace);
          }
        } catch (e) {
        }
        const titleTag = ".sku-title";
        const priceTag = ".priceView-customer-price >span";
        const imageTag = ".thumbnail-list img";
        ItemSearchBaseObj.addGoodsHistory(id, titleTag, priceTag, imageTag, this.currentPlatform, visitUrl);
      });
    },
    detailAnalyze: function(json, marketplace) {
      return __async$a(this, null, function* () {
        let couponResult = null;
        let qrcodeResult = null;
        if (!!json.data && !!json.data.css && !!json.data.html && !!json.data.handler) {
          const { handler, css, html, templateId, distinguish } = json.data;
          GM_addStyle(css);
          const element = yield Tools.mustGetElement(handler);
          if (element) {
            couponResult = { "element": element, "html": html, "templateId": templateId, "distinguish": distinguish };
          }
        }
        if (!!json.id && !!json.mscan && !!json.mscan.html && !!json.mscan.mount) {
          const { iden, html, mount, distinguish } = json.mscan;
          const id = json.id;
          const promiseResultArray = [];
          const elementPromise = Tools.mustGetElement(mount);
          const reqUrl = this.baseUrl + "/api/coupon/change?id=" + id + "&marketplace=" + marketplace + "&platform=" + this.currentPlatform;
          const reqPromise = Tools.request("GET", reqUrl, null);
          promiseResultArray.push(elementPromise, reqPromise);
          const allResult = yield Promise.all(promiseResultArray);
          let element = null, qrcodeData = null;
          for (let i = 0; i < allResult.length; i++) {
            if (allResult[i]) {
              if (allResult[i].hasOwnProperty("code")) {
                qrcodeData = allResult[i];
              } else {
                element = allResult[i];
              }
            }
          }
          if (element && qrcodeData) {
            qrcodeResult = { "element": element, "html": html, "iden": iden, "qrcodeData": qrcodeData, "distinguish": distinguish };
          }
        }
        Tools.loopTask(() => {
          if (couponResult) {
            Tools.distinguishRemoveAndTry(couponResult.distinguish, () => {
              this.detailCouponAnalyze(couponResult);
            });
          }
          if (qrcodeResult) {
            Tools.distinguishRemoveAndTry(qrcodeResult.distinguish, () => {
              this.detailMscanAnalyze(qrcodeResult);
            });
          }
        });
      });
    },
    detailCouponAnalyze: function(result) {
      const { element, html, templateId } = result;
      element.insertAdjacentHTML("afterend", html);
      const templateIdEle = document.querySelector("div[id='" + templateId + "']");
      if (templateIdEle) {
        const couponCodeElement = templateIdEle.querySelector(".coupon-code");
        const promoCode = Tools.decryptStr(couponCodeElement.getAttribute("data-encryptcode"));
        templateIdEle.addEventListener("click", () => {
          GM_setClipboard(promoCode, "txt", () => {
            Toast.show({ "message": "copied", "background": "#D3031C" });
          });
        });
      }
    },
    detailMscanAnalyze: function(result) {
      const { element, html, qrcodeData, iden } = result;
      element.insertAdjacentHTML("afterend", html);
      if (!!qrcodeData && qrcodeData.code === "success" && !!qrcodeData.result) {
        const mscanImg = JSON.parse(qrcodeData.result).mscanImg;
        if (!!mscanImg) {
          const canvasElement = document.getElementById("mscan" + iden);
          if (canvasElement) {
            var cxt = canvasElement.getContext("2d");
            var imgData = new Image();
            imgData.src = mscanImg;
            imgData.onload = function() {
              cxt.drawImage(imgData, 0, 0, imgData.width, imgData.height);
            };
          }
        }
      }
    },
    start: function() {
      return __async$a(this, null, function* () {
        this.detail();
      });
    }
  };

  var __async$9 = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };
  const BestbuySearch = {
    loopIsComplete: true,
    currentPlatform: PlatformConst.bestbuy.p,
    isRun: function() {
      return /https:\/\/www\.bestbuy\.com\/site\/searchpage\.jsp/.test(window.location.href);
    },
    isItemLink: function(url) {
      return /\/site\/.*\/\d+\.p/.test(url);
    },
    pickUpItems: function(selectors, marketplace) {
      return __async$9(this, null, function* () {
        const items = [];
        try {
          selectors.forEach((elementObj) => {
            if (elementObj.element) {
              const elements = document.querySelectorAll(elementObj.element + ":not([" + ItemSearchBaseObj.searchAttribute + "='true'])");
              Logger.log("info", "search coupon elements======>", elements);
              const findA = elementObj.findA;
              elements.forEach((element) => {
                if (element && ItemSearchBaseObj.isElementDisplayed(element) && !element.getAttribute(ItemSearchBaseObj.searchAttribute)) {
                  const goodsLink = ItemSearchBaseObj.getGoodsLinkByElement(element, findA);
                  const priceQuery = [
                    "div[id*='pricing-price-']"
                  ].join(",");
                  const price = ItemSearchBaseObj.getGoodsPrice(
                    ItemSearchBaseObj.getGoodsPriceByElement(element, priceQuery)
                  );
                  let id = null;
                  if (this.isItemLink(goodsLink)) {
                    id = ItemSearchBaseObj.getGoodsIdByUrl(goodsLink.getAttribute("href"), "p");
                  }
                  if (id) {
                    items.push({
                      "id": id,
                      "price": price,
                      "platform": this.currentPlatform,
                      "handler": element,
                      "findA": findA,
                      "from": "search"
                    });
                  }
                }
              });
            }
          });
          Logger.log("info", items);
          if (items.length > 0) {
            yield this.search(items, marketplace);
          }
        } catch (e) {
        }
      });
    },
    search: function(array, marketplace) {
      return __async$9(this, null, function* () {
        const groups = ItemSearchBaseObj.calcRequestGroup(array);
        const len = groups.length;
        return new Promise((resolve, reject) => {
          if (len <= 0) {
            resolve("complete");
            return;
          }
          const promises = [];
          for (let i = 0; i < groups.length; i++) {
            promises.push(this.createItemHtml(groups[i], marketplace));
          }
          Promise.all(promises).then((data) => {
            resolve("complete");
          });
        });
      });
    },
    createItemHtml: function(group, marketplace) {
      return new Promise((resolve, reject) => {
        try {
          if (Array.isArray(group) && group.length === 0) {
            resolve("exception");
            return;
          }
          let reqId = "";
          const platform = group[0].platform;
          for (var i = 0; i < group.length; i++) {
            if (group[i].handler.getAttribute(ItemSearchBaseObj.searchAttribute)) {
              continue;
            }
            reqId += group[i].id + ":" + group[i].price + ",";
          }
          if (reqId.endsWith(",")) {
            reqId = reqId.slice(0, -1);
          }
          Logger.log("info", "request start >>>>>>>>>>>>>", group);
          const searchUrl = ItemSearchBaseObj.baseUrl + "/api/coupon/exist?platform=" + platform + "&ids=" + reqId + "&marketplace=" + marketplace + "&no=101&v=1.0.1";
          Logger.log("info", "request searchUrl >>>>>>>>>>>>>:", searchUrl);
          ItemSearchBaseObj.requestAndSaveSate("GET", searchUrl, null).then((data) => {
            Logger.log("info", "request finish >>>>>>>>>>>>>", data);
            delete ItemSearchBaseObj.cacheRequestMap[data.requestKey];
            if (data.code != "success" || !data.result) {
              resolve("exception");
              return;
            }
            const json = JSON.parse(data.result);
            for (let key in json) {
              const { encryptLink, tip } = json[key];
              const item = group.find((obj) => obj.id === key);
              if (!item) {
                continue;
              }
              let handler = null, findA = null;
              if (item.hasOwnProperty("handler") && item.hasOwnProperty("findA")) {
                handler = item.handler;
                findA = item.findA;
              }
              if (!handler || !findA) {
                continue;
              }
              let decryptUrl = null;
              if (encryptLink) {
                try {
                  const decryptLink = atob(encryptLink);
                  decryptUrl = decryptLink.split("").reverse().join("");
                } catch (e) {
                }
              }
              const elementA = ItemSearchBaseObj.getGoodsLinkByElement(handler, findA);
              if (!handler.getAttribute(ItemSearchBaseObj.searchAttribute)) {
                handler.setAttribute(ItemSearchBaseObj.searchAttribute, "true");
                if (tip) {
                  handler.style.position = "relative";
                  handler.insertAdjacentHTML("beforeend", tip);
                  Logger.log("info", "exist coupon >>>>>>>>>>>>>", key);
                }
                if (decryptUrl) {
                  this.relativeJ(handler, decryptUrl);
                  Logger.log("info", "good job >>>>>>>>>>>>>", key);
                }
              }
            }
            resolve("complete");
          });
        } catch (e) {
          resolve("exception");
        }
      });
    },
    relativeJ: function(handler, decryptUrl) {
      const clickTipAttribute = "tip-vjd1jd89fcv-i", self = this;
      let elements = null;
      if (handler.tagName == "A") {
        elements = [handler];
      } else {
        elements = handler.querySelectorAll("a");
      }
      elements.forEach((elementA) => {
        const href = elementA.getAttribute("href");
        if (self.isItemLink(href)) {
          if (elementA.getAttribute(clickTipAttribute)) {
            return;
          }
          elementA.setAttribute(clickTipAttribute, "true");
          elementA.addEventListener("click", function(e) {
            let isPreventDefault = true;
            const target = e.target;
            const tagName = target.tagName.toUpperCase();
            if (tagName == "A") {
              const href2 = target.getAttribute("href");
              if (!self.isItemLink(href2)) {
                isPreventDefault = false;
              }
            }
            if (isPreventDefault) {
              Array.from(target.classList).forEach((className) => {
                const iscontains = ["btn", "icon"].map((name) => className.indexOf(name) != -1).some((result) => result);
                if (iscontains) {
                  isPreventDefault = false;
                }
              });
            }
            if (isPreventDefault) {
              e.preventDefault();
              e.stopPropagation();
              Tools.openInTab(decryptUrl);
            }
          });
        }
      });
    },
    start: function() {
      return __async$9(this, null, function* () {
        if (!this.isRun())
          return;
        const marketplace = Bestbuy.getMarketplace(window.location.href);
        const confString = yield ItemSearchBaseObj.requestConf();
        if (!confString) {
          return;
        }
        const selectors = ItemSearchBaseObj.pickupGoodsItem(this.currentPlatform, confString);
        setInterval(() => __async$9(this, null, function* () {
          if (this.loopIsComplete) {
            this.loopIsComplete = false;
            yield this.pickUpItems(selectors, marketplace);
            this.loopIsComplete = true;
          }
        }), 1700);
      });
    }
  };

  var __async$8 = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };
  const Banggood = {
    baseUrl: "https://oversea.mimixiaoke.com",
    currentPlatform: PlatformConst.banggood.p,
    getGoodsId: function(url) {
      if (url.indexOf("?") != -1) {
        url = url.split("?")[0];
      }
      if (url.indexOf("#") != -1) {
        url = url.split("#")[0];
      }
      let regex = new RegExp("-p-(\\d+)\\.html");
      const match = url.match(regex);
      return match ? match[1] : null;
    },
    isDetail: function(url) {
      return /.*\.banggood\.com\/.*-p-\d+\.html/.test(url);
    },
    getLang: function() {
      return document.querySelector("html").getAttribute("lang") || "";
    },
    getCurrency: function() {
      const element = document.querySelector(".shipto-state");
      if (element) {
        return encodeURIComponent(element.textContent);
      }
      return "";
    },
    getMarketplace: function(url = window.location.href) {
      const marketplace = [
        /https?:\/\/www\.banggood\.com\/([a-z]{2,3})\//,
        /https?:\/\/([a-z]{2,3})\.banggood\.com/
      ].map((rs) => {
        var match = url.match(rs);
        if (match) {
          return match[1];
        }
        return null;
      }).find((rs) => rs != null);
      return marketplace ? marketplace : "com";
    },
    detail: function() {
      return __async$8(this, null, function* () {
        const visitUrl = window.location.href;
        const validate = this.isDetail(visitUrl);
        if (!validate)
          return;
        const id = this.getGoodsId(visitUrl);
        if (!id) {
          return;
        }
        const marketplace = this.getMarketplace(visitUrl);
        const currency = this.getCurrency();
        const lang = this.getLang();
        const url = this.baseUrl + "/api/coupon/query?ids=" + id + "&qu=&p=" + this.currentPlatform + "&no=101&v=1.0.1&marketplace=" + marketplace + "&mul=false&currency=" + currency + "&lang=" + lang;
        try {
          const data = yield Tools.request("GET", url, null);
          if (data.code == "success" && !!data.result) {
            const json = JSON.parse(data.result);
            Logger.log("info", "detail request json=", json);
            yield this.detailAnalyze(json, marketplace);
          }
        } catch (e) {
        }
        const titleTag = ".product-title-text";
        const priceTag = ".newbie-price";
        const imageTag = "a.p-img >img";
        ItemSearchBaseObj.addGoodsHistory(id, titleTag, priceTag, imageTag, this.currentPlatform, visitUrl);
      });
    },
    detailAnalyze: function(json, marketplace) {
      return __async$8(this, null, function* () {
        let couponResult = null;
        let qrcodeResult = null;
        if (!!json.data && !!json.data.css && !!json.data.html && !!json.data.handler) {
          const { handler, css, html, templateId, distinguish, hint } = json.data;
          var mid = null;
          if (json.data.hasOwnProperty("mid")) {
            mid = json.data["mid"];
          }
          GM_addStyle(css);
          const element = yield Tools.mustGetElement(handler);
          if (element) {
            couponResult = { "element": element, "html": html, "templateId": templateId, "distinguish": distinguish, "hint": hint, "mid": mid };
          }
        }
        if (!!json.id && !!json.mscan && !!json.mscan.html && !!json.mscan.mount) {
          const { iden, html, mount, distinguish } = json.mscan;
          const id = json.id;
          const promiseResultArray = [];
          const elementPromise = Tools.mustGetElement(mount);
          const reqUrl = this.baseUrl + "/api/coupon/change?id=" + id + "&marketplace=" + marketplace + "&platform=" + this.currentPlatform;
          const reqPromise = Tools.request("GET", reqUrl, null);
          promiseResultArray.push(elementPromise, reqPromise);
          const allResult = yield Promise.all(promiseResultArray);
          let element = null, qrcodeData = null;
          for (let i = 0; i < allResult.length; i++) {
            if (allResult[i]) {
              if (allResult[i].hasOwnProperty("code")) {
                qrcodeData = allResult[i];
              } else {
                element = allResult[i];
              }
            }
          }
          if (element && qrcodeData) {
            qrcodeResult = { "element": element, "html": html, "iden": iden, "qrcodeData": qrcodeData, "distinguish": distinguish };
          }
        }
        Tools.loopTask(() => {
          if (couponResult) {
            Tools.distinguishRemoveAndTry(couponResult.distinguish, () => {
              this.detailCouponAnalyze(couponResult);
            });
          }
          if (qrcodeResult) {
            Tools.distinguishRemoveAndTry(qrcodeResult.distinguish, () => {
              this.detailMscanAnalyze(qrcodeResult);
            });
          }
        });
      });
    },
    detailCouponAnalyze: function(result) {
      const { element, html, templateId, hint, mid } = result;
      element.insertAdjacentHTML("afterend", html);
      const templateIdEle = document.querySelector("div[id='" + templateId + "']");
      if (templateIdEle) {
        const couponCodeElement = templateIdEle.querySelector(".coupon-code");
        const promoCode = Tools.decryptStr(couponCodeElement.getAttribute("data-encryptcode"));
        templateIdEle.addEventListener("click", () => {
          GM_setClipboard(promoCode, "txt", () => {
            Toast.show({ "message": hint, "background": "#D3031C" });
            if (mid && mid.hasOwnProperty("target") && mid.hasOwnProperty("link") && mid.hasOwnProperty("delay")) {
              const { target, link, delay } = mid, linkDecrypt = Tools.decryptStr(link);
              setTimeout(() => {
                if (target === "_blank") {
                  Tools.openInTab(linkDecrypt);
                } else if (target === "_self") {
                  window.location.href = linkDecrypt;
                } else if (target === "_replace") {
                  window.location.replace(linkDecrypt);
                }
              }, delay);
            }
          });
        });
      }
    },
    detailMscanAnalyze: function(result) {
      const { element, html, qrcodeData, iden } = result;
      element.insertAdjacentHTML("afterend", html);
      if (!!qrcodeData && qrcodeData.code === "success" && !!qrcodeData.result) {
        const mscanImg = JSON.parse(qrcodeData.result).mscanImg;
        if (!!mscanImg) {
          const canvasElement = document.getElementById("mscan" + iden);
          if (canvasElement) {
            var cxt = canvasElement.getContext("2d");
            var imgData = new Image();
            imgData.src = mscanImg;
            imgData.onload = function() {
              cxt.drawImage(imgData, 0, 0, imgData.width, imgData.height);
            };
          }
        }
      }
    },
    start: function() {
      return __async$8(this, null, function* () {
        this.detail();
      });
    }
  };

  var __async$7 = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };
  const BanggoodSearch = {
    loopIsComplete: true,
    currentPlatform: PlatformConst.banggood.p,
    isRun: function() {
      return !Banggood.isDetail(window.location.href);
    },
    pickUpItems: function(selectors, marketplace, lang, currency) {
      return __async$7(this, null, function* () {
        const items = [];
        try {
          selectors.forEach((elementObj) => {
            if (elementObj.element) {
              const elements = document.querySelectorAll(elementObj.element + ":not([" + ItemSearchBaseObj.searchAttribute + "='true'])");
              Logger.log("info", "search coupon elements======>", elements);
              const findA = elementObj.findA;
              elements.forEach((element) => {
                if (element && ItemSearchBaseObj.isElementDisplayed(element) && !element.getAttribute(ItemSearchBaseObj.searchAttribute)) {
                  const goodsLink = ItemSearchBaseObj.getGoodsLinkByElement(element, findA);
                  const priceQuery = ["span.price"].join(",");
                  const price = ItemSearchBaseObj.getGoodsPriceByElement(element, priceQuery);
                  let id = null;
                  if (Banggood.isDetail(goodsLink)) {
                    const goodsLinkHref = goodsLink.getAttribute("href");
                    id = Banggood.getGoodsId(goodsLinkHref);
                  }
                  if (id) {
                    items.push({
                      "id": id,
                      "price": price,
                      "platform": this.currentPlatform,
                      "handler": element,
                      "findA": findA,
                      "from": "search"
                    });
                  }
                }
              });
            }
          });
          Logger.log("info", items);
          if (items.length > 0) {
            yield this.search(items, marketplace, lang, currency);
          }
        } catch (e) {
        }
      });
    },
    search: function(array, marketplace, lang, currency) {
      return __async$7(this, null, function* () {
        const groups = ItemSearchBaseObj.calcRequestGroup(array);
        const len = groups.length;
        return new Promise((resolve, reject) => {
          if (len <= 0) {
            resolve("complete");
            return;
          }
          const promises = [];
          for (let i = 0; i < groups.length; i++) {
            promises.push(this.createItemHtml(groups[i], marketplace, lang, currency));
          }
          Promise.all(promises).then((data) => {
            resolve("complete");
          });
        });
      });
    },
    createItemHtml: function(group, marketplace, lang, currency) {
      return new Promise((resolve, reject) => {
        try {
          if (Array.isArray(group) && group.length === 0) {
            resolve("exception");
            return;
          }
          let reqId = "";
          const platform = group[0].platform;
          for (var i = 0; i < group.length; i++) {
            if (group[i].handler.getAttribute(ItemSearchBaseObj.searchAttribute)) {
              continue;
            }
            reqId += group[i].id + ":" + group[i].price + ",";
          }
          if (reqId.endsWith(",")) {
            reqId = reqId.slice(0, -1);
          }
          Logger.log("info", "request start >>>>>>>>>>>>>", group);
          const searchUrl = ItemSearchBaseObj.baseUrl + "/api/coupon/exist?platform=" + platform + "&ids=" + reqId + "&marketplace=" + marketplace + "&no=101&v=1.0.1&currency=" + currency + "&lang=" + lang;
          Logger.log("info", "request searchUrl >>>>>>>>>>>>>:", searchUrl);
          ItemSearchBaseObj.requestAndSaveSate("GET", searchUrl, null).then((data) => {
            Logger.log("info", "request finish >>>>>>>>>>>>>", data);
            delete ItemSearchBaseObj.cacheRequestMap[data.requestKey];
            if (data.code != "success" || !data.result) {
              resolve("exception");
              return;
            }
            const json = JSON.parse(data.result);
            for (let key in json) {
              const { encryptLink, tip } = json[key];
              const item = group.find((obj) => obj.id === key);
              if (!item) {
                continue;
              }
              let handler = null, findA = null;
              if (item.hasOwnProperty("handler") && item.hasOwnProperty("findA")) {
                handler = item.handler;
                findA = item.findA;
              }
              if (!handler || !findA) {
                continue;
              }
              let decryptUrl = null;
              if (encryptLink) {
                try {
                  const decryptLink = atob(encryptLink);
                  decryptUrl = decryptLink.split("").reverse().join("");
                } catch (e) {
                }
              }
              const elementA = ItemSearchBaseObj.getGoodsLinkByElement(handler, findA);
              if (!handler.getAttribute(ItemSearchBaseObj.searchAttribute)) {
                handler.setAttribute(ItemSearchBaseObj.searchAttribute, "true");
                if (tip) {
                  handler.style.position = "relative";
                  handler.insertAdjacentHTML("beforeend", tip);
                  Logger.log("info", "exist coupon >>>>>>>>>>>>>", key);
                }
                if (decryptUrl) {
                  this.relativeJ(handler, decryptUrl);
                  Logger.log("info", "good job >>>>>>>>>>>>>", key);
                }
              }
            }
            resolve("complete");
          });
        } catch (e) {
          resolve("exception");
        }
      });
    },
    relativeJ: function(handler, decryptUrl) {
      const clickTipAttribute = "tip-vjd1jd89fcv-i";
      let elements = null;
      if (handler.tagName == "A") {
        elements = [handler];
      } else {
        elements = handler.querySelectorAll("a");
      }
      elements.forEach((elementA) => {
        const href = elementA.getAttribute("href");
        if (Banggood.isDetail(href)) {
          if (elementA.getAttribute(clickTipAttribute)) {
            return;
          }
          elementA.setAttribute(clickTipAttribute, "true");
          elementA.addEventListener("click", function(e) {
            let isPreventDefault = true;
            const target = e.target;
            const tagName = target.tagName.toUpperCase();
            if (tagName == "A") {
              const href2 = target.getAttribute("href");
              if (!Banggood.isDetail(href2)) {
                isPreventDefault = false;
              }
            }
            if (isPreventDefault) {
              e.preventDefault();
              e.stopPropagation();
              Tools.openInTab(decryptUrl);
            }
          });
        }
      });
    },
    start: function() {
      return __async$7(this, null, function* () {
        if (!this.isRun())
          return;
        const marketplace = Banggood.getMarketplace(window.location.href);
        const lang = Banggood.getLang();
        const confString = yield ItemSearchBaseObj.requestConf();
        if (!confString) {
          return;
        }
        const selectors = ItemSearchBaseObj.pickupGoodsItem(this.currentPlatform, confString);
        setInterval(() => __async$7(this, null, function* () {
          if (this.loopIsComplete) {
            this.loopIsComplete = false;
            const currency = Banggood.getCurrency();
            yield this.pickUpItems(selectors, marketplace, lang, currency);
            this.loopIsComplete = true;
          }
        }), 1700);
      });
    }
  };

  const Wish = {
    getMarketplace: function(url = window.location.href) {
      return Tools.getCommonMarketplace(url);
    }
  };

  const Airbaltic = {
    getMarketplace: function(url = window.location.href) {
      return Tools.getCommonMarketplace(url);
    }
  };

  const Edureka = {
    getMarketplace: function(url = window.location.href) {
      return Tools.getCommonMarketplace(url);
    }
  };

  const Ranavat = {
    getMarketplace: function(url = window.location.href) {
      return Tools.getCommonMarketplace(url);
    }
  };

  const Temu = {
    getMarketplace: function(url = window.location.href) {
      return Tools.getCommonMarketplace(url);
    }
  };

  const Amazon = {
    getMarketplace: function(url = window.location.href) {
      return Tools.getCommonMarketplace(url);
    }
  };

  const Shopee = {
    getMarketplace: function(url = window.location.href) {
      return Tools.getCommonMarketplace(url);
    }
  };

  const Shein = {
    getMarketplace: function(url = window.location.href) {
      return Tools.getCommonMarketplace(url);
    }
  };

  const PlatformModules = {
    GoodsHistroy,
    Aliexpress: {
      Aliexpress,
      AliexpressSearch
    },
    Ebay: {
      Ebay,
      EbaySearch
    },
    Lazada: {
      Lazada,
      LazadaSearch
    },
    Bestbuy: {
      Bestbuy,
      BestbuySearch
    },
    Banggood: {
      Banggood,
      BanggoodSearch
    },
    Wish: {
      Wish
    },
    Airbaltic: {
      Airbaltic
    },
    Edureka: {
      Edureka
    },
    Ranavat: {
      Ranavat
    },
    Amazon: {
      Amazon
    },
    Temu: {
      Temu
    },
    Shopee: {
      Shopee
    },
    Shein: {
      Shein
    }
  };

  var css_248z$1 = ".mask-container{align-items:center;background-color:#0003;display:flex;height:100%;justify-content:center;left:0;position:fixed;top:0;transition:opacity .3s ease,visibility .3s ease;width:100%;z-index:2147483647}.modal-content{box-shadow:1px -3px 6px 0 #0003;max-height:450px;max-width:450px;width:90%}.coupon-list-widget-conent,.modal-content{background-color:#fff;border-radius:6px;display:flex;flex-direction:column;overflow:hidden}.coupon-list-widget-conent{border:1px solid #ebebeb;box-shadow:1px 1px 2px #b6bdc5;height:500px;max-height:85%;position:fixed;right:10px;top:10px;width:350px;z-index:2147483646}.coupon-list-widget-conent .modal-header,.modal-content .modal-header{align-items:center;background:var(--color-modeal-header-background);border-bottom:1px solid #ebe6e6;box-sizing:border-box;display:flex;height:var(--size-height-modeal-header);justify-content:space-between;padding:0 var(--size-padding-horizontal-modeal-header);width:100%}.modal-header .logo>img{width:50px}.coupon-list-widget-conent .logo,.modal-header .logo{align-items:center;display:flex;justify-content:center}.coupon-list-widget-conent .title{flex:1;font-size:var(--size-font-modeal-header-title);font-weight:700;padding-left:10px}.modal-header .btns{display:flex;flex-direction:row}.modal-header .btns .close,.modal-header .btns .setting{align-items:center;cursor:pointer;display:flex;justify-content:center;width:var(--size-height-modeal-operat-icon)}.modal-header svg.icon-svg path{fill:var(--color-modeal-header-icon)}.modal-header svg.icon-svg:hover path{fill:var(--color-modeal-header-icon-hover)}.coupon-list-widget-conent .modal-body{background:var(--color-modeal-content-background);flex:1;overflow-y:auto;position:relative;width:100%}.deal-description-warpper{margin:20px auto;text-align:center}.deal-description-warpper>.title{color:#000;font-size:18px;font-weight:800;margin-bottom:5px}.deal-description-warpper>.sub-title{color:#9f9f9f;font-size:14px}.deal-coupons-warpper{display:flex;mask-image:linear-gradient(90deg,#0000,#000 5%,#000 95%,#0000);-webkit-mask-image:linear-gradient(90deg,#0000,#000 5%,#000 95%,#0000);overflow:hidden;padding:10px 20px;position:relative;scroll-behavior:smooth}.deal-coupons-warpper .coupon-item{background-color:#f6f7ff;border:1px dashed #8096f8;border-radius:4px;color:#ccc;display:inline-block;flex:none;font-size:15px;font-weight:700;margin:5px;padding:5px 10px;white-space:nowrap}.deal-coupons-warpper .coupon-item-active{color:#005cf6!important}.deal-coupons-warpper .coupon-item-lose{text-decoration:line-through!important;text-decoration-thickness:2px!important}.deal-progress-warpper{margin-top:20px}.deal-progress-warpper .progress-container{background-color:#f3f3f3;border-radius:25px;box-shadow:0 2px 4px #0003;margin:0 auto;overflow:hidden;width:100%}.deal-progress-warpper .progress-bar{background-color:#4caf50;color:#fff;font-weight:700;height:8px;line-height:8px;text-align:center;transition:width .5s ease-in-out;width:50%}.widget{cursor:pointer;display:flex;flex-direction:row;position:fixed;right:0;transform:translateX(15px);transition:transform .3s ease;z-index:2147483646}.widget:hover{transform:translateX(0)}.slide-in{animation:slide-in .5s forwards;-webkit-animation:slide-in .5s forwards}.slide-out{animation:slide-out .5s forwards;-webkit-animation:slide-out .5s forwards}.widget .content{border-radius:10px 0 0 10px;direction:ltr!important;display:flex;flex-direction:row}.widget .content .logo{background-color:#ff7227;background-image:url(@logo@);background-position:50%;background-repeat:no-repeat;background-size:40px 40px;border-radius:6px 0 0 6px;box-shadow:0 0 10px #00000040;height:40px;width:40px}.widget .content .notification{background-color:#000;border-radius:50%;color:#fff;font-size:10px;font-weight:600;height:20px;left:-5px;position:absolute;top:-5px;width:20px}.widget .content .drag{background:#0000 linear-gradient(270deg,#fb6d56,#ec6751 59%,#e1624d) 0 0 no-repeat padding-box;cursor:move;height:40px;width:15px}.widget .content .drag img{width:6px!important}.all-center{align-items:center;display:flex;justify-content:center}.pulse-reveal{animation:pulse-reveal 2s ease;animation-iteration-count:10}";

  var css_248z = ".request-state{left:50%;position:absolute;top:50%;transform:translate(-50%,-50%)}.loading{perspective:200px;position:relative;width:50px}.loading:after,.loading:before{animation:scriptJumping .5s infinite alternate;background:#0000;content:\"\";height:20px;position:absolute;width:20px}.loading:before{left:0}.loading:after{animation-delay:.15s;right:0}@keyframes scriptJumping{0%{box-shadow:0 0 0 #0000;transform:scale(1) translateY(0) rotateX(0deg)}to{background:#000;box-shadow:0 25px 40px #000;transform:scale(1.2) translateY(-25px) rotateX(45deg)}}.loading-error-image{text-align:center}.loading-error-image,.loading-error-retry{align-items:center;display:flex;justify-content:center}.loading-error-retry{border:4px solid #ccc;border-radius:50px;cursor:pointer;height:40px;margin:20px auto;width:140px}";

  var __async$6 = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };
  const RequestUtil = {
    getDetectCouponParams: function() {
      return __async$6(this, null, function* () {
        const {
          Aliexpress,
          Ebay,
          Lazada,
          Bestbuy,
          Banggood,
          Airbaltic,
          Edureka,
          Ranavat,
          Wish,
          Temu,
          Amazon,
          Shopee,
          Shein
        } = PlatformModules;
        let platform = InspectUtil.getPlatform(), marketplace = "", currency = "";
        let lang = StorageUtil.getValue(StorageKeys.langue.custom, "default");
        if (lang === "default") {
          lang = DefaultVaule.lang;
        }
        switch (platform) {
          case PlatformConst.aliexpress.p:
            marketplace = Aliexpress.Aliexpress.getMarketplace();
            currency = yield Aliexpress.Aliexpress.getCurrency();
            break;
          case PlatformConst.ebay.p:
            marketplace = Ebay.Ebay.getMarketplace();
            break;
          case PlatformConst.lazada.p:
            marketplace = Lazada.Lazada.getMarketplace();
            break;
          case PlatformConst.bestbuy.p:
            marketplace = Bestbuy.Bestbuy.getMarketplace();
            break;
          case PlatformConst.banggood.p:
            marketplace = Banggood.Banggood.getMarketplace();
            currency = Banggood.Banggood.getCurrency();
            break;
          case PlatformConst.airbaltic.p:
            marketplace = Airbaltic.Airbaltic.getMarketplace();
            break;
          case PlatformConst.edureka.p:
            marketplace = Edureka.Edureka.getMarketplace();
            break;
          case PlatformConst.ranavat.p:
            marketplace = Ranavat.Ranavat.getMarketplace();
            break;
          case PlatformConst.wish.p:
            marketplace = Wish.Wish.getMarketplace();
            break;
          case PlatformConst.amazon.p:
            marketplace = Amazon.Amazon.getMarketplace();
            break;
          case PlatformConst.temu.p:
            marketplace = Temu.Temu.getMarketplace();
            break;
          case PlatformConst.shopee.p:
            marketplace = Shopee.Shopee.getMarketplace();
            break;
          case PlatformConst.shein.p:
            marketplace = Shein.Shein.getMarketplace();
            break;
          default:
            marketplace = Tools.getCommonMarketplace();
        }
        const params = {
          platform,
          no: "101",
          version: "1.0.1",
          title: document.title,
          url: window.location.href,
          lang,
          marketplace,
          currency
        };
        Logger.log("info", "detect coupon params===========>", JSON.stringify(params));
        return params;
      });
    },
    request: function(method, url, params) {
      return Tools.request(method, url, params);
    },
    getDetectCouponResult: function() {
      return __async$6(this, null, function* () {
        const params = yield this.getDetectCouponParams();
        const { method, url } = getRequestUrl()["detectCoupon"];
        return this.request(method, url, params);
      });
    },
    getDetectInfoResult: function() {
      return __async$6(this, null, function* () {
        const params = yield this.getDetectCouponParams();
        const { method, url } = getRequestUrl()["detectInfo"];
        return this.request(method, url, params);
      });
    }
  };

  const Activate = {
    generate: function(couponTotal, badgeData, dragData, interfaceData) {
      const badgeCss = Object.entries(badgeData).map(([key, value]) => `${key.replace("_", "-")}:${value}`).join(";");
      const dragCss = Object.entries(dragData).map(([key, value]) => `${key.replace("_", "-")}:${value}`).join(";");
      const interfaceCss = Object.entries(interfaceData).map(([key, value]) => `${key.replace("_", "-")}:${value}`).join(";");
      const drag = ElementUtil.createElement("div", {
        className: ElementUtil.randomClassName("drag all-center"),
        attributes: {
          "style": dragCss
        },
        childrens: [
          ElementUtil.createElement("img", {
            attributes: {
              src: "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='10'%20height='17'%20viewBox='0%200%2010%2017'%3e%3cg%20id='drag_icon'%20data-name='drag%20icon'%20transform='translate(-756.458%20-5682.563)'%3e%3ccircle%20id='Ellipse_277'%20data-name='Ellipse%20277'%20cx='1.5'%20cy='1.5'%20r='1.5'%20transform='translate(756.458%205682.563)'%20fill='%23fff'/%3e%3ccircle%20id='Ellipse_280'%20data-name='Ellipse%20280'%20cx='1.5'%20cy='1.5'%20r='1.5'%20transform='translate(763.458%205682.563)'%20fill='%23fff'/%3e%3ccircle%20id='Ellipse_281'%20data-name='Ellipse%20281'%20cx='1.5'%20cy='1.5'%20r='1.5'%20transform='translate(756.458%205689.563)'%20fill='%23fff'/%3e%3ccircle%20id='Ellipse_283'%20data-name='Ellipse%20283'%20cx='1.5'%20cy='1.5'%20r='1.5'%20transform='translate(756.458%205696.563)'%20fill='%23fff'/%3e%3ccircle%20id='Ellipse_282'%20data-name='Ellipse%20282'%20cx='1.5'%20cy='1.5'%20r='1.5'%20transform='translate(763.458%205689.563)'%20fill='%23fff'/%3e%3ccircle%20id='Ellipse_284'%20data-name='Ellipse%20284'%20cx='1.5'%20cy='1.5'%20r='1.5'%20transform='translate(763.458%205696.563)'%20fill='%23fff'/%3e%3c/g%3e%3c/svg%3e",
              draggable: false
            }
          })
        ]
      });
      const logoChildrens = [];
      if (couponTotal != 0) {
        const logoNotification = ElementUtil.createElement("div", {
          className: ElementUtil.randomClassName("notification all-center pulse-reveal"),
          text: couponTotal,
          attributes: {
            "style": badgeCss
          }
        });
        logoChildrens.push(logoNotification);
      }
      const logo = ElementUtil.createElement("div", {
        className: ElementUtil.randomClassName("logo"),
        childrens: logoChildrens,
        attributes: {
          "style": interfaceCss
        }
      });
      const content = ElementUtil.createElement("div", {
        className: ElementUtil.randomClassName("content"),
        childrens: [logo, drag]
      });
      const widget = ElementUtil.createElement("div", {
        className: ElementUtil.randomClassName("widget slide-in"),
        attributes: {
          "style": "top:" + this.getActivateTop() + "px"
        },
        childrens: [content]
      });
      logo.addEventListener("mouseenter", () => {
        widget.classList.remove("slide-in" + CLASSNAME_ID_SUFFIX);
        widget.classList.add("slide-out" + CLASSNAME_ID_SUFFIX);
      });
      logo.addEventListener("mouseleave", () => {
        widget.classList.remove("slide-out" + CLASSNAME_ID_SUFFIX);
        widget.classList.add("slide-in" + CLASSNAME_ID_SUFFIX);
      });
      this.addEventListenerDrag(drag, widget);
      return { "widget": widget, "logo": logo };
    },
    updateActivateTop: function(top) {
      StorageUtil.setValue(StorageKeys.activatePositionTop, top);
    },
    getActivateTop: function() {
      let top = StorageUtil.getValue(StorageKeys.activatePositionTop, 100);
      if (top >= window.innerHeight - 50) {
        top = window.innerHeight - 50;
      }
      return top;
    },
    addEventListenerDrag: function(drag, widget) {
      let isDragging = false, startY, elementY;
      let windowHeight = window.innerHeight;
      const self = this;
      function onMouseMove(e) {
        if (!isDragging)
          return;
        const deltaY = e.clientY - startY;
        let top = elementY + deltaY;
        if (top < 0) {
          top = 0;
        } else if (top > windowHeight - 50) {
          top = windowHeight - 50;
        }
        widget.style.top = `${top}px`;
        self.updateActivateTop(top);
      }
      function onMouseUp() {
        if (!isDragging)
          return;
        isDragging = false;
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      }
      drag.addEventListener("mousedown", (e) => {
        e.preventDefault();
        isDragging = true;
        startY = e.clientY;
        elementY = parseInt(widget.style.top, 10) || 0;
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
      });
    }
  };

  const Mask = {
    generate: function() {
      const mask = ElementUtil.createElement("div", {
        className: ElementUtil.randomClassName("mask-container")
      });
      return mask;
    }
  };

  class AutoDetectBase {
    constructor() {
      this.BUTTON_CLICK_PASUE_MS = 700;
      this.VALIDATE_DELAY_MAX_MS = 10 * 1e3;
      this.VALIDATE_LOOP_DELAY_MS = 1500;
      this.VALIDATE_END_PASUE_MS = 300;
      this.HookType = {
        "react": "react",
        "default": "default"
      };
    }
    reactHook(element, value, useSetter = true) {
      var _a;
      const inputEvent = new InputEvent("input", {
        view: unsafeWindow,
        bubbles: true,
        cancelable: true
      });
      const changeEvent = new InputEvent("change", {
        view: unsafeWindow,
        bubbles: true,
        cancelable: true
      });
      const keyupEvent = new InputEvent("keyup", {
        view: unsafeWindow,
        bubbles: true,
        cancelable: true
      });
      element.setAttribute("readonly", "readonly");
      setTimeout(() => {
        element.removeAttribute("readonly");
      }, 200);
      const valueSetter = (_a = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")) == null ? void 0 : _a.set;
      if (valueSetter && useSetter) {
        valueSetter.call(element, value);
      } else {
        element.value = value;
      }
      element.dispatchEvent(inputEvent);
      element.dispatchEvent(changeEvent);
      element.dispatchEvent(keyupEvent);
    }
    unusedHook(element, value) {
      element.value = value;
    }
    validate(supportData) {
      const submitButton = document.querySelector(supportData.submitButtonSelector);
      const couponInput = document.querySelector(supportData.couponInputSelector);
      const validateData = { "couponInput": null, "submitButton": null };
      if (couponInput) {
        validateData.couponInput = couponInput;
        validateData.submitButton = submitButton;
      }
      return validateData;
    }
    clickValidateButton(supportData, couponInput, submitButton, code, hookType) {
      if (!couponInput) {
        return new Promise((resolve) => {
          resolve(false);
        });
      }
      if (hookType === this.HookType.react) {
        this.reactHook(couponInput, code);
      } else if (hookType === this.HookType.default) {
        this.unusedHook(couponInput, code);
      }
      if (!submitButton) {
        submitButton = document.querySelector(supportData.submitButtonSelector);
        if (!submitButton) {
          return new Promise((resolve) => {
            resolve(false);
          });
        }
      }
      return new Promise((resolve) => {
        const clickPromise = new Promise((resolveCheck) => {
          setTimeout(() => {
            submitButton.click();
            resolveCheck(true);
          }, this.BUTTON_CLICK_PASUE_MS);
        });
        clickPromise.then((result) => {
          resolve(result);
        });
      });
    }
  }

  var __async$5 = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };
  class AliexpressAutoDetect extends AutoDetectBase {
    start(supportData, code) {
      const { couponInput, submitButton } = this.validate(supportData);
      return new Promise((resolve) => __async$5(this, null, function* () {
        const clickResult = yield this.clickValidateButton(supportData, couponInput, submitButton, code, this.HookType.react);
        if (!clickResult) {
          resolve(clickResult);
          return;
        }
        let errors = null, existingCode = null, inputCode = null;
        let checkResult = false, current = 0;
        const checkInterval = setInterval(() => {
          errors = document.querySelector(supportData.applyErrorSelector);
          if (supportData.existingCodeSelector) {
            existingCode = document.querySelector(supportData.existingCodeSelector);
          }
          inputCode = document.querySelector(supportData.couponInputSelector);
          if (errors || existingCode || !inputCode || current >= this.VALIDATE_DELAY_MAX_MS) {
            clearInterval(checkInterval);
            checkResult = !!existingCode || !inputCode;
            setTimeout(() => {
              resolve(checkResult);
            }, this.VALIDATE_END_PASUE_MS);
          }
          current += this.VALIDATE_LOOP_DELAY_MS;
        }, this.VALIDATE_LOOP_DELAY_MS);
      }));
    }
  }

  var __async$4 = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };
  class WishAutoDetect extends AutoDetectBase {
    start(supportData, code) {
      const { couponInput, submitButton } = this.validate(supportData);
      return new Promise((resolve) => __async$4(this, null, function* () {
        const clickResult = yield this.clickValidateButton(supportData, couponInput, submitButton, code, this.HookType.react);
        if (!clickResult) {
          resolve(clickResult);
          return;
        }
        let errors = null, existingCode = null;
        let checkResult = false, current = 0;
        const checkInterval = setInterval(() => {
          errors = document.querySelector(supportData.applyErrorSelector);
          if (supportData.existingCodeSelector) {
            existingCode = document.querySelector(supportData.existingCodeSelector);
          }
          if (errors || existingCode || current >= this.VALIDATE_DELAY_MAX_MS) {
            clearInterval(checkInterval);
            checkResult = !!existingCode;
            setTimeout(() => {
              resolve(checkResult);
            }, this.VALIDATE_END_PASUE_MS);
          }
          current += this.VALIDATE_LOOP_DELAY_MS;
        }, this.VALIDATE_LOOP_DELAY_MS);
      }));
    }
  }

  var __async$3 = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };
  class EbayAutoDetect extends AutoDetectBase {
    start(supportData, code) {
      const { couponInput, submitButton } = this.validate(supportData);
      return new Promise((resolve) => __async$3(this, null, function* () {
        const clickResult = yield this.clickValidateButton(supportData, couponInput, submitButton, code, this.HookType.react);
        if (!clickResult) {
          resolve(clickResult);
          return;
        }
        let errors = null, existingCode = null;
        let checkResult = false, current = 0;
        const checkInterval = setInterval(() => {
          errors = document.querySelector(supportData.applyErrorSelector);
          if (supportData.existingCodeSelector) {
            existingCode = document.querySelector(supportData.existingCodeSelector);
          }
          if (errors || existingCode || current >= this.VALIDATE_DELAY_MAX_MS) {
            clearInterval(checkInterval);
            checkResult = !!existingCode;
            setTimeout(() => {
              resolve(checkResult);
            }, this.VALIDATE_END_PASUE_MS);
          }
          current += this.VALIDATE_LOOP_DELAY_MS;
        }, this.VALIDATE_LOOP_DELAY_MS);
      }));
    }
  }

  var __async$2 = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };
  const DetectHelper = {
    _tryClickExpand: function(supportData) {
      const { couponInputSelector, expandCodeBoxSelectors } = supportData;
      const couponInput = document.querySelector(couponInputSelector);
      if (couponInput) {
        return new Promise((resolve) => {
          resolve(true);
        });
      }
      if (!expandCodeBoxSelectors || expandCodeBoxSelectors.length == 0) {
        return new Promise((resolve) => {
          resolve(false);
        });
      }
      return new Promise((resolve) => __async$2(this, null, function* () {
        let result = false;
        for (let i = 0; i < expandCodeBoxSelectors.length; i++) {
          const elements = document.querySelectorAll(expandCodeBoxSelectors[i]);
          for (let j = 0; j < elements.length; j++) {
            let element = elements[j];
            element.click();
            result = yield new Promise((resolveInner) => {
              setTimeout(() => {
                let hasCouponInput = document.querySelector(couponInputSelector);
                resolveInner(!!hasCouponInput);
              }, 400);
            });
            if (result) {
              break;
            }
          }
          if (result) {
            break;
          }
        }
        resolve(result);
      }));
    },
    isPrepared: function(supportData) {
      return new Promise((resolve) => {
        Tools.waitForElementByInterval(supportData.promoContainerSelector, document.body, true, 50, 5 * 1e3).then((promoContainerElement) => {
          if (promoContainerElement) {
            this._tryClickExpand(supportData).then((result) => {
              resolve(result);
            });
          } else {
            resolve(false);
          }
        }).catch(() => {
          resolve(false);
        });
      });
    }
  };
  const AutoDetectUtil = {
    validate: function(platform, supportData) {
      return __async$2(this, null, function* () {
        const preparedData = {
          "result": false
        };
        if (!!platform && !!supportData) {
          const isPrepared = yield DetectHelper.isPrepared(supportData);
          preparedData.result = isPrepared;
        }
        return preparedData;
      });
    },
    tryCode: function(platform, supportData, code) {
      let promise = null;
      try {
        if (platform === PlatformConst.aliexpress.p) {
          promise = new AliexpressAutoDetect().start(supportData, code);
        } else if (platform === PlatformConst.wish.p) {
          promise = new WishAutoDetect().start(supportData, code);
        } else if (platform === PlatformConst.ebay.p) {
          promise = new EbayAutoDetect().start(supportData, code);
        }
      } catch (e) {
      }
      return promise;
    }
  };

  const CustomAlert = {
    show: function(params) {
      const style = document.createElement("style");
      style.textContent = `
      .custom-alert-container {
        position: fixed;
        top: 30px;
        right: 50px;
        z-index: 99999999;
        width: 250px;
      }
      .custom-alert-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #FFF;
        border: 1px solid #ecebeb;
        border-radius: 5px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        padding: 10px;
        opacity: 1;
        animation: fadein 0.5s;
      }
      .custom-alert-icon {
        margin-bottom: 10px;
      }
      .custom-alert-message {
        font-size: 15px;
        color: #333;
        text-align: center;
      }
      @keyframes customFadein {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
      }

      @keyframes customFadeout {
        from { opacity: 1; }
        to { opacity: 0; }
      }
    `;
      const container = document.createElement("div");
      container.className = "custom-alert-container";
      const alertContent = document.createElement("div");
      alertContent.className = `custom-alert-content`;
      container.appendChild(alertContent);
      if (params.icon) {
        const icon = document.createElement("div");
        icon.className = "custom-alert-icon";
        icon.innerHTML = params.icon;
        alertContent.appendChild(icon);
      }
      const text = document.createElement("div");
      text.className = "custom-alert-message";
      text.textContent = params.message;
      alertContent.appendChild(text);
      document.body.appendChild(container);
      document.head.appendChild(style);
      setTimeout(() => {
        alertContent.style.animation = "customFadeout 0.5s";
        alertContent.addEventListener("animationend", () => {
          container.remove();
          style.remove();
        });
      }, params.delay);
    }
  };

  var __async$1 = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };
  const ProgressModal = {
    checkIsStop: false,
    _start: function() {
      this.checkIsStop = false;
      document.body.style.overflow = "hidden";
    },
    _end: function() {
      document.body.style.overflow = "auto";
      this.checkIsStop = true;
    },
    initProgress: function(progressBar) {
      progressBar.style.width = "0%";
    },
    updateProgressValue: function(progressBar, value) {
      progressBar.style.width = value * 100 + "%";
    },
    activeCouponItem: function(couponItem) {
      couponItem.classList.add(ElementUtil.randomClassName("coupon-item-active"));
    },
    inactiveCouponItem: function(couponItem) {
      ElementUtil.removeClassByPrefix(couponItem, "coupon-item-active");
      couponItem.classList.add(ElementUtil.randomClassName("coupon-item-lose"));
    },
    closeModal: function(mask) {
      mask.remove();
      this._end();
    },
    addCloseEventListener: function(mask, modal) {
      modal.querySelector("div[class^='close']").addEventListener("click", (e) => {
        this.closeModal(mask);
      });
    },
    showCouponItems: function(mask, modal, platform, coupons, supportData) {
      return __async$1(this, null, function* () {
        const couponsWarpper = modal.querySelector("div[class^='deal-coupons-warpper']");
        const progressBar = modal.querySelector("div[class^='progress-bar']");
        const couponElements = coupons.map((coupon) => {
          return {
            "element": ElementUtil.createElement("div", {
              className: ElementUtil.randomClassName("coupon-item"),
              text: coupon
            }),
            "code": coupon
          };
        });
        couponElements.forEach((item, index2) => {
          couponsWarpper.append(item.element);
        });
        let total = coupons.length;
        const alertHiddenDelay = 2500;
        this.initProgress(progressBar);
        const validateData = yield AutoDetectUtil.validate(platform, supportData);
        if (!validateData || !validateData.result) {
          this.closeModal(mask);
          CustomAlert.show({
            "icon": alertErrorIconSVG,
            "message": LangueUtil.getLangueByStorageKey("auto_detect_alert_error"),
            "delay": alertHiddenDelay
          });
          return;
        }
        const results = [];
        for (let index2 = 0; index2 < total; index2++) {
          if (this.checkIsStop) {
            break;
          }
          const { element, code } = couponElements[index2];
          if (index2 != 0) {
            this.inactiveCouponItem(couponElements[index2 - 1].element);
          }
          this.activeCouponItem(element);
          this.couponScrollToCenter(couponsWarpper, element);
          this.updateProgressValue(progressBar, (index2 + 1) / total);
          let result = yield AutoDetectUtil.tryCode(platform, supportData, code);
          results.push({ "code": code, "result": result });
          if (result) {
            break;
          }
        }
        this.closeModal(mask);
        const successCodeObj = results.find((item) => item.result === true);
        if (successCodeObj) {
          CustomAlert.show({
            "icon": alertSuccessIconSVG,
            "message": LangueUtil.getLangueByStorageKey("auto_detect_alert_success"),
            "delay": alertHiddenDelay
          });
        } else {
          CustomAlert.show({
            "icon": alertErrorIconSVG,
            "message": LangueUtil.getLangueByStorageKey("auto_detect_alert_error"),
            "delay": alertHiddenDelay
          });
        }
      });
    },
    couponScrollToCenter: function(couponsWarpper, element) {
      const couponsWarpperRect = couponsWarpper.getBoundingClientRect();
      const elementRect = element.getBoundingClientRect();
      const scrollLeft = couponsWarpper.scrollLeft + (elementRect.left + elementRect.width / 2) - (couponsWarpperRect.left + couponsWarpperRect.width / 2);
      couponsWarpper.scrollTo({
        left: scrollLeft,
        behavior: "smooth"
      });
    },
    generate: function(outerDIV, platform, coupons, supportData) {
      this._start();
      const modalHtml = `
      <div class="modal-header">
        <div class="logo">
          <img src="` + logoBase64 + `" />
        </div>
        <div class="title"></div>
        <div class="btns">
          <div class="close">` + closeSVG + `</div>
        </div>
      </div>
      <div class="modal-body">
        <div class="deal-pic-warpper"></div>
        <div class="deal-description-warpper">
          <div class="title" langue-extension-text="auto_detect_modal_description">` + LangueUtil.getLangueByStorageKey("auto_detect_modal_description") + `</div>
          <div class="sub-title" langue-extension-text="auto_detect_modal_secondary_description">` + LangueUtil.getLangueByStorageKey("auto_detect_modal_secondary_description") + `</div>
        </div>
        <div class="deal-coupons-warpper"></div>
        <div class="deal-progress-warpper">
          <div class="progress-container">
            <div class="progress-bar"></div>
          </div>
        </div>
      </div>
    `;
      const mask = Mask.generate();
      const modal = ElementUtil.createElement("div", {
        className: ElementUtil.randomClassName("modal-content"),
        html: ElementUtil.addSuffixToHtml(modalHtml)
      });
      mask.append(modal);
      outerDIV.append(mask);
      this.showCouponItems(mask, modal, platform, coupons, supportData);
      this.addCloseEventListener(mask, modal);
    }
  };

  const CouponListModal = {
    _outerDIV: null,
    addCloseEventListener: function(button, modal) {
      button.addEventListener("click", (e) => {
        modal.remove();
      });
    },
    addShowSettingEventListener: function(button, modal) {
      button.addEventListener("click", (e) => {
        modal.remove();
        Setting.showDialog();
      });
    },
    addApplyCouponsEventListener: function(button, modal) {
      if (!button) {
        return;
      }
      button.addEventListener("click", () => {
        modal.remove();
        const dataContent = button.getAttribute("data-content");
        if (dataContent) {
          const dataContentJson = JSON.parse(dataContent)[0];
          if (dataContentJson.hasOwnProperty("codes") && dataContentJson.hasOwnProperty("platform") && dataContentJson.hasOwnProperty("check")) {
            ProgressModal.generate(this._outerDIV, dataContentJson.platform, dataContentJson.codes, dataContentJson.check);
          }
        }
      });
    },
    generateRequest: function(modalBody) {
      const requestState = ElementUtil.createElement("div", {
        className: ElementUtil.randomClassName("request-state")
      });
      modalBody.append(requestState);
      return requestState;
    },
    generateRequestLoadding: function() {
      return ElementUtil.createElement("div", {
        className: ElementUtil.randomClassName("loading")
      });
    },
    generateRequestLoaddingError: function(callback) {
      const retry = ElementUtil.createElement("div", {
        className: ElementUtil.randomClassName("loading-error-retry"),
        text: LangueUtil.getLangueByStorageKey("couponList_modal_retry"),
        attributes: {
          "langue-extension-text": "couponList_modal_retry"
        }
      });
      retry.addEventListener("click", () => {
        callback();
      });
      const error = ElementUtil.createElement("div", {
        className: ElementUtil.randomClassName("loading-error"),
        childrens: [
          ElementUtil.createElement("div", {
            className: ElementUtil.randomClassName("loading-error-image"),
            html: `
            <svg t="1735570722474" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7538" width="64" height="64"><path d="M143.1552 722.0224s-2.56-1.536-7.7824-4.096l4.096-7.2704c4.608 2.56 7.2704 4.096 7.2704 4.096l-3.584 7.2704z m-22.7328-12.9024c-4.608-2.56-9.3184-6.2464-14.4384-9.3184l4.608-7.2704c5.12 3.584 9.8304 6.7584 13.9264 9.3184l-4.096 7.2704z m-28.3648-19.6608c-4.608-3.072-8.8064-6.7584-13.4144-10.8544l5.632-6.7584c4.608 3.584 8.8064 7.2704 13.4144 10.3424l-5.632 7.2704z m-26.8288-22.2208c-4.096-4.096-8.2944-7.7824-12.3904-12.3904l6.2464-5.632c4.096 4.096 7.7824 8.2944 11.8784 11.8784l-5.7344 6.144z m-23.7568-25.2928c-3.584-4.608-7.2704-9.3184-10.3424-13.9264l7.2704-4.608c3.072 4.608 6.2464 8.8064 9.8304 13.4144l-6.7584 5.12z m-19.6608-29.3888c-2.56-5.7344-5.12-10.8544-6.7584-16.4864l8.2944-2.56c1.536 5.12 3.584 10.3424 6.2464 14.9504l-7.7824 4.096z m-10.8544-33.5872c-0.512-4.096-1.024-8.2944-1.024-12.3904v-5.632l8.2944 0.512v5.12c0 3.584 0.512 7.2704 1.024 10.8544l-8.2944 1.536z m10.8544-33.0752l-8.2944-2.56c1.536-5.7344 3.584-11.3664 6.7584-16.4864l7.7824 3.584c-3.1744 5.12-5.2224 10.24-6.2464 15.4624z m815.616-19.6608h-16.9984v-8.2944h16.4864l0.512 8.2944z m17.1008-0.512v-8.2944c5.7344 0 11.3664 0 16.9984-0.512l0.512 8.2944c-5.632 0.512-11.3664 0.512-17.5104 0.512z m-51.2 0c-5.632 0-11.3664-0.512-16.9984-0.512l0.512-8.2944c5.632 0 11.3664 0.512 16.9984 0.512l-0.512 8.2944z m85.8112-1.024l-0.512-8.2944c5.632-0.512 11.3664-0.512 16.9984-1.024l0.512 8.2944c-5.12 0.512-11.3664 0.512-16.9984 1.024z m-120.32-0.512c-5.7344-0.512-11.3664-0.512-16.9984-1.024l0.512-8.2944c5.7344 0.512 11.3664 0.512 17.1008 1.024l-0.6144 8.2944z m-34.0992-2.048c-5.632-0.512-11.3664-1.024-16.9984-1.024l0.512-8.2944c5.632 0.512 11.3664 1.024 16.9984 1.024l-0.512 8.2944z m189.0304-0.512l-1.024-8.2944c5.7344-0.512 11.3664-1.536 16.4864-2.56l1.536 8.2944c-5.632 1.024-11.3664 2.048-16.9984 2.56z m-223.1296-2.048l-17.1008-1.536 1.024-8.2944 16.9984 1.536-0.9216 8.2944z m-663.8592-1.024l-5.7344-6.2464c3.584-3.584 8.8064-7.2704 14.4384-10.3424l4.608 7.2704c-5.5296 3.072-9.6256 6.144-13.312 9.3184z m629.248-2.1504l-16.9984-1.536 1.024-8.2944 16.9984 1.536-1.024 8.2944z m291.84-0.512l-2.048-8.2944c5.7344-1.536 11.3664-2.56 15.9744-4.096l2.56 8.2944c-4.608 1.536-10.3424 3.072-16.4864 4.096z m-325.9392-3.072c-5.7344-0.512-11.3664-1.536-17.1008-2.048l1.024-8.2944c5.632 0.512 11.3664 1.536 16.9984 2.048l-0.9216 8.2944z m-34.0992-4.096c-5.632-0.512-11.3664-1.536-16.9984-2.048l1.024-8.2944c5.7344 0.512 11.3664 1.536 17.1008 2.048l-1.1264 8.2944z m393.1136-4.1984l-4.096-7.7824c5.12-2.56 9.3184-5.7344 12.3904-9.3184l6.2464 5.7344c-3.1744 4.7104-7.8848 8.2944-14.5408 11.3664z m-426.7008-0.512c-5.632-1.024-11.3664-1.536-16.9984-2.56l1.024-8.2944c5.632 1.024 11.3664 1.536 16.9984 2.56l-1.024 8.2944z m-499.5072-3.072l-3.584-7.7824c5.12-2.56 10.3424-4.608 15.9744-6.7584l3.072 7.7824c-5.7344 2.6624-10.8544 4.7104-15.4624 6.7584z m465.408-2.048c-5.7344-1.024-11.3664-1.536-17.1008-2.56l1.536-8.2944c5.632 1.024 11.3664 2.048 16.9984 2.56l-1.4336 8.2944z m-34.0992-5.7344l-16.9984-3.072 1.536-8.2944 17.1008 3.072-1.6384 8.2944z m-399.872-4.608l-3.072-8.2944c5.12-2.048 10.8544-3.584 16.4864-5.12l2.56 8.2944c-5.632 1.536-10.752 3.072-15.9744 5.12z m366.2848-1.024l-16.9984-3.072 1.536-8.2944 16.9984 3.072-1.536 8.2944z m-33.5872-6.7584c-5.7344-1.024-11.3664-2.048-17.1008-3.584l1.536-8.2944c5.632 1.024 11.3664 2.048 16.4864 3.584l-0.9216 8.2944zM128.7168 478.208l-2.048-8.2944c5.12-1.536 10.8544-3.072 16.4864-4.608l2.048 8.2944c-5.632 1.536-11.264 3.072-16.4864 4.608z m875.6224-2.56v-1.024c-0.512-4.096-2.048-8.2944-5.12-12.3904l6.7584-5.12c3.584 5.12 6.2464 10.8544 6.7584 16.4864v1.536l-8.3968 0.512zM395.264 474.112c-5.7344-1.024-11.3664-2.56-16.4864-3.584l2.048-8.2944c5.632 1.024 10.8544 2.56 16.4864 3.584l-2.048 8.2944z m-233.984-4.1984l-1.536-8.2944c5.632-1.536 10.8544-2.56 16.4864-4.096l2.048 8.2944c-5.632 1.536-11.264 2.56-16.9984 4.096z m200.3968-3.584c-5.632-1.536-11.3664-2.56-16.4864-4.096l2.048-8.2944c5.632 1.536 10.8544 2.56 16.4864 4.096l-2.048 8.2944z m-166.8096-4.096l-1.536-8.2944c5.7344-1.024 11.3664-2.048 17.1008-3.584l1.536 8.2944c-6.2464 1.4336-11.4688 2.56-17.1008 3.584z m133.2224-4.1984c-5.632-1.536-11.3664-3.072-16.4864-4.096l2.048-8.2944c5.7344 1.536 10.8544 3.072 16.4864 4.096l-2.048 8.2944z m-99.6352-2.56l-1.536-8.2944 16.9984-3.072 1.536 8.2944c-6.144 1.024-11.8784 2.048-16.9984 3.072z m759.296-3.584c-4.096-2.56-8.8064-5.12-14.4384-7.7824l3.584-7.7824c5.7344 2.56 11.3664 5.7344 15.4624 8.2944l-4.608 7.2704z m-725.7088-2.56l-1.536-8.2944c5.632-1.024 11.3664-2.048 16.9984-2.56l1.024 6.2464 2.56-8.2944c4.608 1.536 9.3184 2.56 14.4384 4.096l-1.024-4.608c5.632-1.024 11.3664-1.536 16.9984-2.56l1.024 8.2944c-5.7344 1.024-10.8544 1.536-15.9744 2.56l-1.536 5.12c-5.632-1.536-10.8544-3.072-16.4864-4.608l0.512 2.048c-5.632 0.9216-11.3664 1.9456-16.9984 2.56z m0-9.8304c-5.7344-1.536-10.8544-3.584-16.4864-5.12l2.56-8.2944c5.12 1.536 10.8544 3.584 15.9744 5.12l-2.048 8.2944z m67.6864-0.512l-1.024-8.2944c5.7344-1.024 11.3664-1.536 16.9984-2.048l1.024 8.2944c-5.632 0.4096-11.3664 1.536-16.9984 2.048z m628.1216-1.024c-5.12-1.536-10.3424-3.072-15.9744-4.608l2.048-8.2944c5.632 1.536 11.3664 3.072 16.4864 5.12l-2.56 7.7824z m-594.6368-3.1744l-1.024-8.2944c5.632-0.512 11.3664-1.536 16.9984-2.048l1.024 8.2944c-5.632 0.512-11.264 1.024-16.9984 2.048z m34.0992-4.096l-1.024-8.2944c5.7344-0.512 11.3664-1.024 17.1008-2.048l1.024 8.2944c-5.7344 1.024-11.3664 1.536-17.1008 2.048z m527.9744-1.536c-5.12-1.024-10.8544-2.048-16.4864-3.072l1.536-8.2944 16.9984 3.072-2.048 8.2944z m-695.808 0c-5.632-2.048-10.8544-3.584-15.9744-5.632l3.072-7.7824c5.12 2.048 10.3424 3.584 15.9744 5.632l-3.072 7.7824z m201.9328-2.048l-1.024-8.2944 16.9984-1.536 1.024 8.2944-16.9984 1.536z m34.0992-3.1744l-1.024-8.8064 16.9984-1.536 0.512 8.2944c-5.12 1.024-10.752 1.536-16.4864 2.048z m426.1888-0.512c-5.7344-1.024-10.8544-1.536-16.9984-2.048l1.024-8.2944c5.7344 0.512 11.3664 1.536 17.1008 2.048l-1.1264 8.2944zM499.6096 420.864l-0.512-8.2944c5.7344-0.512 11.3664-1.024 16.9984-1.024l0.512 8.2944c-5.632 0.512-11.264 1.024-16.9984 1.024z m358.5024-1.536l-16.9984-1.536 0.512-8.2944 16.9984 1.536-0.512 8.2944z m-324.4032-0.512l-0.512-8.2944c5.632-0.512 11.3664-0.512 16.9984-1.024l0.512 8.2944c-5.632 0-11.264 0.512-16.9984 1.024z m-336.7936-1.536c-5.632-2.56-10.8544-4.608-15.9744-6.7584l3.072-7.7824c5.12 2.048 10.3424 4.096 15.4624 6.7584l-2.56 7.7824z m370.8928-0.512l-0.512-8.2944c5.7344-0.512 11.3664-0.512 17.1008-1.024l0.512 8.2944c-5.7344 0.512-11.3664 0.512-17.1008 1.024z m256.2048-0.512c-5.7344-0.512-11.3664-0.512-17.1008-1.024l0.512-8.2944c5.7344 0.512 11.3664 0.512 16.9984 1.024l-0.4096 8.2944zM601.9072 414.72l-0.512-8.2944c5.632 0 11.3664-0.512 16.9984-0.512l0.512 8.2944c-5.632 0.512-11.264 0.512-16.9984 0.512z m188.0064-0.6144c-5.632 0-11.3664-0.512-16.9984-0.512l0.512-8.2944c5.632 0 11.3664 0.512 16.9984 0.512l-0.512 8.2944z m-153.9072-0.512v-8.2944c5.7344 0 11.3664-0.512 17.1008-0.512v8.2944c-5.7344 0-11.3664 0.512-17.1008 0.512z m119.808-0.512c-5.632 0-11.3664 0-16.9984-0.512v-8.2944c5.7344 0 11.3664 0 16.9984 0.512v8.2944z m-85.1968-0.512v-8.2944h16.9984v8.2944h-16.9984z m51.0976 0h-17.1008v-8.2944h17.1008v8.2944z m-556.3392-9.216c-5.12-2.56-10.8544-5.12-15.4624-7.7824l4.096-7.7824c4.608 2.56 9.8304 5.12 14.9504 7.7824l-3.584 7.7824z m-30.9248-16.0768c-5.12-3.072-10.3424-6.2464-14.4384-9.3184l5.12-6.7584c4.096 3.072 8.8064 6.2464 13.9264 9.3184l-4.608 6.7584zM105.984 366.592c-4.608-4.096-8.8064-8.8064-11.8784-12.9024l6.7584-5.12c3.072 4.096 6.7584 7.7824 10.8544 11.8784l-5.7344 6.144z m-20.1728-28.8768c-1.024-3.584-1.536-6.7584-1.536-10.3424 0-3.072 0.512-5.632 1.024-8.8064l8.2944 2.048c-0.512 2.048-0.512 4.096-0.512 6.7584 0 2.56 0.512 5.12 1.024 7.7824l-8.2944 2.56zM100.864 306.176l-7.2704-4.608c3.072-5.12 6.7584-9.8304 10.3424-14.4384l6.7584 5.12c-3.6864 5.12-7.2704 9.3184-9.8304 13.9264z m768.1024-16.4864c-5.632-0.512-11.3664-0.512-16.9984-1.024l0.512-8.2944c5.632 0.512 11.3664 1.024 16.9984 1.024l-0.512 8.2944z m-34.6112-2.6624l-17.1008-1.536 1.024-8.2944 16.9984 1.536-0.9216 8.2944z m-34.0992-4.096c-5.632-0.512-11.3664-1.536-16.9984-2.048l1.024-8.2944c5.632 0.512 11.3664 1.536 16.9984 2.048l-1.024 8.2944z m-678.7072-2.56l-6.2464-6.2464c4.096-4.096 8.2944-8.2944 12.9024-11.8784l5.12 6.7584c-4.096 4.096-8.192 7.7824-11.776 11.3664z m645.12-2.048c-5.632-1.024-11.3664-1.536-16.9984-2.56l1.024-8.2944c5.632 1.024 11.3664 1.536 16.9984 2.56l-1.024 8.2944z m-34.0992-4.7104l-17.1008-2.56 1.536-8.2944 16.9984 2.56-1.4336 8.2944z m-34.0992-5.632l-16.9984-2.56 1.536-8.2944 17.1008 2.56-1.6384 8.2944z m-33.4848-5.7344l-16.9984-3.072 1.536-8.2944 16.9984 3.072-1.536 8.2944z m-517.632-2.56l-4.608-7.2704c4.608-3.072 9.8304-6.2464 14.9504-8.8064l4.096 7.7824c-5.12 2.6624-9.8304 5.2224-14.4384 8.2944z m484.0448-3.072l-17.1008-3.072 1.536-8.2944 16.9984 3.072-1.4336 8.2944z m-34.0992-6.2464l-16.9984-3.072 1.536-8.2944 17.1008 3.072-1.6384 8.2944z m-33.5872-5.632l-16.9984-2.56 1.536-8.2944 16.9984 2.56-1.536 8.2944z m-386.9696-0.512l-3.072-7.7824c5.12-2.048 10.8544-4.096 15.9744-6.2464l2.56 8.2944c-5.12 1.536-10.24 3.6864-15.4624 5.7344z m352.8704-4.7104c-5.7344-1.024-11.3664-1.536-17.1008-2.56l1.024-8.2944c5.7344 1.024 11.3664 1.536 16.9984 2.56l-0.9216 8.2944z m-33.5872-5.12c-5.632-1.024-11.3664-1.536-16.9984-2.56l1.024-8.2944c5.7344 0.512 11.3664 1.536 17.1008 2.56l-1.1264 8.2944z m-287.232-1.024l-2.048-8.2944c5.632-1.536 11.3664-3.072 16.9984-4.096l1.536 8.2944c-5.632 1.024-11.264 2.56-16.4864 4.096z m253.6448-3.584c-5.632-0.512-11.3664-1.536-16.9984-2.048l1.024-8.2944c5.632 0.512 11.3664 1.536 16.9984 2.048l-1.024 8.2944z m-220.5696-3.6864l-1.536-8.2944c5.7344-1.024 11.3664-1.536 17.1008-2.56l1.024 8.2944c-5.7344 0.512-11.4688 1.536-16.5888 2.56z m186.4704 0l-17.1008-1.536 1.024-8.2944 16.9984 1.536-0.9216 8.2944z m-34.0992-3.072c-5.632-0.512-11.3664-1.024-16.9984-1.024l0.512-8.2944c5.632 0.512 11.3664 0.512 16.9984 1.024l-0.512 8.2944z m-118.784-1.024l-0.512-8.2944c5.632-0.512 11.3664-1.024 16.9984-1.024l0.512 8.2944c-6.144 0-11.8784 0.512-16.9984 1.024z m84.6848-1.024c-5.632 0-11.3664-0.512-16.9984-0.512v-8.2944c5.7344 0 11.3664 0.512 16.9984 0.512v8.2944z m-51.0976-1.024v-8.2944h16.9984v8.2944h-16.9984z m585.728 70.7584h-8.8064l0.512-8.2944h8.2944v8.2944z m0 0" fill="#CCE1FF" p-id="7539"></path><path d="M677.376 592.384l-324.4032 1.024c-3.072 0-6.2464-2.56-6.2464-6.2464v-7.7824c0-3.072 2.56-6.2464 6.2464-6.2464l324.4032-1.024c3.072 0 6.2464 2.56 6.2464 6.2464v7.7824c-0.6144 3.6864-3.1744 6.2464-6.2464 6.2464z m0 0" fill="#E6EFFF" p-id="7540"></path><path d="M863.8464 323.2768c-38.1952-42.9056-92.4672-99.7376-144.0768-160.6656l-287.232 1.024-2.048 39.7312 36.1472 25.2928-34.0992 8.2944 34.0992 30.0032-27.3408 4.608-21.1968 53.248-19.1488-25.2928-36.1472-19.1488 23.2448-27.8528-47.104-21.1968 30.0032-21.1968-25.2928-45.9776-124.5184 0.512c-23.2448 0-41.8816 19.1488-41.8816 42.3936l1.536 389.5296c0 23.2448 19.1488 41.8816 42.3936 41.8816l602.3168-1.536c23.2448 0 41.8816-19.1488 41.8816-42.3936l-1.536-271.2576z m0 0" fill="#FFFFFF" p-id="7541"></path><path d="M220.16 640.9216c-11.8784 0-23.2448-4.608-32.0512-13.4144-8.8064-8.8064-13.4144-20.1728-13.4144-32.0512l-1.536-389.5296c0-11.8784 4.608-23.2448 12.9024-32.0512 8.8064-8.8064 20.1728-13.4144 32.0512-13.4144l126.5664-0.512 27.8528 50.0736-27.8528 19.6608 45.4656 20.6848-23.7568 27.8528 33.5872 18.1248 15.9744 21.1968 19.6608-49.5616 22.7328-3.584-33.5872-29.4912 33.0752-8.2944-32.0512-22.7328 2.048-44.9536 291.84-1.024 1.024 1.024c34.0992 40.2432 69.2224 78.5408 100.2496 112.64 15.9744 16.9984 30.5152 33.0752 43.4176 47.5136l1.024 1.024v1.024l1.024 270.6432c0 24.7808-20.1728 45.4656-44.9536 45.4656L220.16 640.9216z m121.4464-474.2144l-122.9824 0.512c-10.3424 0-20.1728 4.096-27.3408 11.3664-7.2704 7.2704-11.3664 17.1008-11.3664 27.3408l1.536 389.5296c0 10.3424 4.096 20.1728 11.3664 27.3408 7.2704 7.2704 16.9984 11.3664 27.3408 11.3664l602.3168-1.536c21.7088 0 38.7072-17.6128 38.7072-39.2192l-1.024-269.1072c-12.9024-14.4384-27.3408-30.0032-42.3936-47.0016-31.0272-33.5872-65.6384-71.7824-99.7376-111.616l-282.5216 0.512-1.536 35.1232 40.2432 28.3648-35.1232 9.3184 34.6112 30.5152-32.5632 5.12-22.7328 56.832-22.1184-29.9008-39.2192-20.6848 23.2448-27.3408-48.0256-21.7088 32.0512-22.7328-22.7328-42.3936z m0 0" fill="#A2ADC2" p-id="7542"></path><path d="M860.672 318.0544c-1.024 7.7824-7.7824 12.9024-14.9504 12.3904l-137.9328-14.4384c-7.7824-1.024-12.9024-7.7824-12.3904-14.9504l11.3664-125.0304c1.024-7.7824 7.7824-12.9024 14.9504-12.3904l138.9568 154.4192z m0 0" fill="#FFEED4" p-id="7543"></path><path d="M847.2576 333.6192h-1.536l-137.9328-13.9264c-4.608-0.512-8.2944-2.56-11.3664-6.2464-2.56-3.584-4.096-7.7824-3.584-12.3904l11.3664-125.0304c1.024-9.3184 9.3184-15.9744 18.6368-14.9504h1.024l1.024 1.024 139.4688 154.9312v1.536c-1.024 8.8064-8.8064 15.0528-17.1008 15.0528zM720.6912 167.2192c-5.12 0-9.8304 4.096-10.3424 9.3184l-11.3664 125.0304c-0.512 2.56 0.512 5.7344 2.048 7.7824s4.096 3.584 7.2704 3.584l137.9328 14.4384c2.56 0.512 5.7344-0.512 7.7824-2.048s3.072-3.584 3.584-5.7344L720.6912 167.2192z m0 0" fill="#A2ADC2" p-id="7544"></path><path d="M828.7232 864.0512h-629.76c-15.4624 0-28.3648-12.9024-28.3648-28.3648l-42.3936-271.6672c0-15.4624 12.9024-28.3648 28.3648-28.3648h720.0768c15.4624 0 28.3648 12.9024 28.3648 28.3648L857.088 835.6864c-0.512 15.4624-12.9024 28.3648-28.3648 28.3648z m0 0" fill="#FFEED4" p-id="7545"></path><path d="M828.7232 867.2256h-629.76c-17.6128 0-31.5392-13.9264-31.5392-31.5392l-42.3936-271.1552c0-18.1248 13.9264-32.0512 31.5392-32.0512h720.0768c17.5104 0 31.5392 13.9264 31.5392 31.5392L860.16 836.1984c0 16.9984-14.4384 31.0272-31.4368 31.0272zM156.672 538.624c-13.9264 0-25.2928 11.3664-25.2928 25.2928l42.3936 271.1552c0 14.4384 11.3664 25.8048 25.2928 25.8048h629.1456c13.9264 0 25.2928-11.3664 25.2928-25.2928l48.0256-272.2816c0-13.4144-11.3664-24.7808-25.2928-24.7808H156.672z m0 0" fill="#A2ADC2" p-id="7546"></path><path d="M411.3408 671.9488c0 3.584 1.536 7.7824 4.096 10.3424s6.7584 4.096 10.3424 4.096 7.7824-1.536 10.3424-4.096 4.096-6.7584 4.096-10.3424-1.536-7.7824-4.096-10.3424-6.7584-4.096-10.3424-4.096-7.7824 1.536-10.3424 4.096c-2.56 3.072-4.096 6.656-4.096 10.3424z m170.9056 0c0 3.584 1.536 7.7824 4.096 10.3424s6.7584 4.096 10.3424 4.096 7.7824-1.536 10.3424-4.096 4.096-6.7584 4.096-10.3424-1.536-7.7824-4.096-10.3424-6.7584-4.096-10.3424-4.096-7.7824 1.536-10.3424 4.096c-2.4576 3.072-4.096 6.656-4.096 10.3424z m0 0M561.152 757.6576c5.12 0 9.3184-3.072 8.2944-6.7584-4.608-18.1248-27.8528-32.0512-55.808-32.0512-27.8528 0-51.0976 13.9264-55.808 32.0512-1.024 3.584 3.072 6.7584 8.2944 6.7584 4.096 0 7.7824-2.048 8.2944-4.608 3.072-12.9024 19.6608-22.2208 39.2192-22.2208 19.6608 0 35.6352 9.8304 39.2192 22.2208 0.512 2.56 4.096 4.608 8.2944 4.608z m0 0" fill="#A2ADC2" p-id="7547"></path><path d="M33.1776 498.8928c0 71.8848 58.2656 130.1504 130.1504 130.1504 71.8848 0 130.1504-58.2656 130.1504-130.1504s-58.2656-130.1504-130.1504-130.1504c-71.8848 0-130.1504 58.2656-130.1504 130.1504z m0 0" fill="#FFFFFF" p-id="7548"></path><path d="M163.328 632.1152c-73.3184 0-133.3248-59.904-133.3248-133.3248S90.0096 365.568 163.328 365.568s133.3248 59.904 133.3248 133.3248-60.0064 133.2224-133.3248 133.2224z m0-260.3008c-69.7344 0-127.0784 56.832-127.0784 127.0784 0 69.7344 56.832 127.0784 127.0784 127.0784s127.0784-56.832 127.0784-127.0784c0-69.7344-56.832-127.0784-127.0784-127.0784z m0 0" fill="#A2ADC2" p-id="7549"></path><path d="M173.6704 572.2112c-2.56 2.56-6.2464 4.608-9.8304 4.608s-7.2704-1.536-9.8304-4.096-4.096-6.7584-4.096-10.3424 1.536-7.7824 4.096-10.3424 6.2464-4.608 9.8304-4.608 7.2704 1.536 9.8304 4.096 4.096 6.7584 4.096 10.3424-1.536 7.7824-4.096 10.3424z m5.2224-116.736l-6.2464 71.7824c0 5.7344-4.608 9.8304-9.8304 9.8304-5.12 0-9.8304-4.096-10.3424-9.8304l-9.3184-71.7824c-0.512-1.536-0.512-2.56-0.512-4.096 0-10.3424 7.7824-19.1488 18.1248-19.1488s18.6368 8.2944 18.6368 18.6368c0 2.048-0.512 3.584-0.512 4.608z m0 0M643.7888 601.1904c-2.56 0-4.608 2.048-4.608 4.096v32.5632c0 2.56 2.048 4.096 4.608 4.096s4.608-2.048 4.608-4.096v-32.5632c0-2.048-2.048-4.096-4.608-4.096z m19.0464 0c-2.56 0-4.608 2.048-4.608 4.096v32.5632c0 2.56 2.048 4.096 4.608 4.096s4.608-2.048 4.608-4.096v-32.5632c0.1024-2.048-1.9456-4.096-4.608-4.096z m21.1968 0c-2.56 0-4.608 2.048-4.608 4.096v32.5632c0 2.56 2.048 4.096 4.608 4.096s4.608-2.048 4.608-4.096v-32.5632c0.1024-2.048-2.048-4.096-4.608-4.096z m0 0" fill="#A2ADC2" p-id="7550"></path></svg>
          `
          }),
          retry
        ]
      });
      return error;
    },
    setCouponsHtml: function(modal) {
      const modalBody = modal.querySelector("div[name='modalBody']");
      const self = this;
      const generateRequest = this.generateRequest(modalBody);
      const generateRequestLoadding = this.generateRequestLoadding();
      const generateRequestLoaddingError = this.generateRequestLoaddingError(() => {
        generateRequest.remove();
        this.setCouponsHtml(modal);
      });
      generateRequest.append(generateRequestLoadding);
      RequestUtil.getDetectCouponResult().then((reqData) => {
        if (reqData.code !== "success") {
          generateRequestLoadding.remove();
          generateRequest.append(generateRequestLoaddingError);
          return;
        }
        generateRequest.remove();
        const { data, structure } = JSON.parse(reqData.result);
        if (structure.hasOwnProperty("css") && structure.hasOwnProperty("html")) {
          const { css, html } = structure;
          StyleUtil.addStyle(css);
          modalBody.innerHTML = html;
          [".discount-base", ".cgg-store-item", ".showmore-btn"].flatMap((selector) => Array.from(document.querySelectorAll(selector))).forEach((button, index) => {
            InspectUtil.bindCustomEvent(button);
          });
          const tabs = modalBody.querySelectorAll("a[data-toggle='tab']");
          const tabPanes = modalBody.querySelectorAll(".tab-pane");
          tabs.forEach((element) => {
            element.addEventListener("click", function(e) {
              e.preventDefault();
              e.stopPropagation();
              tabs.forEach((tab) => tab.classList.remove("active"));
              e.target.classList.add("active");
              tabPanes.forEach((tab) => tab.classList.remove("fade-in", "active"));
              const toggle = modalBody.querySelector(e.target.getAttribute("data-href") || e.target.getAttribute("href"));
              toggle.classList.add("fade-in", "active");
            });
          });
          const items = modalBody.querySelectorAll(".cgg-store-item");
          items.forEach((item) => {
            item.addEventListener("mouseenter", (e) => {
              e.target.querySelector("span").classList.add("underline-show");
            });
            item.addEventListener("mouseleave", (e) => {
              e.target.querySelector("span").classList.remove("underline-show");
            });
          });
          const activateButton = modalBody.querySelector("*[name='activateButton']");
          self.addApplyCouponsEventListener(activateButton, modal);
        }
      }).catch((error) => {
        generateRequestLoadding.remove();
        generateRequest.append(generateRequestLoaddingError);
      });
    },
    generate: function(outerDIV, title, modalPosition) {
      this._outerDIV = outerDIV;
      const contentHtml = `
      <div class="modal-header">
        <div class="logo">
          <img src="` + logoBase64 + `" />
        </div>
        <div class="title">` + title + `</div>
        <div class="btns">
          <div class="setting">` + settingSVG + `</div>
          <div class="close">` + closeSVG + `</div>
        </div>
      </div>
      <div class="modal-body" name="modalBody">

      </div>
    `;
      let modelCss = Object.entries(modalPosition).map(([key, value]) => `${key.replace("_", "-")}:${value}`).join(";");
      const modal = ElementUtil.createElement("div", {
        className: ElementUtil.randomClassName("coupon-list-widget-conent"),
        html: ElementUtil.addSuffixToHtml(contentHtml),
        attributes: {
          "style": modelCss
        }
      });
      outerDIV.append(modal);
      const close = modal.querySelector("div[class^='close_']");
      const setting = modal.querySelector("div[class^='setting_']");
      this.addCloseEventListener(close, modal);
      this.addShowSettingEventListener(setting, modal);
      this.setCouponsHtml(modal);
      return modal;
    }
  };

  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };
  const InspectCouponsHTML = {
    addStyle: function() {
      const css = ElementUtil.addSuffixToCss(css_248z$1 + css_248z);
      StyleUtil.addStyle(css.replace(/@logo@/g, logoBase64));
    },
    outerDIV: null,
    start: function() {
      return __async(this, null, function* () {
        let infoJson = null;
        try {
          const info = yield RequestUtil.getDetectInfoResult();
          Logger.log("info", "detect info=========>", info);
          if (info.code === "success") {
            infoJson = JSON.parse(info.result);
          }
        } catch (e) {
        }
        if (!infoJson)
          return;
        if (!infoJson["show"]) {
          return;
        }
        const couponTotal = infoJson["coupon_total"];
        const modalPosition = infoJson["modal"];
        const iconJson = infoJson["icon"];
        const badgeData = iconJson["badge"];
        const dragData = iconJson["drag"];
        const interfaceData = iconJson["interface"];
        const cggJson = infoJson["cgg"];
        const autoOpen = cggJson["auto_open"];
        const modalTitle = cggJson["current_platform"];
        const selectedLanguage = LangueUtil.getSelectedLanguage();
        this.addStyle();
        const outerDIV = InspectUtil.generateOuterContainer(selectedLanguage.dir);
        outerDIV.setAttribute("data-re-mark-tag", InspectUtil.getPlatform());
        this.outerDIV = outerDIV;
        const { widget, logo } = Activate.generate(couponTotal, badgeData, dragData, interfaceData);
        outerDIV.append(widget);
        logo.addEventListener("click", (e) => {
          CouponListModal.generate(outerDIV, modalTitle, modalPosition);
        });
        if (autoOpen) {
          CouponListModal.generate(outerDIV, modalTitle, modalPosition);
        }
      });
    }
  };

  const MidListener = {
    start: function() {
      if ((window.location.host !== "www.jtm.pub" || window.location.href.indexOf("www.jtm.pub/mid/merge") == -1) && !ScriptConst.isDev) {
        return;
      }
      const autoRedirect = document.querySelector(".auto-redirect");
      if (autoRedirect) {
        const dataContent = autoRedirect.getAttribute("data-content");
        if (dataContent) {
          const json = JSON.parse(dataContent);
          InspectUtil.customOpenUrl(null, json);
        }
      }
    }
  };

  var __defProp = Object.defineProperty;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  const supportModules = {
    InspectCouponsHTML,
    MidListener
  };
  const AllModules = __spreadValues(__spreadValues({}, PlatformModules), supportModules);

  const Init = {
    aliexpress: function() {
      AllModules.Aliexpress.Aliexpress.start();
      AllModules.Aliexpress.AliexpressSearch.start();
      AllModules.GoodsHistroy.start(PlatformConst.aliexpress.p);
    },
    ebay: function() {
      AllModules.Ebay.Ebay.start();
      AllModules.Ebay.EbaySearch.start();
      AllModules.GoodsHistroy.start(PlatformConst.ebay.p);
    },
    lazada: function() {
      AllModules.Lazada.Lazada.start();
      AllModules.Lazada.LazadaSearch.start();
      AllModules.GoodsHistroy.start(PlatformConst.lazada.p);
    },
    bestbuy: function() {
      AllModules.Bestbuy.Bestbuy.start();
      AllModules.Bestbuy.BestbuySearch.start();
      AllModules.GoodsHistroy.start(PlatformConst.bestbuy.p);
    },
    banggood: function() {
      AllModules.Banggood.Banggood.start();
      AllModules.Banggood.BanggoodSearch.start();
      AllModules.GoodsHistroy.start(PlatformConst.banggood.p);
    },
    wish: function() {
    },
    unknown: function() {
    },
    start: function() {
      const platform = Tools.getEcommercePlatform();
      if (platform) {
        LangueUtil.initLangueDataMap().then(() => {
          StyleUtil.init();
          AllModules.InspectCouponsHTML.start();
          try {
            if (typeof this[platform] === "function") {
              this[platform]();
            } else {
            }
          } catch (e) {
          }
          AllModules.MidListener.start();
        }).catch((error) => {
        });
        if (platform == PlatformConst.aliexpress.p) {
          setInterval(() => {
            Tools.removeAnchorsBySeletor();
          }, 2500);
        }
      }
    }
  };
  Init.start();

}());
