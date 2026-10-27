<script>
(function () {
  // Cegah overlay dibuat dua kali kalau script ini jalan lebih dari sekali
  if (document.getElementById('assessment-overlay')) return;

  var overlay = document.createElement('div');
  overlay.id = 'assessment-overlay';

  // Style overlay: menutupi seluruh halaman (full viewport), background hitam solid
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100vw';
  overlay.style.height = '100vh';
  overlay.style.backgroundColor = '#000000';   // latar belakang hitam
  overlay.style.zIndex = '2147483647';          // paling atas dari semua elemen
  overlay.style.display = 'flex';
  overlay.style.alignItems = 'center';
  overlay.style.justifyContent = 'center';
  overlay.style.margin = '0';
  overlay.style.padding = '0';
  overlay.style.overflow = 'hidden';

  var text = document.createElement('span');
  text.textContent = 'Assessment';
  text.style.color = '#00FF00';      // font hijau
  text.style.fontSize = '3rem';
  text.style.fontFamily = 'Arial, Helvetica, sans-serif';
  text.style.fontWeight = 'bold';
  text.style.letterSpacing = '2px';

  overlay.appendChild(text);
  document.body.appendChild(overlay);
})();
</script>
