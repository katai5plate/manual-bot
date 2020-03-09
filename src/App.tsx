import React from "react";
import Balloon from "./Balloon";

const FC: React.FC = props => (
  <div>
    <Balloon key={1} direction="left">
      {[
        "サービスのご利用ありがとうございます。\nこちらは株式会社〇〇です。",
        "ご用件をご選択ください。"
      ]}
    </Balloon>
    <Balloon key={2} direction="right" isButtons={true}>
      {[
        "製品に関するお問い合わせ",
        "営業部へのお問い合わせ",
        "経理部へのお問い合わせ"
      ]}
    </Balloon>
    <Balloon key={3} direction="right">
      {["選択: 営業部へのお問い合わせ"]}
    </Balloon>
    <Balloon key={4} direction="left">
      {[
        "ご返答ありがとうございます。",
        "営業部へのお問い合わせは、\n以下の電話番号にお問い合わせください。",
        "000-123-4567"
      ]}
    </Balloon>
  </div>
);

export default FC;
