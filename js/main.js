// FaithAssist Main JavaScript
// Complete functionality for all tools

// Verse Library (expanded for SEO)
const verseLibrary = {
    anxiety: [
      { ref: "Philippians 4:6-7", text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus." },
      { ref: "1 Peter 5:7", text: "Cast all your anxiety on him because he cares for you." },
      { ref: "Matthew 6:34", text: "Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own." },
      { ref: "Isaiah 41:10", text: "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand." }
    ],
    anger: [
      { ref: "Ephesians 4:26-27", text: "In your anger do not sin. Do not let the sun go down while you are still angry, and do not give the devil a foothold." },
      { ref: "Proverbs 15:1", text: "A gentle answer turns away wrath, but a harsh word stirs up anger." },
      { ref: "James 1:19-20", text: "My dear brothers and sisters, take note of this: Everyone should be quick to listen, slow to speak and slow to become angry, because human anger does not produce the righteousness that God desires." }
    ],
    finances: [
      { ref: "Philippians 4:19", text: "And my God will meet all your needs according to the riches of his glory in Christ Jesus." },
      { ref: "Malachi 3:10", text: "Bring the whole tithe into the storehouse... and see if I will not throw open the floodgates of heaven and pour out so much blessing that there will not be room enough to store it." },
      { ref: "Matthew 6:31-33", text: "But seek first his kingdom and his righteousness, and all these things will be given to you as well." }
    ],
    relationships: [
      { ref: "Colossians 3:13-14", text: "Bear with each other and forgive one another if any of you has a grievance against someone. Forgive as the Lord forgave you. And over all these virtues put on love, which binds them all together in perfect unity." },
      { ref: "Proverbs 17:17", text: "A friend loves at all times, and a brother is born for a time of adversity." },
      { ref: "1 Corinthians 13:4-7", text: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud." }
    ],
    grief: [
      { ref: "Psalm 34:18", text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit." },
      { ref: "Matthew 5:4", text: "Blessed are those who mourn, for they will be comforted." }
    ]
  };
  
  function getVerses(problem) {
    const lower = problem.toLowerCase();
    for (let [key, verses] of Object.entries(verseLibrary)) {
      if (lower.includes(key)) return verses.slice(0, 3);
    }
    return [
      { ref: "Romans 8:28", text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose." },
      { ref: "Jeremiah 29:11", text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future." }
    ];
  }
  
  function getPrayer(problem) {
    const lower = problem.toLowerCase();
    const prayers = {
      anxiety: "Lord, I release my worries into Your hands. Replace my fear with Your perfect peace. Help me trust You with tomorrow. Amen.",
      anger: "Father, calm my heart when anger rises. Teach me to respond with grace and self-control. Heal any hurt beneath my frustration. Amen.",
      finances: "God, You are my provider. Help me manage what You've given with wisdom. Ease my financial stress and open doors of provision. Amen.",
      relationships: "Jesus, guide my relationships. Help me love unconditionally, forgive quickly, and communicate kindly. Amen."
    };
    for (let [key, prayer] of Object.entries(prayers)) {
      if (lower.includes(key)) return prayer;
    }
    return "Heavenly Father, be near in this moment of need. Grant clarity, strength, and hope. Guide me according to Your Word. Amen.";
  }
  
  // Daily Devotional Data
  const devotions = [
    { verse: "Psalm 118:24", text: "This is the day the Lord has made; let us rejoice and be glad in it.", message: "Every morning is a fresh gift from God. Even when life feels heavy, choosing to see one small reason to rejoice can shift your entire perspective.", prayer: "Lord, thank You for this new day. Open my eyes to see Your hand at work. Amen." },
    { verse: "Proverbs 3:5-6", text: "Trust in the Lord with all your heart and lean not on your own understanding.", message: "You don't need to have all the answers. Trusting God means moving forward even when the path seems unclear.", prayer: "Father, I surrender my plans to You. Lead my steps today. Amen." },
    { verse: "Jeremiah 29:11", text: "'For I know the plans I have for you,' declares the Lord, 'plans to prosper you and not to harm you, plans to give you hope and a future.'", message: "Your current struggle is not the final chapter. God is working behind the scenes, weaving hope into your story.", prayer: "God, remind me that You have a good plan for my life. Give me hope for the future. Amen." }
  ];
  let devotionIndex = 0;
  
  // Bible Q&A
  function getBibleAnswer(question) {
    const q = question.toLowerCase();
    if (q.includes('forgive')) return { answer: "The Bible calls us to forgive as God forgave us. Jesus says forgive not seven times but seventy-seven times (Matthew 18:21-22). Forgiveness frees your heart.", references: "Matthew 6:14-15, Colossians 3:13, Ephesians 4:32" };
    if (q.includes('purpose')) return { answer: "Your purpose is to love God and love others (Matthew 22:37-39). God created you for good works (Ephesians 2:10). Seek Him daily and He will guide your path.", references: "Jeremiah 29:11, Romans 8:28" };
    if (q.includes('suffering')) return { answer: "Suffering is part of our broken world, but God promises to be near the brokenhearted (Psalm 34:18). He can bring good out of hardship.", references: "Romans 5:3-5, 2 Corinthians 1:3-4" };
    if (q.includes('pray')) return { answer: "Prayer is simply talking to God. Jesus taught us the Lord's Prayer (Matthew 6:9-13). Pray honestly, with thanksgiving, and listen for His peace.", references: "Philippians 4:6, 1 Thessalonians 5:17" };
    if (q.includes('marriage')) return { answer: "Marriage is a covenant reflecting Christ's love for the church (Ephesians 5:25). Love, respect, and selflessness strengthen the bond.", references: "Ephesians 5:33, 1 Peter 3:7" };
    return { answer: "God's Word is rich with wisdom for every area of life. Consider reading the Psalms for comfort or Proverbs for practical guidance.", references: "James 1:5 - 'If any of you lacks wisdom, you should ask God.'" };
  }
  
  // Prayer Categories
  const categoryPrayers = {
    healing: "Heavenly Father, I ask for Your healing touch. Restore my body, mind, and spirit. Give doctors wisdom and grant me patience during recovery. In Jesus' name, Amen.",
    stress: "Lord, I feel overwhelmed. Calm the storm within me. Help me to rest in Your presence and release every burden at Your feet. Grant me peace that surpasses understanding. Amen.",
    finances: "Provider God, I trust You with my financial needs. Open doors of opportunity, give me wisdom to manage, and remove the spirit of fear. Provide for my family. Amen.",
    relationships: "Father, bless my relationships with grace and honesty. Help me to listen before speaking, to forgive as You forgive, and to love without conditions. Amen.",
    guidance: "Lord, I need direction. Illuminate my path and close wrong doors. Give me discernment and courage to follow where You lead. Amen.",
    grief: "Lord, You are close to the brokenhearted. Hold me in my pain and remind me that You weep with me. Give me hope that joy comes in the morning. Amen."
  };
  
  // Marriage Questions
  const marriageQuestions = [
    { id: "q1", text: "How often do you feel truly heard by your partner?", options: ["Rarely", "Sometimes", "Often", "Almost always"] },
    { id: "q2", text: "When conflicts arise, how do you typically respond?", options: ["Avoid/Withdraw", "Get defensive", "Listen calmly", "Seek solutions together"] },
    { id: "q3", text: "Do you trust your partner with your deepest feelings?", options: ["Not really", "Somewhat", "Mostly yes", "Completely"] },
    { id: "q4", text: "How comfortable are you expressing appreciation?", options: ["Uncomfortable", "Occasionally", "Regularly", "Very comfortable"] },
    { id: "q5", text: "How would you rate your emotional intimacy?", options: ["Struggling", "Needs work", "Good", "Very strong"] },
    { id: "q6", text: "Do you feel respected in decision-making?", options: ["No", "Sometimes", "Usually", "Absolutely"] },
    { id: "q7", text: "How often do you pray or reflect together?", options: ["Never", "Rarely", "Sometimes", "Often"] }
  ];
  
  function buildMarriageForm() {
    const container = document.getElementById('marriageQuestions');
    if (!container) return;
    let html = '';
    marriageQuestions.forEach((q, idx) => {
      html += `<div class="marriage-question"><strong>${idx+1}. ${q.text}</strong><div class="radio-group">`;
      q.options.forEach(opt => {
        html += `<label><input type="radio" name="${q.id}" value="${opt}"> ${opt}</label>`;
      });
      html += `</div></div>`;
    });
    container.innerHTML = html;
  }
  
  function getMarriageInsights() {
    let allAnswered = true;
    marriageQuestions.forEach(q => {
      if (!document.querySelector(`input[name="${q.id}"]:checked`)) allAnswered = false;
    });
    if (!allAnswered) return null;
    return {
      communication: "Healthy communication starts with listening without interrupting. Try a 10-minute daily check-in where each person shares one feeling.",
      trust: "Trust grows through consistency. Keep small promises and be transparent about your thoughts and feelings.",
      growth: "Pray together for 2 minutes daily. It's the single most powerful habit for Christian couples."
    };
  }
  
  // Random Verses
  const randomVerses = [
    "Philippians 4:13 - I can do all things through Christ who strengthens me.",
    "Joshua 1:9 - Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.",
    "Romans 8:28 - And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
    "Psalm 23:4 - Even though I walk through the darkest valley, I will fear no evil, for you are with me.",
    "Jeremiah 29:11 - For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.",
    "Matthew 11:28 - Come to me, all you who are weary and burdened, and I will give you rest."
  ];
  
  // Initialize everything when DOM loads
  document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    if (mobileBtn) {
      mobileBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
      });
    }
  
    // Daily Devotional
    function updateDevotional() {
      const d = devotions[devotionIndex % devotions.length];
      const verseEl = document.getElementById('dailyVerse');
      const messageEl = document.getElementById('dailyMessage');
      const prayerEl = document.getElementById('dailyPrayer');
      if (verseEl) verseEl.innerHTML = `📖 ${d.verse}: "${d.text}"`;
      if (messageEl) messageEl.innerHTML = `<strong>💡 Reflection:</strong> ${d.message}`;
      if (prayerEl) prayerEl.innerHTML = `🙏 ${d.prayer}`;
      devotionIndex++;
    }
    updateDevotional();
    const refreshBtn = document.getElementById('refreshDevotional');
    if (refreshBtn) refreshBtn.addEventListener('click', updateDevotional);
  
    // Problem Search
    const searchBtn = document.getElementById('searchBtn');
    const problemInput = document.getElementById('problemInput');
    const searchResult = document.getElementById('searchResult');
    if (searchBtn) {
      searchBtn.addEventListener('click', () => {
        let problem = problemInput.value.trim();
        if (!problem) problem = "guidance";
        const verses = getVerses(problem);
        const prayer = getPrayer(problem);
        const versesHtml = verses.map(v => `<div class="verse">📖 ${v.ref}: “${v.text}”</div>`).join('');
        searchResult.innerHTML = `<div>${versesHtml}</div><div class="prayer-card">🕊️ ${prayer}</div>`;
        searchResult.style.display = 'block';
      });
    }
  
    // Bible Q&A
    const askBtn = document.getElementById('askBtn');
    const bibleQuestion = document.getElementById('bibleQuestion');
    const qaResult = document.getElementById('qaResult');
    if (askBtn) {
      askBtn.addEventListener('click', () => {
        const q = bibleQuestion.value.trim();
        if (!q) return;
        const { answer, references } = getBibleAnswer(q);
        qaResult.innerHTML = `<div>💬 ${answer}</div><div style="margin-top: 8px;">📖 ${references}</div>`;
        qaResult.style.display = 'block';
      });
    }
  
    // Prayer Generator
    const generateBtn = document.getElementById('generatePrayerBtn');
    const prayerCategory = document.getElementById('prayerCategory');
    const prayerOutput = document.getElementById('prayerOutput');
    if (generateBtn) {
      generateBtn.addEventListener('click', () => {
        const cat = prayerCategory.value;
        const prayer = categoryPrayers[cat];
        prayerOutput.innerHTML = `<strong>🙏 Prayer:</strong><br>${prayer}`;
        prayerOutput.style.display = 'block';
      });
    }
  
    // Marriage Tool
    buildMarriageForm();
    const marriageSubmit = document.getElementById('submitMarriageBtn');
    const marriageResult = document.getElementById('marriageResult');
    if (marriageSubmit) {
      marriageSubmit.addEventListener('click', () => {
        const insights = getMarriageInsights();
        if (!insights) {
          marriageResult.innerHTML = "❓ Please answer all 7 questions to receive your personalized summary.";
          marriageResult.style.display = 'block';
          return;
        }
        marriageResult.innerHTML = `
          <div><strong>💬 Communication Insight:</strong> ${insights.communication}</div>
          <div style="margin-top: 8px;"><strong>🔒 Trust Insight:</strong> ${insights.trust}</div>
          <div style="margin-top: 8px;"><strong>🌱 Growth Suggestions:</strong> ${insights.growth}</div>
        `;
        marriageResult.style.display = 'block';
      });
    }
  
    // Random Verse
    const verseEl = document.getElementById('randomVerse');
    const newVerseBtn = document.getElementById('newVerseBtn');
    function updateRandomVerse() {
      const idx = Math.floor(Math.random() * randomVerses.length);
      if (verseEl) verseEl.innerHTML = `“${randomVerses[idx]}”`;
    }
    if (newVerseBtn) newVerseBtn.addEventListener('click', updateRandomVerse);
  });

  // ===== SHARING FUNCTIONS =====
function showToast(message) {
    const existingToast = document.querySelector('.toast-message');
    if (existingToast) existingToast.remove();
    
    const toast = document.createElement('div');
    toast.className = 'toast-message';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => toast.remove(), 2000);
  }
  
  function shareViaWhatsApp(text, url) {
    const encodedText = encodeURIComponent(text + '\n\n' + url);
    window.open(`https://wa.me/?text=${encodedText}`, '_blank');
  }
  
  function shareViaFacebook(url) {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank', 'width=600,height=400');
  }
  
  function shareViaTwitter(text, url) {
    const encodedText = encodeURIComponent(text + ' ' + url);
    window.open(`https://twitter.com/intent/tweet?text=${encodedText}`, '_blank');
  }
  
  function shareViaEmail(subject, body) {
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
  
  function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
      showToast('📋 Copied to clipboard!');
    });
  }
  
  // Add share buttons to search results
  function addShareToResult(content, elementId) {
    const container = document.getElementById(elementId);
    if (!container) return;
    
    const existingShare = container.querySelector('.result-share');
    if (existingShare) existingShare.remove();
    
    const shareDiv = document.createElement('div');
    shareDiv.className = 'result-share';
    shareDiv.style.marginTop = '1rem';
    shareDiv.style.paddingTop = '0.5rem';
    shareDiv.style.borderTop = '1px solid #e2d9cf';
    shareDiv.innerHTML = `
      <div style="display: flex; gap: 0.5rem; justify-content: flex-end; flex-wrap: wrap;">
        <button class="share-mini" data-share-whatsapp>📱 WhatsApp</button>
        <button class="share-mini" data-share-copy>📋 Copy</button>
      </div>
    `;
    container.appendChild(shareDiv);
    
    const whatsappBtn = shareDiv.querySelector('[data-share-whatsapp]');
    const copyBtn = shareDiv.querySelector('[data-share-copy]');
    
    if (whatsappBtn) {
      whatsappBtn.addEventListener('click', () => {
        shareViaWhatsApp(content, window.location.href);
      });
    }
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        copyToClipboard(content);
      });
    }
  }