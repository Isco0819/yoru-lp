import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#0B1220]">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/peaceful-night-spa-atmosphere.jpg"
            alt="Relaxation salon atmosphere"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0B1220]/50" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            頭が軽くなる、45分。
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-balance leading-relaxed">
            仕事帰りに立ち寄れる。大阪・南堀江の静かなヘッドスパ。
          </p>
          <p className="text-base md:text-lg mb-10 text-white/80">
            最終受付22:00｜現金のみ｜当日予約OK
          </p>
          <Button
            id="cta-book"
            size="lg"
            className="bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white px-8 py-6 text-lg"
            asChild
          >
            <a href="#book">今すぐ予約する</a>
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-balance">
            選ばれる3つの理由
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {/* Benefit 1 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#0EA5E9]/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#0EA5E9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                駅から3分、静かな空間
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-[#0B1220]/70">
                四ツ橋駅から徒歩3分。街の喧騒から離れた落ち着いた個室です。
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#0EA5E9]/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#0EA5E9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                22:00まで受付、仕事帰りに
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-[#0B1220]/70">
                最終受付22:00。残業後でも今日の疲れをその日のうちにリセット。
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#0EA5E9]/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#0EA5E9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                無香料も選べる、やさしい施術
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-[#0B1220]/70">
                ココナッツオイルは無香料に変更可。圧も都度調整します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 md:py-32 px-6 bg-[#0B1220]/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 text-balance">
            メニュー
          </h2>
          <p className="text-center text-base md:text-lg mb-16 text-[#0B1220]/70">
            すべて現金払い。ご予約は施術開始60分前まで。
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Menu 1 */}
            <Card className="p-8 border-2 border-[#0B1220]/10 hover:border-[#0EA5E9] transition-colors">
              <h3 className="text-2xl font-bold mb-2">Head 45</h3>
              <p className="text-3xl font-bold text-[#0EA5E9] mb-4">¥4,500</p>
              <p className="text-sm text-[#0B1220]/60 mb-6">45分</p>
              <p className="text-base leading-relaxed mb-8 text-[#0B1220]/70">
                頭・首・肩を中心に、短時間でスッキリ。
              </p>
              <Button
                id="cta-book"
                className="w-full bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white"
                asChild
              >
                <a href="#book">今すぐ予約する</a>
              </Button>
            </Card>

            {/* Menu 2 */}
            <Card className="p-8 border-2 border-[#0EA5E9] shadow-lg">
              <div className="inline-block px-3 py-1 bg-[#0EA5E9] text-white text-xs font-semibold rounded-full mb-4">
                人気
              </div>
              <h3 className="text-2xl font-bold mb-2">Oil 60</h3>
              <p className="text-3xl font-bold text-[#0EA5E9] mb-4">¥6,500</p>
              <p className="text-sm text-[#0B1220]/60 mb-6">60分</p>
              <p className="text-base leading-relaxed mb-8 text-[#0B1220]/70">
                ココナッツオイル（無香料可）で頭皮〜肩をじっくりケア。
              </p>
              <Button
                id="cta-book"
                className="w-full bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white"
                asChild
              >
                <a href="#book">今すぐ予約する</a>
              </Button>
            </Card>

            {/* Menu 3 */}
            <Card className="p-8 border-2 border-[#0B1220]/10 hover:border-[#0EA5E9] transition-colors">
              <h3 className="text-2xl font-bold mb-2">Head + Reflex 90</h3>
              <p className="text-3xl font-bold text-[#0EA5E9] mb-4">¥8,500</p>
              <p className="text-sm text-[#0B1220]/60 mb-6">90分</p>
              <p className="text-base leading-relaxed mb-8 text-[#0B1220]/70">
                ヘッド＋足裏で全身の巡りを整え、今夜の睡眠をサポート。
              </p>
              <Button
                id="cta-book"
                className="w-full bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white"
                asChild
              >
                <a href="#book">今すぐ予約する</a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-balance">
            お客様の声
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <Card className="p-8 border-[#0B1220]/10">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#0EA5E9] fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-base leading-relaxed mb-4 text-[#0B1220]/80">
                「施術後はすっと眠れました。駅近で遅くまで営業しているのも助かります。」
              </p>
              <p className="text-sm text-[#0B1220]/60">30代女性</p>
            </Card>

            {/* Review 2 */}
            <Card className="p-8 border-[#0B1220]/10">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#0EA5E9] fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-base leading-relaxed mb-4 text-[#0B1220]/80">
                「香りが強すぎないのが良い。圧を丁寧に確認してくれて安心。」
              </p>
              <p className="text-sm text-[#0B1220]/60">40代男性</p>
            </Card>

            {/* Review 3 */}
            <Card className="p-8 border-[#0B1220]/10">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#0EA5E9] fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-base leading-relaxed mb-4 text-[#0B1220]/80">
                「旅行最終日に利用。翌日のフライトもすっきり。次も来たい。」
              </p>
              <p className="text-sm text-[#0B1220]/60">20代女性</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Access Section */}
      <section id="access" className="py-20 md:py-32 px-6 bg-[#0B1220]/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-balance">
            アクセス
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">住所</h3>
              <p className="text-base leading-relaxed text-[#0B1220]/70 mb-8">
                〒550-0015<br />
                大阪府大阪市西区南堀江1-XX-XX
              </p>

              <h3 className="text-xl font-bold mb-4">最寄り駅</h3>
              <p className="text-base leading-relaxed text-[#0B1220]/70 mb-8">
                ・四ツ橋駅6番出口 徒歩3分<br />
                ・西大橋駅 徒歩5分
              </p>

              <h3 className="text-xl font-bold mb-4">目印</h3>
              <p className="text-base leading-relaxed text-[#0B1220]/70">
                南堀江公園近く、静かな住宅エリア。
              </p>
            </div>

            <div className="h-[400px] bg-[#0B1220]/10 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 mx-auto mb-4 text-[#0B1220]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <Button
                  variant="outline"
                  className="border-[#0EA5E9] text-[#0EA5E9] hover:bg-[#0EA5E9] hover:text-white"
                  asChild
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Googleマップで見る
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-balance">
            よくある質問
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-[#0B1220]/10 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                当日予約は可能？
              </AccordionTrigger>
              <AccordionContent className="text-base text-[#0B1220]/70 leading-relaxed">
                施術開始の60分前まで可能です。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-[#0B1220]/10 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                支払い方法は？
              </AccordionTrigger>
              <AccordionContent className="text-base text-[#0B1220]/70 leading-relaxed">
                現金のみです。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-[#0B1220]/10 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                香りが苦手でも大丈夫？
              </AccordionTrigger>
              <AccordionContent className="text-base text-[#0B1220]/70 leading-relaxed">
                無香料オイルに変更できます。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-[#0B1220]/10 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                服装は？
              </AccordionTrigger>
              <AccordionContent className="text-base text-[#0B1220]/70 leading-relaxed">
                普段着でOK。ガウンを用意しています。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-[#0B1220]/10 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                キャンセルは？
              </AccordionTrigger>
              <AccordionContent className="text-base text-[#0B1220]/70 leading-relaxed">
                前日まで無料。当日はご相談ください。
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Booking Section */}
      <section id="book" className="py-20 md:py-32 px-6 bg-[#0B1220]/5">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 text-balance">
            ご予約
          </h2>
          <p className="text-center text-base md:text-lg mb-12 text-[#0B1220]/70">
            フォームに入力して送信してください。確認メールをお送りします。
          </p>
          
          {/* Booking Form */}
          <Card className="p-8 md:p-12 border-[#0B1220]/10">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  お名前 <span className="text-[#0EA5E9]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-[#0B1220]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  メールアドレス <span className="text-[#0EA5E9]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-[#0B1220]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                  電話番号 <span className="text-[#0EA5E9]">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-[#0B1220]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]"
                  required
                />
              </div>

              <div>
                <label htmlFor="menu" className="block text-sm font-semibold mb-2">
                  メニュー <span className="text-[#0EA5E9]">*</span>
                </label>
                <select
                  id="menu"
                  className="w-full px-4 py-3 border border-[#0B1220]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]"
                  required
                >
                  <option value="">選択してください</option>
                  <option value="head45">Head 45（¥4,500 / 45分）</option>
                  <option value="oil60">Oil 60（¥6,500 / 60分）</option>
                  <option value="headreflex90">Head + Reflex 90（¥8,500 / 90分）</option>
                </select>
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-semibold mb-2">
                  希望日時 <span className="text-[#0EA5E9]">*</span>
                </label>
                <input
                  type="datetime-local"
                  id="date"
                  className="w-full px-4 py-3 border border-[#0B1220]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  備考
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-[#0B1220]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]"
                  placeholder="無香料希望、その他ご要望など"
                />
              </div>

              <div className="bg-[#0EA5E9]/10 p-4 rounded-lg">
                <p className="text-sm text-[#0B1220]/70 leading-relaxed">
                  <strong>注意事項：</strong><br />
                  ・施術60分前まで受付<br />
                  ・現金のみ<br />
                  ・最終受付22:00<br />
                  ・メールが届かない場合は迷惑フォルダ確認
                </p>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white py-6 text-lg"
              >
                予約を送信する
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 px-6 bg-[#0B1220] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            今夜の回復、ここから。
          </h2>
          <p className="text-lg md:text-xl mb-10 leading-relaxed text-white/80">
            仕事帰りに立ち寄れる静かなヘッドスパ。最終受付22:00。
          </p>
          <Button
            id="cta-book"
            size="lg"
            className="bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white px-8 py-6 text-lg"
            asChild
          >
            <a href="#book">今すぐ予約する</a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[#0B1220]/10">
        <div className="max-w-6xl mx-auto text-center text-sm text-[#0B1220]/60">
          <p>&copy; 2025 南堀江リラクゼーションサロン. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
