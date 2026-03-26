// ─── Summit Dental Group: Blog Articles Data ─────────────────────────────────
// Each article is fully static. Add new articles here; pages are auto-generated.

export type ArticleSection = {
  heading?: string;
  paragraphs: string[];
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  categorySlug: string;
  readTime: number; // minutes
  date: string; // ISO date string
  author: string;
  authorTitle: string;
  excerpt: string;
  sections: ArticleSection[];
  relatedSlugs: string[];
};

export const ARTICLES: Article[] = [
  // ─── Article 1 ───────────────────────────────────────────────────────────────
  {
    slug: 'dental-implants-kalispell-mt',
    title: 'Dental Implants in Kalispell, MT: What to Expect, What They Cost, and How to Choose the Right Dentist',
    description: 'A complete guide to dental implants in Kalispell, Montana. Learn what implants cost, how the process works, who is a candidate, and what to look for in a Flathead Valley implant dentist.',
    category: 'Dental Implants',
    categorySlug: 'implants',
    readTime: 7,
    date: '2026-03-10',
    author: 'Dr. Mark Vanzant, DMD',
    authorTitle: 'Owner & Lead Dentist, Summit Dental Group',
    excerpt: 'Dental implants are the gold standard for replacing missing teeth — but the process, the cost, and choosing the right provider can feel overwhelming. Here\'s what patients in Kalispell and the Flathead Valley need to know before making a decision.',
    sections: [
      {
        paragraphs: [
          'Dental implants are the gold standard for replacing one or more missing teeth, and that\'s been true for decades. But for most patients I see here in Kalispell, the questions they walk in with aren\'t about whether implants work — they already know they do. The questions are about cost, the process, how long it takes, and whether the investment is actually worth it for their specific situation.',
          'This article lays out honest, straightforward answers to all of those questions.',
        ],
      },
      {
        heading: 'What Exactly Is a Dental Implant?',
        paragraphs: [
          'A dental implant is a small titanium post — about the size of a wood screw — that is placed directly into the jawbone where a tooth root used to sit. Over three to four months, the bone grows around and fuses to the titanium in a process called osseointegration. Once that fusion is complete, a lifelike porcelain crown is attached to the top of the post.',
          'The result is a tooth replacement that looks, functions, and feels virtually identical to a natural tooth. You brush it normally. You floss it normally. You eat whatever you want. No adhesives, no removal at night, no special soaks. Just a tooth.',
          'Unlike a dental bridge — which requires grinding down the two adjacent healthy teeth to anchor it — an implant stands alone. It doesn\'t affect any surrounding teeth. And because the implant acts like a root, it stimulates the jawbone and prevents the bone loss that almost always follows tooth loss.',
        ],
      },
      {
        heading: 'Who Is a Good Candidate for Dental Implants?',
        paragraphs: [
          'Most healthy adults who are missing one or more teeth are candidates for dental implants. The key physical requirement is having enough healthy jawbone to support the implant post. Patients who have had a tooth missing for several years often experience some bone loss in that area — in many cases a bone graft can restore enough volume to proceed, and we assess this at the initial consultation.',
          'Medical conditions that significantly impair healing — uncontrolled diabetes, certain autoimmune disorders, active cancer treatment — can complicate implant success. Heavy smoking significantly increases the risk of implant failure and will come up in any honest pre-treatment conversation. We discuss all of this openly before you commit to anything.',
          'Age matters on the lower end, not the upper end. We typically wait until a younger patient\'s jawbone has fully developed (late teens to early 20s) before placing implants. There is no upper age limit — healthy patients in their 70s and 80s receive implants successfully every day.',
        ],
      },
      {
        heading: 'The Implant Process: Timeline and What to Expect',
        paragraphs: [
          'The full dental implant process typically takes three to six months from initial placement to final crown. Here\'s how it unfolds:',
          'Consultation and imaging: We take digital X-rays and in some cases a 3D cone beam CT scan to assess bone density and plan the exact placement. This is also when we talk through your health history and any questions you have.',
          'Implant placement: The titanium post is surgically placed into the jawbone under local anesthesia. Most patients are genuinely surprised by how manageable this procedure is. There is some soreness for a few days afterward, easily managed with over-the-counter pain relief.',
          'Healing phase (osseointegration): Over the following three to four months, the implant fuses with the surrounding bone. During this period you\'ll have a temporary restoration so you\'re never without a tooth.',
          'Crown placement: Once osseointegration is confirmed, your custom porcelain crown is attached. The crown is color-matched to your surrounding teeth. Most people have no idea you have an implant unless you tell them.',
        ],
      },
      {
        heading: 'What Do Dental Implants Cost in Kalispell, Montana?',
        paragraphs: [
          'This is the question everyone asks, and I\'ll give you the honest answer: a single dental implant in Kalispell — including the implant post, the abutment, and the crown — typically ranges from $3,500 to $5,500 depending on whether bone grafting or other preparatory work is needed.',
          'That\'s a real investment. But consider the alternative: a dental bridge requires altering perfectly healthy adjacent teeth and typically needs replacement every 10 to 15 years. An implant, with proper care, can last 25 to 30 years — often a lifetime.',
          'Dental insurance coverage for implants varies significantly by plan. Traditional dental insurance rarely covers the full cost, though some plans cover portions of the crown or bone grafting. At Summit Dental, we run a full insurance verification before your consultation so you know exactly what your out-of-pocket cost will be before you commit to anything. We also accept CareCredit, which offers interest-free financing periods that can make the monthly cost very manageable.',
        ],
      },
      {
        heading: 'How to Choose a Dental Implant Provider in Kalispell',
        paragraphs: [
          'Not every general dentist places implants. Some refer to oral surgeons for the surgical phase and handle the crown themselves. Others handle the full process in-house. At Summit Dental Group, I complete the entire implant process — placement through final crown — here in our Kalispell office. That continuity of care matters. The person who knows your bone, your bite, and your specific situation is the same person placing the post and designing the crown.',
          'When evaluating any implant provider, ask these three questions: How many implants have you personally placed? Do you handle the full process or refer for surgery? Can I see before-and-after cases similar to mine?',
          'If you\'re in the Flathead Valley and considering dental implants, I\'d encourage you to start with a consultation. We\'ll review your imaging, walk through your options, and give you a complete cost estimate before you decide anything. No pressure, no obligation — just information.',
        ],
      },
    ],
    relatedSlugs: ['emergency-dentist-kalispell', 'teeth-whitening-vs-veneers-kalispell'],
  },

  // ─── Article 2 ───────────────────────────────────────────────────────────────
  {
    slug: 'emergency-dentist-kalispell',
    title: 'Emergency Dentist in Kalispell, MT: What Counts as a Dental Emergency and What to Do Right Now',
    description: 'What counts as a dental emergency? What should you do before you can get to a Kalispell dentist? Summit Dental Group answers the most urgent questions so you can act fast.',
    category: 'Emergency Care',
    categorySlug: 'emergency',
    readTime: 5,
    date: '2026-03-14',
    author: 'Dr. Mark Vanzant, DMD',
    authorTitle: 'Owner & Lead Dentist, Summit Dental Group',
    excerpt: 'Dental emergencies don\'t follow a schedule. Knowing what counts as a true dental emergency — and what to do in the first 30 minutes — can be the difference between saving a tooth and losing one permanently.',
    sections: [
      {
        paragraphs: [
          'As a dentist in Kalispell, the calls I take most seriously are the ones that start with "I don\'t know if this is an emergency." The answer is almost always: if you\'re not sure, call. We\'d rather tell you over the phone that it can wait until tomorrow than have you suffer unnecessarily — or worse, wait when something genuinely needs same-day care.',
          'Let me walk through what counts as a dental emergency, what you should do before you can get into the chair, and how we handle emergency cases at Summit Dental Group.',
        ],
      },
      {
        heading: 'What Counts as a True Dental Emergency?',
        paragraphs: [
          'Severe, constant tooth pain — especially if it\'s throbbing, waking you up at night, or accompanied by sensitivity to heat — is almost always a sign of nerve involvement or infection. This needs to be evaluated promptly. Dental infections can spread and become serious quickly.',
          'A knocked-out permanent tooth is the most time-critical dental emergency that exists. You have roughly 30 to 60 minutes to get the tooth reimplanted before the chances of saving it drop dramatically. This is the situation where you call us while you\'re in motion.',
          'A cracked or broken tooth causing pain when biting or significant temperature sensitivity likely has a fracture that\'s affecting the nerve. If the break is jagged and cutting your cheek or tongue, that\'s urgent.',
          'A dental abscess — characterized by swelling in the jaw, cheek, or gum; a pimple-like bump on the gum; fever; or a bad taste in your mouth — is a bacterial infection and requires prompt treatment. Dental abscesses don\'t resolve on their own.',
          'Lost fillings or crowns that expose the underlying tooth and cause significant pain fall into the urgent category. A lost restoration without pain can usually wait until the next available appointment.',
        ],
      },
      {
        heading: 'What to Do Right Now — Before You Can Get Into the Chair',
        paragraphs: [
          'For a knocked-out tooth: Pick up the tooth by the crown — never by the root. Rinse it gently with clean water without scrubbing. If you can, gently reinsert it into the socket and bite down softly on gauze or a clean cloth to hold it. If reinsertion isn\'t possible, place the tooth in a small container of milk or keep it between your cheek and gum. Time is everything. Call (406) 752-4545 immediately.',
          'For severe pain: Over-the-counter ibuprofen (if you have no contraindications) is more effective than acetaminophen for dental pain because it reduces inflammation. A cold pack held against the outside of your cheek can help. Do not put aspirin directly on the gum — this is a common mistake that can cause tissue burns.',
          'For a cracked or broken tooth: Rinse your mouth gently with warm water. If there\'s bleeding, apply gentle pressure with a clean cloth. Avoid biting on anything hard on that side of your mouth. Call us.',
          'For swelling: Apply a cold pack to the outside of your cheek in 20-minute intervals. Swelling around the jaw or face from a dental abscess can escalate quickly — if you develop difficulty swallowing or breathing, go to the emergency room immediately. This is rare, but it happens.',
        ],
      },
      {
        heading: 'How Summit Dental Group Handles Dental Emergencies in Kalispell',
        paragraphs: [
          'We make every effort to see emergency patients the same day during our office hours, Tuesday through Friday, 8:00 AM to 5:00 PM. When you call (406) 752-4545 and tell us it\'s an emergency, we will triage your situation over the phone and get you in as quickly as possible.',
          'After hours, call the same number and leave a message. We check messages outside of office hours for urgent cases and will return your call as fast as we can. For anything life-threatening — difficulty breathing, severe uncontrolled bleeding, signs of a spreading infection — call 911 or go to Kalispell Regional Medical Center.',
          'If you\'re a patient who experiences dental anxiety, tell us when you call. We\'ll make sure your emergency visit includes time for you to feel settled, and we can discuss sedation options for any follow-up treatment.',
        ],
      },
      {
        heading: 'The Bottom Line',
        paragraphs: [
          'When in doubt, call. Dental problems almost always get more complicated — and more expensive — the longer they go untreated. A call to our office to describe your symptoms takes two minutes and can save you significant pain, time, and money.',
          'Summit Dental Group is located at 203 Business Center Loop, Suite C in Kalispell, MT. We serve patients throughout the Flathead Valley including Whitefish, Columbia Falls, and Bigfork.',
        ],
      },
    ],
    relatedSlugs: ['dental-implants-kalispell-mt', 'sedation-dentistry-anxiety-flathead-valley'],
  },

  // ─── Article 3 ───────────────────────────────────────────────────────────────
  {
    slug: 'tricare-dental-kalispell-mt',
    title: 'TRICARE Dental Benefits in Kalispell, MT: What Veterans and Military Families Need to Know',
    description: 'Does Summit Dental Group accept TRICARE? A complete guide to TRICARE dental benefits, what\'s covered, and how military families in the Flathead Valley can use their benefits at our Kalispell practice.',
    category: 'Veterans & Military',
    categorySlug: 'veterans',
    readTime: 6,
    date: '2026-03-19',
    author: 'Dr. Mark Vanzant, DMD',
    authorTitle: 'Owner & Lead Dentist, Summit Dental Group · USAF Veteran',
    excerpt: 'Military dental insurance is complicated. As a USAF veteran with three deployments and an active Montana Army National Guard member, I\'ve lived this complexity from both sides. Here\'s what Flathead Valley veterans and military families need to know about using TRICARE at Summit Dental.',
    sections: [
      {
        paragraphs: [
          'Military dental insurance is notoriously complicated. I know this from personal experience — I\'m a United States Air Force veteran, served three combat deployments overseas, and I continue to serve in the Montana Army National Guard. Before I was a dentist, I was a patient navigating the same system my military patients deal with today.',
          'Summit Dental Group accepts all TRICARE dental programs. But "we accept TRICARE" is only the beginning. The details of what\'s covered, what the cost-share looks like, and which specific plan you\'re on all matter significantly. Let me break this down clearly.',
        ],
      },
      {
        heading: 'The TRICARE Dental Plans We Accept in Kalispell',
        paragraphs: [
          'TRICARE Active Duty Dental Program (ADDP): This plan is for active duty service members and is administered through United Concordia. Coverage is typically very comprehensive — most preventive and basic restorative services are covered at 100%. There is typically no annual maximum.',
          'TRICARE Dental Program (TDP): This plan covers dependents of active duty members, and National Guard and Reserve members and their families when not activated. It is also administered through United Concordia. Coverage levels vary by service type (preventive vs. restorative vs. orthodontic) and there is an annual maximum.',
          'United Concordia (UCCI): We participate with United Concordia as a network provider, which covers both ADDP and TDP claims and generally reduces your out-of-pocket costs compared to going out of network.',
          'Department of Defense Military Plans: Other DOD-affiliated plans may also be accepted — call us with your plan information and we\'ll verify your benefits before your appointment.',
        ],
      },
      {
        heading: 'What TRICARE Dental Covers (and What It Doesn\'t)',
        paragraphs: [
          'Under most TRICARE dental plans, preventive care — routine cleanings, X-rays, exams — is covered at 100% with no cost-share. This is true for both active duty members and dependents on TDP.',
          'Basic restorative services (fillings, simple extractions) have a cost-share under TDP, typically 20%. Major restorative services like crowns, bridges, and root canals have a higher cost-share — often 40% to 50% — and come with an annual maximum.',
          'Dental implants are generally not covered under TRICARE dental plans unless the tooth loss was directly service-connected. If you believe your tooth loss is service-connected, work with the VA first — there may be a separate pathway for coverage.',
          'Cosmetic procedures — whitening, veneers for purely aesthetic reasons — are not covered under any TRICARE dental plan.',
          'Our front desk will run a full TRICARE benefits verification for you before your appointment so there are no surprises. We do this for every military patient.',
        ],
      },
      {
        heading: 'A Note About the Active Duty Dental Program vs. TDP',
        paragraphs: [
          'One source of significant confusion for military families is that active duty service members and their dependents are often on different dental plans. Active duty members are covered under ADDP and typically receive care through military treatment facilities (MTFs) first — civilian providers like Summit Dental are used when MTF care is unavailable. Dependents and non-activated Guard/Reserve members use TDP and can see any participating civilian dentist directly.',
          'If you\'ve PCS\'d to the Flathead Valley area and aren\'t sure which plan applies to you or your family, call us and we\'ll help you sort it out.',
        ],
      },
      {
        heading: 'Why Military Families Choose Summit Dental Group',
        paragraphs: [
          'We\'re not a franchise or corporate dental chain. We\'re a small, privately-owned, veteran-operated practice. When you call asking about your ADDP benefits, you\'re talking to a staff that handles these claims regularly — and a dentist who understands what it means to be a servicemember navigating a system that wasn\'t always designed to be simple.',
          'If you have questions about your TRICARE dental coverage in the Kalispell area, call us at (406) 752-4545 or request a new patient appointment. We\'ll verify your benefits before you set foot in the door.',
        ],
      },
    ],
    relatedSlugs: ['dental-implants-kalispell-mt', 'dental-insurance-benefits-end-of-year-montana'],
  },

  // ─── Article 4 ───────────────────────────────────────────────────────────────
  {
    slug: 'sedation-dentistry-anxiety-flathead-valley',
    title: 'Dental Anxiety and Sedation Dentistry in the Flathead Valley: You Don\'t Have to White-Knuckle It',
    description: 'Dental anxiety is common and completely valid. Summit Dental Group in Kalispell, MT offers nitrous oxide and oral conscious sedation. Here\'s what nervous patients need to know.',
    category: 'Sedation & Comfort',
    categorySlug: 'sedation',
    readTime: 6,
    date: '2026-03-21',
    author: 'Dr. Mark Vanzant, DMD',
    authorTitle: 'Owner & Lead Dentist, Summit Dental Group',
    excerpt: 'Somewhere between 30 and 40 million Americans avoid the dentist entirely because of fear. If you\'re one of them — or if you dread every appointment even when you show up — sedation dentistry is worth understanding. It\'s not just for phobias.',
    sections: [
      {
        paragraphs: [
          'Somewhere between 30 and 40 million Americans avoid the dentist entirely because of anxiety or fear. Some have had a difficult experience in the past. Some have a sensitive gag reflex that makes procedures unbearable. Some just find the sounds, the smells, and the lack of control deeply uncomfortable. I\'ve heard all of it — and none of it surprises me.',
          'At Summit Dental Group, when a patient mentions anxiety when they call, we make a note and we plan the appointment differently. Slower. More check-ins. More explanation before each step. And for patients who need more support than that, we have two sedation options that genuinely change the experience.',
        ],
      },
      {
        heading: 'The Two Sedation Options We Offer in Kalispell',
        paragraphs: [
          'Nitrous oxide (laughing gas): Nitrous is administered through a small mask placed over your nose. It takes effect within three to five minutes, producing a light, floaty sense of calm and mild euphoria. You remain completely conscious and can respond to instructions. The effects are completely reversed within minutes of removing the mask — you can drive yourself home afterward. Nitrous is appropriate for mild to moderate anxiety and for patients who want a light edge taken off without any recovery period.',
          'Oral conscious sedation: This involves taking a prescription sedative pill approximately one hour before your appointment. By the time you sit down in the chair, you\'ll be in a deep state of relaxation — still conscious, still able to respond to your name, but significantly less aware of your surroundings and what\'s happening. Most patients remember little to nothing of the procedure. You\'ll need someone to drive you to and from your appointment and shouldn\'t operate machinery for the rest of the day. Oral sedation is appropriate for moderate to severe anxiety, complex or lengthy procedures, or patients with a very sensitive gag reflex.',
        ],
      },
      {
        heading: 'Is Sedation Dentistry Safe?',
        paragraphs: [
          'Nitrous oxide and oral conscious sedation are both very well-established, extensively studied modalities that have been used safely in dental offices for decades. Neither involves general anesthesia — you are never fully unconscious.',
          'Before recommending any sedation option, I review your complete medical history and current medications. Some medications interact with oral sedatives. Some medical conditions require modification to the sedation protocol. This review is not a formality — I\'m making a clinical decision about what\'s right for you specifically.',
          'Patients sometimes ask whether sedation makes the dental work itself less effective or requires longer appointments. The answer is no on both counts. Sedation affects your subjective experience of the appointment, not the quality of the work.',
        ],
      },
      {
        heading: 'Who Benefits Most From Sedation Dentistry?',
        paragraphs: [
          'Sedation dentistry is not just for patients with severe phobias. The patients in our practice who most commonly use sedation include people who have had a negative previous dental experience, patients who have a strong gag reflex, patients who need multiple procedures completed efficiently, and patients who struggle to sit still for extended periods.',
          'We also use nitrous oxide routinely for patients undergoing longer procedures — implant placement, multiple extractions, extensive crown work — simply because it makes the experience more comfortable regardless of anxiety level.',
        ],
      },
      {
        heading: 'How to Ask for Sedation at Your Appointment',
        paragraphs: [
          'When you call to schedule, mention it. Tell us: "I\'m very anxious about dental appointments and I\'d like to discuss sedation options." That\'s all it takes. We\'ll make sure your appointment time accommodates the sedation protocol, answer any questions you have in advance, and send you home with written instructions for the day of the appointment.',
          'You shouldn\'t have to dread going to the dentist. If you do, let\'s fix that. Call us at (406) 752-4545 or request an appointment online. Summit Dental Group is located at 203 Business Center Loop, Suite C, Kalispell, MT.',
        ],
      },
    ],
    relatedSlugs: ['emergency-dentist-kalispell', 'dental-implants-kalispell-mt'],
  },

  // ─── Article 5 ───────────────────────────────────────────────────────────────
  {
    slug: 'teeth-whitening-vs-veneers-kalispell',
    title: 'Teeth Whitening vs. Veneers in Kalispell, MT: Which One Is Right for You?',
    description: 'Not sure whether you need teeth whitening or veneers? A Kalispell dentist explains the difference, who each is right for, and what to expect from each treatment option.',
    category: 'Cosmetic Dentistry',
    categorySlug: 'cosmetic',
    readTime: 5,
    date: '2026-03-24',
    author: 'Dr. Mark Vanzant, DMD',
    authorTitle: 'Owner & Lead Dentist, Summit Dental Group',
    excerpt: 'Both teeth whitening and veneers can dramatically improve how your smile looks — but they work differently, cost differently, and solve different problems. Here\'s how to know which option makes sense for you.',
    sections: [
      {
        paragraphs: [
          'The most common question I get from patients wanting a brighter or more even smile is: "Should I do whitening, or do I need veneers?" The answer depends on what you\'re specifically trying to fix — and being clear about that distinction up front will save you time, money, and disappointment.',
          'Here\'s the straightforward breakdown.',
        ],
      },
      {
        heading: 'What Teeth Whitening Actually Does',
        paragraphs: [
          'Professional teeth whitening uses a peroxide-based gel — at a higher concentration than any over-the-counter product — to break up staining compounds inside the enamel. The result is a lighter shade of your natural tooth color, typically four to eight shades brighter in a single in-office session.',
          'Whitening works extremely well for extrinsic staining — the kind caused by coffee, tea, red wine, tobacco, and food pigments. It is safe, effective, reversible (your teeth will gradually re-stain over time without maintenance), and relatively affordable.',
          'Whitening does not change the shape, size, or alignment of your teeth. It doesn\'t fix chips, cracks, or gaps. And it only works on natural tooth enamel — crowns, veneers, and composite fillings will not lighten with whitening gel.',
          'There is also a category of staining that whitening cannot address: intrinsic staining. This includes discoloration caused by certain antibiotics (particularly tetracycline taken in childhood), fluorosis (overexposure to fluoride during development), and tooth trauma. These stains are inside the tooth structure rather than on the surface, and peroxide cannot reach them effectively.',
        ],
      },
      {
        heading: 'What Veneers Actually Do',
        paragraphs: [
          'Porcelain veneers are ultra-thin shells of dental porcelain — typically 0.3 to 0.5 millimeters thick — that are permanently bonded to the front surfaces of your teeth. They are custom-fabricated to a specific color, shape, and size that you and your dentist design together.',
          'Veneers can address a much wider range of cosmetic concerns than whitening alone. They cover discoloration that won\'t respond to whitening. They can fix the appearance of chips, cracks, and small fractures. They can close minor gaps between teeth. They can make teeth appear more uniform in length and shape.',
          'The trade-off is that porcelain veneers are permanent. A small amount of enamel (usually less than a millimeter) must be removed from the front of each tooth to accommodate the veneer. Once that enamel is removed, the teeth will always require some form of coverage. Veneers are also significantly more expensive than whitening — typically $1,000 to $2,000 per tooth depending on the complexity and number of teeth.',
        ],
      },
      {
        heading: 'Which One Is Right for You? A Simple Framework',
        paragraphs: [
          'You are probably a good whitening candidate if: Your teeth are otherwise healthy and shapely, and your main concern is color. Your staining is from food, beverages, or tobacco (not antibiotics or fluorosis). You\'re looking for a more affordable option with minimal commitment.',
          'You are probably a better veneer candidate if: You have intrinsic staining that hasn\'t responded to whitening. You also want to address chips, cracks, shape, or size issues. You\'re looking for a longer-lasting, more comprehensive cosmetic result and are ready to commit.',
          'The honest answer is that many patients benefit from whitening first, then veneers on any teeth that didn\'t respond adequately or that have structural concerns beyond color. Sometimes whitening alone is the complete solution.',
          'At Summit Dental, I take a conservative approach to cosmetic dentistry: we start with the least invasive option that\'s likely to give you the result you want. We\'ll never push you toward a more extensive treatment if a simpler one will genuinely work.',
        ],
      },
      {
        heading: 'Book a Cosmetic Consultation in Kalispell',
        paragraphs: [
          'If you\'re not sure which direction makes sense for your smile, start with a consultation. We\'ll look at your teeth, talk through your goals, and give you an honest assessment of which treatment — or combination — will get you where you want to be. No pressure, no sales pitch.',
          'Call Summit Dental Group at (406) 752-4545 or request an appointment online. We\'re located at 203 Business Center Loop, Suite C, Kalispell, MT 59901.',
        ],
      },
    ],
    relatedSlugs: ['dental-implants-kalispell-mt', 'dental-insurance-benefits-end-of-year-montana'],
  },

  // ─── Article 6 ───────────────────────────────────────────────────────────────
  {
    slug: 'dental-insurance-benefits-end-of-year-montana',
    title: 'Don\'t Let Your Dental Benefits Expire: A Montana Patient\'s Guide to Using Insurance Before Year-End',
    description: 'Most dental insurance plans reset on January 1. Here\'s how Montana patients can make the most of their remaining dental benefits before the year-end deadline — and what to schedule now.',
    category: 'Insurance & Payment',
    categorySlug: 'insurance',
    readTime: 5,
    date: '2026-03-26',
    author: 'Dr. Mark Vanzant, DMD',
    authorTitle: 'Owner & Lead Dentist, Summit Dental Group',
    excerpt: 'If you have dental insurance and you haven\'t used your full annual benefits yet, you might be leaving hundreds of dollars on the table. Most plans reset on January 1 — here\'s how to make the most of what you\'ve already paid into.',
    sections: [
      {
        paragraphs: [
          'Every year, hundreds of millions of dollars in dental insurance benefits go unused simply because patients don\'t realize those benefits expire. Most dental insurance plans have an annual maximum — typically between $1,000 and $2,000 — that resets on January 1. Benefits that aren\'t used by December 31 are gone. They don\'t roll over. They don\'t accumulate.',
          'If you\'ve been putting off a filling, a crown, or even just your second cleaning of the year, now is the time to schedule it.',
        ],
      },
      {
        heading: 'How Dental Insurance Benefits Work in Montana',
        paragraphs: [
          'Most employer-sponsored and individually purchased dental insurance plans follow the same basic structure: an annual deductible (usually $50 to $100 that you pay before coverage kicks in), a coverage breakdown by type of service (preventive usually covered at 100%, basic restorative at 80%, major restorative at 50%), and an annual maximum (the most your insurance will pay in a calendar year).',
          'Because preventive care — cleanings, X-rays, and exams — is covered at 100% by most plans, there\'s essentially no financial reason to skip your twice-yearly cleaning. If you\'re due for your second cleaning before the year ends, schedule it now.',
          'For patients who have met their deductible earlier in the year, the last few months of the year are an ideal time to take care of any treatment your dentist has recommended but you\'ve been deferring. Your deductible work is done. Your annual maximum still applies. Get the filling. Get the crown.',
        ],
      },
      {
        heading: 'What Happens When Benefits Reset on January 1',
        paragraphs: [
          'When the calendar turns, your deductible resets. This means if you\'re planning treatment that crosses year-end — for example, a crown that requires two visits — it may be worth timing the first visit before year-end and the second visit after, strategically splitting the cost across two benefit years. We can help you plan this.',
          'Some plans have a waiting period for certain services that restarts with the year. If you\'re on a newer plan, check whether you\'re past the waiting period for major work before scheduling.',
        ],
      },
      {
        heading: 'Insurance Plans We Accept at Summit Dental Group in Kalispell',
        paragraphs: [
          'Summit Dental Group accepts most major dental insurance plans. We work with Delta Dental, Blue Cross Blue Shield, MetLife, Cigna, Aetna, United Concordia, and all TRICARE programs. We also have patients who use Medicaid-funded state programs.',
          'If you\'re not sure whether we accept your plan, call us at (406) 752-4545. We\'ll verify your benefits for free before your appointment and walk you through exactly what your plan covers and what your out-of-pocket responsibility will be. We do this for every new patient.',
        ],
      },
      {
        heading: 'What to Schedule Before Year-End',
        paragraphs: [
          'If you haven\'t had your second cleaning of the year, schedule it. If your dentist has recommended a filling, crown, or other treatment that you\'ve been deferring, now is the time while your deductible is already met. If you\'ve been curious about whitening or a cosmetic consultation, check whether your plan covers any portion of the evaluation.',
          'Appointment availability gets tight in November and December as patients rush to use their benefits. If you\'re reading this in the fall, don\'t wait. Call Summit Dental Group at (406) 752-4545 or request an appointment online. We\'ll work to get you in before your benefits reset.',
        ],
      },
    ],
    relatedSlugs: ['tricare-dental-kalispell-mt', 'teeth-whitening-vs-veneers-kalispell'],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find(a => a.slug === slug);
}

export function getRelatedArticles(slug: string): Article[] {
  const article = getArticleBySlug(slug);
  if (!article) return [];
  return article.relatedSlugs
    .map(s => getArticleBySlug(s))
    .filter((a): a is Article => a !== undefined);
}

export const CATEGORIES = [
  { label: 'All Posts', slug: 'all' },
  { label: 'Dental Implants', slug: 'implants' },
  { label: 'Emergency Care', slug: 'emergency' },
  { label: 'Veterans & Military', slug: 'veterans' },
  { label: 'Sedation & Comfort', slug: 'sedation' },
  { label: 'Cosmetic Dentistry', slug: 'cosmetic' },
  { label: 'Insurance & Payment', slug: 'insurance' },
];
