專案規格說明
1. 分為兩個頁面
◆ / - 列表頁：呈現 API response 之各個景點資訊
◆ /:id - 景點資訊頁：呈現景點詳細資訊
◆ 使用者直接以 URL 進入 /:id，response 列表中存在該景點則直接顯示景點資訊頁，不存在則導回列表頁
2. 列表頁景點使用卡片呈現，卡片資訊：一張圖片、景點名稱、景點地址，點擊卡片進入 /:id 景點詳細資訊頁。
3. 景點資訊頁請站在使用者的角度，盡可能呈現 API response 之資訊

加分項目
◆實作 RWD，breakpoint 1080px
◆使用 Redux 做狀態管理