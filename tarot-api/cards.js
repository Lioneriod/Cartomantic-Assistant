const majorArcana = [
  {
    id: 0,
    name: "The Fool",
    image: "./assets/00-the-fool.webp",
    meanings: {
      general: {
        upright:
          "beginnings, freedom, innocence, originality, adventure, idealism, spontaneity",
        reversed:
          "reckless, careless, distracted, naive, foolish, gullible, stale, dull",
      },
      love: {
        upright: "new relationship, fun light romance",
        reversed: "lack of commitment, risky relationship",
      },
      career: {
        upright: "new job, new business, breath of fresh air at work",
        reversed: "stale and boring job, reckless actions at work",
      },
      finances: {
        upright: "spontaneous spending, financial opportunities",
        reversed: "caution around financial opportunities, foolish purchases",
      },
      feelings: {
        upright:
          "excited, curious, adventurous, optimistic, free-spirited, open hearted, hopeful, spontaneous",
        reversed:
          "hesitant, uncertain, overwhelmed by fears, guarded, questioning feelings, apprehensive about connection",
      },
      actions: {
        upright:
          "embrace spontaneity, take risks, explore new experiences, trust your instincts, adopt a fresh perspective",
        reversed:
          "evaluate your goals, reflect your intentions, seek advice from mentors, take small steps, ground yourself",
      },
    },
  },
  {
    id: 1,
    name: "The Magician",
    image: "./assets/01-the-magician.webp",
    meanings: {
      general: {
        upright:
          "manifestation, willpower, resourcefulness, skill, inspired action",
        reversed:
          "manipulation, scattered energy, poor planning, untapped potential",
      },
      love: {
        upright: "magnetic attraction, taking initiative in love",
        reversed: "mixed signals, surface-level charm, possible deceit",
      },
      career: {
        upright: "using talents at work, pitching ideas, making things happen",
        reversed: "overpromising, lack of follow-through, misdirected effort",
      },
      finances: {
        upright: "creating opportunities, smart use of resources",
        reversed: "tricks or scams, unclear terms, impulsive buys",
      },
      feelings: {
        upright:
          "confident, focused, inventive, ready to act, persuasive, energetic",
        reversed:
          "insecure, doubtful, blocked, performative, wary of being controlled",
      },
      actions: {
        upright:
          "set clear intention, leverage your tools, communicate, take decisive steps",
        reversed:
          "fact-check, plan before acting, avoid shortcuts, align motives and means",
      },
    },
  },
  {
    id: 2,
    name: "The High Priestess",
    image: "./assets/02-the-high-priestess.webp",
    meanings: {
      general: {
        upright:
          "intuition, inner wisdom, mystery, the subconscious, sacred knowledge",
        reversed:
          "secrets, disconnect from intuition, confusion, hidden motives",
      },
      love: {
        upright: "slow-burn connection, read between lines, emotional depth",
        reversed: "mixed motives, uncertainty, keeping feelings private",
      },
      career: {
        upright:
          "research, learning quietly, trusting your read of a situation",
        reversed: "office politics, withheld info, unclear guidance",
      },
      finances: {
        upright: "use discretion, gather facts before spending",
        reversed: "lack of transparency, fees or terms you don’t see",
      },
      feelings: {
        upright:
          "receptive, contemplative, spiritually attuned, calm, observant",
        reversed:
          "guarded, vague, doubtful, sensing red flags, reluctant to open up",
      },
      actions: {
        upright:
          "pause and listen, journal dreams, seek signs, follow inner voice",
        reversed: "ask direct questions, clarify assumptions, avoid guesswork",
      },
    },
  },
  {
    id: 3,
    name: "The Empress",
    image: "./assets/03-the-empress.webp",
    meanings: {
      general: {
        upright: "abundance, nurturing, fertility, creativity, comfort, beauty",
        reversed:
          "creative block, smothering, dependence, neglecting self-care",
      },
      love: {
        upright: "warmth and affection, relationship growth, sensuality",
        reversed: "overgiving, jealousy, clinginess, unmet needs",
      },
      career: {
        upright: "creative projects flourish, supportive environment",
        reversed: "stagnant creativity, caring labor undervalued",
      },
      finances: {
        upright: "steady growth, investing in quality, home comforts",
        reversed: "overindulgence, retail therapy, poor boundaries with money",
      },
      feelings: {
        upright: "loving, generous, protective, grounded, appreciative, cozy",
        reversed: "needy, insecure, overattached, drained, craving reassurance",
      },
      actions: {
        upright:
          "nurture your ideas, prioritize self-care, beautify your space",
        reversed: "set boundaries, refill your cup, simplify and declutter",
      },
    },
  },
  {
    id: 4,
    name: "The Emperor",
    image: "./assets/04-the-emperor.webp",
    meanings: {
      general: {
        upright:
          "structure, authority, stability, strategy, protection, leadership",
        reversed: "rigidity, domination, control issues, undisciplined chaos",
      },
      love: {
        upright: "commitment, reliability, taking responsibility",
        reversed: "power struggles, emotional distance, stubbornness",
      },
      career: {
        upright: "clear plans, systems, executing a vision, management",
        reversed: "micromanagement, inflexibility, lack of accountability",
      },
      finances: {
        upright: "budgeting, long-term security, disciplined saving",
        reversed: "controlling with money, risky power plays",
      },
      feelings: {
        upright: "steady, protective, determined, composed, purposeful",
        reversed: "hard to access, guarded, bossy, impatient, frustrated",
      },
      actions: {
        upright: "make a plan, set rules, enforce boundaries, take command",
        reversed: "loosen the grip, delegate, listen, adapt strategy",
      },
    },
  },
  {
    id: 5,
    name: "The Hierophant",
    image: "./assets/05-the-hierophant.webp",
    meanings: {
      general: {
        upright:
          "tradition, mentorship, spiritual learning, shared values, conformity",
        reversed:
          "nonconformity, question dogma, personal belief, break with tradition",
      },
      love: {
        upright: "conventional bonds, commitment talks, shared ethics",
        reversed: "different values, resisting labels, unconventional setup",
      },
      career: {
        upright: "training, certification, best practices, trusted advisor",
        reversed: "red tape, stale rules, innovate outside the box",
      },
      finances: {
        upright: "conservative approach, proven methods, advice from pros",
        reversed: "ignore herd mentality, choose what fits your life",
      },
      feelings: {
        upright:
          "respectful, principled, sincere, seeking guidance and meaning",
        reversed: "restless, questioning, constrained by expectations",
      },
      actions: {
        upright: "find a mentor, learn the framework, honor commitments",
        reversed: "challenge assumptions, define your own code, rewrite norms",
      },
    },
  },
  {
    id: 6,
    name: "The Lovers",
    image: "./assets/06-the-lovers.webp",
    meanings: {
      general: {
        upright: "love, harmony, partnership, alignment, meaningful choices",
        reversed: "disharmony, misalignment, temptation, difficult decisions",
      },
      love: {
        upright: "deep connection, mutual attraction, choosing each other",
        reversed: "values clash, third-party pulls, head vs. heart",
      },
      career: {
        upright: "aligned collaborations, finding the right fit",
        reversed: "bad partnership, conflicting goals, tough trade-offs",
      },
      finances: {
        upright: "co-managing money, joint decisions, balanced spending",
        reversed: "impulse buys, conflicting priorities, unclear agreements",
      },
      feelings: {
        upright: "in love, affectionate, open, aligned, bonded, curious",
        reversed: "torn, ambivalent, insecure about compatibility, tempted",
      },
      actions: {
        upright: "choose with your values, communicate honestly, cooperate",
        reversed:
          "revisit choices, set boundaries, avoid splitting your energy",
      },
    },
  },
  {
    id: 7,
    name: "The Chariot",
    image: "./assets/07-the-chariot.webp",
    meanings: {
      general: {
        upright:
          "willpower, control, determination, victory, direction, discipline",
        reversed: "scattered focus, aggression, delays, lack of direction",
      },
      love: {
        upright: "moving things forward, clear intentions, momentum",
        reversed: "mixed pace, push–pull dynamics, forcing outcomes",
      },
      career: {
        upright: "goal-driven progress, overcoming obstacles, promotions",
        reversed: "burnout risk, misaligned goals, stalled projects",
      },
      finances: {
        upright: "targeted saving, disciplined plan, big purchase progress",
        reversed: "impulsive spends, no plan, wheels spinning",
      },
      feelings: {
        upright: "motivated, bold, confident, in control, hungry for results",
        reversed:
          "impatient, irritable, aimless, overly forceful or checked out",
      },
      actions: {
        upright:
          "pick a destination, commit, cut distractions, steer with focus",
        reversed: "slow down, recalibrate goals, channel energy constructively",
      },
    },
  },
  {
    id: 8,
    name: "Strength",
    image: "./assets/08-strength.webp",
    meanings: {
      general: {
        upright:
          "inner strength, bravery, compassion, patience, gentle control, resilience",
        reversed:
          "self-doubt, insecurity, low energy, reactivity, losing heart",
      },
      love: {
        upright: "kindness builds trust, steady warmth, taming pride/ego",
        reversed: "jealousy, fear of vulnerability, impatience with partner",
      },
      career: {
        upright: "calm leadership, persistence, influencing without force",
        reversed: "frustration at work, second-guessing your abilities",
      },
      finances: {
        upright: "disciplined spending, long-game stability",
        reversed: "impulse buying, money stress from insecurity",
      },
      feelings: {
        upright:
          "courageous, compassionate, steady, protective, quietly confident",
        reversed: "anxious, timid, depleted, touchy, needing reassurance",
      },
      actions: {
        upright:
          "choose patience, regulate emotions, encourage rather than push",
        reversed:
          "rebuild confidence, rest and recharge, avoid knee-jerk reactions",
      },
    },
  },
  {
    id: 9,
    name: "The Hermit",
    image: "./assets/09-the-hermit.webp",
    meanings: {
      general: {
        upright:
          "solitude for insight, inner guidance, reflection, searching for truth",
        reversed: "isolation, withdrawal, feeling lost, avoiding guidance",
      },
      love: {
        upright:
          "slow pace, thoughtful connection, space to understand feelings",
        reversed: "pulling away, mixed signals, difficulty opening up",
      },
      career: {
        upright: "independent work, research, mentorship, thoughtful planning",
        reversed: "disconnected from team, unclear path, stalling",
      },
      finances: {
        upright: "conservative approach, thoughtful budgeting",
        reversed: "neglecting practicalities, not asking for advice",
      },
      feelings: {
        upright: "introspective, calm, contemplative, sincerely curious",
        reversed: "lonely, confused, closed off, unsure what they want",
      },
      actions: {
        upright: "pause for perspective, journal, seek a wise mentor",
        reversed: "re-engage with others, ask for help, clarify your direction",
      },
    },
  },
  {
    id: 10,
    name: "Wheel of Fortune",
    image: "./assets/10-wheel-of-fortune.webp",
    meanings: {
      general: {
        upright: "change, cycles, fate, turning points, luck, movement",
        reversed:
          "resistance to change, bad timing, feeling stuck, clinging to control",
      },
      love: {
        upright: "relationship shifts, serendipity, going with the flow",
        reversed: "on–off dynamics, delays, trying to force outcomes",
      },
      career: {
        upright: "new phase, opportunity window, momentum",
        reversed: "setbacks, external factors, need to adapt",
      },
      finances: {
        upright: "upswing possible, diversify, plan for cycles",
        reversed: "unexpected expenses, avoid gambling on luck",
      },
      feelings: {
        upright: "optimistic, open to change, excited by possibilities",
        reversed: "frustrated by delays, fatalistic, uneasy with uncertainty",
      },
      actions: {
        upright: "ride the cycle, stay flexible, act when the window opens",
        reversed: "release control, adjust plans, prepare for the next turn",
      },
    },
  },
  {
    id: 11,
    name: "Justice",
    image: "./assets/11-justice.webp",
    meanings: {
      general: {
        upright: "fairness, truth, cause and effect, accountability, balance",
        reversed: "bias, denial, dodging consequences, imbalance, dishonesty",
      },
      love: {
        upright: "honest talks, defining terms, equitable partnership",
        reversed: "one-sided effort, blame games, unresolved issues",
      },
      career: {
        upright: "ethical decisions, contracts, clear policies",
        reversed: "unfair treatment, legal hiccups, opacity",
      },
      finances: {
        upright: "transparent deals, read the fine print, balance budgets",
        reversed: "disputes, hidden terms, unequal obligations",
      },
      feelings: {
        upright: "sincere, principled, willing to be fair and clear",
        reversed: "judgmental, evasive, conflicted, rationalizing",
      },
      actions: {
        upright: "seek truth, weigh options, own your choices, keep receipts",
        reversed:
          "correct mistakes, make amends, restore balance, be transparent",
      },
    },
  },
  {
    id: 12,
    name: "The Hanged Man",
    image: "./assets/12-the-hanged-man.webp",
    meanings: {
      general: {
        upright: "new perspective, surrender, pause, sacrifice for insight",
        reversed:
          "stalling, indecision, resisting the lesson, needless sacrifice",
      },
      love: {
        upright: "don’t rush, see from their view, release control",
        reversed: "mixed signals, limbo, avoidance of a decision",
      },
      career: {
        upright: "reframe plans, strategic pause, rethink priorities",
        reversed: "delay without purpose, analysis paralysis",
      },
      finances: {
        upright: "wait for clarity, hold off big purchases",
        reversed: "stuck funds, avoiding a necessary choice",
      },
      feelings: {
        upright: "curious, reflective, willing to let things unfold",
        reversed: "restless, uncertain, tired of waiting, conflicted",
      },
      actions: {
        upright:
          "let go, observe, trade short-term comfort for long-term wisdom",
        reversed:
          "choose a direction, stop postponing, cut unhelpful sacrifices",
      },
    },
  },
  {
    id: 13,
    name: "Death",
    image: "./assets/13-death.webp",
    meanings: {
      general: {
        upright: "endings, transformation, release, renewal, major transition",
        reversed: "resisting change, stagnation, fear of letting go",
      },
      love: {
        upright: "relationship evolves, old patterns end, fresh start",
        reversed: "clinging to the past, avoiding necessary closure",
      },
      career: {
        upright: "career shift, pivot, shedding stale roles",
        reversed: "stuck in dead-end work, fear of transition",
      },
      finances: {
        upright: "close accounts, restructure, reset priorities",
        reversed: "avoiding necessary cuts, sunk-cost thinking",
      },
      feelings: {
        upright: "ready to move on, cathartic, brave, embracing change",
        reversed: "attached, resistant, grieving, uncertain",
      },
      actions: {
        upright: "clear the old, welcome the new, ritualize endings",
        reversed: "name what’s over, plan the exit, take one brave step",
      },
    },
  },
  {
    id: 14,
    name: "Temperance",
    image: "./assets/14-temperance.webp",
    meanings: {
      general: {
        upright:
          "balance, moderation, patience, healing, integration, middle path",
        reversed: "excess, extremes, imbalance, lack of harmony",
      },
      love: {
        upright: "healthy pacing, compromise, blending differences",
        reversed: "hot–cold swings, overcorrecting, poor boundaries",
      },
      career: {
        upright: "sustainable workflows, good teamwork, steady growth",
        reversed: "burnout risk, lopsided priorities, reactive choices",
      },
      finances: {
        upright: "measured spending, diversified approach",
        reversed: "overindulgence, all-or-nothing money moves",
      },
      feelings: {
        upright: "calm, patient, hopeful, harmonizing",
        reversed: "scattered, impatient, craving quick fixes",
      },
      actions: {
        upright: "rebalance habits, blend ideas, choose moderation",
        reversed: "remove excess, slow down, re-align routines",
      },
    },
  },
  {
    id: 15,
    name: "The Devil",
    image: "./assets/15-the-devil.webp",
    meanings: {
      general: {
        upright:
          "attachment, temptation, shadow patterns, materialism, playfulness",
        reversed:
          "release, reclaiming power, detachment, clarity about patterns",
      },
      love: {
        upright: "intense chemistry, taboo thrills, power dynamics",
        reversed: "healing codependency, breaking unhealthy ties",
      },
      career: {
        upright: "golden handcuffs, pressure, tempting shortcuts",
        reversed: "quitting toxic situations, healthier boundaries",
      },
      finances: {
        upright: "debt traps, compulsive spending, status buys",
        reversed: "budget detox, cutting cords to costly habits",
      },
      feelings: {
        upright: "obsessed, lusty, fearful of loss, hooked",
        reversed: "liberated, clear-eyed, regaining self-control",
      },
      actions: {
        upright: "name the bind, avoid bargaining with vices, set hard limits",
        reversed: "detox, ask for support, replace cravings with care",
      },
    },
  },
  {
    id: 16,
    name: "The Tower",
    image: "./assets/16-the-tower.webp",
    meanings: {
      general: {
        upright: "sudden upheaval, revelation, breakdown of false structures",
        reversed: "disaster averted, delayed change, cautious rebuilding",
      },
      love: {
        upright: "truth shakes the relationship, needed wake-up call",
        reversed: "repair work, gentle reset, learning from shocks",
      },
      career: {
        upright: "organizational shake-up, failed assumptions, pivot point",
        reversed: "damage control, restructure, safer foundations",
      },
      finances: {
        upright: "unexpected expenses, emergency fund needed",
        reversed: "recovery plan, renegotiations, rebuilding reserves",
      },
      feelings: {
        upright: "shaken, disillusioned, raw but awakening",
        reversed: "cautiously hopeful, rebuilding trust, integrating lessons",
      },
      actions: {
        upright: "let the false fall, face facts, prioritize safety",
        reversed: "stabilize, audit foundations, rebuild stronger",
      },
    },
  },
  {
    id: 17,
    name: "The Star",
    image: "./assets/17-the-star.webp",
    meanings: {
      general: {
        upright: "hope, renewal, faith, serenity, authenticity, guidance",
        reversed: "disheartened, self-doubt, creative block, cynicism",
      },
      love: {
        upright: "healing connection, optimism, gentle openness",
        reversed: "low faith in love, closing off, needing self-care",
      },
      career: {
        upright: "inspired vision, reputational glow, long-term aim",
        reversed: "wavering faith in path, dimmed motivation",
      },
      finances: {
        upright: "gradual recovery, investing in future hopes",
        reversed: "pessimistic outlook, postponing plans",
      },
      feelings: {
        upright: "hopeful, calm, inspired, spiritually refreshed",
        reversed: "drained, doubtful, needing reassurance and rest",
      },
      actions: {
        upright: "reconnect to purpose, share your light, trust the process",
        reversed: "tend to your well, scale back, rebuild belief",
      },
    },
  },
  {
    id: 18,
    name: "The Moon",
    image: "./assets/18-the-moon.webp",
    meanings: {
      general: {
        upright:
          "intuition, dreams, illusion, anxiety, the unconscious, ambiguity",
        reversed: "clarity emerging, confronting fears, releasing confusion",
      },
      love: {
        upright: "mixed signals, secrets, navigate with intuition",
        reversed: "truth surfacing, clearer talks, naming anxieties",
      },
      career: {
        upright: "unclear roles, rumors, trust your read but verify",
        reversed: "information comes to light, better visibility",
      },
      finances: {
        upright: "hidden fees, uncertainty—avoid risky guesses",
        reversed: "cleaner numbers, due diligence pays off",
      },
      feelings: {
        upright: "moody, dreamy, uncertain, highly sensitive",
        reversed: "grounding, sorting feelings, less afraid of shadows",
      },
      actions: {
        upright: "sleep/dream journal, fact-check, move carefully",
        reversed: "ask direct questions, simplify, choose grounding routines",
      },
    },
  },
  {
    id: 19,
    name: "The Sun",
    image: "./assets/19-the-sun.webp",
    meanings: {
      general: {
        upright: "joy, vitality, success, clarity, warmth, positivity",
        reversed:
          "muted optimism, temporary doubt, overexposure, need to recharge",
      },
      love: {
        upright: "happy times, openness, playful affection",
        reversed: "needing space, ego clashes, attention fatigue",
      },
      career: {
        upright: "recognition, strong results, clear wins",
        reversed: "overconfidence, spotlight stress, minor delays",
      },
      finances: {
        upright: "healthy growth, confident planning, big wins",
        reversed: "beware over-spend, review assumptions",
      },
      feelings: {
        upright: "radiant, confident, generous, enthusiastic",
        reversed: "tired, self-doubting, needing joy on your terms",
      },
      actions: {
        upright: "celebrate, share success, lead with warmth",
        reversed: "unplug, set boundaries, refocus on true sources of joy",
      },
    },
  },
  {
    id: 20,
    name: "Judgement",
    image: "./assets/20-judgement.webp",
    meanings: {
      general: {
        upright: "awakening, reckoning, calling, evaluation, second chances",
        reversed:
          "self-doubt, harsh inner critic, fear of change, missing the call",
      },
      love: {
        upright: "honest review, forgive/renew, decide together",
        reversed: "dwelling on past mistakes, stalled reconciliation",
      },
      career: {
        upright: "career calling, performance review, leveling up",
        reversed: "imposter feelings, postponing the big decision",
      },
      finances: {
        upright: "audit and reset, clear debts, new chapter",
        reversed: "avoidance, shame blocks change, delay cleanup",
      },
      feelings: {
        upright: "clear, decisive, ready to answer a calling",
        reversed: "hesitant, overly self-critical, fearful of judgment",
      },
      actions: {
        upright: "make the call, forgive yourself, act on your purpose",
        reversed: "release shame, trust your assessment, take the first step",
      },
    },
  },
  {
    id: 21,
    name: "The World",
    image: "./assets/21-the-world.webp",
    meanings: {
      general: {
        upright: "completion, wholeness, accomplishment, integration, travel",
        reversed: "loose ends, delays in closure, doubt about next chapter",
      },
      love: {
        upright: "milestones, mutual fulfillment, shared vision",
        reversed: "unfinished business, hesitation to commit/close a cycle",
      },
      career: {
        upright: "project wrap, graduation/promotion, global reach",
        reversed: "nearly there, need final polish, scope creep",
      },
      finances: {
        upright: "goal achieved, long-term stability, wise consolidation",
        reversed: "tie up contracts, finalize payments, complete plans",
      },
      feelings: {
        upright: "proud, content, at peace, ready for the next journey",
        reversed: "restless, unfulfilled, seeking closure",
      },
      actions: {
        upright: "celebrate fully, document lessons, set a new horizon",
        reversed: "finish remaining tasks, close loops, define the next goal",
      },
    },
  },
];
module.exports = majorArcana;
