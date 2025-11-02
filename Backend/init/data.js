const botResponses = {
  "hello": [
    "Hi there, I'm BudgetBot your personal finance buddy.",
    "Hello, ready to take control of your expenses?",
    "Hey, let's make budgeting fun and simple today."
  ],
  "hi": [
    "Hi, need help with your spending or saving goals?",
    "Hello there, let's track some expenses.",
    "Hey, I'm here to make your financial life easier."
  ],
  "hey": [
    "Hey, I'm BudgetBot your smart money assistant.",
    "Hey there, ready to manage your money better?",
    "Hi, I can help you save more and spend wisely."
  ],
  "how are you": [
    "I'm great, ready to help you stay financially fit.",
    "Doing awesome, let's talk savings and goals.",
    "I'm fantastic, how's your budgeting going?"
  ],
  "bye": [
    "Goodbye, keep saving and tracking your expenses.",
    "See you soon, don't forget to record your expenses daily.",
    "Bye, stay consistent with your goals."
  ],
  "thank you": [
    "You're welcome, always happy to help.",
    "Glad I could assist, keep managing wisely.",
    "Anytime, you're doing great with your finances."
  ],
  "thanks": [
    "No problem, stay financially smart.",
    "Happy to help, keep up the good work.",
    "You got it."
  ],

  "show my expenses": [
    "You have spent around 3200 rupees this month across 5 categories.",
    "So far your total spending is 2750 rupees mostly on groceries and travel.",
    "This month's expenses are 3540 rupees. Want to see category wise?"
  ],
  "how much did i spend this month": [
    "You have spent about 2900 rupees this month. Try cutting down on food and transport.",
    "This month's total spending is 3120 rupees.",
    "You have spent 2780 rupees till now. Want me to show a breakdown?"
  ],
  "show me my recent transactions": [
    "Your last 3 expenses are Food 120, Groceries 450, Travel 299.",
    "Latest transactions are Coffee 80, Taxi 200, Grocery 400.",
    "Here’s your recent spending snapshot: Food 250, Bills 600, Shopping 450."
  ],
  "display expenses for this week": [
    "You have spent 1050 rupees this week, groceries took the lead.",
    "Weekly spending is 920 rupees across 3 categories.",
    "1200 rupees spent this week mostly on essentials."
  ],

  "add expense": [
    "Sure, please tell me the amount and category for example 500 for groceries.",
    "Got it, how much did you spend and for what?",
    "Let's add it, just say something like 200 for food."
  ],
  "add an expense of 200 rupees for food": [
    "Done, added 200 rupees under Food category.",
    "Expense added, 200 rupees for Food recorded.",
    "Got it, 200 rupees added to Food expenses."
  ],
  "i bought groceries worth 300": [
    "300 rupees added to Groceries.",
    "Added 300 rupees under Groceries category.",
    "Perfect, 300 rupees saved in your expense tracker."
  ],
  "record my taxi fare of 100": [
    "Added 100 rupees under Transport category.",
    "Taxi fare recorded, 100 rupees logged successfully.",
    "Expense saved, 100 rupees for Transport."
  ],

  "set a goal": [
    "Sure, what do you want to save for a trip, gadget, or emergency fund?",
    "Let's set a goal, what’s your target amount and purpose?",
    "Goal time, tell me your saving purpose and amount."
  ],
  "i want to save 5000 rupees this month": [
    "Goal created, save 5000 rupees by the end of this month.",
    "Nice, you are aiming to save 5000 rupees this month.",
    "New goal added, 5000 rupees savings target set."
  ],
  "set a goal for buying a laptop": [
    "Goal added, let's start saving for your laptop.",
    "Awesome, laptop goal created. Keep saving monthly.",
    "Laptop purchase goal set, you got this."
  ],
  "help me save for travel": [
    "Created a travel savings goal. Add weekly savings to stay on track.",
    "Travel goal added, start saving bit by bit.",
    "Travel fund created, consistency is key."
  ],

  "show my goals": [
    "You currently have 2 goals, Travel 2000 of 5000 and Emergency Fund 1500 of 3000.",
    "Here are your active goals, Travel and Emergency Fund. Great progress.",
    "Goals summary, Travel 40 percent, Emergency 50 percent."
  ],
  "what goals have i set": [
    "You have set 2 goals so far, want to see your progress?",
    "You are tracking Travel and Emergency Fund goals. Doing great.",
    "Your goals are on track, would you like detailed stats?"
  ],
  "display savings progress": [
    "You have completed 60 percent of your Travel goal. Keep it up.",
    "Savings progress, Travel 60 percent, Emergency 50 percent.",
    "Travel goal 60 percent done, you are doing amazing."
  ],

  "give me saving tips": [
    "Follow the 50 30 20 rule, 50 percent needs, 30 percent wants, 20 percent savings.",
    "Track daily spending and set weekly limits.",
    "Avoid impulse buying and transfer savings automatically."
  ],
  "how can i save money": [
    "Start tracking every expense and avoid random purchases.",
    "Set a fixed budget and stick to it.",
    "Save first, spend later. Automate your savings each month."
  ],
  "tips for budgeting": [
    "Review your spending weekly and adjust budgets if needed.",
    "Set realistic goals and reward yourself for progress.",
    "Categorize spending and use alerts for overspending."
  ],
  "how to reduce spending": [
    "Cook at home more and reduce online shopping.",
    "Use a list before shopping to prevent unnecessary buys.",
    "Cancel unused subscriptions and watch your savings grow."
  ],

  "how to invest my money": [
    "Start small with SIPs or index funds for long term returns.",
    "Consider mutual funds and diversify investments.",
    "Focus on consistent investing, not timing the market."
  ],
  "what is sip": [
    "SIP means Systematic Investment Plan, invest small amounts monthly.",
    "SIP is a smart way to invest regularly and build wealth.",
    "It is a disciplined investment in mutual funds every month."
  ],
  "should i start mutual funds": [
    "Yes, SIPs are perfect for beginners.",
    "Mutual funds are great for long term growth.",
    "Definitely, start small, stay consistent, and watch it grow."
  ],
  "how to plan for retirement": [
    "Start early and invest in long term funds.",
    "Diversify into mutual funds and NPS for retirement.",
    "Build an emergency fund and plan long term investments."
  ],

  "can you talk in hindi": [
    "Haan, main hindi mein baat kar sakta hoon.",
    "Bilkul, hindi mein bataiye kya janana chahte hain.",
    "Ji haan, main hindi mein jawab de sakta hoon."
  ],
  "मुझसे हिंदी में बात करो": [
    "Zaroor, main hindi mein baat karoonga.",
    "Theek hai, bataiye kya poochhna hai.",
    "Haan, hindi mode on hai."
  ],
  "தமிழில் பேசுவாயா": [
    "Aam, naan tamil pesa mudiyum.",
    "Nichayam, tamilil kelungal.",
    "Aam, tamilil pesalam."
  ],
  "talk to me in tamil": [
    "Sure, I can reply in Tamil too.",
    "Yes, let's switch to Tamil.",
    "Okay, from now I will respond in Tamil."
  ],

  "is my data safe": [
    "Absolutely, your data is private and encrypted.",
    "Yes, your data stays safe, we care about your privacy.",
    "No worries, all your records are securely stored."
  ],
  "do you store my bank details": [
    "No, I don’t store any banking data, just expense info.",
    "Your bank info is never saved or accessed.",
    "No bank details needed, full privacy maintained."
  ],
  "how do you handle my data": [
    "Your data is used only for insights, never shared externally.",
    "All data is encrypted and used only for budgeting analytics.",
    "We follow strict data privacy guidelines."
  ],
  "are my expenses private": [
    "Yes, completely private and secure.",
    "Only you can see your expense data.",
    "Your data never leaves our secure system."
  ],

  "motivate me to save": [
    "Small savings daily make big dreams real.",
    "You are just one habit away from financial freedom.",
    "Every rupee saved is a step closer to your goal."
  ],
  "i can't stop spending": [
    "Let's set spending limits together, it really helps.",
    "Track and reflect on your weekly expenses.",
    "No worries, awareness is the first step to improve."
  ],
  "i feel broke": [
    "Don't worry, let's restart your savings plan.",
    "It's okay, every expert saver starts small.",
    "Focus on small wins, and progress will follow."
  ],
  "help me stay consistent": [
    "Set reminders and record daily, consistency builds success.",
    "Track daily and review weekly to stay motivated.",
    "Habit beats motivation, stay regular."
  ],
  // Greetings & polite chat
  "namaste budgetbot, kaise ho?": "Namaste ji! Main bilkul theek hoon. Aap kaise hain? Kya main aapki financial planning mein madad kar sakta hoon?",
  "hello budgetbot": "Namaste! Main BudgetBot hoon. Aap bataiye, main aapki madad kaise kar sakta hoon?",
  "hi budgetbot": "Hello ji! Main yahan hoon aapke kharche aur goals manage karne ke liye.",
  "aap kaise ho": "Main accha hoon, dhanyawaad! Aapka budget kaisa chal raha hai?",
  "achha chalo fir milte hain": "Zarur ji! Apna khayal rakhiye aur savings continue rakhiye.",
  "dhanyawaad budgetbot": "Aapka swagat hai! Mujhe khushi hui ki main aapki madad kar saka.",

  // Expense tracking
  "kripya mera kharcha dikha dijiye": "Zarur! Aapne iss mahine tak 1200 rupees kharch kiye hain, jismein zyada Food aur Transport par hua hai.",
  "kya aap iss hafte ka mera expense bata sakte hain": "Bilkul! Iss hafte aapka total expense 850 rupees hai, zyada Groceries par.",
  "aaj ka mera total expense kitna hua": "Aaj aapka total expense 300 rupees raha hai.",
  "kripya recent transactions dikha dijiye": "Yeh rahe aapke last 3 transactions: Food 120, Groceries 450, Transport 299.",
  "ek expense add kar dijiye": "Zarur ji! Kripya amount aur category batayein, jaise 200 for Food.",
  "kripya 200 rupees food category mein add kar dijiye": "Bilkul ji! 200 rupees Food category mein add kar diye gaye hain.",
  "kripya mera last expense delete kar dijiye": "Aapka last expense successfully delete kar diya gaya hai.",
  "kripya batayein maine iss mahine kitna kharch kiya": "Aapne iss mahine total 1200 rupees kharch kiye hain.",

  // Income tracking
  "kripya mera income dikha dijiye": "Aapka iss mahine ka total income 10,000 rupees hai.",
  "kya aap mera salary record kar sakte hain": "Zarur! Salary income successfully record kar diya gaya hai.",
  "kripya 5000 rupees salary ke roop mein add kar dijiye": "5000 rupees salary ke roop mein add kar diye gaye hain.",
  "maine iss mahine kitna kamaaya": "Aapne iss mahine 10,000 rupees kamaaye hain.",

  // Balance & savings
  "kripya mera current balance bata dijiye": "Aapka current balance 8,800 rupees hai.",
  "maine iss mahine kitna paisa save kiya": "Aapne iss mahine tak 3,500 rupees save kiye hain. Bahut accha!",
  "kripya batayein kitna paisa bacha hai mere paas": "Aapke paas abhi 8,800 rupees bache hue hain.",
  "kripya meri savings dikha dijiye": "Aapki total savings 3,500 rupees hai.",
  "mera remaining balance kitna hai": "Aapka remaining balance abhi 8,800 rupees hai.",

  // Goals
  "kripya mere goals dikha dijiye": "Aapke 2 active goals hain — Travel aur Emergency Fund.",
  "main ek naya goal set karna chahta hoon": "Zarur! Aap kis goal ke liye save karna chahte hain? Jaise trip ya naya phone.",
  "kripya travel ke liye goal bana dijiye": "Travel goal successfully create kar diya gaya hai. Best of luck!",
  "kripya mera goal progress dikha dijiye": "Aapne apne Travel goal ka 60% complete kar liya hai. Bahut badhiya!",
  "kripya batayein mujhe goal poora karne ke liye kitna aur save karna hai": "Aapko apna Travel goal poora karne ke liye 3,000 rupees aur save karne hain.",

  // Reports & insights
  "kripya mera financial report dikha dijiye": "Aapka financial report tayyar hai: Income 10,000, Expense 6,500, Savings 3,500.",
  "kripya monthly report dikha dijiye": "October ke liye report: Income 10,000, Expense 6,500, aur savings 3,500 rupees.",
  "kripya spending analysis batayein": "Aapka sabse zyada kharcha Food category mein hua hai.",
  "kripya monthly comparison dikha dijiye": "Pichle mahine ke mukable mein aapka expense 8% kam hua hai.",

  // Tips & advice
  "kripya mujhe kuch saving tips batayein": "Aap apne income ka 20% har mahine save karne ki aadat banaiye. Chhoti bachatein bade fayde deti hain.",
  "main apne paise kaise bacha sakta hoon": "Shopping se pehle list banaiye aur impulse buying se bachiye.",
  "kripya mujhe batayein budget kaise banayein": "Apne income ke hisaab se weekly limit set kariye. Main madad kar sakta hoon!",
  "main apne spending ko kaise kam kar sakta hoon": "Transport aur Food par thoda control rakhiye, aur review har Sunday ko kariye.",
  "kripya mujhe koi smart tip batayein": "Automatic saving setup kar lijiye taaki har mahine kuch paisa zaroor bache.",

  // Motivation & reminders
  "kripya mujhe motivate kijiye": "Aap bahut accha kar rahe hain! Thoda thoda bachaane se bade goals achieve hote hain.",
  "main broke ho gaya hoon, kya karoon": "Koi baat nahi! Har month ek nayi shuruaat hoti hai. Chaliye dobara plan banate hain.",
  "kripya mujhe discipline banaye rakhne ka tareeka batayein": "Roz apna kharcha likhna ek acchi aadat hai. Yeh aapko control mein rakhega.",
  "kripya mujhe daily reminder bhejiye": "Daily reminder set kar diya gaya hai taaki aap regular bane rahein.",
  "kripya mujhe thoda encourage kijiye": "Bahut accha chal raha hai! Bas consistency banaye rakhiye.",

  // Data & app related
  "kya mera data safe hai": "Bilkul! Aapka data puri tarah surakshit hai aur kahin share nahi hota.",
  "kripya mera account reset kar dijiye": "Aapka account reset kar diya gaya hai. Puraana data delete ho gaya hai.",
  "aap kya kya kar sakte hain": "Main aapke expenses, goals, aur savings manage karta hoon aur useful financial tips deta hoon.",
  "kripya mera dashboard khol dijiye": "Dashboard open kiya ja raha hai. Aapka financial overview yahan milega."
}

export default botResponses;
