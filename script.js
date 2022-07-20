(function() {

// Created the favicon on https://favicon.io/favicon-generator/
let faviconLink = document.createElement('link');
faviconLink.href = 'images/favicon.ico';
faviconLink.rel = 'icon';
faviconLink.type = 'image/x-icon';
document.head.appendChild(faviconLink);

const textInputArea = document.getElementById('textInputArea');
const textDisplay = document.getElementById('textDisplay');

textInputArea.addEventListener('input', function(e){
  let text = textInputArea.value;
  text = text.replace(/([\u{3041}-\u{3096}]+)/gu, '<span class="hiragana">$1</span>');
  text = text.replace(/([\u{30A0}-\u{30FF}]+)/gu, '<span class="katakana">$1</span>');
  text = text.replace(/([\u{3400}-\u{4DB5}\u{4E00}-\u{9FCB}\u{F900}-\u{FA6A}\u{2E80}-\u{2FD5}]+)/gu, '<span class="kanji">$1</span>');
  // Deleting the following characters: "
  text = text.replace(/([\)\]｝〕〉》」』】〙〗〟'｠»ヽヾーァィゥェォッャュョヮヵヶぁぃぅぇぉっゃゅょゎゕゖㇰㇱㇲㇳㇴㇵㇶㇷㇸㇹㇺㇻㇼㇽㇾㇿ々〻‐゠–〜？!‼⁇⁈⁉・、:;,。\.]+)/g, '<span class="start">$1</span>');
  text = text.replace(/([\(\[｛〔〈《「『【〘〖〝'｟«]+)/g, '<span class="end">$1</span>');
  textDisplay.innerHTML = text;
});

})();