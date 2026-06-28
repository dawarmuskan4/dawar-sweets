// Generates .image-slots.state.json with SVG illustrations for all food slots
// Run: node generate-images.js

const fs = require('fs');
const path = require('path');

function encode(svg) {
  return 'data:image/svg+xml;base64,' + Buffer.from(svg.trim()).toString('base64');
}
function slot(svg) { return { u: encode(svg), s: 1, x: 0, y: 0 }; }

const data = {};

// ─── GALLERY 1 · Fry station ────────────────────────────────────────────────
data['gal-1'] = slot(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
  <defs>
    <radialGradient id="oil" cx="50%" cy="55%" r="55%">
      <stop offset="0%" stop-color="#D4A017"/>
      <stop offset="55%" stop-color="#B87800"/>
      <stop offset="100%" stop-color="#7A4E00"/>
    </radialGradient>
    <radialGradient id="pkr" cx="35%" cy="30%" r="65%">
      <stop offset="0%" stop-color="#E8B830"/>
      <stop offset="100%" stop-color="#6A3A00"/>
    </radialGradient>
    <filter id="sf"><feGaussianBlur stdDeviation="3"/></filter>
  </defs>
  <rect width="400" height="300" fill="#1E0E04"/>
  <!-- Counter surface -->
  <rect x="0" y="220" width="400" height="80" fill="#3A2008"/>
  <rect x="0" y="218" width="400" height="5" fill="#5A3010"/>
  <!-- Kadai rim shadow -->
  <ellipse cx="200" cy="175" rx="168" ry="88" fill="#0A0604" filter="url(#sf)"/>
  <!-- Kadai outer -->
  <ellipse cx="200" cy="168" rx="162" ry="82" fill="#252018"/>
  <!-- Hot oil -->
  <ellipse cx="200" cy="162" rx="148" ry="72" fill="url(#oil)"/>
  <!-- Oil sheen / bubbles -->
  <ellipse cx="155" cy="152" rx="14" ry="9" fill="#F0D060" opacity="0.55"/>
  <ellipse cx="245" cy="155" rx="11" ry="7" fill="#F0D060" opacity="0.45"/>
  <ellipse cx="190" cy="162" rx="8" ry="5" fill="#F4DC70" opacity="0.6"/>
  <ellipse cx="268" cy="148" rx="10" ry="6" fill="#F0D060" opacity="0.45"/>
  <circle cx="128" cy="158" r="4" fill="#F8E880" opacity="0.5"/>
  <circle cx="262" cy="152" r="3" fill="#F8E880" opacity="0.55"/>
  <circle cx="208" cy="165" r="5" fill="#F8E880" opacity="0.4"/>
  <!-- Pakora A -->
  <rect x="118" y="128" width="72" height="50" rx="14" fill="#6A3800" transform="rotate(-8,154,153)"/>
  <rect x="121" y="131" width="66" height="44" rx="11" fill="#A06200" transform="rotate(-8,154,153)"/>
  <rect x="124" y="134" width="60" height="38" rx="9" fill="#C88010" transform="rotate(-8,154,153)"/>
  <rect x="127" y="137" width="54" height="32" rx="7" fill="#DCA020" transform="rotate(-8,154,153)"/>
  <!-- Pakora B -->
  <rect x="198" y="124" width="65" height="46" rx="12" fill="#6A3800" transform="rotate(7,230,147)"/>
  <rect x="201" y="127" width="59" height="40" rx="9" fill="#A86400" transform="rotate(7,230,147)"/>
  <rect x="204" y="130" width="53" height="34" rx="7" fill="#CC8A18" transform="rotate(7,230,147)"/>
  <rect x="207" y="133" width="47" height="28" rx="5" fill="#E0A828" transform="rotate(7,230,147)"/>
  <!-- Pakora C (submerged) -->
  <rect x="158" y="140" width="55" height="38" rx="10" fill="#825200" transform="rotate(-14,185,159)"/>
  <rect x="161" y="143" width="49" height="32" rx="7" fill="#B87A00" transform="rotate(-14,185,159)"/>
  <!-- Steam wisps -->
  <g filter="url(#sf)" opacity="0.45">
    <ellipse cx="155" cy="92" rx="9" ry="32" fill="white" transform="rotate(-6,155,92)"/>
    <ellipse cx="220" cy="86" rx="7" ry="28" fill="white" transform="rotate(5,220,86)"/>
    <ellipse cx="280" cy="96" rx="8" ry="30" fill="white" transform="rotate(-3,280,96)"/>
  </g>
  <!-- Handles -->
  <rect x="32" y="155" width="32" height="14" rx="7" fill="#303030"/>
  <rect x="336" y="155" width="32" height="14" rx="7" fill="#303030"/>
  <!-- Label -->
  <text x="200" y="265" text-anchor="middle" font-family="Georgia,serif" font-size="13" fill="#D4A017" opacity="0.9" font-style="italic">Fresh off the tawa</text>
</svg>`);

// ─── GALLERY 2 · Sweets display ─────────────────────────────────────────────
data['gal-2'] = slot(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
  <defs>
    <linearGradient id="wood" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#6A4018"/>
      <stop offset="100%" stop-color="#3A2008"/>
    </linearGradient>
    <linearGradient id="syrup" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#C88010" stop-opacity="0.7"/>
      <stop offset="100%" stop-color="#A06000" stop-opacity="0.5"/>
    </linearGradient>
  </defs>
  <rect width="400" height="300" fill="#2D1B0E"/>
  <!-- Tray -->
  <rect x="18" y="28" width="364" height="248" rx="10" fill="url(#wood)"/>
  <rect x="22" y="32" width="356" height="240" rx="8" fill="#F5EED8"/>
  <!-- Glass highlight -->
  <rect x="24" y="34" width="352" height="40" rx="6" fill="white" opacity="0.18"/>

  <!-- KALAKAND block (white, grainy) -->
  <g transform="translate(38,52)">
    <rect width="74" height="58" rx="5" fill="#F5F0E4"/>
    <line x1="37" y1="0" x2="37" y2="58" stroke="#DDD5C0" stroke-width="1.2"/>
    <line x1="0" y1="29" x2="74" y2="29" stroke="#DDD5C0" stroke-width="1.2"/>
    <rect x="2" y="2" width="70" height="25" rx="3" fill="#FEFCF5" opacity="0.8"/>
    <rect x="2" y="31" width="70" height="25" rx="3" fill="#FEFCF5" opacity="0.7"/>
    <text x="37" y="73" text-anchor="middle" font-family="Georgia,serif" font-size="8.5" fill="#5A3A18">Kalakand</text>
  </g>

  <!-- GULAB JAMUN (dark brown in syrup) -->
  <g transform="translate(128,52)">
    <rect width="74" height="58" rx="5" fill="url(#syrup)"/>
    <circle cx="22" cy="22" r="15" fill="#4A2006"/>
    <circle cx="22" cy="22" r="12" fill="#6A3008"/>
    <circle cx="52" cy="26" r="15" fill="#4A2006"/>
    <circle cx="52" cy="26" r="12" fill="#6A3008"/>
    <circle cx="37" cy="42" r="14" fill="#4A2006"/>
    <circle cx="37" cy="42" r="11" fill="#6A3008"/>
    <text x="37" y="73" text-anchor="middle" font-family="Georgia,serif" font-size="8.5" fill="#5A3A18">Gulab Jamun</text>
  </g>

  <!-- RASGULLA (white in clear syrup) -->
  <g transform="translate(218,52)">
    <rect width="74" height="58" rx="5" fill="#EEF8F4" opacity="0.9"/>
    <circle cx="22" cy="22" r="15" fill="white" stroke="#DDD" stroke-width="1"/>
    <circle cx="52" cy="20" r="15" fill="white" stroke="#DDD" stroke-width="1"/>
    <circle cx="37" cy="42" r="14" fill="white" stroke="#DDD" stroke-width="1"/>
    <ellipse cx="22" cy="20" rx="8" ry="5" fill="white" opacity="0.7"/>
    <text x="37" y="73" text-anchor="middle" font-family="Georgia,serif" font-size="8.5" fill="#5A3A18">Rasgulla</text>
  </g>

  <!-- KAJU KATLI (silver diamonds) -->
  <g transform="translate(308,52)">
    <rect width="74" height="58" rx="5" fill="#F8F8F0"/>
    <polygon points="37,5 55,26 37,47 19,26" fill="#EEEEE0" stroke="#C8C8B0" stroke-width="1"/>
    <polygon points="22,14 40,35 22,52 8,35" fill="#EEEEE0" stroke="#C8C8B0" stroke-width="1"/>
    <polygon points="52,14 70,35 52,52 38,35" fill="#EEEEE0" stroke="#C8C8B0" stroke-width="1"/>
    <polygon points="37,6 54,26 37,46 20,26" fill="#F5F5EA" stroke="none"/>
    <text x="37" y="73" text-anchor="middle" font-family="Georgia,serif" font-size="8.5" fill="#5A3A18">Kaju Katli</text>
  </g>

  <!-- BESAN LADDOO -->
  <g transform="translate(55,155)">
    <circle cx="35" cy="35" r="34" fill="#B87800"/>
    <circle cx="35" cy="35" r="29" fill="#CC9010"/>
    <circle cx="35" cy="33" r="23" fill="#E0AA20"/>
    <circle cx="28" cy="28" r="7" fill="#ECC040" opacity="0.5"/>
    <text x="35" y="85" text-anchor="middle" font-family="Georgia,serif" font-size="8.5" fill="#5A3A18">Besan Laddoo</text>
  </g>

  <!-- MOTICHOOR LADDOO -->
  <g transform="translate(155,155)">
    <circle cx="35" cy="35" r="34" fill="#C06010"/>
    <circle cx="35" cy="35" r="29" fill="#E07820"/>
    <circle cx="35" cy="33" r="23" fill="#F09040"/>
    <!-- boondi texture dots -->
    <circle cx="26" cy="28" r="2.5" fill="#D06818" opacity="0.7"/>
    <circle cx="36" cy="25" r="2" fill="#D06818" opacity="0.7"/>
    <circle cx="44" cy="30" r="2.5" fill="#D06818" opacity="0.6"/>
    <circle cx="24" cy="37" r="2" fill="#D06818" opacity="0.7"/>
    <circle cx="42" cy="40" r="2.5" fill="#D06818" opacity="0.6"/>
    <circle cx="33" cy="42" r="2" fill="#D06818" opacity="0.7"/>
    <text x="35" y="85" text-anchor="middle" font-family="Georgia,serif" font-size="8.5" fill="#5A3A18">Motichoor</text>
  </g>

  <!-- Brand label -->
  <text x="300" y="195" text-anchor="middle" font-family="Georgia,serif" font-size="12" fill="#8B6030" font-style="italic">Dawar Sweets</text>
  <text x="300" y="212" text-anchor="middle" font-family="Georgia,serif" font-size="9" fill="#8B6030" opacity="0.7">Since 1958 · Pure Milk</text>

  <!-- Tray border -->
  <rect x="22" y="32" width="356" height="240" rx="8" fill="none" stroke="#A07840" stroke-width="2" opacity="0.5"/>
</svg>`);

// ─── GALLERY 3 · Serving plate ──────────────────────────────────────────────
data['gal-3'] = slot(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
  <defs>
    <radialGradient id="platebg" cx="50%" cy="45%" r="52%">
      <stop offset="0%" stop-color="#FFFDF5"/>
      <stop offset="75%" stop-color="#F0E8D0"/>
      <stop offset="100%" stop-color="#DDD0A8"/>
    </radialGradient>
    <radialGradient id="pkfill" cx="35%" cy="25%" r="70%">
      <stop offset="0%" stop-color="#E8C040"/>
      <stop offset="100%" stop-color="#7A4800"/>
    </radialGradient>
  </defs>
  <rect width="400" height="300" fill="#F5EDD8"/>
  <!-- Table surface grain -->
  <line x1="0" y1="180" x2="400" y2="182" stroke="#E8D8B8" stroke-width="1" opacity="0.5"/>
  <line x1="0" y1="220" x2="400" y2="218" stroke="#E8D8B8" stroke-width="1" opacity="0.4"/>
  <!-- Plate shadow -->
  <ellipse cx="200" cy="248" rx="148" ry="18" fill="rgba(45,27,14,0.18)"/>
  <!-- Plate -->
  <ellipse cx="200" cy="192" rx="152" ry="112" fill="url(#platebg)"/>
  <ellipse cx="200" cy="192" rx="152" ry="112" fill="none" stroke="#D8C8A0" stroke-width="2.5"/>
  <ellipse cx="200" cy="191" rx="135" ry="98" fill="none" stroke="#ECE0C0" stroke-width="1" opacity="0.6"/>

  <!-- Pakora stack - bottom -->
  <rect x="128" y="175" width="104" height="68" rx="17" fill="#6A3800" transform="rotate(-5,180,209)"/>
  <rect x="131" y="178" width="98" height="62" rx="14" fill="#9A6000" transform="rotate(-5,180,209)"/>
  <rect x="134" y="181" width="92" height="56" rx="11" fill="#C88010" transform="rotate(-5,180,209)"/>
  <rect x="137" y="184" width="86" height="50" rx="9" fill="#D8A020" transform="rotate(-5,180,209)"/>
  <rect x="142" y="196" width="76" height="14" rx="3" fill="#F5EEC8" transform="rotate(-5,180,209)"/>

  <!-- Pakora - middle -->
  <rect x="138" y="155" width="98" height="64" rx="15" fill="#7A4400" transform="rotate(4,187,187)"/>
  <rect x="141" y="158" width="92" height="58" rx="12" fill="#B07800" transform="rotate(4,187,187)"/>
  <rect x="144" y="161" width="86" height="52" rx="9" fill="#CC9010" transform="rotate(4,187,187)"/>
  <rect x="147" y="164" width="80" height="46" rx="7" fill="#E0A820" transform="rotate(4,187,187)"/>

  <!-- Pakora - top -->
  <rect x="146" y="136" width="92" height="60" rx="14" fill="#855400" transform="rotate(-2,192,166)"/>
  <rect x="149" y="139" width="86" height="54" rx="11" fill="#C08800" transform="rotate(-2,192,166)"/>
  <rect x="152" y="142" width="80" height="48" rx="8" fill="#D8A018" transform="rotate(-2,192,166)"/>
  <rect x="155" y="145" width="74" height="42" rx="6" fill="#ECC040" transform="rotate(-2,192,166)"/>

  <!-- Chutney bowl -->
  <ellipse cx="312" cy="205" rx="33" ry="20" fill="#E0EED8"/>
  <ellipse cx="312" cy="205" rx="33" ry="20" fill="none" stroke="#B8D0B0" stroke-width="1.5"/>
  <ellipse cx="312" cy="203" rx="26" ry="14" fill="#3A8030"/>
  <ellipse cx="312" cy="202" rx="20" ry="10" fill="#4EA040"/>
  <ellipse cx="308" cy="200" rx="7" ry="4" fill="#62B050" opacity="0.7"/>

  <!-- Tomato wedge -->
  <ellipse cx="95" cy="228" rx="24" ry="16" fill="#C82020" opacity="0.9"/>
  <ellipse cx="95" cy="226" rx="18" ry="11" fill="#E03030"/>
  <line x1="95" y1="212" x2="93" y2="205" stroke="#3A8020" stroke-width="2.5"/>
  <line x1="95" y1="212" x2="100" y2="204" stroke="#3A8020" stroke-width="2"/>

  <!-- Lemon -->
  <ellipse cx="78" cy="188" rx="22" ry="14" fill="#E8D020" transform="rotate(-22,78,188)"/>
  <ellipse cx="78" cy="188" rx="17" ry="10" fill="#F4E040" transform="rotate(-22,78,188)"/>

  <text x="200" y="285" text-anchor="middle" font-family="Georgia,serif" font-size="13" fill="#5A3A18" font-style="italic" opacity="0.85">Pakora Junction · Panipat</text>
</svg>`);

// ─── PK-BREAD · Bread Pakora ─────────────────────────────────────────────────
data['pk-bread'] = slot(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
  <defs>
    <radialGradient id="bg" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#FFF8EC"/>
      <stop offset="100%" stop-color="#F0E4C4"/>
    </radialGradient>
    <radialGradient id="batter" cx="38%" cy="30%" r="68%">
      <stop offset="0%" stop-color="#D09818"/>
      <stop offset="55%" stop-color="#A07000"/>
      <stop offset="100%" stop-color="#6A3E00"/>
    </radialGradient>
    <radialGradient id="bread" cx="40%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#F5EACE"/>
      <stop offset="100%" stop-color="#E0CFA0"/>
    </radialGradient>
  </defs>
  <rect width="300" height="300" fill="url(#bg)"/>
  <!-- Plate hint -->
  <ellipse cx="150" cy="252" rx="108" ry="14" fill="rgba(45,27,14,0.15)"/>
  <!-- Pakora body - outer batter -->
  <rect x="42" y="88" width="216" height="142" rx="22" fill="url(#batter)" transform="rotate(-4,150,159)"/>
  <!-- Crispy bumps on edges -->
  <ellipse cx="54" cy="120" rx="7" ry="12" fill="#7A4A00" opacity="0.6" transform="rotate(-4,54,120)"/>
  <ellipse cx="246" cy="200" rx="6" ry="10" fill="#7A4A00" opacity="0.5" transform="rotate(-4,246,200)"/>
  <ellipse cx="85" cy="92" rx="8" ry="5" fill="#C08800" opacity="0.5" transform="rotate(-4,85,92)"/>
  <ellipse cx="220" cy="88" rx="7" ry="4" fill="#C08800" opacity="0.4" transform="rotate(-4,220,88)"/>
  <!-- Inner bread layer top -->
  <rect x="50" y="97" width="200" height="130" rx="17" fill="url(#bread)" transform="rotate(-4,150,162)"/>
  <!-- Top bread slice -->
  <rect x="52" y="99" width="196" height="46" rx="14" fill="#ECDBA4" opacity="0.75" transform="rotate(-4,150,122)"/>
  <!-- Potato filling band -->
  <rect x="56" y="150" width="188" height="26" rx="5" fill="#F0E8A0" transform="rotate(-4,150,163)"/>
  <rect x="60" y="153" width="180" height="20" rx="3" fill="#E8DE90" transform="rotate(-4,150,163)"/>
  <!-- Filling spice dots -->
  <circle cx="88" cy="161" r="3" fill="#C87020" opacity="0.8" transform="rotate(-4,150,161)"/>
  <circle cx="148" cy="158" r="2.5" fill="#C87020" opacity="0.7" transform="rotate(-4,150,158)"/>
  <circle cx="210" cy="163" r="3" fill="#C87020" opacity="0.75" transform="rotate(-4,150,163)"/>
  <!-- Bottom bread slice -->
  <rect x="54" y="182" width="192" height="44" rx="14" fill="#ECDBA4" opacity="0.65" transform="rotate(-4,150,204)"/>
  <!-- Green herb specks -->
  <circle cx="95" cy="172" r="2.5" fill="#1F6B3D" opacity="0.75"/>
  <circle cx="170" cy="167" r="2" fill="#1F6B3D" opacity="0.65"/>
  <circle cx="218" cy="174" r="2.5" fill="#1F6B3D" opacity="0.7"/>
  <circle cx="128" cy="180" r="2" fill="#1F6B3D" opacity="0.6"/>
  <!-- Side chilli -->
  <ellipse cx="262" cy="128" rx="16" ry="8" fill="#A31E22" transform="rotate(-28,262,128)"/>
  <ellipse cx="262" cy="128" rx="12" ry="5.5" fill="#C83030" transform="rotate(-28,262,128)"/>
  <line x1="274" y1="119" x2="278" y2="115" stroke="#2D7A20" stroke-width="2" stroke-linecap="round"/>
  <!-- Chutney drop -->
  <ellipse cx="46" cy="220" rx="22" ry="12" fill="#1F6B3D" opacity="0.8"/>
  <ellipse cx="46" cy="219" rx="16" ry="8" fill="#2D8A50" opacity="0.9"/>
</svg>`);

// ─── PK-PANEER-BREAD · Paneer Bread Pakora ───────────────────────────────────
data['pk-paneer-bread'] = slot(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
  <defs>
    <radialGradient id="bg2" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#FFF8EC"/>
      <stop offset="100%" stop-color="#F0E4C4"/>
    </radialGradient>
    <radialGradient id="batter2" cx="38%" cy="28%" r="68%">
      <stop offset="0%" stop-color="#CC9010"/>
      <stop offset="55%" stop-color="#9A6800"/>
      <stop offset="100%" stop-color="#623C00"/>
    </radialGradient>
  </defs>
  <rect width="300" height="300" fill="url(#bg2)"/>
  <ellipse cx="150" cy="254" rx="108" ry="13" fill="rgba(45,27,14,0.14)"/>
  <!-- Outer batter -->
  <rect x="46" y="86" width="208" height="148" rx="22" fill="url(#batter2)" transform="rotate(3,150,160)"/>
  <!-- Top bread batter layer -->
  <rect x="54" y="94" width="192" height="50" rx="16" fill="#E0CB90" transform="rotate(3,150,119)"/>
  <!-- Paneer layer (white) -->
  <rect x="56" y="148" width="188" height="30" rx="6" fill="#F8F4EC" transform="rotate(3,150,163)"/>
  <rect x="60" y="151" width="180" height="24" rx="4" fill="#FDFAF4" transform="rotate(3,150,163)"/>
  <!-- Paneer texture - small lines -->
  <line x1="80" y1="153" x2="80" y2="174" stroke="#DDDAD0" stroke-width="1" opacity="0.6" transform="rotate(3,150,163)"/>
  <line x1="110" y1="153" x2="110" y2="174" stroke="#DDDAD0" stroke-width="1" opacity="0.5" transform="rotate(3,150,163)"/>
  <line x1="140" y1="153" x2="140" y2="174" stroke="#DDDAD0" stroke-width="1" opacity="0.6" transform="rotate(3,150,163)"/>
  <line x1="170" y1="153" x2="170" y2="174" stroke="#DDDAD0" stroke-width="1" opacity="0.5" transform="rotate(3,150,163)"/>
  <line x1="200" y1="153" x2="200" y2="174" stroke="#DDDAD0" stroke-width="1" opacity="0.6" transform="rotate(3,150,163)"/>
  <!-- Potato layer -->
  <rect x="56" y="182" width="188" height="22" rx="5" fill="#EEE492" transform="rotate(3,150,193)"/>
  <!-- Bottom bread -->
  <rect x="54" y="206" width="192" height="24" rx="12" fill="#E0CB90" opacity="0.7" transform="rotate(3,150,218)"/>
  <!-- Green herbs -->
  <circle cx="90" cy="172" r="2.5" fill="#1F6B3D" opacity="0.7"/>
  <circle cx="175" cy="168" r="2" fill="#1F6B3D" opacity="0.65"/>
  <circle cx="222" cy="175" r="2.5" fill="#1F6B3D" opacity="0.7"/>
  <!-- Saffron/masala speck on top -->
  <circle cx="128" cy="108" r="3" fill="#D4A017" opacity="0.8"/>
  <circle cx="180" cy="104" r="2.5" fill="#F2994A" opacity="0.7"/>
  <!-- Chilli garnish -->
  <ellipse cx="48" cy="118" rx="15" ry="7" fill="#A31E22" opacity="0.85" transform="rotate(25,48,118)"/>
  <ellipse cx="48" cy="118" rx="11" ry="5" fill="#C83030" opacity="0.85" transform="rotate(25,48,118)"/>
</svg>`);

// ─── PK-PANEER · Paneer Pakora ───────────────────────────────────────────────
data['pk-paneer'] = slot(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
  <defs>
    <radialGradient id="bgp" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#FFF8EC"/>
      <stop offset="100%" stop-color="#EEE0C0"/>
    </radialGradient>
    <radialGradient id="bcoat" cx="30%" cy="25%" r="70%">
      <stop offset="0%" stop-color="#E0A820"/>
      <stop offset="100%" stop-color="#7A5000"/>
    </radialGradient>
    <radialGradient id="paneerr" cx="30%" cy="20%" r="80%">
      <stop offset="0%" stop-color="#FEFCF8"/>
      <stop offset="100%" stop-color="#EEE8D8"/>
    </radialGradient>
  </defs>
  <rect width="300" height="300" fill="url(#bgp)"/>
  <ellipse cx="150" cy="255" rx="112" ry="14" fill="rgba(45,27,14,0.14)"/>

  <!-- Paneer cube 1 (center-left, front) -->
  <rect x="66" y="138" width="85" height="82" rx="10" fill="url(#bcoat)"/>
  <rect x="70" y="142" width="77" height="74" rx="7" fill="url(#paneerr)"/>
  <rect x="70" y="142" width="77" height="22" rx="7" fill="#E0A820" opacity="0.5"/>
  <!-- Masala on paneer surface -->
  <circle cx="92" cy="168" r="3" fill="#E87020" opacity="0.7"/>
  <circle cx="115" cy="175" r="2.5" fill="#D4A017" opacity="0.6"/>
  <circle cx="104" cy="185" r="2" fill="#E87020" opacity="0.65"/>
  <circle cx="128" cy="172" r="2.5" fill="#C83030" opacity="0.5"/>

  <!-- Paneer cube 2 (right, slightly back) -->
  <rect x="152" y="120" width="80" height="76" rx="10" fill="url(#bcoat)"/>
  <rect x="156" y="124" width="72" height="68" rx="7" fill="url(#paneerr)"/>
  <rect x="156" y="124" width="72" height="20" rx="7" fill="#D8A018" opacity="0.45"/>
  <circle cx="178" cy="150" r="2.5" fill="#E87020" opacity="0.65"/>
  <circle cx="198" cy="158" r="2" fill="#D4A017" opacity="0.6"/>
  <circle cx="170" cy="162" r="3" fill="#C83030" opacity="0.45"/>

  <!-- Paneer cube 3 (back, partial) -->
  <rect x="100" y="100" width="72" height="64" rx="9" fill="#A07500" opacity="0.85"/>
  <rect x="104" y="104" width="64" height="56" rx="6" fill="#F0EAD8" opacity="0.9"/>
  <rect x="104" y="104" width="64" height="18" rx="6" fill="#CC9010" opacity="0.5"/>

  <!-- Green mint chutney dip -->
  <ellipse cx="56" cy="234" rx="30" ry="18" fill="#1F6B3D" opacity="0.85"/>
  <ellipse cx="56" cy="233" rx="23" ry="13" fill="#2D8A50"/>

  <!-- Red chilli garnish -->
  <ellipse cx="254" cy="145" rx="18" ry="9" fill="#A31E22" transform="rotate(-35,254,145)"/>
  <ellipse cx="254" cy="145" rx="13" ry="6" fill="#C83030" transform="rotate(-35,254,145)"/>
  <line x1="263" y1="135" x2="267" y2="130" stroke="#2D7A20" stroke-width="2" stroke-linecap="round"/>
</svg>`);

// ─── PK-MIX · Mix Pakora ────────────────────────────────────────────────────
data['pk-mix'] = slot(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
  <defs>
    <radialGradient id="bgm" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#FFF8EC"/>
      <stop offset="100%" stop-color="#EEE0C0"/>
    </radialGradient>
  </defs>
  <rect width="300" height="300" fill="url(#bgm)"/>
  <ellipse cx="150" cy="256" rx="115" ry="14" fill="rgba(45,27,14,0.15)"/>

  <!-- Piece 1: big bread pakora (bottom left) -->
  <rect x="48" y="162" width="92" height="62" rx="14" fill="#7A4E00" transform="rotate(-8,94,193)"/>
  <rect x="52" y="166" width="84" height="54" rx="11" fill="#C08800" transform="rotate(-8,94,193)"/>
  <rect x="56" y="170" width="76" height="46" rx="8" fill="#DCA020" transform="rotate(-8,94,193)"/>
  <rect x="60" y="185" width="68" height="14" rx="3" fill="#F5EEC8" transform="rotate(-8,94,193)"/>

  <!-- Piece 2: paneer cube (center back) -->
  <rect x="120" y="118" width="68" height="64" rx="10" fill="#9A7000" transform="rotate(5,154,150)"/>
  <rect x="124" y="122" width="60" height="56" rx="7" fill="#FEFCF5" transform="rotate(5,154,150)"/>
  <rect x="124" y="122" width="60" height="18" rx="7" fill="#CC9010" opacity="0.5" transform="rotate(5,154,150)"/>

  <!-- Piece 3: onion rings / mix piece (right) -->
  <ellipse cx="218" cy="178" rx="44" ry="34" fill="#8B5A00" transform="rotate(12,218,178)"/>
  <ellipse cx="218" cy="178" rx="38" ry="28" fill="#C88010" transform="rotate(12,218,178)"/>
  <ellipse cx="218" cy="178" rx="30" ry="20" fill="#DCA828" transform="rotate(12,218,178)"/>
  <ellipse cx="218" cy="178" rx="16" ry="10" fill="#F5EEC8" opacity="0.7" transform="rotate(12,218,178)"/>

  <!-- Piece 4: small pakora (center front) -->
  <rect x="108" y="185" width="84" height="58" rx="13" fill="#7A4800" transform="rotate(-3,150,214)"/>
  <rect x="112" y="189" width="76" height="50" rx="10" fill="#B87800" transform="rotate(-3,150,214)"/>
  <rect x="116" y="193" width="68" height="42" rx="7" fill="#D49010" transform="rotate(-3,150,214)"/>

  <!-- Piece 5: mushroom piece (upper left) -->
  <ellipse cx="90" cy="128" rx="36" ry="28" fill="#9A6200" transform="rotate(-5,90,128)"/>
  <ellipse cx="90" cy="128" rx="29" ry="21" fill="#CC8A18" transform="rotate(-5,90,128)"/>
  <ellipse cx="90" cy="124" rx="22" ry="15" fill="#E0A028" transform="rotate(-5,90,128)"/>

  <!-- Chutney -->
  <ellipse cx="38" cy="248" rx="24" ry="14" fill="#1F6B3D" opacity="0.85"/>
  <ellipse cx="38" cy="247" rx="18" ry="10" fill="#2D8A50"/>

  <!-- Herbs -->
  <circle cx="160" cy="200" r="2" fill="#1F6B3D" opacity="0.7"/>
  <circle cx="185" cy="208" r="2.5" fill="#1F6B3D" opacity="0.6"/>
  <circle cx="135" cy="210" r="2" fill="#1F6B3D" opacity="0.65"/>
</svg>`);

// ─── PK-CHAAP · Chaap Pakora ─────────────────────────────────────────────────
data['pk-chaap'] = slot(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
  <defs>
    <radialGradient id="bgch" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#FFF8EC"/>
      <stop offset="100%" stop-color="#EEE0C0"/>
    </radialGradient>
    <linearGradient id="chaap" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#D09010"/>
      <stop offset="40%" stop-color="#A86800"/>
      <stop offset="100%" stop-color="#6A3E00"/>
    </linearGradient>
    <linearGradient id="chaapinner" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#F0E8D0"/>
      <stop offset="100%" stop-color="#D8C8A0"/>
    </linearGradient>
  </defs>
  <rect width="300" height="300" fill="url(#bgch)"/>
  <ellipse cx="150" cy="255" rx="112" ry="13" fill="rgba(45,27,14,0.14)"/>

  <!-- Chaap piece 1 (diagonal left) -->
  <rect x="60" y="104" width="52" height="120" rx="16" fill="url(#chaap)" transform="rotate(-18,86,164)"/>
  <rect x="64" y="108" width="44" height="112" rx="12" fill="url(#chaapinner)" transform="rotate(-18,86,164)"/>
  <!-- Char marks -->
  <rect x="66" y="125" width="40" height="6" rx="3" fill="#5A3000" opacity="0.35" transform="rotate(-18,86,164)"/>
  <rect x="66" y="145" width="40" height="5" rx="2.5" fill="#5A3000" opacity="0.3" transform="rotate(-18,86,164)"/>
  <rect x="66" y="165" width="40" height="6" rx="3" fill="#5A3000" opacity="0.35" transform="rotate(-18,86,164)"/>
  <!-- Masala coating specks -->
  <circle cx="75" cy="145" r="3" fill="#C83030" opacity="0.55" transform="rotate(-18,86,164)"/>
  <circle cx="95" cy="158" r="2.5" fill="#E87020" opacity="0.6" transform="rotate(-18,86,164)"/>

  <!-- Chaap piece 2 (center) -->
  <rect x="118" y="90" width="54" height="130" rx="17" fill="url(#chaap)" transform="rotate(-5,145,155)"/>
  <rect x="122" y="94" width="46" height="122" rx="13" fill="url(#chaapinner)" transform="rotate(-5,145,155)"/>
  <rect x="124" y="115" width="42" height="7" rx="3" fill="#5A3000" opacity="0.3" transform="rotate(-5,145,155)"/>
  <rect x="124" y="138" width="42" height="6" rx="3" fill="#5A3000" opacity="0.28" transform="rotate(-5,145,155)"/>
  <rect x="124" y="160" width="42" height="7" rx="3" fill="#5A3000" opacity="0.3" transform="rotate(-5,145,155)"/>
  <circle cx="138" cy="148" r="3" fill="#D4A017" opacity="0.65" transform="rotate(-5,145,155)"/>
  <circle cx="155" cy="162" r="2.5" fill="#C83030" opacity="0.5" transform="rotate(-5,145,155)"/>

  <!-- Chaap piece 3 (right) -->
  <rect x="186" y="100" width="50" height="116" rx="15" fill="url(#chaap)" transform="rotate(14,211,158)"/>
  <rect x="190" y="104" width="42" height="108" rx="11" fill="url(#chaapinner)" transform="rotate(14,211,158)"/>
  <rect x="192" y="122" width="38" height="6" rx="3" fill="#5A3000" opacity="0.3" transform="rotate(14,211,158)"/>
  <rect x="192" y="144" width="38" height="5" rx="2.5" fill="#5A3000" opacity="0.28" transform="rotate(14,211,158)"/>
  <circle cx="205" cy="150" r="2.5" fill="#E87020" opacity="0.6" transform="rotate(14,211,158)"/>

  <!-- Chutney -->
  <ellipse cx="44" cy="240" rx="26" ry="16" fill="#1F6B3D" opacity="0.85"/>
  <ellipse cx="44" cy="239" rx="20" ry="12" fill="#2D8A50"/>
  <!-- Red chilli -->
  <ellipse cx="258" cy="228" rx="20" ry="9" fill="#A31E22" transform="rotate(-20,258,228)"/>
  <ellipse cx="258" cy="228" rx="15" ry="6" fill="#C83030" transform="rotate(-20,258,228)"/>
</svg>`);

// ─── PK-MUSHROOM · Mushroom Pakora ───────────────────────────────────────────
data['pk-mushroom'] = slot(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
  <defs>
    <radialGradient id="bgmu" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#FFF8EC"/>
      <stop offset="100%" stop-color="#EEE0C0"/>
    </radialGradient>
    <radialGradient id="mushbatter" cx="35%" cy="25%" r="65%">
      <stop offset="0%" stop-color="#D4A018"/>
      <stop offset="55%" stop-color="#9A6E00"/>
      <stop offset="100%" stop-color="#604200"/>
    </radialGradient>
    <radialGradient id="mushinner" cx="40%" cy="30%" r="60%">
      <stop offset="0%" stop-color="#EEE0C0"/>
      <stop offset="100%" stop-color="#C8B080"/>
    </radialGradient>
  </defs>
  <rect width="300" height="300" fill="url(#bgmu)"/>
  <ellipse cx="150" cy="256" rx="112" ry="13" fill="rgba(45,27,14,0.14)"/>

  <!-- Mushroom 1 (left) - cap + stem -->
  <ellipse cx="88" cy="155" rx="46" ry="40" fill="url(#mushbatter)"/>
  <ellipse cx="88" cy="152" rx="40" ry="34" fill="url(#mushinner)"/>
  <ellipse cx="82" cy="148" rx="16" ry="10" fill="#E0C870" opacity="0.5"/>
  <rect x="80" y="188" width="16" height="32" rx="8" fill="url(#mushbatter)"/>
  <rect x="83" y="191" width="10" height="26" rx="5" fill="url(#mushinner)"/>

  <!-- Mushroom 2 (center, front) - larger -->
  <ellipse cx="162" cy="165" rx="54" ry="46" fill="url(#mushbatter)"/>
  <ellipse cx="162" cy="161" rx="46" ry="39" fill="url(#mushinner)"/>
  <ellipse cx="155" cy="155" rx="18" ry="11" fill="#E0C870" opacity="0.5"/>
  <!-- Gills on underside -->
  <ellipse cx="162" cy="204" rx="22" ry="6" fill="#8B6030" opacity="0.35"/>
  <rect x="154" y="204" width="16" height="36" rx="8" fill="url(#mushbatter)"/>
  <rect x="157" y="207" width="10" height="30" rx="5" fill="url(#mushinner)"/>

  <!-- Mushroom 3 (right) -->
  <ellipse cx="235" cy="148" rx="42" ry="36" fill="url(#mushbatter)"/>
  <ellipse cx="235" cy="145" rx="35" ry="30" fill="url(#mushinner)"/>
  <ellipse cx="229" cy="140" rx="13" ry="8" fill="#E0C870" opacity="0.5"/>
  <rect x="227" y="181" width="16" height="28" rx="8" fill="url(#mushbatter)"/>
  <rect x="230" y="184" width="10" height="22" rx="5" fill="url(#mushinner)"/>

  <!-- Herb specks -->
  <circle cx="92" cy="168" r="2.5" fill="#1F6B3D" opacity="0.7"/>
  <circle cx="155" cy="178" r="2" fill="#1F6B3D" opacity="0.65"/>
  <circle cx="238" cy="158" r="2.5" fill="#1F6B3D" opacity="0.7"/>
  <circle cx="175" cy="168" r="2" fill="#1F6B3D" opacity="0.6"/>

  <!-- Seasonal tag hint (mint) -->
  <rect x="96" y="52" width="108" height="28" rx="14" fill="#1F6B3D" opacity="0.12"/>
  <text x="150" y="71" text-anchor="middle" font-family="Georgia,serif" font-size="11" fill="#1F6B3D" font-style="italic" opacity="0.9">Seasonal</text>

  <!-- Chutney -->
  <ellipse cx="44" cy="242" rx="26" ry="15" fill="#1F6B3D" opacity="0.85"/>
  <ellipse cx="44" cy="241" rx="20" ry="11" fill="#2D8A50"/>
</svg>`);

// ─── PK-BHISH · Lotus Stem (Bhish) Pakora ────────────────────────────────────
data['pk-bhish'] = slot(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
  <defs>
    <radialGradient id="bgbh" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#FFF8EC"/>
      <stop offset="100%" stop-color="#EEE0C0"/>
    </radialGradient>
    <radialGradient id="lsbatter" cx="35%" cy="28%" r="65%">
      <stop offset="0%" stop-color="#DCA820"/>
      <stop offset="55%" stop-color="#A07800"/>
      <stop offset="100%" stop-color="#624400"/>
    </radialGradient>
    <radialGradient id="lsinner" cx="40%" cy="30%" r="60%">
      <stop offset="0%" stop-color="#F5EED8"/>
      <stop offset="100%" stop-color="#DDD0A0"/>
    </radialGradient>
  </defs>
  <rect width="300" height="300" fill="url(#bgbh)"/>
  <ellipse cx="150" cy="258" rx="112" ry="13" fill="rgba(45,27,14,0.14)"/>

  <!-- Lotus stem slice 1 (left, tilted) -->
  <ellipse cx="90" cy="150" rx="44" ry="50" fill="url(#lsbatter)" transform="rotate(-15,90,150)"/>
  <ellipse cx="90" cy="150" rx="37" ry="42" fill="url(#lsinner)" transform="rotate(-15,90,150)"/>
  <!-- Holes in lotus stem (characteristic) -->
  <ellipse cx="82" cy="142" rx="7" ry="8" fill="#C8B060" transform="rotate(-15,90,150)"/>
  <ellipse cx="99" cy="142" rx="7" ry="8" fill="#C8B060" transform="rotate(-15,90,150)"/>
  <ellipse cx="90" cy="157" rx="7" ry="8" fill="#C8B060" transform="rotate(-15,90,150)"/>
  <ellipse cx="76" cy="158" rx="5.5" ry="6" fill="#C8B060" transform="rotate(-15,90,150)"/>
  <ellipse cx="104" cy="160" rx="5.5" ry="6" fill="#C8B060" transform="rotate(-15,90,150)"/>

  <!-- Lotus stem slice 2 (center) -->
  <ellipse cx="158" cy="155" rx="50" ry="54" fill="url(#lsbatter)"/>
  <ellipse cx="158" cy="155" rx="43" ry="46" fill="url(#lsinner)"/>
  <ellipse cx="148" cy="147" rx="8" ry="9" fill="#C8B060"/>
  <ellipse cx="168" cy="147" rx="8" ry="9" fill="#C8B060"/>
  <ellipse cx="158" cy="163" rx="8" ry="9" fill="#C8B060"/>
  <ellipse cx="142" cy="163" rx="6" ry="7" fill="#C8B060"/>
  <ellipse cx="174" cy="165" rx="6" ry="7" fill="#C8B060"/>
  <ellipse cx="156" cy="142" rx="5" ry="5.5" fill="#C8B060"/>

  <!-- Lotus stem slice 3 (right, tilted) -->
  <ellipse cx="230" cy="148" rx="42" ry="46" fill="url(#lsbatter)" transform="rotate(12,230,148)"/>
  <ellipse cx="230" cy="148" rx="35" ry="39" fill="url(#lsinner)" transform="rotate(12,230,148)"/>
  <ellipse cx="222" cy="140" rx="7" ry="8" fill="#C8B060" transform="rotate(12,230,148)"/>
  <ellipse cx="238" cy="140" rx="7" ry="8" fill="#C8B060" transform="rotate(12,230,148)"/>
  <ellipse cx="230" cy="155" rx="7" ry="8" fill="#C8B060" transform="rotate(12,230,148)"/>
  <ellipse cx="218" cy="156" rx="5" ry="6" fill="#C8B060" transform="rotate(12,230,148)"/>
  <ellipse cx="243" cy="158" rx="5" ry="6" fill="#C8B060" transform="rotate(12,230,148)"/>

  <!-- Chutney -->
  <ellipse cx="44" cy="244" rx="26" ry="15" fill="#1F6B3D" opacity="0.85"/>
  <ellipse cx="44" cy="243" rx="20" ry="11" fill="#2D8A50"/>
</svg>`);

// ─── SW-KALAKAND · Kalakand ───────────────────────────────────────────────────
data['sw-kalakand'] = slot(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
  <defs>
    <radialGradient id="bgkk" cx="50%" cy="50%" r="65%">
      <stop offset="0%" stop-color="#2D1B0E"/>
      <stop offset="100%" stop-color="#1A0E06"/>
    </radialGradient>
    <linearGradient id="kkpiece" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#F8F5EC"/>
      <stop offset="100%" stop-color="#EDE5D0"/>
    </linearGradient>
  </defs>
  <rect width="400" height="300" fill="url(#bgkk)"/>
  <!-- Tray / plate -->
  <rect x="30" y="40" width="340" height="220" rx="12" fill="#3A2510"/>
  <rect x="34" y="44" width="332" height="212" rx="10" fill="#F5EDD8"/>
  <!-- Silver platter hint -->
  <rect x="36" y="46" width="328" height="40" rx="8" fill="white" opacity="0.1"/>

  <!-- Kalakand pieces - 2x3 grid -->
  <!-- Row 1 -->
  <g>
    <rect x="55" y="65" width="85" height="72" rx="6" fill="url(#kkpiece)"/>
    <rect x="55" y="65" width="85" height="72" rx="6" fill="none" stroke="#CDBF9A" stroke-width="1.2"/>
    <!-- grainy texture lines -->
    <line x1="60" y1="80" x2="135" y2="80" stroke="#DDD5B8" stroke-width="0.8" opacity="0.8"/>
    <line x1="60" y1="94" x2="135" y2="94" stroke="#DDD5B8" stroke-width="0.8" opacity="0.6"/>
    <line x1="60" y1="108" x2="135" y2="108" stroke="#DDD5B8" stroke-width="0.8" opacity="0.7"/>
    <line x1="60" y1="122" x2="135" y2="122" stroke="#DDD5B8" stroke-width="0.8" opacity="0.6"/>
    <!-- Pistachio garnish -->
    <ellipse cx="88" cy="70" rx="6" ry="3" fill="#4A8040" opacity="0.85"/>
    <ellipse cx="104" cy="70" rx="5" ry="3" fill="#3A6A30" opacity="0.8"/>
  </g>
  <g>
    <rect x="158" y="65" width="85" height="72" rx="6" fill="url(#kkpiece)"/>
    <rect x="158" y="65" width="85" height="72" rx="6" fill="none" stroke="#CDBF9A" stroke-width="1.2"/>
    <line x1="163" y1="80" x2="238" y2="80" stroke="#DDD5B8" stroke-width="0.8" opacity="0.8"/>
    <line x1="163" y1="96" x2="238" y2="96" stroke="#DDD5B8" stroke-width="0.8" opacity="0.6"/>
    <line x1="163" y1="110" x2="238" y2="110" stroke="#DDD5B8" stroke-width="0.8" opacity="0.7"/>
    <line x1="163" y1="124" x2="238" y2="124" stroke="#DDD5B8" stroke-width="0.8" opacity="0.6"/>
    <ellipse cx="188" cy="70" rx="5" ry="3" fill="#4A8040" opacity="0.85"/>
    <ellipse cx="205" cy="70" rx="6" ry="3" fill="#3A6A30" opacity="0.8"/>
    <ellipse cx="222" cy="70" rx="4" ry="2.5" fill="#4A8040" opacity="0.75"/>
  </g>
  <g>
    <rect x="261" y="65" width="85" height="72" rx="6" fill="url(#kkpiece)"/>
    <rect x="261" y="65" width="85" height="72" rx="6" fill="none" stroke="#CDBF9A" stroke-width="1.2"/>
    <line x1="266" y1="80" x2="341" y2="80" stroke="#DDD5B8" stroke-width="0.8" opacity="0.8"/>
    <line x1="266" y1="95" x2="341" y2="95" stroke="#DDD5B8" stroke-width="0.8" opacity="0.6"/>
    <line x1="266" y1="110" x2="341" y2="110" stroke="#DDD5B8" stroke-width="0.8" opacity="0.7"/>
    <line x1="266" y1="124" x2="341" y2="124" stroke="#DDD5B8" stroke-width="0.8" opacity="0.6"/>
    <ellipse cx="295" cy="70" rx="6" ry="3" fill="#4A8040" opacity="0.85"/>
    <ellipse cx="314" cy="70" rx="5" ry="3" fill="#3A6A30" opacity="0.8"/>
  </g>
  <!-- Row 2 -->
  <g>
    <rect x="55" y="155" width="85" height="72" rx="6" fill="url(#kkpiece)"/>
    <rect x="55" y="155" width="85" height="72" rx="6" fill="none" stroke="#CDBF9A" stroke-width="1.2"/>
    <line x1="60" y1="170" x2="135" y2="170" stroke="#DDD5B8" stroke-width="0.8" opacity="0.7"/>
    <line x1="60" y1="185" x2="135" y2="185" stroke="#DDD5B8" stroke-width="0.8" opacity="0.6"/>
    <line x1="60" y1="200" x2="135" y2="200" stroke="#DDD5B8" stroke-width="0.8" opacity="0.7"/>
    <line x1="60" y1="214" x2="135" y2="214" stroke="#DDD5B8" stroke-width="0.8" opacity="0.6"/>
    <ellipse cx="90" cy="160" rx="5" ry="3" fill="#4A8040" opacity="0.8"/>
  </g>
  <g>
    <rect x="158" y="155" width="85" height="72" rx="6" fill="url(#kkpiece)"/>
    <rect x="158" y="155" width="85" height="72" rx="6" fill="none" stroke="#CDBF9A" stroke-width="1.2"/>
    <line x1="163" y1="170" x2="238" y2="170" stroke="#DDD5B8" stroke-width="0.8" opacity="0.7"/>
    <line x1="163" y1="186" x2="238" y2="186" stroke="#DDD5B8" stroke-width="0.8" opacity="0.6"/>
    <line x1="163" y1="200" x2="238" y2="200" stroke="#DDD5B8" stroke-width="0.8" opacity="0.7"/>
    <line x1="163" y1="214" x2="238" y2="214" stroke="#DDD5B8" stroke-width="0.8" opacity="0.6"/>
    <ellipse cx="200" cy="160" rx="7" ry="3" fill="#4A8040" opacity="0.85"/>
  </g>
  <g>
    <rect x="261" y="155" width="85" height="72" rx="6" fill="url(#kkpiece)"/>
    <rect x="261" y="155" width="85" height="72" rx="6" fill="none" stroke="#CDBF9A" stroke-width="1.2"/>
    <line x1="266" y1="170" x2="341" y2="170" stroke="#DDD5B8" stroke-width="0.8" opacity="0.7"/>
    <line x1="266" y1="186" x2="341" y2="186" stroke="#DDD5B8" stroke-width="0.8" opacity="0.6"/>
    <line x1="266" y1="200" x2="341" y2="200" stroke="#DDD5B8" stroke-width="0.8" opacity="0.7"/>
    <line x1="266" y1="214" x2="341" y2="214" stroke="#DDD5B8" stroke-width="0.8" opacity="0.6"/>
    <ellipse cx="304" cy="160" rx="6" ry="3" fill="#4A8040" opacity="0.8"/>
    <ellipse cx="322" cy="160" rx="5" ry="3" fill="#3A6A30" opacity="0.75"/>
  </g>
</svg>`);

// ─── SW-GULAB · Gulab Jamun ──────────────────────────────────────────────────
data['sw-gulab'] = slot(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
  <defs>
    <radialGradient id="bggjj" cx="50%" cy="50%" r="65%">
      <stop offset="0%" stop-color="#2D1B0E"/>
      <stop offset="100%" stop-color="#1A0E06"/>
    </radialGradient>
    <radialGradient id="syrupbg" cx="50%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#D4870A" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#8B4E00" stop-opacity="0.6"/>
    </radialGradient>
    <radialGradient id="gjball" cx="35%" cy="28%" r="65%">
      <stop offset="0%" stop-color="#6A3008"/>
      <stop offset="50%" stop-color="#4A1C04"/>
      <stop offset="100%" stop-color="#2A0E02"/>
    </radialGradient>
    <radialGradient id="gjsheen" cx="30%" cy="25%" r="45%">
      <stop offset="0%" stop-color="#8A4010" stop-opacity="0.7"/>
      <stop offset="100%" stop-color="#8A4010" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="400" height="300" fill="url(#bggjj)"/>
  <!-- Bowl / serving dish -->
  <ellipse cx="200" cy="220" rx="160" ry="48" fill="#3A2008"/>
  <ellipse cx="200" cy="210" rx="158" ry="90" fill="#4A2A10"/>
  <ellipse cx="200" cy="200" rx="152" ry="84" fill="url(#syrupbg)"/>

  <!-- Gulab jamun balls -->
  <!-- Back row -->
  <circle cx="115" cy="165" r="36" fill="url(#gjball)"/>
  <circle cx="115" cy="165" r="36" fill="url(#gjsheen)"/>
  <circle cx="110" cy="157" r="12" fill="#7A3A0A" opacity="0.4"/>

  <circle cx="200" cy="155" r="40" fill="url(#gjball)"/>
  <circle cx="200" cy="155" r="40" fill="url(#gjsheen)"/>
  <circle cx="194" cy="145" r="14" fill="#7A3A0A" opacity="0.4"/>

  <circle cx="285" cy="165" r="36" fill="url(#gjball)"/>
  <circle cx="285" cy="165" r="36" fill="url(#gjsheen)"/>
  <circle cx="279" cy="157" r="12" fill="#7A3A0A" opacity="0.4"/>

  <!-- Front row -->
  <circle cx="155" cy="198" r="38" fill="url(#gjball)"/>
  <circle cx="155" cy="198" r="38" fill="url(#gjsheen)"/>
  <circle cx="149" cy="188" r="13" fill="#7A3A0A" opacity="0.4"/>

  <circle cx="248" cy="195" r="37" fill="url(#gjball)"/>
  <circle cx="248" cy="195" r="37" fill="url(#gjsheen)"/>
  <circle cx="242" cy="185" r="12" fill="#7A3A0A" opacity="0.4"/>

  <!-- Syrup drip highlight -->
  <ellipse cx="200" cy="215" rx="140" ry="22" fill="#C87808" opacity="0.3"/>

  <!-- Rose petal garnish -->
  <ellipse cx="200" cy="148" rx="10" ry="5" fill="#E87090" opacity="0.7" transform="rotate(-20,200,148)"/>
  <ellipse cx="214" cy="152" rx="9" ry="4.5" fill="#E87090" opacity="0.6" transform="rotate(15,214,152)"/>

  <!-- Pistachio slivers -->
  <ellipse cx="112" cy="155" rx="5" ry="2.5" fill="#4A8040" opacity="0.8" transform="rotate(-15,112,155)"/>
  <ellipse cx="280" cy="158" rx="5" ry="2.5" fill="#4A8040" opacity="0.8" transform="rotate(20,280,158)"/>
</svg>`);

// ─── SW-RASGULLA · Rasgulla ──────────────────────────────────────────────────
data['sw-rasgulla'] = slot(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
  <defs>
    <radialGradient id="bgrr" cx="50%" cy="50%" r="65%">
      <stop offset="0%" stop-color="#2D1B0E"/>
      <stop offset="100%" stop-color="#1A0E06"/>
    </radialGradient>
    <radialGradient id="syrup2" cx="50%" cy="50%" r="55%">
      <stop offset="0%" stop-color="#F0FBFA" stop-opacity="0.7"/>
      <stop offset="100%" stop-color="#D0F0E8" stop-opacity="0.5"/>
    </radialGradient>
    <radialGradient id="rgball" cx="30%" cy="25%" r="70%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="70%" stop-color="#F8F8F8"/>
      <stop offset="100%" stop-color="#EEEEEE"/>
    </radialGradient>
  </defs>
  <rect width="400" height="300" fill="url(#bgrr)"/>
  <!-- Bowl -->
  <ellipse cx="200" cy="225" rx="158" ry="44" fill="#3A2010"/>
  <ellipse cx="200" cy="210" rx="155" ry="86" fill="#4A2A12"/>
  <ellipse cx="200" cy="200" rx="150" ry="80" fill="url(#syrup2)"/>

  <!-- Rasgulla balls (spongy white) -->
  <!-- Back row -->
  <circle cx="115" cy="162" r="37" fill="url(#rgball)"/>
  <circle cx="115" cy="162" r="37" fill="none" stroke="#E0E0E0" stroke-width="1.5"/>
  <ellipse cx="108" cy="153" rx="14" ry="9" fill="white" opacity="0.7"/>

  <circle cx="200" cy="150" r="42" fill="url(#rgball)"/>
  <circle cx="200" cy="150" r="42" fill="none" stroke="#E0E0E0" stroke-width="1.5"/>
  <ellipse cx="192" cy="140" rx="16" ry="10" fill="white" opacity="0.7"/>

  <circle cx="285" cy="162" r="37" fill="url(#rgball)"/>
  <circle cx="285" cy="162" r="37" fill="none" stroke="#E0E0E0" stroke-width="1.5"/>
  <ellipse cx="278" cy="153" rx="13" ry="8" fill="white" opacity="0.7"/>

  <!-- Front row -->
  <circle cx="155" cy="196" r="40" fill="url(#rgball)"/>
  <circle cx="155" cy="196" r="40" fill="none" stroke="#E0E0E0" stroke-width="1.5"/>
  <ellipse cx="147" cy="186" rx="15" ry="9" fill="white" opacity="0.7"/>

  <circle cx="248" cy="193" r="38" fill="url(#rgball)"/>
  <circle cx="248" cy="193" r="38" fill="none" stroke="#E0E0E0" stroke-width="1.5"/>
  <ellipse cx="241" cy="183" rx="14" ry="9" fill="white" opacity="0.7"/>

  <!-- Syrup surface shimmer -->
  <ellipse cx="200" cy="218" rx="138" ry="18" fill="white" opacity="0.1"/>

  <!-- Rose water / saffron tint in syrup -->
  <ellipse cx="145" cy="215" rx="28" ry="8" fill="#F8D0E8" opacity="0.2"/>
  <ellipse cx="260" cy="212" rx="24" ry="7" fill="#F8D0E8" opacity="0.2"/>
</svg>`);

// ─── SW-BESAN · Besan Laddoo ─────────────────────────────────────────────────
data['sw-besan'] = slot(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
  <defs>
    <radialGradient id="bgbl" cx="50%" cy="50%" r="65%">
      <stop offset="0%" stop-color="#2D1B0E"/>
      <stop offset="100%" stop-color="#1A0E06"/>
    </radialGradient>
    <radialGradient id="lball" cx="30%" cy="25%" r="68%">
      <stop offset="0%" stop-color="#E0B828"/>
      <stop offset="55%" stop-color="#B88A00"/>
      <stop offset="100%" stop-color="#7A5A00"/>
    </radialGradient>
    <radialGradient id="lsheen" cx="28%" cy="22%" r="45%">
      <stop offset="0%" stop-color="#F4D040" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#F4D040" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="400" height="300" fill="url(#bgbl)"/>
  <!-- Tray -->
  <rect x="25" y="35" width="350" height="230" rx="12" fill="#3A2010"/>
  <rect x="29" y="39" width="342" height="222" rx="10" fill="#F5ECD8"/>

  <!-- Laddoos arranged -->
  <!-- Back row (3) -->
  <circle cx="105" cy="128" r="42" fill="url(#lball)"/>
  <circle cx="105" cy="128" r="42" fill="url(#lsheen)"/>
  <ellipse cx="96" cy="118" rx="15" ry="10" fill="#F0CC40" opacity="0.4"/>
  <!-- Cardamom on top -->
  <ellipse cx="105" cy="90" rx="7" ry="4" fill="#8B7040" opacity="0.7"/>

  <circle cx="200" cy="118" r="46" fill="url(#lball)"/>
  <circle cx="200" cy="118" r="46" fill="url(#lsheen)"/>
  <ellipse cx="190" cy="107" rx="17" ry="11" fill="#F0CC40" opacity="0.4"/>
  <ellipse cx="200" cy="76" rx="8" ry="4.5" fill="#8B7040" opacity="0.7"/>
  <ellipse cx="212" cy="78" rx="6" ry="3.5" fill="#8B7040" opacity="0.6"/>

  <circle cx="295" cy="128" r="42" fill="url(#lball)"/>
  <circle cx="295" cy="128" r="42" fill="url(#lsheen)"/>
  <ellipse cx="286" cy="118" rx="15" ry="10" fill="#F0CC40" opacity="0.4"/>
  <ellipse cx="295" cy="90" rx="7" ry="4" fill="#8B7040" opacity="0.7"/>

  <!-- Front row (2) -->
  <circle cx="152" cy="202" r="44" fill="url(#lball)"/>
  <circle cx="152" cy="202" r="44" fill="url(#lsheen)"/>
  <ellipse cx="143" cy="192" rx="16" ry="10" fill="#F0CC40" opacity="0.4"/>
  <ellipse cx="152" cy="162" rx="8" ry="4" fill="#8B7040" opacity="0.7"/>

  <circle cx="252" cy="202" r="44" fill="url(#lball)"/>
  <circle cx="252" cy="202" r="44" fill="url(#lsheen)"/>
  <ellipse cx="243" cy="192" rx="16" ry="10" fill="#F0CC40" opacity="0.4"/>
  <ellipse cx="252" cy="162" rx="8" ry="4" fill="#8B7040" opacity="0.7"/>
</svg>`);

// ─── SW-MOTICHOOR · Motichoor Laddoo ────────────────────────────────────────
data['sw-motichoor'] = slot(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
  <defs>
    <radialGradient id="bgmc" cx="50%" cy="50%" r="65%">
      <stop offset="0%" stop-color="#2D1B0E"/>
      <stop offset="100%" stop-color="#1A0E06"/>
    </radialGradient>
    <radialGradient id="mcball" cx="30%" cy="25%" r="68%">
      <stop offset="0%" stop-color="#F09840"/>
      <stop offset="55%" stop-color="#D06818"/>
      <stop offset="100%" stop-color="#904000"/>
    </radialGradient>
    <radialGradient id="mcsheen" cx="28%" cy="22%" r="45%">
      <stop offset="0%" stop-color="#F8C060" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="#F8C060" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="400" height="300" fill="url(#bgmc)"/>
  <!-- Tray -->
  <rect x="25" y="35" width="350" height="230" rx="12" fill="#3A2010"/>
  <rect x="29" y="39" width="342" height="222" rx="10" fill="#F5ECD8"/>

  <!-- Laddoos with boondi texture -->
  <!-- Back row -->
  <circle cx="105" cy="128" r="42" fill="url(#mcball)"/>
  <circle cx="105" cy="128" r="42" fill="url(#mcsheen)"/>
  <!-- boondi dots texture -->
  <circle cx="92" cy="115" r="3.5" fill="#C06010" opacity="0.6"/>
  <circle cx="108" cy="110" r="3" fill="#C06010" opacity="0.5"/>
  <circle cx="118" cy="120" r="3.5" fill="#C06010" opacity="0.6"/>
  <circle cx="96" cy="128" r="3" fill="#C06010" opacity="0.55"/>
  <circle cx="114" cy="132" r="3.5" fill="#C06010" opacity="0.6"/>
  <circle cx="100" cy="140" r="3" fill="#C06010" opacity="0.5"/>
  <ellipse cx="105" cy="90" rx="7" ry="4" fill="#7A5030" opacity="0.7"/>

  <circle cx="200" cy="118" r="46" fill="url(#mcball)"/>
  <circle cx="200" cy="118" r="46" fill="url(#mcsheen)"/>
  <circle cx="185" cy="105" r="4" fill="#C06010" opacity="0.6"/>
  <circle cx="200" cy="100" r="3.5" fill="#C06010" opacity="0.55"/>
  <circle cx="214" cy="108" r="4" fill="#C06010" opacity="0.6"/>
  <circle cx="188" cy="118" r="3.5" fill="#C06010" opacity="0.55"/>
  <circle cx="210" cy="122" r="4" fill="#C06010" opacity="0.6"/>
  <circle cx="196" cy="130" r="3.5" fill="#C06010" opacity="0.55"/>
  <ellipse cx="200" cy="76" rx="8" ry="4.5" fill="#7A5030" opacity="0.7"/>

  <circle cx="295" cy="128" r="42" fill="url(#mcball)"/>
  <circle cx="295" cy="128" r="42" fill="url(#mcsheen)"/>
  <circle cx="283" cy="116" r="3.5" fill="#C06010" opacity="0.6"/>
  <circle cx="296" cy="111" r="3" fill="#C06010" opacity="0.55"/>
  <circle cx="306" cy="122" r="3.5" fill="#C06010" opacity="0.6"/>
  <circle cx="288" cy="132" r="3" fill="#C06010" opacity="0.55"/>
  <ellipse cx="295" cy="90" rx="7" ry="4" fill="#7A5030" opacity="0.7"/>

  <!-- Front row -->
  <circle cx="152" cy="202" r="44" fill="url(#mcball)"/>
  <circle cx="152" cy="202" r="44" fill="url(#mcsheen)"/>
  <circle cx="138" cy="190" r="4" fill="#C06010" opacity="0.6"/>
  <circle cx="155" cy="185" r="3.5" fill="#C06010" opacity="0.55"/>
  <circle cx="165" cy="196" r="4" fill="#C06010" opacity="0.6"/>
  <circle cx="142" cy="204" r="3.5" fill="#C06010" opacity="0.55"/>
  <circle cx="160" cy="210" r="4" fill="#C06010" opacity="0.6"/>
  <ellipse cx="152" cy="162" rx="8" ry="4" fill="#7A5030" opacity="0.7"/>

  <circle cx="252" cy="202" r="44" fill="url(#mcball)"/>
  <circle cx="252" cy="202" r="44" fill="url(#mcsheen)"/>
  <circle cx="238" cy="190" r="4" fill="#C06010" opacity="0.6"/>
  <circle cx="254" cy="186" r="3.5" fill="#C06010" opacity="0.55"/>
  <circle cx="265" cy="196" r="4" fill="#C06010" opacity="0.6"/>
  <circle cx="242" cy="206" r="3.5" fill="#C06010" opacity="0.55"/>
  <ellipse cx="252" cy="162" rx="8" ry="4" fill="#7A5030" opacity="0.7"/>
</svg>`);

// ─── SW-KAJU · Kaju Katli ────────────────────────────────────────────────────
data['sw-kaju'] = slot(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
  <defs>
    <radialGradient id="bgkj" cx="50%" cy="50%" r="65%">
      <stop offset="0%" stop-color="#2D1B0E"/>
      <stop offset="100%" stop-color="#1A0E06"/>
    </radialGradient>
    <linearGradient id="kjpiece" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#F5F5E8"/>
      <stop offset="100%" stop-color="#E5E5D0"/>
    </linearGradient>
    <linearGradient id="kjsheen" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="white" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="white" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="400" height="300" fill="url(#bgkj)"/>
  <!-- Dark tray -->
  <rect x="28" y="38" width="344" height="224" rx="12" fill="#1E1208"/>
  <!-- Silver foil-lined box look -->
  <rect x="32" y="42" width="336" height="216" rx="9" fill="#E8E8DC"/>
  <!-- Silver shimmer -->
  <rect x="34" y="44" width="332" height="60" rx="7" fill="white" opacity="0.12"/>

  <!-- Diamond pieces arranged in rows -->
  <!-- Row 1 (3 diamonds) -->
  <polygon points="85,72 110,95 85,118 60,95" fill="url(#kjpiece)" stroke="#C8C8A8" stroke-width="1.2"/>
  <polygon points="85,73 109,95 85,117 61,95" fill="url(#kjsheen)"/>
  <polygon points="170,66 200,93 170,120 140,93" fill="url(#kjpiece)" stroke="#C8C8A8" stroke-width="1.2"/>
  <polygon points="170,67 199,93 170,119 141,93" fill="url(#kjsheen)"/>
  <polygon points="258,72 284,96 258,120 232,96" fill="url(#kjpiece)" stroke="#C8C8A8" stroke-width="1.2"/>
  <polygon points="258,73 283,96 258,119 233,96" fill="url(#kjsheen)"/>
  <polygon points="330,66 356,92 330,118 304,92" fill="url(#kjpiece)" stroke="#C8C8A8" stroke-width="1.2"/>
  <polygon points="330,67 355,92 330,117 305,92" fill="url(#kjsheen)"/>

  <!-- Row 2 -->
  <polygon points="48,130 74,156 48,182 22,156" fill="url(#kjpiece)" stroke="#C8C8A8" stroke-width="1.2"/>
  <polygon points="48,131 73,156 48,181 23,156" fill="url(#kjsheen)"/>
  <polygon points="128,124 158,152 128,180 98,152" fill="url(#kjpiece)" stroke="#C8C8A8" stroke-width="1.2"/>
  <polygon points="128,125 157,152 128,179 99,152" fill="url(#kjsheen)"/>
  <polygon points="215,124 245,152 215,180 185,152" fill="url(#kjpiece)" stroke="#C8C8A8" stroke-width="1.2"/>
  <polygon points="215,125 244,152 215,179 186,152" fill="url(#kjsheen)"/>
  <polygon points="300,128 328,155 300,182 272,155" fill="url(#kjpiece)" stroke="#C8C8A8" stroke-width="1.2"/>
  <polygon points="300,129 327,155 300,181 273,155" fill="url(#kjsheen)"/>
  <polygon points="372,132 396,155 372,178 348,155" fill="url(#kjpiece)" stroke="#C8C8A8" stroke-width="1.2"/>
  <polygon points="372,133 395,155 372,177 349,155" fill="url(#kjsheen)"/>

  <!-- Row 3 -->
  <polygon points="85,195 112,220 85,245 58,220" fill="url(#kjpiece)" stroke="#C8C8A8" stroke-width="1.2"/>
  <polygon points="85,196 111,220 85,244 59,220" fill="url(#kjsheen)"/>
  <polygon points="168,188 200,216 168,244 136,216" fill="url(#kjpiece)" stroke="#C8C8A8" stroke-width="1.2"/>
  <polygon points="168,189 199,216 168,243 137,216" fill="url(#kjsheen)"/>
  <polygon points="258,192 286,218 258,244 230,218" fill="url(#kjpiece)" stroke="#C8C8A8" stroke-width="1.2"/>
  <polygon points="258,193 285,218 258,243 231,218" fill="url(#kjsheen)"/>
  <polygon points="340,196 366,220 340,244 314,220" fill="url(#kjpiece)" stroke="#C8C8A8" stroke-width="1.2"/>
  <polygon points="340,197 365,220 340,243 315,220" fill="url(#kjsheen)"/>

  <!-- Silver leaf dots (vark) on a few pieces -->
  <ellipse cx="170" cy="93" rx="12" ry="6" fill="white" opacity="0.35"/>
  <ellipse cx="215" cy="152" rx="14" ry="7" fill="white" opacity="0.35"/>
  <ellipse cx="85" cy="220" rx="12" ry="6" fill="white" opacity="0.3"/>
</svg>`);

// ─── SANDWICH ────────────────────────────────────────────────────────────────
data['sandwich'] = slot(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <defs>
    <radialGradient id="bgsan" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#F5EDD8"/>
      <stop offset="100%" stop-color="#E8D8B8"/>
    </radialGradient>
    <linearGradient id="bread" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#E0B838"/>
      <stop offset="100%" stop-color="#C09018"/>
    </linearGradient>
  </defs>
  <rect width="200" height="200" fill="url(#bgsan)"/>
  <!-- Shadow -->
  <ellipse cx="100" cy="178" rx="72" ry="10" fill="rgba(45,27,14,0.18)"/>

  <!-- Sandwich body (side cross-section) -->
  <!-- Top bread -->
  <rect x="28" y="54" width="144" height="28" rx="14" fill="url(#bread)"/>
  <rect x="28" y="54" width="144" height="14" rx="14" fill="#E8C040" opacity="0.5"/>

  <!-- Green layer (chutney/lettuce) -->
  <rect x="30" y="80" width="140" height="18" rx="4" fill="#2D8A3E"/>
  <rect x="30" y="80" width="140" height="8" rx="4" fill="#3AAA50" opacity="0.6"/>
  <!-- Leafy edge -->
  <path d="M30,82 Q40,76 50,82 Q60,76 70,82 Q80,76 90,82 Q100,76 110,82 Q120,76 130,82 Q140,76 150,82 Q160,76 170,82" fill="none" stroke="#4ABB60" stroke-width="2.5" opacity="0.7"/>

  <!-- Yellow layer (potato/cheese) -->
  <rect x="30" y="96" width="140" height="22" rx="4" fill="#F2D030"/>
  <rect x="30" y="96" width="140" height="10" rx="4" fill="#FAE040" opacity="0.5"/>

  <!-- Red layer (tomato) -->
  <rect x="30" y="116" width="140" height="16" rx="4" fill="#D82020"/>
  <rect x="30" y="116" width="140" height="7" rx="4" fill="#E83030" opacity="0.5"/>

  <!-- White layer (paneer/mayo) -->
  <rect x="30" y="130" width="140" height="14" rx="4" fill="#F5F2E8"/>

  <!-- Bottom bread -->
  <rect x="28" y="142" width="144" height="26" rx="13" fill="url(#bread)"/>
  <rect x="28" y="153" width="144" height="15" rx="13" fill="#B87808" opacity="0.4"/>

  <!-- Sesame seeds on top bread -->
  <ellipse cx="65" cy="60" rx="4" ry="2" fill="#F5F0E0" opacity="0.85" transform="rotate(-15,65,60)"/>
  <ellipse cx="95" cy="58" rx="4" ry="2" fill="#F5F0E0" opacity="0.8" transform="rotate(10,95,58)"/>
  <ellipse cx="128" cy="62" rx="4" ry="2" fill="#F5F0E0" opacity="0.85" transform="rotate(-8,128,62)"/>
  <ellipse cx="150" cy="59" rx="3.5" ry="2" fill="#F5F0E0" opacity="0.75" transform="rotate(15,150,59)"/>

  <!-- Toothpick -->
  <line x1="130" y1="44" x2="130" y2="162" stroke="#A07840" stroke-width="2" stroke-linecap="round"/>
  <circle cx="130" cy="44" r="5" fill="#D4A017"/>
</svg>`);

// ─── SP-BOONDI · Tuesday Special Boondi ─────────────────────────────────────
data['sp-boondi'] = slot(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <defs>
    <radialGradient id="bgbn" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#FFF8EC"/>
      <stop offset="100%" stop-color="#F0E4C0"/>
    </radialGradient>
    <radialGradient id="bndrop" cx="30%" cy="28%" r="65%">
      <stop offset="0%" stop-color="#F0A838"/>
      <stop offset="55%" stop-color="#D07818"/>
      <stop offset="100%" stop-color="#905000"/>
    </radialGradient>
    <radialGradient id="bnsheen" cx="28%" cy="25%" r="42%">
      <stop offset="0%" stop-color="#F8CC60" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#F8CC60" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="200" height="200" fill="url(#bgbn)"/>

  <!-- Plate -->
  <circle cx="100" cy="108" r="84" fill="#F8F4E8"/>
  <circle cx="100" cy="108" r="84" fill="none" stroke="#E0D0A8" stroke-width="2"/>
  <circle cx="100" cy="106" r="72" fill="none" stroke="#EEE0C0" stroke-width="1" opacity="0.6"/>

  <!-- Syrup pool (amber) -->
  <ellipse cx="100" cy="115" rx="60" ry="45" fill="#D4870A" opacity="0.25"/>

  <!-- Boondi pearls - clustered arrangement -->
  <!-- Center cluster -->
  <circle cx="100" cy="105" r="11" fill="url(#bndrop)"/><circle cx="100" cy="105" r="11" fill="url(#bnsheen)"/>
  <circle cx="82" cy="100" r="10" fill="url(#bndrop)"/><circle cx="82" cy="100" r="10" fill="url(#bnsheen)"/>
  <circle cx="118" cy="100" r="10" fill="url(#bndrop)"/><circle cx="118" cy="100" r="10" fill="url(#bnsheen)"/>
  <circle cx="91" cy="118" r="10" fill="url(#bndrop)"/><circle cx="91" cy="118" r="10" fill="url(#bnsheen)"/>
  <circle cx="110" cy="118" r="10" fill="url(#bndrop)"/><circle cx="110" cy="118" r="10" fill="url(#bnsheen)"/>
  <circle cx="100" cy="130" r="9.5" fill="url(#bndrop)"/><circle cx="100" cy="130" r="9.5" fill="url(#bnsheen)"/>
  <circle cx="100" cy="80" r="9.5" fill="url(#bndrop)"/><circle cx="100" cy="80" r="9.5" fill="url(#bnsheen)"/>
  <!-- Outer ring -->
  <circle cx="68" cy="90" r="9" fill="url(#bndrop)"/><circle cx="68" cy="90" r="9" fill="url(#bnsheen)"/>
  <circle cx="132" cy="90" r="9" fill="url(#bndrop)"/><circle cx="132" cy="90" r="9" fill="url(#bnsheen)"/>
  <circle cx="72" cy="115" r="9" fill="url(#bndrop)"/><circle cx="72" cy="115" r="9" fill="url(#bnsheen)"/>
  <circle cx="128" cy="115" r="9" fill="url(#bndrop)"/><circle cx="128" cy="115" r="9" fill="url(#bnsheen)"/>
  <circle cx="80" cy="136" r="8.5" fill="url(#bndrop)"/><circle cx="80" cy="136" r="8.5" fill="url(#bnsheen)"/>
  <circle cx="120" cy="136" r="8.5" fill="url(#bndrop)"/><circle cx="120" cy="136" r="8.5" fill="url(#bnsheen)"/>
  <circle cx="85" cy="72" r="8.5" fill="url(#bndrop)"/><circle cx="85" cy="72" r="8.5" fill="url(#bnsheen)"/>
  <circle cx="115" cy="72" r="8.5" fill="url(#bndrop)"/><circle cx="115" cy="72" r="8.5" fill="url(#bnsheen)"/>
  <!-- Scattered strays -->
  <circle cx="60" cy="108" r="7" fill="url(#bndrop)"/><circle cx="60" cy="108" r="7" fill="url(#bnsheen)"/>
  <circle cx="140" cy="108" r="7" fill="url(#bndrop)"/><circle cx="140" cy="108" r="7" fill="url(#bnsheen)"/>
  <circle cx="100" cy="148" r="7" fill="url(#bndrop)"/><circle cx="100" cy="148" r="7" fill="url(#bnsheen)"/>

  <!-- Cardamom / saffron strand garnish -->
  <ellipse cx="138" cy="78" rx="5" ry="2" fill="#8B7040" opacity="0.7" transform="rotate(-20,138,78)"/>
  <ellipse cx="62" cy="135" rx="4.5" ry="2" fill="#8B7040" opacity="0.65" transform="rotate(15,62,135)"/>
</svg>`);

// Write the state file
const outPath = path.join(__dirname, '.image-slots.state.json');
fs.writeFileSync(outPath, JSON.stringify(data, null, 2));

const count = Object.keys(data).length;
console.log(`✓ Generated ${count} image slots → .image-slots.state.json`);
Object.keys(data).forEach(id => {
  const url = data[id].u;
  const kbSize = Math.round(Buffer.from(url.replace(/^data:image\/svg\+xml;base64,/, ''), 'base64').length / 1024);
  console.log(`  ${id.padEnd(18)} ${kbSize} KB`);
});
