export async function generatePost() {
  const now = new Date();
  return {
    title: `むなしーAI記事 - ${now.toLocaleString()}`,
    body: "これはむなしーによって自動生成された記事です。最新トレンドやAI活用術についてお届けします。"
  };
}