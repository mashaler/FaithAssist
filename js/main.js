// FaithAssist - Complete JavaScript
// ==========================================

// Toast notification
function showToast(message) {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
  }
  
  // ========== BIBLE VERSE DATABASE ==========
  const verseLibrary = {
    anxiety: [
      { ref: "Philippians 4:6-7", text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus." },
      { ref: "1 Peter 5:7", text: "Cast all your anxiety on him because he cares for you." },
      { ref: "Matthew 6:34", text: "Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own." }
    ],
    anger: [
      { ref: "Ephesians 4:26-27", text: "In your anger do not sin. Do not let the sun go down while you are still angry, and do not give the devil a foothold." },
      { ref: "Proverbs 15:1", text: "A gentle answer turns away wrath, but a harsh word stirs up anger." },
      { ref: "James 1:19-20", text: "Everyone should be quick to listen, slow to speak and slow to become angry." }
    ],
    finances: [
      { ref: "Philippians 4:19", text: "And my God will meet all your needs according to the riches of his glory in Christ Jesus." },
      { ref: "Matthew 6:31-33", text: "But seek first his kingdom and his righteousness, and all these things will be given to you as well." }
    ],
    relationships: [
      { ref: "Colossians 3:13-14", text: "Bear with each other and forgive one another... And over all these virtues put on love." },
      { ref: "Proverbs 17:17", text: "A friend loves at all times." }
    ],
    fear: [
      { ref: "Isaiah 41:10", text: "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you." }
    ],
    loneliness: [
      { ref: "Deuteronomy 31:6", text: "Be strong and courageous. Do not be afraid... for the Lord your God goes with you; he will never leave you nor forsake you." }
    ]
  };
  
  function getVerses(problem) {
    const lower = problem.toLowerCase();
    for (let [key, verses] of Object.entries(verseLibrary)) {
      if (lower.includes(key)) return verses.slice(0, 3);
    }
    return [
      { ref: "Romans 8:28", text: "And we know that in all things God works for the good of those who love him." },
      { ref: "Jeremiah 29:11", text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future." }
    ];
  }
  
  function getPrayer(problem) {
    const lower = problem.toLowerCase();
    if (lower.includes('anxiety')) return "Lord, I release my worries into Your hands. Replace my fear with Your perfect peace. Help me trust You with tomorrow. Amen.";
    if (lower.includes('anger')) return "Father, calm my heart when anger rises. Teach me to respond with grace and self-control. Amen.";
    if (lower.includes('finances')) return "God, You are my provider. Help me manage what You've given with wisdom. Ease my financial stress. Amen.";
    if (lower.includes('relationship')) return "Jesus, guide my relationships. Help me love unconditionally and forgive quickly. Amen.";
    return "Heavenly Father, be near in this moment of need. Grant clarity, strength, and hope. Guide me according to Your Word. Amen.";
  }
  
  // ========== DAILY DEVOTIONAL ==========
  const devotions = [
    { verse: "Psalm 118:24", text: "This is the day the Lord has made; let us rejoice and be glad in it.", message: "Every morning is a fresh gift from God. Even when life feels heavy, choose to see one small reason to rejoice today.", prayer: "Lord, thank You for this new day. Open my eyes to see Your hand at work. Amen." },
    { verse: "Proverbs 3:5-6", text: "Trust in the Lord with all your heart and lean not on your own understanding.", message: "You don't need to have all the answers. Trusting God means moving forward even when the path seems unclear.", prayer: "Father, I surrender my plans to You. Lead my steps today. Amen." },
    { verse: "Jeremiah 29:11", text: "'For I know the plans I have for you,' declares the Lord, 'plans to prosper you and not to harm you, plans to give you hope and a future.'", message: "Your current struggle is not the final chapter. God is working behind the scenes, weaving hope into your story.", prayer: "God, remind me that You have a good plan for my life. Give me hope for the future. Amen." }
  ];
  let devotionIndex = 0;
  
  function updateDevotional() {
    const d = devotions[devotionIndex % devotions.length];
    document.getElementById('dailyVerse').innerHTML = `📖 ${d.verse}: "${d.text}"`;
    document.getElementById('dailyMessage').innerHTML = `<strong>💡 Reflection:</strong> ${d.message}`;
    document.getElementById('dailyPrayer').innerHTML = `🙏 ${d.prayer}`;
    devotionIndex++;
  }
  
  // ========== BIBLE Q&A ==========
  function getBibleAnswer(question) {
    const q = question.toLowerCase();
    if (q.includes('forgive')) return { answer: "The Bible calls us to forgive as God forgave us. Jesus says forgive not seven times but seventy-seven times (Matthew 18:21-22).", references: "Matthew 6:14-15, Colossians 3:13" };
    if (q.includes('purpose')) return { answer: "Your purpose is to love God and love others (Matthew 22:37-39). God created you for good works (Ephesians 2:10).", references: "Jeremiah 29:11" };
    if (q.includes('suffering')) return { answer: "Suffering is part of our broken world, but God promises to be near the brokenhearted (Psalm 34:18).", references: "Romans 5:3-5" };
    if (q.includes('pray')) return { answer: "Prayer is simply talking to God. Jesus taught us the Lord's Prayer (Matthew 6:9-13).", references: "Philippians 4:6" };
    if (q.includes('marriage')) return { answer: "Marriage is a covenant reflecting Christ's love for the church (Ephesians 5:25). Love, respect, and selflessness strengthen the bond.", references: "Ephesians 5:33" };
    return { answer: "God's Word is rich with wisdom for every area of life. Consider reading the Psalms for comfort or Proverbs for practical guidance.", references: "James 1:5 - 'If any of you lacks wisdom, you should ask God.'" };
  }
  
  // ========== PRAYER GENERATOR ==========
  const categoryPrayers = {
    healing: "Heavenly Father, I ask for Your healing touch. Restore my body, mind, and spirit. Give doctors wisdom and grant me patience during recovery. In Jesus' name, Amen.",
    stress: "Lord, I feel overwhelmed. Calm the storm within me. Help me to rest in Your presence and release every burden at Your feet. Grant me peace that surpasses understanding. Amen.",
    finances: "Provider God, I trust You with my financial needs. Open doors of opportunity, give me wisdom to manage, and remove the spirit of fear. Amen.",
    relationships: "Father, bless my relationships with grace and honesty. Help me to listen before speaking, to forgive as You forgive, and to love without conditions. Amen.",
    guidance: "Lord, I need direction. Illuminate my path and close wrong doors. Give me discernment and courage to follow where You lead. Amen."
  };
  
  // ========== MARRIAGE TOOL (One at a time) ==========
  const marriageQuestions = [
    { id: "q1", text: "How often do you feel truly heard by your partner?", options: ["Rarely", "Sometimes", "Often", "Almost always"] },
    { id: "q2", text: "When conflicts arise, how do you typically respond?", options: ["Avoid", "Get defensive", "Listen calmly", "Seek solutions together"] },
    { id: "q3", text: "Do you trust your partner with your deepest feelings?", options: ["Not really", "Somewhat", "Mostly yes", "Completely"] },
    { id: "q4", text: "How comfortable are you expressing appreciation?", options: ["Uncomfortable", "Occasionally", "Regularly", "Very comfortable"] },
    { id: "q5", text: "How would you rate your emotional intimacy?", options: ["Struggling", "Needs work", "Good", "Very strong"] },
    { id: "q6", text: "Do you feel respected in decision-making?", options: ["No", "Sometimes", "Usually", "Absolutely"] },
    { id: "q7", text: "How often do you pray or reflect together?", options: ["Never", "Rarely", "Sometimes", "Often"] }
  ];
  
  let currentMarriageIndex = 0;
  let marriageAnswers = {};
  
  function renderMarriageQuestion() {
    const q = marriageQuestions[currentMarriageIndex];
    const saved = marriageAnswers[q.id] || '';
    let html = `<div class="marriage-question"><strong>${currentMarriageIndex + 1}. ${q.text}</strong><div class="radio-group">`;
    q.options.forEach(opt => {
      html += `<label><input type="radio" name="marriageQ" value="${opt}" ${saved === opt ? 'checked' : ''}> ${opt}</label>`;
    });
    html += `</div></div>`;
    document.getElementById('marriageQuestionContainer').innerHTML = html;
    
    document.querySelectorAll('input[name="marriageQ"]').forEach(radio => {
      radio.addEventListener('change', (e) => {
        marriageAnswers[q.id] = e.target.value;
        updateMarriageProgress();
      });
    });
    updateMarriageButtons();
  }
  
  function updateMarriageProgress() {
    const answered = Object.keys(marriageAnswers).length;
    const percent = (answered / marriageQuestions.length) * 100;
    document.getElementById('marriageProgress').style.width = percent + '%';
    document.getElementById('marriageCounter').textContent = `Question ${currentMarriageIndex + 1} of ${marriageQuestions.length}`;
  }
  
  function updateMarriageButtons() {
    const prevBtn = document.getElementById('prevQuestionBtn');
    const nextBtn = document.getElementById('nextQuestionBtn');
    const submitBtn = document.getElementById('submitMarriageBtn');
    
    prevBtn.style.display = currentMarriageIndex === 0 ? 'none' : 'inline-flex';
    
    if (currentMarriageIndex === marriageQuestions.length - 1) {
      nextBtn.style.display = 'none';
      submitBtn.style.display = 'inline-flex';
    } else {
      nextBtn.style.display = 'inline-flex';
      submitBtn.style.display = 'none';
    }
  }
  
  function nextMarriageQuestion() {
    const currentQ = marriageQuestions[currentMarriageIndex];
    if (!marriageAnswers[currentQ.id]) {
      showToast('Please select an answer before continuing');
      return;
    }
    if (currentMarriageIndex < marriageQuestions.length - 1) {
      currentMarriageIndex++;
      renderMarriageQuestion();
    }
  }
  
  function prevMarriageQuestion() {
    if (currentMarriageIndex > 0) {
      currentMarriageIndex--;
      renderMarriageQuestion();
    }
  }
  
  function showMarriageResults() {
    if (Object.keys(marriageAnswers).length !== marriageQuestions.length) {
      showToast(`Please answer all ${marriageQuestions.length} questions`);
      return;
    }
    const resultDiv = document.getElementById('marriageResult');
    resultDiv.innerHTML = `
      <div class="result-box">
        <strong>💬 Communication Insight:</strong><br>Healthy communication starts with listening. Try a 10-minute daily check-in.<br><br>
        <strong>🔒 Trust Insight:</strong><br>Trust grows through consistency. Keep small promises and be transparent.<br><br>
        <strong>🌱 Growth Suggestions:</strong><br>Pray together for 2 minutes daily. It's the single most powerful habit for couples.<br><br>
        <em>"Be completely humble and gentle; be patient, bearing with one another in love." — Ephesians 4:2</em>
      </div>
    `;
    resultDiv.style.display = 'block';
    resultDiv.scrollIntoView({ behavior: 'smooth' });
  }
  
  // ========== RANDOM VERSES ==========
  const randomVerses = [
    "Philippians 4:13 - I can do all things through Christ who strengthens me.",
    "Joshua 1:9 - Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.",
    "Romans 8:28 - And we know that in all things God works for the good of those who love him.",
    "Psalm 23:4 - Even though I walk through the darkest valley, I will fear no evil, for you are with me.",
    "Jeremiah 29:11 - For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future."
  ];
  
  function updateRandomVerse() {
    const idx = Math.floor(Math.random() * randomVerses.length);
    document.getElementById('randomVerse').innerHTML = `“${randomVerses[idx]}”`;
  }
  
  // ========== TOOL PANELS ==========
  const panels = {
    devotional: document.getElementById('devotionalPanel'),
    qa: document.getElementById('qaPanel'),
    prayer: document.getElementById('prayerPanel'),
    marriage: document.getElementById('marriagePanel'),
    verse: document.getElementById('versePanel')
  };
  
  function hideAllPanels() {
    Object.values(panels).forEach(panel => {
      if (panel) panel.classList.remove('active');
    });
  }
  
  function showPanel(panelId) {
    hideAllPanels();
    if (panels[panelId]) {
      panels[panelId].classList.add('active');
      panels[panelId].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  
  // ========== INITIALIZE EVERYTHING ==========
  document.addEventListener('DOMContentLoaded', () => {
    // Initialize devotional
    updateDevotional();
    
    // Initialize marriage tool
    renderMarriageQuestion();
    
    // Initialize random verse
    updateRandomVerse();
    
    // ===== EVENT LISTENERS =====
    
    // Search
    document.getElementById('searchBtn')?.addEventListener('click', () => {
      let problem = document.getElementById('problemInput').value.trim();
      if (!problem) problem = "guidance";
      const verses = getVerses(problem);
      const prayer = getPrayer(problem);
      const versesHtml = verses.map(v => `<div class="verse">📖 ${v.ref}: “${v.text}”</div>`).join('');
      const resultDiv = document.getElementById('searchResult');
      resultDiv.innerHTML = `<div class="result-box">${versesHtml}<div class="prayer-box">🕊️ ${prayer}</div></div>`;
      resultDiv.style.display = 'block';
    });
    
    // Tool icons
    document.querySelectorAll('.tool-icon').forEach(icon => {
      icon.addEventListener('click', () => {
        const tool = icon.getAttribute('data-tool');
        showPanel(tool);
      });
    });
    
    // Devotional
    document.getElementById('refreshDevotional')?.addEventListener('click', updateDevotional);
    document.getElementById('shareDevotionalBtn')?.addEventListener('click', () => {
      const verse = document.getElementById('dailyVerse')?.innerText || '';
      const message = document.getElementById('dailyMessage')?.innerText || '';
      window.open(`https://wa.me/?text=${encodeURIComponent(verse + '\n\n' + message + '\n\n— From FaithAssist')}`, '_blank');
    });
    
    // Bible Q&A
    document.getElementById('askBtn')?.addEventListener('click', () => {
      const q = document.getElementById('bibleQuestion').value.trim();
      if (!q) { showToast('Please enter a question'); return; }
      const { answer, references } = getBibleAnswer(q);
      const resultDiv = document.getElementById('qaResult');
      resultDiv.innerHTML = `<div class="result-box">💬 ${answer}<br><br>📖 ${references}</div>`;
      resultDiv.style.display = 'block';
    });
    
    // Prayer Generator
    document.getElementById('generatePrayerBtn')?.addEventListener('click', () => {
      const cat = document.getElementById('prayerCategory').value;
      const prayer = categoryPrayers[cat];
      const outputDiv = document.getElementById('prayerOutput');
      outputDiv.innerHTML = `<div class="result-box">🙏 ${prayer}</div>`;
      outputDiv.style.display = 'block';
    });
    
    // Marriage navigation
    document.getElementById('nextQuestionBtn')?.addEventListener('click', nextMarriageQuestion);
    document.getElementById('prevQuestionBtn')?.addEventListener('click', prevMarriageQuestion);
    document.getElementById('submitMarriageBtn')?.addEventListener('click', showMarriageResults);
    
    // Verse of the Day
    document.getElementById('newVerseBtn')?.addEventListener('click', updateRandomVerse);
    document.getElementById('shareVerseBtn')?.addEventListener('click', () => {
      const verse = document.getElementById('randomVerse')?.innerText || '';
      window.open(`https://wa.me/?text=${encodeURIComponent(verse + '\n\n— From FaithAssist')}`, '_blank');
    });
    
    // Mobile menu
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    if (mobileBtn) {
      mobileBtn.addEventListener('click', () => navMenu.classList.toggle('active'));
    }
  });