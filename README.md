# Boekenleggers.be — boekenleggerwinkel

Çalışma alanı: `/Users/semra/Desktop/kitap-ayraci-git`

Bu klasör, hediye odaklı kitap ayracı mağazasının analizlerini ve GitHub Pages üzerinde yayınlanan statik web prototipini içerir.

## İçerik

- `pazar-ve-musteri-analizi.md` — pazar, rakip ve müşteri analizi
- `etsy-fotograf-analizi.md` — mevcut Etsy görselleri üzerinden uygun ürün ve stil analizi
- `etsy-kaligrafi-analizi.md` — Etsy benzeri fiyat aralığı ve marka konumlandırması
- `web-tasarim-onerileri.md` — tasarım yönü ve görsel yaklaşım notları
- `site-guncelleme.md` — mağaza güncellemeleri, yayın geçmişi ve yayına çıkış kontrol listesi
- `taslaklar/mockup-1.html` — seçilen tasarım yönü, daha canlı ve pastel bir versiyon
- `index.html` — responsive winkel met een filterbare catalogus met 72 ontwerpen, winkelmandje en cookie-interface
- `styles.css` — ana tasarım, animasyonlar ve mobile-first stiller
- `script.js` — filteren, sorteren, pagineren, winkelmandje en interface-animaties
- `catalog-data.js` — productcodes, lokale afbeeldingen en reeksen
- `consent.js` — çerez tercihleri ve açık onaya bağlı opsiyonel script yükleme kapısı
- `privacy.html`, `cookies.html`, `voorwaarden.html`, `herroeping.html`, `verzending-retour.html`, `juridische-info.html` — Nederlandstalige juridische pagina's
- `legal.css` — juridische pagina's
- `robots.txt`, `sitemap.xml` — zoekmachine-instellingen
- `assets/logo.svg`, `assets/logo-mark.svg`, `assets/logo-mark-mono.svg`, `assets/favicon.svg` — logo en favicon
- `assets/fonts/` — lokaal gehoste Baloo 2- en Inter-lettertypen met OFL-licenties
- `assets/products/catalog/` — 72 geoptimaliseerde productfoto's uit `ETSY/Kart-Resimleri/ayraclar_ornek`
- `assets/products/` — de eerder gebruikte voorbeeldfoto's voor pagina's en de demo-cadeaubox
- WhatsApp-contactknop op de winkel- en juridische pagina's, gekoppeld aan `+32 465 75 82 40`

## Huidige V2-vormgeving

De catalogus volgt de rustige winkelindeling van een klassieke boekhandel: filterreeksen links, productfoto's van boven naar beneden en sortering/paginering boven en onder de productlijst. De scherpe albumvormen zijn vervangen door een warme papierkleur, afgeronde productkaarten, subtiele randen en serif-koppen.

- 72 ontwerpen, gefilterd met de aangeleverde reeksindeling: FL bloemen, CT katten, AN dieren, XM winter/kerst, CH personages, LS landschappen, AB abstract/patroon, QT quotes/tekst en geen reeks
- 20 producten per pagina; reeksfilters en sortering op productcode
- Productfoto's worden lokaal geladen en zijn teruggeschaald naar 1100 × 1100 voor snellere paginaweergave
- Productcode wordt als naam getoond zolang er geen definitieve productnamen zijn aangeleverd
- De voorbeeld-cadeaubox voegt vijf exemplaren van `BM-AB-015-C` toe

Bu sürüm, soğuk lüks değil, sıcak, neşeli ve hediye-gibi hissettiren bir mağaza yaklaşımını benimser:

- pastel arka planlar
- neşeli renkler
- cadeaubox voor vijf boekenleggers: €22,50
- boekenleggerprijs: €4,50 per stuk
- verzending: €2,50 per bestelling bij 1–4 stuks; gratis vanaf 5 stuks
- verkoopgebied: momenteel België en Nederland

## Privacy, juridisch en checkout

- Optionele statistieken en marketing staan standaard uit. Het prototype bevat geen analytics- of marketingtags.
- Winkelmandje en cookievoorkeuren worden lokaal in de browser opgeslagen. Cookiekeuzes worden na zes maanden opnieuw gevraagd.
- De checkout is een demo: er wordt geen bestelling of betaling verwerkt.
- Juridische teksten zijn voorbereidingen en vormen geen vervanging van juridisch advies.
- De V2-site staat op GitHub Pages; de echte checkout is nog niet gekoppeld. Juridische bedrijfsgegevens moeten voor verkoop nog worden ingevuld.

### Nodig vóór publicatie/verkoop

- `[BEDRIJFSNAAM]` — officiële juridische naam van Kalem.
- `[ONDERNEMINGSNUMMER]` — actief KBO-ondernemingsnummer.
- `[BTW-NUMMER]` of `[BTW-VRIJSTELLING INDIEN VAN TOEPASSING]` — bevestigde btw-status en correcte prijs-/factuurvermelding.
- `[ADRES]` — officiële vestigings- en contactadres.
- `[E-MAIL]` en `[TELEFOON]` — werkende klant- en privacycontactgegevens.
- `[BETAALMETHODEN]` — gekozen betaalprovider(s) en juiste privacy-/betaalbeschrijvingen.
- `[LEVERTERMIJN]`, `[VERWERKINGSTERMIJN]`, `[LEVERTERMIJN PER LAND]` — bevestigde verzend- en bezorgtermijnen.
- `[RETOURADRES]` — adres voor herroepingen en retouren.
- Controleer de juridische pagina's met een Belgische boekhouder/juridisch adviseur en configureer pas daarna live betaling en bestelling.

## Yerel test

Aşağıdaki komutla yerelde çalıştırılabilir:

```bash
cd /Users/semra/Desktop/kitap-ayraci-git
python3 -m http.server 8000
```

Sonra tarayıcıda şu adrese gidin:

`http://localhost:8000`

## GitHub

V2 repo: [semracol/boekenleggers-V2](https://github.com/semracol/boekenleggers-V2)

GitHub Pages: [https://semracol.github.io/boekenleggers-V2/](https://semracol.github.io/boekenleggers-V2/)

Lokaal testen:

```bash
python3 -m http.server 8000
```

Open daarna `http://localhost:8000`. Gebruik voor publiceren uitsluitend de `v2` remote; de oudere `boekenleggers`-repository is een aparte site.
