// AOS (Animate On Scroll) Kütüphanesini Başlatma
AOS.init({
    duration: 1000, // Animasyon süresi (ms)
    once: true, // Animasyonlar sadece bir kere çalışsın
    offset: 50 // Eleman görünmeden ne kadar önce animasyon başlasın (px)
  });
  
  
  // Navbar'ı Kaydırmaya Göre Stil Değiştirme
  const navbar = document.getElementById('navbar');
  const heroSectionHeight = document.getElementById('hero').offsetHeight; // Hero bölümünün yüksekliği
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // 50px aşağı kaydırınca
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  
  // Bootstrap Scrollspy'ı Manuel Olarak Güncelleme (İsteğe Bağlı - Genelde otomatik çalışır)
  // Navbar linklerine tıklandığında doğru bölümün aktif görünmesini sağlar
  // Eğer Bootstrap'in otomatik algılaması yeterli değilse kullanın
  /*
  const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar',
    offset: 70 // Navbar yüksekliği veya biraz fazlası
  });
  
  // Sayfa yeniden boyutlandırıldığında Scrollspy'ı güncelle
  window.addEventListener('resize', () => {
      scrollSpy.refresh();
  });
  */
  
  console.log("Modern portfolyo sayfası yüklendi ve scriptler çalışıyor.");