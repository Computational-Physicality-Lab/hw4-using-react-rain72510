## 姓名
張子泓

## 你 deploy 的網站連結
https://tubular-granita-c7be87.netlify.app/

## 你所實作的加分作業項目，以及如何觸發它
無

## 在前述可任意實作的情況下，你設計的行為，e.g.當使用者離開產品詳細資訊頁面又回來時、當使用者關閉網頁又重開時、當使用者開啟複數網頁時等等
- 當使用者離開產品詳細資訊頁面又回來時: 並不會紀錄先前的瀏覽資訊
- 當使用者關閉網頁又重開時: 購物車紀錄會保持
- 當使用者開啟複數網頁時: 購物車內容會合併計算（複數分頁及複數同種瀏覽器）

## 重要：請討論使用 React 實作與作業一中使用純 html/css/JavaScript 實作有何不同。哪一個比較方便與為什麼？哪一個比較容易理解如何操作與為什麼？哪一個在實作同一個頁面時需要撰寫更多程式碼？
在純 html/css/JavaScrip 實作的時候，當我的 controller 要去改變會顯示出來的 model 時，修改 view 的部份要自己處理，甚至對 DOM 元素操作。在 React 可以用好用的 Hook 們處理。但似乎有很多效能問題要注意。

React 相對起來較為方便，可以不用顧慮那麼多需要手動修改的部份。然而用 Reactstrap 時蠻常碰到網路上的作法在自己的電腦行不通的時候，相對起來用原生 js 操作 DOM 比較不會遇到這些問題。但既然要操作 DOM，實作同一個頁面時，相對的純 html/css/JavaScript 實作就需要更多程式碼，而且使用 React 可以將自製的 component 用 js export 出來，更能達到 code reuse。

## 其他你所實作的網站的有趣之處
雖然可能不算有趣，但在複數頁面時，如果在某個網頁增加東西進購物車，其他頁面會即時修正購物車及購物車數量，可能這本來就該做 XD，但在處理自製事件時花了好久。
