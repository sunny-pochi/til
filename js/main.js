'use strict'

{

const open = document.getElementById('open-but');
// マスク部分と送信ボタンで閉じる設定追加
const close = document.getElementById('send-but');
const modal = document.getElementById('modal');
const mask = document.getElementById('mask');

open.addEventListener('click', () => {
  modal.classList.remove('hidden');
  mask.classList.remove('hidden');
});
// 送信ボタンで閉じる
close.addEventListener('click', () => {
  modal.classList.add('hidden');
  mask.classList.add('hidden');
});
// マスク部分で閉じる
mask.addEventListener('click', () => {
  modal.classList.add('hidden');
  mask.classList.add('hidden');
});

}

