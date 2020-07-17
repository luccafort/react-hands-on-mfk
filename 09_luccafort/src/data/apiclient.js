const articles = [
  {
    id: 1,
    title: "Reactやっていこうな",
    text: `
【宣言的な View】
React は、インタラクティブなユーザインターフェイスの作成にともなう苦痛を取り除きます。アプリケーションの各状態に対応するシンプルな View を設計するだけで、React はデータの変更を検知し、関連するコンポーネントだけを効率的に更新、描画します。
宣言的な View を用いてアプリケーションを構築することで、コードはより見通しが立ちやすく、デバッグのしやすいものになります。

【コンポーネントベース】
自分自身の状態を管理するカプセル化されたコンポーネントをまず作成し、これらを組み合わせることで複雑なユーザインターフェイスを構築します。
コンポーネントのロジックは、Template ではなく JavaScript そのもので書くことができるので、様々なデータをアプリケーション内で簡単に取り回すことができ、かつ DOM に状態を持たせないようにすることができます。

【一度学習すれば、どこでも使える】
React と組み合わせて使用する技術に制限はありません。React を使って新しい機能を追加する際に、既存のソースコードを書き換える必要はありません。
React は Node を使ったサーバー上でもレンダーできますし、React Native を使うことでモバイルアプリケーションの中でも動きます。
    `,
    author: "Bob",
    date: "2020-07-09T02:56:20.773Z",
    good: 14,
  },
  {
    id: 2,
    title: "チュートリアル：React の導入",
    text: `
このチュートリアルを読むにあたって必要な React の事前知識はありません。

【チュートリアルを始める前に】
このチュートリアルでは小さなゲームを作成します。自分はゲームを作りたいのではないから、と飛ばしたくなるかもしれませんが、是非目を通してみてください。このチュートリアルで学ぶ技法はどのような React のアプリにおいても基本的なものであり、マスターすることで React への深い理解が得られます。

[ヒント]
このチュートリアルは実際に手を動かして学びたい人向けに構成されています。コンセプトを順番に学んでいきたい人は一段階ずつ学べるガイドを参照してください。このチュートリアルとガイドは互いに相補的なものです。
このチュートリアルは複数のセクションに分割されています。

チュートリアルの準備：以下のチュートリアルを進めるにあたっての開始地点です。
・概要：コンポーネントや props、state といった基礎概念について学びます。
・ゲームを完成させる：React での開発における非常によくある技法について学びます。
・タイムトラベル機能の追加：React 独自の利点について深い洞察が得られます。
このチュートリアルから価値を得るために全セクションを一度に終わらせる必要はありません。セクション 1 つや 2 つ分でも構いませんので、できるところまで進めましょう。

【これから作るもの】
このチュートリアルでは、インタラクティブな三目並べゲーム (tic-tac-toe) の作り方をお見せします。
最終的な結果をここで確認することができます：最終結果。まだコードが理解できなくても、あるいはよく知らない構文があっても、心配は要りません。このチュートリアルの目的は、React とその構文について学ぶことです。
チュートリアルを進める前に三目並べゲームで遊んでみることをお勧めします。いくつか機能がありますが、ひとつには、盤面の右側に番号付きリストがあることに気づかれるでしょう。このリストにはゲーム内で起きたすべての着手 (move) のリストが表示され、ゲームが進むにつれて更新されていきます。
どんな物か分かったら三目並べゲームを閉じて構いません。もっと小さな雛形から始めましょう。次のステップはゲームの構築ができるようにするための環境のセットアップ作業です。
    `,
    author: "John",
    date: "2020-07-09T08:04:14.123Z",
    good: 23,
  },
  {
    id: 3,
    title: "Getting Started",
    text: `
【React を試す】
React は初めから既存のプロジェクトに徐々に追加していけるようなデザインとなっています。あなたは React をどれだけ使っても問題ありません。触りだけやってみるもよし、シンプルな HTML のページにインタラクティブな機能を追加するのに使うもよし、React をフル活用した複雑なアプリを作成するもよし。どのような目的にしても、このページにあるリンクが役に立つでしょう。

【Web 上で試せるオンラインエディタ】
React をちょっと試してみたい場合、Web 上のコードエディタが使えます。CodePen、CodeSandbox、Glitch や Stackblitz で Hello World のテンプレートを使って試してみましょう。
自前のテキストエディタを使いたい場合は、この HTML ファイルをダウンロード・編集して、ブラウザを使ってからローカルファイルシステムから開くことができます。ランタイムでの遅いコード変換が行われる為、簡単なデモに留めておくことをおすすめします。

【React を Web サイトに追加する】
React は HTML ページにすぐに追加することができます。そのあと徐々に全体に反映させていくか、少数のダイナミックなウィジェットに留めるかはあなたの自由です。

【新規 React アプリの作成】
新しく React のプロジェクトを始めたい場合でも、まずはシンプルな HTML ページに script タグを追加するのがおすすめです。数分でセットアップできます！
アプリが成長するにつれて、より統合されたセットアップを行うことを考慮していきましょう。大きいアプリの場合におすすめの様々な JavaScript を用いたツールチェインが存在します。それぞれわずかな設定、もしくは設定要らずでリッチな React のエコシステムをフル活用できます。詳細はこちら。    
    `,
    author: "John",
    date: "2020-07-10T18:24:30.456Z",
    good: 5,
  },
];

export async function fetchArticle(id) {
  await sleep(2000); // 通信待ちのダミー処理
  return articles.find((article) => article.id === id);
}

export async function fetchArticles() {
  await sleep(2000);
  return articles.map((article) => ({
    id: article.id,
    date: article.date,
    title: article.title,
    good: article.good,
  }));
}

let loggedInUser;

export async function login(id, password) {
  await sleep(2000);

  loggedInUser = {
    id,
    name: "山田 太郎",
  };

  return loggedInUser;
}

export async function fetchMe() {
  await sleep(2000);
  return loggedInUser;
}

export async function logout() {
  await sleep(2000);

  loggedInUser = void 0;
}

export async function incrementGoodForArticle(articleId) {
  const article = await fetchArticle(articleId);
  console.log({ article });
  article.good = article.good + 1;
  console.log({ newGood: article.good });
  return {
    good: article.good,
  };
}

async function sleep(millis) {
  return new Promise((resolve) => setTimeout(resolve, millis));
}
