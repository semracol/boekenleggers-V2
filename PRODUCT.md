# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Kitap ayracı arayan kitap okurları ile küçük ve kişisel hediye arayanlar eşit öncelikli kitlelerdir. Mağaza Belçika ve Hollanda'daki müşterilere yöneliktir.

## Product Purpose

Boekenleggers.be, kitap ayracı tasarımlarını ve beşli cadeaubox'ı gösteren, müşterilerin ürünleri inceleyip demo sepete ekleyebildiği bir statik mağaza prototipidir. Kullanıcı bu oturumda en önemli ana sayfa aksiyonu olarak beşli hediye kutusunu sepete eklemeyi seçti.

## Positioning

Ürün, kitap ayracını hem kişisel okuma aksesuarı hem de küçük hediye olarak sunar. Tekli fiyat €4,50; beşli cadeaubox €22,50'dir. Bir ile dört adetlik siparişlerde kargo €2,50, beş veya daha fazla kitap ayracında ücretsizdir.

## Operating Context

Mağaza Belçika ve Hollanda için hazırlanmıştır. Ana sayfa, ürün görselleri ve fiyatları, beşli hediye kutusu, sepet demosu, kargo bilgileri ve yasal/çerez sayfaları içerir. Ziyaretçi ürünleri sepete ekleyebilir, sepet miktarlarını değiştirebilir ve sepeti tarayıcıda saklayabilir.

## Capabilities and Constraints

- Fiyatlar ve kargo kuralı yukarıdaki değerlerle sabittir; satış ülkeleri şimdilik Belçika ve Hollanda'dır.
- Beşli kutu demosu, ilk ürün tasarımından beş adet ekler; tasarım karıştırma özelliği yoktur.
- Sepet henüz gerçek sipariş, ödeme veya stok sistemi değildir.
- Gerçek şirket bilgileri ve bazı teslimat/ödeme verileri yasal sayfalarda yer tutucu olarak kalmıştır.
- `nl-BE` mağaza dilidir. Site için mevcut oturumda istenen işlem localhost önizlemesiyle sınırlıdır; GitHub'a yayınlama izni verilmemiştir.

## Brand Commitments

- Marka adı Boekenleggers.be, işletme/mağaza adı Kalem'dir.
- Kitap ayracı terimi kullanılmalı; ürün "boek" değil "boekenlegger" olarak anlatılmalıdır.
- Hediye ve okuma bağlamı ikisi de görünür olmalıdır.

## Evidence on Hand

- Dört gerçek ürün fotoğrafı: `assets/products/blue-hydrangea-bookmark.jpg`, `assets/products/heart-balloons-bookmark.jpg`, `assets/products/cat-reader-bookmark.jpg`, `assets/products/winter-reindeer-bookmark.jpg`.
- Logo ve site içerikleri `assets/` ile HTML sayfalarında mevcuttur.
- Gerçek müşteri yorumu verilmemiştir; değerlendirme metni uydurulmamalı ve yorum alanı gizli kalmalıdır.
- İşletme kayıt bilgileri, e-posta/telefon, ödeme sağlayıcıları, kesin teslimat süreleri ve iade adresi henüz teyit edilmemiştir.

## Product Principles

- Gerçek ürün fotoğraflarını doğru isim ve açıklamalarla kullan.
- Fiyat, kargo, ülke ve işlevlerle ilgili yalnızca teyit edilmiş bilgileri göster.
- Beşli cadeaubox'ın eklenmesini açık ve kolay ana aksiyon yap.
- Gerçek ödeme ve şirket bilgileri eklenene kadar demo ve hukuki sınırları görünür tut.

## Accessibility & Inclusion

- Klavye ile gezinme, erişilebilir isimler ve kontrastlı içerik korunmalıdır.
- Animasyonlar `prefers-reduced-motion` ayarına uymalıdır.
- Ana sayfa masaüstü ve mobil tarayıcılarda kullanılabilir olmalıdır.
