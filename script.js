function askAI() {
    const input = document.getElementById('userInput').value.trim();
    const responseDiv = document.getElementById('response');
  
    if (!input) {
      responseDiv.textContent = "請先輸入問題喔！";
      return;
    }
  
    const responses = [
      {
        keywords: ["天氣", "氣溫", "氣象"],
        replies: ["今天晴朗 ☀️", "有點陰，但不會下雨 ☁️", "可能會有午後雷陣雨 ⛈️，出門請帶傘！"]
      },
      {
        keywords: ["你是誰", "你叫什麼", "你是什麼"],
        replies: ["我是你的 AI 小幫手！🤖", "我被設計來幫助你解決問題～", "我雖然不是人類，但我很樂意幫你 💡"]
      },
      {
        keywords: ["時間", "幾點", "現在"],
        replies: [() => `現在時間是 ${new Date().toLocaleTimeString()}`]
      },
      {
        keywords: ["再見", "掰掰", "bye"],
        replies: ["掰掰～祝你有美好的一天！🌈", "下次再見囉～", "我會想你的 💕"]
      }
    ];
  
    // 檢查使用者輸入符合哪個回應條件
    let found = false;
    for (const group of responses) {
      for (const keyword of group.keywords) {
        if (input.includes(keyword)) {
          const reply = group.replies[Math.floor(Math.random() * group.replies.length)];
          responseDiv.textContent = typeof reply === "function" ? reply() : reply;
          found = true;
          break;
        }
      }
      if (found) break;
    }
  
    if (!found) {
      // 萬用回應
      const defaultReplies = [
        "這題我還在學習中，換個方式問看看？🤔",
        "我不太懂你在問什麼耶，能說得更清楚嗎？",
        "這問題有點複雜，下次我會努力學會的 📚"
      ];
      responseDiv.textContent = defaultReplies[Math.floor(Math.random() * defaultReplies.length)];
    }
  }