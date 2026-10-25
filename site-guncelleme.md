# Site Güncelleme Notları

**Tarih:** 25 Ekim 2026
**Çalışma klasörü:** `/Users/semra/Desktop/kitap-ayraci-git`
**Yayın adresi:** [https://semracol.github.io/boekenleggers-V2/](https://semracol.github.io/boekenleggers-V2/)

> Bu dosya eski mağaza sürümünün geçmiş notlarını da içerir. Aşağıdaki “V2 katalog revizyonu” bölümü güncel sürüm durumudur.

## V2 katalog revizyonu

- Ürün listesi, kullanıcı tarafından paylaşılan So Many Pages sayfasındaki alışveriş düzeninden esinlenerek yenilendi: solda filtrelenebilir ürün serileri, sağda yukarıdan aşağıya akan ürün ızgarası, sıralama ve sayfalama.
- Etsy örnek klasöründeki 72 kitap ayracı fotoğrafı `assets/products/catalog/` altına 1100 × 1100 boyutunda sıkıştırılarak eklendi.
- Kategoriler, kullanıcının verdiği sınıflandırmaya göre adlandırıldı: FL çiçek, CT kedi, AN hayvan, XM kış/yılbaşı, CH karakter, LS manzara, AB soyut/desen, QT söz/yazı ve seri yok. Örnek klasörde henüz ürünü olmayan kategoriler sıfır adetle pasif gösterilir; katalogda her sayfada 20 tasarım var.
- Tasarım yumuşatıldı: kâğıt tonlarında zemin, yuvarlatılmış ürün kartları, daha hafif çerçeveler ve kitapçı hissi veren serif başlıklar.
- Ürünler €4,50; 1–4 ürün için kargo €2,50, 5+ ürün için ücretsiz; satış bölgesi Belçika ve Hollanda olarak kaldı.
- Filtreleme, product-code sıralaması, sayfalama ve tüm ürünlerle çalışan sepet bağlandı. Demo cadeaubox `BM-AB-015-C` tasarımından beş adet ekler.
- V2 ana sayfası ile tüm yasal sayfaların canonical/Open Graph adresleri, `robots.txt` ve `sitemap.xml` V2 adresine göre güncellendi.
- Kullanıcı yayına alma istedi; değişiklikler yalnızca `semracol/boekenleggers-V2` deposuna gönderildi. Eski `boekenleggers` deposu değiştirilmedi.

## Güncel yerel çalışma

- Sayfalara sabit WhatsApp iletişim düğmesi eklendi; `+32 465 75 82 40` numarasına Felemenkçe hazır mesajla bağlanıyor.
- Site dili `nl-BE` olarak belirlendi; site kopyasındaki “boekbandmarkers” terimi kaldırıldı.
- Her tasarım kitap ayracı €4,50. Bir siparişte 1–4 kitap ayracı için kargo €2,50; 5 veya daha fazla için ücretsiz.
- Sepet miktar artırma/azaltma ve ürün silmeyi, canlı ara toplam/kargo/toplamı, ücretsiz kargo ilerlemesini ve localStorage kalıcılığını destekliyor.
- Beşli cadeaubox €22,50 ve ücretsiz kargo. Demo düğmesi ilk ürün tasarımından beş adet ekliyor; seçimi karıştırma özelliği henüz yok.
- Tasarımda kayan duyuru, açılış animasyonları, scroll reveal, hover tilt/zoom, sepete ekleme efekti, sticky header ve SSS bulunuyor.
- `prefers-reduced-motion` tercihi animasyonları azaltıyor/kapatıyor. Ürün görselleri yerel, lazy-loaded ve alt metinli.
- El çizimi hissindeki SVG logo, simge, tek renk simge, favicon ve kısa üretim prompt'u `assets/` altında.
- Google Fonts kaldırıldı; Baloo 2 ve Inter yerel WOFF2 dosyalarından yükleniyor, fontların SIL Open Font License metinleriyle birlikte.
- Çerez panelinde gerekli depolama açık; istatistik ve pazarlama varsayılan kapalı. Seçimler sürüm/tarih ile altı ay saklanıyor; bu sürümde isteğe bağlı analitik/pazarlama script'i yok.
- Yasal sayfalar: `privacy.html`, `cookies.html`, `voorwaarden.html`, `herroeping.html`, `verzending-retour.html`, `juridische-info.html`.
- Tüm sayfalarda `nl-BE`, meta description, canonical ve Open Graph metadataları bulunuyor; `robots.txt` ve `sitemap.xml` eklendi.
- Ürün ödeme ve sipariş akışı hâlâ demo; gerçek checkout bağlı değil. Yorumlar gerçek değerlendirme gelene kadar gizli.

### Yayına çıkmadan doldurulacak / doğrulanacak

- `[BEDRIJFSNAAM]`
- `[ONDERNEMINGSNUMMER]` (KBO)
- `[BTW-NUMMER]` veya `[BTW-VRIJSTELLING INDIEN VAN TOEPASSING]`
- `[ADRES]`
- `[E-MAIL]`
- `[TELEFOON]`
- `[BETAALMETHODEN]`
- `[LEVERTERMIJN]`, `[VERWERKINGSTERMIJN]`, `[LEVERTERMIJN PER LAND]`
- `[RETOURADRES]`
- Yer tutucuları gerçek bilgilerle değiştirip Belçika'da uzman bir muhasebeci/hukuk danışmanına yasal metinleri ve BTW dahil fiyat anlatımını doğrulat.
- Gerçek ödeme, sipariş, kargo hizmeti ve müşteri veri akışı kurulmadan site sipariş almaya hazır değildir.
- ODR platformu 20 Temmuz 2025'te sona erdi; sayfalar eski ODR formuna yönlendirmek yerine Avrupa Komisyonu'nun güncel uyuşmazlık kurumları listesine bağlanıyor.

## Yapılan güncellemeler

- Seçilen dört kitap ayracı fotoğrafı Etsy çalışma klasöründeki ürün görsellerinden alındı ve siteye eklendi:
  - `assets/products/blue-hydrangea-bookmark.jpg` — Blue Hydrangea
  - `assets/products/heart-balloons-bookmark.jpg` — Heart Balloons
  - `assets/products/cat-reader-bookmark.jpg` — Cat & Cupcakes
  - `assets/products/winter-reindeer-bookmark.jpg` — Winter Reindeer
- Her ürün kartının fiyatı **€4,50** olarak ayarlandı.
- Tahmini kargo ücreti sipariş başına **yaklaşık €2,50** olarak belirtildi.
- Teslimat bölgesi şimdilik **Belçika ve Hollanda** olarak gösteriliyor.
- Ana sayfa metinleri ve ürün açıklamaları güncellendi; tasarımın neşeli pastel görünümü korundu.
- README dosyasına site bağlantısı, fiyatlandırma ve yerel test bilgileri eklendi.

## Yayın ve doğrulama

- Değişiklikler `semracol/boekenleggers` deposunun `main` dalına gönderildi.
- Yayınlanan sürümün commit'i: `8aede01` — `Add bookmark photos and update regional pricing`
- GitHub Pages durumu `built` olarak doğrulandı.
- Canlı sayfa ve dört ürün görseli HTTP `200 OK` yanıtı verdi.
- Fiyat, kargo ve Belçika/Hollanda teslimat metinleri yayındaki HTML içinde kontrol edildi.

## Mevcut sınırlar

- Sepet yalnızca arayüz demosudur; gerçek ödeme veya sipariş tamamlama sistemi bağlı değildir.
- Teslimat bölgesi site metninde Belçika ve Hollanda ile sınırlı olarak belirtiliyor; ülkeye göre adres doğrulama ya da sipariş engelleme henüz uygulanmadı.
- Kargo bedeli €2,50 ve 5+ adette ücretsiz olarak gösteriliyor; taşıyıcıyla gerçek gönderim maliyetleri yayından önce doğrulanmalıdır.
- Ürün sayfası şu an örnek dört tasarımı gösteriyor; tüm ürünler ve nihai stok bilgileri henüz eklenmedi.
- İşletme kaydı ve satış şartları tamamlanmadığı için yasal sayfalardaki yer tutucular doldurulmalı ve metinler uzman tarafından gözden geçirilmelidir.
- Bu yerel geliştirme için net commit hazırlanacak; kullanıcının onayı olmadan GitHub'a push yapılmayacak.
