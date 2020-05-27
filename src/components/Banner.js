import React from 'react'

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h1>Kenya Hondoh - 本藤 拳也</h1>
            </header>
            <div className="content">
                <p>
                    <h3>Who are you?</h3>
                    こんにちは。首都圏でエンジニアをしている若者です。<br />
                    業務の傍ら，クラウド・DevOps・組織文化などの怪しいことを学習している。<br /><br />

                    {/* <a href="https://www.16personalities.com/ja/%E6%80%A7%E6%A0%BC%E8%A8%BA%E6%96%AD%E3%83%86%E3%82%B9%E3%83%88">16 Pesonality（性格診断）</a> の結果は <b>ENTJ</b>。<br />
                    起業家気質・「感情よりも理屈」だそうですが，1年働いて「人は気持ちで動くから気持ちも大事だよなぁ」になっています 笑。<br /><br /> */}

                    大学院では<a href="https://www.ipsj-kyushu.jp/page/ronbun/hinokuni/1008/upload/2018-1-0032_201902141506.pdf">画像認識の研究</a>をしていました。<br />
                    どれも手広く浅いですが，趣味・興味関心は多岐にわたります 笑<br /><br />
                    <h3>趣味・興味関心</h3>
                    <ul>
                        <li>何かつくること</li>
                        <li>美術観賞，ドローイング</li>
                        <li>ジャズを聴くこと，演奏</li>
                        <li>FPS。CoD，Splatoon などのシューティングゲーム</li>
                        <li>DX。ソフトウェアを活用したビジネス，組織論</li>
                    </ul>
                </p>
                <ul className="actions">
                    <li><a href="#one" className="button next scrolly">こまかいプロフィールをみる</a></li>
                </ul>
            </div>
        </div>
    </section>
)

export default Banner
