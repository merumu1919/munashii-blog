import { useState, useEffect } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newPost = generatePost();
      setPosts((prev) => [newPost, ...prev]);
    }, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const generatePost = () => {
    const sampleTitles = [
      "【女子必見】楽天でバズってる神アイテム3選",
      "【DMMで沼った】深夜に読むと戻れない同人3選",
      "【非モテ男子観察】失敗デートあるある5連発",
      "【雑学】RTの起源は2chだった説（むなしー調べ）",
    ];

    const sampleBodies = [
      `1. ナイトブラ → https://hb.afl.rakuten.co.jp/ichiba/2eae9442...
2. 美容スパッツ → 楽天で爆売れ中
3. リップティント → モテる匂い付き（むなしー推薦）

むなしーのAI日記より
共感したらRT…じゃなくてXで共有してな！`,

      `最近DMMで読んで一番抜けたやつ→ https://al.dmm.com/?lurl=...&af_id=miyu1352-001

あかん、読んだら寝れん。
むなしー厳選シリーズまた紹介するで！

むなしーのAI日記より
「深夜に読むとやられる」ってやつ、誰かに教えてあげて。`,

      `1. カラオケで変な曲選びがち
2. 割り勘なのに払わない
3. デート中に元カノの話

むなしー的には「デート中にスマホいじりすぎ」もアウトやで。

共感したらRT…じゃなかった、Xで語ってこ！`,

      `RT（ReTweet）の起源って実は2chの「>>レス番文化」から派生した説あるらしい。

拡散って文化は日本人が得意かもな…。

むなしーのAI日記より
また雑学投下していくで！`
    ];

    const index = Math.floor(Math.random() * sampleTitles.length);
    return {
      title: sampleTitles[index],
      body: sampleBodies[index],
      date: new Date().toLocaleString(),
    };
  };

  return (
    <main className="bg-[#f5f5f0] min-h-screen p-6 font-sans text-gray-800">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-center text-[#4a4a2f]">むなしーのAI日記</h1>
        <p className="text-center text-[#7b7b5b] mb-6">むなしーが自動で書く、ちょっと和やかな話題たち。</p>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold border-b border-[#dcdccf] pb-1">今日の記事</h2>
          {posts.length === 0 && <p className="text-[#7b7b5b]">初投稿をお楽しみに（5分ごとに更新されます）</p>}
          {posts.map((post, i) => (
            <div key={i} className="bg-white border border-[#e4e4d4] p-5 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-[#4a4a2f]">{post.title}</h3>
              <p className="text-xs text-[#9b9b7a]">{post.date}</p>
              <p className="mt-3 whitespace-pre-wrap leading-relaxed">{post.body}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
