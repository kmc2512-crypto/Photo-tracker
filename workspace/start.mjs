try {
  await import('./integration.mjs');
} catch (error) {
  const status = document.querySelector('#todo-workspace-status');
  status.textContent = '新画面を読み込めませんでした。従来リスト・ガントをご利用ください。保存データは保持しています。';
  status.setAttribute('role', 'alert');
  document.querySelector('[data-todo-mode="legacy"]').click();
  console.error('Todo workspace:', error);
}
