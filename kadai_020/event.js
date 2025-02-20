// HTML要素を取得する
const button = document.getElementById('btn');

const text = document.getElementById('text');
// クリックイベントを設定する
button.addEventListener('click', () => {
  // ボタンがクリックされた時の処理を記述
  text.textContent = 'ボタンがクリックされました';
});