# ChatGPT RTL Math Fix

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

**[English]** | [עברית](#hebrew)

A lightweight Chrome Extension that fixes the rendering of mathematical expressions (LaTeX) in ChatGPT when using Right-to-Left (RTL) languages like Hebrew or Arabic.

### 📸 Before & After
*(Put a screenshot here! It is super important. Show the broken math vs fixed math)*

### 🚀 Features
*   **Automatic Fix:** Automatically detects and aligns math blocks to LTR within RTL responses.
*   **Seamless:** Runs in the background, no configuration needed.
*   **Lightweight:** Pure CSS/JS logic, no external dependencies.

### 📦 Installation (Developer Mode)
Since this is not in the Chrome Store yet, you need to load it manually:
1.  **Download:** Click on `Code` -> `Download ZIP` and extract the folder.
2.  Open your browser's extensions page:
    *   **Chrome:** `chrome://extensions/`
    *   **Edge:** `edge://extensions/`
3.  Enable **Developer mode** (toggle in the top-right corner).
4.  Click **Load unpacked**.
5.  Select the folder you extracted (the one containing `manifest.json`).
6.  Refresh ChatGPT.

---

<a name="hebrew"></a>
## 🇮🇱 עברית

תוסף דפדפן המתקן את כיוון התצוגה של ביטויים מתמטיים ב-ChatGPT בעת התכתבות בעברית (או שפות RTL אחרות).
כיום, כאשר ChatGPT עונה בעברית, נוסחאות מתמטיות מוצגות לעיתים קרובות הפוך. התוסף הזה פותר את הבעיה באופן אוטומטי.

### תכונות מרכזיות
*   **תיקון כיווניות:** מאלץ יישור לשמאל (LTR) עבור קוביות מתמטיות (MathJax/KaTeX) גם בתוך משפטים בעברית.
*   **פועל ברקע:** נטען אוטומטית בכל שיחה עם ChatGPT ללא צורך בהגדרות.
*   **קוד פתוח:** הקוד שקוף וניתן לשינוי.

### הוראות התקנה
מכיוון שהתוסף לא בחנות הרשמית, יש לטעון אותו ידנית:

1.  הורידו את הקוד מהעמוד הזה (כפתור ירוק **Code** -> ואז **Download ZIP**) וחלצו את התיקייה למחשב.
2.  פתחו את עמוד התוספים בדפדפן:
    *   ב-Chrome גשו ל: `chrome://extensions/`
    *   ב-Edge גשו ל: `edge://extensions/`
3.  הפעילו את **Developer mode** (מצב מפתח) באמצעות המתג בצד ימין/שמאל למעלה.
4.  לחצו על הכפתור **Load unpacked** (טען תוסף לא ארוז).
5.  בחרו את התיקייה שחילצתם (זו שמכילה את הקובץ `manifest.json`).
6.  רעננו את העמוד של ChatGPT.

### פתרון תקלות
*   אם התיקון לא מופיע מיד, נסו לרענן את העמוד (`F5`).
*   נתקלתם בבאג? מוזמנים לפתוח Issue או לשלוח Pull Request.

### רישיון (License)
פרויקט זה משוחרר תחת רישיון **MIT**. אתם מוזמנים להשתמש בו, לשנות אותו ולהפיץ אותו חופשי.