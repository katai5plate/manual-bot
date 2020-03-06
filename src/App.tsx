import React from "react";
import Balloon from "./Balloon";

const FC: React.FC = props => (
  <div>
    <Balloon direction="left">
      {[
        "サービスのご利用ありがとうございます。\nこちらは株式会社〇〇です。",
        "ご用件をご選択ください。"
      ]}
    </Balloon>
    <Balloon direction="right">
      {["製品に関するお問い合わせ", "営業部にご用", "経理部にご用"]}
    </Balloon>
  </div>
);

export default FC;
